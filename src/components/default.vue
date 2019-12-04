<template>
<div class="wraper">
     <div class='default'>
        <span>暂无内容</span>  
    </div>
    <!-- <Bottom></Bottom> -->
</div>
   
</template>

<script>
// import Bottom from './bottomVue'
export default {
    name:"Default",
    components:{
        // Bottom
    }
}
</script>
<style scoped lang="less">
.default{
    width:1200px;
    height:500px;
    background: #fff;
    font-size:20px;
    color:#cccccc;
    justify-content: center;
    display: flex;
    align-items: center;
    margin:0 auto;
    margin-top:20px;
}
</style>
