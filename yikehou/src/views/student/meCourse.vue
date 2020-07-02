
<style>
.meCourse_content {
  width: 676px;
}
.meCourse_title {
  width: 466px;
  height: 95px;
  margin: 0 auto 108px;
  background: url(./images/meCourse_title.png) no-repeat 100% 100%;
  background-size:100% 100%;
}
.meCourse_list {
  max-height: 521px;
}
.meCourse_list,
.remark {
  width: 100%;
  box-sizing: border-box;
  border: 2px solid #045da3;
  background: #014381;
  padding: 0 28px 28px;
  border-radius: 10px;
}
.meCourse_item_title {
  margin-top: 29px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
}
.meCourse_item_ul {
  display: flex;
  flex-wrap: wrap;
}
.meCourse_item_ul li {
  color: #fff;
  font-size: 16px;
  width: 88px;
  height: 39px;
  box-sizing: border-box;
  padding: 0 5px;
  text-align: center;
  line-height: 39px;
  margin: 0;
  display: block;
  margin-top: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
}
.meCourse_item_ul li:nth-child(odd) {
  background: #01d7fc;
}
.meCourse_item_ul li:nth-child(even) {
  background: #355daf;
}
.remark {
  margin-top: 65px;
  padding-top: 28px;
  color: #fff;
  font-size: 16px;
  line-height: 26px;
  height: 130px;
}
.me_remark {
  position: absolute;
  top: -66px;
  right: 336px;
  width: 147px;
  height: 130px;
  box-sizing: border-box;
  padding: 38px 20px 0;
  color: #fff;
  font-size: 18px;
  background: url(./images/me_remark_bg.png) no-repeat 100% 100%;
  background-size:100% 100%;
}
.me_remark p {
  transform: rotate(-18deg);
}
.me_name {
  position: absolute;
  top: -88px;
  right: 136px;
  width: 186px;
  height: 72px;
  box-sizing: border-box;
  color: #fff;
  font-size: 18px;
  text-align: center;
  padding-top: 18px;
  background: url(./images/me_name_bg.png) no-repeat 100% 100%;
  background-size:100% 100%;
}
.meCourse_list .swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 0;
}
</style>
<template>
  <div>
    <el-header>
      <head_nav :navId="1"></head_nav>
    </el-header>
    <el-main>
      <div class="height_div"></div>
      <div class="student_banner">
        <el-container>
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
          <student_nav :id="2"></student_nav>
        </el-container>
      </div>
      <div class="studentcontent_box">
        <el-container style="position: relative;">
          <img src="./images/index_content_bg.png" alt class="index_content_bg" />

          <div class="meCourse_content">
            <p class="meCourse_title"></p>
            <div class="meCourse_list">
              <swiper ref="mySwiper" :options="swiperOptions">
                <swiper-slide v-for="(item,index) in meCourseList" :key="index">
                  <div class="meCourse_item" v-for="(i,num) in item" :key="num">
                    <p class="meCourse_item_title">{{i.cate}}</p>
                    <ul class="meCourse_item_ul">
                      <li v-for="(li,m) in i.list" :key="m" @click="up_del(li.id)">{{li.title}}</li>
                    </ul>
                  </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </div>
            <div class="remark">
              <p
                class="remark_title ellipse2"
              >课程建议：您报的课程未有体能类的，建议您可以选择体能类的课程报名您报的课程未有体能类的，建议您可以选择体能类的课程报名您报的课程未有体能类的，建议您可以选择体能类的课程报名您报的课程未有体能类的，建议您可以选择体能类的课程报名您报的课程未有体能类的，建议您可以选择体能类的课程报名</p>
            </div>
          </div>
          <div class="me_remark">
            <p class="ellipse2">小小辩论家小小辩论家小小辩论家小小辩论家</p>
          </div>
          <div class="me_name">
            <p>{{user_name}}</p>
          </div>
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
import axios from "axios";
import ajax from "../../assets/ajax/api";
export default {
  data() {
    return {
      user_name: localStorage.getItem("user_name"),
      nianjie: localStorage.getItem("nianjie"),
      user_class: localStorage.getItem("class"),
      school_name: localStorage.getItem("school_name"),
      swiperOptions: {
        spaceBetween: 10,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: { el: ".swiper-pagination" }
      },
      CourseNum: {},
      meCourseList:[]
    };
  },
  created() {
    this.MyCourse();
    this.CourseNumber()
  },
  methods: {
    async MyCourse() {
      let params = new URLSearchParams();
      params.append("token", localStorage.getItem("token"));
      let _res = await ajax.getMyCourse(params);
      if (_res.code == 0) {
        for (var i = 0; i < _res.data.length; i++) {
          if (String(i / 3).indexOf(".") == -1) {
            this.meCourseList.push(_res.data.slice(i, i + 3));
          }

        }
      }
    },
    // 选课数量
    async CourseNumber() {
      let params = new URLSearchParams();
      params.append("token", localStorage.getItem("token"));
      let _res = await ajax.getHasCourseNumber(params);
      if (_res.code == 0) {
        this.CourseNum = _res.data;
      }
    },
    up_del(up_id){
      this.$router.push({ name: "MeCourseDel", params: { id: up_id} });

    }
  },
  components: {
    head_nav,
    student_nav,
    footer_nav
  }
};
</script>

