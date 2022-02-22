const {
  BOT_TOKEN,
  NODE_ENV,
  HEROKU_URL,
} = process.env;

const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(BOT_TOKEN);

if (NODE_ENV === 'production') {
  bot.setWebHook(HEROKU_URL + bot.token);
} else {
  bot.startPolling();
}

console.log('Bot started in the ' + NODE_ENV + ' mode');

module.exports = bot;
