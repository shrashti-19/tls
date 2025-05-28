const express = require('express');
const router = express.Router();
const { getAllExercises, getExerciseById } = require('../controllers/exerciseController');

router.get('/', getAllExercises);        // GET /api/exercises
router.get('/:id', getExerciseById);     // GET /api/exercises/:id

module.exports = router;
