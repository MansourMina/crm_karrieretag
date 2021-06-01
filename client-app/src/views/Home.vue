<template>
  <div id="app">
    <navbar id="home" />
    <div class="container d-flex flex-column min-vh-100">
      <h1 class="text-center mt-3">Welcome {{ user.name }}</h1>
      <div v-if="user.name.length == 0" class="d-flex flex-column">
        <div class="mx-auto">
          <router-link to="/login">Login</router-link> |
          <router-link to="/register">Register</router-link>
        </div>
        <p class="my-5 text-center">Please login to use our services!</p>

        <div class="row">
          <div class="col-4">
            <img class="img-fluid" src="/images/ceo.jpg" />
          </div>
          <div class="col-8 d-flex flex-column justify-content-center">
            <h3>A word from our CEO</h3>
            <h4>Dear Customer</h4>
            <p class="text-justify">
              PlanationX is an innovative International Seed Company, active in
              Plant Breeding, in Seed Production, in Seed Processing; and in
              Marketing and Sales of hybrid vegetable varieties for the
              professional sectors. PlanationX is an industry leader in Research
              and Development of new, improved vegetable varieties. The
              Company’s strategic focus is to develop hybrids with novel traits
              that have a high added- value and that meet the present and future
              demands of our customers. Over the last fifteen years, we have
              marketed the seeds of our Cucurbit varieties worldwide and we
              maintain the highest standards of genetic quality, integrity and
              professionalism. Research is the heart of PlanationX and its
              future.
            </p>
          </div>
        </div>
      </div>

      <div v-else class="d-flex flex-column justify-content-center">
        <h5 class="text-center mb-4">You are logged in!</h5>
        <div class="mx-auto">
          <router-link to="/account">Account</router-link> |
          <router-link to="/logout">Logout</router-link>
        </div>
        <h5 class="text-center mt-5 text-danger">
          Your account is about to expire. Update your credit card information!
        </h5>
        <p class="text-center mt-3">Please act immediatley!</p>
      </div>

      <p class="mt-auto text-center">&copy; 2021 Robert Baumgartner</p>
    </div>
    <Intro />

    <div id="informationen">
      <Information :images="images" />
    </div>
    <div id="anfrage">
      <formular @onSubmit="addInteressent" :alleanm="alleanmeldungen">
      </formular>
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
  },
  created() {
    this.getAnzahlFreiPlätze();
    this.getImages();
    this.getAllAnmeldungen();
    let user = JSON.parse(localStorage.getItem('user'));
    if (user != null) {
      this.user.id = user.id;
      this.user.name = user.name;
      console.log(this.user);
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
      console.log(new Date());

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
