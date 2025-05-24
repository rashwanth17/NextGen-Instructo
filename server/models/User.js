// const mongoose = require("mongoose");

// // Schema for a single course
// const CourseSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String },
//   duration: { type: String }, // e.g., "4 weeks"
//   createdAt: { type: Date, default: Date.now }
// });

// const UserSchema = new mongoose.Schema(
//   {
//     username: { type: String, required: true, trim: true },
//     email: { type: String, required: true, unique: true, lowercase: true, trim: true },
//     password: { type: String, required: true, minlength: 6 },
//     age: { type: Number, required: true, min: 1 },
//     role: { type: String, required: true, enum: ["Mentor", "Student"] },
//     institution: { type: String, required: true },

//     // Conditional fields
//     mentorExpertise: { type: String },
//     studentGrade: { type: String },

//     // Courses only for mentors
//     courses: [CourseSchema]
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("User", UserSchema);


const mongoose = require("mongoose");

// Schema for a single course
const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  duration: { type: String },
  rating: { type: Number },
  price: { type: String },
  instructor: { type: String },
  longDescription: { type: String },
  imageUrl: { type: String },
  modules: [
    {
      title: { type: String }
    }
  ],
  videos: [
    {
      id: { type: String },
      title: { type: String }
    }
  ],
  createdAt: { type: Date, default: Date.now }
});


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

    // Courses only for mentors
    courses: [CourseSchema]
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
