// import { createStore } from 'vuex';
// export default createStore({
//   state() {
//     return {
//       users: [],
//       albums: [],
//       photos: [],
//     };
//   },
//   mutations: {
//     setUsers(state, users) {
//       state.users = users;
//     },
//     setAlbums(state, albums) {
//       state.albums = albums;
//     },
//     setPhotos(state, photos) {
//       state.photos = photos;
//     },
//   },
//   actions: {
//     actionUsers({ commit }) {
//       fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response) => response.json())
//         .then((json) => {
//           commit('setUsers', json);
//         });
//     },
//     actionAlbums({ commit }, id) {
//       fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
//         .then((response) => response.json())
//         .then((json) => {
//           commit('setAlbums', json);
//         });
//     },
//     actionPhotos({ commit }, id) {
//       fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
//         .then((response) => response.json())
//         .then((json) => {
//           commit('setPhotos', json);
//         });
//     },
//   },
// });
