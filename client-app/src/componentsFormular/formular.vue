<template>
  <div class="container ">
    <div class="row justify-content-center ">
      <div class="col-md-8 " style="text-align: left">
        <div class="contact-form ">
          <h6 class="display-6 text-center mb-3 mt-5">
            ---- die Firma ----
          </h6>
          <div class="form-group box mb-2 ">
            <p class="col mb-5">
              Hiermit melden wir uns
              <span style=" font-weight:bold">verbindlich</span> zum Karrieretag
              der
              <span style="color:red; font-weight:bold"> HTL Wien West </span>
              an, der am Mittwoch den
              <span style=" font-weight:bold">24.02.2021</span> stattfinden
              wird. Für die Teilnahme wird eine Aufwandspauschale von
              <span style=" font-weight:bold">290€</span> berechnet
            </p>
            <div class="form-group row mb-4">
              <label for="staticEmail" class="col-sm-7 col-form-label"
                >Name des Ausstellers (so wird er auf der Homepage
                erscheinen):</label
              >
              <div class="col-sm-5">
                <input
                  type="text"
                  placeholder="Name"
                  class="form-control border-0"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="staticEmail" class="col-sm-4 col-form-label"
                >Gewünschte URL für Verlinkung:</label
              >
              <div class="col-sm-8">
                <input
                  type="text"
                  placeholder="URL"
                  class="form-control border-0"
                />
              </div>
            </div>
          </div>
          <h6 class="display-6 text-center mb-3 mt-5">
            Ansprechpartner
          </h6>

          <div class="form-group box mb-2 ">
            <div class="form-group row mb-4">
              <label for="staticEmail" class="col-sm-4 col-form-label"
                >Ansprechpartner/in für Teilnahme:</label
              >
              <div class="col-sm-4 mb-2">
                <input
                  type="text"
                  placeholder="Name"
                  class="form-control border-0"
                />
              </div>
              <div class="col-sm-4">
                <input
                  type="email"
                  placeholder="Email"
                  class="form-control border-0"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="staticEmail" class="col-sm-4 col-form-label"
                >Ansprechpartner/in für Ausstellung:</label
              >
              <div class="col-sm-4 mb-2">
                <input
                  type="text"
                  placeholder="Name"
                  class="form-control border-0"
                />
              </div>
              <div class="col-sm-4">
                <input
                  type="email"
                  placeholder="Email"
                  class="form-control border-0"
                />
              </div>
            </div>
          </div>
          <h6 class="display-6 text-center mb-3 mt-5">
            Ihr Platz
          </h6>
          <div class="form-group box mb-2 box">
            <label class="control-label " for="lname"
              >Gewünschter <span style="font-weight:bold">Standplatz</span>:
              <br />(nichts ankreuzen, wenn egal, Vergabe nach Verfügbarkeit und
              Anmeldungsreihenfolge)</label
            >
            <div class="w-100 text-center p-4">
              <div class="form-check form-check-inline  ">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="standplatz1"
                  value="option1"
                />
                <label class="form-check-label" for="standplatz1"
                  >In einer Klasse</label
                >
              </div>
              <div class="form-check form-check-inline ">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="standplatz2"
                  value="option2"
                />
                <label class="form-check-label" for="standplatz2"
                  >Am Gang</label
                >
              </div>
            </div>
          </div>
          <h6 class="display-6 text-center mb-3 mt-5">
            Vortrag
          </h6>

          <div class="form-group box mb-2 box">
            <label class="control-label " for="lname"
              >Interesse einen <span style="font-weight: bold">Vortrag</span> zu
              halten. Mit anwesenden Schüler/innen aus:<br />
              (Vergabe nach Verfügbarkeit und Anmeldungsreihenfolge)</label
            >
            <div class="w-100 text-center p-4">
              <div class="form-check form-check-inline  ">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="vortrag1"
                  value="option1"
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
                  value="option2"
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
                  value="option2"
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

          <div class="form-group row box mb-2">
            <label class="control-label " for="lname"
              >Meine Firma bietet auch
              <span style="font-weight: bold"
                >Ferialpraxisplätze an:</span
              ></label
            >
            <div class="w-100 text-center p-4">
              <div class="form-check form-check-inline  ">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="ferialpraxis1"
                  value="option1"
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
                  value="option2"
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
                  value="option2"
                />
                <label class="form-check-label" for="ferialpraxis3"
                  >Maschinenbau</label
                >
              </div>
            </div>
            <div class="form-group box mb-2 ">
              <div class="form-group row">
                <label for="staticEmail" class="col-sm-4 col-form-label"
                  >Ansprechpartner/in für Ferialpraxis:</label
                >
                <div class="col-sm-2 mb-2">
                  <input
                    type="text"
                    placeholder="Zeitpunkt"
                    class="form-control border-0"
                  />
                </div>
                <div class="col-sm-3 mb-2">
                  <input
                    type="number"
                    placeholder="Tel"
                    class="form-control border-0"
                  />
                </div>
                <div class="col-sm-3 mb-2">
                  <input
                    type="email"
                    placeholder="Email"
                    class="form-control border-0"
                  />
                </div>
              </div>
            </div>
          </div>
          <h6 class="display-6 text-center mb-3 mt-5">
            Finanzielle
          </h6>

          <div class="form-group row box mb-2">
            <div class="form-group row mb-4">
              <div class="d-flex">
                <label for="staticEmail" class="col-sm-7 "
                  >Wir sind an einem
                  <b>Sponsoring/einer Partnerschaft</b> interessiert:</label
                >
                <div class="col-sm-5 " style="margin-left: 30px">
                  <input
                    class="form-check-input "
                    type="checkbox"
                    id="autoSizingCheck"
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
                  class="form-control border-0"
                />
              </div>
            </div>
          </div>
          <div class="form-group box">
            <label class="control-label col-sm-2" for="comment">Comment:</label>
            <div class="w-100">
              <textarea class="form-control" rows="5" id="comment"></textarea>
            </div>
          </div>
          <div class="form-group row mt-2">
            <div class="col-sm-offset-2 d-block text-center w-100">
              <button type="submit" class="btn btn-danger">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
export default {};
</script>

<style>
.box {
  padding: 10px;
}
</style>
