export default [
  {
    path: '/functional/summaryInfo',
    component: () => import('../../page/functional/summaryInfo/show.vue'),
    meta: {
      files: ['展示.vue', '组件summaryInfo.vue', 'info.js'],
      codes: ['/functional/summaryInfo/show.js', '/functional/summaryInfo/index.js', '/functional/summaryInfo/info.js']
    }
  },
]