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
      //计算属性
      computed:{
         //mapState是Vuex的辅助函数，可以把store中的数据映射到组件的计算属性中
         ...mapState(['search','weather']),
         //mapGetters是Vuex的辅助函数，可以把getters内的方法映射到组件的计算属性中
         ...mapGetters(['searchText'])
      },
      methods:{
        //mapMutations是Vuex的mutation的辅助函数,用于在组件中映射mutation内的方法，以便在组件内直接使用mutation里的方法
        ...mapMutations(['setSearch']),
        //mapActions是Vuex的actions的辅助函数,用于在组件中映射actions内的方法，以便在组件内直接使用actions里的方法
        ...mapActions(['getWeather']),
        //设置默认值
        setDefault(){
            this.setSearch('杭州')
            this.getWeather('杭州')
        }
      }
   }
</script>