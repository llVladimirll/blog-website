const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController')


router.get('/', blogController.blog_index);
router.get('/create', blogController.blog_create);
router.delete('/:id', blogController.blog_delete)
router.get('/:id', blogController.blog_details);
router.post('/', blogController.blog_post);

module.exports = router;