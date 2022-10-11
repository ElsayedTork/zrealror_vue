export default {
  namespaced: true,
  state() {
    return {
      units: [
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
          unitType: 'adminstrative',
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
          unitType: 'adminstrative',
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
          unitType: 'residential',
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
          unitType: 'residential',
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
          unitType: 'residential',
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
          unitType: 'adminstrative',
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
          unitType: 'commercial',
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
          unitType: 'commercial',
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
          unitType: 'adminstrative',
        },
      ],
    };
  },
  mutations: {
    unitsFilter(state, selectedUnit) {
      state.units = [
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
          unitType: 'adminstrative',
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
          unitType: 'adminstrative',
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
          unitType: 'residential',
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
          unitType: 'residential',
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
          unitType: 'residential',
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
          unitType: 'adminstrative',
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
          unitType: 'commercial',
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
          unitType: 'commercial',
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
          unitType: 'adminstrative',
        },
      ];

      state.units = state.units.filter((item) => {
        if (selectedUnit == 'residential')
          return item.unitType == 'residential';
        else if (selectedUnit == 'commercial')
          return item.unitType == 'commercial';
        else if (selectedUnit == 'adminstrative')
          return item.unitType == 'adminstrative';
      });
     
    },
  },
  actions: {
    unitsFilter({ commit }, selectedUnit) {
      commit('unitsFilter', selectedUnit);
    },
  },
};
