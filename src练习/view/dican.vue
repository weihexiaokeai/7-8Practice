<template>
    <div>
        <div class="left">
                <ul>
                    <li v-for="(item,index) in list" :key="index" :class="{active:index==ind}" @click="gotoclick(index)" >{{item.name}}</li>
                </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    props:{

    },
    components:{

    },
    data(){
        return {
                list:[],
                ind:0
        }
    },
    computed:{

    },
    methods:{
             gotoclick(index)
        {
               this.ind=index
        }
    },
    created(){
        axios.get('/api/list').then((res)=>{
            console.log(res.data.data.goods)
            this.list=res.data.data.goods
        })
    },
    mounted(){
     
    }
  
}
</script>
<style scoped lang="">
ul{
    width: 130px;
    height: 100%;
    display: flex;
    flex-direction: column;

}ul li{
    width: 100%;
    height: 60px;
    text-align: center;
    line-height: 60px;
}
.active{
    color: orange;
}
</style>