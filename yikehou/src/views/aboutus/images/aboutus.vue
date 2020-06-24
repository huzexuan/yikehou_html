
<style>

</style>
<template>
  <div>
    <el-header>
      <head_nav></head_nav>
    </el-header>
    <el-main>
      <div class="height_div"></div>
      <!-- footer -->
      <footer_nav></footer_nav>
    </el-main>
  </div>
</template>

<script>
import head_nav from "../../components/header.vue";
import footer_nav from "../../components/footer.vue";
export default {
  data() {
    return {
    }
  },

  components: {
    head_nav,
    footer_nav,
  }
};
</script>

