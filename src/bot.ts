import bot from './bot.init';

bot.on('message', (msg) => {
  bot.sendMessage(msg.chat.id, `Hello, ${msg.from.first_name}!`).then(() => {
    // reply sent!
  });
});

export default bot;
