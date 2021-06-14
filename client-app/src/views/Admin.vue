<template>
  <div>
    <navbarAdmin />
    <div class="container mt-5">
      <div class="pt-5">
        <div class="row ">
          <div class="col-lg-12 card-margin">
            <div class="card search-form">
              <div class="card-body p-0">
                <form id="search-form">
                  <div class="row">
                    <div class="col-12">
                      <div class="d-flex ">
                        <div class="input-group w-100 h-50">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Wen oder Was suchen Sie?"
                            v-model="search"
                          />
                        </div>

                        <div class="input-group w-50 mb-0 h-50">
                          <select class="form-select" v-model="select">
                            <option value="Teilnehmer">Teilnehmer</option>
                            <option value="Interessent">Interessenten</option>
                            <option value="Daten erhalten"
                              >Daten erhalten</option
                            >
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="card card-margin">
              <div class="card-body">
                <div class="row search-body">
                  <div class="col-lg-12">
                    <div class="search-result">
                      <div class="result-header">
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="records">
                              Showing:
                              <b>{{ searchAnmeldungen.length }}</b> results
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="result-body fixheight">
                        <div class="table-responsive ">
                          <table
                            class="table widget-26 "
                            v-if="searchAnmeldungen.length > 0"
                          >
                            <tbody>
                              <tr
                                v-for="(i, index) of searchAnmeldungen"
                                :key="i.firmen_id"
                              >
                                <td>
                                  <div class="widget-26-job mt-1">
                                    {{ index + 1 }}
                                  </div>
                                </td>
                                <td>
                                  <div class="widget-26-job-title">
                                    <a>{{ i.firmen_name }}</a>
                                    <br />
                                    <span class="text-muted time"
                                      >{{
                                        i.anfrage_zeitpunkt
                                          .toString()
                                          .substr(0, 10)
                                      }}
                                      gesendet</span
                                    >
                                  </div>
                                </td>
                                <td>
                                  <div class="widget-26-job-info mt-3">
                                    <p
                                      @click="copyMail(i.firmen_mail)"
                                      class="type m-0"
                                    >
                                      {{ i.firmen_mail }}
                                    </p>
                                  </div>
                                </td>
                                <td v-if="i.status == 'Teilnehmer'">
                                  <div class="widget-26-job-category ">
                                    <span class="mt-2">{{
                                      i.fachrichtung.toString()
                                    }}</span>
                                  </div>
                                </td>
                                <td v-if="i.status == 'Teilnehmer'">
                                  <div class="widget-26-job-category ">
                                    <span class="mt-2">{{i.platz}}</span>
                                  </div>
                                </td>
                                <td v-if="i.status == 'Teilnehmer'">
                                  <div class="widget-26-job-category ">
                                    <span class="mt-2" v-if="i.aufbauhilfe">AH: Ja</span>
                                    <span class="mt-2" v-if="!i.aufbauhilfe">AH: Nein</span>
                                  </div>
                                </td>
                                <td v-if="i.status == 'Interessent'">
                                  <div class="widget-26-job-category ">
                                    <i
                                      class="indicator bg-danger "
                                      style="margin-top: 12px"
                                    ></i>
                                    <span class="mt-2">Interessent</span>
                                  </div>
                                </td>
                                <td v-if="i.status == 'Daten erhalten'">
                                  <div class="widget-26-job-category ">
                                    <i
                                      class="indicator bg-primary "
                                      style="margin-top: 12px"
                                    ></i>
                                    <span class="mt-2">Daten erhalten</span>
                                  </div>
                                </td>
                                <td v-if="i.status == 'Teilnehmer'">
                                  <div class="widget-26-job-category ">
                                    <i
                                      class="indicator bg-success "
                                      style="margin-top: 12px"
                                    ></i>
                                    <span class="mt-2">Teilnehmer</span>
                                  </div>
                                </td>
                                <td v-if="i.status == 'Interessent'">
                                  <div class="widget-26-job-category mt-1">
                                    <a
                                      @click="
                                        setDatenerhaltenTrue(i), setDaten(i)
                                      "
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                        class="bi bi-envelope"
                                        viewBox="0 0 16 16"
                                      >
                                        <path
                                          d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
                                        />
                                      </svg>
                                    </a>
                                  </div>
                                </td>
                                <td>
                                  <div
                                    class="widget-26-job-category mt-1 "
                                    v-if="i.status == 'Interessent'"
                                  >
                                    <a @click="deleteFirma(i)">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        style="color:red"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-x"
                                      >
                                        <line
                                          x1="18"
                                          y1="6"
                                          x2="6"
                                          y2="18"
                                        ></line>
                                        <line
                                          x1="6"
                                          y1="6"
                                          x2="18"
                                          y2="18"
                                        ></line>
                                      </svg>
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table v-else class="malala">
                            <div class="center">
                              <p>Keine Daten vorhanden</p>
                            </div>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
