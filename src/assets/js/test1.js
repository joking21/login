import TabHeader from '../../views/common/header.vue';
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
        TabHeader
      },
    computed:{
        count(){
            return this.$store.state.count
        },
       
    }
  }