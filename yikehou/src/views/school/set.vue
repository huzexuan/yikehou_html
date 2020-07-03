
<style>
.set .gradeTab_box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.set .gradeTab_box ul li:nth-child(1) {
  margin-left: 20px;
}
.save_btn {
  width: 140px;
  height: 46px;
  background: #0168b7;
  text-align: center;
  line-height: 46px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}
.gradeTab_num {
  width: 479px;
}
.gradeTab_tab {
  margin-top: 45px;
}
.gradeTab_tab li {
  border: 1px solid #bfbfbf;
  border-bottom: 0;
  display: block;
  height: 178px;
  display: flex;
  align-items: center;
}
.gradeTab_tab li:last-child {
  border-bottom: 1px solid #bfbfbf;
}
.gradeTab_tab li .li_title {
  width: 80px;
  height: 178px;
  border-right: 1px solid #bfbfbf;
  font-size: 18px;
  color: #fff;
  text-align: center;
  line-height: 178px;
}
.gradeTab_tab li:nth-child(odd) .li_title {
  background: #0168b7;
}
.gradeTab_tab li:nth-child(even) .li_title {
  background: #fd1e23;
}
.gradeTab_tab li:nth-child(even) {
  background: #eff6fb;
}
.gradeTab_tab li:nth-child(even) input {
  background: #eff6fb !important;
}
.border_right {
  border-right: 1px solid #bfbfbf;
}
.gradeTab_tab li .li_inputItem1 {
  width: 258px;
}
.gradeTab_tab li .el-form-item__label {
  width: 80px !important;
}
.gradeTab_tab li .el-form-item__content {
  margin-left: 80px !important;
}

