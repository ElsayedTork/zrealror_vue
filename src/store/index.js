import { createStore } from 'vuex';
export default createStore({
  state() {
    return {
      searches: [
        'How To Develope',
        'How To Find',
        'How To Search',
        'he works well',
      ],
    };
  },
  mutations: {
    //     setUsers(state, users) {
    //       state.users = users;
    //     },
  },
  actions: {
    //     actionUsers({ commit }) {
    //       fetch('https://jsonplaceholder.typicode.com/users')
    //         .then((response) => response.json())
    //         .then((json) => {
    //           commit('setUsers', json);
    //         });
  },
});
