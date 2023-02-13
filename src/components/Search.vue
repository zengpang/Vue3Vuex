<template>
    <input type="text" :value="$store.state.search" @change="onChange">
</template>
<script>
  export default{
    methods:{
        onChange(e){
            //使用commit函数提交mutation，以此修改状态
            this.$store.commit('setSearch',e.target.value);
            //使用dispatch函数异步提交mutation，以此获取状态
            this.$store.dispatch('getWeather',e.target.value);
        }
    }
  }
</script>