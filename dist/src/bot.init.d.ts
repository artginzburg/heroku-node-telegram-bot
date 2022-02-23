import TelegramBot from 'node-telegram-bot-api';
export declare type TelegramBotWithToken<T = string> = TelegramBot & {
    token?: T;
};
declare const bot: TelegramBotWithToken;
export default bot;
