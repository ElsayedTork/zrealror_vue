import { createRouter, createWebHistory } from 'vue-router';
import Home from './../pages/home/index.vue';
import Profile from './../pages/user/profile/index.vue';
import Edit from './../pages/user/edit/index.vue';

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
    //   path: '/user/:id',
    //   component: Profile,
    //   children: [
    //     { path: '/profile', component: Profile },
    //     { path: '/edit', component: Edit },
    //   ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
