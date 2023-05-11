<template>
  <div>
    <router-view />
  </div>
</template>
<script setup lang="ts">
import useScalePage from '@/hooks/useScalePage';

// 适配参数
const option: ScaleOptions = {
  targetX: 1920,
  targetY: 1080,
  targetRatio: 16 / 9,
};

// 大屏适配
useScalePage(option);
</script>

<style scoped></style>
