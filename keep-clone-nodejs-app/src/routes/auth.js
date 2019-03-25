const router = require('express').Router();
const AuthController = require('../controllers/auth')

router.post('/', AuthController.authenticate);

router.get('/secret-key', AuthController.getSecretKey)

module.exports = router;