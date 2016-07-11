module.exports = {

  env: process.env.NODE_ENV || 'development',
  statics: process.env.STATIC || 'client',
  app: {
    name: 'Mural Challenge'
  },
  port: process.env.PORT || 8000,

};
