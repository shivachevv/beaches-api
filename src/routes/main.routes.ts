import express from 'express';
import { RouteController } from 'src/declarations/types';

const router = express.Router();

const test: RouteController = (req, res) => {
  return res.json({ data: 'Application works!' });
};

const notFound: RouteController = (req, res) => {
  res.status(404);
  return res.json({ data: 'Not Found' });
};

router.get('/', test);
router.get('*', notFound);

export default router;
