if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const bot = require('./bot');
require('./web')(bot);
