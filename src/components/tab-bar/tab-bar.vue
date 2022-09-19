<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item,index) in tabData">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon>
            <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="">
            <img v-else :src="getAssetURL(item.imageActive)" alt="">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>
<script setup>
import tabData from '@/assets/data/tab-bar.js'
import { getAssetURL } from '@/utils/load_assets.js'
import { ref } from 'vue';

  const currentIndex = ref(0)
</script>
<style lang="less" scoped>
.tab-bar {
  height: 50px;
  img {
    height: 26px;
  }
}
</style>