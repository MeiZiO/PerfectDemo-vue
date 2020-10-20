export default [
  {
    path: '/basicModule/dialog',
    component: () => import('../../page/basicModule/dialog/index.vue'),
    meta: {
      files: ['主体.vue', 'dialogDemo.vue'],
      codes: ['/basicModule/dialog/index.js', '/basicModule/dialog/dialog.js']
    }
  }
]