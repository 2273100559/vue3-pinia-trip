<template>
  <div class="categories">
    <template v-for="(item, index) in categories" :key="item.id">
      <div class="cate-item">
        <img :src="item.pictureUrl" alt="">
        <div class="text">{{item.title}}</div>
      </div>
    </template>
  </div>
</template>
<script setup>
import useHomeStore from '@/store/modules/home';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()
const {categories} = storeToRefs (homeStore)
</script>
<style lang="less" scoped>
  .categories {
    padding: 14px 0;
    display: flex;
    overflow-x: auto;
    &::-webkit-scrollbar{
      display: none;
    }
    // justify-content: space-around;
    .cate-item {
      width: 70px;
      display: flex;
      flex-shrink: 0;
      flex-direction: column;
      align-items: center;
      img {
        width: 32px;
        height: 32px;
      }
      .text {
        padding: 4px 0;
        font-size: 12px;
      }
    }
  }
</style>