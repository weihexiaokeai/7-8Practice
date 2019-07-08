<template>
    <dl @click="$router.push({name:'detail',params:{id:item.id}})">    
            <dt>
              <img :src="item.img" />
            </dt>
            <dd>
                <p>{{item.title}}</p>
                <p>{{item.price}}</p>
            </dd>
    </dl>
</template>
<script>
export default {
    props:{
        item:Object
    },
    components:{

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
dl{
    width: 100%;
    height: 150px;
    display: flex;
}
dl dt{
    width: 120px;
    height: 100px;
}
dl dt img{
    width: 100%;
}
</style>