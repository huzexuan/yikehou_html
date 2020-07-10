
<style>
/* banner */
.index_banner {
  width: 100%;
  height: 738px;
}
.index_banner .swiper-container {
  width: 100%;
  height: 100%;
  padding: 0;
}
.index_banner .swiper-pagination .swiper-pagination-bullets {
  bottom: 40px;
}
/*最新公告*/
.notice {
  width: 100%;
  height: 104px;
  background: #f4f4f5;
}
.notice_r {
  width: calc(100% - 29px);
  display: flex;
  align-content: center;
  height: 104px;
}
.notice_title {
  width: 122px;
  margin-left: 22px;
  font-size: 18px;
  line-height: 104px;
}
.notice .swiper-container {
  margin: 0;
  width: auto;
  max-width: calc(100% - 173px);
  height: 104px;
  padding: 0;
}
.notice .swiper-container p {
  width: 100%;
  line-height: 104px;
  font-size: 16px;
  color: #666;
}
/* 新闻中心 */
.news {
  padding: 100px 0 122px;
  display: flex;
  justify-content: space-between;
}
.news_title_box {
  margin-bottom: 52px;
}
.news_title_box span:nth-child(1) {
  display: inline-block;
  font-weight: bold;
  font-size: 36px;
  margin-right: 32px;
}
.news_title_box span:nth-child(2) {
  color: #666;
  font-size: 24px;
}
.news_allbtn {
  width: 92px;
  height: 32px;
  box-sizing: border-box;
  border: 1px solid #7d7d7d;
  font-size: 16px;
  color: #666;
  text-align: center;
  line-height: 32px;
  margin: 24px 0 10px 393px;
  cursor: pointer;
}
.newsList_box {
  width: 485px;
}
.newsList_item {
  width: 100%;
  padding: 24px 0;
  border-bottom: 1px dashed #bfbfbf;
  cursor: pointer;
}
.newsList_item > p:nth-child(1) {
  font-size: 16px;
  margin-bottom: 16px;
}
.newsList_item > p:nth-child(2) {
  font-size: 14px;
  color: #666;
}
/* 服务 */
.serve {
  width: 100%;
  height: 978px;
  background: url(./images/serve_bg.jpg) no-repeat 100% 100%;
  background-size: 100% 100%;
  position: relative;
}
.serve_box {
  width: 979px;
  height: 573px;
  box-sizing: border-box;
  padding-top: 168px;
  background: url(./images/serve_box_bg.png) no-repeat 100% 100%;
  background-size: 100% 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -286px;
  margin-left: -489px;
}
.serve_box h1 {
  text-align: center;
  margin-bottom: 54px;
  color: #000;
}
.serve_box > p {
  font-size: 16px;
  line-height: 30px;
  width: 688px;
  margin-left: 180px;
}
.serve_btn {
  width: 145px;
  height: 36px;
  box-sizing: border-box;
  border: 1px solid #7d7d7d;
  font-size: 16px;
  text-align: center;
  line-height: 36px;
  margin: 90px auto 0;
  cursor: pointer;
}

