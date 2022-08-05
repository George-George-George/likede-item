<template>
    <div>
        <div>
            <el-button class="btn1" type="warning">新建</el-button>
            <el-button class="btn2" type="info">工单配置</el-button>
        </div>
        <tabler :itemName="items"></tabler>
    </div>
</template>

<script>
import tabler from '../table'
export default {
    data() {
        return {
            items: [
                '序号', '工单编号', '设备编号', '工单类型', '工单方式', '工单状态', '运营人员', '创建日期', '操作'
            ]
        };
    },
    props: {

    },
    components: {
        tabler
    },

    computed: {},

    methods: {}
}
</script>
<style lang='scss' scoped>
</style>