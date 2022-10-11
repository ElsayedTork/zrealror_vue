export default {
  namespaced: true,
  state() {
    return {
      propInformations: [
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
          payment: 'paypal',
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
          payment: 'paypal',
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
          payment: 'paypal',
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
          payment: 'paypal',
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
          payment: 'paypal',
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
          payment: 'paypal',
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
          payment: 'paypal',
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
          payment: 'wise',
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
          payment: 'wise',
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
          payment: 'wise',
        },
      ],
    };
  },
  mutations: {
    itemSearch(state, arr) {
      this.state.propInformations = state.propInformations.filter((item) => {
        console.log(arr);
        switch (arr.length) {
          case 5:
            return (
              item[arr[0].key] === arr[0].value &&
              item[arr[1].key] === arr[1].value &&
              item[arr[2].key] === arr[2].value &&
              item[arr[3].key] === arr[3].value &&
              item[arr[4].key] === arr[4].value
            );
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
    filterItems(state, index) {
      let ar = state.propInformations;
      if (index == 1) {
        this.state.propInformations = [ar[0], ar[1], ar[2]];
      } else if (index == 2) {
        this.state.propInformations = [ar[3], ar[4], ar[5]];
      } else if (index == 3) {
        this.state.propInformations = [ar[6], ar[7], ar[8]];
      } else if (index == 4) {
        this.state.propInformations = [ar[9]];
      } else {
        this.state.propInformations = ar;
      }
    },
    priceFilter(state, selectedPrice) {
      state.propInformations = this.state.propInformations.sort((a, b) => {
        if (selectedPrice == 'Lowest Price') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
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
