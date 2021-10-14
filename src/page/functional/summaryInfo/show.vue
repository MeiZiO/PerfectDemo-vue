<template>
    <el-card class="showCard">
        <!-- dataList是展示的卡片数组,typeList是筛选类型,colSpan是每一个卡片的宽度取值0-24 -->
        <el-row>
            <el-col :span="3">卡片宽度:</el-col>
            <el-col :span="8">
                <el-slider v-model="colSpan" :max=24 show-input></el-slider>
            </el-col>
        </el-row>
        <summaryInfo :dataList="info" :typeList='typeList' :colSpan='colSpan'></summaryInfo>
    </el-card>
</template>

<script>
import info from './info.js'
import summaryInfo from './index.vue'

export default {
    components: {
        summaryInfo,
    },
    data () {
        return {
            info,
            typeList:['测试类型一', '测试类型二'],
            colSpan: 8,
        }
    },
     mounted() {
        this.$store.commit('SET_NAME', '信息汇总')
        this.$store.commit('SET_TYPE', '功能组件')
        this.$store.commit('SET_MARK', '卡片式展示信息,提供筛选功能')
    },
}
</script>