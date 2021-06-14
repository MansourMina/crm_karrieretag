<template>
  <div id="app">
    <div class=" mt-5">
      <Navbar id="home" />
      <div class="  mt-5 py-4" id="head">
        <formular id="formular" />
      </div>
    </div>
  </div>
</template>

<script>
import formular from '@/componentsFormular/formular.vue';
import Navbar from '@/componentsFormular/NavbarFormular.vue';

export default {
  name: 'app',
  components: {
    formular,
    Navbar,
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
