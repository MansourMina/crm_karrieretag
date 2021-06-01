<template>
  <section class="m-3 ">
    <div class="container py-4 padding-lg">
      <header class="text-center">
        <h1 class="display-4 py-4 font-weight-bold">Diesjährige Anmeldungen</h1>
      </header>
      <div class="container">
        <div class="card" id="container">
          <div class="card-header" id="header">
            <div>
              <span class=" mx-auto text-center">
                <div>
                  Freie Plätze
                  <span class="badge badge-light bg-dark">{{ anzahl }}</span>
                  <span class="sr-only">unread messages</span>
                </div>
              </span>
            </div>
            <div>
              <button
                class="mx-auto d-block my-3 btn btn-outline-dark "
                @click="getAnmeldung"
              >
                Unternehmen anzeigen
              </button>
            </div>
          </div>
          <div v-if="isActive">
            <Tabs :cate="cat" @setCategory="getCategorie" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Tabs from '@/components/Tabs.vue';
export default {
  data() {
    return {
      isActive: false,
    };
  },

  props: {
    anzahl: {
      type: String,
    },
    cat: {
      type: Array,
    },
  },
  components: {
    Tabs,
  },

  methods: {
    getAnmeldung() {
      this.isActive = !this.isActive;
      this.$emit('getAnmeldung');
    },
    setAnmeldung() {
      this.$emit('getAnmeldung');
    },
    getCategorie(category) {
      this.$emit('getCategorie', category);
    },
  },
};
</script>

<style>
#header {
  background-color: #f1f1f1;
  letter-spacing: 0.15rem;
}
</style>
