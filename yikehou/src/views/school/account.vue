
<style>
.account_box {
  width: 100%;
  height: 766px;
  background: url(./images/account_bg.jpg) no-repeat 100% 100%;
  background-size: 100% 100%;
}
.up_account {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 260px 0 90px;
}
.account_btnbox {
  width: 382px;
  height: 92px;
  border: 1px solid #fff;
  line-height: 92px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
}
.account_btnbox p {
  margin-right: 12px;
}
.account_btnbox:last-child {
  background: #fff;
  color: #2e3693;
  margin-left: 100px;
}
.account_del{
  margin-left: 168px;
  font-size: 16px;
  color: #fff;
  line-height: 30px;
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
          <student_nav :id="2"></student_nav>
        </el-container>
      </div>
      <div class="account_box">
        <el-container>
          <div class="up_account">
            <div class="account_btnbox">
              <p>单个增加学生信息</p>
              <img src="./images/account_btn1.png" />
            </div>
            <div class="account_btnbox" >
              <input type="file" id="file" name="myfile" style="display: none" />
            <!-- <input type="button" @click="upload" value="选择文件上传" />-->
              <!-- <p @click="upload">{{file_Name ?file_Name :'批量导入学生信息'}}</p> -->
              <p >{{file_Name ?file_Name :'批量导入学生信息'}}</p>
              <img  src="./images/account_btn2.png" />
            </div>
          </div>
          <div class="account_del">
            <p>温馨提示：</p>
            <p>1、身份证号默认为登录时账号</p>
            <p>2、初始密码默认为000000，如您需要需改密码请在登录页面自行修改。</p>
          </div>
        </el-container>
      </div>
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
import axios from "axios";
import ajax from "../../assets/ajax/api";
export default {
  data() {
    return {
      file_Name:''
    };
  },
  methods: {
    async UpladFile(fileObj) {
      console.log(fileObj)
      var form = new FormData(); // FormData 对象
      form.append("file", fileObj); // 文件对象
      let params = new URLSearchParams();
      params.append("token", sessionStorage.getItem("token")); // 文件对象
      params.append("excel", form); // 文件对象
      let _res = await ajax.uploadExcel(params);
      if (_res.code == 0) {
      }
      // $.ajax({
      //     url: 'xxx',                      //url地址
      //     type: 'POST',                 //上传方式
      //     data: form,                   // 上传formdata封装的数据
      //     dataType: 'JSON',
      //     cache: false,                  // 不缓存
      //     processData: false,        // jQuery不要去处理发送的数据
      //     contentType: false,         // jQuery不要去设置Content-Type请求头
      //     success:function (data) {           //成功回调
      //         console.log(data);
      //     },
      //    error:function (data) {           //失败回调
      //         console.log(data);
      //     }
      // });
    },
    upload() {
      let _this = this;
      $("#file").click();
      $("#file").change(function(e) {
        var fileName = e.target.files[0];
        if (fileName !== undefined) {
          var file_typename = fileName.name.substring(
            fileName.name.lastIndexOf(".")
          );
          if (file_typename === ".xlsx" || file_typename === ".xls") {
            _this.file_Name = fileName.name
            _this.UpladFile(fileName);
          } else {
            _this.$message.error("请选择正确的文件类型！");
          }
        } else {
          _this.$message.error("请选择正确的文件！");
        }
      });
    }
  },
  components: {
    head_nav,
    student_nav,
    footer_nav
  }
};
</script>

