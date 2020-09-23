export default {
  namespaced: true,
  state: {
    access_token: localStorage.getItem('access_token'),
    login: localStorage.getItem('access_token') ? true : false
  },

  getters: {
    isLogin(state) {
      return state.login;
    }
  },

  mutations: {
    logout(state) {
      localStorage.removeItem('access_token');
      state.login = false;
    }
  },

  actions: {
    logout({ commit }) {
      commit('logout');
    }
  }
};
