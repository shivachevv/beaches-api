import { Application } from 'express';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

export default (app: Application) => {
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
};
