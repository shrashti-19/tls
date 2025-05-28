const Progress = require('../models/Progress');

exports.getProgress = async (req, res) => {
  try {
    const progress = await Progress.findOne({ userId: req.user.id });
    if (!progress) return res.status(200).json({ completed: [], lastExercise: null });

    res.status(200).json(progress);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching progress' });
  }
};

exports.updateProgress = async (req, res) => {
  const { completedId } = req.body; // e.g. { completedId: 2 }
   if (typeof completedId !== 'number') {
    return res.status(400).json({ message: 'Invalid completedId' });
  }

  try {
    let progress = await Progress.findOne({ userId: req.user.id });

    if (!progress) {
      progress = new Progress({
        userId: req.user.id,
        completed: [completedId],
        lastExercise: completedId
      });
    } else {
      if (!progress.completed.includes(completedId)) {
        progress.completed.push(completedId);
      }
      progress.lastExercise = completedId;
    }

    await progress.save();
    res.status(200).json({ message: 'Progress updated', progress });
  } catch (err) {
    res.status(500).json({ message: 'Error updating progress' });
  }
};
