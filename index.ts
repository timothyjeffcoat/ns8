import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as DB from './src/data/database'
import routes from './src/routes/ns8Routes';

dotenv.config();

const app = express();

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get('/', async (req, res) =>
    res.status(200).json({data: 'Hi'})
);

app.listen(process.env.PORT, () =>
    console.log(process.env.PORT, 'hello world')
);

module.exports = app;
