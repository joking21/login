<template>
    <div id="header">
        <div class="header">
            <span>您好：{{token}}</span>
            <Button type="warning" @click="loginOut()">退出</Button>
        </div>
        <toobar-tab></toobar-tab>
    </div> 
</template>
<script>
  import ToobarTab from './toobar.vue'
  import {Button} from 'iview';
  export default {
    name: 'header',
    components:{
        ToobarTab,
        Button,
    },
    methods:{
        loginOut(){
            sessionStorage.removeItem('token');
            this.$store.commit('changeName');
            location.href='/login';
        }
    },
    computed:{
        token(){
            return this.$store.state.token
        },
    }
}
</script>
