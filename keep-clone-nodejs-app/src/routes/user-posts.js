// const router = require('express').Router();
import { Router } from 'express'
var UserPostsController = require('../controllers/user-posts')

const router = new Router()

router.get('/', UserPostsController.getNotes);

router.post('/', UserPostsController.newNote);

router.put('/', UserPostsController.editNote);

router.delete('/', UserPostsController.deleteNote);

module.exports = router;
// export default router