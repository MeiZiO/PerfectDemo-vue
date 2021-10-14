import content from '../../common/content.vue'
import demo from '../../common/demo/index.vue'
import methodsArr from '../methods/index.js'
import basicModule from '../basicModule/index.js'
import jsMethods from '../jsMethods/index.js'
import allBug from '../allBug/index.js'
import vueFrame from '../vueFrame/index.js'
import problemAndTips from '../problemAndTips/index.js'
import functional from '../functional/index.js'

let routerArr = [
  {
    path: '/mei',
    component: content,
    children: [
      ...methodsArr,
      ...basicModule,
      ...jsMethods,
      ...allBug,
      ...vueFrame,
      ...problemAndTips,
      ...functional,
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