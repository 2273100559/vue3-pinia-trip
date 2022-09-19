import { getCityAll } from '@/service'
import { defineStore } from 'pinia'

const useCityStore = defineStore("city",{
  state:()=>({
    allCities:{},
    currentCity: { cityName:'广州'}
  }),
  actions: {
    async axiosAllCitiesData() {
      const res = await getCityAll()
      this.allCities = res.data
    }
  }
})

export default useCityStore