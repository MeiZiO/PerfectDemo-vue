<style lang="less">
</style>
<style lang="less" scoped>
.ObjectArrUniq {
  .actionArea{
    width: 30%;
    margin: 0 auto;
  }
  .showArea{
    .el-row{
      height: 300px;
    }
    .el-col{
      height: 100%;
      padding: 4px 100px;
    }
  }
  .lines-content monaco-editor-background{
    left: 10px;
  }
}

</style>

<template>
  <div class="ObjectArrUniq">
    <el-card class="centerCard">
      <div class="actionArea">
        <el-row>
          <el-input placeholder="请填写一个对象数组" v-model="str" clearable @blur="getResult"></el-input>
        </el-row>
        <el-row>
          <el-col :span="16">
            <el-input placeholder="去重属性(默认为第一项)" v-model="uniqKey" clearable></el-input>
          </el-col>
          <el-col :span="8">
            <el-button type="primary" @click="getResult">执行去重</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="showArea">
        <el-row>
          <el-col :span="12">
            原对象
            <monaco :code="codeLeft" theme="vs" @mounted="onMounted" language="json"></monaco>
          </el-col>
          <el-col :span="12">
            去重后的对象
            <monaco :code="codeRight" theme="vs" @mounted="onMounted2" language="json"></monaco>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      str: '',
      codeLeft: '',
      codeRight: '',
      uniqKey: null,
      editor: null,
      editor2: null
    }
  },
  methods: {
    onMounted(editor) {
      this.editor = editor;
    },
    onMounted2(editor) {
      this.editor2 = editor;
    },
    getResult () {
      try{
        let data = JSON.parse(this.str)
        let key = Object.keys(data[0])[0]
        if (this.uniqKey) {
          key = this.uniqKey
        }
        let keyArr = []
        let arr = []
        data.forEach(item=>{
          if(!keyArr.includes(item[key])){
            arr.push(item)
            keyArr.push(item[key])
          }
        })
        if ( this.editor && this.editor2) {
          this.$nextTick(() => {
            this.editor.updateOptions({
              readOnly: false
            });
            this.editor2.updateOptions({
              readOnly: false,
            });
            this.editor.setValue(this.str)
            this.editor2.setValue(JSON.stringify(arr))
            this.editor.trigger('','editor.action.format')
            this.editor2.trigger('','editor.action.format')
            this.editor.setValue(this.editor.getValue())
            this.editor2.setValue(this.editor2.getValue())
            this.editor.updateOptions({
              readOnly: true
            });
            this.editor2.updateOptions({
              readOnly: true,
            });
          });
          console.log(this.editor, '-------------this.editor');
        }
      }catch{
        this.$message({
          type: 'warning',
          message: '输入的对象数组数据有误，请重新尝试'
        })
      }
    }
  },
  mounted () {
    this.$store.commit('SET_NAME', '对象数组去重')
    this.$store.commit('SET_TYPE', '对象数组')
    this.$store.commit('SET_MARK', '此样例根据对象数组中对象的某一属性,进行去重操作')
  }
}
</script>



