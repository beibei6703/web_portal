<template>
    <div class="container">
      <Header v-if="employeeId" />
      <el-container>
        <el-aside width="230px"><Sider :current="current" @tap="tap"/></el-aside>
        <el-main v-if="employeeId">
          <Personal v-if="current === 1"/>
          <Employment v-if="current === 2"/>
          <Wages v-if="current === 3"/>
          <Contract v-if="current === 4"/>
          <RewardsAndPunishment v-if="current === 5"/>
          <Transaction v-if="current === 6"/>
          <!-- <DevelopmentChannel v-if="current === 7"/> -->
        </el-main>
      </el-container>
    </div>
</template>
<script>
import Header from './header';
import Sider from './sider';
import Contract from './contract';
import DevelopmentChannel from './development-channel';
import Employment from './employment';
import Personal from './personal';
import RewardsAndPunishment from './rewards-and-punishment';
import Transaction from './transaction';
import Wages from './wages';
import {  getEmployeeIdByWorkCode } from "../../api/hrinfo";
export default {
  name: "hrinfo",
  components: {
    Header,
    Sider,
    Contract,
    DevelopmentChannel,
    Employment,
    Personal,
    RewardsAndPunishment,
    Transaction,
    Wages
  },
  data() {
    return {
      current: 1,
      employeeId: ''
    };
  },
  created() {
     getEmployeeIdByWorkCode().then((res) => {
        window.employeeId = res.data;
        this.employeeId = res.data;
     });
  },
  methods:{
    tap(current) {
      this.current = current;
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  padding: 20px;
  width: 1200px;
  background: #fff;
  margin: 0 auto;
}
</style>

