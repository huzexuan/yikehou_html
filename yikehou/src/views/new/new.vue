
<style>
.banner {
  width: 100%;
  height: 423px;
}
.newTab {
  text-align: center;
  margin-bottom: 25px;
}
.newTab li {
  margin: 0 47px;
  font-size: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid #fff;
  cursor: pointer;
}
.newTab li.active {
  color: #0168b7;
  border-bottom: 2px solid #0168b7;
}
.newItem {
  width: 100%;
  box-sizing: border-box;
  margin: 29px 0;
  padding: 0 16px 0 24px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
.newItem_del {
  display: flex;
  align-items: center;
}
.newItem_del img {
  width: 274px;
  height: 175px;
}
.newItem_content {
  margin-left: 29px;
  width: 674px;
}
.title {
  width: 100%;
  font-size: 18px;
  margin-bottom: 36px;
}
.newItem_content_text{
  color: #666;
  line-height: 20px;
}
.newItem_btn{
  width: 110px;
  height: 30px;
  border: 1px solid #2b5490;
  color: #2b5490;
  text-align: center;
  line-height: 30px;
  margin-top:36px;
}
.newItem_tag{
  width: 86px;
  height: 86px;
  background: #f2f2f2;
  text-align: center;
  margin-top: 10px;
}
.newItem_tag p:nth-child(1){
  font-size: 30px;
  margin: 14px 0;
}
.newItem_tag p:nth-child(2){
  color: #999;
}
</style>
<template>
  <div>
    <el-header>
      <head_nav :navId="4"></head_nav>
    </el-header>
    <el-main>
      <div class="height_div"></div>
      <!-- banner -->
      <img class="banner" src="./images/banner.jpg" alt />
      <!-- 面包屑导航 -->
      <crumbs_nav :breadlist="breadlist"></crumbs_nav>
      <!-- 内容 -->
      <el-container>
        <ul class="newTab">
          <li class="active">最新公告</li>
          <li>公司新闻</li>
        </ul>
        <div class="newList">
          <div class="newItem">
            <div class="newItem_del">
              <img src="./images/newItem.jpg" alt />
              <div class="newItem_content">
                <p
                  class="title ellipse"
                >烁炎文化传播有限公司是一家专注于招生领域的教育服务平台烁炎文化传播有限公司是一家专注于招生领域的教育服务平台烁炎文化传播有限公司是一家专注于招生领域的教育服务平台</p>
                <p class="newItem_content_text ellipse2">为教育培训机构搭建自媒体招生平台，提供一体化学校互联网招生解决方案，设计系列特色招生服务课程，构建立体多渠道招生路径。为教育培训机构搭建自媒体招生平台，提供一体化学校互联网招生解决方案，设计系列特色招生服务课程，构建立体多渠道招生路径。z 公司定位为招生专家，以“教育为人民”为理念，用科技和经验驱动教育进步</p>
                <div class="newItem_btn">点击详情</div>
              </div>
            </div>
            <div class="newItem_tag">
              <p>02</p>
              <p>2020-06</p>
            </div>
          </div> 
        </div>
        <div class="footer_height"></div>
      </el-container>
      <!-- footer -->
      <footer_nav></footer_nav>
    </el-main>
  </div>
</template>

<script>
import head_nav from "../../components/header.vue";
import footer_nav from "../../components/footer.vue";
import crumbs_nav from "../../components/crumbsNav.vue";
export default {
  data() {
    return {
      breadlist: [{ title: "首页", path: "Index" }, { title: "新闻动态" }]
    };
  },
  methods: {},
  components: {
    head_nav,
    footer_nav,
    crumbs_nav
  }
};
</script>

