export const state = () => ({
    userLogin: null,
    loading: null
})
export const getters = {
    userLogin: state => {
        if (state.userLogin == null) {
            return null
        }else {
            return state.userLogin
        }
    },
    loading: state => {
        return state.loading
    }
}
export const mutations = {
  setLoading(state, newState) {
    state.loading = newState
  },
  setUserLogin(state, newState) {
      state.userLogin = newState
  }
}
export const actions = {
  setLoading({commit, state}, newState) {
    if (state.loading == true) {
      setTimeout(() => {
        commit('setLoading', newState)  
      }, 700);
    }else {
      commit('setLoading', newState)
    }
  },
  setUserLogin({commit, state, dispatch}, newState) {
      dispatch('setLoading', true)
      commit('setUserLogin', newState)
      dispatch('setLoading', false)
  },
}