import * as echarts from 'echarts';
import { onUnmounted } from 'vue';

export default function useEcharts(divEl: HTMLElement): UseEcharts {
  const echartsInstance = echarts.init(divEl, { renderer: 'svg' });

  // 销毁实列
  onUnmounted(() => {
    echartsInstance.dispose();
  });

  // 设置数据
  const setOption = (option: echarts.EChartsOption) => {
    echartsInstance.setOption(option);
  };

  // 重置大小
  const resizeEcharts = () => {
    echartsInstance.resize();
  };

  return {
    echartsInstance,
    setOption,
    resizeEcharts,
  };
}
