
<template>
  <div class="info_warp">
    <div style="position: relative;">
      <a
        class="down"
        style="text-decoration: underline;color: #409EFF;font-size: 14px;position: absolute;top: 20px;right: 30px;"
        href="javascript:;"
        @click="getPdf"
      >&nbsp;下载&nbsp;</a>
      <el-container id="pdfDom" style="background: #fff;">
        <el-header class="header">
          <div class="item">
            <span>我的职级：</span>
            <span class="graid"></span>
            <span style="color:#F09802;">{{userInfo.tempresidentnumber}}</span>
            <span class="border" v-if="!top"></span>
            <span style="color:#8A8A8A" v-if="!top">{{nextLv}}</span>
            <span class="graid" v-if="!top"></span>
          </div>
          <div class="item">职类：{{userInfo.category}}</div>
          <div class="item">序列：{{userInfo.sequence}}</div>
          <div class="item">职位：{{userInfo.jobtitlename}}</div>
        </el-header>
        <div class="main">
          <div class="title">
            <div class="name">专业能力</div>
          </div>
          <div class="table">
            <el-table :data="ability" border header-row-class-name="theader" style="width: 100%">
              <el-table-column prop="proAbility" label="子维度" width="120"></el-table-column>
              <el-table-column prop="definition" label="定义"></el-table-column>
              <el-table-column :label="'现职级'+userInfo.tempresidentnumber">
                <el-table-column prop="keyAbility1" label="关键项" width="130"></el-table-column>
                <el-table-column prop="description1" label="行为描述">
                  <template slot-scope="scope">
                    <div v-if="scope.row.description1">
                      <div v-html="scope.row.description1"></div>
                    </div>
                    <div v-else>本职级不做考评要求</div>
                  </template>
                </el-table-column>
              </el-table-column>
              <el-table-column v-if="!top" :label="'可晋升职级'+nextLv">
                <el-table-column prop="keyAbility2" label="关键项" width="130"></el-table-column>
                <el-table-column prop="description2" label="行为描述">
                  <template slot-scope="scope">
                    <div v-if="scope.row.description2">
                      <div v-html="scope.row.description2"></div>
                    </div>
                    <div v-else>本职级不做考评要求</div>
                  </template>
                </el-table-column>
              </el-table-column>
            </el-table>
          </div>
          <!-- <div class="title">
		    				<div class="name">知识与技能</div>
		    			</div>
		    			<div class="table">
		    				<el-table
						      	:data="skill"
						      	header-row-class-name='theader'
						      	border
						      	style="width: 100%">
							      	<el-table-column
							        	prop="skillDescription"
							        	label="定义"
							        	width="180">
							      	</el-table-column>
							      	<el-table-column
							        	prop="breadth"
							        	label="广度"
							        	width="180">
							      	</el-table-column>
							      	<el-table-column
							        	prop="depth"
							        	label="深度">
							      	</el-table-column>
						    </el-table>
          </div>-->
          <div class="title">
            <div class="name">工作项目/经历</div>
          </div>
          <div class="table">
            <el-table :data="experience" header-row-class-name="theader" border style="width: 100%">
              <el-table-column prop="need" label></el-table-column>
              <el-table-column prop="experience1" :label="'现职级'+userInfo.tempresidentnumber"></el-table-column>
              <el-table-column v-if="!top" prop="experience2" :label="'可晋升职级'+nextLv"></el-table-column>
            </el-table>
          </div>
        </div>
      </el-container>
    </div>
    <el-dialog title="提示" center :visible.sync="dialogVisible" width="30%">
      <div style="text-align: center;">此序列正在更新，敬请期待！</div>
    </el-dialog>
  </div>
