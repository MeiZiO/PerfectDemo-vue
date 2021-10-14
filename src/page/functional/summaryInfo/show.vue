<template>
    <el-card class="showCard">
        <summaryInfo :dataList="info" :typeList='typeList' :colSpan='8'></summaryInfo>
    </el-card>
</template>

<script>
import info from './info.js'
import summaryInfo from './index.vue'

export default {
    components: {
        summaryInfo
    },
    data () {
        return {
            info,
            typeList:['测试类型一', '测试类型二']
        }
    },
     mounted() {
        this.$store.commit('SET_NAME', '信息汇总')
        this.$store.commit('SET_TYPE', '功能组件')
        this.$store.commit('SET_MARK', '卡片式展示信息,提供筛选功能')
    },
}
</script>