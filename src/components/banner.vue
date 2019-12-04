<template>
  <!-- <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img class="swiper_img" src="../assets/image/swiperit.png" alt>
      </div>
      <div class="swiper-slide">
        <img class="swiper_img" src="../assets/image/swiperit.png" alt>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div> -->
  <div class="bannerw">
    <img class="swiper_img" src="../assets/image/swiperit.png" alt>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Banner",
  data() {
    return {};
  },
  // mounted() {
  //   new Swiper(".swiper-container", {
  //     loop: true,
  //     autoplay:true,
  //     direction: "horizontal", // 垂直切换选项
  //     // 如果需要分页器
  //     pagination: {
  //       el: ".swiper-pagination"
  //     }
  //     // 如果需要前进后退按钮
  //   });
  // }
};
</script>
<style lang="less" scoped>
.bannerw{
   width: 620px !important;
  height: 120px !important;
  img{
    width:100%;
    border-radius: 4px;
  }
}
.swiper-containe,
.swiper-wrapper {
  width: 620px !important;
  height: 120px !important;
  position: relative;
}
.swiper_img {
  width: 620px;
  height: 120px;
}
.swiper-pagination {
  width: 50px !important;
  height: 2px;
  background: rgba(255, 255, 255, 0.4);
  position: absolute !important;
  left: 50% !important;
  bottom: 8px !important;
  margin-left: -25px !important;
  display: flex !important;
}
</style>
<style>
.swiper-pagination-bullet {
  width: 25px !important;
  height: 2px !important;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 0;
}
.swiper-pagination-bullet-active {
  width: 25px;
  height: 2px;
  background: #fff !important;
  padding: 0;
}
.swiper-container-horizontal
  > .swiper-pagination-bullets
  .swiper-pagination-bullet {
  margin: 0 !important;
}
</style>

