var charge_event = require( '../../models' ).charge_event;
var moment = require( 'moment' );
moment().format();

exports.countNumberOfDaysWithoutData = function( firstDayWithCharge, nextDayWithCharge, kwh ) {
  var nulls = {};

  // first two parameters are moment objects at the end of their day
  var howManyDaysLater = nextDayWithCharge.diff( firstDayWithCharge, 'days' );
  var firstDay = firstDayWithCharge;

  // charge event on May 1
  // next charge event on May 5
  // 4 days later
  for ( var i = 1; i < howManyDaysLater; i++ ) {
    // create key like 5/2/2016 for May 2, 2016
    var dateKey = firstDay.add( 1, 'days' ).format( 'M/D/YYYY' );
    nulls[ dateKey ] = kwh;
  }

  return nulls;
};

exports.mergeObjects = function( masterObj, objToAdd ) {
  for ( var key in objToAdd ) {
    masterObj[ key ] = objToAdd[ key ];
  }

  return masterObj;
};

exports.kwhByDay = function( station ) {
  // SELECT *
  // FROM charge_events
  // WHERE station_id={ station.id } AND kwh<100 AND time_stop IS NOT NULL
  // ORDER BY time_start;
  var query = { where: { station_id: station.id, kwh: { $lt: 100 }, time_stop: { $ne: null } }, order: 'time_start', raw: true };

  var cumulativekWh = 0;
  var timeline = { location: station.location, kin: station.kin };

  // count the number of charge events
  // we don't want to do the expensive query if there's nothing to look for
  return charge_event.count( { where: { station_id: station.id } } )
  .then(function( numberOfCharges ) {
    if ( numberOfCharges > 0 ) {
      // find all of the charge events which are closed for a station, ordered by time_start
      return charge_event.findAll( query )
      .then(function( chargeEvents ) {
        // set the first day
        var currentDay = moment( chargeEvents[ 0 ].time_start ).endOf( 'day' );

        // add nulls for days we don't have data from May 16
        var nullDates = exports.countNumberOfDaysWithoutData( moment( '2015 05 15', 'YYYY MM DD' ).endOf( 'day' ), currentDay, null );
        timeline = exports.mergeObjects( timeline, nullDates );

        // loop over the charge events
        for ( var i = 0; i < chargeEvents.length; i++ ) {
          var chargeEvent = chargeEvents[ i ];
          var startTime = moment( chargeEvent.time_start );

          // if this charge event starts on a new day
          if ( startTime.isAfter( currentDay ) ) {
            // round kwh
            cumulativekWh = Number( cumulativekWh.toFixed( 1 ) );
            // add to timeline
            timeline[ currentDay.format( 'M/D/YYYY' ) ] = cumulativekWh;

            // account for days we have no charge events
            var nextDayWithCharges = startTime.endOf( 'day' );
            var daysMissing = exports.countNumberOfDaysWithoutData( currentDay, nextDayWithCharges, cumulativekWh );
            timeline = exports.mergeObjects( timeline, daysMissing );

            // set the new day
            currentDay = nextDayWithCharges;
          }

          // always add to cumulative
          cumulativekWh += Number( chargeEvent.kwh );
        }

        // don't forget the last day
        cumulativekWh = Number( cumulativekWh.toFixed( 1 ) );
        timeline[ currentDay.format( 'M/D/YYYY' ) ] = cumulativekWh;

        // add flatline until we get to today
        var daysUntilToday = exports.countNumberOfDaysWithoutData( currentDay, moment().add( 2, 'days'), cumulativekWh );
        timeline = exports.mergeObjects( timeline, daysUntilToday );
        return timeline;
      });
    } else {
      return null;
    }
  });
};