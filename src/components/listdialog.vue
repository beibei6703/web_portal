<template>
  <div class="containers">
    <div class="dialog_wrap">
      <div class="dioloaLeft">
        <div class="header_con" @click="getopen">
          <div class="imgs">
            <img :class="{rote:showlist}" src="../assets/image/trans.png" alt>
          </div>
          <span class="titleCon">业务系统</span>
        </div>
        <div class="scrollwrap" v-if="showlist">
          <div class="navList">
            <div class="itemCon" v-for="item in bussinessList" :key="item.id">
              <div class="imgIcon">
                <img :src="item.app_icon" alt>
              </div>
              <span class="itemTit">{{item.app_name}}</span>
              <span
                class="checkBoxs1"
                :class="{'checked':listId.indexOf(item.uuid)>=0 }"
                @click="getcheck(item.uuid,item)"
              >
                <img
                  src="../assets/image/checkbox-2.png"
                  v-if="listId.indexOf(item.uuid)>=0"
                  alt
                >
              </span>
            </div>
          </div>
        </div>
        <div class="header_con" @click="getopen1" v-if="!showlist">
          <div class="imgs" >
            <img :class="{rote:officeListshow}" src="../assets/image/trans.png" alt>
          </div>
          <span class="titleCon" >办公系统</span>
        </div>
        <div class="scrollwrap" v-if="officeListshow && !showlist">
          <div class="navList">
            <div class="itemCon" v-for="item2 in officeList" :key="item2.id">
              <div class="imgIcon">
                <img :src="item2.app_icon" alt>
              </div>
              <span class="itemTit">{{item2.app_name}}</span>
              <span
                class="checkBoxs1"
                :class="{'checked':listId.indexOf(item2.uuid)>=0 }"
                @click="getcheck(item2.uuid,item2)"
              >
                <img
                  src="../assets/image/checkbox-2.png"
                  alt
                  v-if="listId.indexOf(item2.uuid)>=0"
                >
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="dialogRight">
        <div class="top_tit">
          <span class="nothisng" v-if="this.listId.length==0">请添加「我常用的」</span>
          <span class="addCon" v-else>
            已添加
            <span style="margin-left:12px;">
              <i>{{this.listId.length}}</i>
              <i>/</i>
              <i>15</i>
            </span>
          </span>
        </div>
        <div class="scroll_list">
          <div class="addlist scrollList">
            <div
              class="additem"
              v-for="(item1,index) in chooseList"
              :key="index"
              :class="{'show':listId.indexOf(item1.uuid)==-1}"
            >
              <div class="imgIcon">
                <img :src="item1.app_icon" alt>
              </div>
              <span class="titleCon">{{item1.app_name}}</span>
              <span class="deleIcon" @click="getdelet(item1.uuid,item1)"></span>
            </div>
          </div>
        </div>
        <div class="bottonCon">
          <span class="cancles" @click="getcancle">取消</span>
          <span class="saves" @click="getsave">保存</span>
        </div>
      </div>
      <div class="confirm" v-if="showConfirm">
        <span>已达到添加数量上线</span>
      </div>
    </div>
  </div>
