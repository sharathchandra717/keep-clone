const router = require('express').Router();

router.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.send('auth endpoint');
});

module.exports = router;