
<style>
.banner {
  width: 100%;
  height: 423px;
}
.content_top,
.content_top_l,
.content_top_r {
  display: flex;
  justify-content: space-between;
}
.content_top_l > img {
  width: 45px;
  height: 45px;
  margin-right: 18px;
}
.content_top_l p:nth-child(1) {
  color: #000;
  font-size: 18px;
  font-weight: bold;
  margin: 8px 0 36px;
}
.content_top_l p:nth-child(2) {
  font-size: 24px;
}
.code {
  display: flex;
  align-items: center;
}
.code > div {
  margin-right: 80px;
}
.code_img {
  width: 130px;
  height: 130px;
  background: chocolate;
}
.code p {
  font-size: 14px;
  text-align: center;
  margin-top: 12px;
}
.del > div {
  display: flex;
  align-items: center;
  margin: 0 100px 16px 0;
}
.del > div img {
  margin-right: 20px;
}
.address {
  width: 100%;
  height: 886px;
  padding-top: 240px;
  background: url(./images/join_bg.jpg) no-repeat 100% 100%;
  background-size:100% 100%;
}
.address_box {
  width: 100%;
  height: 642px;
  margin-top: -192px;
  background: olivedrab;
}
.joinHands .form_box {
  width: 100%;
  box-sizing: border-box;
  padding: 48px 160px 20px 20px;
  margin-top: 22px;
  background: #fff;
}
.joinHands .form_box p {
  font-size: 24px;
  color: #000;
  font-weight: bold;
  margin-bottom: 38px;
}
.form_top {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.form_top > div {
  width: 33%;
}
.button {
  text-align: right;
  margin: 40px 0 0 0;
}
textarea {
  height: 94px;
  resize: none !important;
}
.anchorBL {
  display: none;
}
</style>
<template>
  <div>
    <el-header>
      <head_nav :navId="5"></head_nav>
    </el-header>
    <el-main>
      <div class="height_div"></div>
      <!-- banner -->
      <img class="banner" src="./images/banner_join.jpg" alt />
      <!-- 面包屑导航 -->
      <crumbs_nav :breadlist="breadlist"></crumbs_nav>
      <!-- 内容 -->
      <div class="Box_content">
        <div class="content_top">
          <div class="content_top_l wow fadeInLeftBig" >
            <img src="./images/phone.png" alt />
            <div >
              <p>益课后服务热线</p>
              <p>{{item.contact_phone}}</p>
            </div>
          </div>
          <div class="content_top_r wow fadeInUp">
            <div class="del">
              <div>
                <img src="./images/mailbox.png" alt />
                <span>{{item.email}}</span>
              </div>
              <div>
                <img src="./images/Url.png" alt />
                <span>{{item.web_url}}</span>
              </div>
              <div>
                <img src="./images/address.png" alt />
                <span>{{item.address}}</span>
              </div>
            </div>
            <div class="code  wow fadeInRightBig">
              <div>
                <img :src="item.app_qrcode" class="code_img" alt />
                <p>微信</p>
              </div>
              <div>
                <img :src="item.wx_cord" alt class="code_img" />
                <p>微信</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="address">
        <div class="joinHands Box_content">
          <div class="address_box">
            <baidu-map
              class="bmView"
              :scroll-wheel-zoom="true"
              :center="location"
              :zoom="zoom"
              @click="getLocationPoint"
              ak="cIUKusewZaKmqALQv6lKtIcY"
              style="width:1200px; height:642px;"
            >
              <bm-marker
                :position="{lng: location.lng, lat: location.lat}"
              ></bm-marker>
              <bm-view style="width:1200px; height:642px; flex: 1"></bm-view>
              <bm-local-search :auto-viewport="true" style="display: none"></bm-local-search>
            </baidu-map>
          </div>
          <div class="form_box  wow fadeInUp">
            <p>在线留言</p>
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <div class="form_top">
                <el-form-item label="姓名" prop="name">
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="手机号" prop="phone">
                  <el-input v-model.number="ruleForm.phone" :maxlength="11"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="mail">
                  <el-input v-model="ruleForm.mail"></el-input>
                </el-form-item>
              </div>
              <el-form-item label="内容" prop="desc">
                <el-input type="textarea" minlength="6" v-model="ruleForm.desc"></el-input>
              </el-form-item>
              <el-form-item class="button">
                <el-button type="primary" :plain="true" @click="submitForm('ruleForm')">立即创建</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
      <!-- footer -->
      <footer_nav :navId="4"></footer_nav>
    </el-main>
  </div>
</template>

<script>
import head_nav from "../../components/header.vue";
import footer_nav from "../../components/footer.vue";
import crumbs_nav from "../../components/crumbsNav.vue";
import axios from "axios";
import ajax from "../../assets/ajax/api";
import { WOW } from "wowjs";
export default {
  data() {
    var userEmail = (rule, value, callback) => {
      const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
      if (!value) {
        return callback(new Error("邮箱不能为空"));
      }
      setTimeout(() => {
        if (mailReg.test(value)) {
          callback();
        } else {
          callback(new Error("请输入正确的邮箱格式"));
        }
      }, 100);
    };
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
      breadlist: [],
      ruleForm: {
        name: "",
        phone: "",
        mail: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        mail: [{ required: true, validator: userEmail, trigger: "blur" }],
        phone: [{ required: true, validator: checkPhone, trigger: "blur" }],
        desc: [
          { required: true, message: "请填写留言内容", trigger: "blur" },
          { min: 6, message: "留言内容不能小于6个字符", trigger: "blur" }
        ]
      },
      item: {},
      location: {
        lng: "",
        lat: ""
      },
      zoom:15,
      user: sessionStorage.getItem("bs")

    };
  },
  mounted() {
    this.$nextTick(() => {
      let wow = new WOW({
        live: false
      });
      wow.init();
    });
    if (this.user == 2) {
      this.breadlist = [
        { title: "首页", path: "StudentIndex" },
        { title: "新闻动态" }
      ];
    } else if (this.user == 1) {
      this.breadlist = [
        { title: "首页", path: "SchoolIndex" },
        { title: "新闻动态" }
      ];
    } else {
      this.breadlist = [
        { title: "首页", path: "Index" },
        { title: "新闻动态" }
      ];
    }
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      let params = new URLSearchParams();
      let _res = await ajax.setting(params);
      if (_res.code == 0) {
        this.item = _res.data;
        var arr = _res.data.position.split(",");
        this.location.lng = arr[1];
        this.location.lat = arr[0];
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.form();
        } else {
          this.$message.error("留言失败");
          return false;
        }
      });
    },
    async form() {
      let params = new URLSearchParams();
      params.append("name", this.ruleForm.name);
      params.append("phone", this.ruleForm.phone);
      params.append("content", this.ruleForm.desc);
      params.append("email", this.ruleForm.mail);
      let _res = await ajax.addContact(params);
      if (_res.code == 0) {
        this.$message.success("留言成功");
      }
    },
    getLocationPoint(e) {
      this.lng = e.point.lng;
      this.lat = e.point.lat;
      /* 创建地址解析器的实例 */
      let geoCoder = new BMap.Geocoder();
      /* 获取位置对应的坐标 */
      geoCoder.getPoint(this.addressKeyword, point => {
        this.selectedLng = point.lng;
        this.selectedLat = point.lat;
      });
      /* 利用坐标获取地址的详细信息 */
      geocoder.getLocation(e.point, res => {
        console.log(res);
      });
    }
  },
  components: {
    head_nav,
    footer_nav,
    crumbs_nav
  }
};
</script>

