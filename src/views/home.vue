<template>
<div>
    <tab-header></tab-header>
    <div class="tempList">
        <ol>
            <li v-for="todo in todos">
                {{ todo.text }}
            </li>
        </ol>
        <button @click="eClick()">事件</button>
    </div>
</div>
</template>

<script>
import TabHeader from './common/header.vue';
export default {
  name: 'indexP',
  data () {
    return {
       todos: [
          { text: 'Learn JavaScript' },
          { text: 'Learn Vue' },
          { text: 'Build something awesome' }
        ]
    }
  },
  methods:{
    eClick(){
        console.log(9999);
    }
  },
  components:{
      TabHeader,
  }
}
</script>