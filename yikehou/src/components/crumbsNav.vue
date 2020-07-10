<template>
  <div id="bread">
    <div class="Box_content">
      当前位置：
      <div
        v-for="(item, index) in breadlist"
        :key="index"
        class="bread-curry"
        :class="[index == breadlist.length - 1 ? 'crumbsActive' : '']"
      >
        <span v-if="index > 0">></span>
        <span v-if="item.path" @click="navBtn(item.path)">{{item.title}}</span>
        <span v-else>{{item.title}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    breadlist: {
      type: Array
    },
    title: {
      type: String
    },
    icon: {
      type: String
    },
    path: {
      type: String
    }
  },
  data() {
    return {};
  },
  methods: {
    navBtn(pages) {
      this.$router.push({ name: pages });
    }
  }
};
</script>
<style >
#bread {
  padding: 40px 0;
  color: #666666;
  font-size: 14px;
}
.bread-curry {
  display: inline-block;
  cursor: pointer;
}
.bread-icon {
  width: 21px;
  height: 23px;
  margin-right: 5px;
  vertical-align: middle;
}
.crumbsActive {
  cursor: default;
}
.bread-curry:hover span{
    color: #333;
}
.crumbsActive:hover span{
    color: #666 !important;
}
</style>