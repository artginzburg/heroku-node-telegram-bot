const {
  BOT_TOKEN,
  NODE_ENV,
  HEROKU_URL,
} = process.env;

import TelegramBot from 'node-telegram-bot-api';
export type TelegramBotWithToken<T = string> = TelegramBot & {
  token?: T;
}
const bot: TelegramBotWithToken = new TelegramBot(BOT_TOKEN);

if (NODE_ENV === 'production') {
  bot.setWebHook(HEROKU_URL + bot.token);
} else {
  bot.startPolling();
}

console.log(`Bot started in the ${NODE_ENV} mode`);

export default bot;