</template>
<script>
import {
  wwwSystem,
  chooseApp,
  addIcon,
  businessApp,
  officeApp
} from "../api/nav.js";
import qs from "qs";
export default {
  name: "Listdialog",
  data() {
    return {
      showIcon: false,
      thingList: 0,
      chooseList: [],
      ischeck: false,
      listarr: [],
      bussinessList: [],
      Idlist: "",
      listId: [],
      showlist: false,
      showConfirm: false,
      officeList: [],
      officeListshow: false
    };
  },
  computed: {
    // getChooseList() {
    //   // if(this.$store.state.navigation.chooseList.length==0){
    //   //   this.$store.state.navigation.chooseList =this.listarr
    //   // }
    //   return this.$store.state.navigation.chooseList;
    // },
    // getlistId() {
    //   return this.$store.state.navigation.listId;
    // },
    // getwwwList() {
    //   return this.$store.state.navigation.systemList;
    // }
  },
  created() {
    //获取选中列表
    const msg = qs.stringify({
     workCode: this.getCookie("username")
    });
    chooseApp(msg).then(res => {
      const data = res.data;
      if (data.success == true && data.data) {
        this.chooseList = data.data;
        this.chooseList.forEach(item => {
          if (this.listId.indexOf(item.uuid) == -1) {
            this.listId.push(item.uuid);
          } else {
            return this.listId;
          }
        });
      }
    });
    // this.$store.dispatch("getchooseApp", msg);
    //获取www系统列表
    // this.$store.dispatch("getwwwlist");
    //业务系统列表
    businessApp().then(res => {
      const data = res.data;
      if (data.success == true && data.data) {
        this.bussinessList = data.data;
      }
    });
    officeApp().then(res => {
      const data = res.data;
      if (data.success == true && data.data) {
        this.officeList = data.data;
      }
    });
  },

  methods: {
    getopen() {
      this.showlist = !this.showlist;
    },
    getopen1() {
      this.officeListshow = !this.officeListshow;
    },
    getcheck(id, list) {
      this.listarr = [];
      var ids = this.listId.indexOf(id);
      if (ids >= 0) {
        //如果包含了该ID，则删除（单选按钮由选中变为非选中状态）
        this.listId.splice(ids, 1);
        this.chooseList.splice(ids, 1);
      } else {
        //选中该按钮
        if (this.listId.length < 15) {
          this.listId.push(id);
          this.chooseList.push(list);
        } else {
          this.showConfirm = true;
          setTimeout(() => {
            this.showConfirm = false;
          }, 2000);
        }
      }

      this.Idlist = this.listId.join(",");
    },
    //删除
    getdelet(uuid,list) {
      var ids = this.listId.indexOf(uuid);
      if (ids >= 0) {
        //如果包含了该ID，则删除（单选按钮由选中变为非选中状态）
        this.listId.splice(ids, 1);
          this.chooseList.splice(ids, 1);
      } else {
        //选中该按钮
        // return this.$store.state.navigation.listId
        // this.listId.push(uuid);
        console.log("不存在");
      }

      this.Idlist = this.listId.join(",");
    },
    //取消
    getcancle() {
      this.$store.commit("getchangeDialog", false);
      this.$router.go(0);
    },
    //保存
    getsave() {
      const msg = qs.stringify({
        workCode: this.getCookie("username")
      });
      chooseApp(msg).then(res => {
        const data = res.data;
        if (data.success == true && data.data) {
          this.chooseList = data.data;
          this.chooseList.forEach(item => {
            if (this.listId.indexOf(item.uuid) == -1) {
              this.listId.push(item.uuid);
            } else {
              return this.listId;
            }
          });
        }
      });
      // this.$store.dispatch("getchooseApp", msg);
      this.Idlist = this.listId.join(",");
      const data = qs.stringify({
        workCode: this.getCookie("username"),
        appUuid: this.Idlist
      });
      //添加常用
      addIcon(data).then(res => {
        const data = res.data;
        if (data.success == true) {
          // this.showIcon = true;
          //获取选中列表
          const msg = qs.stringify({
            wworkCode: this.getCookie("username")
          });
          // this.$store.dispatch("getchooseApp", msg);
          chooseApp(msg).then(res => {
            const data = res.data;
            if (data.success == true && data.data) {
              this.chooseList = data.data;
              this.chooseList.forEach(item => {
                if (this.listId.indexOf(item.uuid) == -1) {
                  this.listId.push(item.uuid);
                } else {
                  return this.listId;
                }
              });
            }
          });
          this.Idlist = this.listId.join(",");
          //常用列表
          this.$store.dispatch("getCommonuse", msg);
        } else {
          console.log(data.errorMsg, "error");
        }
      });
      this.$store.commit("getchangeDialog", false);
      this.$router.go(0);
    }
  }
};
</script>

