<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>


export default {
  name: "App"
};
</script>

<style>



* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  font-size: 14px;
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
button:focus,
button:active:focus,
button.active:focus,
button.focus,
button:active.focus,
button.active.focus {
  outline: none;
  box-shadow: none;
}
.el-container {
  width: 1200px;
  margin: auto;
  display: block;
}
.el-header,
.el-main {
  padding: 0;
}
.flex_justify_content {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}

.clearfix:after {
  clear: both;
}
img {
  display: block;
}
.el-header {
  width: 100%;
  height: auto !important;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 111111;
}
.height_div{
  width: 100%;
  height: 132px;
}
.footer_height{
  width: 100%;
  height: 136px;
}

</style>
