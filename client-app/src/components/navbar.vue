<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="@/assets/CRM_logo.svg" width="110" height="60" alt="Logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item  ">
            <a class="nav-link " href="#informationen">Infos</a>
          </li>

          <li class="nav-item ">
            <a class="nav-link" href="#anfrage">Anfrage</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="#anmeldungen">Anmeldungen</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="#map">Location</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
        <ul class=" navbar-nav me-5 mb-2 " id="login">
          <li class="nav-item">
            <router-link to="/login"
              ><a class="nav-link" href="#">Login</a></router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
nav {
  text-transform: uppercase;
}
</style>
