require('dotenv').config();
import express from 'express';
import middlewareConfig from './config/middleware';
import routes from './routes';

const port = process.env.SERVER_PORT || 3000;

const app = express();

middlewareConfig(app);

routes(app);

app.listen(+port, process.env.SERVER_HOST || '127.0.0.1', () => {
  console.log(`Application started on port ${port}!`);
});
