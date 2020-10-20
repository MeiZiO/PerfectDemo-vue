import content from '../../page/common/content.vue'
import demo from '../../page/common/demo/index.vue'
import methodsArr from '../methods/index.js'
import basicModule from '../basicModule/index.js'

let routerArr = [
  {
    path: '/mei',
    component: content,
    children: [
      ...methodsArr,
      ...basicModule,
      {
        path: 'demo',
        meta: {
          files: ['index.vue', 'test'],
          codes: ['page/demo/index.vue']
        },
        component: demo
      },
      {
        path: 'demo2',
        component: demo
      }
    ]
  },
]

export default routerArr