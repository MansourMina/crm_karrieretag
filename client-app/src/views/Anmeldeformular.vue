<template>
  <div id="app">
    <div class=" mt-5">
      <navbar id="home" />
      <div class="  mt-5 py-4" id="head">
        <formular id="formular" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import formular from '@/componentsFormular/formular.vue';
import navbar from '@/componentsLogin/navbar.vue';

export default {
  name: 'app',
  data() {
    return {
      user: {
        id: '',
        name: '',
      },
    };
  },

  async created() {
    const { data } = await axios({
      url: '/secretdata',
      method: 'GET',
    });
    this.prime = data;
    let user = JSON.parse(localStorage.getItem('user'));
    this.user.id = user.id;
    this.user.name = user.name;
  },

  components: {
    formular,
    navbar,
  },
};
</script>
<style>
.header {
  padding: 30px;
}

#head {
  margin-top: 5rem !important;
}
</style>
