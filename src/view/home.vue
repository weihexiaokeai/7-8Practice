<template>
    <div>
          <div class="page"  >
              <my-list
                v-for="(item,index) in list" :key="index"
                :item="item"
              ></my-list>
           
          </div>
             <my-footer></my-footer>
    </div>
</template>
<script>
import myFooter from '../components/footer'
import myList from '../components/list'
import axios from 'axios'
export default {
    props:{

    },
    components:{
        myFooter,
        myList
    },
    data(){
        return {
                list:[]
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
            axios.get('/api/list').then((res)=>{
                console.log(res.data.data)
                this.list=res.data.data
            })
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>
