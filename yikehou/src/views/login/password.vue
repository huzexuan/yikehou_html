<template>
  <div class="box">
    <div class="form_box">
      <div class="title"></div>
      <div class="input_box">
        <img src="./images/pass_icon01.jpg" alt />
        <input type="text" id="number" autocomplete="off" placeholder="请输入账号" class="inp" />
      </div>
      <div class="input_box">
        <img src="./images/pass_icon02.jpg" alt />
        <input type="password" id="Ypassword" placeholder="请输入原密码" class="inp" />
      </div>
      <div class="input_box">
        <img src="./images/pass_icon02.jpg" alt />
        <input type="password" id="password" placeholder="请输入新密码" class="inp" />
      </div>
      <div class="input_box">
        <img src="./images/pass_icon03.jpg" alt />
        <input type="password" id="newpassword" placeholder="再次输入新密码" class="inp" />
      </div>
      <div class="register_btn">
        <button type="submit" @click="submit" class="register">确认修改</button>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import axios from "axios";
import ajax from "../../assets/ajax/api";
export default {
  data() {
    return {
      checked: false
    };
  },
  methods: {
    async submit() {
      var num = $("#number").val();
      var pas = $("#password").val();
      var Ypas = $("#Ypassword").val(); 
      var newpas = $("#newpassword").val();
      const { id } = this.$route.params;
      if (pas === newpas) {
        if (id == 1) {
          // 学校
          let params = new URLSearchParams();
          params.append("name", num);
          params.append("password", Ypas);
          params.append("new_password", newpas);
          let _res = await ajax.schoolPassword(params);
          if (_res.code == 0) {
            this.$message.success(_res.message);
            this.$router.push({ name: "School" });
          } else {
            this.$message.error(_res.message);
          }
        } else {
          // 学生
          let params = new URLSearchParams();
          params.append("card_number", num);
          params.append("password", Ypas);
          params.append("new_password", newpas);
          let _res = await ajax.studentPassword(params);
          if (_res.code == 0) {
            this.$message.success(_res.message);
            this.$router.push({ name: "Student" });
          } else {
            this.$message.error(_res.message);
          }
        }
      }else{
            this.$message.error('密码不一致');
      }
    }
  }
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100vh;
  background: url(./images/password_bg.jpg) no-repeat 100% 100%;
  background-size: 100% 100%;
  position: relative;
}
.form_box {
  position: absolute;
  right: 205px;
  top: 200px;
  color: #fff;
}
.title {
  width: 753px;
  height: 130px;
  background: url(./images/password_titlebg.png) no-repeat 100% 100%;
  background-size: 100% 100%;
}
.input_box {
  display: flex;
  align-items: center;
  width: 430px;
  margin: 38px auto 0;
}
.inp {
  width: 380px;
  height: 46px;
  box-sizing: border-box;
  padding-left: 10px;
  background: #051a3f;
  color: #a4d6ef;
  font-size: 16px;
}
.inp::placeholder {
  color: #a4d6ef !important;
}
.register_btn {
  width: 430px;
  margin: 55px auto 0;
}
.register {
  width: 100%;
  height: 47px;
  padding: 0;
  margin: 0;
  font-size: 24px;
  color: #64b5dd;
  background: #093c66;
  border: 1px solid #134b7e;
  cursor: pointer;
}
</style>
