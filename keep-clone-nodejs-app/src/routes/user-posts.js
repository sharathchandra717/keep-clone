// const router = require('express').Router();
import { Router } from 'express'
var UserPostsController = require('../controllers/user-posts')

const router = new Router()

router.get('/', UserPostsController.get);

router.post('/', UserPostsController.newNote);

module.exports = router;
// export default router