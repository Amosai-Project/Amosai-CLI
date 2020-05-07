require('dotenv').config();

module.exports = {
  APP_SETTINGS: {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
  },
};
