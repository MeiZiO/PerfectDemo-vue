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
        input.setAttribute("value", '我是被被赋值的内容 复制时间:' + moment(new Date()).format('yyyy-MM-DD HH:mm:ss'));
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
    },
  }
}
</script>

`
