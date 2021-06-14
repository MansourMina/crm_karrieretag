const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();
const {
  getAnmeldungen,
  getAnzahLFreiePlätze,
  getCategory,
  getAllAnmeldungen,
  deleteFirma,
} = require('../model/anmeldungen');

const { getImages } = require('../model/images');
const {
  addInteressent,
  getInteressenten,
  getInteressent,
  checkInteressent,
  updateInteressent,
} = require('../model/interessenten');

const {
  getAnmeldedaten,
  addAnmeldedaten,
  getAdmindaten,
} = require('../model/anmeldedaten');

const redirectLogin = (req, res, next) => {
  if (!req.session.userId) res.status(400).send('You are not logged in!');
  else next();
};

router.post(
  '/login',
  asyncHandler(async (req, res) => {
    let userId = req.body.userId;
    let password = req.body.password;
    if (userId && password) {
      const { data } = await getAnmeldedaten();
      const admin = await getAdmindaten();

      const admindaten = admin.data.find(
        (el) => el.user_id === userId && el.password === password,
      );
      const user = data.find(
        (el) => el.user_id === userId && el.passwort === password,
      );
      if (admindaten) {
        req.session.userId = admindaten.user_id;
        res.status(200).json({
          id: admindaten.user_id,
          name: admindaten.admin_name,
          admin: true,
          erfolgreich: true,
        });
      } else if (user) {
        const interessent = await getInteressent(user.firmen_id);

        req.session.userId = user.user_id;
        res.status(200).json({
          id: user.user_id,
          name: user.firmen_name,
          formular: interessent.data.formular,
          firmen_id: interessent.data.firmen_id,
          admin: false,
          erfolgreich: true,
        });
      } else res.status(200).json({ erfolgreich: false });
    } else res.status(400).send('Login failed');
  }),
);

router.get(
  '/checkadmin',
  asyncHandler(async (req, res) => {
    const { data } = await getAdmindaten();
    console.log(req.session.userId);
    const checkadmin = data.find((el) => el.user_id == req.session.userId);

    if (checkadmin && checkadmin.user_id == req.session.userId) {
      res.status(200).json({ status: true });
      console.log('admin');
    } else {
      res.status(200).json({ status: false });
    }
  }),
);
router.get('/logout', redirectLogin, asyncHandler((req, res) => {
  req.session.destroy();
  res.clearCookie(process.env.SESSION_NAME);
  res.status(200).send('erfolgreich ausgeloggt');
  // res.end();)
}));

router.get(
  '/anmeldungen',
  asyncHandler(async (req, res) => {
    const { data, code } = await getAnmeldungen();
    res.status(code).json(data);
  }),
);

router.get(
  '/anmeldungen/all',
  asyncHandler(async (req, res) => {
    const { data, code } = await getAllAnmeldungen();
    res.status(code).json(data);
  }),
);

router.get(
  '/anmeldungen/anzahl',
  asyncHandler(async (req, res) => {
    const anzahl = await getAnzahLFreiePlätze();
    res.status(200).json(anzahl);
  }),
);

router.get(
  '/anmeldungen/:categorie',
  asyncHandler(async (req, res) => {
    const { data, code } = await getCategory(req.params.categorie);
    res.status(code).json(data);
  }),
);

router.get('/images', (req, res) => res.status(200).json(getImages()));

router.get(
  '/interessenten',
  asyncHandler(async (req, res) => {
    const { data, code } = await getInteressenten();
    res.status(code).json(data);
  }),
);

router.get(
  '/interessent/:name',
  asyncHandler(async (req, res) => {
    const { data, code } = await getInteressent(req.params.name);
    res.status(code).json(data);
  }),
);

router.get(
  '/anmeldedaten',
  asyncHandler(async (req, res) => {
    const { data, code } = await getAnmeldedaten();
    res.status(code).json(data);
  }),
);

router.get(
  '/interessenten/:firma',
  asyncHandler(async (req, res) => {
    const result = await checkInteressent(req.params.firma);
    res.status(200).json(result.bool);
  }),
);

router.delete(
  '/firma/:id',
  asyncHandler(async (req, res) => {
    const result = await deleteFirma(req.params.id);
    res.status(result.code).json(result);
  }),
);

router.post(
  '/interessenten',
  asyncHandler(async (req, res) => {
    const { data, code } = await addInteressent(req.body);
    res.status(code).json(data);
  }),
);

router.post(
  '/anmeldungen',
  asyncHandler(async (req, res) => {
    res.status(200).json(addAnmeldung(req.body.anmeldung));
  }),
);

router.patch(
  '/interessenten/:id',
  asyncHandler(async (req, res) => {
    const result = await updateInteressent(req.params.id, req.body);
    res.status(result.code).json(result);
  }),
);

router.post(
  '/anmeldedaten',
  asyncHandler(async (req, res) => {
    const result = await addAnmeldedaten(req.body);
    res.status(result.code).json(result);
  }),
);
// router.get('/anmeldungen/:kategorie', asyncHandler(async (req, res) => {
//   res.status(200).json(filterKategorie(req.params.kategorie));
// }));

module.exports = router;
