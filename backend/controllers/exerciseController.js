const fs = require('fs');
const path = require('path');

exports.getAllExercises = (req, res) => {
  const filePath = path.join(__dirname, '..', 'data', 'exercises.json');

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) return res.status(500).json({ message: 'Error loading exercises' });

    const exercises = JSON.parse(data);
    res.status(200).json(exercises);
  });
};

exports.getExerciseById = (req, res) => {
  const id = parseInt(req.params.id);
  const filePath = path.join(__dirname, '..', 'data', 'exercises.json');

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) return res.status(500).json({ message: 'Error loading exercise' });

    const exercises = JSON.parse(data);
    const exercise = exercises.find(e => e.id === id);
    if (!exercise) return res.status(404).json({ message: 'Exercise not found' });

    res.status(200).json(exercise);
  });
};
