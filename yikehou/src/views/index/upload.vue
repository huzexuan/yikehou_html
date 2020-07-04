
<style>
#upload {
  width: 100%;
  height: 100vh;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
<template>
  <div id="upload">
    <img class="upload_bg" src="./images/upload_bg.gif" alt="">
  </div>
</template>

<script>
import { WOW } from "wowjs";

export default {
  data() {
    return {
      count: "" //倒计时
    };
  },
  created() {
    console.log('hahahah')
    this.threeGo();
  },

  methods: {
    //3秒后进入跳转页面
    threeGo() {
      const TIME_COUNT = 1;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
            //跳转的页面写在此处
            const user_type = sessionStorage.getItem("bs");
            if (user_type == 2) {
              this.$router.push({ path: "/StudentIndex" });
            } else if (user_type == 1) {
              this.$router.push({ path: "/SchoolIndex" });
            } else {
              this.$router.push({ path: "/Index" });
            }
          }
        }, 1000);
      }
    }
  }
};
</script>

