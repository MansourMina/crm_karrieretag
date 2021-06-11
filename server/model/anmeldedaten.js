const db = require('../db');

function serverError(err) {
  console.log('Error =====>', err.message.red);
  return {
    code: 500,
    data: 'Server error',
  };
}

async function getAnmeldedaten() {
  try {
    const { rows } = await db.query(`SELECT * from anmeldedaten `);

    return { code: 200, data: rows };
  } catch (err) {
    console.error(err);
    return serverError(err);
  }
}

async function getAdmindaten() {
  try {
    const { rows } = await db.query(`SELECT * from administrator `);

    return { code: 200, data: rows };
  } catch (err) {
    console.error(err);
    return serverError(err);
  }
}

async function addAnmeldedaten(daten) {
  try {
    await db.query(
      'INSERT INTO anmeldedaten (passwort,user_id,firmen_name,firmen_id) VALUES ($1,$2,$3,$4)',
      [daten.passwort, daten.user_id, daten.firmen_name, daten.firmen_id],
    );
    return {
      code: 200,
      data: 'added anmeldedaten' + daten.user_id,
    };
  } catch (err) {
    console.log(err);
    return serverError(err);
  }
}

module.exports = { getAnmeldedaten, addAnmeldedaten, getAdmindaten };
