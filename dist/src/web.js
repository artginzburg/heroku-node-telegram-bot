"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const package_json_1 = require("../package.json");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', function (req, res) {
    res.json({ version: package_json_1.version });
});
const server = app.listen(+process.env.PORT || undefined, '0.0.0.0', () => {
    const { address: host, port } = server.address();
    console.log('Web server started at http://%s:%s', host, port);
});
exports.default = (bot) => {
    app.post('/' + bot.token, (req, res) => {
        bot.processUpdate(req.body);
        res.sendStatus(200);
    });
};
//# sourceMappingURL=web.js.map