<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
    <div class="container">
      <router-link to="/"
        ><a class="navbar-brand">
          <img
            src="@/assets/CRM_logo.svg"
            width="110"
            height="60"
            alt="Logo"
          /> </a
      ></router-link>
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
            <router-link to="/"><a class="nav-link ">Home</a></router-link>
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
