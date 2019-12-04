<template>
    <div class="wraper">
       <!-- 门户 -->
        <div class="content">
         <api></api>
         <div class="conList">
           <router-view/>
         </div>
        </div>
    </div>
</template>
<script>
import api from '../page/api'
export default {
    name:"Container",
    components:{
        api
    },
    data(){
        return{
           

        }
    },
    methods:{
      
      
    }

}
</script>

<style lang="less" scoped>

</style>
