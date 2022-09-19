import { defineStore } from "pinia";
import { getHomeHostSuggests,getHomeCategories,getHomeList } from "@/service";
getHomeHostSuggests
// import GFRequest from '@/service/request/index'
const useHomeStore = defineStore('home',{
  state:()=>({
    hotSuggests: [],
    categories:[],
    homeList: [],
    currentPage: 1
  }),
  actions: {
    async fetchHotSuggestsData() {
      const res = await getHomeHostSuggests()
      this.hotSuggests = res.data 
    },
    async fetchCategoriesData() {
      const res = await getHomeCategories()
      this.categories = res.data
      // console.log(res);
    },
    async fetchHomeListData() {
      const res = await getHomeList(this.currentPage++)
      console.log(res);
      this.homeList.push(...res.data)
    }
  }
})

export default useHomeStore