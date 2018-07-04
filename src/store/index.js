import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    count:0,
    token:'',
  },
  mutations:{
    increment:state => state.count ++,
    decrement:state => state.count --,
    changeName(state){
      state.token = sessionStorage.getItem('token');
    }
  }
})