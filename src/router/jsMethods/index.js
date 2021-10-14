export default [
  {
    path: '/jsMethods/clickCopy',
    component: () => import('../../page/jsMethods/clickCopy/index.vue'),
    meta: {
      files: ['主体.vue'],
      codes: ['/jsMethods/clickCopy/index.js']
    }
  },
  {
    path: '/jsMethods/redirect',
    component: () => import('../../page/jsMethods/redirect/index.vue'),
    meta: {
      files: ['主体.vue'],
      codes: ['/jsMethods/redirect/index.js']
    }
  }
]