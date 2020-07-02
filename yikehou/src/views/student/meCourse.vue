
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
.meCourse_list .swiper-container-horizontal>.swiper-pagination-bullets{
  bottom: 0;
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
                <swiper-slide>
                  <div class="meCourse_item">
                    <p class="meCourse_item_title">语言</p>
                    <ul class="meCourse_item_ul">
                      <li>英语</li>
                      <li>俄语</li>
                      <li>汉语</li>
                      <li>汉语</li>
                      <li>汉语</li>
                      <li>汉语</li>
                      <li>汉语</li>
                      <li>汉语</li>
                      <li>汉语</li>
                    </ul>
                  </div>
                  <div class="meCourse_item">
                    <p class="meCourse_item_title">语言</p>
                    <ul class="meCourse_item_ul">
                      <li>英语</li>
                      <li>俄语</li>
                      <li>汉语</li>
                      <li>汉语</li>
                      <li>汉语</li>
                      <li>汉语</li>
                      <li>汉语</li>
                      <li>汉语</li>
                      <li>汉语</li>
                    </ul>
                  </div>
                  <div class="meCourse_item">
                    <p class="meCourse_item_title">语言</p>
                    <ul class="meCourse_item_ul">
                      <li>英语英语英</li>
                      <li>俄语</li>
                      <li>汉语</li>
                      <li>汉语</li>
                      <li>汉语</li>
                      <li>汉语</li>
                      <li>汉语</li>
                      <li>汉语</li>
                      <li>汉语</li>
                    </ul>
                  </div>
                </swiper-slide>
                <swiper-slide>
                  <div class="meCourse_item">
                    <p class="meCourse_item_title">语言</p>
                    <ul class="meCourse_item_ul">
                      <li>英语</li>
                      <li>俄语</li>
                      <li>汉语</li>
                      <li>汉语</li>
                      <li>汉语</li>
                      <li>汉语</li>
                      <li>汉语</li>
                      <li>汉语</li>
                      <li>汉语</li>
                    </ul>
                  </div>
                  <div class="meCourse_item">
                    <p class="meCourse_item_title">语言</p>
                    <ul class="meCourse_item_ul">
                      <li>英语</li>
                      <li>俄语</li>
                      <li>汉语</li>
                      <li>汉语</li>
                      <li>汉语</li>
                      <li>汉语</li>
                      <li>汉语</li>
                      <li>汉语</li>
                      <li>汉语</li>
                    </ul>
                  </div>
                  <div class="meCourse_item">
                    <p class="meCourse_item_title">语言</p>
                    <ul class="meCourse_item_ul">
                      <li>英语英语英</li>
                      <li>俄语</li>
                      <li>汉语</li>
                      <li>汉语</li>
                      <li>汉语</li>
                      <li>汉语</li>
                      <li>汉语</li>
                      <li>汉语</li>
                      <li>汉语</li>
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
            <p>张甜甜</p>
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
export default {
  data() {
    return {
      swiperOptions: {
        spaceBetween: 10,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: { el: ".swiper-pagination" }
      }
    };
  },
  methods: {},
  components: {
    head_nav,
    student_nav,
    footer_nav
  }
};
</script>

