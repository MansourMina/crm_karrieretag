<template>
  <section class="container-fluid " id="footer">
    <div class="row">
      <div class="col align-self-center text-center">
        <a href="https://www.htlwienwest.at" target="_blank"
          ><img src="@/assets/logo.png" width="120" height="70" alt="Logo" />
        </a>
      </div>
    </div>
    <div class="row ">
      <div class="col align-self-center mt-3 text-center">
        <p>
          Höhere Technische Lehranstalt Wien West | Thaliastraße 125, 1160 Wien
          | Tel: +43 (01) 49 111-113 | Fax: +43 (01) 49 111-199 |
          <a
            id="impressum"
            style="color:red "
            target="_blank"
            href="https://www.htlwienwest.at/ueberuns/impressum.html"
            >Impressum</a
          >
        </p>
      </div>
    </div>
    <!-- <div class="row" style="color:black">
      <div class="col align-self-center text-center">
        <p>
          <u><a class="color:blue">Lorem ipsum dolor</a></u>
          Lorem amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat.
        </p>
        <p class="h6">
          © All right Reversed.<a
            class="text-green ml-2"
            href="https://www.htlwienwest.at/"
            target="_blank"
          >
            HTL Wien West</a
          >
        </p>
      </div>
    </div> -->
  </section>
</template>

<style>
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
section {
  padding: 20px 0;
  color: black;
}

#footer {
  background-color: #f1f1f1;

  opacity: 1;
}

#footer a {
  text-decoration: none !important;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}

@media (max-width: 767px) {
  #footer h5 {
    padding-left: 0;
    border-left: transparent;
    padding-bottom: 0px;
    margin-bottom: 10px;
  }
}
#impressum {
  letter-spacing: 0;
}
</style>
