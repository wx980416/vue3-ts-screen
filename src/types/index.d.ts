declare type ScaleOptions = {
  targetX: number;
  targetY: number;
  targetRatio: number;
};

declare type UseEcharts = {
  echartsInstance: echarts.ECharts;
  setOption: (option: echarts.EChartsOption) => void;
  resizeEcharts: () => void;
};
