const express = require('express');

const packageInfo = require('./package.json');

const app = express();
app.use(express.json());

app.get('/', function (req, res) {
  res.json({ version: packageInfo.version });
});

const server = app.listen(process.env.PORT, '0.0.0.0', () => {
  const { address: host, port } = server.address();
  console.log('Web server started at http://%s:%s', host, port);
});

module.exports = (bot) => {
  app.post('/' + bot.token, (req, res) => {
    bot.processUpdate(req.body);
    res.sendStatus(200);
  });
};
