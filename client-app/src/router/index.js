import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Anmeldeformular from '../views/Anmeldeformular.vue';
import Login from '../views/Login.vue';
import Logout from '../views/Logout.vue';
import Admin from '../views/Admin.vue';
import axios from 'axios';

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
    beforeEnter: async (to, from, next) => {
      if (!isAuthenticated() || (await isAdminAuthenticated()))
        next({ name: 'Login' });
      next();
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/ktadmin',
    name: 'Admin',
    component: Admin,
    beforeEnter: async (to, from, next) => {
      if ((await isAdminAuthenticated()) == false) next({ name: 'Login' });
      next();
    },
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
  },
];

function isAuthenticated() {
  if (Vue.$cookies.get('sid')) return true;
  else return false;
}

async function isAdminAuthenticated() {
  let { data } = await axios({
    url: '/checkadmin',
    method: 'GET',
  });

  if (data.status) {
    return true;
  } else {
    return false;
  }
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
