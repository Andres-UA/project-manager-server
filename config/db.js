const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, (err) => {
  if (!err) {
    console.log('Conexión de MongoDB exitosa.');
  } else {
    console.log('Error en la conexión de MongoDB: ' + JSON.stringify(err, undefined, 2));
  }
});

// Importar modelos
require('../models/User');
require('../models/Task');
require('../models/Project');
