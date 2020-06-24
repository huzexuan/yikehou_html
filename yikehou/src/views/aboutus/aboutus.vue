
<style>
.banner {
  width: 100%;
  height: 423px;
}
.intro_box {
  padding: 38px 0 157px;
}
.title {
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
.partnerList_img{
  width: 268px;
  height: 132px;
  display: block;
  box-shadow: 0px 0px 10px  #ececec;
}
.swiper-container{
  padding: 10px;
}
.partnerList_title{
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
      <el-container>
        <div class="intro_box">
          <p class="title">公司简介</p>
          <div class="intro">
            <div
              class="intro_text"
            >烁炎文化传播有限公司是一家专注于招生领域的教育服务平台。为教育培训机构搭建自媒体招生平台，提供一体化学校互联网招生解决方案，设计系列特色招生服务课程，构建立体多渠道招生路径。 公司定位为招生专家，以“教育为人民”为理念，用科技和经验驱动教育进步，完善每一寸缺失，助力每一个学校，帮助每一位学生。烁炎文化传播有限公司是一家专注于招生领域的教育服务平台。为教育培训机构搭建自媒体招生平台，提供一体化学校互联网招生解决方案，设计系列特色招生服务课程，构建立体多渠道招生路径。 公司定位为招生专家，以“教育为人民”为理念，用科技和经验驱动教育进步，完善每一寸缺失，助力每一个学校，帮助每一位学生。</div>
            <img src="./images/intro.jpg" alt />
          </div>
        </div>
        <p class="title">合作伙伴</p>
      </el-container>
      <div class="partner_swiper">
        <div style="position: relative;padding:0 50px">
          <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="(item,index) in partnerList" :key="index">
              <!-- <img :src='item.img' alt class="partnerList_img" /> -->
              <img src='./images/partner.jpg' alt class="partnerList_img" />
              <p class="partnerList_title">{{item.title}}</p>
            </swiper-slide>
          </swiper>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
      <div class="footer_height"></div>
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
      swiperOptions: {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      breadlist: [{ title: "首页", path: "Index" }, { title: "关于我们" }],
      partnerList: [
        {
          title: "高开区小学",
        },
        {
          title: "高开区小学"
        },
        {
          title: "高开区小学"
        },
        {
          title: "高开区小学"
        },
        {
          title: "高开区小学"
        },
        {
          title: "高开区小学"
        }
      ]
    };
  },
  methods: {},
  components: {
    head_nav,
    footer_nav,
    crumbs_nav
  }
};
</script>

