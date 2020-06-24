
<style>
.banner {
  width: 100%;
  height: 423px;
}
.content_box {
  display: flex;
  justify-content: space-between;
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
.courseDetail_content .courseDetail_content_tag span{
    display: inline-block;
    margin-right: 55px;
    font-size: 16px;
    color: #666;
}
/* 课程简介 */
.intro_title{
    font-size: 24px;
    color: #000;
    font-weight: bold;
    margin-bottom: 38px;
}
.intro_content{
    line-height: 30px;
    padding-bottom: 160px;
}
</style>
<template>
  <div>
    <el-header>
      <head_nav :navId="3"></head_nav>
    </el-header>
    <el-main>
      <div class="height_div"></div>
      <!-- banner -->
      <img class="banner" src="./images/banner.jpg" alt />
      <!-- 面包屑导航 -->
      <crumbs_nav :breadlist="breadlist"></crumbs_nav>
      <!-- 内容 -->
      <el-container>
        <div class="content_box">
          <div class="courseDetail_imgBox">
            <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
              <swiper-slide>
                <img src="./images/1.jpg" alt />
              </swiper-slide>
              <swiper-slide>
                <img src="./images/1.jpg" alt />
              </swiper-slide>
            </swiper>
            <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
              <swiper-slide>
                <img src="./images/1.jpg" alt />
              </swiper-slide>
              <swiper-slide>
                <img src="./images/1.jpg" alt />
              </swiper-slide>
              <div class="swiper-button-next" slot="button-next"></div>
              <div class="swiper-button-prev" slot="button-prev"></div>
            </swiper>
          </div>
          <div class="courseDetail_content">
            <p class="title">英语</p>
            <p class="courseDetail_content_tag">
              <span>所属分类：语言</span>
              <span>年级：五年级</span>
            </p>
          </div>
        </div>
        <div class="courseDetail_box">
            <p class="intro_title">课程简介</p>
            <div class="intro_content">少儿英语培训是一种针对3到12岁儿童的英语培训课程或项目。提供少儿英语培训的单位有很多，但是切记不要随便给孩子选培训机构，因为3到12岁是少儿英语培训的黄金时期，错过或者耽误这个时期都会让孩子留下遗憾，所以要选择正式的、正规的、受到政府认可的单位。</div>
        </div>
      </el-container>
      <!-- footer -->
      <footer_nav></footer_nav>
    </el-main>
  </div>
</template>

<script>
import head_nav from "../../components/header.vue";
import footer_nav from "../../components/footer.vue";
import crumbs_nav from "../../components/crumbsNav.vue";
export default {
  data() {
    return {
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
        { title: "保定市高新区小学", path: "Course" },
        { title: "课程详情" }
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
  methods: {},
  components: {
    head_nav,
    footer_nav,
    crumbs_nav
  }
};
</script>

