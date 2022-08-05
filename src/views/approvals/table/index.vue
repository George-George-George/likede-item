<template>
    <div>
        <template>
            <el-table :data="tableData" style="width: 100%">
                <template slot-scope="props">
                    <el-table-column type="expand" v-for="(num, index) in itemName" :key="index" fixed prop="date"
                        :label="num">
                    </el-table-column>
                </template>
            </el-table>
        </template>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    props: {
        itemName: {
            type: Array,
            required: true,
        }
    },
    components: {},

    computed: {},

    methods: {}
}
</script>
<style lang='css' scoped>
</style>