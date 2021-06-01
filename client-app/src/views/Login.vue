<template>
  <div class="container-fluid px-3 px-md-5 px-lg-3 px-xl-5 py-5 mx-auto">
    <navbar />
    <div class="container d-flex flex-column min-vh-100">
      <form @submit.prevent="login">
        <h1 class="text-center my-3">Login</h1>
        <div class="row">
          <div class="col-3 offset-2">
            <input
              class="form-control"
              type="email"
              v-model="email"
              placeholder="Email"
              required
            />
          </div>
          <div class="col-3">
            <input
              class="form-control"
              type="password"
              v-model="password"
              placeholder="Password"
              required
            />
          </div>
          <div class="col-2">
            <button class="btn btn-primary" @click="login()">Login</button>
          </div>
        </div>
      </form>
      <p class="mt-4 text-center">
        No account? <a href="/register">Register</a> first!
      </p>
      <p class="mt-auto text-center">&copy; 2021 Robert Baumgartner</p>
    </div>
    <div class="card card0 mt-5 border-0">
      <div class="row d-flex">
        <div class="col-lg-6">
          <div class=" d-block text-center  border-line">
            <img
              src="@/assets/Anmeldung_Logo.svg"
              class="logo"
              style="height:60vh; width:60vh; margin:-30px; "
            />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card2 border-0 px-4 py-5">
            <div class="row px-3">
              <label class="mb-1">
                <h6 class="mb-0 spacing text-sm">Email Address</h6>
              </label>
              <input
                class="mb-4 logininput"
                type="text"
                name="email"
                placeholder="Enter a valid email address"
              />
            </div>
            <div class="row px-3 mb-4">
              <label class="mb-1">
                <h6 class="spacing mb-0 text-sm">Password</h6>
              </label>
              <input
                class="logininput"
                type="password"
                name="password"
                placeholder="Enter password"
              />
            </div>
            <!-- <div class="row px-3 mb-4">
              <a href="#" class="ml-auto mb-0 text-sm">Forgot Password?</a>
            </div> -->
            <div class="row mb-3 px-3">
              <button
                type="submit"
                style="background-color: #B61212;"
                class="btn btn-blue text-center"
                @click="$router.push('/formular')"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class=" py-4" style="background-color: #B61212;">
        <div class="row text-white px-3">
          <small class="ml-4 ml-sm-5  mb-2"
            >Copyright &copy; 2019. All rights reserved.</small
          >
          <div class="social-contact ml-4 ml-sm-auto">
            HTL Wien West
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import navbar from '@/componentsLogin/navbar.vue';
export default {
  name: 'app',
  data() {
    return {
      email: 'john@gmail.com',
      password: '1234',
    };
  },
  components: {
    navbar,
  },
  methods: {
    async login() {
      let { data } = await axios({
        url: '/login',
        method: 'POST',
        contentType: 'application/json',
        data: {
          email: this.email,
          password: this.password,
        },
      });
      localStorage.setItem('user', JSON.stringify(data));
      this.$router.push('/');
    },
  },
};
</script>
<style>
.card0 {
  box-shadow: 0px 4px 8px 0px #757575;
  border-radius: 0px;
}

.card2 {
  margin: 0px 40px;
}

.logo {
  width: 200px;
  height: 100px;
  margin-top: 20px;
  margin-left: 35px;
}

.image {
  width: 360px;
  height: 280px;
}

.border-line {
  border-right: 1px solid #eeeeee;
}

.facebook {
  background-color: #3b5998;
  color: #fff;
  font-size: 18px;
  padding-top: 5px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
}

.twitter {
  background-color: #1da1f2;
  color: #fff;
  font-size: 18px;
  padding-top: 5px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
}

.linkedin {
  background-color: #2867b2;
  color: #fff;
  font-size: 18px;
  padding-top: 5px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
}

.line {
  height: 1px;
  width: 45%;
  background-color: #e0e0e0;
  margin-top: 10px;
}

.or {
  width: 10%;
  font-weight: bold;
}

.text-sm {
  font-size: 14px !important;
}

::placeholder {
  color: #bdbdbd;
  opacity: 1;
  font-weight: 300;
}

:-ms-input-placeholder {
  color: #bdbdbd;
  font-weight: 300;
}

::-ms-input-placeholder {
  color: #bdbdbd;
  font-weight: 300;
}

.logininput,
textarea {
  padding: 10px 12px 10px 12px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  margin-bottom: 5px;
  margin-top: 2px;
  width: 100%;
  box-sizing: border-box;
  color: #2c3e50;
  font-size: 14px;
  letter-spacing: 1px;
}

.logininput:focus,
textarea:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border: 1px solid #304ffe;
  outline-width: 0;
}

button:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline-width: 0;
}

a {
  color: inherit;
  cursor: pointer;
}

.btn-blue {
  background-color: #1a237e;
  width: 150px;
  color: #fff;
  border-radius: 2px;
}

.btn-blue:hover {
  background-color: #000;
  cursor: pointer;
}

.bg-blue {
  color: #fff;
  background-color: #1a237e;
}

.spacing {
  margin-left: -0.75rem;
}

@media screen and (max-width: 991px) {
  .logo {
    margin-left: 0px;
  }

  .image {
    width: 300px;
    height: 220px;
  }

  .border-line {
    border-right: none;
  }

  .card2 {
    border-top: 1px solid #eeeeee !important;
    margin: 0px 15px;
  }
}
</style>
