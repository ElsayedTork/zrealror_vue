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
      console.log(state.savedSearches);
    },
    deleteSearch(state, index) {
      console.log('index', index);
      state.savedSearches.splice(index, 1);
      console.log(this.state.savedSearches);
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
