const router = require('express').Router();

// Import any controllers needed here
const { createToDo, getAllToDos, getOneToDo, updateOneToDo, deleteOneToDo } = require('../../controllers/todo-controller');

// Declare the routes that point to the controllers above
router.route('/all/:userid').get(getAllToDos);
router.route('/user/:userid').post(createToDo);
router.route('/:id').get(getOneToDo);
router.route('/:id').put(updateOneToDo);
router.route('/:id').delete(updateOneToDo);

module.exports = router;
