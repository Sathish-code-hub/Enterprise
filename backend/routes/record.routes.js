const express = require('express');
const router = express.Router();
const recordController = require('../controllers/record.controller');

// Handle explicit network latency simulation constraints
const delayMiddleware = (req, res, next) => {
  const delayMs = parseInt(req.query.delay) || 0;
  if (delayMs > 0) {
    setTimeout(next, delayMs);
  } else {
    next();
  }
};

router.get('/:userId/records', delayMiddleware, recordController.getUserRecords);

module.exports = router;
