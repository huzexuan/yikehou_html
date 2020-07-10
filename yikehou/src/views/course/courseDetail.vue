
<style>
.banner {
  width: 100%;
  height: 423px;
}
.content_box {
  height: 690px;
  overflow: hidden;
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
          </div>
        </div>
        <div class="courseDetail_box">
            <p class="intro_title">课程简介</p>
            <div class="intro_content">{{item.description}}</div>
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
import axios from "axios";
import ajax from "../../assets/ajax/api";
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
        { title: "课程中心", path: "Course" },
        { title: "课程详情" }
      ],
      item:{}
    };
  },
  created() {
    this.init();
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
  methods: {
    async init(){
      const { id } = this.$route.params;
      let params = new URLSearchParams();
      params.append("id",id);
      let _res = await ajax.courseDetaill(params);
      if (_res.code == 0) {
        this.item = _res.data
      }
    }
  },
  components: {
    head_nav,
    footer_nav,
    crumbs_nav
  }
};
</script>

