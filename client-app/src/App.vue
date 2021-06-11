<template>
  <div id="app">
    <router-view />
     <Contact />

  </div>
</template>

<script>
import Contact from '@/components/Contact.vue';
export default {
  components: {
    Contact,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300&display=swap');

body {
  font-family: 'Titillium Web', sans-serif;
}
html {
  scroll-behavior: smooth;
}
</style>
