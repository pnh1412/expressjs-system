const router = require('express').Router();
// controller
const controller = require('../controllers/user.controller');

// @route   GET /api/user
// @desc    Get list users
// @acces   public
router.get('/', controller.getUsers)

// @route   POST /api/user
// @desc    Create new user
// @acces   public
router.post('/', controller.createUser)

module.exports = router;