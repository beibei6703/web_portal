<template>
  <div class="headers">
    <div class="headerWrap">
      <div class="topwraper">
        <div class="topleft">
          <img src="../assets/image/LOGO.png" alt>
          <!-- <span class="toptit">统一门户</span> -->
        </div>
        <ul class="centerNav">
          <!-- <router-link
            class="itemLi"
            v-for="(item,index) in Menu"
            activeClass="active"
            ref="game"
            :to="item.href"
            tag="li"
            :key="index"
          >{{item.tab}}</router-link>
            -->

      <router-link active-class="active" class="itemLi" tag="li" to="/index"  > 导航</router-link>
      <router-link active-class="active" class="itemLi" tag="li" to="/container"  > 门户</router-link>
       <div class="itemLi"  @click="getcomfirm">日程 </div>
        <div class="itemLi" @click="getopenknow"> 知识</div>
        </ul>
        <div class="rightCon">
          <div class="weatherCon">
            <img
              class="weathimg"

              :src="weatherImg"
              alt
            >
            <div id="allmap"></div>
            <span class="decW">{{weather}}</span>
            <div class="dateCons">
              <span class="lines"></span>
              <span>{{date}}</span>
              <span>{{day}}</span>
            </div>
            <div class="account_C" @mouseover='mouseEnter' @mouseleave='mouseLeave'>
              <div class="account">
                <img v-if="getpersonImg" :src="getpersonImg" alt>
                <img v-if="getpersonImg==''" src="../assets/image/Group444.png" alt>
              </div>
              <img style="width:6px;height:6px;margin-left:4px"  src="../assets/image/transH.png" alt>
            </div>
          </div>
        </div>
        <div class="confimLogin" v-if="Isconfirm"  @mouseover='clearTimer' @mouseleave='Isconfirm=false'>
          <a class="itemsLogin margin_10" href="http://sso.api.com/#/editpsd">
            <img src="../assets/image/changepsw.png" alt>
            <span>修改密码</span>
          </a>
          <a class="itemsLogin" href="//sso.api.com/logout">
            <img src="../assets/image/logout.png" alt>
            <span>退出登录</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import fog from '../assets/image/fog.png'
import rain from '../assets/image/rain.png'
import snow from '../assets/image/snow.png'
import sun from '../assets/image/sun.png'
import thunder from '../assets/image/thunder.png'
import wind from '../assets/image/wind.png'
import cloudy from '../assets/image/cloudy.png'
import night_cloud from '../assets/image/night_cloud.png'
import qing_cloud from '../assets/image/qing_cloud.png'
import rain_snow from '../assets/image/rain_snow.png'
import night_sun from '../assets/image/night_sun.png'
import { ISlogin } from "../api/login.js";
let menu = [
  { tab: "导航", href: "/index" },
  { tab: "门户", href: "/container" },
  { tab: "流程", href: "/default" },
  { tab: "日程", href: "/pro" },
  { tab: "知识", href: "/knowledge" }
];
export default {
  name: "Header",
  data() {
    return {
      Menu: menu,
      Isconfirm: false,
      cityName: "",
      weather: "",
      date: "",
      day: "",
      weatherImg:"",
      week: [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
      ]
    };
  },
  computed: {
    getpersonImg() {
      return this.$store.state.navigation.personImg;
    }
  },
  created() {
    this.$store.dispatch("getpeoInfo", this.getCookie("username"));
    ISlogin(this.getCookie("JESSIONID")).then(res => {
      const data = res.data;
      if (data.code == 0) {
        // window.location.href ="http://sso.api.com/#/" @todo
      }
    });
  },
  mounted() {

    setTimeout(() => {
      var map = new BMap.Map("allmap");
      var mylocation = document.getElementsByClassName("decW")[0];
      var point = new BMap.Point(116.331398, 39.897445);
      map.centerAndZoom(point, 12);
      var that = this;
      function myFun(result) {
        that.cityName = result.name;
        that.getweather();
      }
      var myCity = new BMap.LocalCity();
      myCity.get(myFun);
    }, 800);

    let date = new Date();
    let mouth = date.getMonth() + 1;
    let day = date.getDate();
    let weekDay = date.getDay();
    this.date = mouth + "月" + day + "日";
    this.day = this.week[weekDay];
  },
  methods: {
    mouseEnter(){
        this.Isconfirm=true;
    },
    mouseLeave(){
        this.timer = setTimeout(()=>{
            this.Isconfirm=false;
        },300)
    },
    clearTimer(){
        clearTimeout(this.timer);
        this.timer = null;
    },
    getcomfirm(){
      alert("建设中，即将开放")
    },
    getopenknow(){
      window.open("http://api.api.com/information_pc/index.html")
    },
    skip(a) {
      this.$router.push(a);
      this.Isconfirm = false;
    },
    getconfirm() {
      this.Isconfirm = !this.Isconfirm;
    },
    getweather() {
        let hours = new Date().getHours();
      axios
        .get(
          "https://restapi.amap.com/v3/weather/weatherInfo?key=95155afb9e3206ad29f9935d5545de6c&city=" +
            this.cityName +
            ""
        )
        .then(res => {
          // const data = res.data;
          // if (data.infocode == 10000 && data.lives) {
          //   this.weather = data.lives[0].weather;
          // }
          const data = res.data;
          if (data.infocode == 10000 && data.lives) {
            let weather = data.lives[0].weather;
            this.weather = weather;
            if(hours>19){
                if(weather.indexOf('晴')!=-1){
                    this.weatherImg = night_sun;
                }else if(weather.indexOf('云')!=-1){
                    this.weatherImg = night_cloud;
                }else if(weather.indexOf('风')!=-1){
                    this.weatherImg = wind;
                }else if(weather.indexOf('雾')!=-1){
                    this.weatherImg = fog;
                }else if(weather.indexOf('雨')!=-1){
                    if(weather.indexOf('阵雨')!=-1){
                        this.weatherImg = thunder;
                    }else{
                        this.weatherImg = rain;
                    }
                }else if(weather.indexOf('雪')!=-1){
                    if(weather.indexOf('雨')!=-1){
                        this.weatherImg = rain_snow;
                    }else{
                        this.weatherImg = snow;
                    }
                }else if(weather.indexOf('阴')!=-1){
                    this.weatherImg = cloudy;
                };
                return;
            }
            if(weather.indexOf('云')!=-1){
                this.weatherImg = qing_cloud;
            }else if(weather.indexOf('晴')!=-1){
                this.weatherImg = sun;
            }else if(weather.indexOf('风')!=-1){
                this.weatherImg = wind;
            }else if(weather.indexOf('雾')!=-1){
                this.weatherImg = fog;
            }else if(weather.indexOf('雨')!=-1){
                if(weather.indexOf('阵雨')!=-1){
                    this.weatherImg = thunder;
                }else{
                    this.weatherImg = rain;
                }
            }else if(weather.indexOf('雪')!=-1){
                if(weather.indexOf('雨')!=-1){
                    this.weatherImg = rain_snow;
                }else{
                    this.weatherImg = snow;
                }
            }else if(weather.indexOf('阴')!=-1){
                this.weatherImg = cloudy;
            }
          }
        });
    }
  }
};
</script>

