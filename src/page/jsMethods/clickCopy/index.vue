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
  },
  mounted () {
    this.$store.commit('SET_NAME', '点击复制')
    this.$store.commit('SET_TYPE', 'js')
    this.$store.commit('SET_MARK', '点击即可复制')
  }
}
</script>
