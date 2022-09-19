<template>
  <div class="search-box">
    <!-- 位置信息 -->
  <div class="location">
    <div class="city" @click="cityClick">{{currentCity.cityName}}</div>
    <div class="position">
      <span class="text" @click="getLocation">我的位置</span>
      <img src="@/assets/img/home/location.png" alt="">
    </div>
  </div>
  <!-- 日期范围 -->
  <div class="date-box" @click="showCalendar = true">
    <div class="start">
      <span class="text">入住</span>
      <span>{{startDate}}</span>
    </div>
    <div class="night">共{{ stayCount }}晚</div>
    <div class="end">
      <span class="text">离店</span>
      <span>{{endDate}}</span>
    </div>
  </div>
  <van-calendar 
    v-model:show="showCalendar" 
    type="range" 
    color="#ff9854"
    :round="false"
    :show-confirm="false"
    @confirm="onConfirm"
      />
  </div>
  <!-- 价格 -->
  <div class="price-box">
    <div class="prices">
      <span class="money">价格不限</span>
      <span class="info">关键字/位置/民宿名</span>
    </div>
    <div class="person">人数不限</div>
  </div>
  <div class="hotCity">
    <template v-for="(item,index) in hotSuggests" :key="index">
      <div 
      class="item" 
      :style="{color: item.tagText.color ,background: item.tagText.background.color}">
      {{item.tagText.text}}
    </div>
    </template>
  </div>
  <!-- 搜索按钮 -->
  <div class="search-btn" @click="searchClick">
    <div class="button">开始搜索</div>
  </div>
</template>
<script setup>
import useCityStore from '@/store/modules/city';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import  useHomeStore from '@/store/modules/home'
import { getMonthDay, getDiffDays } from '@/utils/format_date';

// defineProps({
//   hotSuggests: {
//     type: Array,
//     default: () => []
//   }
// })
// * 热门建议
const homeStore = useHomeStore()
const {hotSuggests} = storeToRefs(homeStore)
const router = useRouter()

const cityClick = () =>{
    // console.log('click');
    router.push('/city')
  }


// const getLocation = () =>{
//   navigator.geolocation.getCurrentPosition(res =>{
//     console.log('获取到位置:',res);
//   },err =>{
//     console.log('位置信息获取错误',err);
//   })
// }

// * 当前城市
const cityStore = useCityStore()
const {currentCity} = storeToRefs(cityStore)

// * 日期范围处理
const nowDate = new Date()
const newDate = new Date()
newDate.setDate(nowDate.getDate() + 1)
const startDate = ref(getMonthDay(nowDate))
const endDate = ref(getMonthDay(newDate))

const showCalendar = ref(false)
const onConfirm = (value) =>{
  const selectStartDate = value[0]
  const selectEndDate = value[1]
  startDate.value = getMonthDay(selectStartDate)
  endDate.value = getMonthDay(selectEndDate)
  stayCount.value = getDiffDays(selectStartDate,selectEndDate)
  showCalendar.value = false
  }

// * 天数
const stayCount = ref(getDiffDays(nowDate,newDate))

  // * 搜索页面跳转
  const searchClick = () =>{
  router.push({
    path: '/search',
    query: {
      startDate: startDate.value,
      endDate: endDate.value,
      currentCity: currentCity.value.cityName
    }
  })
}
</script>
<style lang="less" scoped>
  .search-box{
    --van-calendar-popup-height: 100%;
    .location {
    margin-top: 16px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    .city {
        flex: 1;
    }
    .position {
        width: 74px;
        .text {
          font-size: 12px;
        }
        img{
          margin-left: 4px;
          width: 18px;
          height: 18px;
        }
    }
  }
    .date-box {
      display: flex;
      justify-content: space-around;
      height: 40px;
      margin-top: 18px;
      .start {
        display: flex;
        flex-direction: column;
      }
      .end {
        display: flex;
        flex-direction: column;
      }
      .text {
        color: #999;
        font-size: 12px;
      }
      .night {
        font-size: 14px;
      }
    }
  }
  .price-box {
    padding: 0 32px;
    display: flex;
    justify-content: space-between;
    color: #999;
    .prices {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      .money {
        padding-bottom: 24px;
      }
    }
    .person {
      margin-top: 10px;
    }
  }
  .hotCity {
    display: flex;
    flex-wrap: wrap;
    padding: 18px 10px;
    .item {
      padding:4px 8px;
      margin: 4px 5px;
      font-size: 12px;
      border-radius: 14px;
      line-height: 1;
    }
  }
  .search-btn {
    display: flex;
    justify-content: center;
    padding: 4px 10px;
    .button {
      width: 345px;
      height: 40px;
      background-image: var(--image-linear);
      border-radius: 22px;
      line-height: 2;
      font-size: 20px;
      font-weight: 600;
      text-align: center;
      color: #fff;
    }
  }
</style>