<style lang="less" scoped>
// .rote{
//   transform: rotate(180deg);
//   -webkit-transform: rotate(180deg);
//   -moz-transform: rotate(180deg);
//   -o-transform: rotate(180deg);
//   -ms-transform: rotate(180deg);
// }
.headers {
  height: 70px;
}
.weathimg {
  width: 50px !important;
  height: 50px !important;
}
.headerWrap {
  width: 100%;
  height: 70px;
  margin: 0 auto;
   font-family: Avenir,Helvetica,Arial,sans-serif;
   font-weight: 300;
  background: #fff;
  position: fixed;
  top: 0;
  z-index: 88;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.08);
}
.topwraper {
  width: 1240px;
  height: 70px;
  margin: 0 auto;
  background: #fff;
  position: relative;

  .topleft {
    height: 70px;
    width: 130px;
    display: flex;
    align-items: center;
    margin-left: 20px;
    float: left;
    img {
      width: 120px;
      height: 36px;
    }
    .toptit {
      font-size: 18px;
      color: #3a414c;
      margin-left: 12px;
    }
  }
  .centerNav {
    margin-left: 88px;
    float: left;
    .itemLi {
      display: block;
      width: 80px;
      height: 70px;
      float: left;
      text-align: center;
      line-height: 70px;
      font-size: 14px;
      color: #757980;
      letter-spacing: -0.34px;
      cursor: pointer;
      &:hover {
        background: #f5f6f8 !important;
      }
    }
  }
  .rightCon {
    margin-left: 278px;
    height: 100%;
    float: left;
    .weatherCon {
      height: 70px;
      display: flex;
      align-items: center;
      display: flex;
      align-items: center;

      .account_C {
        height: 24px;
        display: flex;
        align-items: center;
        margin-left: 30px;
        img {
          width: 20px;
          height: 20px;
        }
      }
      .account {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      img {
        width: 30px;
        height: 30px;
      }
      .decW {
        font-size: 14px;
        color: #a1a7b3;
        letter-spacing: -0.34px;
        // margin-left: 8px;
      }
      .dateCons {
        height: 15px;
        margin-left: 14px;
        display: flex;
        align-items: center;
        span {
          font-size: 14px;
          color: #a1a7b3;
          line-height: 20px;
          margin-right: 10px;
          letter-spacing: -0.34px;
        }
        .lines {
          display: block;
          width: 1px;
          height: 16px;
          background: #a1a7b3;
        }
      }
    }
  }
}
.confimLogin {
  width: 180px;
  height: 116px;
  background: #fff;
  // border:1px solid #f00;
  position: absolute;
  border-radius: 4px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  top: 70px;
  right: 40px;
  z-index: 999;
  .itemsLogin {
    width: 180px;
    height: 48px;
    display: flex;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
      display: block;
      border: 0;
      margin-left: 10px;
    }
    span {
      font-size: 14px;
      color: #757980;
      width: 58px;
      height: 24px;
      line-height: 24px;
      margin-left: 6px;
    }
    &:hover {
      background: #f5f6f8 !important;
      color: #3a404c !important;
    }
  }
}
.active {
  color: #f10d3b !important;
  //   background: #F5F6F8 !important;
}
.margin_10 {
  margin-top: 10px;
}
.active_login {
  background: #f5f6f8 !important;
  color: #3a404c !important;
}
</style>
