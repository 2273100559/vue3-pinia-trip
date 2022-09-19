<template>
  <div class="content">
    <h1>热门推荐</h1>
    <div class="content-list">
      <template v-for="(item,index) in homeList" :key="item.data.houseId">
        <h3></h3>
      </template>
    </div>
  </div>
</template>
<script setup>
import useHomeStore from '@/store/modules/home';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()
const {homeList} = storeToRefs (homeStore)
</script>
<style lang="less" scoped>
  .content {
    padding: 10px 10px;
    h1 {
      padding-left: 10px;
    }
    .content-list {
      padding-top: 10px;
      font-size: 12px;
    }
  }
</style>