export default {
  namespaced: true,
  state() {
    return {
      savedSearches: [],
    };
  },
  mutations: {
    savedSerch(state, newSavedSerch) {
      state.savedSearches = [...state.savedSearches, newSavedSerch];
    },
    deleteSearch(state, index) {
      state.savedSearches.splice(index, 1);
    },
  },
  actions: {
    savedSerch({ commit }, newSavedSerch) {
      commit('savedSerch', newSavedSerch);
    },
    deleteSearch({ commit }, index) {
      commit('deleteSearch', index);
    },
  },
};
