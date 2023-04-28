<template>
  <div>
    <router-view />
  </div>
</template>
<script setup lang="ts">
import { useScalePage } from '@/hooks/useScalePage';

let option: ScaleOption = {
  targetX: 1920,
  targetY: 1080,
  targetRatio: 16 / 9,
};

useScalePage(option);
</script>

<style scoped></style>
