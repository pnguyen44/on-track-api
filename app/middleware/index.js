'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const corsPort = 8000;
const corsOptions = {
  origin: process.env.CLIENT_ORIGIN || `http://localhost:${corsPort}`,
};

const before = (app) => {
  app.use(cors());
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extend: true }));

  // parse requests of content-type - application/json
  app.use(bodyParser.json());
};

const after = (app) => {
  app.use(express.static('public'));
};

module.exports = {
  before,
  after,
};
