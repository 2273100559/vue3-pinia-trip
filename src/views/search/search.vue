<template>
  <div class="search-page">
    <div>
      <h1>开始时间：{{$route.query.startDate}}</h1>
      <h1>离开时间：{{$route.query.endDate}}</h1>
      <h1>城市：{{$route.query.currentCity}}</h1>
    </div>
  </div>
</template>
<script setup>

</script>
<style scoped>
h2 {
  background-color: red;
}
</style>