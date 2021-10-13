let data = [
  {
    name: '[Vue warn]: Failed to mount component: template or render function not defined',
    type: ['vue编译'],
    show: true,
    detail: '编译报错 [Vue warn]: Failed to mount component: template or render function not defined',
    reason: `
        1,引入的路由的vue文件是否使用<template>包裹<br/>
        2,在路由文件引入的时候,保留后缀.vue<br/>
        (不保留.vue的话,可能会将重名的其他后缀文件当做vue文件引入)<br/>
        import Content from "../views/page/common/content.vue '`
  },
  {
    name: `Error: Cannot find module './_arrayMap'`,
    type: ['vue编译'],
    show: true,
    detail: '下载依赖后,运行报错',
    reason: `
        1)下载的依赖存在问题<br/>
        2)切换下载功能 yarn i/npm i<br/>
        3)降级node版本(通常至8)`
  }
]
export default data