<template>
  <div class="screen-bg">
    <!-- 头部 -->
    <div class="header"></div>

    <!-- 左侧 -->
    <div class="left-top">
      <pie-charts :echartsDatas="chargingPile"></pie-charts>
    </div>
    <div class="left-bottom">
      <line-echarts :echartsDatas="processMonitoring"></line-echarts>
    </div>

    <!-- 右侧 -->
    <div class="right-top"></div>
    <div class="right-center"></div>
    <div class="right-bottom"></div>

    <!-- 中间 -->
    <div class="center"></div>

    <!-- 底部 -->
    <div class="bottom"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  chargingPileData,
  processMonitoringData,
  chargingStatisticsData,
  exceptionMonitoringData,
  dataAnalysisData,
  chargingTop4Data,
} from './data/home-data';
import PieCharts from '@/components/pie-echarts.vue';
import LineEcharts from '@/components/line-echarts.vue';

// 充电桩饱和比例
let chargingPile = ref(chargingPileData);
// 流程监控
let processMonitoring = ref(processMonitoringData);
// 充电桩数据分析
let chargingStatistics = ref(chargingStatisticsData);
// 异常监控
let exceptionMonitoring = ref(exceptionMonitoringData);
// 充电桩数据分析
let dataAnalysis = ref(dataAnalysisData);
// 充电桩Top4占比
let chargingTop4 = ref(chargingTop4Data);
</script>

<style scoped lang="scss">
.screen-bg {
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: #070a3c;
  background-image: url(@/assets/images/bg.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.header {
  /* 定位 */
  position: absolute;
  top: 21px;
  left: 0;
  right: 0;
  height: 56px;

  /* 背景 */
  background-image: url(@/assets/images/bg_header.svg);
  background-repeat: no-repeat;
}

.left-top {
  /* 定位 */
  position: absolute;
  top: 116px;
  left: 16px;
  width: 536px;
  height: 443px;
  /* 背景 */
  background-image: url(@/assets/images/bg_left-top.svg);
  background-repeat: no-repeat;
}

.left-bottom {
  /* 定位 */
  position: absolute;
  bottom: 49px;
  left: 16px;
  width: 536px;
  height: 443px;
  /* 背景 */
  background-image: url(@/assets/images/bg_left_bottom.svg);
  background-repeat: no-repeat;
}

.right-top {
  position: absolute;
  right: 17px;
  top: 96px;
  width: 519px;
  height: 327px;

  background-image: url(../assets/images/bg_right_top.svg);
  background-repeat: no-repeat;
}
.right-center {
  position: absolute;
  right: 17px;
  top: 443px;
  width: 519px;
  height: 327px;

  background-image: url(../assets/images/bg_right_center.svg);
  background-repeat: no-repeat;
}
.right-bottom {
  position: absolute;
  right: 17px;
  bottom: 49px;
  width: 519px;
  height: 242px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(../assets/images/bg_right_bottom.svg);
  background-repeat: no-repeat;
}

.center {
  position: absolute;
  right: 540px;
  bottom: 272px;
  width: 823px;
  height: 710px;

  /* border: 5px solid pink; */
}

.bottom {
  position: absolute;
  right: 540px;
  bottom: 49px;
  width: 823px;
  height: 209px;

  background-image: url(../assets/images/bg_bottom.svg);
  background-repeat: no-repeat;
}
</style>
