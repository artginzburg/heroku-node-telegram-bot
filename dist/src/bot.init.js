"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { BOT_TOKEN, NODE_ENV, HEROKU_URL, } = process.env;
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const bot = new node_telegram_bot_api_1.default(BOT_TOKEN);
if (NODE_ENV === 'production') {
    bot.setWebHook(HEROKU_URL + bot.token);
}
else {
    bot.startPolling();
}
console.log(`Bot started in the ${NODE_ENV} mode`);
exports.default = bot;
//# sourceMappingURL=bot.init.js.map