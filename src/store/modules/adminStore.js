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
    login(state, access_token) {
      localStorage.setItem('access_token', access_token);
      state.login = true;
    },
    logout(state) {
      localStorage.removeItem('access_token');
      state.login = false;
    }
  },

  actions: {
    login({ commit }, access_token) {
      commit('login', access_token);
    },
    logout({ commit }) {
      commit('logout');
    }
  }
};
