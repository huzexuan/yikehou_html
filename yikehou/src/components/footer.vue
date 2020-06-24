<style >
.footer {
  width: 100%;
  background: #f2f2f2;
  border-top: 5px solid #0168b7;
}
.footer_menu,.footer_menu_us{
    float: left;
    margin-right: 72px;
}
.footer_menu>li{
    display: block;
    font-size: 14px;
    color: #666;
    margin-bottom: 16px;
    cursor: pointer;
    text-align: center;
}
.footer_menu>li:nth-child(1){
    font-size: 16px;
    color: #000;
    margin-bottom: 19px;
    cursor: auto;
}
.footer_menu>li:hover{
    color: #000;
}
.footer_menu_item{
    width: 71px;
    margin: 0 ;
}
.footer_menu_item li{
    font-size: 14px;
    color: #666;
    cursor: pointer;
    margin-bottom: 16px;
}
.footer_menu_item>li:nth-child(2n+1){
    margin-right: 10px;
}
.footer_menu_item li:hover{
    color: #000;
}
.footer_menu_us>li{
    display: block;
    font-size: 14px;
    display: flex;
    align-items: center;
    margin-bottom: 38px;
}
.footer_menu_us>li img{
    margin-right: 20px;
}
.footer_top{
    padding: 36px 0 16px;
}
.footer_code_box,.footer_top{
    display: flex;
    justify-content: space-between;

}
.footer_code img{
    width: 114px;
    height: 114px;
    background: #000;
    margin-bottom: 16px;
}
.footer_code{
    margin-right: 40px;
    text-align: center;
}
.footer_bottom{
    padding: 60px 0 36px;
    color: #666;
    text-align: center;
}
</style>
<template>
  <div class="footer ">
    <el-container >
      <div class="footer_top">
        <div class="footer_menu_box clearfix">
          <ul class="footer_menu">
            <li>关于我们</li>
            <li>公司简介</li>
            <li>合作伙伴</li>
          </ul>
          <ul class="footer_menu">
            <li>课程中心</li>
            <ul class="footer_menu_item">
                <li>语言</li>
                <li>语言</li>
                <li>语言</li>
                <li>语言</li>
                <li>语言</li>
            </ul>
          </ul>
          <ul class="footer_menu">
            <li>关于我们</li>
            <li>公司简介</li>
            <li>合作伙伴</li>
          </ul>
          <ul class="footer_menu">
            <li>关于我们</li>
            <li>公司简介</li>
            <li>合作伙伴</li>
          </ul>
          <ul class="footer_menu_us">
              <li>
                  <img src="./images/phone.png" alt="">15132239975
              </li>
              <li>
                  <img src="./images/mailbox.png" alt="">aaaaaaa@126.com
              </li>
              <li>
                  <img src="./images/address.png" alt="">河北省保定市竞秀区新市场街62号
              </li>
          </ul>
        </div>
        <div class="footer_code_box">
            <div class="footer_code">
                <img src="" alt="">
                手机站
            </div>
            <div class="footer_code">
                <img src="" alt="">
                微信
            </div>
        </div>
      </div>
      <div class="footer_bottom">Copyright (C) 2020  Rights  烁炎文化传播有限公司 版权所有  冀ICP备*******号  技术支持：互动营销</div>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

