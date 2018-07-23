<template>
    <div id="header">
        <div class="header" v-if="token">
            <!-- <span>您好：{{token}}</span>
            <Button type="warning" @click="loginOut()">退出</Button> -->
             <Dropdown>
                <a href="javascript:void(0)">
                    <span>您好：{{token}}</span>
                    <Icon  style="color:#ffffff" type="arrow-down-b"></Icon>
                </a>
                <Dropdown-menu slot="list">
                    <Dropdown-item>驴打滚</Dropdown-item>
                </Dropdown-menu>
            </Dropdown>
        </div>
        <div class="header" v-else>
            <Button type="warning">登录</Button>
        </div>
        <toobar-tab></toobar-tab>
    </div> 
</template>
<script>
  import ToobarTab from './toobar.vue'
  import {Button,Dropdown,DropdownMenu,DropdownItem,Icon} from 'iview';
  export default {
    name: 'header',
    components:{
        ToobarTab,
        Button,
        Dropdown,DropdownMenu,DropdownItem,
        Icon
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
