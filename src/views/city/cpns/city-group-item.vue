<template>
  <div class="city-group">
    <van-index-bar highlight-color="#ff9854" :sticky="false" :index-list="indexList">
      <van-index-anchor index="热门"/>

      <div class="list">
        <template v-for="(city,index) in groupData.hotCities" :key="index">
          <div class="city" @click="cityClick(city)">{{city.cityName}}</div>
        </template>
      </div>

      <template v-for="(group,index) in groupData.cities" :key="index">
        <van-index-anchor :index="group.group"/>
        <template v-for="(item, index2) in group.cities" :key="index2">
          <van-cell :title="item.cityName" @click="cityClick(item)"/>
        </template>
      </template>
    </van-index-bar>
  </div>

  <!-- <template v-for="(group,index) in groupData.cities" :key="index">
        <div class="group-item">
          <h2 class="title">标题：{{group.group}}</h2> -->
  <!-- <h2 class="title">标题：{{group.cities}}</h2> -->
  <!-- <div class="list">
            <template v-for="(item, index2) in group.cities" :key="index2">
              <div class="city">{{item.cityName}}</div>
            </template>
          </div>
        </div>
      </template> -->
</template>
<script setup>
import useCityStore from '@/store/modules/city';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})

const indexList = computed(()=>{
  const list = props.groupData.cities.map(item => item.group)
  list.unshift('#')
  return list 
})

const router = useRouter()
const cityStore = useCityStore()
// * 城市页面的回显
const cityClick = (city) =>{
  // console.log(city);
  cityStore.currentCity = city
  router.back()
}
</script>
<style lang="less" scoped>
  .list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 14px;
    padding: 10px;
    padding-right: 15px;
    .city {
      width: 58px;
      height: 24px;
      line-height: 24px;
      border-radius: 12px;
      background-color: #fff4ec;
      text-align: center;
      margin: 8px 4px;
    }
  }
</style>