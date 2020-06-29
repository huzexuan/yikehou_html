
<style>
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
        <ul>
            <li></li>
            <li></li>
        </ul>
      </el-container>

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
    };
  },
  methods: {
  },
  components: {
    head_nav,
    student_nav,
    footer_nav
  }
};
$(function() {
});
</script>

