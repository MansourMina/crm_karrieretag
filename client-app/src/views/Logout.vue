<template>
  <div class="container-fluid px-3 px-md-5 px-lg-3 px-xl-5 py-5 mx-auto">
    <div class="d-flex flex-column justify-content-center">
      <div class="text-center mt-5">
        <router-link to="/">Home</router-link> |
        <router-link to="/login">Login</router-link>
      </div>
      <div class="mb-5" style="text-align: center">
        <h1 class="mt-5">You are not logged in!</h1>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {};
  },
  async created() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user != null) {
      localStorage.clear();
      this.$router.push('/login');
      await axios.get('/logout');
    }
  },
};
</script>
