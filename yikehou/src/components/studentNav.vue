<style >
.studentNav_box {
  width: 100%;
  height: 65px;
  background: rgba(255, 255, 255, 0.7);
}
.studentNav_box ul li {
  margin-right: 70px;
  width: 140px;
  height: 100%;
  text-align: center;
  line-height: 65px;
  font-size: 16px;
  cursor: pointer;
}
.studentNav_box ul li:last-child {
  margin: 0;
}
.studentNav_box ul li.studentNav_active {
  background: #0168b7;
  color: #fff;
  font-weight: bold;
}
</style>
<template>
  <div class="studentNav_box">
    <ul v-if="user == 1">
      <li
        :class="[id == 1 ?'studentNav_active':'']"
        @click="id == 1 ? '':nav_tab('SchoolIndex')"
      >选课中心</li>
      <li :class="[id == 2 ?'studentNav_active':'']" @click="id == 2 ? '':nav_tab('Account')">开设学生账号</li>
      <li :class="[id == 3 ?'studentNav_active':'']" @click="id == 3 ? '':nav_tab('SeeDegree')">查看信息</li>
      <li :class="[id == 4 ?'studentNav_active':'']" @click="id == 4 ? '':nav_tab('SchoolSet')">设置</li>
      <li :class="[id == 5 ?'studentNav_active':'']" @click="id == 5 ? '':nav_tab('Coupleback')">学生反馈信息</li>
    </ul>
    <ul v-else>
      <li
        :class="[id == 1 ?'studentNav_active':'']"
        @click="id == 1 ? '':nav_tab('StudentIndex')"
      >选课中心</li>
      
      <li :class="[id == 2 ?'studentNav_active':'']" @click="id == 2 ? '':nav_tab('MeCourse')">我的课程</li>
      <li :class="[id == 3 ?'studentNav_active':'']" @click="id == 3 ? '':nav_tab('Feedback')">我要反馈</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number
    }
  },
  data() {
    return {
      user:sessionStorage.getItem("bs"),
    };
  },
  created() {},
  methods: {
    nav_tab(namePage) {
      this.$router.push({ name: namePage });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