import axios from 'axios';
import navbarAdmin from '@/componentsLogin/NavbarAdmin.vue';

export default {
  data() {
    return {
      anmeldungen: [],
      search: '',
      select: 'Interessent',
      user_id: '',
      passwort: '',
    };
  },
  created() {
    this.getAnmeldungen();
  },
  components: {
    navbarAdmin,
  },
  computed: {
    searchAnmeldungen() {
      return this.anmeldungen
        .filter((el) => el.status == this.select)
        .filter((el) =>
          el.firmen_name.toLowerCase().includes(this.search.toLowerCase()),
        );
    },
  },
  methods: {
    async getAnmeldungen() {
      const { data } = await axios({
        url: 'http://127.0.0.1:3000/anmeldungen/all',
        method: 'GET',
      });
      this.anmeldungen = data;
    },
    generateDidgetsAndLetters() {
      return 'xxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
    },
    generateDidgetsAndLettersAndLockThem() {
      this.user_id = this.generateDidgetsAndLetters();
      this.passwort = this.generateDidgetsAndLetters();
    },
    async setDatenerhaltenTrue(i) {
      await axios({
        url: `http://127.0.0.1:3000/interessenten/${i.firmen_id}`,
        method: 'PATCH',
        contentType: 'application/json',
        data: {
          status: 'Daten erhalten',
        },
      });
      this.getAnmeldungen();
    },
    async setDaten(i) {
      this.generateDidgetsAndLettersAndLockThem();
      await axios({
        url: `http://127.0.0.1:3000/anmeldedaten`,
        method: 'POST',
        contentType: 'application/json',
        data: {
          firmen_name: i.firmen_name,
          firmen_id: i.firmen_id,
          passwort: this.passwort,
          user_id: this.user_id,
        },
      });
      this.getAnmeldungen();
      const templateParams = {
        to_name: i.firmen_name,
        to_mail: i.firmen_mail,
        user_id: this.user_id,
        passwort: this.passwort,
      };

      emailjs
        .send(
          'service_6zmw3po',
          'template_upex8pe',
          templateParams,
          'user_gAbx3AR9ArUExRlnHVA3H',
        )
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
          },
          (err) => {
            console.log('FAILED...', err);
          },
        );
    },
    async deleteFirma(i) {
      await axios({
        url: `http://127.0.0.1:3000/firma/${i.firmen_id}`,
        method: 'DELETE',
      });
      this.getAnmeldungen();
    },
    copyMail(mail) {
      mail.select();
      document.execCommand('copy');
    },
  },
};
</script>

<style>
.widget-26 {
  color: #3c4142;
  font-weight: 400;
}

.widget-26 .widget-26-job-emp-img img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}

.widget-26 .widget-26-job-title {
  min-width: 200px;
}

.widget-26 .widget-26-job-title a {
  font-weight: 400;
  font-size: 0.875rem;
  color: #3c4142;
  line-height: 1.5;
}

.widget-26 .widget-26-job-title a:hover {
  color: #68cbd7;
  text-decoration: none;
}

.widget-26 .widget-26-job-title .employer-name {
  margin: 0;
  line-height: 1.5;
  font-weight: 400;
  color: #3c4142;
  font-size: 0.8125rem;
  color: #3c4142;
}

