let data = [
  {
    name: 'echarts假数据渲染异常',
    type: ['视图', 'echarts'],
    show: true,
    detail: `使用假数据data:{  keys:['1','2','3','4'],values: [{data: [10, 20, 30, 40], name:'1'}] }渲染界面时，echarts的显示会出现样式错误（修改css亦无果），在改变浏览器窗口大小的时候，便会出现预期的显示效果。
            <br/>后台返回同样数据形式的时候,不会异常。`,
    reason: `暂无`
  },
  {
    name: 'echarts多个同标签渲染异常',
    type: ['视图', 'echarts'],
    show: true,
    detail: '在一个页面中同时使用多个相同的e-charts标签时,可能会数据渲染出错。',
    reason: `
      为每个echart加上不同的id,若是循环则考虑使用new Date()`
  },
  {
    name: '下拉框选无法选择',
    type: ['视图', 'vue'],
    show: true,
    detail: '下拉框有数据,但是选中无效',
    reason: `
      1、data中将下拉框说渲染的对象声明了两次。<br/>
      2、在请求中为下拉框赋初始值时，需要在data中将这个数值声明为空。<br/>
      3、不使用对象.属性的方法，这不是动态渲染，使用set方法。如this.$set(this.addData.params, 'storeId', '')`
  },
  {
    name: '刷新导致数据异常',
    type: ['视图', 'vuex', 'localstorage'],
    show: true,
    detail: '使用了vuex+localstorage存储全局变量',
    reason: 'Vuex中需要初始化赋值,将localstorage中的值赋值给它'
  },
  {
    name: 'splice操作复杂数组,视图不刷新',
    type: ['视图', '数组'],
    show: true,
    detail: 'splice操作结构嵌套较深的数组时,视图展示异常;操作浅结构数组时,视图正常',
    reason: `添加一个input,通过改变它的值来触发视图刷新<br/>
    < el-input el-input v-model="viewFlush" type="hidden">< /el-input ><br/>
    this.$set(this, 'viewFlush', this.viewFlush+1)`
  },
]
export default data