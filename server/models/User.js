// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true, // Ensures no duplicate emails
//     lowercase: true,
//     trim: true
//   },
//   password: {
//     type: String,
//     required: true,
//     minlength: 6 // You can increase this for stronger passwords
//   },
//   age: {
//     type: Number,
//     required: true,
//     min: 1
//   },
//   schoolOrCollege: {
//     type: String,
//     required: true
//   }
// }, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// module.exports = mongoose.model("User", UserSchema);

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, minlength: 6 },
    age: { type: Number, required: true, min: 1 },
    role: { type: String, required: true, enum: ["Mentor", "Student"] },
    institution: { type: String, required: true },

    // Conditional fields
    mentorExpertise: { type: String },
    studentGrade: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
