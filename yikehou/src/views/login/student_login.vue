<template>
  <div class="box">
    <div class="form_box">
      <p class="title">学生登录</p>
      <div class="inp_box">
        <input type="text" name="name" class="inp" :value="userInfo.user" autocomplete="off"/>
        <div class="icon">
          <img src="./images/account.png" alt />
          <span>账号</span>
        </div>
      </div>
      <div class="inp_box">
        <input type="password" name="password" :value="userInfo.pass" class="inp" />
        <div class="icon">
          <img src="./images/password.png" alt />
          <span>密码</span>
        </div>
      </div>
      <div class="operation">
        <div class="inp_check">
          <el-checkbox v-model="checked" style="color:#fff;" >记住密码</el-checkbox>
        </div>
        <div class="no_password" @click="password_btn">修改密码</div>
      </div>
      <div class="register_btn">
        <button type="submit" class="register" :plain="true" @click="submit">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ajax from "../../assets/ajax/api";
import $ from "jquery";

export default {
  data() {
    return {
      checked: false,
      userInfo:{
        user:'',
        pass:''
      }
    };
  },
  created(){
    this.getCookie()
  },
  methods: {
    password_btn() {
      this.$router.push({ name: "Password" });
    },
    async submit() {
      let card_number =  $("input[name='name']").val()
      let pas =  $("input[name='password']").val()
      let params = new URLSearchParams();
      params.append("card_number",card_number);
      params.append("password", pas);
      let _res = await ajax.studentLogin(params);
      if (_res.code == 0) {
        if (this.checked) {
          console.log(this.userInfo)
          this.setCookie(this.userInfo.user, this.userInfo.pass, 7);
          this.$router.push({ name: "StudentIndex" });
        } else {
          this.$message.success(_res.message);
          this.$router.push({ name: "StudentIndex" });
        }
          sessionStorage.setItem('token',_res.data.token);
          sessionStorage.setItem('user_name',_res.data.nickname);
          sessionStorage.setItem('user_id',_res.data.id);
          sessionStorage.setItem('school_id',_res.data.school_id);
          sessionStorage.setItem('school_name',_res.data.school_name);
          sessionStorage.setItem('bs',_res.data.bs);
          sessionStorage.setItem('nianjie',_res.data.nianjie);
          sessionStorage.setItem('class',_res.data.class);
          sessionStorage.setItem('nianji_id',_res.data.nianji_id);
      } else {
        this.$message.error(_res.message);
      }
    },
    setCookie(c_name, c_pwd, exdays) {
      var exdate = new Date();
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays);
      window.document.cookie =
        "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
      window.document.cookie =
        "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
    },
    getCookie: function() {
      if (document.cookie.length > 0) {
        this.checked =true
        var arr = document.cookie.split("; ");
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split("="); 
          if (arr2[0] == "userName") {
            this.userInfo.user = arr2[1];
          } else if (arr2[0] == "userPwd") {
            this.userInfo.pass = arr2[1];
          }
        }
      }
    },
  }
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100vh;
  background: url(./images/student_bg.jpg) no-repeat 100% 100%;
  background-size:100% 100%;
  position: relative;
}
.box .form_box {
  position: absolute;
  right: 205px;
  top: 20%;
  width: 499px;
  height: 484px;
  color: #fff;
  background: url(./images/form_bg.png) no-repeat 100% 100%;
  background-size:100% 100%;
}
.title {
  font-size: 38px;
  text-align: center;
  margin: 54px 0 50px;
  color: #fff;
}
.inp {
  width: 100%;
  height: 56px;
  box-sizing: border-box;
  padding-left: 120px;
  background: #1b1f51;
  border: 2px solid #0b3968;
  border-radius: 10px;
  color: #fff;
}
.inp_box {
  width: 403px;
  position: relative;
  margin: 0 auto 32px;
}
.icon {
  position: absolute;
  top: 50%;
  margin-top: -12px;
  display: flex;
  align-items: center;
  font-size: 20px;
}
.icon img {
  margin: 0 20px;
}
input:focus {
  border: 2px solid #0b8ab9;
}
.operation {
  width: 403px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.no_password {
  cursor: pointer;
  color: #00b8ff;
  font-size: 16px;
}
.register_btn {
  width: 403px;
  margin: 40px auto 0;
}
.register {
  width: 100%;
  height: 56px;
  padding: 0;
  margin: 0;
  font-size: 26px;
  color: #fff;
  background: linear-gradient(#00b7fe, #0178e5);
  border: 0;
  border-radius: 10px;
  cursor: pointer;
}
</style>
