<style >
.footer {
  width: 100%;
  background: #f2f2f2;
  border-top: 5px solid #0168b7;
}
.footer_menu,
.footer_menu_us {
  float: left;
  margin-right: 72px;
}
.footer_menu > li {
  display: block;
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
  cursor: pointer;
  text-align: center;
}
.footer_menu > li:nth-child(1) {
  font-size: 16px;
  color: #000;
  margin-bottom: 19px;
  cursor: auto;
}
.footer_menu > li:hover {
  color: #000;
}
.footer_menu_item {
  width: 71px;
  margin: 0;
}
.footer_menu_item li {
  font-size: 14px;
  color: #666;
  cursor: pointer;
  margin-bottom: 16px;
}
.footer_menu_item > li:nth-child(2n + 1) {
  margin-right: 10px;
}
.footer_menu_item li:hover {
  color: #000;
}
.footer_menu_us > li {
  display: block;
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-bottom: 38px;
}
.footer_menu_us > li img {
  margin-right: 20px;
}
.footer_top {
  padding: 36px 0 16px;
}
.footer_code_box,
.footer_top {
  display: flex;
  justify-content: space-between;
}
.footer_code img {
  width: 114px;
  height: 114px;
  background: #000;
  margin-bottom: 16px;
}
.footer_code {
  margin-right: 40px;
  text-align: center;
}
.footer_bottom {
  padding: 60px 0 36px;
  color: #666;
  text-align: center;
}
</style>
<template>
  <div class="footer">
    <div class="Box_content">
      <div class="footer_top">
        <div class="footer_menu_box clearfix">
          <ul class="footer_menu">
            <li>关于我们</li>
            <li @click="navId == 1 ? '' :_up('Aboutus')">公司简介</li>
            <li @click="navId == 1 ? '' :_up('Aboutus')">合作伙伴</li>
          </ul>
          <ul class="footer_menu">
            <li>课程中心</li>
            <ul class="footer_menu_item">
              <li v-for="(item,index) in courseMenu" :key="index" @click="navId == 2 ? '' :_up('Course',item.id)">{{item.title || ''}}</li>
            </ul>
          </ul>
          <ul class="footer_menu">
            <li>新闻动态</li>
            <li @click="navId == 3 ? '' :_up('New',5)">公司新闻</li>
            <li @click="navId == 3 ? '' :_up('New',4)">最新公告</li>
          </ul>
          <ul class="footer_menu">
            <li>关于我们</li>
            <li @click="navId == 4 ? '' :_up('JoinHands')">联系我们</li>
            <li @click="navId == 4 ? '' :_up('JoinHands')">在线留言</li>
          </ul>
          <ul class="footer_menu_us">
            <li>
              <img src="./images/phone.png" alt />
              {{item.phone || ''}}
            </li>
            <li>
              <img src="./images/mailbox.png" alt />
              {{item.email ||''}}
            </li>
            <li>
              <img src="./images/address.png" alt />
              {{item.address || ''}}
            </li>
          </ul>
        </div>
        <div class="footer_code_box">
          <div class="footer_code">
            <img :src='item.app_qrcode' alt />
            手机站
          </div>
          <div class="footer_code">
            <img :src='item.wx_cord' alt />
            微信
          </div>
        </div>
      </div>
      <div
        class="footer_bottom"
      >{{item.copyright}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.icp}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.support ? '技术支持：'+item.support:''}}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ajax from "../assets/ajax/api";
export default {
  props: {
    navId: {
      type: Number
    },
    user:{
      type:Number
    }
  },
  data() {
    return {
      courseMenu: [],
      item: {}
    };
  },
  created() {
    this.courseClassify();
    this.init();
  },
  methods: {
    // 课程分类
    async courseClassify() {
      let params = new URLSearchParams();
      let _res = await ajax.CateClassify(params);
      if (_res.code == 0) {
        this.courseMenu = _res.data;
      }
    },
    // 信息
    async init() {
      let params = new URLSearchParams();
      let _res = await ajax.setting(params);
      if (_res.code == 0) {
        this.item = _res.data;
      }
    },
    _up(name, up_id) {
      if (up_id) {
        this.$router.push({ name: name, params: { id: up_id } });
      } else {
        this.$router.push({ name: name });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

