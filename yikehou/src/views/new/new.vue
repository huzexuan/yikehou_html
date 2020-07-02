
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
  /* margin: 29px 0; */
  padding: 24px 16px 24px 24px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.5s;
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
.newItem_content_text {
  color: #666;
  line-height: 20px;
}
.newItem_btn {
  width: 110px;
  height: 30px;
  border: 1px solid #2b5490;
  color: #2b5490;
  text-align: center;
  line-height: 30px;
  margin-top: 36px;
}
.newItem_tag {
  width: 86px;
  height: 86px;
  background: #f2f2f2;
  text-align: center;
  margin-top: 10px;
}
.newItem_tag p:nth-child(1) {
  font-size: 30px;
  margin: 14px 0;
}
.newItem_tag p:nth-child(2) {
  color: #999;
}
.newItem:hover {
  transform: scale(1.1);
  background: #2b5490;
}
.newItem:hover .newItem_content_text {
  color: #fff;
}
.newItem:hover .title {
  color: #fff;
}
.newItem:hover .newItem_btn {
  border: 1px solid #fff;
  color: #fff;
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
          <li
            v-for="(item,index) in tabList"
            :key="index"
            :class="[tabId == item.id ?'active':'']"
            @click="_tab(item.id)"
          >{{item.title}}</li>
        </ul>
        <div class="newList">
          <div class="newItem" v-for="(item,index) in list" :key="index">
            <div class="newItem_del">
              <img :src="item.img" alt />
              <div class="newItem_content">
                <p class="title ellipse">{{item.title}}</p>
                <p
                  class="newItem_content_text ellipse2"
                  v-html="item.description"
                >{{item.description}}</p>
                <div class="newItem_btn" @click="_newDes(item.id)">点击详情</div>
              </div>
            </div>
            <div class="newItem_tag">
              <p>{{ item.updated_at.substring(8,10) }}</p>
              <p>{{ item.updated_at.substring(0,7) }}</p>
            </div>
          </div>
        </div>
        <div class="footer_height"></div>
      </el-container>
      <!-- footer -->
      <footer_nav :navId='3'></footer_nav>
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
      tabId: 4,
      breadlist: [],
      tabList: [
        {
          id: 4,
          title: "最新公告"
        },
        {
          id: 5,
          title: "公司新闻"
        }
      ],
      list: [],
      user: localStorage.getItem("bs")
    };
  },
  mounted() {
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
      const { id } = this.$route.params;
      if (id) {
        this.tabId = id;
      }
      let params = new URLSearchParams();
      params.append("cate", this.tabId);
      let _res = await ajax.Article(params);
      if (_res.code == 0) {
        this.list = _res.data.data;
      }
    },
    _tab(id) {
      this.tabId = id;
      this.init();
    },
    _newDes(up_id) {
      this.$router.push({ name: "NewDes", params: { id: up_id, type: 1 } });
    }
  },
  components: {
    head_nav,
    footer_nav,
    crumbs_nav
  }
};
</script>

