// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    isAuthenticated: false,
    user: null,
  },
  mutations: {
    setAuthentication(state, status) {
      state.isAuthenticated = status;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    login({ commit }, credentials) {
      const Username = 'user';
      const Password = 'password';

      if (
        credentials.username === Username &&
        credentials.password === Password
      ) {
        commit('setAuthentication', true);
        commit('setUser', { username: credentials.username });
      } else {
        alert('Invalid username or password');
      }
    },
    logout({ commit }) {
      commit('setAuthentication', false);
      commit('setUser', null);
    },
  },
});
