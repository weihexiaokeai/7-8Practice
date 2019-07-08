<template>
    <div>
        <div class="page">
           <ul class="title">
            <li @click="$router.push({name:'dican'})">点餐</li>
            <li @click="$router.push({name:'comment'})">评价</li>
            <li @click="$router.push({name:'bussi'})">商家</li>
         </ul>
             <router-view/>
        </div>
      <my-footer></my-footer>
    </div>
</template>
<script>
import myFooter from '../components/footer'
export default {
    props:{

    },
    components:{
        myFooter
    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.title{
    width: 100%;
    height: 44px;
    display: flex;
}
.title li{
    flex: 1;
    text-align: center;
    line-height: 44px;
}
</style>