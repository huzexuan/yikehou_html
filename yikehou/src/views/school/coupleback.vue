
<style>
.coupleback .screen_box {
  margin: 30px 0 40px;
  display: flex;
  justify-content: space-between;
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
  background-size:100% 100%;
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
          <student_nav :id="5" ></student_nav>
        </el-container>
      </div>
      <el-container class="coupleback">
        <div class="screen_box">
          <el-select v-model="value" clearable placeholder="请选择年级">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select v-model="value" clearable placeholder="请选择班级">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select v-model="value" clearable placeholder="请选择学生">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select v-model="value" clearable placeholder="请选择学生">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
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

export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        }
      ],
      value: ""
    };
  },
  methods: {
    _condition() {
      this.$router.push({ name: "SeeDegree" });
    },
    _information() {
      this.$router.push({ name: "Information" });
    }
  },
  components: {
    head_nav,
    student_nav,
    footer_nav
  }
};
</script>

