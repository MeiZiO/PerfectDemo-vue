export let code = 
`
<style lang="less" scoped>
.divideClass{
  display: inline-block;
  width: 20px;
}
p{
  font-weight: bold;
  font-size: 12px;
}
</style>

<template>
  <el-card class="centerCard">
    <h1>1. 设置window的location.href属性</h1>
    <span onclick="location='//www.csdn.net'">点击在当前页打开csdn</span>
    <div class="divideClass"></div>
    <span onclick="window.location.href='//www.csdn.net'">点击在当前页打开csdn</span>
    <h1> 调用window的open方法</h1>
    <span onclick="window.open('//www.csdn.net','_self')">点击在当前页打开csdn</span>
    <div class="divideClass"></div>
    <span onclick="window.open('//www.csdn.net','_blank')">点击在新标签页打开csdn</span>
    <h1>二、a标签跳转</h1>
    <!-- target属性默认为_self，此处可省略 -->
    <a href="//www.csdn.net" target="_self">点击在当前页打开csdn</a>
    <div class="divideClass"></div>
    <a href="//www.csdn.net" target="_blank">点击在新标签页打开csdn</a>
    <p>注意:需要在访问地址前加上"//",否则在vue中会是页面内跳转,毫无效果."//"支持http和https</p>
    <p>http及https的解释见https://www.cnblogs.com/wqhwe/p/5407468.html</p>

  </el-card>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
    this.$store.commit('SET_NAME', '页面跳转')
    this.$store.commit('SET_TYPE', 'js')
    this.$store.commit('SET_MARK', '跳转至其他页面')
  }
}
</script>
`
