<template>
  <div class="header">
        <div class="img "><img :src="data.avatar"/></div>
        <div class="info">
          <div class="name bottom10">{{data.name}}</div>
          <div class="workcode bottom10">工号：{{data.workCode}}</div>
          <div class="tags bottom10"><span class="tag">{{data.employTypeName}}</span><span class="tag">{{data.companyYear}}</span></div>
          <div class="title bottom10">{{data.positionName}}</div>
          <div class="part bottom10">{{data.departmentTree}}</div>
        </div>
    </div>
</template>
<script>
import { getBriefInfo } from "../../../api/hrinfo";
export default {
    data() {
      return {
        data: {}
      }
    },
    created() {
    getBriefInfo().then(res => {
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
.bottom10 {
  margin-bottom: 10px;
}
.header {
        display: flex;
        height: 180px;
        border-radius: 4px 4px 0 0;
        background: #fff;
        border-bottom: 1px solid #eee;
     .img {
        width: 230px;
        line-height: 180px;
        text-align: center;
        img {
          width: 130px;
          height: 130px;
          border-radius: 50%;
        }
    }
    .info {
      flex: 1;
      padding: 31px 0;
      color: #3A404C;
      .name {
        font-size: 16px;
        line-height: 15px;
        font-weight: bold;
      }
      .workcode {
        font-size: 15px;
        line-height: 15px;
      }
      .tags {
        font-size: 12px;
        color: #F10D3B;
        line-height: 12px;
        .tag {
          border: 1px solid #F10D3B;
          border-radius: 3px;
          padding: 0 7px;
          margin-right: 10px;
        }
      }
      .title {
        font-size: 15px;
        line-height: 15px;
      }
      .part {
        font-size: 15px;
        line-height: 15px;
      }
    }
}
</style>
