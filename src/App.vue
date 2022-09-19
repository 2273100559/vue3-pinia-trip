<template>
  <div class="app">
    <router-view />
    <!-- 底部导航 -->
    <tab-bar v-if="!route.meta.hideTabBar"></tab-bar>
  </div>
</template>
<script setup>
  import TabBar from '@/components/tab-bar/tab-bar.vue'
import { useRoute } from 'vue-router';
  const route = useRoute()
</script>
<style scoped>

</style>
