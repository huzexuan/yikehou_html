
<style>
.information_box {
  width: 100%;
  height: 843px;
  background: url(./images/information_bg.jpg) no-repeat 100% 100%;
  background-size: 100% 100%;
}
.information_box .information_user_img_box {
  width: 281px;
  height: 281px;
  position: absolute;
  top: 267px;
  left: 112px;
  background: url(./images/user_img_bg.png) no-repeat 100% 100%;
  background-size: 100% 100%;
}
.information_box .information_user_img {
  width: 222px;
  height: 222px;
  border-radius: 50%;
  margin: 30px 32px;
}
.border_1 {
  position: absolute;
  top: 510px;
  left: 350px;
  color: #29eff9;
  font-size: 16px;
}
.border_1 p {
  margin: -40px 0 0 80px;
}
.all_course {
  width: 267px;
  height: 132px;
  background: url(./images/all_course_bg.png) no-repeat 100% 100%;
  background-size: 100% 100%;
  margin: 16px 0 0 10px;
  box-sizing: border-box;
  padding: 20px;
}
.all_course ul li {
  color: #fff;
  font-size: 16px;
  margin: 20px 0 0 20px;
}
.all_course .overflow_box {
  height: 82px;
}
.border_2 {
  position: absolute;
  top: 230px;
  left: 336px;
}
.border_2 > p {
  color: #29eff9;
  font-size: 16px;
  margin: 22px 0 0 216px;
}
.userDel_box {
  width: 305px;
  height: 534px;
  background: url(./images/userDel_bg.png) no-repeat 100% 100%;
  margin: -186px 0 0 405px;
  background-size: 100% 100%;
  box-sizing: border-box;
  padding: 62px 38px;
  color: #fff;
}
.userDel_box > p {
  margin-top: 34px;
  font-size: 16px;
  line-height: 26px;
}
.userDel_box > p:nth-child(1) {
  margin: 0;
}
.userDel_name {
  font-size: 24px !important;
  font-weight: bold;
}
.sex {
  display: inline-block;
  margin-right: 70px;
}
.userDel_box > p .block {
  display: block;
}
</style>
<template>
  <div>
    <el-header>
      <head_nav :navId="1"></head_nav>
    </el-header>
    <el-main>
      <div class="height_div"></div>
      <bannerdel :id="1"></bannerdel>
      <div class="information_box">
        <div class="Box_content" style="position: relative;">
          <div class="information_user_img_box">
            <img :src="item.img" alt class="information_user_img" />
          </div>
          <div class="border_1" v-if="item.has_course > 0">
            <img src="./images/border_1.png" alt />
            <p>所报课程</p>
            <div class="all_course">
              <div class="overflow_box">
                <ul>
                  <li v-for="(i,index) in item.course" :key="index">{{i.title}}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="border_2">
            <img src="./images/border_2.png" alt />
            <p>个人资料</p>
            <div class="userDel_box">
              <p class="userDel_name">{{item.nickname}}</p>
              <p class="userDel_des">
                <span class="sex">性别：{{item.sex == 1 ?'男':'女'}}</span>
                <span>年龄：{{item.age}}</span>
              </p>
              <p>班级：{{item.nianji}}{{item.class}}</p>
              <p>家长电话：{{item.phone}}</p>
              <p>
                <span class="block">身份证号：</span>
                <span>{{item.card_number}}</span>
              </p>
              <p>
                <span class="block">家庭住址：</span>
                <span>{{item.address}}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- footer -->
      <footer_nav></footer_nav>
    </el-main>
  </div>
</template>

<script>
import head_nav from "../../components/header.vue";
import footer_nav from "../../components/footer.vue";
import bannerdel from "../../components/herder_bannerdel.vue";

import $ from "jquery";
import axios from "axios";
import ajax from "../../assets/ajax/api";
export default {
  data() {
    return {
      item:{}
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      const { id } = this.$route.params;
      let params = new URLSearchParams();
      params.append("id", id);
      params.append("token", sessionStorage.getItem("token"));
      let _res = await ajax.getStudentDetail(params);
      if (_res.code == 0) {
        this.item = _res.data
      }
    }
  },
  components: {
    head_nav,
    bannerdel,
    footer_nav
  }
};
$(function() {
  if ($(".overflow_box>ul").height() > 82) {
    $(".overflow_box").css("overflow-y", "scroll");
  }
});
</script>

