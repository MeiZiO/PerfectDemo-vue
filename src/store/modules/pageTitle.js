const pageTitle = {
  state: {
    name: '',
    type: '',
    mark: ''
  },
  mutations: {
    SET_NAME (state, value) {
      state.name = value
    },
    SET_TYPE (state, value) {
      state.type = value
    },
    SET_MARK (state, value) {
      state.mark = value
    }
  },
  actions: {
    // GeneratePwdRule ({ commit }) {
    //   getConfig({ code: 'PwdStrength' }).then(data => {
    //     if (data.success) {
    //       commit('SETTING_PWD_RULE', data.data === 'simple' ? 'required' : 'required,complexPassword')
    //     }
    //   })
    // }
  }
}
export default pageTitle