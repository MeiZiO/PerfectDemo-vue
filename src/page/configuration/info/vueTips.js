let data = [
    {
      name: '返回首页',
      type: ['vueTips'],
      show: true,
      detail: `返回首页代码详解`,
      reason: `
      if(this.$route.path == '/index'){
      <br/>&nbsp;&nbsp;  location.reload()
      <br/> }else{
      <br/>&nbsp;&nbsp;    this.$router.push({path:'/index'})
      <br/>}`
    },
  ]
  export default data