<template>
  <div class="box">
    <div class="form_box">
      <div class="title"></div>
      <div class="input_box">
        <img src="./images/pass_icon01.jpg" alt />
        <input type="text" placeholder="请输入账号" class="inp" />
      </div>
      <div class="input_box">
        <img src="./images/pass_icon02.jpg" alt />
        <input type="password" placeholder="请输入新密码" class="inp" />
      </div>
      <div class="input_box">
        <img src="./images/pass_icon03.jpg" alt />
        <input type="password" placeholder="再次输入新密码" class="inp" />
      </div>
      <div class="register_btn">
        <button type="submit" class="register">确认修改</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false
    };
  }
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100vh;
  background: url(./images/password_bg.jpg) no-repeat 100% 100%;
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
