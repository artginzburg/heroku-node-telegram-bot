"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bot_init_1 = __importDefault(require("./bot.init"));
bot_init_1.default.on('message', (msg) => {
    bot_init_1.default.sendMessage(msg.chat.id, `Hello, ${msg.from.first_name}!`).then(() => {
    });
});
exports.default = bot_init_1.default;
//# sourceMappingURL=bot.js.map