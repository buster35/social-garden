const router = require('express').Router();

// Import any controllers needed here
const { createPost, getAllPost, getOnePost, updatePost, deleteOnePost } = require('../../controllers/post-controller');

// Declare the routes that point to the controllers above
router.route('/all/:userid').get(getAllPost);
router.route('/user/:userid').post(createPost);
router.route('/:id').get(getOnePost);
router.route('/:id').put(updatePost);
router.route('/:id').delete(deleteOnePost);

module.exports = router;

