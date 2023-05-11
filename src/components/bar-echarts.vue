<template>
  <div ref="divRef" :style="{ width: width, height: height }"></div>
</template>

<script setup lang="ts">
import { onMounted, watch, ref } from 'vue';
import useEcharts from '@/hooks/useEcharts';

const props = withDefaults(
  defineProps<{
    width?: string;
    height?: string;
    echartsDatas: ChargingStatisticsData[];
  }>(),
  {
    width: '100%',
    height: '100%',
  },
);

let divRef = ref<HTMLDivElement | null>(null);
let myCharts = ref<UseEcharts | null>(null);

watch(
  () => props.echartsDatas,
  (newValue) => {
    setupEchart(newValue); // 更新走这里
  },
  {
    deep: true,
  },
);

onMounted(() => {
  setupEchart(props.echartsDatas); // 第一次走这里
});

const setupEchart = (echartsDatas: ChargingStatisticsData[]) => {
  if (!myCharts.value) {
    myCharts.value = useEcharts(divRef.value!);
  }
  let option = getOption(echartsDatas);
  myCharts.value.setOption(option);
};

const getOption = (echartsDatas: ChargingStatisticsData[]) => {
  const category = echartsDatas.map((item) => {
    return item.name;
  });
  const categoryData = echartsDatas.map((item) => {
    return item.value;
  });
  let option: echarts.EChartsOption = {
    grid: {
      left: '5%',
      right: '5%',
      top: '30%',
      bottom: '5%',
      containLabel: true, // grid 区域是否包含坐标轴的刻度标签
    },
    tooltip: {},
    xAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: '#42A4FF',
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: 'white',
      },

      data: category,
    },
    yAxis: {
      name: '个',
      nameTextStyle: {
        color: 'white',
        fontSize: 13,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#42A4FF',
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#42A4FF',
        },
      },
      axisLabel: {
        color: 'white',
      },
    },
    series: [
      {
        name: '销量',
        type: 'bar',
        barWidth: 17,
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#01B1FF', // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#033BFF', // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
        data: categoryData,
      },
    ],
  };
  return option;
};
</script>

<style lang="less" scoped></style>
