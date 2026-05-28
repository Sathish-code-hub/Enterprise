const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// Handle explicit latency configuration for login processing pipelines
const delayMiddleware = (req, res, next) => {
  const delayMs = parseInt(req.query.delay) || 0;
  if (delayMs > 0) {
    setTimeout(next, delayMs);
  } else {
    next();
  }
};

router.post('/login', delayMiddleware, authController.login);

module.exports = router;
