
<style>
.newDes h1 {
  text-align: center;
  font-size: 30px;
}
.newDes .des {
  text-align: center;
  font-size: 16px;
  color: #666;
  margin: 38px 0 126px;
}
.newDes .des span:nth-child(1) {
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
      <div class="newDes Box_content">
        <h1>{{detail.title}}</h1>
        <p class="des">
          <span v-if="detail.author">文章作者：{{detail.author}}</span>
          <span>发布时间：{{detail.updated_at}}</span>
        </p>
        <p v-html="detail.content">{{detail.content}}</p>
        <div class="footer_height"></div>
      </div>
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
      detail: {}
    };
  },
  async created() {
    this.init();
  },
  methods: {
    async init() {
      const { id, type } = this.$route.params;
      if (type == 1) {
        this.breadlist = [
          {
            title: "首页",
            path: "Index"
          },
          {
            title: "新闻动态",
            path: "New"
          },
          { title: "新闻动态详情" }
        ];
      }
      let params = new URLSearchParams();
      params.append("id", id);
      let _res = await ajax.ArticleDetail(params);
      if (_res.code == 0) {
        this.detail = _res.data;
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

