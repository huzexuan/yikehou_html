<style >
.header_top {
  width: 100%;
  height: 62px;
  background: #0168b7;
}
.header_top_box p {
  font-size: 16px;
  color: #fff;
  line-height: 62px;
}
.login_btn {
  display: inline-block;
  width: 100px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border: 1px solid #fff;
  font-size: 16px;
  border-radius: 10px;
  margin-right: 46px;
  color: #fff;
  cursor: pointer;
}
.login_btn_active {
  color: #0168b7;
  background: #fff;
}
.header_buttom {
  width: 100%;
  padding: 10px 0;
  background: #fff;
}
.nav li {
  font-size: 16px;
  color: #666;
  cursor: pointer;
  text-align: center;
  margin-right: 42px;
}
.nav li:last-child {
  margin: 0;
}
.nav li.active {
  color: #0168b7;
}

.height_border {
  width: 40px;
  height: 2px;
  margin: 10px auto 0;
}
.nav li.active .height_border {
  background: #0168b7;
}
.user_student {
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}
.user_student img {
  margin-right: 14px;
}
.el-popover {
  z-index: 1111111 !important;
}
</style>
<template>
  <div>
    <div class="header_top">
      <el-container class="header_top_box flex_justify_content">
        <p>欢迎进入益课后官网！</p>
        <div v-if="user == 2">
          <el-popover placement="top" width="160" v-model="visible">
            <p>确定退出当前账号吗？</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="visible = false">取消</el-button>
              <el-button type="primary" size="mini" @click="is_visible">确定</el-button>
            </div>
            <div slot="reference" class="user_student">
              <img src="./images/user_student.png" alt />
              {{user_name}}
            </div>
          </el-popover>
        </div>
        <div v-else-if="user == 1">
          <el-popover placement="top" width="160" v-model="visible">
            <p>确定退出当前账号吗？</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="visible = false">取消</el-button>
              <el-button type="primary" size="mini" @click="is_visible">确定</el-button>
            </div>
            <div slot="reference" class="user_student">
              <img src="./images/user_school.png" alt />
              {{school_name}}
            </div>
          </el-popover>
        </div>
        <div class="login_box" v-else>
          <div class="login_btn login_btn_active" @click="student_login()">学生登录</div>
          <div class="login_btn" @click="school_login()">学校登录</div>
        </div>
      </el-container>
    </div>
    <div class="header_buttom">
      <el-container class="header_buttom_box flex_justify_content">
        <img src="./images/logo.png" alt />
        <ul class="nav" v-if="user == 2">
          <li :class="navId == '1' ?'active':''" @click="navId == 1 ? '':navPage('StudentIndex')">
            <p>首页</p>
            <p class="height_border"></p>
          </li>
          <li :class="navId == '2' ?'active':''" @click="navId == 2 ? '':navPage('Aboutus')">
            <p>关于我们</p>
            <p class="height_border"></p>
          </li>
          <li :class="navId == '3' ?'active':''" @click="navId == 3 ? '':navPage('StudentIndex')">
            <p>课程中心</p>
            <p class="height_border"></p>
          </li>
          <li :class="navId == '4' ?'active':''" @click="navId == 4 ? '':navPage('New')">
            <p>新闻动态</p>
            <p class="height_border"></p>
          </li>
          <li :class="navId == '5' ?'active':''" @click="navId == 5 ? '':navPage('JoinHands')">
            <p>合作共赢</p>
            <p class="height_border"></p>
          </li>
        </ul>
        <ul class="nav" v-else-if="user == 1">
          <li :class="navId == '1' ?'active':''" @click="navId == 1 ? '':navPage('SchoolIndex')">
            <p>首页</p>
            <p class="height_border"></p>
          </li>
          <li :class="navId == '2' ?'active':''" @click="navId == 2 ? '':navPage('Aboutus')">
            <p>关于我们</p>
            <p class="height_border"></p>
          </li>
          <li :class="navId == '3' ?'active':''" @click="navId == 3 ? '':navPage('SchoolIndex')">
            <p>课程中心</p>
            <p class="height_border"></p>
          </li>
          <li :class="navId == '4' ?'active':''" @click="navId == 4 ? '':navPage('New')">
            <p>新闻动态</p>
            <p class="height_border"></p>
          </li>
          <li :class="navId == '5' ?'active':''" @click="navId == 5 ? '':navPage('JoinHands')">
            <p>合作共赢</p>
            <p class="height_border"></p>
          </li>
        </ul>
        <ul class="nav" v-else>
          <li :class="navId == '1' ?'active':''" @click="navId == 1 ? '':navPage('Index')">
            <p>首页</p>
            <p class="height_border"></p>
          </li>
          <li :class="navId == '2' ?'active':''" @click="navId == 2 ? '':navPage('Aboutus')">
            <p>关于我们</p>
            <p class="height_border"></p>
          </li>
          <li :class="navId == '3' ?'active':''" @click="navId == 3 ? '':navPage('Course')">
            <p>课程中心</p>
            <p class="height_border"></p>
          </li>
          <li :class="navId == '4' ?'active':''" @click="navId == 4 ? '':navPage('New')">
            <p>新闻动态</p>
            <p class="height_border"></p>
          </li>
          <li :class="navId == '5' ?'active':''" @click="navId == 5 ? '':navPage('JoinHands')">
            <p>合作共赢</p>
            <p class="height_border"></p>
          </li>
        </ul>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    navId: {
      type: Number
    }
  },
  data() {
    return {
      user: sessionStorage.getItem("bs"),
      user_name: sessionStorage.getItem("user_name"),
      school_name: sessionStorage.getItem("school_name"),
      visible: false
    };
  },
  created() {},
  methods: {
    student_login() {
      // this.$message.warning('暂未开放');
      this.$router.push({ name: "Student" });
    },
    school_login() {
      // this.$message.warning('暂未开放');
      this.$router.push({ name: "School" });
    },
    navPage(namePage) {
      this.$router.push({ name: namePage });
    },
    is_visible() {
      sessionStorage.clear();
      this.visible = false;
      this.$router.push({ name: "Index" });
    }
  }
};
</script>


