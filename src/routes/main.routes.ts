import { Router } from 'express';
import { RouteController } from 'src/declarations/types';

export default (router: Router) => {
  const baseRoute: RouteController = (req, res) => {
    return res.json({ data: 'Application works!' });
  };

  const notFound: RouteController = (req, res) => {
    res.status(404);
    return res.json({ data: 'Not Found' });
  };

  router.get('/', baseRoute);
  router.get('*', notFound);

  return router;
};