.widget-26 .widget-26-job-title .employer-name:hover {
  color: #68cbd7;
  text-decoration: none;
}

.widget-26 .widget-26-job-title .time {
  font-size: 12px;
  font-weight: 400;
}

.widget-26 .widget-26-job-info {
  min-width: 100px;
  font-weight: 400;
}

.widget-26 .widget-26-job-info p {
  line-height: 1.5;
  color: #3c4142;
  font-size: 0.8125rem;
}

.widget-26 .widget-26-job-info .location {
  color: #3c4142;
}

.widget-26 .widget-26-job-salary {
  min-width: 70px;
  font-weight: 400;
  color: #3c4142;
  font-size: 0.8125rem;
}

.widget-26 .widget-26-job-category {
  padding: 0.5rem;
  display: inline-flex;
  white-space: nowrap;
  border-radius: 15px;
}

.widget-26 .widget-26-job-category .indicator {
  width: 13px;
  height: 13px;
  margin-right: 0.5rem;
  float: left;
  border-radius: 50%;
}

.widget-26 .widget-26-job-category span {
  font-size: 0.8125rem;
  color: #3c4142;
  font-weight: 600;
}

.widget-26 .widget-26-job-starred svg {
  width: 20px;
  height: 20px;
  color: #fd8b2c;
}

.widget-26 .widget-26-job-starred svg.starred {
  fill: #fd8b2c;
}
.bg-soft-base {
  background-color: #e1f5f7;
}
.bg-soft-warning {
  background-color: #fff4e1;
}
.bg-soft-success {
  background-color: #d1f6f2;
}
.bg-soft-danger {
  background-color: #fedce0;
}
.bg-soft-info {
  background-color: #d7efff;
}

.search-form {
  margin-top: 1rem;
}

.search-form input {
  height: 100%;
  background: transparent;
  border: 0;
  display: block;
  width: 100%;
  padding: 1rem;
  height: 100%;
  font-size: 1rem;
}

.search-form select {
  background: transparent;
  border: 0;
  padding: 1rem;
  height: 100%;
  font-size: 1rem;
}

.search-form select:focus {
  border: 0;
}

.search-form button {
  height: 100%;
  width: 100%;
  font-size: 1rem;
}

.search-form button svg {
  width: 24px;
  height: 24px;
}

.search-body {
  margin-bottom: 1.5rem;
}

.search-body .search-filters .filter-list {
  margin-bottom: 1.3rem;
}

.search-body .search-filters .filter-list .title {
  color: #3c4142;
  margin-bottom: 1rem;
}

.search-body .search-filters .filter-list .filter-text {
  color: #727686;
}

.search-body .search-result .result-header {
  margin-bottom: 2rem;
}

.search-body .search-result .result-header .records {
  color: #3c4142;
}

.search-body .search-result .result-header .result-actions {
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.search-body .search-result .result-header .result-actions .result-sorting {
  display: flex;
  align-items: center;
}

.search-body
  .search-result
  .result-header
  .result-actions
  .result-sorting
  span {
  flex-shrink: 0;
  font-size: 0.8125rem;
}

.search-body
  .search-result
  .result-header
  .result-actions
  .result-sorting
  select {
  color: #68cbd7;
}

.search-body
  .search-result
  .result-header
  .result-actions
  .result-sorting
  select
  option {
  color: #3c4142;
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .search-body .search-filters {
    display: flex;
  }
  .search-body .search-filters .filter-list {
    margin-right: 1rem;
  }
}

.card-margin {
  margin-bottom: 1.875rem;
}

@media (min-width: 992px) {
  .col-lg-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
}

.card-margin {
  margin-bottom: 1.875rem;
}
.card {
  border: 0;
  box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);
  -moz-box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);
  -ms-box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #ffffff;
  background-clip: border-box;
  border: 1px solid #e6e4e9;
  border-radius: 8px;
}

.fixheight {
  min-height: 450px;
}

.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
