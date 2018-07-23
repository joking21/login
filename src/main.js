import Vue from 'vue'
import App from './App.vue'
import router from './routes.js'
import Vuex from 'vuex'
import 'iview/dist/styles/iview.css';
import './assets/css/base.css'
import './main.scss'
import store from './store/index'
Vue.use(Vuex);
Vue.config.debug = true;//开启错误提示

router.beforeEach((to, from, next) => {
  store.commit('changeName');
   if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (store.state.token) {  // 通过vuex state获取当前的token是否存在
          next();
        }else {
          next({
             path: '/login',
                //     query: {redirect:to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
           })
        }
     }else {
        next();
   }
  if(to.meta.loginIs){  //判断用户是否是在已登录的情况下，又直接连接到登录页面
    if(store.state.token){
      next({
        path: '/',
      })
    }else{
      next();
    }
  }
})
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})