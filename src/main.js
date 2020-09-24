import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import monaco from './components/vue-monaco-editor/src/Monaco.vue'

Vue.component('monaco', monaco)
Vue.use(elementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
