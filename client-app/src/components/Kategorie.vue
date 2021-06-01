<template>
  <div class="card-body" id="cards">
    <blockquote v-for="a of anm" :key="a.firmen_id" class="blockquote mb-0">
      <p>
        {{ a.firmen_name }}
      </p>
      <footer class="blockquote-footer">
        {{ a.fachrichtung }}
      </footer>
    </blockquote>
  </div>
</template>

<script>
export default {
  props: {
    anm: {
      type: Array,
    },
  },
};
</script>
