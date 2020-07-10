
<style>

.studentcontent_box {
  width: 100%;
  height: 1197px;
  box-sizing: border-box;
  padding-top: 198px;
  background: #001235;
}
.index_content_bg {
  width: 1264px;
  height: 1488px;
  position: absolute;
  top: -567px;
  right: -318px;
}
.curricula_box {
  position: relative;
  width: 557px;
  height: 557px;
  background: url(./images/curricula_bg.png) no-repeat 100% 100%;
  background-size:100% 100%;
  /* animation:turn 1s linear infinite;       */
  margin-bottom: 52px;
}
@keyframes turn {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  75% {
    -webkit-transform: rotate(270deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
.curriculaItem {
  position: absolute;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  transition: 0.5s;
}
.curriculaItem:hover {
  transform: scale(1.2);
  color: #49fde8;
  font-weight: bold;
}
.icon_text {
  width: 50px;
  position: absolute;
}
.courseMenu_active {
  transform: scale(1.2);
  color: #49fde8;
  font-weight: bold;
}
/* 艺术 */
.icon01 {
  top: 50px;
  left: 70px;
}
.icon01 .icon_text {
  top: -30px;
}
/* 道德 */
.icon02 {
  top: 160px;
  left: 75px;
}
.icon02 .icon_text {
  top: 10px;
  left: 55px;
}
/* 自信 */
.icon03 {
  top: 310px;
  left: 58px;
}
.icon03 .icon_text {
  top: 10px;
  left: 55px;
}
/* 启智 */
.icon04 {
  top: 50px;
  left: 236px;
}
.icon04 .icon_text {
  top: 45px;
  left: 10px;
}
/* 逻辑 */
.icon05 {
  top: 140px;
  left: 430px;
}
.icon05 .icon_text {
  top: 4px;
  left: -45px;
}
/* 语言 */
.icon06 {
  top: 100px;
  left: 496px;
}
.icon06 .icon_text {
  top: 4px;
  left: 54px;
}
/* 财商 */
.icon07 {
  top: 356px;
  left: 210px;
}
.icon07 .icon_text {
  top: 40px;
  left: -5px;
}
/* 科技 */
.icon08 {
  top: 280px;
  left: 375px;
}
.icon08 .icon_text {
  top: 14px;
  left: 44px;
}
/* 体能 */
.icon09 {
  top: 470px;
  left: 346px;
}
.icon09 .icon_text {
  top: -34px;
  left: -15px;
}
/* 表达 */
.icon010 {
  top: 444px;
  left: 474px;
}
.icon010 .icon_text {
  top: 15px;
  left: 50px;
}
/* 列表 */
.curricula_list {
  width: 645px;
  position: relative;
}
.curricula_list li {
  width: 189px;
  height: 71px;
  background: url(./images/curricula.png) no-repeat 100% 100%;
  background-size:100% 100%;
  margin: 0 0 28px 35px;
  color: #fff;
  cursor: pointer;
  transition: 0.5s;
  z-index: 11;
}
.curricula_list li p {
  display: flex;
  align-items: center;
  line-height: 71px;
}
.curricula_list li span {
  display: inline-block;
  margin: 0 15px 0 35px;
}
.curricula_list li:nth-child(3n + 1) {
  margin-left: 0;
}
.curricula_list li.curricula_active {
  background: url(./images/curricula_active.png) no-repeat 100% 100%;
  background-size:100% 100%;
}
.curricula_list li:hover {
  transform: scale(1.2);
}

.pagination {
  width: 645px;
  text-align: center;
}
.pagination .el-pagination {
  color: #fff;
}
.pagination .el-pagination button:disabled {
  background: #001235;
}
.pagination .el-pagination .btn-prev,
.pagination .el-pagination .btn-next {
  background: #001235;
  color: #ffff;
}
.pagination .el-pager li {
  background: #001235;
}
.pagination .el-pager li.active {
  color: #49fde8;
}
</style>
<template>
  <div>
    <el-header>
      <head_nav :navId="1"></head_nav>
    </el-header>
    <el-main>
      <div class="height_div"></div>
      <bannerdel :navid="1"></bannerdel>
      <div class="studentcontent_box">
        <div class="Box_content" style="position: relative;">
          <img src="./images/index_content_bg.png" alt class="index_content_bg" />
          <div class="curricula_box">
            <div
              class="curriculaItem"
              v-for="(item,index) in courseMenu"
              :key="index"
              :class="[`icon0${index + 1}`,courseMenu_id==item.id ?'courseMenu_active':'']"
              @click="up_courseMenu(item.id,$event)"
            >
              <img
                v-if="index + 1 == 2 || index + 1 == 7 || index + 1 == 8"
                src="./images/pink_icon.png"
                alt
                :style="index + 1 == 7 || index + 1 == 8 ?'width:30px;height:30px':''"
              />
              <img
                v-else
                src="./images/green_icon.png"
                :style="index + 1 == 3 ?'width:36px;height:36px':index + 1 == 9?'width:30px;height:30px':''"
              />
              <p class="icon_text">{{item.title}}</p>
            </div>
          </div>
          <ul class="curricula_list">
            <li @click="up_detail(item.course_info.id)" v-for="(item,index) in courseList_data" :key="index" :class="[item.is_select == 1 ?'curricula_active':'']">
              <p>
                <span>{{item.course_info.title}}</span>
                <img src="./images/arrows_icon.png" alt />
              </p>
            </li>
          </ul>
          <div class="pagination" v-if="total > 9">
            <div class="block">
              <el-pagination
                :page-size="9"
                layout="prev, pager, next"
                :total="total"
                @current-change="changePage"
              ></el-pagination>
            </div>
          </div>
        </div>
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
import axios from "axios";
import ajax from "../../assets/ajax/api";
import $ from "jquery";
export default {
  data() {
    return {
      pages: 1,
      courseMenu: [],
      courseMenu_id: "",
      courseList_data: [],
      total: 0
    };
  },
  async created() {
    await this.courseClassify();
    this.courseList();
  },
  methods: {
    
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
      let params = new URLSearchParams();
      params.append("token", sessionStorage.getItem("token"));
      params.append("nianji",sessionStorage.getItem("nianji_id"));
      params.append("cate",this.courseMenu_id);
      let _res = await ajax.studentCateList(params);
      if (_res.code == 0) {
        this.courseList_data = _res.data.data;
        this.total = _res.data.total;
      }
    },
    up_courseMenu(id, event) {
      var el = event.currentTarget;
      this.courseMenu_id = id;
      this.courseList();
    },
    up_detail(up_id) {
      this.$router.push({ name: "MeCourseDel", params: { id: up_id } });
    },
    changePage() {
      this.pages = $(".el-pager .active").html();
    }
  },
  components: {
    head_nav,
    bannerdel,
    footer_nav
  }
};
</script>

