<style lang="less" scoped>
.searchCard{
    margin: 0 0 10px 0;
    padding: 6px;
}
.noInfoText{
    color: #f12947;
    padding: 30px;
    font-size: 20px;
}
.showBugsCard{
    width: 30%;
}
.showBugsTitle{
    font-weight: bold;
    width: 20%;
    color: #525252;
}
.showBugsValue{
    color: #6d6d6d;
}
</style>
<template>
    <div>
        <el-card class="searchCard">
            <el-row>
                <el-col :span="18">
                    <el-input v-model="searchKey" placeholder="请输入想要搜索的内容" @keyup.native="handleSearch" clearable></el-input>
                </el-col>
            </el-row>
        </el-card>
        <div v-if="showBugs.length == 0">
            <div class="noInfoText">暂无相符合的信息</div>
        </div>
        <div v-else>
            <el-card 
                v-for="(item, index) in showBugs"
                :key="index"
                shadow="always" class="showBugsCard">
                <el-collapse>
                    <el-collapse-item :title="item.name">
                        <div v-if="item.detail">
                            <div class="showBugsTitle">现象描述:</div>
                            <div class="showBugsValue">{{item.detail}}</div>
                        </div>
                        <div>
                            <div class="showBugsTitle">导致原因:</div>
                            <div class="showBugsValue">{{item.reason}}</div>
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </el-card>
        </div>
    </div>
</template>

<script>
import bugInfo from './bugInfo.js'
import {deepCopy} from '/src/components/deeoCopy'

export default {
    data () {
        return {
            bugInfo,
            searchKey: '',
            showBugs: []
        }
    },
    methods:{
        handleSearch () {
            let arr = this.bugInfo.filter(item => item.name.includes(this.searchKey))
            this.showBugs = deepCopy(arr)
        }
    },
    mounted() {
        this.showBugs = deepCopy(this.bugInfo)
        this.$store.commit('SET_NAME', '异常汇总')
        this.$store.commit('SET_TYPE', '异常')
        this.$store.commit('SET_MARK', '展示所有开发过程中遇到的异常,异常标题支持模糊搜索')
    },
}
</script>