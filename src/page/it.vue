
<template>
  <div class="wraper">
    <div class="container">
      <div class="leftWraper">
        <div class="person_left">
          <div class="img_top">
            <img v-if="peopleImg" :src="peopleImg" alt>
            <img v-if="peopleImg==''" src="../assets/image/Group444.png" alt>
            <div class="leftdec">
              <span class="name">{{name}}</span>
              <span class="worker">
                <!-- <span>{{department}}</span>
                <span>/</span> -->
                <span>{{position}}</span>
              </span>
            </div>
          </div>
          <div class="secCon margin_31" v-for="(item,index) in info " :key="index">
            <div class="leftImg">
              <img src="../assets/image/notebook.png" alt>
              <div class="right_dec">
                <span class="del_name">{{item.name}}</span>
                <span class="del_dec">数量: <i>{{item.cptnum}}</i></span>
              </div>
            </div>
          </div>
          <!-- <div class="secCon margin_12">
            <div class="leftImg">
              <img src="../assets/image/iMac.png" alt>
              <div class="right_dec">
                <span class="del_name">DELL笔记本</span>
                <span class="del_dec">YXITNB8372</span>
              </div>
            </div>
          </div> -->
        </div>
        <div class="hotserve">
          <p class="txt">
            <span class="text_tit">报障热线</span>
            <span>0571-81688999</span>
          </p>
          <p class="txt">
            <span class="text_tit">服务号</span>
            <span>企微IT服务台</span>
          </p>
          <p class="txt">
            <span class="text_tit">现场</span>
            <span>信息港F座13L</span>
          </p>
        </div>
        <div class="navCon">常用导航</div>
        <div class="left_bottom">
          <a class="item" href="ftp://10.1.0.17/" target="_blank">
            <img class="imgsoft" src="../assets/image/softcenter.png" alt>
            <span class="nameCon">软件下载中心</span>
          </a>
          <a class="item" href="https://login.partner.microsoftonline.cn" target="_blank">
            <img  class="imgsoft" src="../assets/image/email.png" alt>
            <span class="nameCon">企业邮件中心</span>
          </a>
          <div class="item itemposit">
            <img  class="imgsoft" src="../assets/image/itknow.png" alt>
            <span class="nameCon">IT 知识库</span>
            <img class="openimg" src="../assets/image/open.png" alt="">
          </div>
        </div>
      </div>
      <div class="centerWrap">
        <div class="swipers">
          <Banner></Banner>
        </div>
        <div class="inform">
          <span class="nameInform">通知公告</span>
          <a class="colors"  href="javascript:;" @click="open" target="_blank">
            <span>more</span>
            <span class="icon_enter"></span>
          </a>
        </div>
        <div class="noticeCon">
          <a :href="'http://api.api.com/information_pc/index.html#/detail?uuid='+items.uuid" target="_blank" class="item" v-for="(items,index) in getannounce" :key="index">
            <div class="txt_left">
              <img v-if="items.seeCount==0 || items.seeCount==undefined  " src="../assets/image/new.png" alt>
              <span class="newCon" :class="{marginleft:items.seeCount!=0 && items.seeCount !=undefined}">{{items.title}}</span>
            </div>
            <span class="date_right">{{items.updateDate}}</span>
          </a>
          <!-- <div class="item" v-for="n in 4" :key="n">
            <div class="txt_left">
              <span class="notice_tit">[ 发版公告 ] SSO 临时发版公告</span>
            </div>
            <span class="date_right">2019-02-20</span>
          </div> -->
        </div>
        <div class="inform margin_10">
          <span class="nameInform">常用 IT 申请</span>
          <a class="colors" href="http://oa.api.com/wui/workflow.jsp?backUrl=http://oa.api.com/workflow/request/RequestTypeShow.jsp?colnum4show=mulitcol&fromadvancedmenu=0&infoId=0&needPopupNewPage=true&needall=1" target="_blank">
            <span>more</span>
            <span class="icon_enter"></span>
          </a>
        </div>
        <div class="soft_bottom">
          <a class="softItem" href="http://oa.api.com/wui/workflow.jsp?backUrl=http://oa.api.com/workflow/request/AddRequest.jsp?workflowid=620" target="_blank">
            <img src="../assets/image/account.png" alt>
            <span class="softName">账号申请</span>
          </a>
           <a class="softItem" href="http://oa.api.com/wui/workflow.jsp?backUrl=http://oa.api.com/workflow/request/AddRequest.jsp?workflowid=420" target="_blank">
            <img src="../assets/image/roleapply.png" alt>
            <span class="softName">角色权限申请</span>
          </a>
           <a class="softItem" href="http://oa.api.com/wui/workflow.jsp?backUrl=http://oa.api.com/workflow/request/AddRequest.jsp?workflowid=619" target="_blank">
            <img src="../assets/image/waiaccount.png" alt>
            <span class="softName">外包账号申请</span>
          </a>
           <a class="softItem" href="http://oa.api.com/wui/workflow.jsp?backUrl=http://oa.api.com/workflow/request/AddRequest.jsp?workflowid=203" target="_blank">
            <img src="../assets/image/softbuy.png" alt>
            <span class="softName">软件采购申请</span>
          </a>
           <a class="softItem" href="http://oa.api.com/wui/workflow.jsp?backUrl=http://oa.api.com/workflow/request/AddRequest.jsp?workflowid=592" target="_blank">
            <img src="../assets/image/itbuy.png" alt>
            <span class="softName">IT固定资产采购</span>
          </a>
           <a class="softItem" href="http://oa.api.com/wui/workflow.jsp?backUrl=http://oa.api.com/workflow/request/AddRequest.jsp?workflowid=276" target="_blank">
            <img src="../assets/image/itling.png" alt>
            <span class="softName">IT固定资产领用</span>
          </a>
           <a class="softItem" href="http://oa.api.com/wui/workflow.jsp?backUrl=http://oa.api.com/workflow/request/AddRequest.jsp?workflowid=530" target="_blank">
            <img src="../assets/image/accountforbit.png" alt>
            <span class="softName">外包账号停用</span>
          </a>
           <a class="softItem" href="http://oa.api.com/wui/workflow.jsp?backUrl=http://oa.api.com/workflow/request/AddRequest.jsp?workflowid=581" target="_blank">
            <img src="../assets/image/electbuy.png" alt>
            <span class="softName">电子易耗品采购</span>
          </a>
        </div>
      </div>
      <div class="rightPro">
        <div class="titRight">IT 事项进度</div>
        <div class="rightTop" v-if="getitProgress.length!=0">
          <div class="scrollW">
             <a :href="'http://oa.api.com/wui/workflow.jsp?backUrl=http://oa.api.com/workflow/request/ViewRequest.jsp?requestid='+item.requestid" target="_blank" class="item_right" v-for="(item,index) in getitProgress" :key="index">
              <span class="margin_area">[ 流程 ]</span>
              <span class="decCon">{{item.requestname}}</span>
              <span class="lines"></span>
              <span class="color_red widthspan">处理中</span>
            </a>
          </div>

        </div>
        <div class="rightTop_no" v-if="getitProgress.length==0">
          <img class="imgno" src="../assets/image/nothings.png" alt>
          <span class="nothing">暂无IT相关事项</span>
        </div>
        <div class="titRight margin_10">IT 常见问题</div>
        <div class="right_bottom">
          <a :href="'http://api.api.com/information_pc/index.html#/detail?uuid='+item2.uuid" class="item_bottom" v-for="(item2,index) in questlist" :key="index" target="_blank">
            <img v-if="item2.seeCount==0 || item2.seeCount==undefined " src="../assets/image/new.png" alt>
            <span>{{item2.title}}</span>
          </a>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import Banner from '../components/banner'
