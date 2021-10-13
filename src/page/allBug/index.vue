<style lang="less" scoped>
.titleClass{
    width: 422px;
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.mianArea{
    width: calc(100vw - 260px);
    height: calc(100vh - 300px);
    overflow-y: scroll;
}
.searchCard{
    margin: 0 0 10px 0;
    padding: 0 6px;
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
    margin-bottom: 20px;
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
        <!-- <el-card class="searchCard"> -->
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
        <!-- </el-card> -->
        <div v-if="showBugs.length == 0">
            <div class="noInfoText">暂无相符合的信息</div>
        </div>
        <div v-else  class="mianArea">
            <el-row :gutter="20" class="showBugsCardParent" type="flex">
               <el-col :span="8"
                    v-for="(item, index) in showBugs"
                    :key="index"
                    shadow="always" class="showBugsCard">
                    <el-card>
                        <el-collapse>
                            <el-collapse-item>
                                <template slot="title">
                                    <span class="titleClass" :title="item.name">{{item.name}}</span>
                                </template>
                                <el-button style="float: right" type="text" icon="el-icon-document-copy" @click="copyValue(item)"></el-button>
                                <div v-if="item.detail">
                                    <div class="showBugsTitle">现象描述:</div>
                                    <div class="showBugsValue" v-html="item.detail"></div>
                                </div>
                                <div>
                                    <div class="showBugsTitle">解决思路:</div>
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
        copyValue (temp) {
            let value = `${temp.name}\r\n\r\n现象描述:${temp.detail.replaceAll('<br/>','\r\n').replaceAll('&nbsp;','')}\r\n\r\n解决思路:${temp.reason.replaceAll('<br/>','').replaceAll('&nbsp;','')}`
            let textarea = document.createElement("textarea")
            // textarea.setAttribute("value", value);
            textarea.value = value
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
        },
        handleSearch () {
            let arr = this.bugInfo.filter(item => item.name.includes(this.searchKey) && (this.searchType?item.type.filter(item => item == this.searchType).length > 0:true))
            this.showBugs = deepCopy(arr)
        }
    },
    mounted() {
        this.showBugs = deepCopy(this.bugInfo)
        this.$store.commit('SET_NAME', '异常汇总')
        this.$store.commit('SET_TYPE', '异常')
        this.$store.commit('SET_MARK', '展示开发过程中遇到的异常,标题支持模糊搜索')
    },
}
</script>