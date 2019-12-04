<template>
   <div class="info_warp">
      <div class="info" v-for="item in data" :key="item.id">
        <div class="item"><span class="label">奖惩日期</span><span class="value">{{item.rpDate}}</span></div>
        <div class="item"><span class="label">奖惩类型</span><span class="value">{{item.rpTypeEname}}</span></div>
        <div class="item"><span class="label">奖惩等级</span><span class="value">{{item.penaltyGradeEname}}</span></div>
        <div class="item"><span class="label">金额</span><span class="value">{{item.penaltyAmount}}</span></div>
        <div class="item"><span class="label">事件</span><span class="value">{{item.reason}}</span></div>
        <div class="item"><span class="label">备注</span><span class="value">{{item.rpDate}}</span></div>
      </div>
    </div>
</template>
<script>
import { getEmployeeRewardAndPunish } from "../../../api/hrinfo";
export default {
  data() {
    return {
      data: {}
    }
  },
  created() {
    getEmployeeRewardAndPunish().then(res => {
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