.gradeTab_tab li .gradeTab_num {
  width: 100%;
}
.gradeTab_tab li .el-input__inner:hover {
  border: 0;
}
.gradeTab_tab li .el-input__inner {
  border: 0;
}
.gradeTab_tab li .inputItem1_top {
  height: 72px;
  border-bottom: 1px solid #bfbfbf;
}
.gradeTab_tab li .inputItem1_bottom {
  height: 105px;
}
.align_items_center {
  display: flex;
  align-items: center;
}
.gradeTab_tab li .el-form-item {
  margin: 0;
}
.gradeTab_tab li .li_inputItem2 {
  width: 185px;
}
.gradeTab_tab li .li_inputItem3 {
  width: 316px;
}
.gradeTab_tab li .inputItem3_bottom_t,
.gradeTab_tab li .inputItem3_bottom_b {
  height: 54px;
}
.gradeTab_tab li .inputItem3_bottom_t {
  border-bottom: 1px solid #bfbfbf;
}
.gradeTab_tab li .li_inputItem4 {
  width: 355px;
}
.gradeTab_tab li .li_inputItem4 .el-form-item__label {
  width: 115px !important;
}
.gradeTab_tab li .li_inputItem4 .el-form-item__content {
  margin-left: 115px !important;
}
.gradeTab_tab li .inputItem4_bottom > div {
  width: 180px;
  height: 100%;
}
.gradeTab_tab li .inputItem4_bottom .el-form-item__label {
  width: 75px !important;
}
.gradeTab_tab li .inputItem4_bottom .el-form-item__content {
  margin-left: 75px !important;
}
</style>
<template>
  <div>
    <el-header>
      <head_nav :navId="1"></head_nav>
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
          <student_nav :id="4"></student_nav>
        </el-container>
      </div>
      <!-- 选择年级 -->
      <el-container class="set">
        <div class="gradeTab_box">
          <ul>
            <li
              v-for="(item,index) in gradeList "
              :key="index"
              :class="[gradeId == item.id ?'active':'']"
              @click="gradeTab(item.id)"
            >{{item.title}}</li>
          </ul>
          <div class="save_btn" @click="submit">保存</div>
        </div>
        <el-form ref="form" :model="form" label-width="152px">
          <el-form-item class="gradeTab_num" label="设置学生可报课程数量">
            <el-input type="number" v-model="gradeTab_num" min="0"></el-input>
          </el-form-item>
          <ul class="gradeTab_tab">
            <li v-for="(item,i) in courseList_data" :key="i">
              <div class="li_title">{{item.course_info.title}}</div>
              <div class="li_inputItem1 border_right">
                <div class="inputItem1_top align_items_center">
                  <el-form-item class="gradeTab_num" label="上课时间">
                    <el-input v-model="item.start_time" placeholder="填写上课时间"></el-input>
                  </el-form-item>
                </div>
                <div class="inputItem1_bottom align_items_center">
                  <el-form-item class="gradeTab_num" label="上课地点">
                    <el-input v-model="item.place" placeholder="填写上课地点"></el-input>
                  </el-form-item>
                </div>
              </div>
              <div class="li_inputItem2 border_right">
                <div class="inputItem1_top align_items_center">
                  <el-form-item class="gradeTab_num" label="上课老师">
                    <el-input v-model="item.teacher" placeholder="填写老师"></el-input>
                  </el-form-item>
                </div>
                <div class="inputItem1_bottom align_items_center">
                  <el-form-item class="gradeTab_num" label="容纳人数">
                    <el-input v-model="item.can_user" placeholder="填写人数"></el-input>
                  </el-form-item>
                </div>
              </div>
              <div class="li_inputItem3 border_right">
                <div class="inputItem1_top align_items_center">
                  <el-form-item class="gradeTab_num" label="报名人数">
                    <el-input v-model="item.apply_number" placeholder="填写报名人数"></el-input>
                  </el-form-item>
                </div>
                <div class="inputItem1_bottom">
                  <div class="inputItem3_bottom_t align_items_center">
                    <el-form-item class="gradeTab_num" label="监管老师">
                      <el-input v-model="item.jianguan" placeholder="填写监管老师"></el-input>
                    </el-form-item>
                  </div>
                  <div class="inputItem3_bottom_b align_items_center">
                    <el-form-item class="gradeTab_num" label="联系电话">
                      <el-input v-model="item.teacher_phone" placeholder="填写联系电话"></el-input>
                    </el-form-item>
                  </div>
                </div>
              </div>
              <div class="li_inputItem4">
                <div class="inputItem1_top align_items_center">
                  <el-form-item label="是否增加班级">
                    <el-radio-group v-model="item.is_zeng">
                      <el-radio label="是"></el-radio>
                      <el-radio label="否" ></el-radio>
                    </el-radio-group>
                  </el-form-item>
                </div>
                <div class="inputItem1_bottom inputItem4_bottom align_items_center">
                  <div
                    class="inputItem4_bottom_l border_right align_items_center"
                    v-if="item.is_zeng == '是'"
                  >
                    <el-form-item class="gradeTab_num" label="增加地点">
                      <el-input placeholder="填写地点"></el-input>
                    </el-form-item>
                  </div>
                  <div class="inputItem4_bottom_r align_items_center" v-if="item.is_zeng ==  '是'">
                    <el-form-item class="gradeTab_num" label="容纳人数">
                      <el-input placeholder="填写人数"></el-input>
                    </el-form-item>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </el-form>
      </el-container>
      <div class="footer_height"></div>
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
import axios from "axios";
import ajax from "../../assets/ajax/api";
export default {
  data() {
    return {
      gradeList: [],
      courseList_data: [],
      gradeId: 0,
      form: [
        {
          name: "haha"
        }
      ],
      gradeTab_num:0
    };
  },
  async created() {
    await this.init();
    this.courseList();
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
    // 课程列表
    async courseList() {
      let params = new URLSearchParams();
      params.append("nianji", this.gradeId);
      params.append("token", sessionStorage.getItem("token"));
      let _res = await ajax.getMyCourseList(params);
      if (_res.code == 0) {
        this.courseList_data = _res.data.data;
      }
    },
    gradeTab(id) {
      this.gradeId = id;
    },
    submit() {
      console.log(this.courseList_data);
    },
    histTypeUpdate(i) {
      console.log(i);
      console.log(index);
      console.log($(this)[0]);
    }
  },
  components: {
    head_nav,
    student_nav,
    footer_nav
  }
};
</script>

