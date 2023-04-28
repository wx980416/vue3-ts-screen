<template>
  <div
    ref="divRef"
    :style="{
      width: width,
      height: height,
    }"
  ></div>
</template>

<script setup lang="ts">
import { ref, defineProps, onMounted, watch } from 'vue';
import useEcharts from '@/hooks/useEcharts';
const props = withDefaults(
  defineProps<{
    width?: string;
    height?: string;
    echartsDatas: ChargingPileData[];
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

const setupEchart = (echartsDatas: ChargingPileData[]) => {
  if (!myCharts.value) {
    myCharts.value = useEcharts(divRef.value!);
  }
  let option = getOption(echartsDatas);
  myCharts.value.setOption(option);
};

const getOption = (echartsDatas: ChargingPileData[]) => {
  let colors = echartsDatas.map((item) => {
    return item.color;
  });

  let data = echartsDatas.map((item) => {
    return {
      value: item.value,
      name: item.name,
    };
  });

  let total = echartsDatas.reduce((a, b) => {
    return a + b.value * 1;
  }, 0);

  let option: echarts.EChartsOption = {
    color: colors,
    title: {
      text: `{nameSty| 充电桩总数}\n{number|${total}}`,
      top: '50%',
      left: '30%',
      textStyle: {
        rich: {
          nameSty: {
            fontSize: 19,
            color: 'white',
            padding: [10, 0],
          },
          number: {
            fontSize: 24,
            color: 'white',
            padding: [4, 0, 0, 20],
          },
        },
      },
    },
    legend: {
      orient: 'vertical',
      right: '10%',
      top: '18%',
      itemGap: 20,
      itemWidth: 16,
      itemHeight: 16,
      icon: 'rect',
      formatter: function (name: any) {
        const currentItem = echartsDatas.find((item) => item.name === name) as ChargingPileData;
        return (
          '{nameSty|' +
          currentItem.name +
          '}\n' +
          '{numberSty|' +
          currentItem.value +
          '个 }' +
          '{preSty|' +
          currentItem.percentage +
          '}'
        );
      },
      textStyle: {
        rich: {
          nameSty: {
            fontSize: 12,
            color: '#FFFFFF',
            padding: [10, 14],
          },
          numberSty: {
            fontSize: 12,
            color: '#40E6ff',
            padding: [0, 0, 0, 14],
          },
          preSty: {
            fontSize: 12,
            color: '#40E6ff',
          },
        },
      },
    },
    series: [
      {
        type: 'pie',
        center: ['40%', '57%'],
        radius: ['30%', '75%'],
        label: {
          show: false,
        },
        data: data,
        roseType: 'area',
      },
    ],
  };

  return option;
};
</script>

<style scoped></style>
