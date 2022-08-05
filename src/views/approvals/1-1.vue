<template>
  <div class="dashboard-container">
    <navbar :itemName="itemName" />
    <div class="app-container"></div>
  </div>
</template>

<script>
import navbar from "./navbar";
export default {
  data() {
    return {
      itemName: {
        name1: "工单编号",
        name2: "工单状态",
      },
    };
  },

  created() {},

  methods: {},
  components: {
    navbar,
  },
};
</script>

<style scoped lang="scss">
.dashboard-container {
}
</style>
