
<style>
.feedback_bg {
  background: url(./images/feedback_bg.jpg) no-repeat 100% 100%;
  background-size: 100% 100%;
  padding-top: 50px;
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
  background-size: 100% 100%;
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
  background-size: 100% 100%;
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
  background-size: 100% 100%;
  cursor: pointer;
  margin-right: 15px;
}
.active_evaluate {
  background: url(./images/star_active.png) no-repeat 100% 100% !important;
}
.evaluate_box .evaluate span.evaluate_active {
  background: url(./images/star_active.png) no-repeat 100% 100%;
  background-size: 100% 100%;
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
.feedback_btn {
  width: 316px;
  height: 100px;
  background: url(./images/feedback_btnBg.png) no-repeat 100% 100%;
  background-size: 100% 100%;
  color: #fff;
  font-size: 24px;
  text-align: center;
  line-height: 100px;
  margin: 150px auto 0;
  cursor: pointer;
}
</style>
<template>
  <div>
    <el-header>
      <head_nav :navId="1"></head_nav>
    </el-header>
    <el-main>
      <div class="height_div"></div>
      <bannerdel :navid="3"></bannerdel>
      <div class="studentcontent_box feedback_bg">
        <div class="Box_content">
          <p class="feedback_title">选择评价的课程</p>
          <ul class="feedback_List">
            <li
              v-for="(item,index) in MyCourse"
              :key="index"
              :class="[MyCourse_id == item.id ? 'feedback_active':'']"
              @click="feedbackCourse(item.id)"
            >{{item.title}}</li>
          </ul>
          <div class="evaluate_box">
            <p class="feedback_title">评价课程</p>
            <div class="evaluate evaluate1">
              <span @mouseover="mouseOver1(1)"></span>
              <span @mouseover="mouseOver1(2)"></span>
              <span @mouseover="mouseOver1(3)"></span>
              <span @mouseover="mouseOver1(4)"></span>
              <span @mouseover="mouseOver1(5)"></span>
            </div>
            <p class="star_num">{{courseNum}} 星</p>
          </div>
          <div class="evaluate_box">
            <p class="feedback_title">评价老师</p>
            <div class="evaluate evaluate2">
              <span @mouseover="mouseOver(1)"></span>
              <span @mouseover="mouseOver(2)"></span>
              <span @mouseover="mouseOver(3)"></span>
              <span @mouseover="mouseOver(4)"></span>
              <span @mouseover="mouseOver(5)"></span>
            </div>
            <p class="star_num">{{teacherNum}} 星</p>
          </div>
          <div class="leave_box">
            <p>留言反馈：</p>
            <textarea class="leave_inp"></textarea>
          </div>
          <div class="feedback_btn" @click="up_form">提交</div>
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
import axios from "axios";
import ajax from "../../assets/ajax/api";
export default {
  data() {
    return {
      user_name: sessionStorage.getItem("user_name"),
      teacherNum: 0,
      courseNum: 0,
      MyCourse: [],
      MyCourse_id: ""
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      let params = new URLSearchParams();
      params.append("token", sessionStorage.getItem("token"));
      params.append("result", 2);
      let _res = await ajax.getMyCourse(params);
      if (_res.code == 0) {
        this.MyCourse = _res.data;
        this.MyCourse_id = _res.data[0].id;
      }
    },
    //   评价课程
    mouseOver1(index) {
      this.courseNum = index;
      $(".evaluate1 span").removeClass("active_evaluate");
      for (var i = 0; i < index; i++) {
        $(".evaluate1 span")
          .eq(i)
          .addClass("active_evaluate");
      }
    },
    //   评价老师
    mouseOver(index) {
      this.teacherNum = index;
      $(".evaluate2 span").removeClass("active_evaluate");
      for (var i = 0; i < index; i++) {
        $(".evaluate2 span")
          .eq(i)
          .addClass("active_evaluate");
      }
    },
    feedbackCourse(id) {
      this.MyCourse_id = id;
    },
    async up_form() {
      let content = $(".leave_inp").val();
      if (this.courseNum == 0) {
        this.$message.warning(`请为课程打星`);
        return;
      }
      if (this.teacherNum == 0) {
        this.$message.warning(`请为老师打星`);
        return;
      }
      if (content == "" || content.length < 5) {
        this.$message.warning(`请填写评论内容，最少6个字`);
        return;
      }
      let params = new URLSearchParams();
      params.append("token", sessionStorage.getItem("token"));
      params.append("course_id", this.MyCourse_id);
      params.append("course_star", this.courseNum);
      params.append("teacher_star", this.teacherNum);
      params.append("content", content);
      let _res = await ajax.FeedBack(params);
      if (_res.code == 0) {
        this.$message.success("评价成功");
      }
    }
  },
  components: {
    head_nav,
    bannerdel,
    footer_nav
  }
};
</script>

