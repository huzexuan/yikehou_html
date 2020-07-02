
<style>
.feedback_bg {
  background: url(./images/feedback_bg.jpg) no-repeat 100% 100%;
  background-size:100% 100%;
}
.content_box {
  padding-top: 55px;
}
.feedback_title {
  color: #fff;
  font-size: 18px;
}
.feedback_List li {
  width: 161px;
  height: 79px;
  background: url(./images/course_icon.png) no-repeat 100% 100%;
  background-size:100% 100%;
  cursor: pointer;
  margin-left: 62px;
  margin-top: 30px;
  text-align: center;
  line-height: 79px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
}
.feedback_List li:nth-child(5n + 1) {
  margin-left: 0;
}
.feedback_List li.feedback_active {
  background: url(./images/course_icon_active.png) no-repeat 100% 100%;
  background-size:100% 100%;
}
.evaluate_box {
  display: flex;
  align-items: center;
  margin-top: 60px;
}
.evaluate_box .feedback_title {
  margin-right: 78px;
}
.evaluate_box .evaluate span {
  display: inline-block;
  width: 16px;
  height: 16px;
  background: url(./images/star.png) no-repeat 100% 100%;
  background-size:100% 100%;
  cursor: pointer;
  margin-right: 15px;
}
.evaluate_box .evaluate span.evaluate_active {
  background: url(./images/star_active.png) no-repeat 100% 100%;
  background-size:100% 100%;
}
.evaluate_box .star_num {
  color: #fff;
  font-size: 18px;
  margin-left: 45px;
}
.leave_box {
  width: 100%;
  height: 290px;
  background: #014380;
  border: 2px solid #065ca5;
  box-sizing: border-box;
  border-radius: 10px;
  color: #fff;
  padding: 40px 20px;
  margin-top: 96px;
  font-size: 16px;
  overflow: hidden;
}
.leave_box p {
  float: left;
}
.leave_inp {
  width: calc(100% - 100px);
  height: 100%;
}
.leave_box textarea {
  outline: none;
  border: 0;
  background: #014380;
  font-size: 16px;
  color: #fff;
  resize: none;
}
.feedback_btn{
    width: 316px;
    height: 100px;
    background: url(./images/feedback_btnBg.png)no-repeat 100% 100%;
  background-size:100% 100%;
    color: #fff;
    font-size: 24px;
    text-align: center;
    line-height: 100px;
    margin:150px auto 0;
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
                <span class="name">张甜甜</span>
                <span class="user_msg">河北保定高开区小学 五年级六班</span>
                <span class="user_upimg">上传头像</span>
              </p>
              <p>
                <span>已选课程</span>4
                <span>剩余可选课程</span>1
              </p>
            </div>
          </div>
          <student_nav :id="3"></student_nav>
        </el-container>
      </div>
      <div class="studentcontent_box feedback_bg">
        <el-container>
          <p class="feedback_title">选择评价的课程</p>
          <ul class="feedback_List">
            <li class="feedback_active">英语</li>
            <li>油画</li>
            <li>油画</li>
            <li>油画</li>
            <li>油画</li>
            <li>油画油画油画</li>
          </ul>
          <div class="evaluate_box">
            <p class="feedback_title">评价课程</p>
            <div class="evaluate">
              <span @click="evaluate_course(0)"></span>
              <span @click="evaluate_course(1)"></span>
              <span @click="evaluate_course(2)"></span>
              <span @click="evaluate_course(3)"></span>
              <span @click="evaluate_course(4)"></span>
            </div>
            <p class="star_num">4 星</p>
          </div>
          <div class="evaluate_box">
            <p class="feedback_title">评价老师</p>
            <div class="evaluate">
              <span @click="evaluate_teacher(0)"></span>
              <span @click="evaluate_teacher(1)"></span>
              <span @click="evaluate_teacher(2)"></span>
              <span @click="evaluate_teacher(3)"></span>
              <span @click="evaluate_teacher(4)"></span>
            </div>
            <p class="star_num">4 星</p>
          </div>
          <div class="leave_box">
            <p>留言反馈：</p>
            <textarea class="leave_inp"></textarea>
          </div>
          <div class="feedback_btn">提交</div>
        </el-container>
      </div>
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
    //   评价课程
    evaluate_course(index) {},
    //   评价老师
    evaluate_teacher(index) {}
  },
  components: {
    head_nav,
    student_nav,
    footer_nav
  }
};
</script>

