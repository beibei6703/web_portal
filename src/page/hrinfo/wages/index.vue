<template>
<div class="info_warp">
      <div class="title">银行信息</div>
      <div class="info">
        <div class="item"><span class="label">银行名称</span><span class="value">{{data.bankEname}}</span></div>
        <div class="item"><span class="label">账号持有人</span><span class="value">{{data.cardOwner}}</span></div>
        <div class="item"><span class="label">银行账号</span><span class="value">{{data.cardNo}}</span></div>
        <div class="item"><span class="label">开户行全称</span><span class="value">{{data.branchBank}}</span></div>
        <div class="item"><span class="label">支薪政策</span><span class="value">{{data.salaryTypeEname}}</span></div>
      </div>
      <div class="title">社保信息</div>
      <div class="info">
        <div class="item"><span class="label">社保所在地</span><span class="value">{{data.cityEname}}</span></div>
        <div class="item"><span class="label">社保，公积金缴纳起始月份</span><span class="value">{{data.socialInsuranceStartMonth}}</span></div>
      </div>
    </div>
</template>
<script>
import { getEmployeeSalary } from "../../../api/hrinfo";
export default {
  data() {
    return {
      data: {}
    }
  },
  created() {
    getEmployeeSalary().then(res => {
      if (res.success == true && res.data) {
        this.data = res.data;
      } else {
        console.log(data.errorMsg, "error");
      }
    })
  }
}
</script>
<style lang="less" scoped>
@import "../index.less";
</style>