</template>
<script>
import { getCookie } from '../../../util/getcookie.js';
import html2canvas from 'html2canvas';
import axios from 'axios';
import * as jsPDF from 'jspdf';
export default {
  data() {
    return {
      dialogVisible: false,
      userInfo: {},
      nextLv: "",
      tableData: [],
      ability: [],
      skill: [],
      top: false,
      experience: []
    };
  },
  methods: {
    getPdf() {
      let pdfDom = document.querySelector("#pdfDom");
      let _this = this;
      html2canvas(pdfDom, {
        allowTaint: true
      }).then(function(canvas) {
        let contentWidth = canvas.width;
        let contentHeight = canvas.height;
        let pageHeight = (contentWidth / 592.28) * 841.89;
        let leftHeight = contentHeight;
        let position = 0;
        let imgWidth = 595.28;
        let imgHeight = (592.28 / contentWidth) * contentHeight;
        let pageData = canvas.toDataURL("image/jpeg", 1.0);
        let PDF = new jsPDF("", "pt", "a4");
        if (leftHeight < pageHeight) {
          PDF.addImage(pageData, "JPEG", 0, 0, imgWidth, imgHeight);
        } else {
          while (leftHeight > 0) {
            PDF.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight);
            leftHeight -= pageHeight;
            position -= 841.89;
            if (leftHeight > 0) {
              PDF.addPage();
            }
          }
        }
        PDF.save("我的发展通道.pdf");
      });
    },
    getUser() {
      let formData = new FormData();
      formData.append("workCode", getCookie("username"));
      axios({
        url: "/getUser",
        data: formData,
        method: "POST"
      }).then(res => {
        if (res.data.success) {
          this.userInfo = res.data.data;
          let level = this.userInfo.tempresidentnumber
            .substr(0, 1)
            .toLowerCase();
          let num = Number(
            this.userInfo.tempresidentnumber.substr(
              1,
              this.userInfo.tempresidentnumber.length - 1
            )
          );
          if (level === "p") {
            if (num < 10) {
              num += 1;
            } else {
              this.nextLv = level.toUpperCase() + num;
              this.top = true;
              this.getMyDev();
              return;
            }
          } else if (level === "m") {
            if (num < 9) {
              num += 1;
            } else {
              this.nextLv = level.toUpperCase() + num;
              this.top = true;
              this.getMyDev();
              return;
            }
          } else {
            if (num < 8) {
              num += 1;
            } else {
              this.nextLv = level.toUpperCase() + num;
              this.top = true;
              this.getMyDev();
              return;
            }
          }
          this.nextLv = level.toUpperCase() + num;
          if (
            res.data.data.sequence === "产品序列" ||
            res.data.data.sequence === "后台开发序列" ||
            res.data.data.sequence === "前台开发序列" ||
            res.data.data.sequence === "测试序列" ||
            res.data.data.sequence === "运维序列" ||
            res.data.data.sequence === "项目管理序列"
          ) {
            this.dialogVisible = true;
            return;
          }
          this.getMyDev();
        }
      });
    },
    getMyDev() {
      /* data.analysis = data.analysis.replace(/\；/g, '<br/>').replace(/\。/g, ''); */
      axios({
        url: "/myRecord",
        method: "POST",
        params: {
          tempresidentnumber: this.userInfo.tempresidentnumber,
          sequence: this.userInfo.sequence,
          positionCategory: this.userInfo.positionCategoryUuid
        }
      }).then(res => {
        if (res.data.success) {
          let experience = res.data.workExperience;
          if (experience.length) {
            experience[0]["need"] = "在本序列晋升需经历的工作经验或者项目";
          }
          this.experience = experience;
          // this.skill = res.data.skills;
          let ability = res.data.ability;
          // if(ability.length){
          for (let i = 0; i < ability.length; i++) {
            if (ability[i].description1) {
              ability[i].description1 = ability[i].description1
                .replace(/\；/g, "<br/>")
                .replace(/\。/g, "<br/>");
            }
            if (ability[i].description2) {
              ability[i].description2 = ability[i].description2
                .replace(/\；/g, "<br/>")
                .replace(/\。/g, "<br/>");
            }
          }
          // }
          this.ability = ability;
        }
      });
    }
  },
  mounted() {
    this.getUser();
  }
};
</script>
<style lang="less" scoped>
.header .item {
  margin-right: 25px;
  display: inline-block;
  line-height: 60px;
}
.title .name {
  width: 160px;
  background: #409eff;
  color: #fff;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin-left: 20px;
}
.table {
  margin-bottom: 30px;
  padding: 0 20px;
}
.graid {
  display: inline-block;
  padding: 15px 15px;
  background: url("./img/le_default.png") no-repeat center center;
  background-size: 100% 100%;
  vertical-align: middle;
}
.graid:nth-of-type(2) {
  background-image: url("./img/le.png");
}
.border {
  position: relative;
  display: inline-block;
  width: 50px;
}
.border::before {
  content: "";
  left: 0;
  width: 50px;
  height: 1px;
  background: #999;
  position: absolute;
  top: -5px;
}
.el-table .theader tr,
.el-table .theader th {
  background: #f7f7f7;
}
.down {
  text-decoration: underline;
  color: #409eff;
  font-size: 14px;
  position: absolute;
  top: 20px;
  right: 30px;
  width: 50px;
  text-align: center;
  width: 70px;
}
</style>

