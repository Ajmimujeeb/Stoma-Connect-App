const mongoose = require('mongoose');
const nurseSchema = new mongoose.Schema({
  name: {type: String,required: true,trim: true,},
  email: {type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
    
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  certifications: {
    type: [String], // List of certifications the nurse may have
    default: [],
  },
  verified: {
    type: Boolean,
    default: false, // Indicates if the nurse is verified by professionals
  },
  specialization: {
    type: String,
    enum: ['Colostomy Care', 'Stoma Care', 'General Nursing', 'Other'],
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0, // Average rating by patients
  },
  appointmentCount: {
    type: Number,
    default: 0, // Number of appointments handled by the nurse
  },
  availableDays: {
    type: [String],
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    required: true, // List of days when the nurse is available
  },
  appointmentSlots: {
    type: [String],
    required: true, // e.g., ['9:00 AM - 11:00 AM', '2:00 PM - 4:00 PM']
  },
  bio: {
    type: String,
    trim: true, // Short biography or introduction
  },
  profileImage: {
    type: String, // URL to the nurse's profile image
  },
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Nurse', nurseSchema);
