const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  nurseId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, enum: ['Pending', 'Completed', 'Cancelled'], default: 'Pending' },
  appointmentDate: { type: Date, required: true },
  notes: String,
});

module.exports = mongoose.model('Appointment', appointmentSchema);
