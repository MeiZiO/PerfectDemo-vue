export let code = 
`
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
    }
}
</script>
`