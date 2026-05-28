const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Handle explicit execution queue delay settings
const delayMiddleware = (req, res, next) => {
  const delayMs = parseInt(req.query.delay) || 0;
  if (delayMs > 0) {
    setTimeout(next, delayMs);
  } else {
    next();
  }
};

router.get('/users', delayMiddleware, userController.getAllUsers);

module.exports = router;
