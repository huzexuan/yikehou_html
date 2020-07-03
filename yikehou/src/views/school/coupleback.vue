
<style>
.coupleback .screen_box {
  margin: 30px 0 40px;
  display: flex;
  justify-content: space-between;
}
.screen_box .el-input {
  width: 250px !important;
  /* margin-left: 68px; */
}
.el-select-dropdown__item {
  display: block;
}
.coupleback .seeCondition_box > li {
  height: 222px;
  box-sizing: border-box;
  padding: 40px 0 0;
  display: flex;
  position: relative;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 38px;
}
.coupleback_userImg {
  width: 107px;
  height: 107px;
  border-radius: 50%;
  background: #000;
  margin: 0 32px 0 2px;
}
.coupleback_userDes {
  margin-top: 18px;
}
.name_user {
  font-size: 18px;
  color: #666;
}
.name_user span {
  display: inline-block;
  font-weight: bold;
  font-size: 24px;
  color: #000;
  margin-right: 35px;
}
.evaluate {
  margin: 25px 0 34px 0;
  display: flex;
  align-items: center;
}
.evaluate_l,
.evaluate_r {
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #000;
}
.evaluate_l img,
.evaluate_r img {
  margin-left: 15px;
}
.evaluate_l span,
.evaluate_r span {
  color: #ffc600;
  display: inline-block;
  margin: 0 170px 0 39px;
}
.leave_p {
  font-size: 16px;
}
.label {
  position: absolute;
  top: 0;
  right: 0;
  width: 135px;
  height: 124px;
  background: url(./images/coupleback_bg.png) no-repeat 100% 100%;
  background-size: 100% 100%;
}
.label p {
  width: 66px;
  text-align: center;
  margin: 15px 0 0 64px;
  color: #fff;
  font-size: 16px;
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
          <student_nav :id="5"></student_nav>
        </el-container>
      </div>
      <el-container class="coupleback">
        <div class="screen_box">
          <el-select v-model="nianjivalue" clearable placeholder="请选择年级" @change="nianjichange">
            <el-option
              v-for="item in gradeList"
              :key="item.id"
              :label="item.title"
              :value="item.id"
            ></el-option>
          </el-select>
          <el-select v-model="kechengvalue" clearable placeholder="请选择课程" @change="kechengchange">
            <el-option
              v-for="item in kechengoptions"
              :key="item.id"
              :label="item.title"
              :value="item.id"
            ></el-option>
          </el-select>
          <el-input v-model="banjivalue" placeholder="请填写班级" @change="banjichange"></el-input>
          <el-select v-model="timevalue" clearable placeholder="时间顺序"  @change="timechange">
            <el-option
              v-for="item in valuelist"
              :key="item.id"
              :label="item.title"
              :value="item.id"
            ></el-option>
          </el-select>
        </div>
        <ul class="seeCondition_box">
          <li>
            <img src class="coupleback_userImg" alt />
            <div class="coupleback_userDes">
              <p class="name_user">
                <span>张甜甜</span>5年级4班
              </p>
              <div class="evaluate">
                <div class="evaluate_l">
                  课程评价：
                  <img src="./images/star_active.png" alt />
                  <img src="./images/star_active.png" alt />
                  <img src="./images/star_active.png" alt />
                  <img src="./images/star.png" alt />
                  <img src="./images/star.png" alt />
                  <span>3星</span>
                </div>
                <div class="evaluate_r">
                  教师评价：
                  <img src="./images/star_active.png" alt />
                  <img src="./images/star_active.png" alt />
                  <img src="./images/star_active.png" alt />
                  <img src="./images/star.png" alt />
                  <img src="./images/star.png" alt />
                  <span>3星</span>
                </div>
              </div>
              <p class="leave_p">留言：课程很好，能学到很多正式课以为的东西，希望下学期还开此课</p>
            </div>
            <div class="label">
              <p>未来人才计划</p>
            </div>
          </li>
          <li>
            <img src class="coupleback_userImg" alt />
            <div class="coupleback_userDes">
              <p class="name_user">
                <span>张甜甜</span>5年级4班
              </p>
              <div class="evaluate">
                <div class="evaluate_l">
                  课程评价：
                  <img src="./images/star_active.png" alt />
                  <img src="./images/star_active.png" alt />
                  <img src="./images/star_active.png" alt />
                  <img src="./images/star.png" alt />
                  <img src="./images/star.png" alt />
                  <span>3星</span>
                </div>
                <div class="evaluate_r">
                  教师评价：
                  <img src="./images/star_active.png" alt />
                  <img src="./images/star_active.png" alt />
                  <img src="./images/star_active.png" alt />
                  <img src="./images/star.png" alt />
                  <img src="./images/star.png" alt />
                  <span>3星</span>
                </div>
              </div>
              <p class="leave_p">留言：课程很好，能学到很多正式课以为的东西，希望下学期还开此课</p>
            </div>
            <div class="label">
              <p>英语</p>
            </div>
          </li>
        </ul>
      </el-container>
      <div class="footer_height" style="height:458px"></div>
      <!-- footer -->
      <footer_nav></footer_nav>
    </el-main>
  </div>
</template>

<script>
import head_nav from "../../components/header.vue";
import footer_nav from "../../components/footer.vue";
import student_nav from "../../components/studentNav.vue";
import axios from "axios";
import ajax from "../../assets/ajax/api";
export default {
  data() {
    return {
      gradeList: [],
      nianjivalue: [],
      banjivalue: '',
      timevalue: [],
      kechengvalue:[],
      kechengoptions: [{
          id: 1,
          title: "正序"
        },
        {
          id: 2,
          title: "倒序"
        }
      ],
      valuelist: [
        {
          id: 1,
          title: "正序"
        },
        {
          id: 2,
          title: "倒序"
        }
      ],
      kecheng_id:'',
      gradeId:'',
      bianji_id:'',
      time_id:''
    };
  },
  created() {
    this.init();
  },
  methods: {
    // 年级分类
    async init() {
      let params = new URLSearchParams();
      let _res = await ajax.NianjiList(params);
      if (_res.code == 0) {
        this.gradeList = _res.data;
      }
    },
    // 课程
    async MyCoursePluck() {
      let params = new URLSearchParams();
      params.append("token", sessionStorage.getItem("token"));
      let _res = await ajax.getMyCoursePluck(params);
      if (_res.code == 0) {
      }
    },
    _condition() {
      this.$router.push({ name: "SeeDegree" });
    },
    _information() {
      this.$router.push({ name: "Information" });
    },
    nianjichange(e){
      this.gradeId = e
      this.list()
    },
    banjichange(e){
      this.bianji_id = e
      this.list()
    },
    timechange(e){
      this.time_id = e
      this.list()
    },
    kechengchange(e){
      this.kecheng_id = e
      this.list()
    },  
    async list (){

      console.log('班级：'+this.bianji_id)
      console.log('课程：'+this.kecheng_id)
      console.log('年级：'+this.gradeId)
      console.log('时间顺序：'+this.time_id)
    }
  },
  components: {
    head_nav,
    student_nav,
    footer_nav
  }
};
</script>

