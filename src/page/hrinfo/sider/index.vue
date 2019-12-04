
<template>
   <div class="sider">
     <div :class="`nav ${current === 1 ? 'active' : ''}`" @click="tap(1)">个人信息</div>
     <div :class="`nav ${current === 2 ? 'active' : ''}`" @click="tap(2)">雇佣信息</div>
     <div :class="`nav ${current === 3 ? 'active' : ''}`" @click="tap(3)">工资信息</div>
     <div :class="`nav ${current === 4 ? 'active' : ''}`" @click="tap(4)">合同信息</div>
     <div :class="`nav ${current === 5 ? 'active' : ''}`" @click="tap(5)">奖惩记录</div>
     <div :class="`nav ${current === 6 ? 'active' : ''}`" @click="tap(6)">异动信息</div>
     <!-- <div :class="`nav ${current === 7 ? 'active' : ''}`" @click="tap(7)">发展通道</div> -->
    </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  props: ['current'],
  methods:{
    tap(current) {
       this.$emit('tap', current);
    }
  }
};
</script>
<style lang="less" scoped>
.sider {
   text-align: center;
   font-size: 16px;
   background-color: #fff;
   height: 100%;
  .nav {
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    color: #A1A7B3;
    letter-spacing: -0.38px;
    cursor: pointer;
    &.active {
      background: #FFF5F5;
      border-left: 4px solid  #F10D3B;
      color: #F10D3B;
    }
  }
}
</style>

