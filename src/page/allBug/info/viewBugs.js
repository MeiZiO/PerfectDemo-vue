let data = [
  {
    name: '刷新导致数据异常',
    type: ['视图', 'vuex', 'localstorage'],
    detail: '使用了vuex+localstorage存储全局变量',
    reason: 'Vuex中需要初始化赋值,将localstorage中的值赋值给它'
  }
]
export default data