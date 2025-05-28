const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getProgress, updateProgress } = require('../controllers/progressController');

router.get('/', auth, getProgress);          // GET /api/progress
router.post('/', auth, updateProgress);      // POST /api/progress

module.exports = router;
