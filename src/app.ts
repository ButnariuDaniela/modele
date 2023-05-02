import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import UserRoute from './routes/users.route';
import * as admin from 'firebase-admin';
import * as config from './config/config.json';
import { ServiceAccount } from 'firebase-admin';
import { ManagersRoute } from './routes/managers.route';

const adminConfig: ServiceAccount = {};
if(!process.env.PROD) {
    const config = require('./config/config.json');
    adminConfig.projectId = config['project_id'];
    adminConfig.privateKey = config['private_key'];
    adminConfig.clientEmail = config['client_email'];
} else {
    adminConfig.projectId = process.env.PROJECT_ID;
    adminConfig.privateKey = process.env.PRIVATE_KEY;
    adminConfig.clientEmail = process.env.CLIENT_EMAIL;
}

admin.initializeApp({
    credential: admin.credential.cert(config as ServiceAccount)
});

const app = express();
app.use(bodyParser.json({limit: '25mb'}));
app.use(bodyParser.urlencoded({extended: false}));

//init static content
const publicPath = path.resolve(__dirname, 'public')
app.use(express.static(publicPath));

//init routes
new ManagersRoute().routes(app);
new UserRoute().routes(app);


//init server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running ...`));
