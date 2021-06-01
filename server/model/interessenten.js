const db = require('../db');
async function getInteressenten() {
  try {
    const { rows } = await db.query(
      `SELECT * from firma where status = 'Interessent'`,
    );
    function compare(a, b) {
      if (a.branche < b.branche) {
        return -1;
      }
      if (a.branche > b.branche) {
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
async function getInteressent(id) {
  try {
    const { rows } = await db.query(
      'SELECT * from firma WHERE firmen_id = $1',
      [id],
    );
    if (rows.length > 0)
      return {
        code: 200,
        data: rows[0],
      };
    else {
      return {
        code: 404,
        data: `The interessent with the id ${id} was not found`,
      };
    }
  } catch (err) {
    console.error(err);
  }
}

async function addInteressent(a) {
  try {
    const { rows } = await db.query('SELECT Max(firmen_id) AS Max from firma');

    let interessenten_id = rows[0].max + 1;
    await db.query(
      'INSERT INTO firma (status, firmen_name, firmen_mail, firmen_id, uhrzeit, fachrichtung, anzahl_praesentatoren, platz, aufbauhilfe, rechnungsadresse,anfrage_zeitpunkt) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)',
      [
        'Interessent',
        a.firmen_name,
        a.mail,
        interessenten_id,
        null,
        null,
        null,
        null,
        null,
        null,
        a.anfrage_zeitpunkt,
      ],
    );
    await db.query(
      'INSERT INTO ansprechperson (firmen_id, mail, telefonnummer, vorname, nachname) VALUES ($1,$2,$3,$4,$5)',
      [interessenten_id, null, a.telefonnummer, a.vorname, a.nachname],
    );
    console.log(rows);

    return {
      code: 200,
      data: 'added ' + interessenten_id,
    };
  } catch (err) {
    console.log(err);
    return serverError(err);
  }
}

async function checkInteressent(firma, mail) {
  try {
    const { rows } = await db.query(
      `SELECT * from firma where status = 'Interessent'`,
    );
    if (rows.find((el) => el.mail == mail)) {
      return { message: 'E-Mail', bool: false };
    } else {
      if (rows.find((el) => el.firmen_name == firma)) {
        return { message: 'Firma', bool: false };
      } else {
        return { bool: true };
      }
    }
  } catch (err) {
    console.log(err);
    return serverError(err);
  }
}

function serverError(err) {
  console.log('Error =====>', err.message.red);
  return {
    code: 500,
    data: 'Server error',
  };
}

async function updateInteressent(id, p) {
  try {
    let newProduktProps = [];
    const { rows } = await db.query(
      'SELECT * from firma WHERE firmen_id = $1',
      [id],
    );

    if (rows.length > 0) {
      for (const key in p) {
        newProduktProps.push(`${key}= '${p[key]}'`);
      }
      let cmd = `UPDATE firma Set ${newProduktProps.join(
        ',',
      )} where firmen_id = $1`;
      await db.query(cmd, [id]);
      return {
        code: 200,
        data: 'updated ' + id,
      };
    } else {
      return {
        code: 404,
        data: `The produkt with the id ${id} was not found`,
      };
    }
  } catch (err) {
    console.log(err);
    return serverError(err);
  }
}

module.exports = {
  addInteressent,
  getInteressenten,
  checkInteressent,
  updateInteressent,
};
