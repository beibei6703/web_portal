<template>
    <div class="wraper">
        <!-- 导航头部 -->
        <Header></Header>
        <div class="containerWrap">
             <router-view/>
        </div>
        <!-- 页面公用底部 -->
       <Bottom></Bottom>
    </div>
</template>
<script>
import Container from '../components/container'
import Header from '../components/header'
import Bottom from '../components/bottomVue'
export default {
    name:"Home",
    components:{
        Header,
        Container,
        Bottom
    },
    data(){
        return{

        }
    },
    created(){
        console.log(this.getCookie('token'),"getCookie('token')")
    },
    methods:{
        skip(a){
            this.$router.push(a)
        }
    }
    
}
</script>
<style scoped lang="less">
.wraper{
    width:100%;
    height:100%;
    overflow-y: scroll;
    background: #f5f6f8;
}
// .topwraper{
//     width:1240px;
//     height:70px;
//     margin:0 auto;
//     background: #fff;
//     .topleft{
//          height:70px;
//          width:130px;
//          display:flex;
//          align-items: center;
//          margin-left:20px;
//            float:left;
//          img{
//              width:36px;
//              height:36px;
//          }
//          .toptit{
//              font-size: 18px;
//             color: #3A414C;
//             margin-left:12px;
//          }

//     }
//     .centerNav{
//         margin-left:88px;
//         float:left;
//         li{
//             display:block;
//             width:80px;
//             height:70px;
//             float:left;
//             text-align: center;
//             line-height:70px;
//             font-size: 14px;
//             color: #757980;
//             letter-spacing: -0.34px;
//             cursor: pointer;
//             &:hover{
//                 color: #F10D3B;
//           }
//         }
      
//     }
//     .rightCon{
//         margin-left:278px;
//         height:100%;
//         float:left;
//       .weatherCon{
//           height:70px;
//           display: flex;
//           align-items: center;
//           display:flex;
//           align-items: center;
//           img{
//               width:30px;
//               height:30px;
//           }
//           .decW{
//               font-size: 14px;
//             color: #A1A7B3;
//             letter-spacing: -0.34px;
//             margin-left:8px;
//           }
//           .dateCons{
//               height:15px;
//               margin-left:14px;
//               display:flex;
//               align-items: center;
//               span{
//                  font-size: 14px;
//                 color: #A1A7B3;
//                 line-height:20px;
//                 margin-right:10px;
//                 letter-spacing: -0.34px;
//               }
//               .lines{
//                   display:block;
//                   width:3px;
//                   height:20px;
//                   background: #A1A7B3;
//               }

//           }
//       }
//     }
// }
.container{
    width:1200px;
    height:44px;
    background: rgba(255,255,255,0.31);
    margin:0 auto;
   
}
.containerWrap{
    // padding-top:20px;
}
</style>


