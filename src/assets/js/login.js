export default {
    data(){
      return{
          name:'',
          pass:'',
      }
    },
    methods:{
       submitFun(){
           const $this = this;
           sessionStorage.setItem("token", $this.name);
           $this.$store.commit('changeName');
           location.href='/';
        // $.ajax({
        //     url:"/requires/selectPass?name="+$this.name,
        //     type: 'GET',
        //     success(d) {
        //        console.log(d);
        //         if(d.length!=0 && $this.pass == d[0].pass){
        //             console.log(11);
        //             sessionStorage.setItem("token", $this.name);
        //             $this.$store.commit('changeName');
        //             location.href='/';
                   
        //         }
        //     },
        //     error(data) {
        //         console.log(data);
        //     }
        // });
       }
    },
  }