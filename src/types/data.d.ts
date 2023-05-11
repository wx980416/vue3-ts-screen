declare type ChargingPileData = {
  value: number;
  name: string;
  percentage: string;
  color: string;
};

declare type ProcessMonitoringData = {
  name: string;
  data: number[];
};

declare type ChargingStatisticsData = {
  name: string;
  value: number;
};

declare type ExceptionMonitoringData = {
  id: number;
  name: string;
  value: number;
  dur: string;
  begin: string;
};

declare type DataAnalysisData = {
  id: number;
  title: string;
  totalNum: number;
  unit: string;
  percentage: number;
  isUp: boolean;
};

declare type ChargingTop4Data = {
  id: number;
  name: string;
  percentage: string;
};
