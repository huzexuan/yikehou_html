
<style>
/* banner */
.banner {
  width: 100%;
  height: 738px;
}
.banner .swiper-container {
  width: 100%;
  height: 100%;
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
}
.serve_box {
  width: 690px;
  padding-top: 418px;
  margin: auto;
}
.serve_box h1 {
  text-align: center;
  margin-bottom: 54px;
  color: #000;
}
.serve_box p {
  font-size: 16px;
  line-height: 30px;
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
.courseItem_btn{
  width: 198px;
  height: 53px;
  background: #0168b7;
  font-size: 18px;
  color: #fff;
  text-align: center;
  line-height: 53px;
  cursor: pointer;
}
</style>
<template>
  <div>
    <el-header>
      <head_nav :navId='1'></head_nav>
    </el-header>
    <el-main>
      <div class="height_div"></div>
      <div class="banner">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="(item,index) in bannerSwiper" :key="index">
            <img :src="item" style="width:100%;height:100%" />
            <!-- <img src="./images/banner.jpg" style="width:100%;height:100%" /> -->
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <!-- 公告 -->
      <div class="notice">
        <el-container class="flex_justify_content">
          <div class="notice_l">
            <img src="./images/notice_icon.png" alt />
          </div>
          <div class="notice_r">
            <p class="notice_title">最新公告</p>
            <swiper ref="mySwiper" :options="notice_swiperOptions">
              <swiper-slide>
                <p class="ellipse">开课前15分钟不能更换和取消课程！</p>
              </swiper-slide>
              <swiper-slide>
                <p
                  class="ellipse"
                >开课前15分钟不能更换和取消课程！开课前15分钟不能更换和取消课程！开课前15分钟不能更换和取消课程！开课前15分钟不能更换和取消课程！开课前15分钟不能更换和取消课程！</p>
              </swiper-slide>
            </swiper>
          </div>
        </el-container>
      </div>
      <!-- 新闻中心 -->
      <el-container class="news">
        <div class="news_del">
          <div class="news_title_box  bounceInLeft wow">
            <span>新闻中心</span>
            <span>NEWS</span>
          </div>
          <img src="./images/news.jpg" class="fadeInLeftBig wow" alt />
        </div>
        <div class="news_content wow fadeInRight">
          <div class="news_allbtn">MORE</div>
          <div class="newsList_box">
            <div v-for="(item,index) in newsList" :key="index" class="newsList_item">
              <p class="ellipse">{{item.title}}</p>
              <p>2020-04-13 11:26:45</p>
            </div>
          </div>
        </div>
      </el-container>
      <!-- 服务 -->
      <div class="serve">
        <div class="serve_box ">
          <h1 class="wow fadeInUp">课后服务一站式平台</h1>
          <p class="wow fadeInUp">烁炎文化传播有限公司是一家专注于招生领域的教育服务平台。为教育培训机构搭建自媒体招生平台，提供一体化学校互联网招生解决方案...</p>
          <div class="serve_btn wow fadeInUp">MORE</div>
        </div>
      </div>
      <!-- 课程中心 -->
      <div class="course">
        <p class="courseBox_title wow bounceInDown">
          <span>课程中心</span>COURES
        </p>
        <p class="courseBox_del wow fadeInUp">益课后 · 丰富多彩的课后服务· 助力学生发展的核心素养</p>
        <div class="courseList">
          <div class="courseItem clearfix wow fadeInUp" v-for="(item,index) in courseList" :key="index">
            <img src="./images/course.jpg" class="courseItem_img" />
            <div class="courseItem_content">
              <div class="float_box">
                <div class="course_title">
                  <span>无人机主题课程</span>
                  <span></span>
                </div>
                <p class="courseItem_title_del">3D打印将理想的无人机 打印出来</p>
                <p class="courseItem_p_border"></p>
                <div
                  class="courseItem_del ellipse2"
                >通过3D打印将理想的无人机 打印出来，帮你实现翱翔天际的梦想,通过3D打印将理想的无人机 打印出来，帮你实现翱翔天际的梦想帮你实现翱翔天际的梦想</div>
                <div class="courseItem_btn">MORE</div>
              </div>
            </div>
          </div>
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
export default {
  data() {
    return {
      swiperOptions: {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: { el: ".swiper-pagination" }
      },
      bannerSwiper: [],
      notice_swiperOptions: {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        loop: true,
        direction: "vertical",
        slidesPerView: "auto"
      },
      newsList: [
        {
          title: "新闻中心新闻中心新闻中心新闻中心新闻中心新闻中心新闻中心1"
        },
        {
          title: "新闻中心新闻中心新闻中心新闻中心新闻中心新闻中心新闻中心1"
        },
        {
          title:
            "新闻中心新闻中心新闻中心新闻中心新闻中心新闻中心新闻中心新闻中心新闻中心1"
        },
        {
          title: "新闻中心新闻中心新闻中心新闻中心新闻中心新闻中心新闻中心1"
        }
      ],
      courseList: [
        {
          title: "1"
        },
        {
          title: "1"
        },
        {
          title: "1"
        },
        {
          title: "1"
        }
      ]
    };
  },

  components: {
    head_nav,
    footer_nav,
  }
};
</script>

