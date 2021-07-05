export const state = () => ({
  appdata: {
    loginTypes: { google: 'google', git: 'github' },
  },
})

export const mutations = {
  SET_APPDATA(s, appdata) {
    s.appdata = appdata
  },
}

export const actions = {
  async nuxtServerInit({ commit, dispatch }) {
    await dispatch('fetchAppdata')
  },
  async fetchAppdata({ commit }) {
    try {
      // const result = await this.$axios('/system/appdata')
      // commit('SET_APPDATA', result.data)
    } catch (err) {}
  },
}

export const getters = {
  getLoginTypes: state => {
    return state.appdata.loginTypes
  },
}
