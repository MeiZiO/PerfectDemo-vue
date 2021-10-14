<template>
    <div>
        <summaryInfo :dataList="infoList" :typeList='typeList' :colSpan='8'></summaryInfo>
    </div>
</template>

<script>
import infoList from './info/index.js'
import typeList from './info/typeList.js'
import summaryInfo from '../functional/summaryInfo/index'

export default {
    data () {
        return {
            typeList,
            infoList
        }
    },
    components:{
      summaryInfo  
    },
    methods:{
    },
    mounted() {
        this.$store.commit('SET_NAME', '问题汇总')
        this.$store.commit('SET_TYPE', '信息汇总')
        this.$store.commit('SET_MARK', '展示开发过程中常见的问题,标题支持模糊搜索')
    },
}
</script>