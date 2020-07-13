
<style>
.content_box {
  height: 690px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding: 39px 0 77px 0;
}
.courseDetail_imgBox {
  width: 494px;
  box-sizing: border-box;
}
.swiper-slide img {
  width: 100%;
  height: 100%;
}
.gallery-top {
  height: 417px;
  width: 100%;
}
.gallery-thumbs {
  width: 100%;
  height: 107px;
  box-sizing: border-box;
  margin-top: 50px;
}
.gallery-thumbs .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}
.gallery-thumbs .swiper-slide-active {
  opacity: 1;
}
.swiper-button-next,
.swiper-button-prev {
  color: #333;
  outline: none;
}
.courseDetail_content {
  width: calc(100% - 494px);
  box-sizing: border-box;
  padding: 20px 52px;
}
.title {
  font-size: 24px;
  color: #000;
  margin-bottom: 28px;
}
.courseDetail_content .courseDetail_content_tag span {
  display: inline-block;
  margin-right: 55px;
  font-size: 16px;
  color: #666;
}
.teacher_title {
  font-size: 16px;
  margin: 38px 0 45px;
}
.courseDel {
  width: 100%;
  padding: 24px 0;
  background: #ecf6ff;
}
.courseDel li{
    width:32%;
    box-sizing: border-box;
    border-right: 1px solid #fff;
    height: 100%;
    text-align: center;
}
.courseDel li:last-child{
    border: 0;
}
.courseDel li p:nth-child(1){
    font-size: 16px;
    margin-bottom: 30px;
}
.courseDel li p:nth-child(2){
    font-size: 16px;
    color: #0168b7;
}
.submit_btn{
    float: right;
    width: 203px;
    height: 58px;
    border-radius: 50px;
    background: #0168b7;
    color: #fff;
    font-size: 18px;
    text-align: center;
    line-height: 58px;
    margin-top: 42px;
    cursor: pointer;
}
/* 课程简介 */
.intro_title {
  font-size: 24px;
  color: #000;
  font-weight: bold;
  margin-bottom: 38px;
}
.intro_content {
  line-height: 30px;
}
</style>
<template>
  <div>
    <el-header>
      <head_nav :navId="1" ></head_nav>
    </el-header>
    <el-main>
      <div class="height_div"></div>
      <div class="student_banner">
        <div class="Box_content">
          <div class="user_box">
            <img src alt class="user_img" />
            <div class="user">
              <p>
                <span class="name">{{user_name}}</span>
                <span
                  class="user_msg"
                >{{school_name}}&nbsp;&nbsp;&nbsp;&nbsp;{{nianjie}}{{user_class}}</span>
                <span class="user_upimg">上传头像</span>
              </p>
              <p>
                <span>已选课程</span>
                {{CourseNum.has_course}}
                <span>剩余可选课程</span>
                {{CourseNum.sheng}}
              </p>
            </div>
          </div>
          <student_nav :id="1"></student_nav>
        </div>
      </div>
      <!-- 面包屑导航 -->
      <crumbs_nav :breadlist="breadlist"></crumbs_nav>
      <div class="Box_content">
        <div class="content_box">
          <div class="courseDetail_imgBox">
            <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
              <swiper-slide v-for="(item,index) in item.imgs_arr" :key="index">
                <img :src="item" alt />
              </swiper-slide>
            </swiper>
            <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
              <swiper-slide v-for="(item,index) in item.imgs_arr" :key="index">
                <img :src="item" alt />
              </swiper-slide>
              <div class="swiper-button-next" slot="button-next"></div>
              <div class="swiper-button-prev" slot="button-prev"></div>
            </swiper>
          </div>
          <div class="courseDetail_content">
            <p class="title">{{item.title}}</p>
            <p class="courseDetail_content_tag">
              <span>所属分类：{{item.cate_text}}</span>
              <span>年级：{{item.nianji_text}}</span>
            </p>
            <p class="teacher_title" v-if="item.school_course">上课老师：{{item.school_course.teacher}}</p>
            <ul class="courseDel" v-if="item.school_course">
              <li>
                  <p>上课地点</p>
                  <p>{{item.school_course.place}}</p>
              </li>
              <li>
                  <p>上课时间</p>
                  <p>{{item.school_course.start_time}}</p>
              </li>
              <li>
                  <p>监管老师</p>
                  <p>{{item.school_course.jianguan}}</p>
              </li>
            </ul>
            <div class="submit_btn " v-if="item.bs_select == 1">已选课</div>
            <div class="submit_btn" v-else @click="xuanke(item.id)">立即选课</div>
          </div>
        </div>
        <div class="courseDetail_box">
          <p class="intro_title">课程简介</p>
          <div
            class="intro_content"
          v-html="item.content">{{item.content}}</div>
        </div>
        <div class="footer_height"></div>
      </div>
      <!-- footer -->
      <footer_nav></footer_nav>
    </el-main>
  </div>
</template>

<script>
import head_nav from "../../components/header.vue";
import footer_nav from "../../components/footer.vue";
import crumbs_nav from "../../components/crumbsNav.vue";
import student_nav from "../../components/studentNav.vue";
import axios from "axios";
import ajax from "../../assets/ajax/api";
export default {
  data() {
    return {
      user_name: sessionStorage.getItem("user_name"),
      nianjie: sessionStorage.getItem("nianjie"),
      user_class: sessionStorage.getItem("class"),
      school_name: sessionStorage.getItem("school_name"),
      swiperOptionTop: {
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperOptionThumbs: {
        slidesPerView: 3,
        spaceBetween: 10,
        centeredSlides: true
      },
      breadlist: [
        { title:sessionStorage.getItem("school_name"), path: "StudentIndex" },
        { title: "课程详情" }
      ],
      item:{},
      CourseNum: {},
    };
  },
  created(){
    this.init()
    this.CourseNumber()
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
  methods:{
    async init(){
      const { id } = this.$route.params;
      let params = new URLSearchParams();
      params.append("id",id);
      params.append("token",sessionStorage.getItem("token"));
      let _res = await ajax.courseDetaill(params);
      if (_res.code == 0) {
        this.item = _res.data
      }
    },
    // 选课数量
    async CourseNumber() {
      let params = new URLSearchParams();
      params.append("token", sessionStorage.getItem("token"));
      let _res = await ajax.getHasCourseNumber(params);
      if (_res.code == 0) {
        this.CourseNum = _res.data;
      }
    },
    // 选课
    async xuanke(id){
      let params = new URLSearchParams();
      params.append("token", sessionStorage.getItem("token"));
      params.append("school_course_id", id);
      let _res = await ajax.chooseCourse(params);
      if (_res.code == 0) {
        this.CourseNum = _res.data;
      }else{
        this.$message.error(_res.message);
      }
    }
  },
  components: {
    head_nav,
    student_nav,
    footer_nav,
    crumbs_nav
  }
};
</script>