<style lang="less" scoped>
.show {
  display: none !important;
}
.rote {
  transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
}
.containers {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
}
.checked {
  // background: #f10d3b !important;
  img {
    width: 18px;
    height: 18px;
  }
}
.dialog_wrap {
  width: 720px;
  height: 600px;
  position: fixed;
  border-radius: 4px;

  left: 50%;
  top: 50%;
  margin-top: -300px;
  margin-left: -360px;
  // border:1px solid #f00;
  .dioloaLeft {
    width: 360px;
    height: 600px;
    background: #f5f6f8;
    float: left;
    border-radius: 4px 0 0 4px ;
    .header_con {
      height: 40px;

      display: flex;
      align-items: center;
      margin-top: 10px;
      .imgs {
        width: 6px;
        height: 6px;
        margin-left: 20px;
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 6px;
          height: 6px;
        }
      }
      .titleCon {
        font-size: 14px;
        color: #3a404c;
        font-weight: 500;
        cursor: pointer;
      }
    }
    .scrollwrap {
      height: 542px;
      overflow: hidden;
      .navList {
        height: 542px;
        width: 380px;
        overflow: auto;
      }
    }

    .itemCon {
      height: 40px;
      display: flex;
      align-items: center;
      margin-top: 8px;
      .imgIcon {
        width: 51px;
        height: 32px;
        margin-left: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 60%;
        }
      }
      .itemTit {
        display: block;
        width: 247px;
        font-size: 13px;
        color: #757980;
        text-align: left;
      }
      .checkBoxs1 {
        border: 1px solid #c4c7cc;
        width: 18px;
        height: 18px;
        display: block;
        background: #fff;
        border-radius: 50%;
        float: right;
        margin-right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        img {
          width: 100%;
        }
      }
      .discheck {
        background: #edeef0 !important;
      }
      .checkBoxs {
        width: 18px;
        height: 18px;
        display: block;
        background: #edeef0;
        border: 1px solid #c4c7cc;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        img {
          width: 18px;
        }
      }
      &:hover {
        background: #edeef0;
      }
    }
  }
  .dialogRight {
    width: 360px;
    height: 600px;
    background: #ffffff;
    float: left;
    border-radius: 0px 4px 4px 0px ;
    .top_tit {
      margin-left: 20px;
      height: 44px;
      line-height: 44px;
      font-size: 12px;
      color: #3a404c;
      // line-height: 18px;
    }
    .addCon {
      font-size: 12px;
      color: #3a404c;
    }
    .scroll_list {
      height: 492px;
      overflow: hidden;

      .addlist {
        height: 492px;
        margin-right: 4px;
        overflow: auto;
      }
    }
    .additem {
      height: 40px;
      display: flex;
      align-items: center;
      font-size: 13px;
      color: #757980;
      margin-bottom: 8px;
      .imgIcon {
        width: 51px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 10px;
        img {
          width: 60%;
        }
      }
      .titleCon {
        width: 261px;
        display: block;
        text-align: left;
      }
      .deleIcon {
        width: 18px;
        height: 18px;
        display: block;
        cursor: pointer;

        background: url("../assets/image/deletIcon.png") no-repeat center;
        background-size: 18px 18px;
        color: #fff;
        border-radius: 50%;
        font-size: 14px;
        text-align: center;
        line-height: 18px;
      }
    }
  }
}
.scrollList::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 3px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 180px;
  border-radius: 3px;
}
.scrollList::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  background: #c4c7cc;
  border-radius: 3px;
  height: 180px;
}
.scrollList::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  border-radius: 10px;
}
.bottonCon {
  width: 360px;
  height: 64px;
  display: flex;
  align-items: center;
  span {
    display: block;
    width: 80px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    font-size: 13px;
    border-radius: 3px;
  }
  .cancles {
    color: #757980;
    background: #f5f6f8;
    margin: 0 16px 0 164px;
    // border-radius: 3px;
    cursor: pointer;
  }
  .saves {
    color: #ffffff;
    background: #f10d3b;
    // border-radius: 3px;
    cursor: pointer;
  }
}
.confirm {
  width: 200px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  font-size: 12px;
  color: #ffffff;
  background: #fa655a;
  position: absolute;
  left: 50%;
  margin-left: -100px;
  top: 20px;
  z-index: 999;
  border-radius: 21px;
}
</style>
