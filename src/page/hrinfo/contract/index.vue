
<template>
<div class="info_warp">
      <div class="info" v-for="item in data" :key="item.id">
        <div class="item"><span class="label">合同政策</span><span class="value">{{item.policyEname}}</span></div>
        <div class="item"><span class="label">合同状态</span><span class="value">{{item.contractStatusEname}}</span></div>
        <div class="item"><span class="label">合同开始日</span><span class="value">{{item.startDate}}</span></div>
        <div class="item"><span class="label">合同结束日</span><span class="value">{{item.endDate}}</span></div>
        <div class="item"><span class="label">合同年限</span><span class="value">{{item.contractYears}}</span></div>
        <div class="item"><span class="label">试用期月数</span><span class="value">{{item.probation}}</span></div>
        <div class="item"><span class="label">合同签署公司</span><span class="value">{{item.contractCompany}}</span></div>
        <div class="item"><span class="label">备注</span><span class="value">{{item.remark}}</span></div>
      </div>
    </div>
</template>
<script>
import { getEmployeeContract } from "../../../api/hrinfo";
export default {
  data() {
    return {
      data: {}
    }
  },
  created() {
    getEmployeeContract().then(res => {
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
.info {
  &:first-child {
    border-bottom: 1px solid #EEEEEE;
    padding-bottom: 15px;
    margin-bottom: 15px;
  }
}
</style>

