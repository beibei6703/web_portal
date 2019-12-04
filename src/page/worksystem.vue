<template>
  <div class="contain_common">
    <!-- :href="item.app_url" target="_blank" -->
    <div class="items" v-for="(item,index) in officeList" :key="item.id" @click="getopen(index)">
      <div class="imgs">
        <img :src="item.app_icon" alt>
      </div>
      <span class="softDec">{{item.app_name}}</span>
    </div>
    <div class="diaContainer" v-if="showdialog">
      <div class="confirm">
        <div class="cons">
          <span class="comInfo">为保证账户安全，请输入www密码验证</span>
          <div class="bottomInput">
            <input type="password" placeholder="请输入密码" v-model="psw">
            <span class="bgspan" @click="getcomfirm">确定</span>
          </div>
        </div>
      </div>
    </div>
     <div class="diaContainer" v-if="showdialog1">
      <div class="confirm">
        <div class="cons">
          <span class="comInfo">为保证账户安全，请输入www密码验证</span>
          <div class="bottomInput">
            <input type="password" placeholder="请输入密码" v-model="psw">
            <span class="bgspan" @click="getcomfirm1">确定</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { officeApp } from "../api/nav.js";
import md5 from 'js-md5';
import { performance ,comfirmUser} from "../api/performance.js";
import qs from "qs";
let Base64 = require('js-base64').Base64;
export default {
  name: "Worksystem",

  data() {
    return {
      officeList: [],
      showdialog:false,
      showdialog1:false,
      psw:""
    };
  },
  created() {
    //获取办公系统列表
    const data = qs.stringify({
     workCode: this.getCookie("username")
    });
    officeApp(data).then(res => {
      const data = res.data;
      if (data.success == true && data.data) {
        this.officeList = data.data;
      } else {
        console.log(data.errorMsg, "error");
      }
    });
  },
  methods: {
    getopen(index) {

      if (
        this.officeList[index].app_name != "绩效系统" &&
        this.officeList[index].app_name != "Talefull人事"&&
        this.officeList[index].app_name.toLowerCase()!="wiki"
      ) {
        window.open(this.officeList[index].app_url);
      } else {
        if (this.officeList[index].app_name == "绩效系统") {
          performance(this.getCookie("username")).then(res => {
            // console.log(res, "jixcxd");
            if (res.data.code == 1 && res.data.data) {
              window.open(res.data.data);
            }
          });
        } else if (this.officeList[index].app_name == "Talefull人事") {
            if(this.getCookie("ecology_p")){
                  window.open("http://www.api.com/userInfo/talefull")
            }else{
                this.showdialog = true
            }
        }else if(this.officeList[index].app_name.toLowerCase() =="wiki"){

        	 if(this.getCookie("ecology_p")){
                  window.open("http://wiki.api.com/")
            }else{
                this.showdialog1 = true
            }

        }
      }
    },
		//wiki验证
    getcomfirm1(){
    	 let psd = Base64.encode(Base64.encode(this.psw));
        console.log(psd,"psd")
         const data = qs.stringify({
                accounts:this.getCookie("username"),
                password:psd,
                isGetDKey:false,
                flag:1
            })
            comfirmUser(data).then(res=>{
                // console.log(res)
                const data = res.data
                if(data.code==1){
                    this.setCookie("ecology_p",psd)
                    this.showdialog1=false
										 window.open("http://wiki.api.com/")
                }else{
                	 this.$message.error('请填写正确的www密码');
                }
            })

    },
		//talefull验证
    getcomfirm(){
        let psd = Base64.encode(Base64.encode(this.psw));
        console.log(psd,"psd")
         const data = qs.stringify({
                accounts:this.getCookie("username"),
                password:psd,
                isGetDKey:false,
                flag:1
            })
            comfirmUser(data).then(res=>{
                // console.log(res)
                const data = res.data
                if(data.code==1){
                    this.setCookie("ecology_p",psd)
                    this.showdialog=false
                     window.open("http://www.api.com/userInfo/talefull")
                }else{
                	 this.$message.error('请填写正确的www密码');
                }
            })

    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/css/common.less";
.diaContainer {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  .confirm {
    width: 480px;
    height: 200px;
    background: #fff;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -100px;
    margin-left: -240px;
    border-radius: 6px;
    .cons {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      //  justify-content: center;
      .comInfo {
        display: block;
        width: 320px;
        font-size: 14px;
        text-align: left;
        margin-top: 50px;
      }
      .bottomInput {
        width: 320px;
        height: 30px;
        //  display:flex;
        //  align-items: center;
        margin-top: 20px;
        input {
          display: block;
          border: 0;
          height: 30px;
          width: 200px;
          border: 1px solid #dcdfe6;
          outline: none;
          padding-left: 15px;
          line-height: 30px;
          font-size: 14px;
          float: left;
        }
        .bgspan {
          width: 60px;
          height: 30px;
          text-align: center;
          line-height: 30px;
          background: #f10d3b;
          // display: block;
          color: #fff;
          font-size: 14px;
          float: left;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
