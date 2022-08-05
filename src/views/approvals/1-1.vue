<template>
  <div class="dashboard-container">
    <navbar :itemName="itemName" :isBtn="true" />
    <div class="app-container">
      <maind></maind>
    </div>
  </div>
</template>

<script>
import maind from './main'
import navbar from "./navbar";
import { getItemList } from '@/api/apprpvals'
export default {
  data() {
    return {
      itemName: {
        name1: "工单编号",
        name2: "工单状态",
      },
    };
  },

  created() {
    this.getItemList()
  },

  methods: {
    async getItemList() {
      const res = await getItemList()
      console.log(res);
    },

  },
  components: {
    navbar,
    maind
  }
}
</script>

<style scoped lang="scss">
.app-container {
  margin-top: 15px;
  width: 100%;
  background-color: #fff;
  padding: 15px;
  height: 673px;
}
</style>
