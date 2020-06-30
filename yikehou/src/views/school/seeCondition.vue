
<style>
.screen_box {
  margin: 44px 0 22px;
}
.el-select-dropdown__item {
  display: block;
}
.el-select {
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
  background: #000;
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
  position: absolute;
  top: 0;
  left: 0;
  font-size: 18px;
}
.seeCondition_box > li .seeCondition_ranking p:nth-child(1){
  margin: 20px 0 37px -7px;

}
.seeCondition_box > li .seeCondition_ranking p:last-child{
    font-size: 32px;
    font-weight: bold;
    color: #000;
}
.seeCondition_box > li .seeCondition_ranking .no_num{
  font-size: 24px !important;
  color: #f91313 !important;
  margin-left: -10px;
}
.seeCondition_box > li:nth-child(1) .seeCondition_ranking p,
.seeCondition_box > li:nth-child(2) .seeCondition_ranking p,
.seeCondition_box > li:nth-child(3) .seeCondition_ranking p {
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
.seeCondition_box > li:nth-child(1) .seeCondition_ranking {
  background: url(./images/seeCondition_01.png) no-repeat 100% 100%;
}
.seeCondition_box > li:nth-child(2) .seeCondition_ranking {
  background: url(./images/seeCondition_02.png) no-repeat 100% 100%;
}
.seeCondition_box > li:nth-child(3) .seeCondition_ranking {
  background: url(./images/seeCondition_03.png) no-repeat 100% 100%;
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
          <student_nav :id="3" :user="1"></student_nav>
        </el-container>
      </div>
      <el-container>
        <ul class="tab">
          <li @click="_condition">课程热度排名</li>
          <li class="active">学生报课情况</li>
        </ul>
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
        </div>
        <ul class="seeCondition_box">
          <li>
            <div class="seeCondition_item_top">
              <img src class="user_img" alt />
              <p class="user_del">
                <span>
                  <span class="user_name">张甜甜</span>
                  <span>5年级4班</span>
                </span>
                <span @click="_information">查看学生信息</span>
              </p>
            </div>
            <div class="seeCondition_item_bottom">
              <ul>
                <li>所报课程</li>
                <li>英语</li>
                <li>意大利语</li>
                <li>未来CEO</li>
              </ul>
            </div>
            <div class="seeCondition_ranking">
              <p>报课数</p>
              <p>8</p>
            </div>
          </li>
          <li>
            <div class="seeCondition_item_top">
              <img src class="user_img" alt />
              <p class="user_del">
                <span>
                  <span class="user_name">张甜甜</span>
                  <span>5年级4班</span>
                </span>
                <span>查看学生信息</span>
              </p>
            </div>
            <div class="seeCondition_item_bottom">
              <ul>
                <li>所报课程</li>
                <li>英语</li>
                <li>意大利语</li>
                <li>未来CEO</li>
              </ul>
            </div>
            <div class="seeCondition_ranking">
              <p>报课数</p>
              <p>8</p>
            </div>
          </li>
          <li>
            <div class="seeCondition_item_top">
              <img src class="user_img" alt />
              <p class="user_del">
                <span>
                  <span class="user_name">张甜甜</span>
                  <span>5年级4班</span>
                </span>
                <span>查看学生信息</span>
              </p>
            </div>
            <div class="seeCondition_item_bottom">
              <ul>
                <li>所报课程</li>
                <li>英语</li>
                <li>意大利语</li>
                <li>未来CEO</li>
              </ul>
            </div>
            <div class="seeCondition_ranking">
              <p>报课数</p>
              <p>8</p>
            </div>
          </li>
          <li>
            <div class="seeCondition_item_top">
              <img src class="user_img" alt />
              <p class="user_del">
                <span>
                  <span class="user_name">张甜甜</span>
                  <span>5年级4班</span>
                </span>
                <span>查看学生信息</span>
              </p>
            </div>
            <div class="seeCondition_item_bottom">
              <ul>
                <li>所报课程</li>
                <li>英语</li>
                <li>意大利语</li>
                <li>未来CEO</li>
              </ul>
            </div>
            <div class="seeCondition_ranking">
              <p>报课数</p>
              <p>8</p>
            </div>
          </li>
          <li>
            <div class="seeCondition_item_top">
              <img src class="user_img" alt />
              <p class="user_del">
                <span>
                  <span class="user_name">张甜甜</span>
                  <span>5年级4班</span>
                </span>
                <span>查看学生信息</span>
              </p>
            </div>
            <div class="seeCondition_item_bottom">
              <ul>
                <li>所报课程</li>
                <li>英语</li>
                <li>意大利语</li>
                <li>未来CEO</li>
              </ul>
            </div>
            <div class="seeCondition_ranking">
              <p>报课数</p>
              <p class="no_num">未报</p>
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
    _information(){
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

