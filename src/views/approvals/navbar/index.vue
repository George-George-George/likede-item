<template>
  <div class="container">
    <div style="display: flex; align-items: center; margin-right: 20px">
      <span>{{ itemName.name1 }} ：</span
      ><el-input
        style="width: 206px"
        v-model="input"
        placeholder="请输入"
      ></el-input>
    </div>
    <div>
      <span>{{ itemName.name2 }} ：</span>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          style="width: 206px"
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  created() {},
  props: {
    itemName: {
      type: Object,
      required: true,
    },
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  width: 70%;
  background-color: #fff;
  padding: 15px;
}
</style>
