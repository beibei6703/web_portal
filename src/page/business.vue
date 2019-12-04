<template>
   <div class=contain_common>
        <a class="items" v-for="item in businessList" :key="item.id" :href="item.app_url" target="_blank">
            <div class="imgs">
                <img :src="item.app_icon" alt="">
            </div>
            <span class="softDec">{{item.app_name}}</span>
        </a>
    </div>
</template>

<script>
import {businessApp} from '../api/nav.js'
import qs from 'qs'
export default {
    name:'Business',
    data(){
        return{
            businessList:[]

        }

    },
    created(){
        //获取业务系统列表
        const data = qs.stringify({
            workCode: this.getCookie("username")
        })
        businessApp(data).then(res => {
            const data = res.data
            if(data.success==true && data.data){
                this.businessList= data.data
            }
        })

    }

}
</script>

<style lang="less" scoped>
@import "../assets/css/common.less";
</style>
