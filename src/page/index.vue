<template>
    <div class="wrap_index">
        <div class="index_con">
            <div class="menusw">
            <ul class="leftMenu">
                <router-link class="itemLi borders" activeClass="active" to="/index/commonuse" tag="li" >我常用的</router-link>
                <router-link class="itemLi borders" activeClass="active" to="/index/business" tag="li" >业务系统</router-link>
                <router-link class="itemLi" activeClass="active" to="/index/worksystem" tag="li" >办公系统</router-link>
                  <!-- <router-link class="itemLi" v-for="(item,index) in MenuList" activeClass="active"  :to="item.href" tag="li" :key="index">{{item.tab}}</router-link> -->
            </ul>
            </div>
            <div class="content">
                <router-view></router-view>
            </div>
        
        </div>
    </div>
</template>

<script>
export default {
    name:"Index",
    data(){
        return {
       
        }
    }

}
</script>

<style lang="less" scoped>
.wrap_index{
    width:100%;
    height:100%;
    background:#f5f6f8;
    margin-bottom:38px;
}
.index_con{
    width:1240px;
    background:#f5f6f8;
    display:flex;
    margin:0 auto;
    .menusw{
         width:150px;
        margin-left:50px;
        padding-top:40px;
    }
    .leftMenu{
       
        position: fixed;
        .itemLi{
            display:block;
            width:130px;
            height:50px;
            text-align: left;
            line-height:51px;
            padding-left:20px; 
            font-size: 14px;
            color: #A1A7B3;
            cursor: pointer;
            &:hover{
                color: #3A404C !important;
            }
        }
    }
    .content{
        width:972px;
        min-height:624px;
        margin-left:30px;
        // border:1px solid #f00;
        margin-top:20px;
    }
}
.borders{
    border-bottom: 1px solid#EDEEF0;
}
.active{
font-size: 14px;
color: #3A404C !important;
background: url('../assets/image/non.png') no-repeat left 20px;
background-size: 10px 10px;
}

</style>
