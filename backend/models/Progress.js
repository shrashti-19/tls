const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  completed: [Number], // array of completed exercise IDs
  lastExercise: { type: Number, default: null }
});

module.exports = mongoose.model('Progress', progressSchema);
