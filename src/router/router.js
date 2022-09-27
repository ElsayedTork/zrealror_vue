import { createRouter, createWebHistory } from 'vue-router';
import Home from './../pages/home/index.vue';
import Profile from './../pages/profile/index.vue';
import Edit from './../pages/edit/index.vue';

const routes = [
  { path: '/', component: Home },
  {
    path: '/edit',
    component: Edit,
  },
  {
    path: '/profile',
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
