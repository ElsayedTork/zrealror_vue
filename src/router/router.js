import { createRouter, createWebHistory } from 'vue-router';
import Home from './../pages/home/index.vue';
import Profile from './../pages/profile/index.vue';
import Edit from './../pages/edit/index.vue';
import Properties from './../pages/Properties/index.vue';
import Withlist from './../pages/wishlists/index.vue';
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
  {
    path: '/prop',
    component: Properties,
  },
  {
    path: '/wish',
    component: Withlist,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
