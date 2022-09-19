<template>
  <div class="city top-page-hide">
    <div class="top">
      <!-- 搜索 -->
      <van-search 
      v-model="searchValue" 
      placeholder="城市/区域/位置" 
      shape="round" 
      show-action @cancel="cancelClick" 
      />
      <!-- tab栏切换 -->
      <van-tabs v-model:active="tavActive" color="#ff9854">
        <template v-for="(value,key,index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <!-- 城市展示 -->
    <div class="container">
      <template v-for="(value,key,index) in allCities">
        <city-group-item v-show="tavActive === key" :group-data="value"></city-group-item>
      </template>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { computed } from '@vue/reactivity';
import useCityStore from '@/store/modules/city';
import cityGroupItem from './cpns/city-group-item.vue';

// * 搜索框
const searchValue = ref("")
const router = useRouter()
const cancelClick = () => {
  router.back()
}

// * 标签页 
const tavActive = ref()

// * 发送网络请求 获取数据
const cityStore = useCityStore()
cityStore.axiosAllCitiesData()
const { allCities } = storeToRefs(cityStore)
// * 获取数据其中的一组数据展示
// * 1.获取正确的key
// * 2.将tavActive.value找到
const currentGroup = computed(()=> allCities.value[tavActive.value])

</script>
<style lang="less" scoped>
  .top {
    position: relative;
    z-index: 9;
  }
  .container {
    height: calc(100vh - 90px);
    overflow-y: auto;
  }
</style>