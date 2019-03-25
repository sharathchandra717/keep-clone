// const router = require('express').Router();
import { Router } from 'express'
var UserPostsController = require('../controllers/user-posts')

const router = new Router()

router.get('/', UserPostsController.get);

router.post('/', UserPostsController.post);

module.exports = router;
// export default router