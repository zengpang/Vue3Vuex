<template>
    <input type="text" :value="$store.state.search" @change="onChange">
</template>
<script>
  export default{
    methods:{
        onChange(e){
            //提交mutation，以此修改状态
            this.$store.commit('setSearch',e.target.value);
            
            this.$store.dispatch('getWeather',e.target.value);
        }
    }
  }
</script>