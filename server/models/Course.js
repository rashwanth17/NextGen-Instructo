// models/Course.js
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: String,
  // instructor: String,
  rating: Number,
  price: String,
  description: String,
  longDescription: String,
  modules: [
    { title: String }
  ],
  videos: [
    { id: String, title: String }
  ],
  imageUrl: String,
  // mentorId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User'
  // }
});

module.exports = mongoose.model('Course', courseSchema);
