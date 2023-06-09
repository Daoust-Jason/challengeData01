require('dotenv').config();

const express = require('express');
const router = require('./app/routers');
const logger = require('./app/log');

const port = process.env.PORT || 3000;

const app = express();

app.use(router);

app.listen(port, () => {
  logger.log(`Server ready: http://localhost:${port}`);
});
