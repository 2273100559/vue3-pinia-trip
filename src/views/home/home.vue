<template>
  <div class="home">
    <home-nav-bar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search-box />
    <home-categories />
    <home-content />
    <button @click="onMoreList">加载更多</button>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import HomeNavBar from './cpns/home-nav-bar.vue'
import HomeSearchBox from './cpns/home-search-box.vue'
import homeCategories from './cpns/home-categories.vue';
import useHomeStore from '@/store/modules/home';
import homeContent from './cpns/home-content.vue';
// * 发送网络请求热门建议

// const hotSuggests = ref([])
// GFRequest.get({
//   url:'/home/hotSuggests'
// }).then((res)=>{
//   hotSuggests.value = res.data
// })
const homeStore = useHomeStore()
homeStore.fetchHotSuggestsData()
homeStore.fetchCategoriesData()
homeStore.fetchHomeListData()

const onMoreList = () =>{
  console.log('加载更多');
  homeStore.fetchHomeListData()
}
</script>
<style lang="less" scoped>
.banner {
  img {
    width: 100%;
  }
}
</style>