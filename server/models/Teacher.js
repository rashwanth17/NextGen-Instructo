const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 18 },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    username: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, minlength: 6 },
    institution: { type: String, required: true, trim: true },
    area_of_expertise: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Teacher", TeacherSchema);
