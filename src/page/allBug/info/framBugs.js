let data = [
  {
    name: 'Navigating to current location (XXX) is not allowed',
    type: ['vue'],
    detail: '在vue cli3的项目中,接连两次访问了同一个路由地址(业务场景，切换用户,从后台重新获取菜单,再次重定向到导航界面，强制reload)',
    reason: `
    （在路由入口文件中使用以下代码）<br/>
    // 解决两次访问相同路由地址报错<br/>
    const originalPush = VueRouter.prototype.push<br/>
    VueRouter.prototype.push = function push(location) {<br/>
    &nbsp;&nbsp;&nbsp; return originalPush.call(this, location).catch(err => err)<br/>
    }<br/>`
  },
]
export default data