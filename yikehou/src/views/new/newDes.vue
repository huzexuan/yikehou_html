
<style>
.newDes h1 {
  text-align: center;
  font-size: 30px;
}
.newDes .des{
  text-align: center;
  font-size: 16px;
  color: #666;
  margin: 38px 0 126px;
}
.newDes .des span:nth-child(1){
    display: inline-block;
    margin-right: 36px;
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
      <el-container class="newDes">
        <h1>{{title}}</h1>
        <p class="des">
          <span v-if="author">文章作者：{{author}}</span>
          <span>发布时间：{{created_at}}</span>
        </p>
        <p v-html="content">{{content}}</p>
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
import axios from "axios";
import ajax from "../../assets/ajax/api";
export default {
  data() {
    return {
      breadlist: [{ title: "首页", path: "Index" }, { title: "新闻动态详情" }],
      title: "",
      author: "",
      created_at: "",
      content: ""
    };
  },
  async created() {
    this.init();
  },
  methods: {
    async init() {
      const { id } = this.$route.params;
      console.log(id);
      let params = new URLSearchParams();
      params.append("id", id);
      let _res = await ajax.indexNew_des(params);
      if (_res.code == 0) {
        this.title = _res.data.title;
        this.author = _res.data.author;
        this.created_at = _res.data.created_at;
        this.content = _res.data.content;
      } else {
      }
    }
  },
  components: {
    head_nav,
    footer_nav,
    crumbs_nav
  }
};
</script>

