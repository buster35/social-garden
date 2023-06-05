const router = require('express').Router();
const userRoutes = require('./user-routes');
const todoRoutes = require('./todo-routes');

router.use('/todo', todoRoutes);
router.use('/user', userRoutes);

module.exports = router;
