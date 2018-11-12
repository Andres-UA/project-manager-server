require('./config/config');
require('./config/db');
require('./config/passport');

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

// Express App
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use(morgan('dev'));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/projects', require('./routes/projects'));

// Static
app.use(express.static(path.join(__dirname, 'public')));

// Error Handler
app.use((err, req, res, next) => {
  if (err.name === 'ValidationError') {
    var valErrors = [];
    Object.keys(err.errors).forEach((key) => valErrors.push(err.errors[key].message));
    res.status(422).send(valErrors);
  }
});

// Start Server
app.listen(process.env.PORT, () =>
  console.log(`Servidor iniciado en el puerto: ${process.env.PORT}`)
);

//app.use(express.json());
