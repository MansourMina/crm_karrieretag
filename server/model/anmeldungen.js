const db = require('../db');

function serverError(err) {
  console.log('Error =====>', err.message.red);
  return {
    code: 500,
    data: 'Server error',
  };
}
async function getAnmeldungen() {
  try {
    const { rows } = await db.query(
      `SELECT * from firma where status = 'Teilnehmer'`,
    );
    function compare(a, b) {
      if (a.fachrichtung < b.fachrichtung) {
        return -1;
      }
      if (a.fachrichtung > b.fachrichtung) {
        return 1;
      }
      return 0;
    }
    rows.sort(compare);
    return { code: 200, data: rows };
  } catch (err) {
    console.error(err);
    return serverError(err);
  }
}

async function getAllAnmeldungen() {
  try {
    const { rows } = await db.query(
      'SELECT * from firma ORDER BY anfrage_zeitpunkt',
    );

    console.log(rows);
    return { code: 200, data: rows };
  } catch (err) {
    console.error(err);
    return serverError(err);
  }
}

async function getAnzahLFreiePlätze() {
  const { rows } = await db.query(
    `SELECT (50 - count(*)) as anzahl from firma where status = 'Teilnehmer'`,
  );
  return rows[0];
}

async function getCategory(c) {
  try {
    const { rows } = await db.query(
      `SELECT fachrichtung,firmen_name,firmen_id from firma where status = 'Teilnehmer'`,
    );
    console.log(rows);

    if (c == 'alle') {
      return { code: 200, data: rows };
    } else {
      return { code: 200, data: rows.filter((el) => el.fachrichtung == c) };
    }
  } catch (err) {
    console.log(err);
    return serverError(err);
  }
}

async function deleteFirma(id) {
  try {
    const { rows } = await db.query(
      'SELECT * from firma where firmen_id = $1',
      [id],
    );
    if (rows.length > 0) {
      await db.query('DELETE FROM firma where firmen_id= $1', [id]);
      return {
        code: 200,
        data: `Deleted Firma with the id ${id} `,
      };
    } else {
      return {
        code: 404,
        data: `The Firma with the id ${id} was not found`,
      };
    }
  } catch (err) {
    console.error(err);
    return serverError(err);
  }
}

module.exports = {
  getAnmeldungen,
  getAnzahLFreiePlätze,
  getCategory,
  getAllAnmeldungen,
  deleteFirma,
};
