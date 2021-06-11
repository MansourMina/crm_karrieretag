<template>
  <div class="container " style="min-height: 520px">
    <div class="row justify-content-center ">
      <div
        class="col-md-12 "
        style="text-align: center"
        v-if="user.formular || formularcheck"
      >
        <h1 class=" centrieren">Danke für die Teilnahme!</h1>
      </div>
      <div class="col-md-8 " style="text-align: left" v-else>
        <form v-on:submit.prevent="updateFormular">
          <div class="contact-form ">
            <h5 class=" display-10 text-center mb-20 mt-5">
              Hallo <b>{{ user.name }}</b
              >, bitte füllen Sie das Formular aus.
            </h5>
            <h6 class="display-6 text-center mb-20 mt-5">
              Anmeldeformular
            </h6>
            <hr />
            <div class="form-group box mb-2 ">
              <h5 class="col mb-5">
                Hiermit melden wir uns
                <span style=" font-weight:bold">verbindlich</span> zum
                <span style="color:red; font-weight:bold"> HTL Wien West </span>
                Karrieretag an, welcher am Mittwoch den
                <span style=" font-weight:bold">24.02.2021</span> stattfinden
                wird. Für die Teilnahme wird eine Aufwandspauschale von
                <span style=" font-weight:bold">290€</span> berechnet.
              </h5>
              <div class="form-group row mb-4">
                <label for="staticEmail" class="col-sm-7 col-form-label"
                  ><b>Name des Ausstellers</b
                  ><i> (so wird er auf der Homepage erscheinen)</i> :</label
                >
                <div class="col-sm-5">
                  <input
                    type="text"
                    placeholder="Name"
                    class="form-control border-1"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="staticEmail" class="col-sm-4 col-form-label"
                  ><b>Gewünschte URL für Verlinkung</b> :</label
                >
                <div class="col-sm-8">
                  <input
                    type="text"
                    placeholder="URL"
                    class="form-control border-1"
                    v-model="url"
                  />
                </div>
              </div>
            </div>
            <h6 class="display-6 text-center mb-3 mt-5">
              Ansprechpartner
            </h6>
            <hr />

            <div class="form-group box mb-2 ">
              <div class="form-group row mb-4">
                <label for="staticEmail" class="col-sm-4 col-form-label"
                  ><b>Ansprechpartner/in für Teilnahme</b> :</label
                >
                <div class="col-sm-4 mb-2">
                  <input
                    type="text"
                    placeholder="Name"
                    class="form-control border-1"
                    v-model="nameteilnehmer"
                    required="required"
                  />
                </div>
                <div class="col-sm-4">
                  <input
                    type="email"
                    placeholder="Email"
                    class="form-control border-1"
                    v-model="mailteilnehmer"
                    required="required"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="staticEmail" class="col-sm-4 col-form-label"
                  ><b>Ansprechpartner/in für Ausstellung</b> :</label
                >
                <div class="col-sm-4 mb-2">
                  <input
                    type="text"
                    placeholder="Name"
                    class="form-control border-1"
                    v-model="nameausteller"
                    required="required"
                  />
                </div>
                <div class="col-sm-4">
                  <input
                    type="email"
                    placeholder="Email"
                    class="form-control border-1"
                    v-model="mailausteller"
                    required="required"
                  />
                </div>
              </div>
            </div>
            <h6 class="display-6 text-center mb-3 mt-5">
              Ihr Platz
            </h6>
            <hr />
            <div class="form-group box mb-2 box">
              <label class="control-label " for="lname"
                ><b>Gewünschter</b>
                <span style="font-weight:bold">Standplatz</span
                ><i>
                  ( Vergabe nach Verfügbarkeit und Anmeldungsreihenfolge )</i
                >
                :</label
              >
              <div class="w-100 text-center p-4">
                <div class="form-check form-check-inline  ">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="standplatz1"
                    value="Klasse"
                    v-model="standplatz"
                  />
                  <label class="form-check-label" for="standplatz1"
                    ><b>In einer Klasse</b></label
                  >
                </div>
                <div class="form-check form-check-inline ">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="standplatz2"
                    value="Gang"
                    v-model="standplatz"
                  />
                  <label class="form-check-label" for="standplatz2"
                    ><b>Am Gang</b></label
                  >
                </div>
              </div>
            </div>
            <h6 class="display-6 text-center mb-3 mt-5">
              Aufbauhilfe
            </h6>
            <hr />
            <div class="form-group box mb-2 box">
              <label class="control-label " for="lname"
                ><b>Brauchen Sie hilfe beim Aufbau Ihrer Sachen?</b>
              </label>
              <div class="w-100 text-center p-4">
                <div class="form-check form-check-inline  ">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="aufbauhilfeRadios"
                    id="ja"
                    value="true"
                    v-model="aufbauhilfe"
                  />
                  <label class="form-check-label" for="ja"><b>Ja</b></label>
                </div>
                <div class="form-check form-check-inline ">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="aufbauhilfeRadios"
                    id="nein"
                    value="false"
                    v-model="aufbauhilfe"
                  />
                  <label class="form-check-label" for="nein"><b>Nein</b></label>
                </div>
              </div>
            </div>
            <h6 class="display-6 text-center mb-3 mt-5">
              Fachrichtung
            </h6>
            <hr />
            <div class="form-group box mb-2 box">
              <label class="control-label " for="lname"
                ><b>Ihr Unternehmen ist in folgenden Bereichen tätig:</b>
              </label>
              <div class="form-group box mb-2 box">
                <div class="w-100 text-center p-4">
                  <div class="form-check form-check-inline  ">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="fachrichtungIT"
                      value="Informationstechnologie"
                      v-model="fachrichtungAuswahl"
                    />
                    <label class="form-check-label" for="fachrichtungIT"
                      >Informationstechnologie</label
                    >
                  </div>
                  <div class="form-check form-check-inline ">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="fachrichtungE/ET"
                      value="Elektronik-Elektrotechnik"
                      v-model="fachrichtungAuswahl"
                    />
                    <label class="form-check-label" for="fachrichtungE/ET"
                      >Elektrotechnik/Elektronik</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="fachrichtungM"
                      value="Maschinenbau"
                      v-model="fachrichtungAuswahl"
                    />
                    <label class="form-check-label" for="fachrichtungM"
                      >Maschinenbau</label
                    >
                  </div>
                </div>
              </div>
            </div>
            <h6 class="display-6 text-center mb-3 mt-5">
              Interesse einen Vortrag zu halten?
            </h6>
            <hr />
            <div class="form-group box mb-2 box">
              <label class="control-label " for="lname"
                ><b>Mit anwesenden Schüler/innen aus der:</b>
              </label>
              <div class="w-100 text-center p-4">
                <div class="form-check form-check-inline  ">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="vortrag1"
                    value="IT"
                    v-model="vortragauswahl"
                  />
                  <label class="form-check-label" for="vortrag1"
                    >Informationstechnologie</label
                  >
                </div>
                <div class="form-check form-check-inline ">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="vortrag2"
                    value="E/ET"
                    v-model="vortragauswahl"
                  />
                  <label class="form-check-label" for="vortrag2"
                    >Elektrotechnik/Elektronik</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="vortrag3"
                    value="Maschinenbau"
                    v-model="vortragauswahl"
                  />
                  <label class="form-check-label" for="vortrag3"
                    >Maschinenbau</label
                  >
                </div>
              </div>
            </div>
            <h6 class="display-6 text-center mb-3 mt-5">
              Ferialpraktikum
            </h6>
            <hr />
            <div class="form-group row box mb-2">
              <label class="control-label " for="lname"
                >Ihre Firma bietet auch
                <span style="font-weight: bold">Ferialpraxisplätze</span> in
                folgenden Bereichen an?</label
              >
              <div class="w-100 text-center p-4">
                <div class="form-check form-check-inline  ">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="ferialpraxis1"
                    value="IT"
                    v-model="ferialpraktikumauswahl"
                  />
                  <label class="form-check-label" for="ferialpraxis1"
                    >Informationstechnologie</label
                  >
                </div>
                <div class="form-check form-check-inline ">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="ferialpraxis2"
                    value="E/ET"
                    v-model="ferialpraktikumauswahl"
                  />
                  <label class="form-check-label" for="ferialpraxis2"
                    >Elektrotechnik/Elektronik</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="ferialpraxis3"
                    value="Maschinenbau"
                    v-model="ferialpraktikumauswahl"
                  />
                  <label class="form-check-label" for="ferialpraxis3"
                    >Maschinenbau</label
                  >
                </div>
              </div>
              <div class="form-group box mb-2 ">
                <div class="form-group row">
                  <label for="staticEmail" class="col-sm-4 col-form-label"
                    ><b>Ansprechpartner/in für Ferialpraxis</b> :</label
                  >
                  <div class="col-sm-3 mb-2">
                    <input
                      type="number"
                      placeholder="Tel"
                      class="form-control border-1 -webkit-inner-spin-button "
                      v-model="telpraktikum"
                    />
                  </div>
                  <div class="col-sm-5 mb-2">
                    <input
                      type="email"
                      placeholder="Email"
                      class="form-control border-1"
                      v-model="mailpraktikum"
                    />
                  </div>
                </div>
              </div>
            </div>
            <h6 class="display-6 text-center mb-3 mt-5">
              Finanzielle
            </h6>
            <hr />
            <div class="form-group row box mb-2">
              <div class="d-flex mb-3">
                <div class="col-sm-8">
                  <label for="staticEmail"
                    >Wir sind an einem
                    <b>Sponsoring/einer Partnerschaft</b> interessiert</label
                  >
                </div>
                <div class="col-sm-4 mb-2">
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input "
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                      v-model="sponsoring"
                    />
                  </div>
                </div>
              </div>

              <div class="form-group row ">
                <label for="staticEmail" class="col-sm-4 col-form-label"
                  >Die exakte Rechnungsanschrift <br />(bei Änderung bitte um
                  Mitteilung!):</label
                >
                <div class="col-sm-8 mt-2">
                  <input
                    type="text"
                    placeholder="Adresse"
                    class="form-control border-1"
                    v-model="rechnungsadresse"
                    required="required"
                  />
                </div>
              </div>
            </div>
            <div class="form-group box">
              <label class="control-label col-sm-2" for="comment"
                >Comment:</label
              >
              <div class="w-100">
                <textarea
                  class="form-control"
                  rows="5"
                  id="comment"
                  v-model="comment"
                ></textarea>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-offset-2  text-center w-100 ">
                <button
                  type="submit"
                  class="btn btn-danger"
                  v-on:submit="updateFormular()"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      user: {
        id: '',
        name: '',
        formular: '',
        firmen_id: '',
      },
      nameteilnehmer: '',
      mailteilnehmer: '',
      nameausteller: '',
      mailausteller: '',
      url: '',
      standplatz: '',
      aufbauhilfe: false,
      vortragauswahl: [],
      ferialpraktikumauswahl: [],
      fachrichtungAuswahl: [],
      telpraktikum: '',
      mailpraktikum: '',
      sponsoring: true,
      rechnungsadresse: '',
      comment: '',
      formularcheck: false,
    };
  },
  created() {
    let form = JSON.parse(localStorage.getItem('formular'));
    if (form != null) {
      this.formularcheck = form;
    }
    this.getData();
    this.setAnsprechpartner();
  },
  methods: {
    async getData() {
      let user = JSON.parse(localStorage.getItem('user'));
      if (user != null) {
        this.user.id = user.id;
        this.user.name = user.name;
        this.user.formular = user.formular;
        this.user.firmen_id = user.firmen_id;
        console.log(this.user.formular);
      }
    },
    async setAnsprechpartner() {
      let { data } = await axios({
        url: '/interessent/' + this.user.firmen_id,
        method: 'GET',
      });
      this.nameteilnehmer = `${data.vorname} ${data.nachname}`;
    },
    async updateFormular() {
      await axios({
        url: '/interessenten/' + this.user.firmen_id,
        method: 'PATCH',
        contentType: 'application/json',
        data: {
          fachrichtung: this.fachrichtungAuswahl,
          platz: this.standplatz,
          aufbauhilfe: this.aufbauhilfe,
          rechnungsadresse: this.rechnungsadresse,
          url: this.url,
          ansprechpartner_ausstellung_name: this.nameausteller,
          ansprechpartner_ausstellung_mail: this.mailausteller,
          vortrag_auswahl: this.vortrag,
          ferialpraktikum_auswahl: this.ferialpraktikum_auswahl,
          sponsoring_interessiert: this.sponsoring,
          firmen_kommentar: this.comment,
          tel_ferialpraktikum: this.telpraktikum,
          mail_ferialpraktikum: this.mailpraktikum,
          formular: true,
          status: 'Teilnehmer',
        },
      });
      this.user.formular = true;
      localStorage.setItem('formular', true);
    },
  },
};
</script>

<style>
.box {
  padding: 10px;
}
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.centrieren {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
