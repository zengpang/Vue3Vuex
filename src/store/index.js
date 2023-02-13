import { createStore } from "vuex";


export default createStore({
    //定义state，它是单一状态树————用一个对象就包含了全部的应用层级状态，主要作用是保存状态
    state:{
        search:'',
        weather:{}
    },
    //定义getters，作用是用于访问state(状态)
    getters:{
        searchText(state){
            return state.search+'市'
        }
    },
    //定义mutations，作用是用于更改state(状态)
    mutations:{
        setWeather(state,weather)
        {
            state.weather=weather;
        },
        setSearch(state,search)
        {
            state.search=search;
        }
    },
    //定义actions，actions中可以通过提交mutations，来修改state(状态),并且由于actions可以包含异步操作，所以一般异步请求都在actions中发起
    actions:{
       async getWeather({commit,state},city)
       {
          //发起异步请求
          //let res=await fetch('链接'+state.search);
          //let ret=await res.json();

          let testfeelslike=(Math.random()*10).toFixed(1);
          let testWeatherText='天晴';
          let testwindclass=(Math.random()*5).toFixed(1);
          let weatherInfo={text:testWeatherText,feels_like:testfeelslike,wind_class:testwindclass}
          //提交mutations
          commit('setWeather',weatherInfo)
       }
    }
})
