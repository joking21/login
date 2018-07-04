import Vue from 'vue';
import Router from 'vue-router';
import homePage from './views/home.vue'
import aboutPage from './views/about.vue'
import test1 from './views/test1.vue'
import login from './views/login.vue'
Vue.use(Router)

export default new Router({
    mode:'history', //去掉浏览器上面的#
    routes:[
        {
            path:'/',
            component:homePage
        },
        {
            path:'/about',
            component:aboutPage
        },
        {
            path:'/test1',
            component:test1,
            meta:{
                requireAuth:true
            }
        },
        {
             path:'/login',
            component:login,
        }
    ]
})