import {personInfo} from '../api/it.js'
import {announceLIst} from '../api/annce.js'
import qs from 'qs'
export default {
  name: "IT",
  components: {

    Banner
  },
  data() {
    return {
      show: false,
      name:"",
      peopleImg:"",
      info:[],
      department:"",
      position:"",
      questlist:[]
    };
  },
  computed:{
    getitProgress(){
      return this.$store.state.it.itProgressList
    },
    getannounce(){
      return this.$store.state.it.announceList
    }
  },
  created (){
    //获取个人信息
    personInfo(this.getCookie("username")).then(this.handleSucc.bind(this))
    const data = qs.stringify({
      workCode: this.getCookie("username"),
      pageSize:5,
      category:77
    })
      const data3 = qs.stringify({
      workCode: this.getCookie("username"),
      pageSize:10,
      category:85
    })
      const data1 = qs.stringify({
      workCode: this.getCookie("username"),
      pageSize:0,
    })
    //公告列表
    this.$store.dispatch("getannceList",data)
    //it进度
    this.$store.dispatch("getitProgress",data1)
    //it常见问题
    announceLIst(data3).then(this.handleCOmmonSucc.bind(this))

  },
  methods:{
    open(){
      let str = encodeURIComponent('通知公告');
      window.open('http://api.api.com/information_pc/index.html#/system?category=77&categoryname='+str)
// 'http://ty.api.com/inforelease_pc/index.html#/system?category=77&categoryname='+encodeURIComponent('通知公告'
    },
    handleCOmmonSucc(res){
    const data = res.data
    if(data.success==true && data.data){
      this.questlist=data.data
    }
    },
    handleSucc(res){
    const data = res.data
    if(data.success==true && data.data){
      this.name=data.data.lastname,
      this.peopleImg=data.data.userAvatar
      this.info = data.data.property
      this.department=data.data.departmentname
      this.position = data.data.jobtitlename

			}
    }

  }
};
</script>
<style lang="less" scoped>
 .person_left::-webkit-scrollbar {
        display: none;
    }
    .rightTop::-webkit-scrollbar {
        display: none;
    }
    .marginleft{
      margin-left:20px;
    }
    // .marginleft1{
    //   margin-left:18px;
    // }
    .openimg{
      width:40px;
      height: 40px;
      position: absolute;
      top:0;
      right: 0;
    }
    .itemposit{
      position:relative;
    }
