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
    margin: 0 20px;
    width: 90%;
    height: 100%;
  }
  .drawerContent{
    display: flex;
    height: 100%;
    div:nth-child(1) {
      flex: 3;
    }
    div:nth-child(2) {
      flex: 20
    }
    .fileBtn{
      width: 180px;
      font-size: 14px;
      height: 32px;
      background-color: #1E1E1E !important;
      padding: 2px 2px;
      color: #e0e0e0;
      border-color: #000;
    }
    .fileBtn:hover{
      color: #fff;
      border-color: #fff;
      background-color: #000!important;
    }
    .fileBtnActive{
      color: #fff;
      border-color: #000;
      background-color: #000 !important;
    }
  }
}
</style>
<style lang="scss">
.pageTitle {
 .el-drawer {
    background-color: #1E1E1E!important;
  }
  .el-step__icon{
    background: #1E1E1E!important;
  }
}
</style>
<template>
  <el-card class="pageTitle">
    <el-row>
      <el-col :span="21" class="leftContain">
        <el-row>
          <el-col>
            {{name}} <span>[{{type}}]</span>
          </el-col>
          <el-col>
            {{mark}}
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="3" class="rightContain">
        <el-row><el-button type="success" plain icon="el-icon-arrow-up"></el-button></el-row>
        <el-row><el-button type="success" round @click="showCode">查看源码</el-button></el-row>
        <el-row><el-button type="success" plain icon="el-icon-arrow-down"></el-button></el-row>
      </el-col>
    </el-row>
    <el-drawer
      :visible.sync="drawer"
      direction="btt"
      size="80%">
      <div class="codeContainer">
        <div class="drawerContent">
          <div>
            <p v-for="(item, index) in files" :key="index">
              <el-button icon="el-icon-document" plain :class="['fileBtn', active==index?'fileBtnActive':'']" @click="handleFlie(index)">{{item}}</el-button>
            </p>
          </div>
          <div>
            <monaco :code="code" :options="options" @mounted="onMounted"></monaco>
          </div>
        </div>
      </div>
    </el-drawer>
  </el-card>
</template>

<script>
  export default {
    props: {
      route: {     // 集群数组 数据格式[{集群信息，partitions:[]}]
        type: Object,
        default() {
          return {}
        }
      },
    },
    computed: {
      name () {
        return this.$store.state.pageTitle.name
      },
      type () {
        return this.$store.state.pageTitle.type
      },
      mark () {
        return this.$store.state.pageTitle.mark
      }
    },
    data () {
      return {
        active: 0,
        files: [],
        drawer: false,
        codes: [],
        code: '',
        options: {
          readOnly: true
        },
        editor: null
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
      onMounted(editor) {
        this.editor = editor;
      },
      handleFlie (index) {
        this.active=index
        this.handleCode()
      },
      handleCode () {
        let file = require('../../codes' + this.codes[this.active])
        this.code = file.code
        if (this.editor) {
          this.editor.setValue(this.code)
        }
      },
      showCode () {
        if ( this.route.meta.files &&  this.route.meta.files.length >0) {
          this.files = this.route.meta.files
          this.codes = this.route.meta.codes
          this.active = 0
          this.drawer = true;
          this.handleCode()
        }else{
          this.$message({
            type: 'warning',
            message: '暂无代码信息'
          })
        }
      }
    }
  }
</script>