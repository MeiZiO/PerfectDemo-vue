<style lang="less" scoped>
.hiddenItem{
    float: right;
    position: relative;
    background-color: #fab6b6;
    color: #fff;
    width: 44px;
    height: 20px;
    border-bottom-left-radius: 27px;
    right: 44px;
}
.hiddenItem:hover{
    background-color: #f56c6c!important;
    box-shadow: 1px 4px 2px #fab6b6;
}
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
.showListCardParent{
    flex-wrap: wrap;
}
.showListCard{
    margin-bottom: 20px;
}
.showListTitle{
    font-weight: bold;
    width: 20%;
    color: #525252;
}
.showListValue{
    color: #6d6d6d;
    text-align: left;
    padding-left: 50px;
}
</style>
<template>
    <div>
        <el-row :gutter="10">
            <el-col :span="2">
                <el-button @click="handleSearch">取消隐藏</el-button>
            </el-col>
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
        <div v-if="showList.length == 0">
            <div class="noInfoText">暂无相符合的信息</div>
        </div>
        <div v-else  class="mianArea">
            <el-row :gutter="20" class="showListCardParent" type="flex">
               <el-col :span="colSpan"
                    v-for="(item, index) in showList"
                    :key="index"
                    shadow="always" class="showListCard">
                    <div class="hiddenItem" type="danger" @click="hidden(item, index)">
                        <i class="el-icon-close"></i>
                    </div>
                    <el-card>
                        <el-collapse>
                            <el-collapse-item>
                                <template slot="title">
                                    <span class="titleClass" :title="item.name">{{item.name}}</span>
                                </template>
                                <el-button style="float: right" type="text" icon="el-icon-document-copy" @click="copyValue(item)"></el-button>
                                <div v-if="item.detail">
                                    <div class="showListTitle">具体描述:</div>
                                    <div class="showListValue" v-html="item.detail"></div>
                                </div>
                                <div>
                                    <div class="showListTitle">解决思路:</div>
                                    <div class="showListValue" v-html="item.reason"></div>
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
import {deepCopy} from '/src/components/deeoCopy'

export default {
    props: ['dataList', 'typeList', 'colSpan'],
    data () {
        return {
            searchKey: '',
            searchType: '',
            showList: []
        }
    },
    methods:{
        hidden (temp, index) {
           temp.show = false
           this.showList = this.showList.filter(item => item.show)
        },
        copyValue (temp) {
            let value = `${temp.name}\r\n\r\n具体描述:${temp.detail.replaceAll('<br/>','\r\n').replaceAll('&nbsp;','')}\r\n\r\n解决思路:${temp.reason.replaceAll('<br/>','').replaceAll('&nbsp;','')}`
            let textarea = document.createElement("textarea")
            // textarea.setAttribute("value", value);
            textarea.value = value
            textarea.style="display: none;"
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
        },
        handleSearch () {
            let arr = this.dataList.filter(item => item.show && item.name.includes(this.searchKey) && (this.searchType?item.type.filter(item => item == this.searchType).length > 0:true))
            this.showList = deepCopy(arr)
        }
    },
    mounted() {
        this.showList = deepCopy(this.dataList)
    },
}
</script>