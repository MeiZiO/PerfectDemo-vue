<style lang="less" scoped>
.showTabs{
    text-align: left;
}
</style>

<template>
    <el-tabs v-model="activeName" type="border-card" class="tabClass">
        <el-button type="ghost" @click="importAll()">
                    全量导入
                </el-button>
        <el-tab-pane label="方式A" name="refresh"  class="showTabs">
            <el-table :data="tableData">
                <el-table-column prop="name"></el-table-column>
                <el-table-column prop="value"></el-table-column>
                <el-table-column>
                    <template slot-scope="scope">
                        <tableOPe :params="opeButtons" :data="scope.row" :max-actions="3" :showDivider=true></tableOPe>
                    </template>
                </el-table-column>
            </el-table>
        </el-tab-pane>
        <el-tab-pane label="保留页码,刷新数据" name="NeverRefresh"  class="showTabs">
        </el-tab-pane>
    </el-tabs>
</template>

<script>
import tableOPe from './component/tablePoe'

const tableData = [
    {name: '展示数据001', value: '展示内容001'},
    {name: '展示数据002', value: '展示内容002'}
]
export default {
    data () {
        return {
            activeName: 'refresh',
            tableData,
            opeButtons: [
                {
                    title: '操作001',
                    icon: 'el-icon-warning-outline',
                    disabled: (item) => { // 是否禁用
                        return false
                    },
                    ifShow: (item) => { // 是否展示
                        return true
                    },
                    action: (item) => {
                        this.action1(item);
                    }
                },
            ],
        }
    },
    components: {
        tableOPe
    },
    methods:{
        importAll () {
                this.$message({
                    type: 'success',
                    message: '开始导入,请稍后'
                })
            },
        action1 (row) {
            this.$message({
                type: 'success',
                message: '点击了数据项:' + row.name
            })
        },
    },
    mounted () {
        this.$store.commit('SET_NAME', '列表操作')
        this.$store.commit('SET_TYPE', '列表')
        this.$store.commit('SET_MARK', `
            集成了列表操作列`)
    }
}
</script>