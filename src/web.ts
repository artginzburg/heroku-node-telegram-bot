import express from 'express';
import type { AddressInfo } from 'net';

import { version } from '../package.json';
import type { TelegramBotWithToken } from './bot.init';

const app = express();
app.use(express.json());

app.get('/', function (req, res) {
  res.json({ version });
});

const server = app.listen(+process.env.PORT || undefined, '0.0.0.0', () => {
  const { address: host, port } = server.address() as AddressInfo;
  console.log('Web server started at http://%s:%s', host, port);
});

export default (bot: TelegramBotWithToken) => {
  app.post('/' + bot.token, (req, res) => {
    bot.processUpdate(req.body);
    res.sendStatus(200);
  });
};
