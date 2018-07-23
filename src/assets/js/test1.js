import Header from '../../views/common/header.vue';
import {Button} from 'iview';
export default {
    data(){
      return{
          
      }
    },
    methods:{
        getFun(){
          $.ajax({
              url:"/requires/selectAll",
              type: 'GET',
              success(d) {
                 console.log(d);
              },
              error(data) {
                  console.log(data);
              }
          });
        },
        addFun(){
            this.$store.commit('increment')
        },
        minusFun(){
            this.$store.commit('decrement')
        }
    },
    created(){
        console.log('pp');
        // this.getFun();
    },
    components:{
        Header,
        Button
      },
    computed:{
        count(){
            return this.$store.state.count
        },
       
    }
  }