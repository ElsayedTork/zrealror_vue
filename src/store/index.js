import { createStore } from 'vuex';
export default createStore({
  state() {
    return {
      searches: ['How To Find', 'How To Search', 'he works well'],
    };
  },
  mutations: {
    deleteSearchMut(state, ele) {
      state.searches = state.searches.filter((item) => item !== ele);
    },
  },
  actions: {
    deleteSearch({ commit }, ele) {
      commit('deleteSearchMut', ele);
    },
  },
});
