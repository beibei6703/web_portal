
<template>
<div style=" height: 44px; margin-bottom: 20px;">
  <div class="tabwraper">
    <ul class="tabBarCon">
      <!-- <router-link
        class="itemLi"
        v-for="(item,index) in Menu"
        active-class="active"
        :to="item.href"
        tag="li"
        :key="index"
      >{{item.tab}}</router-link> -->
      <div  class="itemLi"  @click="getcomfirm">集团门户 </div>
      <div  class="itemLi"  @click="getcomfirm"> 个人门户</div>
      <router-link active-class="active" class="itemLi" tag="li" to="/container/it"  > IT门户</router-link>
      <!-- <router-link active-class="active" class="itemLi" tag="li" to="/container/hrinfo"  > HR门户</router-link> -->
    </ul>
  </div>
  </div>
</template>
<script>
let menu = [
  { tab: "集团门户", name: "company", href: "./company" },
   { tab: "个人门户", name: "person", href: "./personal" },
  // { tab: "高管门户", name: "manage", href: "./manage" },
  // { tab: "金融门户", name: "finance", href: "./finance" },
  // { tab: "物流门户", name: "flow", href: "./flow" },
  { tab: "IT门户", name: "it", href: "/container/it" },
//   { tab: "HR门户", name: "hr", href: "./hr" },
  // { tab: "品牌门户", name: "brand", href: "/container/brand" },
  // { tab: "统一导航", name: "index", href: "container/index/commonuse" },
];
export default {
  name: "api",
  data() {
    return {
      Menu: menu
    };
  },
  methods:{
    getcomfirm(){
      alert("建设中，即将开放")
    }
  }
};
</script>

<style lang="less" scoped>
.tabwraper {
  width: 100%;
  height: 44px;
  margin: 0 auto;
  // background: rgba(255, 255, 255, 0.31);
  background: #f8f8fa;

border-bottom:1px solid #EDEEF0;
   position: fixed;
   top:70px;
   left:0;
  z-index:3;
}
.tabBarCon {
  height: 44px;
  width: 1200px;
  margin: 0 auto;
  // background: rgba(255, 255, 255, 0.31);


  .itemLi {
    display: block;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: left;
    font-size: 13px;
    color: #757980;
    letter-spacing: -0.31px;
    &:hover{
      cursor: pointer;
    }
  }
}
.active {
  border-bottom: 1px solid #3a404c;
  font-size: 13px;
  color: #3a404c !important;
}
</style>

