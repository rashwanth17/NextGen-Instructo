const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  instructor: { type: String, required: true },
  rating: { type: Number, default: 0, min: 0, max: 5 },
  price: { type: String, required: true },
  description: { type: String, required: true },
  longDescription: { type: String, required: true },
  modules: [
    { 
      title: { type: String, required: true } 
    }
  ],
  videos: [
    { 
      id: { type: String, required: true },
      title: { type: String, required: true }
    }
  ],
  imageUrl: { type: String, required: true },
  mentorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdBy: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Course', courseSchema);