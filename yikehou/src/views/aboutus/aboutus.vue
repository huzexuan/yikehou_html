
<style>
.banner {
  width: 100%;
  height: 423px;
}
.intro_box {
  padding: 38px 0 157px;
}
.aboutus .title {
  font-size: 30px;
  color: #000;
  font-weight: bold;
  text-align: center;
  margin-bottom: 74px;
}
.intro {
  display: flex;
  justify-content: space-between;
}
.intro_text {
  width: calc(100% - 534px);
  height: 436px;
  box-sizing: border-box;
  padding: 32px 18px;
  font-size: 16px;
  color: #000;
  line-height: 30px;
}
.partner_swiper {
  width: 1260px;
  margin: auto;
}
.swiper-button-next,
.swiper-button-prev {
  color: #b3b6b8;
  outline: none;
}
.partnerList_img {
  width: 268px;
  height: 132px;
  display: block;
  box-shadow: 0px 0px 10px #ececec;
}
.swiper-container {
  padding: 10px;
}
.partnerList_title {
  margin-top: 22px;
  text-align: center;
  font-size: 16px;
}
</style>
<template>
  <div>
    <el-header>
      <head_nav :navId="2"></head_nav>
    </el-header>
    <el-main>
      <div class="height_div"></div>
      <!-- banner -->
      <img class="banner" src="./images/banner.jpg" alt />
      <!-- 面包屑导航 -->
      <crumbs_nav :breadlist="breadlist"></crumbs_nav>
      <!-- 内容 -->
      <el-container class="aboutus">
        <div class="intro_box">
          <p class="title">{{AboutUs.title}}</p>
          <div class="intro">
            <div class="intro_text" v-html="AboutUs.content">{{AboutUs.content}}</div>
            <img :src="AboutUs.img" alt style="width:534px;height:436px" />
          </div>
        </div>
        <p class="title">合作伙伴</p>
      </el-container>
      <div class="partner_swiper">
        <div style="position: relative;padding:0 50px">
          <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="(item,index) in partnerList" :key="index">
              <!-- <img :src='item.img' alt class="partnerList_img" /> -->
              <img :src="item.img" alt class="partnerList_img" />
              <p class="partnerList_title">{{item.title}}</p>
            </swiper-slide>
          </swiper>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
      <div class="footer_height"></div>
      <!-- footer -->
      <footer_nav :navId="1"></footer_nav>
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
      swiperOptions: {
        slidesPerView: 4,
        spaceBetween: 30,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      breadlist:[],
      partnerList: [],
      AboutUs: {},
      user: sessionStorage.getItem("bs")
    };
  },
  mounted() {
    if (this.user == 2) {
      this.breadlist = [
        { title: "首页", path: "StudentIndex" },
        { title: "关于我们" }
      ];
    } else if (this.user == 1) {
      this.breadlist = [
        { title: "首页", path: "SchoolIndex" },
        { title: "关于我们" }
      ];
    } else {
      this.breadlist = [
        { title: "首页", path: "Index" },
        { title: "关于我们" }
      ];
    }
  },
  created() {
    this.About();
    this.partner();
  },
  methods: {
    async About() {
      let params = new URLSearchParams();
      params.append("cate", 1);
      params.append("limit", 1);
      let _res = await ajax.Article(params);
      if (_res.code == 0) {
        this.AboutUs = _res.data.data[0];
      }
    },
    async partner() {
      let params = new URLSearchParams();
      params.append("position_id", 2);
      let _res = await ajax.advertising(params);
      if (_res.code == 0) {
        this.partnerList = _res.data;
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

