import { onMounted, onUnmounted } from 'vue';
import _ from 'lodash';

export function useScalePage(option: ScaleOption) {
  // 节流函数
  const resizeFunc = _.throttle(() => {
    triggerScale();
  }, 100);

  onMounted(() => {
    triggerScale();
    window.addEventListener('resize', resizeFunc);
  });
  onUnmounted(() => {
    window.removeEventListener('resize', resizeFunc);
  });

  // 大屏的适配
  function triggerScale() {
    // 1.设计稿的尺寸
    let targetX = option.targetX || 1920;
    let targetY = option.targetY || 1080;
    let targetRatio = option.targetRatio || 16 / 9; // 宽高比率

    // 2.拿到当前设备(浏览器)的宽度
    let currentX = document.documentElement.clientWidth || document.body.clientWidth;
    let currentY = document.documentElement.clientHeight || document.body.clientHeight;

    // 3.计算缩放比例
    let scaleRatio = currentX / targetX; // 参照宽度进行缩放 ( 默认情况 )
    let currentRatio = currentX / currentY; // 宽高比率

    if (currentRatio > targetRatio) {
      // 4.如果当前设备的宽高比率大于设计稿的宽高比率,那么就以高度为参照进行缩放，并且居中显示
      scaleRatio = currentY / targetY; // 参照高度进行缩放
      document.body.style.cssText = `width:${targetX}px; height:${targetY}px; transform: scale(${scaleRatio}) translateX(-50%); left: 50%`;
    } else {
      // 4.开始缩放网页
      document.body.style.cssText = `width:${targetX}px; height:${targetY}px; transform: scale(${scaleRatio})`;
    }
  }
}
