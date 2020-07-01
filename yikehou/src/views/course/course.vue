
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
  height: 1144px;
  box-sizing: border-box;
  padding: 10px 0 10px 40px;
}
.courseList {
  display: flex;
  flex-wrap: wrap;
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
  background: #fff;
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
            >{{item.title}}</li>
          </ul>
          <div class="courseList_box">
            <ul class="courseList index_courseList">
              <li v-for="(item,index) in courseList_data" :key="index" @click="_upcourseDetail()">
                <img :src="item.imgs_arr[0]" alt />
                <div class="courseItem">
                  <p class="ellipse">{{item.title}}</p>
                  <p class="ellipse2" v-html="item.description">{{item.description}}</p>
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
import axios from "axios";
import ajax from "../../assets/ajax/api";
export default {
  data() {
    return {
      breadlist: [{ title: "首页", path: "Index" }, { title: "课程中心" }],
      gradeList: [],
      gradeId: "",
      courseMenu: [],
      courseMenu_id: "",
      courseList_data:[]
    };
  },
  async created() {
    await this.init();
    await this.courseClassify();
    this.courseList();
  },
  updated(){
    if ($(".courseList").height() > 1161) {
      $(".courseList_box").css("overflow-y", "scroll");
    }
  },
  methods: {
    // 年级分类
    async init() {
      let params = new URLSearchParams();
      let _res = await ajax.NianjiList(params);
      if (_res.code == 0) {
        this.gradeList = _res.data;
        this.gradeId = _res.data[0].id;
      }
    },
    // 课程分类
    async courseClassify() {
      let params = new URLSearchParams();
      let _res = await ajax.CateClassify(params);
      if (_res.code == 0) {
        this.courseMenu = _res.data;
        this.courseMenu_id = _res.data[0].id;
      }
    },
    // 课程列表
    async courseList() {
      console.log(this.courseMenu_id)
      let params = new URLSearchParams();
      params.append("cate", this.courseMenu_id);
      params.append("nianji", this.gradeId);
      let _res = await ajax.CateList(params);
      if (_res.code == 0) {
        this.courseList_data = _res.data.data
      }
    },
    gradeTab(id) {
      this.gradeId = id;
      this.courseList()
    },
    _courseMenu(id) {
      this.courseMenu_id = id;
      this.courseList()
    },
    _upcourseDetail() {
      this.$router.push({ name: "CourseDetail", params: { id: 1 } });
    }
  },
  components: {
    head_nav,
    footer_nav,
    crumbs_nav
  }
};
</script>

