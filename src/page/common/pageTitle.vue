<style lang="scss" scoped>
.pageTitle {
  margin: 4px;
  height: 100%;
  text-align: left;
  
  .leftContain {
    .el-col:nth-child(1) {
      font-size: 18px;
      padding-bottom: 10px;
      color: #EE5361;
      font-weight: bold;

      span {
        color: #FFCE55;
        font-weight: normal;
      }
    }
    .el-col:nth-child(2) {
      font-size: 14px;
    }
  }
  .rightContain {
    .el-button {
      text-align: center;
      width: 107%;
      height: 36px;
      line-height: 0px;
    }
    .el-row {
      height: 40px;
    }
  }
  .codeContainer {
    margin: 0 auto;
    width: 90%;
    height: 100%;
  }
}
</style>
<style lang="scss">
.pageTitle {
 .el-drawer {
    background-color: #1E1E1E!important;
  }
}
</style>
<template>
  <el-card class="pageTitle">
    <el-row>
      <el-col :span="21" class="leftContain">
        <el-row>
          <el-col>
            我是标题 <span>[所属类型]</span>
          </el-col>
           <el-col>
            我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="3" class="rightContain">
        <el-row><el-button type="primary" plain icon="el-icon-arrow-up"></el-button></el-row>
        <el-row><el-button type="primary" round @click="showCode">查看源码</el-button></el-row>
        <el-row><el-button type="primary" plain icon="el-icon-arrow-down"></el-button></el-row>
      </el-col>
    </el-row>
    <el-drawer
      :visible.sync="drawer"
      direction="btt"
      size="80%">
      <div class="codeContainer">
        <monaco :code="code"></monaco>
      </div>
    </el-drawer>
  </el-card>
</template>

<script>
  export default {
    data () {
      return {
        drawer: false,
        code: `2020年9月16日 星期三
一、今日工作：
中航信
1, 优化上下线按钮权限控制逻辑(100%)
2,填充上下线编辑功能内容(70%)
3,参与会议 了解服务发布部分的新需求(100%)
4,调研 服务发布部分新需求的实现方案(100%)

城商行
1,调整 镜像下载时的提示方式(100%)

二、明日工作
中航信开发

三、遇到问题和需提供帮助
无2020年9月16日 星期三
一、今日工作：
中航信
1, 优化上下线按钮权限控制逻辑(100%)
2,填充上下线编辑功能内容(70%)
3,参与会议 了解服务发布部分的新需求(100%)
4,调研 服务发布部分新需求的实现方案(100%)

城商行
1,调整 镜像下载时的提示方式(100%)

二、明日工作
中航信开发

三、遇到问题和需提供帮助
无2020年9月16日 星期三
一、今日工作：
中航信
1, 优化上下线按钮权限控制逻辑(100%)
2,填充上下线编辑功能内容(70%)
3,参与会议 了解服务发布部分的新需求(100%)
4,调研 服务发布部分新需求的实现方案(100%)

城商行
1,调整 镜像下载时的提示方式(100%)

二、明日工作
中航信开发

三、遇到问题和需提供帮助
无2020年9月16日 星期三
一、今日工作：
中航信
1, 优化上下线按钮权限控制逻辑(100%)
2,填充上下线编辑功能内容(70%)
3,参与会议 了解服务发布部分的新需求(100%)
4,调研 服务发布部分新需求的实现方案(100%)

城商行
1,调整 镜像下载时的提示方式(100%)

二、明日工作
中航信开发

三、遇到问题和需提供帮助
无`
      }
    },
    watch: {
      '$route': {
        handler: function(val, oldVal){
          console.log(val);
        },
        // 深度观察监听
        deep: true
      }
    },
    methods:{
      showCode () {
        this.drawer = true;
      }
    }
  }
</script>