<style >
.student_banner {
  width: 100%;
  height: 402px;
  background: url(./images/index_banner.jpg) no-repeat 100% 100%;
  background-size: 100% 100%;
  position: relative;
  z-index: 11;
}
.user_msg {
  font-size: 16px;
  margin: 0 42px 0 32px;
}
.user_img {
  width: 134px;
  height: 134px;
  border-radius: 50%;
  margin-right: 25px;
}
.student_user_img{
  background:url(./images/user_img.png)no-repeat 100% 100%;
  background-size: 100% 100%;
}
.school_user_img{
  background:url(./images/user_img2.png)no-repeat 100% 100%;
  background-size: 100% 100%;
}
.user_box {
  display: flex;
  align-items: center;
  padding: 95px 0 108px;
}
.user {
  color: #fff;
}
.user > p:nth-child(1) {
  margin-bottom: 50px;
  display: flex;
  align-items: center;
}
.name {
  font-size: 24px;
}
.user_upimg {
  display: inline-block;
  padding: 0 15px;
  height: 30px;
  background: #fff;
  text-align: center;
  line-height: 30px;
  font-size: 16px;
  color: #0168b7;
  cursor: pointer;
  margin-left: 20px;
  width: auto !important;
}
.user > p:nth-child(2) {
  font-size: 24px;
}
.user > p:nth-child(2) span {
  font-size: 16px;
  display: inline-block;
  margin-right: 16px;
}
.user > p:nth-child(2) span:nth-child(2) {
  margin-left: 122px;
}
</style>
<template>
  <div class="student_banner" v-if="id == 1">
    <div class="Box_content">
      <div class="user_box">
        <img :src="school_img" alt class="user_img school_user_img" />
        <div class="user">
          <p>
            <span class="name">{{school_name}}</span>
            <el-upload
              action
              class="avatar-uploader"
              :show-file-list="false"
              :before-upload="beforeAvatarUpload"
              :http-request="SchooluploadImg"
            >
              <span class="user_upimg">上传学校LOGO</span>
            </el-upload>
          </p>
          <p>
            <span>已选课程</span>
            {{item.course_number}}
            <span>剩余可选课程</span>
            {{item.sheng_number}}
          </p>
        </div>
      </div>
      <student_nav :id="navid"></student_nav>
    </div>
  </div>
  <div class="student_banner" v-else>
    <div class="Box_content">
      <div class="user_box">
        <img :src='user_img' alt class="user_img student_user_img" />
        <div class="user">
          <p>
            <span class="name">{{user_name}}</span>
            <span class="user_msg">{{school_name}}&nbsp;&nbsp;&nbsp;&nbsp;{{nianjie}}{{user_class}}</span>
            <el-upload
              action
              class="avatar-uploader"
              :show-file-list="false"
              :before-upload="beforeAvatarUpload2"
              :http-request="SchooluploadImg2"
            >
              <span class="user_upimg">上传头像</span>
            </el-upload>
          </p>
          <p>
            <span>已选课程</span>
            {{CourseNum.has_course}}
            <span>剩余可选课程</span>
            {{CourseNum.sheng}}
          </p>
        </div>
      </div>
      <student_nav :id="navid"></student_nav>
    </div>
  </div>
</template>

<script>
import student_nav from "./studentNav.vue";
import $ from "jquery";
import axios from "axios";
import ajax from "../assets/ajax/api";
export default {
  props: {
    id: {
      type: Number
    },
    navid: {
      type: Number
    }
  },
  data() {
    return {
      user_name: sessionStorage.getItem("user_name"),
      nianjie: sessionStorage.getItem("nianjie"),
      user_class: sessionStorage.getItem("class"),
      school_name: sessionStorage.getItem("school_name"),
      school_img: sessionStorage.getItem("school_img"),
      user_img: sessionStorage.getItem("user_img"),
      CourseNum: {},
      item: {}
    };
  },
  created() {
    if(this.id == 1){
      this.init()
    }else{
      this.CourseNumber()
    }
  },
  methods: {
    // 学校端
    async init() {
      const form = new FormData();
      form.append("token", sessionStorage.getItem("token"));
      let _res = await ajax.SchoolcourseNumber(form);
      if (_res.code == 0) {
        this.item = _res.data;
      }
    },
    async SchooluploadImg(item) {
      const form = new FormData();
      form.append("img", item.file);
      form.append("token", sessionStorage.getItem("token"));
      let _res = await ajax.updateLogo(form);
      if (_res.code == 0) {
        this.school_img = _res.data.img
        this.$message.success(_res.message);
        sessionStorage.setItem("school_img", _res.data.img);
      }
    },

    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是JPG、PNG格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    // 学生端
    async CourseNumber() {
      let params = new URLSearchParams();
      params.append("token", sessionStorage.getItem("token"));
      let _res = await ajax.getHasCourseNumber(params);
      if (_res.code == 0) {
        this.CourseNum = _res.data;
      }
    },
    async SchooluploadImg2(item) {
      const form = new FormData();
      form.append("img", item.file);
      form.append("token", sessionStorage.getItem("token"));
      let _res = await ajax.updateImg(form);
      if (_res.code == 0) {
        this.user_img = _res.data.img
        console.log(_res.data.img)
        this.$message.success(_res.message);
        sessionStorage.setItem("user_img", _res.data.img);
      }
    },

    beforeAvatarUpload2(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是JPG、PNG格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
    
  },
  components: {
    student_nav
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

