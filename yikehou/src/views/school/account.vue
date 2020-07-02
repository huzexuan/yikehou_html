
<style>
.account_box{
    width:100%;
    height:766px;
    background: url(./images/account_bg.jpg) no-repeat 100% 100%;
  background-size:100% 100%;
}

</style>
<template>
  <div>
    <el-header>
      <head_nav :navId="1" ></head_nav>
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
          <student_nav :id="1" ></student_nav>
        </el-container>
      </div>
        <div class="account_box">
        <el-container>
            <div class="up_account">
                <el-upload
 
          class="upload-demo"
          ref="upload"
          :action="uploadUrl()"
          :data="uploadData"
          name="excelFile"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          :on-error="uploadFalse"
          :on-success="uploadSuccess"
          :auto-upload="false"
          :before-upload="beforeAvatarUpload">
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">批量导入</el-button>
          <div slot="tip" class="el-upload__tip">只能上传excel文件</div>
          </el-upload>
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

export default {
  data() {
    return {
    };
  },
  methods: {
      uploadUrl: function() {
      return (
        "/fanxing/import/batchInsertShops" +
        "?businessName=" +
        this.businessName +
        "&businessStatus=" +
        this.businessStatus +
        "&businessType=" +
        this.businessType
      );
    },
    uploadSuccess(response, file, fileList) {
      if (response.status) {
        alert("文件导入成功");
      } else {
        alert("文件导入失败");
      }
    },
    uploadFalse(response, file, fileList) {
      alert("文件上传失败！");
    },
    // 上传前对文件的大小的判断
    beforeAvatarUpload(file) {
      const extension = file.name.split(".")[1] === "xls";
      const extension2 = file.name.split(".")[1] === "xlsx";
      const isLt2M = file.size / 1024 / 1024 < 10;
         if (!extension && !extension2 ) {
           alert("上传模板只能是 xls、xlsx、doc、docx 格式!");
          }
          if (!isLt2M) {
           console.log("上传模板大小不能超过 10MB!");
         }
        return extension || extension2 || extension3 || (extension4 && isLt2M);
    },
    submitUpload() {
      if (this.businessType != null) {
        //触发组件的action
        this.$refs.upload.submit();
      }
      if (this.businessType == null) {
        this.businessType = "businessType不能为空";
      }
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      if (file.response.status) {
        alert("此文件导入成功");
      } else {
        alert("此文件导入失败");
      }
    }

  },
  components: {
    head_nav,
    student_nav,
    footer_nav
  }
};
</script>

