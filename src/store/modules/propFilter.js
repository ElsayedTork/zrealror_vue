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
          view: 'pool',
          finishing: 'finishing1',
          payment: 'paypal',
          valueBedrooms: 4,
          valueBathroom: 2,
          valueArea: 200,
          value: 3000,
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
          view: 'pool',
          finishing: 'finishing1',
          payment: 'paypal',
          valueBedrooms: 3,
          valueBathroom: 2,
          valueArea: 300,
          value: 4000,
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
          view: 'pool',
          finishing: 'finishing1',
          payment: 'paypal',
          valueBedrooms: 6,
          valueBathroom: 1,
          valueArea: 300,
          value: 5000,
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
          view: 'pool',
          finishing: 'finishing1',
          payment: 'paypal',
          valueBedrooms: 4,
          valueBathroom: 1,
          valueArea: 400,
          value: 5000,
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
          view: 'pool',
          finishing: 'finishing1',
          payment: 'paypal',
          valueBedrooms: 2,
          valueBathroom: 1,
          valueArea: 400,
          value: 10000,
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
          view: 'pool',
          finishing: 'finishing1',
          payment: 'paypal',
          valueBedrooms: 4,
          valueBathroom: 4,
          valueArea: 300,
          value: 3000,
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
          view: 'garden',
          finishing: 'finishing1',
          payment: 'paypal',
          valueBedrooms: 2,
          valueBathroom: 4,
          valueArea: 400,
          value: 10000,
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
          view: 'pool',
          finishing: 'finishing2',
          payment: 'wise',
          valueBedrooms: 5,
          valueBathroom: 3,
          valueArea: 300,
          value: 10000,
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
          view: 'garden',
          finishing: 'finishing2',
          payment: 'wise',
          valueBedrooms: 3,
          valueBathroom: 3,
          valueArea: 400,
          value: 10000,
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
          view: 'garden',
          finishing: 'finishing2',
          payment: 'wise',
          valueBedrooms: 6,
          valueBathroom: 3,
          valueArea: 300,
          value: 12000,
        },
      ],
    };
  },
  mutations: {
    itemSearch(state, arr) {
      this.state.propInformations = state.propInformations.filter((item) => {
        switch (arr.length) {
          case 11:
            return (
              item.value >= arr[0].value[0] &&
              item.value <= arr[0].value[1] &&
              item.valueArea >= arr[1].value[0] &&
              item.valueArea <= arr[1].value[1] &&
              item.valueBedrooms >= arr[2].value[0] &&
              item.valueBedrooms <= arr[2].value[1] &&
              item.valueBathroom >= arr[3].value[0] &&
              item.valueBathroom <= arr[3].value[1] &&
              item[arr[4].key] === arr[4].value &&
              item[arr[5].key] === arr[5].value &&
              item[arr[6].key] === arr[6].value &&
              item[arr[7].key] === arr[7].value &&
              item[arr[8].key] === arr[8].value &&
              item[arr[9].key] === arr[9].value &&
              item[arr[10].key] === arr[10].value
            );
          case 10:
            return (
              item.value >= arr[0].value[0] &&
              item.value <= arr[0].value[1] &&
              item.valueArea >= arr[1].value[0] &&
              item.valueArea <= arr[1].value[1] &&
              item.valueBedrooms >= arr[2].value[0] &&
              item.valueBedrooms <= arr[2].value[1] &&
              item.valueBathroom >= arr[3].value[0] &&
              item.valueBathroom <= arr[3].value[1] &&
              item[arr[4].key] === arr[4].value &&
              item[arr[5].key] === arr[5].value &&
              item[arr[6].key] === arr[6].value &&
              item[arr[7].key] === arr[7].value &&
              item[arr[8].key] === arr[8].value &&
              item[arr[9].key] === arr[9].value
            );
          case 9:
            return (
              item.value >= arr[0].value[0] &&
              item.value <= arr[0].value[1] &&
              item.valueArea >= arr[1].value[0] &&
              item.valueArea <= arr[1].value[1] &&
              item.valueBedrooms >= arr[2].value[0] &&
              item.valueBedrooms <= arr[2].value[1] &&
              item.valueBathroom >= arr[3].value[0] &&
              item.valueBathroom <= arr[3].value[1] &&
              item[arr[4].key] === arr[4].value &&
              item[arr[5].key] === arr[5].value &&
              item[arr[6].key] === arr[6].value &&
              item[arr[7].key] === arr[7].value &&
              item[arr[8].key] === arr[8].value
            );
          case 8:
            return (
              item.value >= arr[0].value[0] &&
              item.value <= arr[0].value[1] &&
              item.valueArea >= arr[1].value[0] &&
              item.valueArea <= arr[1].value[1] &&
              item.valueBedrooms >= arr[2].value[0] &&
              item.valueBedrooms <= arr[2].value[1] &&
              item.valueBathroom >= arr[3].value[0] &&
              item.valueBathroom <= arr[3].value[1] &&
              item[arr[4].key] === arr[4].value &&
              item[arr[5].key] === arr[5].value &&
              item[arr[6].key] === arr[6].value &&
              item[arr[7].key] === arr[7].value
            );
          case 7:
            return (
              item.value >= arr[0].value[0] &&
              item.value <= arr[0].value[1] &&
              item.valueArea >= arr[1].value[0] &&
              item.valueArea <= arr[1].value[1] &&
              item.valueBedrooms >= arr[2].value[0] &&
              item.valueBedrooms <= arr[2].value[1] &&
              item.valueBathroom >= arr[3].value[0] &&
              item.valueBathroom <= arr[3].value[1] &&
              item[arr[4].key] === arr[4].value &&
              item[arr[5].key] === arr[5].value &&
              item[arr[6].key] === arr[6].value
            );
          case 6:
            return (
              item.value >= arr[0].value[0] &&
              item.value <= arr[0].value[1] &&
              item.valueArea >= arr[1].value[0] &&
              item.valueArea <= arr[1].value[1] &&
              item.valueBedrooms >= arr[2].value[0] &&
              item.valueBedrooms <= arr[2].value[1] &&
              item.valueBathroom >= arr[3].value[0] &&
              item.valueBathroom <= arr[3].value[1] &&
              item[arr[4].key] === arr[4].value &&
              item[arr[5].key] === arr[5].value
            );
          case 5:
            return (
              item.value >= arr[0].value[0] &&
              item.value <= arr[0].value[1] &&
              item.valueArea >= arr[1].value[0] &&
              item.valueArea <= arr[1].value[1] &&
              item.valueBedrooms >= arr[2].value[0] &&
              item.valueBedrooms <= arr[2].value[1] &&
              item.valueBathroom >= arr[3].value[0] &&
              item.valueBathroom <= arr[3].value[1] &&
              item[arr[4].key] === arr[4].value
            );
          case 4:
            return (
              item.value >= arr[0].value[0] &&
              item.value <= arr[0].value[1] &&
              item.valueArea >= arr[1].value[0] &&
              item.valueArea <= arr[1].value[1] &&
              item.valueBedrooms >= arr[2].value[0] &&
              item.valueBedrooms <= arr[2].value[1] &&
              item.valueBathroom >= arr[3].value[0] &&
              item.valueBathroom <= arr[3].value[1]
            );
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
