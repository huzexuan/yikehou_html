
<style>
.increase {
  box-sizing: border-box;
  padding-top: 97px;
  background: url(./images/increase_bg.jpg) no-repeat 100% 100%;
}
.account_box .el-form-item__label {
  color: #ffff;
}
.account_box .el-form-item__content {
  width: 256px;
  height: 38px;
}
.account_box .el-input__inner {
  background: none;
  color: #fff;
}
.account_box .el-form-item {
  margin-bottom: 78px;
}
.increaseBox {
  display: flex;
}
.increaseBox .el-radio-group {
  display: flex;
  align-items: center;
  margin-top: 12px;
}
.increaseBox .el-radio__label {
  color: #fff;
}
.increaseBox .el-radio__input.is-checked .el-radio__inner {
  border-color: #2deccf;
  background: #2deccf;
}
.increaseBox .el-radio__input.is-checked + .el-radio__label {
  color: #fff;
}
.increaseBox .el-form-item__label {
  width: 78px !important;
}
.increaseBox .increase_box .el-form-item__content {
  margin-left: 78px !important;
}
.increase_box {
  margin-left: 138px;
}
.increase_box:nth-child(1) {
  margin: 0;
}
.account_box .el-form-item__content {
  margin: 0 !important;
  width: 100%;
  text-align: center;
}
.account_box .el-button {
  width: 300px;
  height: 60px;
  background: #2a82db;
  color: #fff;
  border: 0;
  font-size: 20px;
}
</style>
<template>
  <div>
    <el-header>
      <head_nav :navId="1"></head_nav>
    </el-header>
    <el-main>
      <div class="height_div"></div>
      <bannerdel :id="1"></bannerdel>
      <div class="account_box increase">
        <div class="Box_content">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <div class="increaseBox">
              <div class="increase_box">
                <el-form-item label="姓名" prop="name">
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="年级" prop="nianji">
                  <el-input v-model.number="ruleForm.nianji" :maxlength="11"></el-input>
                </el-form-item>
                <el-form-item label="家长电话" prop="phone">
                  <el-input v-model="ruleForm.phone"></el-input>
                </el-form-item>
                <el-form-item label="身份证号" prop="code">
                  <el-input v-model="ruleForm.code"></el-input>
                </el-form-item>
              </div>
              <div class="increase_box">
                <el-form-item label="性别" prop="sex">
                  <el-radio-group v-model="ruleForm.sex">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="班级" prop="class">
                  <el-input v-model="ruleForm.class" :maxlength="11"></el-input>
                </el-form-item>
                <el-form-item label="家庭住址" prop="address">
                  <el-input v-model="ruleForm.address"></el-input>
                </el-form-item>
                <el-form-item label="初始密码" prop="password">
                  <el-input v-model="ruleForm.password"></el-input>
                </el-form-item>
              </div>
              <div class="increase_box">
                <el-form-item label="年龄" prop="age">
                  <el-input v-model.number="ruleForm.age" :maxlength="11"></el-input>
                </el-form-item>
              </div>
            </div>
            <el-form-item class="button">
              <el-button type="primary" :plain="true" @click="submitForm('ruleForm')">确定增加</el-button>
            </el-form-item>
          </el-form>
        </div>
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
    var checkPhone = (rule, value, callback) => {
      const phoneReg = /^1[3|4|5|7|8][0-9]{9}$/;
      if (!value) {
        return callback(new Error("电话号码不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(+value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (phoneReg.test(value)) {
            callback();
          } else {
            callback(new Error("电话号码格式不正确"));
          }
        }
      }, 100);
    };
    return {
      ruleForm: {
        name: "",
        nianji: "",
        phone: "",
        code: "",
        sex: "",
        class: "",
        address: "",
        password: "000000",
        age: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        nianji: [{ required: true, message: "请输入年级", trigger: "blur" }],
        phone: [{ required: true, validator: checkPhone, trigger: "blur" }],
        code: [
          { required: true, message: "请输入身份证号", trigger: "blur" },
          {
            pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
            message: "你的身份证格式不正确"
          }
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }],
        class: [{ required: true, message: "请输入班级", trigger: "change" }],
        address: [
          { required: true, message: "请输入家庭住址", trigger: "blur" },
          { min: 4, max: 255, message: "长度在4到255个字符", trigger: "blur" }
        ],
        age: [{ required: true, message: "请输入年龄", trigger: "change" }]
      }
    };
  },
  methods: {
    async submitForm(ruleForm) {
      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          this.add();
        } else {
          this.$message.error("请完善信息");
          return false;
        }
      });
    },
    async add() {
      let params = new URLSearchParams();
      params.append("name", "789");
      params.append("nickname", this.ruleForm.name);
      params.append("password", this.ruleForm.password);
      params.append("nianji", this.ruleForm.nianji);
      params.append("class", this.ruleForm.class);
      params.append("sex", this.ruleForm.sex == "男" ? 1 : 2);
      params.append("age", this.ruleForm.age);
      params.append("phone", this.ruleForm.phone);
      params.append("address", this.ruleForm.address);
      params.append("card_number", this.ruleForm.code);
      params.append("token", sessionStorage.getItem("token"));
      let _res = await ajax.addUser(params);
      if (_res.code == 0) {
        this.$message.success("增加成功");
      } else {
        this.$message.error("增加失败");
      }
    }
  },
  components: {
    head_nav,
    bannerdel,
    footer_nav
  }
};
</script>

