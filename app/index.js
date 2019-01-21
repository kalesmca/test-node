import config from 'config';

import http from 'http';
import express from 'express';
import user from '../app/modules/users/userRoute';

let app = express();
let port = config.port || 8080;

/* add express middleware to app */
// app.use(bodyParser.urlencoded());    // bodyparser urlencoded
// app.use(bodyParser.json());          // bodyparser json
// app.use(morgan('dev'));              // morgan http-request-logger

let router = express.Router();
router.get('/hello', (req, res) => {
    res.send('Hello World!')
});

app.use(router);
app.use('/user', user);

let server = http.createServer(app);
server.listen(port, () => {
    console.log('API Server is listening on port:', port);
});
