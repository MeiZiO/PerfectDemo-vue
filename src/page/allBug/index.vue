<template>
    <div>
        <summaryInfo :dataList="bugInfo" :typeList='typeList' :colSpan='8'></summaryInfo>
    </div>
</template>

<script>
import bugInfo from './info/index.js'
import typeList from './info/typeList.js'
import summaryInfo from '../functional/summaryInfo/index'

export default {
    data () {
        return {
            typeList,
            bugInfo
        }
    },
    components:{
      summaryInfo  
    },
    methods:{
    },
    mounted() {
        this.$store.commit('SET_NAME', '异常汇总')
        this.$store.commit('SET_TYPE', '信息汇总')
        this.$store.commit('SET_MARK', '展示开发过程中遇到的异常,标题支持模糊搜索')
    },
}
</script>