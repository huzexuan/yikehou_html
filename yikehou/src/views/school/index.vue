
<style>
.student_banner {
  width: 100%;
  height: 402px;
  background: url(./images/index_banner.jpg) no-repeat 100% 100%;
  position: relative;
  z-index: 11;
}
.user_img {
  width: 134px;
  height: 134px;
  border-radius: 50%;
  background: #fff;
  margin-right: 25px;
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
/* 选择年级 */
.gradeTab_box {
  padding: 38px 0;
  display: flex;
  align-items: center;
}
.gradeTab_box span {
  font-size: 20px;
  font-weight: bold;
}
.gradeTab_box ul li {
  margin-left: 56px;
  font-size: 18px;
  cursor: pointer;
}
.gradeTab_box ul li.active {
  color: #0168b7;
}
/* 课程列表 */
.content {
  width: 100%;
  height: 1346px;
  box-sizing: border-box;
  padding-top: 76px;
  background: url(./images/content_bg.jpg) no-repeat 100% 100%;
}
.content_container {
  display: flex;
  justify-content: space-between;
}
.courseUl li {
  display: block;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  width: 161px;
  height: 79px;
  background: url(./images/course_icon.png) no-repeat 100% 100%;
  text-align: center;
  line-height: 79px;
  cursor: pointer;
  margin-bottom: 38px;
}
.courseUl li.icon_active {
  background: url(./images/course_icon_active.png) no-repeat 100% 100%;
}
.courseList_box {
  width: calc(100% - 161px);
  height: 1160px;
  box-sizing: border-box;
  padding: 10px 0 0 40px;
}

.courseList li {
  width: 306px;
  margin: 0 0 38px 16px;
  cursor: pointer;
}
.courseList li:nth-child(3n + 1) {
  margin-left: 0;
}
.courseList li img {
  width: 100%;
  height: 184px;
}
.courseList li .courseItem {
  width: 100%;
  height: 165px;
  background: #fff;
  box-sizing: border-box;
  padding: 14px 10px;
}
.courseList li .courseItem p:nth-child(1) {
  font-size: 16px;
  margin-bottom: 18px;
}
.courseList li .courseItem p:nth-child(2) {
  color: #666;
}
.btn {
  width: 47px !important;
  height: 47px !important;
  float: right;
  margin-top: 12px;
}
/* 已选课程 */
.overflow_box {
  height: 485px;
}
.Bottom_courseList_box {
  margin-top: 24px;
  width: 100%;
  height: 745px;
  background: url(./images/Bottom_content_bg.jpg) no-repeat 100% 100%;
}
.Bottom_courseList_box .title {
  font-size: 24px;
  color: #fff;
  padding: 54px 0 40px;
  font-weight: bold;
}
.Bottom_courseList {
  width: 100%;
  box-sizing: border-box;
  padding: 34px 20px 0;
  background: rgba(255, 255, 255, 0.3);
  color: #fff;
  display: flex;
  margin-bottom: 28px;
}
.Bottom_courseList p {
  font-size: 20px;
  font-weight: bold;
}
.Bottom_courseList ul {
  width: calc(100% - 60px);
}
.Bottom_courseList ul li {
  font-size: 16px;
  margin-left: 50px;
  margin-bottom: 32px;
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
                <span class="name">保定市高新区小学</span>
                <span class="user_upimg">上传学校LOGO</span>
              </p>
              <p>
                <span>已选课程</span>4
                <span>剩余可选课程</span>1
              </p>
            </div>
          </div>
          <student_nav :id="1" :user="1"></student_nav>
        </el-container>
      </div>
      <!-- 选择年级 -->
      <el-container>
        <div class="gradeTab_box">
          <span>请选择年级</span>
          <ul>
            <li
              v-for="(item,index) in gradeList "
              :key="index"
              :class="[gradeId == item.id ?'active':'']"
              @click="gradeTab(item.id)"
            >{{item.title}}</li>
          </ul>
        </div>
      </el-container>
      <!-- 课程列表 -->
      <div class="content">
        <el-container class="content_container">
          <ul class="courseUl">
            <li
              :class="[courseMenu_id == item.id ? 'icon_active':'']"
              v-for="(item,index) in courseMenu"
              :key="index"
              @click="_courseMenu(item.id)"
            >{{item.text}}</li>
          </ul>
          <div class="courseList_box">
            <ul class="courseList">
              <li>
                <img src="./images/courseList.jpg"  @click="_upcourseDetail()" alt />
                <div class="courseItem">
                  <p class="ellipse">3D打印</p>
                  <p class="ellipse2">简单介绍简单介绍简单介绍，简单介绍,简单介绍简单介绍...</p>
                  <img @click="_upcourse(1)" src="./images/up_select.png" class="btn" alt />
                </div>
              </li>
              <li>
                <img src="./images/courseList.jpg" alt />
                <div class="courseItem">
                  <p class="ellipse">3D打印</p>
                  <p class="ellipse2">简单介绍简单介绍简单介绍，简单介绍,简单介绍简单介绍...</p>
                  <img src="./images/no_select.png" class="btn" alt />
                </div>
              </li>
              <li>
                <img src="./images/courseList.jpg" alt />
                <div class="courseItem">
                  <p class="ellipse">3D打印</p>
                  <p class="ellipse2">简单介绍简单介绍简单介绍，简单介绍,简单介绍简单介绍...</p>
                  <img src="./images/no_select.png" class="btn" alt />
                </div>
              </li>
              <li>
                <img src="./images/courseList.jpg" alt />
                <div class="courseItem">
                  <p class="ellipse">3D打印</p>
                  <p class="ellipse2">简单介绍简单介绍简单介绍，简单介绍,简单介绍简单介绍...</p>
                  <img src="./images/no_select.png" class="btn" alt />
                </div>
              </li>
              <li>
                <img src="./images/courseList.jpg" alt />
                <div class="courseItem">
                  <p class="ellipse">3D打印</p>
                  <p class="ellipse2">简单介绍简单介绍简单介绍，简单介绍,简单介绍简单介绍...</p>
                  <img src="./images/no_select.png" class="btn" alt />
                </div>
              </li>
              <li>
                <img src="./images/courseList.jpg" alt />
                <div class="courseItem">
                  <p class="ellipse">3D打印</p>
                  <p class="ellipse2">简单介绍简单介绍简单介绍，简单介绍,简单介绍简单介绍...</p>
                  <img src="./images/no_select.png" class="btn" alt />
                </div>
              </li>
              <li>
                <img src="./images/courseList.jpg" alt />
                <div class="courseItem">
                  <p class="ellipse">3D打印</p>
                  <p class="ellipse2">简单介绍简单介绍简单介绍，简单介绍,简单介绍简单介绍...</p>
                  <img src="./images/no_select.png" class="btn" alt />
                </div>
              </li>
              <li>
                <img src="./images/courseList.jpg" alt />
                <div class="courseItem">
                  <p class="ellipse">3D打印</p>
                  <p class="ellipse2">简单介绍简单介绍简单介绍，简单介绍,简单介绍简单介绍...</p>
                  <img src="./images/no_select.png" class="btn" alt />
                </div>
              </li>
              <li>
                <img src="./images/courseList.jpg" alt />
                <div class="courseItem">
                  <p class="ellipse">3D打印</p>
                  <p class="ellipse2">简单介绍简单介绍简单介绍，简单介绍,简单介绍简单介绍...</p>
                  <img src="./images/no_select.png" class="btn" alt />
                </div>
              </li>
              <li>
                <img src="./images/courseList.jpg" alt />
                <div class="courseItem">
                  <p class="ellipse">3D打印</p>
                  <p class="ellipse2">简单介绍简单介绍简单介绍，简单介绍,简单介绍简单介绍...</p>
                  <img src="./images/no_select.png" class="btn" alt />
                </div>
              </li>
            </ul>
          </div>
        </el-container>
      </div>
      <div class="Bottom_courseList_box">
        <el-container>
          <p class="title">已选课程</p>
          <div class="overflow_box">
            <div class="Bottom_box">
              <div class="Bottom_courseList">
                <p>一年级</p>
                <ul>
                  <li>英语</li>
                  <li>英语</li>
                  <li>英语</li>
                  <li>英语</li>
                  <li>英语</li>
                  <li>英语</li>
                  <li>英语</li>
                  <li>英语</li>
                  <li>英语</li>
                  <li>英语</li>
                  <li>英语</li>
                  <li>英语</li>
                  <li>英语</li>
                  <li>英语</li>
                  <li>英语</li>
                  <li>英语</li>
                  <li>英语</li>
                  <li>英语</li>
                  <li>英语</li>
                  <li>英语</li>
                  <li>英语</li>
                  <li>英语</li>
                  <li>英语</li>
                  <li>英语</li>
                </ul>
              </div>
              <div class="Bottom_courseList">
                <p>二年级</p>
                <ul>
                  <li>英语</li>
                  <li>英语</li>
                  <li>英语</li>
                  <li>英语</li>
                </ul>
              </div>
              <div class="Bottom_courseList">
                <p>二年级</p>
                <ul>
                  <li>英语</li>
                  <li>英语</li>
                  <li>英语</li>
                  <li>英语</li>
                </ul>
              </div>
              <div class="Bottom_courseList">
                <p>二年级</p>
                <ul>
                  <li>英语</li>
                  <li>英语</li>
                  <li>英语</li>
                  <li>英语</li>
                </ul>
              </div>
              <div class="Bottom_courseList">
                <p>二年级</p>
                <ul>
                  <li>英语</li>
                  <li>英语</li>
                  <li>英语</li>
                  <li>英语</li>
                </ul>
              </div>
            </div>
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
import $ from "jquery";

export default {
  data() {
    return {
      gradeList: [
        {
          id: 0,
          title: "一年级"
        },
        {
          id: 1,
          title: "二年级"
        },
        {
          id: 2,
          title: "三年级"
        },
        {
          id: 3,
          title: "四年级"
        },
        {
          id: 4,
          title: "五年级"
        },
        {
          id: 5,
          title: "六年级"
        }
      ],
      gradeId: 0,
      courseMenu: [
        {
          id: 1,
          text: "语言"
        },
        {
          id: 2,
          text: "启智"
        },
        {
          id: 3,
          text: "逻辑"
        },
        {
          id: 4,
          text: "道德"
        }
      ],
      courseMenu_id: 1
    };
  },
  methods: {
    gradeTab(id) {
      this.gradeId = id;
    },
    _courseMenu(id) {
      this.courseMenu_id = id;
    },
    _upcourseDetail() {
      this.$router.push({ name: "MeCourseDel", params: { id: 1 } });
    },
    _upcourse(){
      console.log('选课')
    }
  },
  components: {
    head_nav,
    student_nav,
    footer_nav
  }
};
$(function() {
  if ($(".courseList").height() > 1161) {
    $(".courseList_box").css("overflow-y", "scroll");
  }
  if($('.Bottom_box').height() > 485){
    $(".overflow_box").css("overflow-y", "scroll");
  }
});
</script>

