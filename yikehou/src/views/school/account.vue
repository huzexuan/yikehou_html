
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
.account_box .image-uploader {
  width: 382px;
  height: 92px;
}
.account_btnbox .el-upload-dragger {
  width: 382px;
  height: 92px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.account_btnbox p {
  margin-right: 12px;
}
.account_btnbox:last-child {
  background: #fff;
  color: #2e3693;
  margin-left: 100px;
}
.account_del {
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
      <bannerdel :id="1" :navid='2'></bannerdel>
      <div class="account_box">
        <el-container>
          <div class="up_account">
            <div class="account_btnbox" @click="up_one">
              <p>单个增加学生信息</p>
              <img src="./images/account_btn1.png" />
            </div>
            <div class="account_btnbox">
              <el-upload
                class="image-uploader"
                :multiple="false"
                :auto-upload="true"
                list-type="xlsx"
                :show-file-list="true"
                :before-upload="beforeUpload"
                :drag="true"
                action
                :limit="1"
                :on-exceed="handleExceed"
                :http-request="uploadFile"
              >
                <p>批量导入学生信息</p>
                <img src="./images/account_btn2.png" />
              </el-upload>
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
import bannerdel from "../../components/herder_bannerdel.vue";
import $ from "jquery";
import axios from "axios";
import ajax from "../../assets/ajax/api";
export default {
  data() {
    return {};
  },
  methods: {
    beforeUpload(file) {
      let hz = file.name.split(".")[1];
      if (hz != "xlsx" && hz != "xls") {
        this.$message.error("请选择正确的文件类型！");
      }
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，请删除后继续上传`);
    },
    // 上传文件
    async uploadFile(item) {
      let fileObj = item.file;
      const form = new FormData();
      form.append("excel", fileObj);
      form.append("token", sessionStorage.getItem("token"));
      let _res = await ajax.uploadExcel(form);
      if (_res.code == 0) {
        let params = new URLSearchParams();
        params.append("name", _res.data.newname);
        params.append("token", sessionStorage.getItem("token"));
        let _res2 = await ajax.daoruChcek(params);
        if (_res2.code == 0) {
          let params2 = new URLSearchParams();
          params2.append("name", _res2.data.file_name);
          params2.append("check", _res2.data.check);
          params2.append("token", sessionStorage.getItem("token"));
          let _res3 = await ajax.daoru(params);
          if (_res3.code == 0) {
            this.$message.success("上传成功");
          } else {
            this.$message.error("上传失败");
          }
        } else {
          this.$message.warning("当前文件不符合要求，请仔细查阅");
        }
      }
    },
    up_one() {
      this.$router.push({ name: "Increase" });
    },
  },
  components: {
    head_nav,
    bannerdel,
    footer_nav
  }
};
</script>