.icon_enter{
  display: inline-block;
  width:10px;
  height:10px;
  background: url('../assets/image/enter.png') no-repeat center center;
  background-size: 10px 10px;
}
.container {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  margin-bottom:42px;
  .leftWraper {
    width: 270px;
  }
  .person_left {
    width: 270px;
    min-height: 150px;
    max-height: 185px;
    background: #fff;
    padding-top: 20px;
    overflow: auto;
    border: 1px solid #EDEEF0;
    border-radius: 4px;
    border-radius: 4px;
    .img_top {
      width: 260px;
      height: 50px;
      margin-left: 10px;
      display: flex;
       margin-bottom: 31px;
      img {
        width: 50px;
        height: 50px;
        border-radius: 4px;
      }
      .leftdec {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        .name {
          display: block;
          font-size: 15px;
          color: #3a404c;
          line-height: 20px;
        }
        .worker {
          margin-top: 4px;
          font-size: 12px;
          color: #757980;
          letter-spacing: -0.29px;
          line-height: 18px;
        }
      }
    }
    .leftImg {
      width: 250px;
      height: 36px;
      margin-left: 10px;
      display: flex;
      align-items: center;
      // margin-top:31px;
      img {
        width: 36px;
        height: 36px;
      }
      .right_dec {
        width:180px;
        margin-left: 16px;
        display: flex;
        flex-direction: column;
        .del_name {
           width:180px;
            text-align: left;
          font-size: 12px;
          color: #3a404c;
          letter-spacing: -0.29px;
          line-height: 20px;
        }
        .del_dec {
           width:180px;
           text-align: left;
          font-size: 11px;
          color: #a1a7b3;
          letter-spacing: -0.26px;

          line-height: 16px;
        }
      }
    }
  }
}
.secCon{
  width:250px;
  height:36px;
  margin-bottom:12px;
}
.margin_31 {
  // margin-top: 31px;
}
.margin_12 {
  margin-top: 12px;
}
.hotserve {
  width: 270px;
  height: 135px;
  background: #fff;
  margin-top: 10px;
  border: 1px solid #EDEEF0;
border-radius: 4px;
  .txt {
    font-size: 12px;
    color: #3a404c;
    letter-spacing: -0.29px;
    line-height: 18px;
    padding-top: 20px;
    margin-left: 20px;
    .text_tit {
      display: inline-block;
      padding:0;
      width: 71px;
      text-align: left;
      // margin-right: 20px;
    }
  }
}
.navCon {
  width: 270px;
  height: 30px;
  line-height: 30px;
  font-size: 13px;
  color: #757980;
  margin-top: 10px;
}
.left_bottom {
  width: 270px;
  height: 208px;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  align-items: center;
  border: 1px solid #EDEEF0;
border-radius: 4px;
  .item {
    width: 230px;
    height: 56px;
    margin-bottom: 10px;
    display: flex;
    border: 1px solid #f5f6f8;
    border-radius: 4px;
    // justify-content: center;
    align-items: center;
    // cursor: pointer;
    .imgsoft {
      width: 40px;
      height: 40px;
      margin-left:50px;
    }
    .nameCon {
      font-size: 12px;
      color: #3a404c;
      letter-spacing: -0.29px;
      line-height: 24px;
      margin-left: 12px;
      text-align: left;
    }
  }
}
.centerWrap {
  width: 620px;
  margin-left: 15px;
  .swipers {
    width: 620px;
    height: 120px;
    color:#fff;
    background: linear-gradient(131deg, #632e9d, #444dd7);
    border-radius: 4px;
  }
  .inform {
    width: 620px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nameInform {
      font-size: 13px;
      color: #757980;
      letter-spacing: -0.31px;
    }
    .colors {
      font-size: 12px;
      color: #f10d3b;
      letter-spacing: -0.29px;
      line-height: 24px;
      font-weight: 500;
      display:flex;
      align-items: center;
    }
  }
  .noticeCon {
    width: 588px;
    height: 160px;
    background: #fff;
    padding: 10px 16px;
    border: 1px solid #EDEEF0;
border-radius: 4px;
    .item {
      width: 100%;
      height: 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    cursor: pointer;
      .txt_left {
        font-size: 12px;
        color: #3a404c;

        img {
          width: 12px;
          height: 12px;
          margin-right: 6px;
        }
      }
      .date_right {
        font-size: 12px;
        color: #a1a7b3;
        letter-spacing: -0.29px;
        line-height: 32px;
      }
    }
  }
}
.newCon {
  font-size: 12px;
  color: #3a404c;
}
.notice_tit {
  font-size: 12px;
  color: #3a404c !important;
}
.soft_bottom {
  width: 605px;
  height: 208px;
  padding: 20px 0 0 15px;
  background: #ffffff;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #EDEEF0;
border-radius: 4px;
  .softItem {
    width: 188px;
    height: 54px;
    border: 1px solid #f5f6f8;
    border-radius: 4px;
    display: flex;
    align-items: center;
    margin-right: 10px;
    margin-bottom: 10px;
    img {
      width: 40px;
      height: 40px;
      margin-left: 8px;
      border: 0;
    }
  }
}
.softName {
  font-size: 12px;
  color: #3a404c;
  letter-spacing: -0.29px;
  line-height: 24px;
  margin-left: 8px;
}
.margin_10 {
  margin-top: 10px;
}

//右边区域样式
.rightPro {
  margin-left: 15px;
  width: 280px;
  .titRight {
    width: 280px;
    height: 40px;
    line-height: 40px;
    font-size: 13px;
    color: #757980;
    font-weight: 500;
  }
  .rightTop_no {
    width: 280px;
    height: 144px;
    background: #fff;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    border: 1px solid #EDEEF0;
    border-radius: 4px;
    // justify-content: center;
    align-items: center;
    .imgno {
      width: 120px;
      height: 80px;
      margin-top: 16px;
    }
    .nothing {
      // width:74px;
      height: 16px;
      font-size: 11px;
      color: #c4c7cc;
      margin-top: 10px;
    }
  }
  .rightTop {
    width: 280px;
    min-height:36px;
    max-height: 144px;
    border-radius: 4px;
    border: 1px solid #EDEEF0;
    // height:144px;
    background: #fff;
     padding: 10px 0;
    overflow: auto;
    // .scrollW{

    //   overflow-y: scroll;
    //   height: 100%;
    // }
    .item_right {
      width: 280px;
      height: 36px;
      font-size: 11px;
      line-height: 36px;
      display:flex;
      align-items: center;
      span {
        display: block;
        float: left;
      }
      .lines{
        width:1px;
        height:18px;
        margin:0 9px 0 11px;
        border-left:1px solid #EDEEF0;
      }
      .margin_area {
        margin-left: 16px;
        font-size: 11px;
        color: #3a404c;
        line-height: 36px;
      }
      .decCon {
        font-size: 11px;
        color: #757980;
        width: 155px;
        line-height: 36px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-left: 6px;
        // margin-right: 22px;
      }
    }
  }
  .right_bottom {
    width: 264px;
    min-height: 320px;
    padding: 10px 0 10px 16px;
    background: #fff;
    border: 1px solid #EDEEF0;
border-radius: 4px;
    .item_bottom {
      height: 32px;
      font-size: 12px;
      color: #3a404c;
      display: flex;
      align-items: center;
      cursor: pointer;
      img {
        width: 12px;
        height: 12px;
        margin-right: 6px;
      }
    }
  }
}

.color_red {
  color: #fa655a;
}
.color_yellow {
  color: #ffc050;
}
.color_green {
  color: #34ca7a;
}
.color_blue {
  color: #2896ff;
}
</style>

