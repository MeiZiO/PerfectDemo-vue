import content from '@/page/common/content.vue'
import demo from '@/page/common/demo/index.vue'

export default [
  {
    path: '/mei',
    component: content,
    children: [
      {
        path: 'demo',
        component: demo
      },
      {
        path: 'demo2',
        component: demo
      }
    ]
  },
]