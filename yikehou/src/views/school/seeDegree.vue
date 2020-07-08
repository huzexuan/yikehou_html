
<style>
.tab {
  margin: 43px 0 34px;
}
.tab li {
  margin-right: 84px;
  cursor: pointer;
  font-size: 16px;
}
.tab li.active {
  color: #0168b7;
  font-weight: bold;
}
.seeDegree_list>li {
  display: block;
  width: 100%;
  height: 265px;
  background: url(./images/seeDegree_bg.jpg) no-repeat 100% 100%;
  background-size:100% 100%;
  margin-top: 22px;
  box-sizing: border-box;
  padding: 22px 15px;
}
.seeDegree_list>li .title{
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 52px;
}
.seeDegree_list>li .title>span:nth-child(2){
  display: inline-block;
  margin-left: 60px;
  font-weight: normal;
}
.seeDegree_item li{
  width: 195px;
  height: 46px;
  background: #fff;
  margin:0 0 22px 38px;
  box-sizing: border-box;
}
.seeDegree_item li:nth-child(5n+1){
  margin-left: 0;
}
.seeDegree_item li>span{
  vertical-align: middle;
}
.seeDegree_item li>span:nth-child(1){
  display: inline-block;
  width: 72px;
  height: 46px;
  background: url(./images/seeDegree_item_bg.jpg)no-repeat 100% 100%;
  background-size:100% 100%;
  color: #fff;
  text-align: center;
  line-height: 46px;
  font-size: 24px;
  font-weight: bold;
}
.seeDegree_item li>span:nth-child(2){
  display: inline-block;
  width: 78px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}
</style>
<template>
  <div>
    <el-header>
      <head_nav :navId="1" ></head_nav>
    </el-header>
    <el-main>
      <div class="height_div"></div>
      <bannerdel :id='1' :navid="3"></bannerdel>
      <el-container>
        <ul class="tab">
          <li class="active">课程热度排名</li>
          <li @click="_condition">学生报课情况</li>
        </ul>
        <ul class="seeDegree_list">
          <li v-for="(item,index) in reduList" :key="index">
            <p class="title">
              <span>{{item.cate}}</span>
              <!-- <span>下学期意向课报名人数：</span> -->
              <span></span>
            </p>
            <ul class="seeDegree_item">
              <li v-for="(i,num) in item.list" :key="num">
                <span>{{ num + 1 }}</span>
                <span>{{i.title}}</span>
                <span>{{i.number}}人</span>
              </li>
            </ul>
          </li>
        </ul>
      </el-container>
      <div class="footer_height" style="height:458px"></div>
      <!-- footer -->
      <footer_nav></footer_nav>
    </el-main>
  </div>
</template>

<script>
import head_nav from "../../components/header.vue";
import footer_nav from "../../components/footer.vue";
import bannerdel from "../../components/herder_bannerdel.vue";
import axios from "axios";
import ajax from "../../assets/ajax/api";
export default {
  data() {
    return {
      reduList:[]
    };
  },
  created() {
    this.init();
  },
  methods: {
    _condition(){
      this.$router.push({ name: "SeeCondition" });
    },
    // 年级分类
    async init() {
      let params = new URLSearchParams();
      params.append("token", sessionStorage.getItem("token"));
      let _res = await ajax.seeDegree(params);
      if (_res.code == 0) {
        this.reduList = _res.data
      }
    },
  },
  components: {
    head_nav,
    bannerdel,
    footer_nav
  }
};
</script>

