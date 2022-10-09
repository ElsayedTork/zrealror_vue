export default {
  namespaced: true,
  state() {
    return {
      propInformations: [
        {
          id: 0,
          title: 'Renovated Apartment 0',
          location: 'tanta',
          bed: 2,
          baths: 1,
          sqft: 2500,
          wifi: false,
          page: 1,
          price: 8700,
          category: '5 star',
          propType: 'appartment',
          floor: 'ground',
        },
        {
          id: 1,
          title: 'Amazing Apartment 1',
          location: 'alex',
          bed: 4,
          baths: 2,
          sqft: 2500,
          wifi: true,
          page: 1,
          price: 9000,
          category: '5 star',
          propType: 'appartment',
          floor: 'ground',
        },
        {
          id: 2,
          title: 'Renovated Apartment 2',
          location: 'tanta',
          bed: 5,
          baths: 2,
          sqft: 2500,
          wifi: true,
          page: 1,
          price: 1000,
          category: '3 star',
          propType: 'appartment',
          floor: 'ground',
        },
        {
          id: 3,
          title: 'Renovated Apartment 3',
          location: 'tanta',
          bed: 2,
          baths: 1,
          sqft: 2500,
          wifi: false,
          page: 2,
          price: 5000,
          category: '4 star',
          propType: 'villa',
          floor: 'upper',
        },
        {
          id: 4,
          title: 'Amazing Apartment 4',
          location: 'alex',
          bed: 4,
          baths: 2,
          sqft: 2500,
          wifi: true,
          page: 2,
          price: 20000,
          category: '5 star',
          propType: 'room',
          floor: 'upper',
        },
        {
          id: 5,
          title: 'Renovated Apartment 5',
          location: 'cairo',
          bed: 5,
          baths: 2,
          sqft: 2500,
          wifi: true,
          page: 2,
          price: 6000,
          category: '4 star',
          propType: 'villa',
          floor: 'frist',
        },
        {
          id: 6,
          title: 'Renovated Apartment 6',
          location: 'tanta',
          bed: 2,
          baths: 1,
          sqft: 2500,
          wifi: false,
          page: 3,
          price: 3300,
          category: '3 star',
          propType: 'villa',
          floor: 'frist',
        },
        {
          id: 7,
          title: 'Amazing Apartment 7',
          location: 'alex',
          bed: 4,
          baths: 2,
          sqft: 2500,
          wifi: true,
          page: 3,
          price: 5500,
          category: '4 star',
          propType: 'room',
          floor: 'second',
        },
        {
          id: 8,
          title: 'Renovated Apartment 8',
          location: 'cairo',
          bed: 5,
          baths: 2,
          sqft: 2500,
          wifi: true,
          page: 3,
          price: 7200,
          category: '5 star',
          propType: 'room',
          floor: 'second',
        },
        {
          id: 9,
          title: 'Renovated Apartment 9',
          location: 'cairo',
          bed: 5,
          baths: 2,
          sqft: 2500,
          wifi: true,
          page: 4,
          price: 9800,
          category: '5 star',
          propType: 'room',
          floor: 'frist',
        },
      ],
    };
  },
  mutations: {
    itemSearch(state, arr) {
      //  let propArr = ['item.category', 'location', 'propType', 'floor'];
      console.log(arr, 'Mutation');
      this.state.propInformations = state.propInformations.filter((item) => {
        switch (arr.length) {
          case 4:
            return (
              item[arr[0].key] === arr[0].value &&
              item[arr[1].key] === arr[1].value &&
              item[arr[2].key] === arr[2].value &&
              item[arr[3].key] === arr[3].value
            );
          case 3:
            return (
              item[arr[0].key] === arr[0].value &&
              item[arr[1].key] === arr[1].value &&
              item[arr[2].key] === arr[2].value
            );
          case 2:
            return (
              item[arr[0].key] === arr[0].value &&
              item[arr[1].key] === arr[1].value
            );
          case 1:
            return item[arr[0].key] === arr[0].value;
        }
      });
    },
    // categorySearch(state, category) {
    //   console.log(category);
    //   this.state.propInformations = state.propInformations.filter((item) => {
    //     return item.category === category;
    //   });
    // },
    // typeSearch(state, type) {
    //   console.log(type);
    //   this.state.propInformations = state.propInformations.filter((item) => {
    //     return item.propType === type;
    //   });
    // },
    filterItems(state, index) {
      state.propInformations = [
        {
          id: 0,
          title: 'Renovated Apartment 1',
          location: 'Tanat ,Egypt',
          bed: 2,
          baths: 1,
          sqft: 2500,
          wifi: false,
          page: 1,
        },
        {
          id: 1,
          title: 'Amazing Apartment 2',
          location: 'Alex,Egypt',
          bed: 4,
          baths: 2,
          sqft: 2500,
          wifi: true,
          page: 1,
        },
        {
          id: 2,
          title: 'Renovated Apartment 3',
          location: 'october, Egypt',
          bed: 5,
          baths: 2,
          sqft: 2500,
          wifi: true,
          page: 1,
        },
        {
          id: 3,
          title: 'Renovated Apartment 4',
          location: 'Tanat ,Egypt',
          bed: 2,
          baths: 1,
          sqft: 2500,
          wifi: false,
          page: 2,
        },
        {
          id: 4,
          title: 'Amazing Apartment 5',
          location: 'Alex,Egypt',
          bed: 4,
          baths: 2,
          sqft: 2500,
          wifi: true,
          page: 2,
        },
        {
          id: 5,
          title: 'Renovated Apartment 6',
          location: 'october, Egypt',
          bed: 5,
          baths: 2,
          sqft: 2500,
          wifi: true,
          page: 2,
        },
        {
          id: 6,
          title: 'Renovated Apartment 7',
          location: 'Tanat ,Egypt',
          bed: 2,
          baths: 1,
          sqft: 2500,
          wifi: false,
          page: 3,
        },
        {
          id: 7,
          title: 'Amazing Apartment 8',
          location: 'Alex,Egypt',
          bed: 4,
          baths: 2,
          sqft: 2500,
          wifi: true,
          page: 3,
        },
        {
          id: 8,
          title: 'Renovated Apartment 9',
          location: 'october, Egypt',
          bed: 5,
          baths: 2,
          sqft: 2500,
          wifi: true,
          page: 3,
        },
        {
          id: 9,
          title: 'Renovated Apartment 10',
          location: 'october, Egypt',
          bed: 5,
          baths: 2,
          sqft: 2500,
          wifi: true,
          page: 4,
        },
      ];
      this.state.propInformations = state.propInformations.filter(
        (item) => item.page === index
      );
    },
    priceFilter(state, selectedPrice) {
      const byMatss = state.propInformations.sort((a, b) => {
        if (selectedPrice == 'Lowest Price') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
      this.state.propInformations = byMatss;
    },
  },
  actions: {
    itemSearch({ commit }, arr) {
      commit('itemSearch', arr);
    },

    priceFilter({ commit }, selectedPrice) {
      commit('priceFilter', selectedPrice);
    },
    filterItems({ commit }, index) {
      commit('filterItems', index);
    },
  },
};
