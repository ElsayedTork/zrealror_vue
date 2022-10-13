import { createStore } from 'vuex';

import propFilter from './modules/propFilter';
import units from './modules/unitType';
export default createStore({
  modules: {
    propFl: propFilter,
    units: units,
  },
  state() {
    return {
      searches: ['How To Find', 'How To Search', 'he works well'],
      savedSearches: [
        { name: 'sss', dataSearch: [1, 2, 's'] },
        { name: 'eee', dataSearch: [1, 2, 's'] },
        { name: 'rrr', dataSearch: [1, 2, 'x'] },
      ],
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
          vModel: 'aaa',
        },
        {
          id: 2,
          title: 'Property Location',
          options: ['Cairo', 'Alex', 'Tanta'],
          vModel: 'bbb',
        },

        {
          id: 3,
          title: 'Floor',
          options: ['Floor 1', 'Floor 2', 'Floor 3'],
          vModel: 'ccc',
        },
        {
          id: 4,
          title: 'Property Location',
          options: ['Cairo', 'Alex', 'Tanta'],
          vModel: 'ddd',
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
          title: 'Renovated Apartment 1',
          location: 'tantaaa',
          bed: 2,
          baths: 1,
          sqft: 2500,
          wifi: false,
          page: 1,
          price: 8700,
        },
        {
          id: 1,
          title: 'Amazing Apartment 2',
          location: 'alexxx',
          bed: 4,
          baths: 2,
          sqft: 2500,
          wifi: true,
          page: 1,
          price: 9000,
        },
        {
          id: 2,
          title: 'Renovated Apartment 3',
          location: 'tantaaa',
          bed: 5,
          baths: 2,
          sqft: 2500,
          wifi: true,
          page: 1,
          price: 1000,
        },
        {
          id: 3,
          title: 'Renovated Apartment 4',
          location: 'tantaaa',
          bed: 2,
          baths: 1,
          sqft: 2500,
          wifi: false,
          page: 2,
          price: 5000,
        },
        {
          id: 4,
          title: 'Amazing Apartment 5',
          location: 'alexxx',
          bed: 4,
          baths: 2,
          sqft: 2500,
          wifi: true,
          page: 2,
          price: 20000,
        },
        {
          id: 5,
          title: 'Renovated Apartment 6',
          location: 'cairoo',
          bed: 5,
          baths: 2,
          sqft: 2500,
          wifi: true,
          page: 2,
          price: 6000,
        },
        {
          id: 6,
          title: 'Renovated Apartment 7',
          location: 'tantaaa',
          bed: 2,
          baths: 1,
          sqft: 2500,
          wifi: false,
          page: 3,
          price: 3300,
        },
        {
          id: 7,
          title: 'Amazing Apartment 8',
          location: 'alexxx',
          bed: 4,
          baths: 2,
          sqft: 2500,
          wifi: true,
          page: 3,
          price: 5500,
        },
        {
          id: 8,
          title: 'Renovated Apartment 9',
          location: 'cairooo',
          bed: 5,
          baths: 2,
          sqft: 2500,
          wifi: true,
          page: 3,
          price: 7200,
        },
        {
          id: 9,
          title: 'Renovated Apartment 10',
          location: 'cairooo',
          bed: 5,
          baths: 2,
          sqft: 2500,
          wifi: true,
          page: 4,
          price: 9800,
        },
      ],
    };
  },
  mutations: {
    deleteSearch(state, index) {
      console.log('index', index);
      state.savedSearches.splice(index, 1);
      console.log(this.state.savedSearches);
    },
    setProfileData(state, obj) {
      state.profileData = obj;
    },
    addSearch(state, saveSearch) {
      state.searches = [...state.searches, saveSearch];
    },
    savedSerch(state, newSavedSerch) {
      state.savedSearches = [...state.savedSearches, newSavedSerch];
      console.log(state.savedSearches);
    },
  },
  actions: {
    deleteSearch({ commit }, index) {
      commit('deleteSearch', index);
    },
    setProfileDataAction({ commit }, obj) {
      commit('setProfileData', obj);
    },
    addSearch({ commit }, saveSearch) {
      commit('addSearch', saveSearch);
    },
    savedSerch({ commit }, newSavedSerch) {
      commit('savedSerch', newSavedSerch);
    },
  },
});
