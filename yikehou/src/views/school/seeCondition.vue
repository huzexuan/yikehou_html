
<style>
.screen_box {
  margin: 44px 0 22px;
}
.el-select-dropdown__item {
  display: block;
}
.screen_box .ip {
  width: 250px;
  margin-left: 68px;
}

#screen1 .el-select {
  margin-left: 68px;
}
.seeCondition_box > li {
  display: block;
  width: 100%;
  height: 147px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 38px;
  position: relative;
}
.seeCondition_item_top,
.seeCondition_item_bottom {
  width: 100%;
  box-sizing: border-box;
  padding: 0 10px 0 146px;
}
.seeCondition_item_top {
  height: 98px;
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
}
.seeCondition_item_bottom {
  height: 50px;
  background: #edf2f5;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
}
.seeCondition_item_top .user_img {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background:url(./images/user_img.png) no-repeat 100% 100%;
  background-size: 100% 100%;
}
.seeCondition_item_top .user_del {
  width: calc(100% - 64px);
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}
.seeCondition_item_top .user_del span {
  font-size: 16px;
  color: #666;
}
.seeCondition_item_top .user_del .user_name {
  display: inline-block;
  font-size: 20px;
  color: #000;
  margin-right: 42px;
}
.seeCondition_item_top .user_del > span:last-child {
  font-size: 14px;
  color: #0168b7;
  cursor: pointer;
}
.seeCondition_item_bottom ul li {
  line-height: 49px;
  font-size: 16px;
  color: #000;
  margin-right: 44px;
}
.seeCondition_item_bottom ul li:nth-child(1) {
  color: #666;
}
.seeCondition_ranking {
  width: 133px;
  height: 147px;
  box-sizing: border-box;
  padding-left: 34px;
  background: url(./images/seeCondition.png) no-repeat 100% 100%;
  background-size: 100% 100%;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 18px;
}
.seeCondition_box > li .seeCondition_ranking p:nth-child(1) {
  margin: 20px 0 37px -7px;
}
.seeCondition_box > li .seeCondition_ranking p:last-child {
  font-size: 32px;
  font-weight: bold;
  color: #000;
}
.seeCondition_box > li .seeCondition_ranking .no_num {
  font-size: 24px !important;
  color: #f91313 !important;
  margin-left: -10px;
}
.seeCondition_box > li:nth-child(1) .seeCondition_ranking_on p,
.seeCondition_box > li:nth-child(2) .seeCondition_ranking_on p,
.seeCondition_box > li:nth-child(3) .seeCondition_ranking_on p {
  color: #fff;
  font-size: 32px;
  font-weight: bold;
}
.seeCondition_box > li:nth-child(1) .seeCondition_ranking p:nth-child(1),
.seeCondition_box > li:nth-child(2) .seeCondition_ranking p:nth-child(1),
.seeCondition_box > li:nth-child(3) .seeCondition_ranking p:nth-child(1) {
  font-size: 18px;
  font-weight: normal;
}
.seeCondition_box > li:nth-child(1) .seeCondition_ranking_on {
  background: url(./images/seeCondition_01.png) no-repeat 100% 100%;
  background-size: 100% 100%;
}
.seeCondition_box > li:nth-child(2) .seeCondition_ranking_on {
  background: url(./images/seeCondition_02.png) no-repeat 100% 100%;
  background-size: 100% 100%;
}
.seeCondition_box > li:nth-child(3) .seeCondition_ranking_on {
  background: url(./images/seeCondition_03.png) no-repeat 100% 100%;
  background-size: 100% 100%;
}
</style>
<template>
  <div>
    <el-header>
      <head_nav :navId="1"></head_nav>
    </el-header>
    <el-main>
      <div class="height_div"></div>
      <bannerdel :id='1' :navid="3"></bannerdel>
      <div class="Box_content">
        <ul class="tab">
          <li @click="_condition">课程热度排名</li>
          <li class="active">学生报课情况</li>
        </ul>
        <div class="screen_box" id="screen1">
          <el-select
            v-model="gradeId"
            class="a"
            clearable
            placeholder="请选择年级"
            @change="nianjichange"
          >
            <el-option
              v-for="item in gradeList"
              :key="item.id"
              :label="item.title"
              :value="item.id"
            ></el-option>
          </el-select>
          <el-input class="ip" v-model="banjivalue" placeholder="请填写班级" @change="banjichange"></el-input>
          <el-select v-model="student_id" clearable placeholder="请选择学生" @change="studentchange">
            <el-option
              v-for="item in studentList"
              :key="item.id"
              :label="item.nickname"
              :value="item.id"
            ></el-option>
          </el-select>
        </div>
        <ul class="seeCondition_box">
          <li v-for="(item,index) in li_list" :key="index">
            <div class="seeCondition_item_top">
              <img :src="item.img" class="user_img" alt />
              <p class="user_del">
                <span>
                  <span class="user_name">{{item.nickname}}</span>
                  <span>{{item.nianji}}{{item.class}}</span>
                </span>
                <span @click="_information(item.id)">查看学生信息</span>
              </p>
            </div>
            <div class="seeCondition_item_bottom">
              <ul>
                <li>所报课程</li>
                <li v-for="(i,num) in item.course" :key="num">{{i.title}}</li>
              </ul>
            </div>
            <div
              class="seeCondition_ranking"
              :class="[item.has_course > 0 ? 'seeCondition_ranking_on':'']"
            >
              <p>报课数</p>
              <p
                :class="[item.has_course == 0 ? 'no_num':'']"
              >{{item.has_course == 0 ?'未报':item.has_course}}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="footer_height" style="height:458px"></div>
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
export default {
  data() {
    return {
      gradeList: [],
      studentList: [],
      gradeId: "",
      banjivalue: "",
      student_id: "",
      bianji_id: "",
      li_list: [],
    };
  },
  created() {
    this.init();
    this.list();
    this.student()
  },
  methods: {
    // 年级
    async init() {
      let params = new URLSearchParams();
      let _res = await ajax.NianjiList(params);
      if (_res.code == 0) {
        this.gradeList = _res.data;
      }
    },
    // 列表
    async list() {
      let params = new URLSearchParams();
      params.append("token", sessionStorage.getItem("token"));
      params.append("nianji", this.gradeId);
      params.append("class", this.bianji_id);
      params.append("id", this.student_id);
      let _res = await ajax.getStudentList(params);
      if (_res.code == 0) {
        this.li_list = _res.data.data;
      }
    },
    // 学生下拉
    async student(){
      let params = new URLSearchParams();
      params.append("token", sessionStorage.getItem("token"));
      let _res = await ajax.studentPullDownList(params);
      if (_res.code == 0) {
        this.studentList = _res.data
        console.log(_res.data.data)
      }
    },
    _condition() {
      this.$router.push({ name: "SeeDegree" });
    },
    _information(up_id) {
      this.$router.push({ name: "Information", params: { id: up_id } });
    },
    nianjichange(e) {
      this.gradeId = e;
      this.list()
    },
    banjichange(e) {
      this.bianji_id = e;
      this.list()
    },
    studentchange(e) {
      this.student_id = e;
      this.list()
    }
  },
  components: {
    head_nav,
    bannerdel,
    footer_nav
  }
};
</script>

