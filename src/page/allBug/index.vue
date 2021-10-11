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
.showBugsCardParent{
    flex-wrap: wrap;
}
.showBugsCard{
    margin-top: 20px;
}
.showBugsTitle{
    font-weight: bold;
    width: 20%;
    color: #525252;
}
.showBugsValue{
    color: #6d6d6d;
    text-align: left;
    padding-left: 50px;
}
</style>
<template>
    <div>
        <el-card class="searchCard">
            <el-row :gutter="10">
                <el-col :span="4">
                    <el-select v-model="searchType" clearable @change="handleSearch" filterable placeholder="可选类别">
                        <el-option 
                            v-for="(item, index) in typeList"
                            :key="index"
                            :value="item"
                            :label="item"
                            >
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="14">
                    <el-input v-model="searchKey" placeholder="请输入想要搜索的内容" @keyup.native="handleSearch" clearable></el-input>
                </el-col>
            </el-row>
        </el-card>
        <div v-if="showBugs.length == 0">
            <div class="noInfoText">暂无相符合的信息</div>
        </div>
        <div v-else>
            <el-row :gutter="20" class="showBugsCardParent" type="flex">
               <el-col :span="8"
                    v-for="(item, index) in showBugs"
                    :key="index"
                    shadow="always" class="showBugsCard">
                    <el-card>
                        <el-collapse>
                            <el-collapse-item :title="item.name">
                                <div v-if="item.detail">
                                    <div class="showBugsTitle">现象描述:</div>
                                    <div class="showBugsValue" v-html="item.detail"></div>
                                </div>
                                <div>
                                    <div class="showBugsTitle">导致原因:</div>
                                    <div class="showBugsValue" v-html="item.reason"></div>
                                </div>
                            </el-collapse-item>
                        </el-collapse>
                    </el-card>
                </el-col> 
            </el-row>

        </div>
    </div>
</template>

<script>
import bugInfo from './info/index.js'
import typeList from './info/typeList.js'
import {deepCopy} from '/src/components/deeoCopy'

export default {
    data () {
        return {
            typeList,
            bugInfo,
            searchKey: '',
            searchType: '',
            showBugs: []
        }
    },
    methods:{
        handleSearch () {
            console.log('执行筛选')
            let arr = this.bugInfo.filter(item => item.name.includes(this.searchKey) && (this.searchType?item.type.filter(item => item == this.searchType).length > 0:true))
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