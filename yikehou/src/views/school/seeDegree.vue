
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
      <head_nav :navId="1" :user="1"></head_nav>
    </el-header>
    <el-main>
      <div class="height_div"></div>
      <div class="student_banner">
        <el-container>
          <div class="user_box">
            <img src alt class="user_img" />
            <div class="user">
              <p>
                <span class="name">保定市高新区小学</span>
                <span class="user_upimg">上传学校LOGO</span>
              </p>
              <p>
                <span>已选课程</span>4
                <span>剩余可选课程</span>1
              </p>
            </div>
          </div>
          <student_nav :id="3" :user="1"></student_nav>
        </el-container>
      </div>
      <el-container>
        <ul class="tab">
          <li class="active">课程热度排名</li>
          <li @click="_condition">学生报课情况</li>
        </ul>
        <ul class="seeDegree_list">
          <li>
            <p class="title">
              <span>一年级</span>
              <span>下学期意向课报名人数：</span>
              <span>6</span>
            </p>
            <ul class="seeDegree_item">
              <li>
                <span>1</span>
                <span>英语英语</span>
                <span>50人</span>
              </li>
              <li>
                <span>2</span>
                <span>英语</span>
                <span>50人</span>
              </li>
              <li>
                <span>3</span>
                <span>英语</span>
                <span>50人</span>
              </li>
              <li>
                <span>4</span>
                <span>英语</span>
                <span>50人</span>
              </li>
              <li>
                <span>5</span>
                <span>英语</span>
                <span>50人</span>
              </li>
              <li>
                <span>6</span>
                <span>英语</span>
                <span>50人</span>
              </li>
            </ul>
          </li>
          <li>
            <p class="title">
              <span>二年级</span>
              <span>下学期意向课报名人数：</span>
              <span>6</span>
            </p>
            <ul class="seeDegree_item">
              <li>
                <span>1</span>
                <span>英语英语</span>
                <span>50人</span>
              </li>
              <li>
                <span>2</span>
                <span>英语</span>
                <span>50人</span>
              </li>
              <li>
                <span>3</span>
                <span>英语</span>
                <span>50人</span>
              </li>
              <li>
                <span>4</span>
                <span>英语</span>
                <span>50人</span>
              </li>
              <li>
                <span>5</span>
                <span>英语</span>
                <span>50人</span>
              </li>
              <li>
                <span>6</span>
                <span>英语</span>
                <span>50人</span>
              </li>
            </ul>
          </li>
          <li>
            <p class="title">
              <span>三年级</span>
              <span>下学期意向课报名人数：</span>
              <span>6</span>
            </p>
            <ul class="seeDegree_item">
              <li>
                <span>1</span>
                <span>英语英语</span>
                <span>50人</span>
              </li>
              <li>
                <span>2</span>
                <span>英语</span>
                <span>50人</span>
              </li>
              <li>
                <span>3</span>
                <span>英语</span>
                <span>50人</span>
              </li>
              <li>
                <span>4</span>
                <span>英语</span>
                <span>50人</span>
              </li>
              <li>
                <span>5</span>
                <span>英语</span>
                <span>50人</span>
              </li>
              <li>
                <span>6</span>
                <span>英语</span>
                <span>50人</span>
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
import student_nav from "../../components/studentNav.vue";

export default {
  data() {
    return {};
  },
  methods: {
    _condition(){
      this.$router.push({ name: "SeeCondition" });
    }
  },
  components: {
    head_nav,
    student_nav,
    footer_nav
  }
};
</script>

