export default {
  namespaced: true,
  state() {
    return {
      
      propList: [
        {
          listName: 'All Saved',
          listInfo: [
            {
              id: 0,
              title: 'Renovated Apartment 0',
              location: 'cairo',
              bed: 2,
              baths: 1,
              sqft: 2500,
              wifi: false,
              page: 1,
              price: 8700,
              category: '5 star',
              propType: 'appartment',
              floor: 'ground',
              view: 'pool',
              finishing: 'finishing1',
              payment: 'paypal',
              valueBedrooms: 4,
              valueBathroom: 2,
              valueArea: 200,
              value: 3000,
            },
            {
              id: 0,
              title: 'Renovated Apartment 0',
              location: 'cairo',
              bed: 2,
              baths: 1,
              sqft: 2500,
              wifi: false,
              page: 1,
              price: 8700,
              category: '5 star',
              propType: 'appartment',
              floor: 'ground',
              view: 'pool',
              finishing: 'finishing1',
              payment: 'paypal',
              valueBedrooms: 4,
              valueBathroom: 2,
              valueArea: 200,
              value: 3000,
            },
          ],
        },
        {
          listName: 'cairo',
          listInfo: [
            {
              id: 0,
              title: 'Renovated Apartment 0',
              location: 'cairo',
              bed: 2,
              baths: 1,
              sqft: 2500,
              wifi: false,
              page: 1,
              price: 8700,
              category: '5 star',
              propType: 'appartment',
              floor: 'ground',
              view: 'pool',
              finishing: 'finishing1',
              payment: 'paypal',
              valueBedrooms: 4,
              valueBathroom: 2,
              valueArea: 200,
              value: 3000,
            },
            {
              id: 0,
              title: 'Renovated Apartment 0',
              location: 'cairo',
              bed: 2,
              baths: 1,
              sqft: 2500,
              wifi: false,
              page: 1,
              price: 8700,
              category: '5 star',
              propType: 'appartment',
              floor: 'ground',
              view: 'pool',
              finishing: 'finishing1',
              payment: 'paypal',
              valueBedrooms: 4,
              valueBathroom: 2,
              valueArea: 200,
              value: 3000,
            },
          ],
        },
        {
          listName: 'alex',
          listInfo: [
            {
              id: 0,
              title: 'Renovated Apartment 0',
              location: 'cairo',
              bed: 2,
              baths: 1,
              sqft: 2500,
              wifi: false,
              page: 1,
              price: 8700,
              category: '5 star',
              propType: 'appartment',
              floor: 'ground',
              view: 'pool',
              finishing: 'finishing1',
              payment: 'paypal',
              valueBedrooms: 4,
              valueBathroom: 2,
              valueArea: 200,
              value: 3000,
            },
            {
              id: 0,
              title: 'Renovated Apartment 0',
              location: 'cairo',
              bed: 2,
              baths: 1,
              sqft: 2500,
              wifi: false,
              page: 1,
              price: 8700,
              category: '5 star',
              propType: 'appartment',
              floor: 'ground',
              view: 'pool',
              finishing: 'finishing1',
              payment: 'paypal',
              valueBedrooms: 4,
              valueBathroom: 2,
              valueArea: 200,
              value: 3000,
            },
          ],
        },
      ],
    };
  },
  mutations: {
    addNewlist(state, newList) {
      let ar = state.propList;
      state.propList = [...ar, { listName: newList }];
      console.log(state.propList);
    },
  },
  actions: {
    addNewlist({ commit }, newList) {
      commit('addNewlist', newList);
    },
  },
};
