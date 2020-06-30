
<style>
.banner {
  width: 100%;
  height: 423px;
}
/* 选择年级 */
.gradeTab_box {
  padding: 16px 0 38px;
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
  height: 1597px;
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
  box-sizing: border-box;
  height: 1144px;
  box-sizing: border-box;
  padding: 10px 0 10px 40px;
}
.courseList_box::-webkit-scrollbar {
  width: 4px;
  height: 4px;
  scrollbar-arrow-color: red;
}
.courseList_box::-webkit-scrollbar-thumb {
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
  scrollbar-arrow-color: red;
}
.courseList_box::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
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
            <ul class="courseList index_courseList">
              <li @click="_upcourseDetail()">
                <img src="./images/courseList.jpg" alt />
                <div class="courseItem">
                  <p class="ellipse">3D打印</p>
                  <p class="ellipse2">简单介绍简单介绍简单介绍，简单介绍,简单介绍简单介绍...</p>
                </div>
              </li>
              <li>
                <img src="./images/courseList.jpg" alt />
                <div class="courseItem">
                  <p class="ellipse">3D打印</p>
                  <p class="ellipse2">简单介绍简单介绍简单介绍，简单介绍,简单介绍简单介绍...</p>
                </div>
              </li>
              <li>
                <img src="./images/courseList.jpg" alt />
                <div class="courseItem">
                  <p class="ellipse">3D打印</p>
                  <p class="ellipse2">简单介绍简单介绍简单介绍，简单介绍,简单介绍简单介绍...</p>
                </div>
              </li>
              <li>
                <img src="./images/courseList.jpg" alt />
                <div class="courseItem">
                  <p class="ellipse">3D打印</p>
                  <p class="ellipse2">简单介绍简单介绍简单介绍，简单介绍,简单介绍简单介绍...</p>
                </div>
              </li>
              <li>
                <img src="./images/courseList.jpg" alt />
                <div class="courseItem">
                  <p class="ellipse">3D打印</p>
                  <p class="ellipse2">简单介绍简单介绍简单介绍，简单介绍,简单介绍简单介绍...</p>
                </div>
              </li>
              <li>
                <img src="./images/courseList.jpg" alt />
                <div class="courseItem">
                  <p class="ellipse">3D打印</p>
                  <p class="ellipse2">简单介绍简单介绍简单介绍，简单介绍,简单介绍简单介绍...</p>
                </div>
              </li>
              <li>
                <img src="./images/courseList.jpg" alt />
                <div class="courseItem">
                  <p class="ellipse">3D打印</p>
                  <p class="ellipse2">简单介绍简单介绍简单介绍，简单介绍,简单介绍简单介绍...</p>
                </div>
              </li>
              <li>
                <img src="./images/courseList.jpg" alt />
                <div class="courseItem">
                  <p class="ellipse">3D打印</p>
                  <p class="ellipse2">简单介绍简单介绍简单介绍，简单介绍,简单介绍简单介绍...</p>
                </div>
              </li>
              <li>
                <img src="./images/courseList.jpg" alt />
                <div class="courseItem">
                  <p class="ellipse">3D打印</p>
                  <p class="ellipse2">简单介绍简单介绍简单介绍，简单介绍,简单介绍简单介绍...</p>
                </div>
              </li>
              <li>
                <img src="./images/courseList.jpg" alt />
                <div class="courseItem">
                  <p class="ellipse">3D打印</p>
                  <p class="ellipse2">简单介绍简单介绍简单介绍，简单介绍,简单介绍简单介绍...</p>
                </div>
              </li>
            </ul>
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
import crumbs_nav from "../../components/crumbsNav.vue";
import $ from "jquery";
export default {
  data() {
    return {
      breadlist: [{ title: "首页", path: "Index" }, { title: "课程中心" }],
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
    init() {
      if ($(".courseList").height() > 1161) {
        $(".courseList_box").css("overflow-y", "scroll")
      }
    },
    gradeTab(id) {
      this.gradeId = id;
      console.log($(".gradeTab_box").height());
    },
    _courseMenu(id) {
      this.courseMenu_id = id;
    },
    _upcourseDetail() {
      this.$router.push({ name: "CourseDetail", params: { id: 1 } });
    }
  },
  mounted: function() {
    this.init();
  },
  components: {
    head_nav,
    footer_nav,
    crumbs_nav
  }
};
</script>

