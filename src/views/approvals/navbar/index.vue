<template>
  <div class="container">
    <div style="display: flex; align-items: center; margin-right: 20px">
      <span>{{ itemName.name1 }} ：</span>
      <el-input style="width: 206px" v-model="input" placeholder="请输入"></el-input>
    </div>
    <div>
      <span>{{ itemName.name2 }} ：</span>
      <el-select v-model="value" placeholder="请选择">
        <el-option style="width: 206px">
        </el-option>
      </el-select>
      <el-button style="margin-left:20px" class="btn" icon="el-icon-search" v-if="isBtn" type="primary">查询</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },

  created() { },
  props: {
    itemName: {
      type: Object,
      required: true,
    },
    isBtn: {
      type: Boolean,
      required: false,
    }
  },
  methods: {},
  data() {
    return {
      input: '',
      value: ''
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  width: 100%;
  background-color: #fff;
  padding: 15px;
}
</style>
