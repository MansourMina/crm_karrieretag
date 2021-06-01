<template>
  <div>
    <button @click="test">KLick</button>
    <form
      v-on:submit.prevent="onSubmit()"
      class="mt-2 py-5 bg-dark text-white"
      id="antrag"
    >
      <header class="text-center py-4 font-weight-light">
        <div v-if="sended == false">
          <h1 class="display-4 ">
            ANTRAG STELLEN
          </h1>
          <h5 id="antrag-info" class="text-center text-secondary ">
            Bitte füllen Sie das nachfolgende Formular aus und wir kontaktieren
            Sie gerne, um weitere Details zu klären
          </h5>
        </div>

        <!-- <div v-else>
          <h1 class="display-4 py-4 font-weight-bold">
            DANKE FÜR IHR INTERESSE
          </h1>
          <h5 id="antrag-info" class="text-center text-secondary ">
            Sie erhalten in Kürze eine Bestätigungsmail
          </h5>
        </div> -->
      </header>

      <div v-if="sended == false" class="space">
        <div class="d-flex mb-3 mt-3  justify-content-center ">
          <div class="form-group  form-floating mb-3 col-md-6 col-10 ">
            <input
              type="text"
              class="form-control"
              id="floatingFirma"
              v-model="firma"
              placeholder="Firma"
              required="required"
            />
            <label for="floatingFirma" style="color:black">Company-name</label>
          </div>
        </div>

        <div class="d-flex mb-3  justify-content-center ">
          <div class="form-group col-md-3 col-5 ">
            <div class="form-floating space1 mb-3">
              <input
                type="text"
                class="form-control "
                placeholder="Vorname"
                v-model="vorname"
                id="floatingVorname"
                required
              />
              <label for="floatingVorname" style="color:black">Firstname</label>
            </div>
          </div>
          <div class="form-group col-md-3 col-5 ">
            <div class="form-floating space2 mb-3">
              <input
                type="text"
                class="form-control "
                placeholder="Nachname "
                v-model="nachname"
                id="floatingNachname"
                required="required"
              />
              <label for="floatingNachname" style="color:black">Lastname</label>
            </div>
          </div>
        </div>

        <div class="mb-3">
          <div class="d-flex  justify-content-center ">
            <div class="form-group  form-floating col-md-6 col-10">
              <input
                type="email"
                class="form-control"
                placeholder="E-Mail"
                id="floatingEmail"
                v-model="mail"
                required="required"
              />
              <label for="floatingEmail" style="color:black">Email</label>
            </div>
          </div>
          <div class="d-flex justify-content-center   " v-if="emailVorhanden()">
            <div class="form-group form-floating  col-md-6 col-10">
              <p style="color:red" class="mb-0">
                <i> Mit dieser Email ist schon ein Antrag ausgestellt</i>
              </p>
            </div>
          </div>
        </div>

        <div class="d-flex mb-3  justify-content-center ">
          <div class="form-group form-floating mt-3 mb-3 col-md-6 col-10">
            <input
              type="number"
              placeholder="Telefonnummer"
              class="form-control"
              id="floatingTel"
              v-model="tel"
              required="required"
            />
            <label for="floatingTel" style="color:black">Telefonnummer</label>
          </div>
        </div>

        <div class="d-flex mb-3 justify-content-center ">
          <div class=" col-md-6 col-10">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexCheckChecked"
                required="required"
              />
              <label class="form-check-label" for="flexCheckChecked"
                >Ich bestätige und bin damit einverstanden, dass meine
                persönlichen Daten verarbeitet werden</label
              >
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-center ">
          <h5 class="text-secondary mb-3">Datenschutz</h5>
        </div>

        <div class="d-flex mb-3 justify-content-center ">
          <div class="justify-content-center">
            <vue-recaptcha
              v-if="clicked"
              ref="recaptcha"
              @verify="onVerify"
              @expired="onExpired"
              :sitekey="sitekey"
            >
            </vue-recaptcha>
          </div>
        </div>

        <div class="d-flex justify-content-center ">
          <button
            type="submit"
            v-on:submit="onSubmit()"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            class="btn btn-danger"
          >
            Anfrage senden
          </button>
        </div>

        <vue-recaptcha
          ref="invisibleRecaptcha"
          @verify="onVerify"
          @expired="onExpired"
          size="invisible"
          :sitekey="sitekey"
        >
        </vue-recaptcha>
      </div>
    </form>
    <!-- <PopUp
      class="modal fade"
      id="staticBackdrop"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    /> -->
    <div
      class="modal fade"
      ref="exModal"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha';
// import PopUp from '@/components/PopUp.vue';+p
export default {
  data() {
    return {
      firma: '',
      vorname: '',
      nachname: '',
      tel: '',
      mail: '',
      sended: false,
      addon: false,
      sitekey: '6LcUcWQaAAAAAIJ9a0k79YiVYlHjCyh6E319VjeO',
      captcha: true,
      clicked: false,
    };
  },
  props: {
    message: {
      type: String,
    },
    alleanm: {
      type: Array,
    },
  },
  components: {
    VueRecaptcha,
    // PopUp,
  },

  methods: {
    test() {
       console.log(this.$refs)
       this.$refs['exModal'].show();
    },
    onSubmit() {
      this.clicked = true;
      if (this.captcha == false && !this.emailVorhanden()) {
        this.$emit(
          'onSubmit',
          this.firma,
          this.vorname,
          this.nachname,
          this.tel,
          this.mail,
        );
        this.sended = true;
        console.log("sdfsdfsfdsfsfsdf");
        this.$refs['exampleModal'].show();
        this.addon = true;
      }
    },

    onVerify: function(response) {
      this.$refs.invisibleRecaptcha.execute();

      console.log('Verify: ' + response);
      if (response.length != '') {
        this.captcha = true;
      }
      this.captcha = false;
      this.onSubmit();
    },
    onExpired: function() {
      console.log('Expired');
    },

    emailVorhanden() {
      if (this.alleanm.find((el) => el.firmen_mail == this.mail)) return true;
      return false;
    },
  },
};
</script>
<style>
.space1 {
  margin-right: 5px;
}

.space2 {
  margin-left: 5px;
}
</style>
