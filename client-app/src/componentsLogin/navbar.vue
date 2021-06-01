<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
    <div class="container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-arrow-return-left m-3"
        viewBox="0 0 16 16"
        @click="goBack()"
      >
        <path
          fill-rule="evenodd"
          d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
        />
      </svg>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    Home() {
      this.$router.push('/');
    },
    goBack() {
      window.history.back();
    },
  },
};
</script>
<style>
nav {
  text-transform: uppercase;
}
</style>
