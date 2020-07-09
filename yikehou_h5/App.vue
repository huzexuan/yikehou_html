<script>
export default {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
</script>

<style lang="scss">
@import "/static/iconfont.css";
* {
  font-size: 24rpx;
  color: #333;
}
.content {
  width: 680rpx;
  margin: auto;
}
/* 顶部高度 */
.top_height {
  width: 100%;
  height: 87rpx;
}
.ellipse {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ellipse2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
input {
  outline: none;
  border: none;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}
</style>
