<template>
   <div class="info_warp">
      <div class="title">重新雇佣信息</div>
      <div class="info">
        <div class="item"><span class="label">重新雇佣日</span><span class="value">{{data.rehireDate}}</span></div>
      </div>
      <div class="title">在职信息</div>
      <div class="info">
        <div class="item"><span class="label">合同签署公司</span><span class="value">{{data.contractCompanyName}}</span></div>
        <div class="item"><span class="label">部门</span><span class="value">{{data.departmentName}}</span></div>
        <div class="item"><span class="label">雇佣类型</span><span class="value">{{data.employTypeName}}</span></div>
        <div class="item"><span class="label">职级</span><span class="value">{{data.employeeGradeEname}}</span></div>
        <div class="item"><span class="label">职位类别</span><span class="value">{{data.positionCategoryName}}</span></div>
        <div class="item"><span class="label">岗位</span><span class="value">{{data.positionName}}</span></div>
        <div class="item"><span class="label">工作城市</span><span class="value">{{data.cityEname}}</span></div>
        <div class="item"><span class="label">在职状态</span><span class="value">{{data.employeeStatusEname}}</span></div>
        <div class="item"><span class="label">职类</span><span class="value">{{data.positionCategoryName}}</span></div>
        <div class="item"><span class="label">序列</span><span class="value">{{data.serialName}}</span></div>
        <div class="item"><span class="label">发展通道</span><span class="value">{{data.developmentChannel}}</span></div>
        <div class="item"><span class="label">直接上级</span><span class="value">{{data.leaderName}}</span></div>
        <div class="item"><span class="label">HRBP</span><span class="value">{{data.hrbpName}}</span></div>
        <div class="item"><span class="label">安全级别</span><span class="value">{{data.securityLevel}}</span></div>
      </div>
      <div class="title">更多信息</div>
      <div class="info">
        <div class="item"><span class="label">招聘类型</span><span class="value">{{data.hireTypeEname}}</span></div>
        <div class="item"><span class="label">招聘负责人</span><span class="value">{{data.handlerName}}</span></div>
        <div class="item"><span class="label">导师</span><span class="value">{{data.teacherName}}</span></div>
        <div class="item"><span class="label">入职日期</span><span class="value">{{data.joinDate}}</span></div>
        <div class="item"><span class="label">转正日期</span><span class="value">{{data.positiveDate}}</span></div>
        <div class="item"><span class="label">试用期结束日期</span><span class="value">{{data.probationEndDate}}</span></div>
      </div>
    </div>
</template>
<script>
import { getEmployeeHireInfo } from "../../../api/hrinfo";
export default {
  data() {
    return {
      data: {}
    }
  },
  created() {
    getEmployeeHireInfo().then(res => {
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
