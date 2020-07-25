import Vue from 'vue'
import Vuex from './min-vuex'
import Antd from "ant-design-vue"
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    count:0,
  },
  mutations:{
    increment(state){
      state.count ++
    }
  },
  // actions:{
  //   increment({commit}){
  //     setTimeout(()=>{
  //       commit('increment')
  //     },3000)
  //   }
  // },
  // getters:{
  //   doubleCount(state){
  //     return state.count * 2
  //   }
  // }
})
Vue.prototype.$store = store

new Vue({
  //store,
  render: h => h(App),
}).$mount('#app')
