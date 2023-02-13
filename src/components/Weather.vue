<template>
   <div class="weather">
      <h2>{{searchText}}天气详情</h2>
      <p>天气{{weather.text}}</p>
      <p>体感温度{{weather.feels_like}}</p>
      <p>风力{{weather.wind_class}}</p>
      <button @click="setDefault">杭州天气</button>
   </div>
</template>
<script>
   import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
   export default{
      computed:{
         ...mapState(['search','weather']),
         ...mapGetters(['searchText'])
      },
      methods:{
        ...mapMutations(['setSearch']),
        ...mapActions(['getWeather']),
        //设置默认值
        setDefault(){
            this.setSearch('杭州')
            this.getWeather('杭州')
        }
      }
   }
</script>