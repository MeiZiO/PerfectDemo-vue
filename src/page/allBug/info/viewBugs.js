let data = [
  {
    name: '刷新导致数据异常',
    type: ['视图', 'vuex', 'localstorage'],
    detail: '使用了vuex+localstorage存储全局变量',
    reason: 'Vuex中需要初始化赋值,将localstorage中的值赋值给它'
  },
  {
    name: 'splice操作复杂数组,视图不刷新',
    type: ['视图', '数组'],
    detail: 'splice操作结构嵌套较深的数组时,视图展示异常;操作浅结构数组时,视图正常',
    reason: `添加一个input,通过改变它的值来触发视图刷新<br/>
    < el-input el-input v-model="viewFlush" type="hidden">< /el-input ><br/>
    this.$set(this, 'viewFlush', this.viewFlush+1)`
  },
]
export default data