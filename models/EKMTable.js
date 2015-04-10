module.exports = function( sequelize, DataTypes ) {
  var EKMmeter = sequelize.define('EKMmeter', {
    id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
      }, 
    "Start_Time_Stamp_UTC_ms": DataTypes.DATE,
    "End_Time_Stamp_UTC_ms": DataTypes.DATE,
    "Start_Date": DataTypes.DATE,
    "End_Date": DataTypes.DATE,
    "Meter": DataTypes.STRING,
    "Protocol": DataTypes.STRING,
    "Count": DataTypes.INTEGER,
    "kWh_Tot_DeltaMin": DataTypes.DECIMAL,
    "kWh_Tot_DeltaMax": DataTypes.DECIMAL,
    "kWh_Tot_Min": DataTypes.DECIMAL,
    "kWh_Tot_Max": DataTypes.DECIMAL,
    "kWh_Tot_Diff": DataTypes.DECIMAL,
    "kWh_Tariff_1_DeltaMin": DataTypes.DECIMAL,
    "kWh_Tariff_1_DeltaMax": DataTypes.DECIMAL,
    "kWh_Tariff_1_Min": DataTypes.DECIMAL,
    "kWh_Tariff_1_Max": DataTypes.DECIMAL,
    "kWh_Tariff_1_Diff": DataTypes.DECIMAL,
    "kWh_Tariff_2_DeltaMin": DataTypes.DECIMAL,
    "kWh_Tariff_2_DeltaMax": DataTypes.DECIMAL,
    "kWh_Tariff_2_Min": DataTypes.DECIMAL,
    "kWh_Tariff_2_Max": DataTypes.DECIMAL,
    "kWh_Tariff_2_Diff": DataTypes.DECIMAL,
    "kWh_Tariff_3_DeltaMin": DataTypes.DECIMAL,
    "kWh_Tariff_3_DeltaMax": DataTypes.DECIMAL,
    "kWh_Tariff_3_Min": DataTypes.DECIMAL,
    "kWh_Tariff_3_Max": DataTypes.DECIMAL,
    "kWh_Tariff_3_Diff": DataTypes.DECIMAL,
    "kWh_Tariff_4_DeltaMin": DataTypes.DECIMAL,
    "kWh_Tariff_4_DeltaMax": DataTypes.DECIMAL,
    "kWh_Tariff_4_Min": DataTypes.DECIMAL,
    "kWh_Tariff_4_Max": DataTypes.DECIMAL,
    "kWh_Tariff_4_Diff": DataTypes.DECIMAL,
    "Rev_kWh_Tot_DeltaMin": DataTypes.DECIMAL,
    "Rev_kWh_Tot_DeltaMax": DataTypes.DECIMAL,
    "Rev_kWh_Tot_Min": DataTypes.DECIMAL,
    "Rev_kWh_Tot_Max": DataTypes.DECIMAL,
    "Rev_kWh_Tot_Diff": DataTypes.DECIMAL,
    "Rev_kWh_Tariff_1_DeltaMin": DataTypes.DECIMAL,
    "Rev_kWh_Tariff_1_DeltaMax": DataTypes.DECIMAL,
    "Rev_kWh_Tariff_1_Min": DataTypes.DECIMAL,
    "Rev_kWh_Tariff_1_Max": DataTypes.DECIMAL,
    "Rev_kWh_Tariff_1_Diff": DataTypes.DECIMAL,
    "Rev_kWh_Tariff_2_DeltaMin": DataTypes.DECIMAL,
    "Rev_kWh_Tariff_2_DeltaMax": DataTypes.DECIMAL,
    "Rev_kWh_Tariff_2_Min": DataTypes.DECIMAL,
    "Rev_kWh_Tariff_2_Max": DataTypes.DECIMAL,
    "Rev_kWh_Tariff_2_Diff": DataTypes.DECIMAL,
    "Rev_kWh_Tariff_3_DeltaMin": DataTypes.DECIMAL,
    "Rev_kWh_Tariff_3_DeltaMax": DataTypes.DECIMAL,
    "Rev_kWh_Tariff_3_Min": DataTypes.DECIMAL,
    "Rev_kWh_Tariff_3_Max": DataTypes.DECIMAL,
    "Rev_kWh_Tariff_3_Diff": DataTypes.DECIMAL,
    "Rev_kWh_Tariff_4_DeltaMin": DataTypes.DECIMAL,
    "Rev_kWh_Tariff_4_DeltaMax": DataTypes.DECIMAL,
    "Rev_kWh_Tariff_4_Min": DataTypes.DECIMAL,
    "Rev_kWh_Tariff_4_Max": DataTypes.DECIMAL,
    "Rev_kWh_Tariff_4_Diff": DataTypes.DECIMAL,
    "RMS_Volts_Ln_1_Last": DataTypes.DECIMAL,
    "RMS_Volts_Ln_1_Average": DataTypes.DECIMAL,
    "RMS_Volts_Ln_1_StdDev": DataTypes.DECIMAL,
    "RMS_Volts_Ln_1_DeltaMin": DataTypes.DECIMAL,
    "RMS_Volts_Ln_1_DeltaMax": DataTypes.DECIMAL,
    "RMS_Volts_Ln_1_Min": DataTypes.DECIMAL,
    "RMS_Volts_Ln_1_Max": DataTypes.DECIMAL,
    "RMS_Volts_Ln_1_MinTime": DataTypes.DATE,
    "RMS_Volts_Ln_1_MaxTime": DataTypes.DATE,
    "RMS_Volts_Ln_2_Last": DataTypes.DECIMAL,
    "RMS_Volts_Ln_2_Average": DataTypes.DECIMAL,
    "RMS_Volts_Ln_2_StdDev": DataTypes.DECIMAL,
    "RMS_Volts_Ln_2_DeltaMin": DataTypes.DECIMAL,
    "RMS_Volts_Ln_2_DeltaMax": DataTypes.DECIMAL,
    "RMS_Volts_Ln_2_Min": DataTypes.DECIMAL,
    "RMS_Volts_Ln_2_Max": DataTypes.DECIMAL,
    "RMS_Volts_Ln_2_MinTime": DataTypes.DATE,
    "RMS_Volts_Ln_2_MaxTime": DataTypes.DATE,
    "RMS_Volts_Ln_3_Last": DataTypes.DECIMAL,
    "RMS_Volts_Ln_3_Average": DataTypes.DECIMAL,
    "RMS_Volts_Ln_3_StdDev": DataTypes.DECIMAL,
    "RMS_Volts_Ln_3_DeltaMin": DataTypes.DECIMAL,
    "RMS_Volts_Ln_3_DeltaMax": DataTypes.DECIMAL,
    "RMS_Volts_Ln_3_Min": DataTypes.DECIMAL,
    "RMS_Volts_Ln_3_Max": DataTypes.DECIMAL,
    "RMS_Volts_Ln_3_MinTime": DataTypes.DECIMAL,
    "RMS_Volts_Ln_3_MaxTime": DataTypes.DECIMAL,
    "Amps_Ln_1_Last": DataTypes.DECIMAL,
    "Amps_Ln_1_Average": DataTypes.DECIMAL,
    "Amps_Ln_1_StdDev": DataTypes.DECIMAL,
    "Amps_Ln_1_DeltaMin": DataTypes.DECIMAL,
    "Amps_Ln_1_DeltaMax": DataTypes.DECIMAL,
    "Amps_Ln_1_Min": DataTypes.DECIMAL,
    "Amps_Ln_1_Max": DataTypes.DECIMAL,
    "Amps_Ln_1_MinTime": DataTypes.DATE,
    "Amps_Ln_1_MaxTime": DataTypes.DATE,
    "Amps_Ln_2_Last": DataTypes.DECIMAL,
    "Amps_Ln_2_Average": DataTypes.DECIMAL,
    "Amps_Ln_2_StdDev": DataTypes.DECIMAL,
    "Amps_Ln_2_DeltaMin": DataTypes.DECIMAL,
    "Amps_Ln_2_DeltaMax": DataTypes.DECIMAL,
    "Amps_Ln_2_Min": DataTypes.DECIMAL,
    "Amps_Ln_2_Max": DataTypes.DECIMAL,
    "Amps_Ln_2_MinTime": DataTypes.DATE,
    "Amps_Ln_2_MaxTime": DataTypes.DATE,
    "Amps_Ln_3_Last": DataTypes.DECIMAL,
    "Amps_Ln_3_Average": DataTypes.DECIMAL,
    "Amps_Ln_3_StdDev": DataTypes.DECIMAL,
    "Amps_Ln_3_DeltaMin": DataTypes.DECIMAL,
    "Amps_Ln_3_DeltaMax": DataTypes.DECIMAL,
    "Amps_Ln_3_Min": DataTypes.DECIMAL,
    "Amps_Ln_3_Max": DataTypes.DECIMAL,
    "Amps_Ln_3_MinTime": DataTypes.DECIMAL,
    "Amps_Ln_3_MaxTime": DataTypes.DECIMAL,
    "RMS_Watts_Ln_1_Last": DataTypes.DECIMAL,
    "RMS_Watts_Ln_1_Average": DataTypes.DECIMAL,
    "RMS_Watts_Ln_1_StdDev": DataTypes.DECIMAL,
    "RMS_Watts_Ln_1_DeltaMin": DataTypes.DECIMAL,
    "RMS_Watts_Ln_1_DeltaMax": DataTypes.DECIMAL,
    "RMS_Watts_Ln_1_Min": DataTypes.DECIMAL,
    "RMS_Watts_Ln_1_Max": DataTypes.DECIMAL,
    "RMS_Watts_Ln_1_MinTime": DataTypes.DATE,
    "RMS_Watts_Ln_1_MaxTime": DataTypes.DATE,
    "RMS_Watts_Ln_2_Last": DataTypes.DECIMAL,
    "RMS_Watts_Ln_2_Average": DataTypes.DECIMAL,
    "RMS_Watts_Ln_2_StdDev": DataTypes.DECIMAL,
    "RMS_Watts_Ln_2_DeltaMin": DataTypes.DECIMAL,
    "RMS_Watts_Ln_2_DeltaMax": DataTypes.DECIMAL,
    "RMS_Watts_Ln_2_Min": DataTypes.DECIMAL,
    "RMS_Watts_Ln_2_Max": DataTypes.DECIMAL,
    "RMS_Watts_Ln_2_MinTime": DataTypes.DATE,
    "RMS_Watts_Ln_2_MaxTime": DataTypes.DATE,
    "RMS_Watts_Ln_3_Last": DataTypes.DECIMAL,
    "RMS_Watts_Ln_3_Average": DataTypes.DECIMAL,
    "RMS_Watts_Ln_3_StdDev": DataTypes.DECIMAL,
    "RMS_Watts_Ln_3_DeltaMin": DataTypes.DECIMAL,
    "RMS_Watts_Ln_3_DeltaMax": DataTypes.DECIMAL,
    "RMS_Watts_Ln_3_Min": DataTypes.DECIMAL,
    "RMS_Watts_Ln_3_Max": DataTypes.DECIMAL,
    "RMS_Watts_Ln_3_MinTime": DataTypes.DECIMAL,
    "RMS_Watts_Ln_3_MaxTime": DataTypes.DECIMAL,
    "RMS_Watts_Tot_Last": DataTypes.DECIMAL,
    "RMS_Watts_Tot_Average": DataTypes.DECIMAL,
    "RMS_Watts_Tot_StdDev": DataTypes.DECIMAL,
    "RMS_Watts_Tot_DeltaMin": DataTypes.DECIMAL,
    "RMS_Watts_Tot_DeltaMax": DataTypes.DECIMAL,
    "RMS_Watts_Tot_Min": DataTypes.DECIMAL,
    "RMS_Watts_Tot_Max": DataTypes.DECIMAL,
    "RMS_Watts_Tot_MinTime": DataTypes.DATE,
    "RMS_Watts_Tot_MaxTime": DataTypes.DATE,
    "Power_Factor_Ln_1_Last": DataTypes.STRING,
    "Power_Factor_Ln_1_Average": DataTypes.STRING,
    "Power_Factor_Ln_1_StdDev": DataTypes.DECIMAL,
    "Power_Factor_Ln_1_DeltaMin": DataTypes.DECIMAL,
    "Power_Factor_Ln_1_DeltaMax": DataTypes.DECIMAL,
    "Power_Factor_Ln_1_MaxTime": DataTypes.DATE,
    "Power_Factor_Ln_2_Last": DataTypes.STRING,
    "Power_Factor_Ln_2_Average": DataTypes.STRING,
    "Power_Factor_Ln_2_StdDev": DataTypes.DECIMAL,
    "Power_Factor_Ln_2_DeltaMin": DataTypes.DECIMAL,
    "Power_Factor_Ln_2_DeltaMax": DataTypes.DECIMAL,
    "Power_Factor_Ln_2_MaxTime": DataTypes.DATE,
    "Power_Factor_Ln_3_Last": DataTypes.STRING,
    "Power_Factor_Ln_3_Average": DataTypes.STRING,
    "Power_Factor_Ln_3_StdDev": DataTypes.DECIMAL,
    "Power_Factor_Ln_3_DeltaMin": DataTypes.DECIMAL,
    "Power_Factor_Ln_3_DeltaMax": DataTypes.DECIMAL,
    "Power_Factor_Ln_3_MaxTime": DataTypes.DATE,
    "RMS_Watts_Max_Demand_Last": DataTypes.DECIMAL,
    "RMS_Watts_Max_Demand_DeltaMin": DataTypes.DECIMAL,
    "RMS_Watts_Max_Demand_DeltaMax": DataTypes.DECIMAL,
    "RMS_Watts_Max_Demand_Min": DataTypes.DECIMAL,
    "RMS_Watts_Max_Demand_Max": DataTypes.DECIMAL,
    "RMS_Watts_Max_Demand_MinTime": DataTypes.DATE,
    "RMS_Watts_Max_Demand_MaxTime": DataTypes.DATE,
    "RMS_Watts_Max_Demand_Diff": DataTypes.DECIMAL,
    "CT_Ratio_Last": DataTypes.DECIMAL,
    "CT_Ratio_Average": DataTypes.DECIMAL,
    "CT_Ratio_Diff": DataTypes.DECIMAL,
    "Pulse_Cnt_1_Last": DataTypes.DECIMAL,
    "Pulse_Cnt_1_Average": DataTypes.DECIMAL,
    "Pulse_Cnt_1_StdDev": DataTypes.DECIMAL,
    "Pulse_Cnt_1_DeltaMin": DataTypes.DECIMAL,
    "Pulse_Cnt_1_DeltaMax": DataTypes.DECIMAL,
    "Pulse_Cnt_1_Max": DataTypes.DECIMAL,
    "Pulse_Cnt_1_Diff": DataTypes.DECIMAL,
    "Pulse_Cnt_2_Last": DataTypes.DECIMAL,
    "Pulse_Cnt_2_Average": DataTypes.DECIMAL,
    "Pulse_Cnt_2_StdDev": DataTypes.DECIMAL,
    "Pulse_Cnt_2_DeltaMin": DataTypes.DECIMAL,
    "Pulse_Cnt_2_DeltaMax": DataTypes.DECIMAL,
    "Pulse_Cnt_2_Max": DataTypes.DECIMAL,
    "Pulse_Cnt_2_Diff": DataTypes.DECIMAL,
    "Pulse_Cnt_3_Last": DataTypes.DECIMAL,
    "Pulse_Cnt_3_Average": DataTypes.DECIMAL,
    "Pulse_Cnt_3_StdDev": DataTypes.DECIMAL,
    "Pulse_Cnt_3_DeltaMin": DataTypes.DECIMAL,
    "Pulse_Cnt_3_DeltaMax": DataTypes.DECIMAL,
    "Pulse_Cnt_3_Max": DataTypes.DECIMAL,
    "Pulse_Cnt_3_Diff": DataTypes.DECIMAL,
    "Pulse_Ratio_1_Last": DataTypes.DECIMAL,
    "Pulse_Ratio_1_Average": DataTypes.DECIMAL,
    "Pulse_Ratio_1_Diff": DataTypes.DECIMAL,
    "Pulse_Ratio_2_Last": DataTypes.DECIMAL,
    "Pulse_Ratio_2_Average": DataTypes.DECIMAL,
    "Pulse_Ratio_2_Diff": DataTypes.DECIMAL,
    "Pulse_Ratio_3_Last": DataTypes.DECIMAL,
    "Pulse_Ratio_3_Average": DataTypes.DECIMAL,
    "Pulse_Ratio_3_Diff": DataTypes.DECIMAL,
    "Reactive_Energy_Tot_Last": DataTypes.DECIMAL,
    "Reactive_Energy_Tot_DeltaMin": DataTypes.DECIMAL,
    "Reactive_Energy_Tot_DeltaMax": DataTypes.DECIMAL,
    "Reactive_Energy_Tot_Min": DataTypes.DECIMAL,
    "Reactive_Energy_Tot_Max": DataTypes.DECIMAL,
    "Reactive_Energy_Tot_MaxTime": DataTypes.DATE,
    "Reactive_Energy_Tot_Diff": DataTypes.DECIMAL,
    "kWh_Rst_DeltaMin": DataTypes.DECIMAL,
    "kWh_Rst_DeltaMax": DataTypes.DECIMAL,
    "kWh_Rst_Min": DataTypes.DECIMAL,
    "kWh_Rst_Max": DataTypes.DECIMAL,
    "kWh_Rst_Diff": DataTypes.DECIMAL,
    "Rev_kWh_Rst_DeltaMin": DataTypes.DECIMAL,
    "Rev_kWh_Rst_DeltaMax": DataTypes.DECIMAL,
    "Rev_kWh_Rst_Min": DataTypes.DECIMAL,
    "Rev_kWh_Rst_Max": DataTypes.DECIMAL,
    "Rev_kWh_Rst_Diff": DataTypes.DECIMAL,
    "Reactive_Pwr_Ln_1_Last": DataTypes.DECIMAL,
    "Reactive_Pwr_Ln_1_Average": DataTypes.DECIMAL,
    "Reactive_Pwr_Ln_1_StdDev": DataTypes.DECIMAL,
    "Reactive_Pwr_Ln_1_DeltaMin": DataTypes.DECIMAL,
    "Reactive_Pwr_Ln_1_DeltaMax": DataTypes.DECIMAL,
    "Reactive_Pwr_Ln_1_Min": DataTypes.DECIMAL,
    "Reactive_Pwr_Ln_1_Max": DataTypes.DECIMAL,
    "Reactive_Pwr_Ln_1_MaxTime": DataTypes.DATE,
    "Reactive_Pwr_Ln_2_Last": DataTypes.DECIMAL,
    "Reactive_Pwr_Ln_2_Average": DataTypes.DECIMAL,
    "Reactive_Pwr_Ln_2_StdDev": DataTypes.DECIMAL,
    "Reactive_Pwr_Ln_2_DeltaMin": DataTypes.DECIMAL,
    "Reactive_Pwr_Ln_2_DeltaMax": DataTypes.DECIMAL,
    "Reactive_Pwr_Ln_2_Min": DataTypes.DECIMAL,
    "Reactive_Pwr_Ln_2_Max": DataTypes.DECIMAL,
    "Reactive_Pwr_Ln_2_MaxTime": DataTypes.DATE,
    "Reactive_Pwr_Ln_3_Last": DataTypes.DECIMAL,
    "Reactive_Pwr_Ln_3_Average": DataTypes.DECIMAL,
    "Reactive_Pwr_Ln_3_StdDev": DataTypes.DECIMAL,
    "Reactive_Pwr_Ln_3_DeltaMin": DataTypes.DECIMAL,
    "Reactive_Pwr_Ln_3_DeltaMax": DataTypes.DECIMAL,
    "Reactive_Pwr_Ln_3_Min": DataTypes.DECIMAL,
    "Reactive_Pwr_Ln_3_Max": DataTypes.DECIMAL,
    "Reactive_Pwr_Ln_3_MaxTime": DataTypes.DECIMAL,
    "Reactive_Pwr_Tot_Last": DataTypes.DECIMAL,
    "Reactive_Pwr_Tot_Average": DataTypes.DECIMAL,
    "Reactive_Pwr_Tot_StdDev": DataTypes.DECIMAL,
    "Reactive_Pwr_Tot_DeltaMin": DataTypes.DECIMAL,
    "Reactive_Pwr_Tot_DeltaMax": DataTypes.DECIMAL,
    "Reactive_Pwr_Tot_Min": DataTypes.DECIMAL,
    "Reactive_Pwr_Tot_Max": DataTypes.DECIMAL,
    "Reactive_Pwr_Tot_MaxTime": DataTypes.DATE,
    "Line_Freq_Last": DataTypes.DECIMAL,
    "Line_Freq_Average": DataTypes.DECIMAL,
    "Line_Freq_StdDev": DataTypes.DECIMAL,
    "Line_Freq_DeltaMin": DataTypes.DECIMAL,
    "Line_Freq_DeltaMax": DataTypes.DECIMAL,
    "Line_Freq_Min": DataTypes.DECIMAL,
    "Line_Freq_Max": DataTypes.DECIMAL,
    "Line_Freq_MinTime": DataTypes.DATE,
    "Line_Freq_MaxTime": DataTypes.DATE,
    "kWh_Ln_1_DeltaMin": DataTypes.DECIMAL,
    "kWh_Ln_1_DeltaMax": DataTypes.DECIMAL,
    "kWh_Ln_1_Min": DataTypes.DECIMAL,
    "kWh_Ln_1_Max": DataTypes.DECIMAL,
    "kWh_Ln_1_Diff": DataTypes.DECIMAL,
    "kWh_Ln_2_DeltaMin": DataTypes.DECIMAL,
    "kWh_Ln_2_DeltaMax": DataTypes.DECIMAL,
    "kWh_Ln_2_Min": DataTypes.DECIMAL,
    "kWh_Ln_2_Max": DataTypes.DECIMAL,
    "kWh_Ln_2_Diff": DataTypes.DECIMAL,
    "kWh_Ln_3_DeltaMin": DataTypes.DECIMAL,
    "kWh_Ln_3_DeltaMax": DataTypes.DECIMAL,
    "kWh_Ln_3_Min": DataTypes.DECIMAL,
    "kWh_Ln_3_Max": DataTypes.DECIMAL,
    "kWh_Ln_3_Diff": DataTypes.DECIMAL,
    "Rev_kWh_Ln_1_DeltaMin": DataTypes.DECIMAL,
    "Rev_kWh_Ln_1_DeltaMax": DataTypes.DECIMAL,
    "Rev_kWh_Ln_1_Min": DataTypes.DECIMAL,
    "Rev_kWh_Ln_1_Max": DataTypes.DECIMAL,
    "Rev_kWh_Ln_1_Diff": DataTypes.DECIMAL,
    "Rev_kWh_Ln_2_DeltaMin": DataTypes.DECIMAL,
    "Rev_kWh_Ln_2_DeltaMax": DataTypes.DECIMAL,
    "Rev_kWh_Ln_2_Min": DataTypes.DECIMAL,
    "Rev_kWh_Ln_2_Max": DataTypes.DECIMAL,
    "Rev_kWh_Ln_2_Diff": DataTypes.DECIMAL,
    "Rev_kWh_Ln_3_DeltaMin": DataTypes.DECIMAL,
    "Rev_kWh_Ln_3_DeltaMax": DataTypes.DECIMAL,
    "Rev_kWh_Ln_3_Min": DataTypes.DECIMAL,
    "Rev_kWh_Ln_3_Max": DataTypes.DECIMAL,
    "Rev_kWh_Ln_3_Diff": DataTypes.DECIMAL,
    "Max_Demand_Rst_Last": DataTypes.DECIMAL,
    "Max_Demand_Rst_MaxTime": DataTypes.DECIMAL,
    "Max_Demand_Rst_Diff": DataTypes.DECIMAL,
    "CF_Ratio_Last": DataTypes.DECIMAL,
    "CF_Ratio_Average": DataTypes.DECIMAL,
    "CF_Ratio_Diff": DataTypes.DECIMAL,
    "Power_Factor_Ln_1_RangeFrom": DataTypes.STRING,
    "Power_Factor_Ln_1_RangeTo": DataTypes.STRING,
    "Power_Factor_Ln_2_RangeFrom": DataTypes.STRING,
    "Power_Factor_Ln_2_RangeTo": DataTypes.STRING,
    "Power_Factor_Ln_3_RangeFrom": DataTypes.STRING,
    "Power_Factor_Ln_3_RangeTo": DataTypes.STRING
  });

  return EKMmeter;
};

