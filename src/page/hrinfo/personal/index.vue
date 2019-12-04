<template>
   <div class="info_warp">
      <div class="title">基本信息</div>
      <div class="info">
        <div class="item"><span class="label">姓名</span><span class="value">{{data.name}}</span></div>
        <div class="item"><span class="label">花名</span><span class="value">{{data.nickname}}</span></div>
        <div class="item"><span class="label">工号</span><span class="value">{{data.workCode}}</span></div>
        <div class="item"><span class="label">手机号</span><span class="value">{{data.mobile}}</span></div>
        <div class="item"><span class="label">工作邮箱</span><span class="value">{{data.email}}</span></div>
        <div class="item"><span class="label">社会雇佣日</span><span class="value">{{data.socialEmployeeDate}}</span></div>
        <div class="item"><span class="label">证件类型</span><span class="value">{{data.certTypeEname}}</span></div>
        <div class="item"><span class="label">证件号码</span><span class="value">{{data.certNo}}</span></div>
        <div class="item"><span class="label">生日</span><span class="value">{{data.birthday}}</span></div>
        <div class="item"><span class="label">政治面貌</span><span class="value">{{data.politicalStatusEname}}</span></div>
        <div class="item"><span class="label">性别</span><span class="value">{{enumeration.sex[data.sex]}}</span></div>
        <div class="item"><span class="label">婚姻状况</span><span class="value">{{enumeration.married[data.married]}}</span></div>
        <div class="item"><span class="label">国籍</span><span class="value">{{data.nationalityEname}}</span></div>
        <div class="item"><span class="label">民族</span><span class="value">{{data.ethnicityEname}}</span></div>
        <div class="item"><span class="label">籍贯</span><span class="value">{{data.nativePlace}}</span></div>
        <div class="item"><span class="label">出生地</span><span class="value">{{data.birthPlace}}</span></div>
        <div class="item"><span class="label">户口性质</span><span class="value">{{data.householdTypeEname}}</span></div>
        <div class="item"><span class="label">户口所在地</span><span class="value">{{data.householdPlace}}</span></div>
        <div class="item"><span class="label">现居地址</span><span class="value">{{data.houseAddr}}</span></div>
        <div class="item"><span class="label">社保所在地</span><span class="value">{{data.socialInsurancePlaceEname}}</span></div>
        <div class="item"><span class="label">衣服尺码</span><span class="value">{{data.suitSizeEname}}</span></div>
        <div class="item"><span class="label">个人邮箱</span><span class="value">{{data.personalEmail}}</span></div>
        <div class="item"><span class="label">档案是否在公司内</span><span class="value">{{enumeration.hadRecord[data.hadRecord]}}</span></div>
        <div class="item"><span class="label">职称</span><span class="value">{{data.employeeGradeEname}}</span></div>
      </div>
      <div class="title">教育经历</div>
      <div class="info">
        <div class="item"><span class="label">最高学历</span><span class="value">{{eduData.lastEduGradeEname}}</span></div>
        <div class="item"><span class="label">最高学位</span><span class="value">{{eduData.lastAcademicDegreeEname}}</span></div>
        <div class="item"><span class="label">毕业日期</span><span class="value">{{eduData.lastGraduateDate}}</span></div>
        <div class="item"><span class="label">专业</span><span class="value">{{eduData.lastMajor}}</span></div>
        <div class="item"><span class="label">毕业学校</span><span class="value">{{eduData.lastUniversity}}</span></div>
      </div>
      <div class="info">
        <div class="item"><span class="label">第一学历</span><span class="value">{{eduData.firstEduGradeEname}}</span></div>
        <div class="item"><span class="label">第一学历学位</span><span class="value">{{eduData.firstAcademicDegreeEname}}</span></div>
        <div class="item"><span class="label">第一学历毕业日期</span><span class="value">{{eduData.firstGraduateDate}}</span></div>
        <div class="item"><span class="label">第一学历专业</span><span class="value">{{eduData.firstMajor}}</span></div>
        <div class="item"><span class="label">第一学历学校</span><span class="value">{{eduData.firstUniversity}}</span></div>
      </div>
    </div>
</template>
<script>
import enumeration from '../enumeration.js';
import { getBaseInfo, getEducationInfo } from "../../../api/hrinfo";
export default {
  data() {
    return {
      enumeration,
      data: {},
      eduData: {}
    }
  },
  created() {
    this.getBaseInfo();
    this.getEducationInfo();
  },
  methods: {
    getBaseInfo() {
      getBaseInfo().then(res => {
        if (res.success == true && res.data) {
          this.data = res.data;
        } else {
          console.log(data.errorMsg, "error");
        }
      });
    },
    getEducationInfo() {
      getEducationInfo().then(res => {
        if (res.success == true && res.data) {
          this.eduData = res.data;
        } else {
          console.log(data.errorMsg, "error");
        }
      });
    }
  }
}
</script>
<style lang="less" scoped>
@import "../index.less";
</style>

