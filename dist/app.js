"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const users_route_1 = require("./routes/users.route");
const admin = require("firebase-admin");
const config = require("./config/config.json");
const managers_route_1 = require("./routes/managers.route");
const adminConfig = {};
if (!process.env.PROD) {
    const config = require('./config/config.json');
    adminConfig.projectId = config['project_id'];
    adminConfig.privateKey = config['private_key'];
    adminConfig.clientEmail = config['client_email'];
}
else {
    adminConfig.projectId = process.env.PROJECT_ID;
    adminConfig.privateKey = process.env.PRIVATE_KEY;
    adminConfig.clientEmail = process.env.CLIENT_EMAIL;
}
admin.initializeApp({
    credential: admin.credential.cert(config)
});
const app = express();
app.use(bodyParser.json({ limit: '25mb' }));
app.use(bodyParser.urlencoded({ extended: false }));
//init static content
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));
//init routes
new managers_route_1.ManagersRoute().routes(app);
new users_route_1.default().routes(app);
//init server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running ...`));
