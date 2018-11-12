// Comprobar env.
var env = process.env.NODE_ENV || 'development';

// Recuperar configuración env.
var config = require('./config.json');
var envConfig = config[env];

// Agregar valores de la configuración env. a process.env
Object.keys(envConfig).forEach((key) => (process.env[key] = envConfig[key]));
