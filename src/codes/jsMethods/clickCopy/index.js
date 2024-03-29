export let code = 
`
<template>
  <el-card class="centerCard">
    <el-button type="primary" @click="copyValue">点击复制</el-button>
  </el-card>
</template>

<script>
import moment from 'moment'

export default {
  data () {
    return {
        moment
    }
  },
  methods: {
    copyValue () {
        let input = document.createElement("input")
        input.setAttribute("value", '我是被被赋值的内容 赋值时间:' + moment(new Date()).format('yyyy-MM-DD HH:mm:ss'));
        input.style="display: none;"
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        // 如果想使用换行符,则使用textarea,以下需要注意替换
        //let textarea = document.createElement("textarea")
        //textarea.value = value
    },
  }
}
</script>

`
