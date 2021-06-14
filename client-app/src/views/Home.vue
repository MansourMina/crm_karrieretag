<template>
  <div id="app">
    <div v-if="user.name.length == 0">
      <navbar id="home" />
    </div>
    <div v-if="user.name.length != 0 && user.admin">
      <navbarAdmin id="home" />
    </div>
    <div v-if="user.name.length != 0 && !user.admin">
      <navbarafterlogin id="home" />
    </div>
    <div class="py-5" v-if="user.name.length != 0">
      <div class="container d-flex flex-column mt-5 ">
        <h1 class="text-center mt-3">Willkommen {{ user.name }}</h1>

        <div class="d-flex flex-column justify-content-center">
          <h5 class="text-center mb-1">You are logged in!</h5>
          <router-link to="/formular" class="text-center" v-if="!user.admin"
            ><a class=""><u>FORMULAR</u></a></router-link
          >
        </div>
      </div>
    </div>
    <Intro />

    <div id="informationen">
      <Information :images="images" />
    </div>

    <div v-if="user.name.length != 0">
      <hr />
    </div>

    <div v-else id="anfrage">
      <formular @onSubmit="addInteressent" :alleanm="alleanmeldungen" />
    </div>

    <div id="anmeldungen">
      <Anmeldungen
        @getCategorie="getCategorieOfAnmeldung"
        :anzahl="anzahl"
        :cat="category"
        :anm="anmeldungen"
      />
    </div>

    <div id="map">
      <WhereToFind />
    </div>
  </div>
</template>

<script>
import formular from '@/components/formular.vue';
import Information from '@/components/Information.vue';
import Intro from '@/components/Intro.vue';
import Anmeldungen from '@/components/Anmeldungen.vue';
import navbar from '@/components/navbar.vue';
import navbarafterlogin from '@/components/navbarAfterLogin.vue';
import navbarAdmin from '@/componentsLogin/NavbarLoginAdmin.vue';
import WhereToFind from '@/components/WhereToFind.vue';

import axios from 'axios';

export default {
  name: 'app',
  data() {
    return {
      anmeldungen: [],
      anzahl: '0',
      category: [],
      images: [],
      alleanmeldungen: [],
      user: {
        id: '',
        name: '',
        admin: null,
      },
    };
  },

  components: {
    formular,
    navbar,
    Information,
    Intro,
    Anmeldungen,
    WhereToFind,
    navbarafterlogin,
    navbarAdmin,
  },
  created() {
    this.getAnzahlFreiPlätze();
    this.getImages();
    this.getAllAnmeldungen();
    let user = JSON.parse(localStorage.getItem('user'));
    if (user != null) {
      this.user.id = user.id;
      this.user.name = user.name;
      this.user.admin = user.admin;
    }
  },
  methods: {
    async getAllAnmeldungen() {
      const { data } = await axios({
        url: 'http://127.0.0.1:3000/anmeldungen/all',
        method: 'GET',
      });
      this.alleanmeldungen = data;
    },
    async getAnmeldungen() {
      const { data } = await axios({
        url: 'http://127.0.0.1:3000/anmeldungen',
        method: 'GET',
      });
      this.anmeldungen = data;
    },
    async getAnzahlFreiPlätze() {
      const { data } = await axios({
        url: '/anmeldungen/anzahl',
        method: 'GET',
      });
      // console.log(data);
      this.anzahl = data.anzahl.toString();
    },
    async addInteressent(firma, vorname, nachname, tel, mail) {

      await axios({
        url: '/interessenten',
        method: 'POST',
        contentType: 'application/json',
        data: {
          firmen_name: firma,
          mail: mail,
          telefonnummer: tel,
          vorname: vorname,
          nachname: nachname,
          anfrage_zeitpunkt: new Date(),
        },
      });
    },
    async getCategorieOfAnmeldung(category) {
      const { data } = await axios({
        url: '/anmeldungen/' + category,
        method: 'GET',
      });
      this.category = data;
    },
    async getImages() {
      const { data } = await axios({
        url: '/images',
        method: 'GET',
      });
      this.images = data;
    },
    formatDate(date) {
      let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return [year, month, day].join('-');
    },
  },
};
</script>
<style>
.header {
  background-color: #f1f1f1;
  padding: 30px;
  text-align: center;
}

#head {
  margin-top: 5rem !important;
}
</style>
