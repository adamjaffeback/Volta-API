var station = require( '../../models').station;
var plug = require( '../../models').plug;
var charge_event = require( '../../models').charge_event;
var express = require( 'express' );
var async     = require( 'async' );
var Q = require( 'q' );
var env = process.env.NODE_ENV || 'development';
var config    = require( '../../config/config' )[ env ];
var apiRequest = require('../../factories/ekmFactory.js').makeGetRequestToApi;
var geocoder = require( 'node-geocoder' )( 'google', 'https', { apiKey: config.googleApiKey, formatter: null } );
var greatCircleDistance = require( '../../factories/distanceFactory.js' ).getDistanceFromLatLonInMiles;

module.exports = exports = {
  getBrokenPlugs: function ( req, res ) {
    var broken = [];
    // find all the plugs where there is an omnimeter and the meter status is error
    plug.findAll( { where: { meter_status: 'error', ekm_omnimeter_serial: { $ne: null } } } )
    .then(function( plugs ) {
      //for each one of the plugs
      async.each(plugs, function( plug, cb ) {
        var data = {
          kin: null,
          location: null,
          location_address: null,
          network: null,
          ekm_omnimeter_serial: plug.ekm_omnimeter_serial,
          ekm_push_mac: null,
          number_on_station: plug.number_on_station,
          ekm_url: 'http://io.ekmpush.com/readMeter/'
        };
        // get the station
        station.find( { where: { id: plug.station_id } } )
        .then(function( stationAssociatedWithPlug ) {
          data.kin = stationAssociatedWithPlug.kin;
          data.location = stationAssociatedWithPlug.location;
          data.location_address = stationAssociatedWithPlug.location_address;
          data.network = stationAssociatedWithPlug.network;
          data.ekm_push_mac = stationAssociatedWithPlug.ekm_push_mac;

          if( plug.ekm_omnimeter_serial.match( /3[0]{1}[0-9]{7}|3[0]{2}[0-9]{6}|3[0]{3}[0-9]{5}|3[0]{4}[0-9]{4}|3[0]{5}[0-9]{3}|3[0]{6}[0-9]{2}|3[0]{7}[0-9]{1}|3[0]{8}/ ) ) {
            //version 4
            data.ekm_url += 'v4';
          } else {
            //version 3
            data.ekm_url += 'v3';
          }
          data.ekm_url += '/key/' + config.ekmApiKey + '/count/10/format/html/meters/' + plug.ekm_omnimeter_serial;
          broken.push( data );
          cb( null );
        })
        .catch(function( error ) {
          cb( error );
        });
      }, function( error ) {
        if ( error ) {
          throw Error( error );
        } else {
          broken.sort(function( a, b ) {
            if ( a.kin.toLowerCase() < b.kin.toLowerCase() ) {
              return -1;
            } else {
              return 1;
            }
          });
          res.send( broken );
        }
      });
    })
    .catch(function( error ) {
      res.status( 500 ).send( error );
    });
  },
  getStationsWithoutCoordinates: function( req, res ) {
    station.findAll( { where: { location_gps: null }, order: 'kin ASC' } )
    .then(function( stations ) {
      res.send( stations );
    })
    .catch(function( error ) {
      res.status( 500 ).send( error );
    });
  },
  getMismatchedStationCoordinates: function( req, res ) {
    var mismatched = [];
    // get all the stations
    station.findAll( { where: { location_gps: { $ne: null } } } )
    .then(function( stationsWithCoordinates ) {
      var addressCache = {
        // address: [ coordinates ]
      };

      var time = 0;
      // go through all of the stations
      async.each( stationsWithCoordinates, function( station, cb ) {
        // check if we've cached the GPS coordinates for that station
        if ( addressCache[ station.location_address ] === undefined ) {
          // check the station's geocode against the saved coordinates on the model
          // use geocoder service
          time += 1000;
          setTimeout(function() {
            geocoder.geocode( station.location_address )
            .then(function( gpx ) {
              // add to cache
              addressCache[ station.location_address ] = [ gpx[ 0 ].latitude, gpx[ 0 ].longitude ];
              cb( null );
            })
            .catch(function( error ) {
              cb( error );
            });
          }, time);
        } else {
          cb( null );
        }
      }, function( error ) {
        // end of each loop
        if ( error ) {
          throw error;
        } else {
          // loop over address cache
          for ( var i = 0; i < stationsWithCoordinates.length; i++ ) {
            var station = stationsWithCoordinates[ i ];
            // check the station's geocode against the saved coordinates on the model
            if ( greatCircleDistance( addressCache[ station.location_address ], station.location_gps ) > 1 ) {
              mismatched.push( station );
            }
          }

          res.send( mismatched );
        }
      });
    })
    .catch(function( error ) {
      res.status( 500 ).send( error );
    });
  },
  getOneStationAnalytics: function (req, res) {
    var returnData = {
      kin: null,
      location: null,
      address: null,
      offset: 0,
      gallons: 0,
      trees: 0,
      miles: 0,
      lifetimeKilowatts: '',
      firstChargeEvent: '',
      totalChargeEventDays: '',
      totalChargeEvents: '',
      averageChargeEventsPerDay: '',
      medianChargeEventsPerDay: '',
      averageDurationOfEvent: '',
      medianDurationOfEvent: '',
      message: ''
    };

    // request has kin
    // search stations for kin
    station.findOne( { where: { kin: req.url.substring( 5 ) } } )
    .then(function( station ) {
      if ( typeof station === 'object' && station.dataValues ) {
        // there is data to get
        if ( station.cumulative_kwh ) {
          // SELECT SUM( kwh ) FROM charge_events WHERE station_id = station.id AND deleted_at IS NULL AND time_stop IS NOT NULL;
          return charge_event.count( { where: { station_id: station.id } } );
        } else {
          res.send( 'Unfortunately this station has no metrics :(' );
        }
      } else {
        res.status( 404 ).send();
      }
    })
    .then(function( count ) {
      returnData.chargeCount = count;

      return station.getPlugs();
    })
    .then(function( plugs ) {
      var kwh = 0;
      if ( Array.isArray( plugs ) && plugs.length > 0 ) {
        async.each(plugs, function ( plug, cb ) {
          apiRequest("http://io.ekmpush.com/readMeter/v3/key/" + config.ekmApiKey + "/count/1/format/json/meters/" + plug.ekm_omnimeter_serial)
          .then(function( data ) {
            khw += data.readMeter.ReadSet[ 0 ].ReadData[ 0 ].kWh_Tot;
            cb(null);
          })
          .catch(function( error ) {
            cb(error);
          })
        }, function (error) {
          if ( error ) {
            throw error;
          } else {
            // based off of calculations from the EPA
            // http://www.epa.gov/cleanenergy/energy-resources/calculator.html
            returnData.offset = Math.round( 10 * ( kwh * 1.52 ) ) / 10;
            returnData.gallons = Math.round( 10 * ( kwh * 0.0766666 ) ) / 10;
            returnData.trees = Math.round( kwh * 0.01766666 );
            // Avg. Nissan Leaf from http://insideevs.com/long-term-nissan-leaf-mileageusage-review-once-around-the-sun/
            returnData.miles = Math.round( 10 * ( kwh * 5.44 ) ) / 10;
            res.send( returnData );
          }
        })
      } else {
        res.status( 404 ).send();
      }
    })
    .catch(function( error ) {
      res.status( 500 ).send(error);
    });
  }
};

















