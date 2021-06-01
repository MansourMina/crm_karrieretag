import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Anmeldeformular from '../views/Anmeldeformular.vue';
import Login from '../views/Login.vue';
import Admin from '../views/Admin.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/formular',
    name: 'Anmeldung',
    component: Anmeldeformular,
    // beforeEnter: (to, from, next) => {
    //   if (!isAuthenticated()) next({ name: 'Login' });
    //   next();
    // },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// function isAuthenticated() {
//   if (Vue.$cookies.get('sid')) return true;
//   else return false;
// }

export default router;
