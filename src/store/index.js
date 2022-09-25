import { createStore } from 'vuex';
export default createStore({
  state() {
    return {
      searches: ['How To Find', 'How To Search', 'he works well'],
      profileData: {
        fristName: 'Ahmed',
        lastName: 'Mohamed',
        email: 'ahmed@gmail.com',
        password: '3242343',
        mobile: '0122 568 5997',
        language: 'English',
        city: 'cairo',
        gender: 'male',
        dateofBirth: '17/7/1995',
        maritalStatue: 'Married',
        numberofChildern: 5,
      },
      statistics: [
        { id: 0, type: 'Open', srcImg: 'TickSquare.png', num: 80 },
        { id: 1, type: 'Closed', srcImg: 'CloseSquare.png', num: 72 },
      ],
    };
  },
  mutations: {
    deleteSearchMut(state, ele) {
      state.searches = state.searches.filter((item) => item !== ele);
    },
    setProfileData(state, obj) {
      state.profileData = obj;
      console.log(state.profileData);
    },
  },
  actions: {
    deleteSearch({ commit }, ele) {
      commit('deleteSearchMut', ele);
    },
    setProfileDataAction({ commit }, obj) {
      console.log(obj);
      commit('setProfileData', obj);
    },
  },
});