/* 课程中心 */
.course {
  padding-top: 100px;
}
.courseBox_title {
  font-size: 24px;
  color: #666;
  text-align: center;
}
.courseBox_title span {
  display: inline-block;
  font-size: 36px;
  color: #000;
  margin-right: 30px;
  font-weight: bold;
}
.courseBox_del {
  font-size: 24px;
  color: #666;
  text-align: center;
  margin: 34px 0 120px;
}
.courseItem {
  width: 100%;
}
.courseItem .courseItem_img {
  width: 958px;
  height: 620px;
  display: block;
}
.courseItem:nth-child(odd) .courseItem_img,
.courseItem:nth-child(odd) .courseItem_content {
  float: left;
  width: 50%;
  box-sizing: border-box;
}
.courseItem:nth-child(even) .courseItem_img,
.courseItem:nth-child(even) .courseItem_content {
  float: right;
  width: 50%;
  box-sizing: border-box;
}
.courseItem:nth-child(even) .courseItem_content .float_box {
  float: right;
}
.courseItem:nth-child(odd) .courseItem_content .float_box {
  float: left;
}
.course_title {
  font-size: 24px;
  color: #000;
  display: flex;
  align-items: center;
}
.course_title span:nth-child(2) {
  display: inline-block;
  width: 68px;
  margin-left: 17px;
  border-bottom: 1px solid #5e5e5e;
}
.courseItem_content {
  padding: 72px;
}
.courseItem_title_del {
  font-size: 18px;
  margin: 34px 0 30px;
}
.courseItem_p_border {
  width: 88px;
  border-bottom: 2px solid #626262;
}
.courseItem_del {
  font-size: 16px;
  color: #666;
  width: 495px;
  line-height: 30px;
  margin: 72px 0 164px;
}
.courseItem_btn {
  width: 198px;
  height: 53px;
  background: #0168b7;
  font-size: 18px;
  color: #fff;
  text-align: center;
  line-height: 53px;
  cursor: pointer;
  transition: 0.5s;
}
.courseItem_btn:hover {
  transform: scale(1.1);
}
.up_courseList {
  width: 143px;
  height: 34px;
  border: 1px solid #7d7d7d;
  text-align: center;
  line-height: 36px;
  font-size: 16px;
  margin: 95px auto 0;
  cursor: pointer;
}
</style>
<template>
  <div>
    <el-header>
      <head_nav :navId="1"></head_nav>
    </el-header>
    <div>
      <div class="height_div"></div>
      <div class="index_banner">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="(item,index) in bannerSwiper" :key="index">
            <img :src="item.img || ''" style="width:100%;height:100%" />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <!-- 公告 -->
      <div class="notice">
        <div class="flex_justify_content Box_content">
          <div class="notice_l">
            <img src="./images/notice_icon.png" alt />
          </div>
          <div class="notice_r">
            <p class="notice_title">最新公告</p>
            <swiper ref="mySwiper" :options="notice_swiperOptions">
              <swiper-slide v-for="(item,index) in noticeList" :key="index">
                <p class="ellipse" v-html="item.content || ''">{{item.content ||''}}</p>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
      <!-- 新闻中心 -->
      <div class="news Box_content">
        <div class="news_del">
          <div class="news_title_box bounceInLeft wow" v-if="newsList.length">
            <span>新闻中心</span>
            <span>NEWS</span>
          </div>
          <img :src="newsimg" class="fadeInLeftBig wow" style="width:686px;height:380px" alt />
        </div>
        <div class="news_content wow fadeInRight">
          <div class="news_allbtn" @click="up_newDesList">MORE</div>
          <div class="newsList_box">
            <div
              v-for="(item,index) in newsList"
              :key="index"
              class="newsList_item"
              @click="up_newDes(item.id)"
            >
              <p class="ellipse">{{item.title || ''}}</p>
              <p>{{item.updated_at || ''}}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 服务 -->
      <div class="serve">
        <div class="serve_box">
          <h1 class="wow fadeInUp">{{AboutUs.title || ''}}</h1>
          <p class="wow fadeInUp" v-html="AboutUs.description || ''">{{AboutUs.description || ''}}</p>
          <div class="serve_btn wow fadeInUp" @click="up_aboutUs">MORE</div>
        </div>
      </div>
      <!-- 课程中心 -->
      <div class="course">
        <p class="courseBox_title wow bounceInDown">
          <span>课程中心</span>COURES
        </p>
        <p class="courseBox_del wow fadeInUp">{{description || ''}}</p>
        <div class="courseList wow fadeInUp">
          <div class="courseItem clearfix" v-for="(item,index) in courseList" :key="index">
            <img :src="item.imgs_arr[0] || ''" class="courseItem_img" />
            <div class="courseItem_content">
              <div class="float_box">
                <div class="course_title">
                  <span>{{item.title || ''}}</span>
                  <span></span>
                </div>
                <p class="courseItem_title_del">{{item.description || ''}}</p>
                <p class="courseItem_p_border"></p>
                <div class="courseItem_del ellipse2" v-html="item.content || ''">{{item.content || ''}}</div>
                <div class="courseItem_btn" @click="course_btn(item.id)">MORE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="up_courseList" @click="up_courseList">MORE</div>

      <div class="footer_height"></div>
      <!-- footer -->
      <footer_nav></footer_nav>
    </div>
  </div>
</template>

<script>
import head_nav from "../../components/header.vue";
import footer_nav from "../../components/footer.vue";
import axios from "axios";
import ajax from "../../assets/ajax/api";
import { WOW } from "wowjs";

export default {
  data() {
    return {
      swiperOptions: {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        loop: false,
        pagination: { el: ".swiper-pagination" }
      },
      notice_swiperOptions: {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        loop: true,
        direction: "vertical",
        slidesPerView: "auto"
      },
      // banner
      bannerSwiper: [],
      // 新闻中心
      newsList: [],
      newsimg: "",
      // 最新公告
      noticeList: [],
      // 关于我们
      AboutUs: {},
      courseList: [],
      description: ""
    };
  },
  mounted() {
    this.$nextTick(() => {
      let wow = new WOW({
        live: false
      });
      wow.init();
    });
  },
  created() {
    this.init();
    this.notice();
    this.About();
    this.course();
    this.description_text();
    this.banner();
  },
  methods: {
    async init() {
      // 新闻中心
      let params = new URLSearchParams();
      params.append("cate", 3);
      params.append("limit", 4);
      params.append("page", 1);
      let _res = await ajax.Article(params);
      if (_res.code == 0) {
        this.newsList = _res.data.data;
        this.newsimg = _res.data.data[0].img;
      }
    },
    async notice() {
      let params = new URLSearchParams();
      params.append("cate", 4);
      let _res = await ajax.Article(params);
      if (_res.code == 0) {
        this.noticeList = _res.data.data;
      }
    },
    // 关于我们
    async About() {
      let params = new URLSearchParams();
      params.append("cate", 1);
      let _res = await ajax.Article(params);
      if (_res.code == 0) {
        this.AboutUs = _res.data.data[0];
      }
    },
    async course() {
      let params = new URLSearchParams();
      params.append("limit", 3);
      let _res = await ajax.CateList(params);
      if (_res.code == 0) {
        this.courseList = _res.data.data;
      }
    },
    async description_text() {
      let params = new URLSearchParams();
      params.append("cate_id", 2);
      let _res = await ajax.one_CateDetail(params);
      if (_res.code == 0) {
        this.description = _res.data.description;
      }
    },
    async banner() {
      let params = new URLSearchParams();
      params.append("position_id", 1);
      let _res = await ajax.advertising(params);
      if (_res.code == 0) {
        this.bannerSwiper = _res.data;
      }
    },
    up_newDes(up_id) {
      this.$router.push({ name: "NewDes", params: { id: up_id } });
    },
    up_newDesList() {
      this.$router.push({ name: "New" });
    },
    up_aboutUs() {
      this.$router.push({ name: "Aboutus" });
    },
    course_btn(id_num) {
      this.$router.push({ name: "CourseDetail", params: { id: id_num } });
    },
    up_courseList() {
      this.$router.push({ name: "Course" });
    }
  },
  components: {
    head_nav,
    footer_nav
  }
};
</script>

