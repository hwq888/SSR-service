export const state = () => {
  return {
    user: ''
  }
}

export const mutations = {
  SET_USER (state, user) {
    state.user = user
  }
}

export const getters = {
  isAuthenticated (state) {
    return !!state.user
  },
  loggedUser (state) {
    return state.user
  }
}
