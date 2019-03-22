// const router = require('express').Router();
import { Router } from 'express'

const router = new Router()

router.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.send('user-posts endpoint');
});

module.exports = router;
// export default router