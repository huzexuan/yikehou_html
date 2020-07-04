
<style>

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
  background-size: 100% 100%;
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
  background-size: 100% 100%;
  text-align: center;
  line-height: 79px;
  cursor: pointer;
  margin-bottom: 38px;
}
.courseUl li.icon_active {
  background: url(./images/course_icon_active.png) no-repeat 100% 100%;
  background-size: 100% 100%;
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
  background-size: 100% 100%;
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
      <head_nav :navId="1"></head_nav>
    </el-header>
    <el-main>
      <div class="height_div"></div>
      <bannerdel :id="1" :navid='1'></bannerdel>
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
            <ul class="courseList">
              <li v-for="(item,index) in courseList_data" :key="index">
                <img :src="item.imgs_arr[0]" @click="_upcourseDetail(item.id)" alt />
                <div class="courseItem">
                  <p class="ellipse">{{item.title}}</p>
                  <p class="ellipse2">{{item.description}}</p>
                  <img
                    @click="_upcourse('')"
                    v-if="item.bs_select == 1"
                    src="./images/up_select.png"
                    class="btn"
                    alt
                  />
                  <img
                    @click="_upcourse(item.id)"
                    v-else
                    src="./images/no_select.png"
                    class="btn"
                    alt
                  />
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
import bannerdel from "../../components/herder_bannerdel.vue";
import $ from "jquery";
import axios from "axios";
import ajax from "../../assets/ajax/api";
export default {
  data() {
    return {
      gradeList: [],
      gradeId: "",
      courseMenu: [],
      courseMenu_id: "",
      courseList_data: [],
      imageUrl: ""
    };
  },
  async created() {
    await this.init();
    await this.courseClassify();
    this.courseList();
  },
  methods: {
    async courseNumber(){
      const form = new FormData();
      form.append("token", sessionStorage.getItem("token"));
      let _res = await ajax.SchoolcourseNumber(form);
      if(_res.code == 0){
      }
    },
    
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
      const { id } = this.$route.params;
      if (id) {
        this.courseMenu_id = id;
      }
    },
    // 课程列表
    async courseList() {
      let params = new URLSearchParams();
      params.append("cate", this.courseMenu_id);
      params.append("nianji", this.gradeId);
      params.append("token", sessionStorage.getItem("token"));
      let _res = await ajax.CateList(params);
      if (_res.code == 0) {
        this.courseList_data = _res.data.data;
      }
    },
    gradeTab(id) {
      this.gradeId = id;
      this.courseList();
    },
    _courseMenu(id) {
      this.courseMenu_id = id;
      this.courseList();
    },
    _upcourseDetail(up_id) {
      this.$router.push({ name: "schoolMeCourseDel", params: { id: up_id } });
    },
    async _upcourse(id) {
      if (id == "") {
        this.$message.warning("已选择该课程");
      } else {
        let params = new URLSearchParams();
        params.append("token", sessionStorage.getItem("token"));
        params.append("course_id", id);
        let _res = await ajax.schoolchooseCourse(params);
        if (_res.code == 0) {
          this.CourseNum = _res.data;
        } else {
          this.$message.error(_res.message);
        }
      }
    }
  },
  components: {
    head_nav,
    footer_nav,
    bannerdel
  },
  updated() {
    if ($(".courseList").height() > 1161) {
      $(".courseList_box").css("overflow-y", "scroll");
    }
    if ($(".Bottom_box").height() > 485) {
      $(".overflow_box").css("overflow-y", "scroll");
    }
  }
};
</script>

