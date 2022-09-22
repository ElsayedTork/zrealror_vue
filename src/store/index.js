import { createStore } from 'vuex';
export default createStore({
  state() {
    return {
      searches: ['How To Find', 'How To Search', 'he works well'],
      profileData: {
        email: 'ahmed@gmail.com',
        password: '3242343',
        Mobile: '0122 568 5997',
        Language: 'English',
        city: 'City',
        Gender: 'Gender',
        DateofBirth: '17/7/1995',
        MaritalStatue: 'Married',
        NumberofChildern: 5,
      },
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
