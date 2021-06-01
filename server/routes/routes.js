const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();
const users = require('../model/users');
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
  checkInteressent,
  updateInteressent,
} = require('../model/interessenten');

const redirectLogin = (req, res, next) => {
  if (!req.session.userId) res.status(400).send('You are not logged in!');
  else next();
};

router.post('/login', (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  if (email && password) {
    const user = users.find(
      (el) => el.email === email && el.password === password
    );
    if (user) {
      req.session.userId = user.id;
      res.status(200).json({ id: user.id, name: user.name });
    } else res.status(401).send('Wrong email or password');
  } else res.status(400).send('Login failed');
});

router.get('/logout', redirectLogin, (req, res) => {
  req.session.destroy();
  res.clearCookie(process.env.SESSION_NAME);
  res.status(200).send('erfolgreich ausgeloggt');
});

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
// router.get('/anmeldungen/:kategorie', asyncHandler(async (req, res) => {
//   res.status(200).json(filterKategorie(req.params.kategorie));
// }));

module.exports = router;
