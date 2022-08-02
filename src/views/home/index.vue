<template>
  <div>
    <el-container>
      <!-- 头部 -->
      <el-header>
        <navbar></navbar>
      </el-header>
      <el-container>
        <!-- 侧边栏 -->
        <el-aside width="20%">
          <asidebar></asidebar>
        </el-aside>
        <!-- 主要内容区域 -->
        <el-main>
          <mainbar></mainbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import navbar from "./header";
import mainbar from "./main";
import asidebar from "./aside";

export default {
  data() {
    return {};
  },

  created() {},

  methods: {},
  components: {
    navbar,
    mainbar,
    asidebar,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
