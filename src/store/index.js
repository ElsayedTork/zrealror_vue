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
      propSearch: [
        {
          id: 1,
          title: 'Property Category',
          options: ['5 start', '4 start', '3 start'],
        },
        {
          id: 2,
          title: 'Property Location',
          options: ['Cairo', 'Alex', 'Tanta'],
        },

        {
          id: 3,
          title: 'Floor',
          options: ['Floor 1', 'Floor 2', 'Floor 3'],
        },
        {
          id: 3,
          title: 'Property Location',
          options: ['Cairo', 'Alex', 'Tanta'],
        },
      ],
      propData: [
        {
          id: 1,
          title: 'View',
          options: ['Cairo', 'London', 'Paris'],
        },
        {
          id: 2,
          title: 'Finishing',
          options: ['Cairo', 'Alex', 'Tanta'],
        },
        {
          id: 3,
          title: 'Payment Method',
          options: ['payPal', 'Visa', 'Wise'],
        },
      ],
      propInformations: [
        {
          id: 0,
          title: 'Renovated Apartment',
          location: 'Tanat ,Egypt',
          bed: 2,
          baths: 1,
          sqft: 2500,
          wifi: false,
        },
        {
          id: 1,
          title: 'Amazing Apartment',
          location: 'Alex,Egypt',
          bed: 4,
          baths: 2,
          sqft: 2500,
          wifi: true,
        },
        {
          id: 2,
          title: 'Renovated Apartment',
          location: 'october, Egypt',
          bed: 5,
          baths: 2,
          sqft: 2500,
          wifi: true,
        },
      ],
    };
  },
  mutations: {
    deleteSearchMut(state, ele) {
      state.searches = state.searches.filter((item) => item !== ele);
    },
    setProfileData(state, obj) {
      state.profileData = obj;
    },
  },
  actions: {
    deleteSearch({ commit }, ele) {
      commit('deleteSearchMut', ele);
    },
    setProfileDataAction({ commit }, obj) {
      commit('setProfileData', obj);
    },
  },
});
