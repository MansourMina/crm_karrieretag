const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const session = require('express-session');
const history = require('connect-history-api-fallback');

require('dotenv').config();
require('colors');

const { errorHandler, notfoundHandler } = require('./middleware/errorHandler');

const routes = require('./routes/routes');

const app = express();

// var nodemailer = require('nodemailer');

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '/public')));
let { PORT, NODE_ENV, SESSION_LIFETIME, SESSION_NAME, SESSION_SECRET } =
  process.env;
  
app.use(helmet());

app.use('/', routes);
app.use(notfoundHandler);

app.use(errorHandler);

app.use(express.static(path.join(__dirname, '/public')));
app.use(history());
app.use(express.static(path.join(__dirname, '/public')));

app.use(
  session({
    secret: SESSION_SECRET,
    name: SESSION_NAME,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: SESSION_LIFETIME * 1000 * 60 * 60,
      httpOnly: false,
      sameSite: true,
      secure: NODE_ENV === 'production',
    },
  }),
);
app.listen(PORT ?? 5000);
// app.listen(PORT, () => console.log(`listening on port ${PORT}`));
console.log('finished with setup');
