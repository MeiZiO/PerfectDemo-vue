import Vue from 'vue'
import Vuex from 'vuex'
import pageTitle from './modules/pageTitle'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    pageTitle
  }
})
export default store