<template>
  <form>
    <ul class="nav nav" id="pills-tab" role="tablist">
      <li class="nav-item" role="presentation">
        <a
          class="nav-link active buttonnav"
          id="pills-all-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-all"
          type="button"
          role="tab"
          aria-controls="pills-all"
          aria-selected="true"
          @click="setCategory('alle')"
        >
          All
        </a>
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link buttonnav"
          id="pills-Elektronik-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-Elektronik"
          type="button"
          role="tab"
          aria-controls="pills-Elektronik"
          aria-selected="false"
          @click="setCategory('Elektronik-Elektrotechnik')"
        >
          E
        </a>
      </li>
      <li class="nav-item" role="presentation">
        <a
          class="nav-link buttonnav"
          id="pills-Informatik-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-Informatik"
          type="button"
          role="tab"
          aria-controls="pills-Informatik"
          aria-selected="false"
          @click="setCategory('Informatik')"
        >
          IT
        </a>
      </li>

      <li class="nav-item" role="presentation">
        <a
          class="nav-link buttonnav"
          id="pills-maschinenbau-tab"
          data-bs-toggle="pill"
          data-bs-target="#pills-maschinenbau"
          type="button"
          role="tab"
          aria-controls="pills-maschinenbau"
          aria-selected="false"
          @click="setCategory('Maschinenbau')"
        >
          Maschinenbau
        </a>
      </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
      <div
        class="tab-pane fade show active"
        id="pills-all"
        role="tabpanel"
        aria-labelledby="pills-all-tab"
      >
        <Kategorie :anm="cate" />
      </div>
      <div
        class="tab-pane fade "
        id="pills-Elektronik"
        role="tabpanel"
        aria-labelledby="pills-Elektronik-tab"
      >
        <Kategorie :anm="cate" />
      </div>
      <div
        class="tab-pane fade"
        id="pills-Informatik"
        role="tabpanel"
        aria-labelledby="pills-Informatik-tab"
      >
        <Kategorie :anm="cate" />
      </div>
      <div
        class="tab-pane fade"
        id="pills-maschinenbau"
        role="tabpanel"
        aria-labelledby="pills-maschinenbau-tab"
      >
        <Kategorie :anm="cate" />
      </div>
    </div>
  </form>
</template>

<script>
import Kategorie from '@/components/Kategorie.vue';
export default {
  props: {
    cate: {
      type: Array,
    },
  },
  created() {
    this.setCategory('alle');
  },
  components: {
    Kategorie,
  },

  methods: {
    setCategory(category) {
      this.$emit('setCategory', category);
    },
  },
};
</script>

<style>
.nav > li > a:hover {
  color: #ca2626;
}

/*code to change background color*/
.nav > li > a.active,
.nav > li > a:focus {
  color: #ca2626 !important;
}

#pills-tab {
  position: sticky;
  top: 0;
  background-color: none;
}

#pills-tabContent {
  overflow-y: scroll;
  height: auto;
  max-height: 25rem;
}
li {
  display: table-cell;
  position: relative;
}
a {
  color: black;
  text-decoration: none;
  letter-spacing: 0.15em;

  display: inline-block;

  position: relative;
}
li > a:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: '';
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: black;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
a:hover:after {
  width: 100%;
  left: 0;
}
.buttonnav {
  background-color: none;
}
@media screen and (max-height: 300px) {
  ul {
    margin-top: 40px;
  }
}

@media screen and (max-width: 600px) {
  .buttonnav {
    background-color: none;
  }
}
</style>
