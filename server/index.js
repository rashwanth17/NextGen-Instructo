const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User");
const CourseModel = require("./models/Course"); 
const Teacher = require('./models/Teacher');
const jwt = require('jsonwebtoken');
const authenticateToken = require('./middleware/auth');
const Review = require("./models/Review");
require('dotenv').config();  

const app = express();
app.use(express.json());

// app.use(cors({
//   origin: 'http://localhost:5173', 
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//    credentials: true
// }));

app.use(cors({
  origin: ['http://localhost:5173', 'https://next-gen-instructo-4xmz.vercel.app'], // add your Vercel URL here
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("✅ MongoDB connected");
})
.catch((err) => {
  console.error("❌ MongoDB connection error:", err);
});

app.post("/api/signup", async (req, res) => {
  const {
    username,
    email,
    password,
    age,
    role,
    institution,
    mentorExpertise,
    studentGrade,
  } = req.body;

  if (!username || !email || !password || !age || !role || !institution) {
    return res.status(400).json({ error: "Required fields are missing" });
  }

  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "Email already in use" });
    }

    const newUserData = {
      username,
      email,
      password,
      age,
      role,
      institution,
    };

    if (role === "Mentor" && mentorExpertise) {
      newUserData.mentorExpertise = mentorExpertise;
    }

    if (role === "Student" && studentGrade) {
      newUserData.studentGrade = studentGrade;
    }

    const user = await UserModel.create(newUserData);

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    console.error("❌ Signup error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


const JWT_SECRET = "your_secret_key"; 

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) return res.status(404).json({ message: "User not found" });
    if (user.password !== password) return res.status(401).json({ message: "Invalid credentials" });

    // Generate JWT
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '2h' });

    res.status(200).json({
      message: "Login successful",
      token,
      email: user.email,
      role: user.role,
      username: user.username
    });
  } catch (error) {
    console.error("❌ Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/teachers", async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching teachers", error });
  }
}); 

app.get("/mentors", async (req, res) => {
  try {
    const mentors = await UserModel.find({ role: "Mentor" });
    console.log("Fetched mentors:", mentors);
    res.json(mentors);
  } catch (err) {
    console.error("Error fetching mentors:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Add these routes to your existing backend

// Get all courses
// Updated to handle role case sensitivity and add more validation
app.post("/api/courses", async (req, res) => {
  const { course } = req.body;
  console.log(course)

  try {
    // Validate input
    if (!course) {
      return res.status(400).json({ message: "Email and course data are required" });
    }

    // Validate user exists and is a mentor (case insensitive check)
    

    

    // Validate required course fields
    const requiredFields = ['name', 'description', 'imageUrl'];
    const missingFields = requiredFields.filter(field => !course[field]);
    
    if (missingFields.length > 0) {
      return res.status(400).json({
        message: `Missing required fields: ${missingFields.join(', ')}`
      });
    }

    // Create new course with mentor data
    const newCourse = new CourseModel({
      name: course.name,
      // instructor: user.username, // Using mentor's username as instructor
      rating: course.rating || 0,
      price: course.price || 'Free',
      description: course.description,
      longDescription: course.longDescription || course.description,
      modules: course.modules || [],
      videos: course.videos || [],
      imageUrl: course.imageUrl,
      // mentorId: user._id,
      // createdBy: user.email,
      // mentorExpertise: user.mentorExpertise // Adding mentor's expertise
    });

    await newCourse.save();

    res.status(201).json({ 
      success: true,
      message: "Course added successfully", 
      course: newCourse 
    });

  } catch (error) {
    console.error("❌ Error adding course:", error);
    res.status(500).json({ 
      success: false,
      message: error.message || "Internal server error" 
    });
  }
});

app.get("/api/fetchCourses",async(req, res)=>{
  try {
    const courses= await CourseModel.find();
    console.log(courses);
    return res.json(courses)
  } catch (error) {
    console.log(error)
  }
})

app.get("/api/courses/:id", async (req, res) => {
  try {
    const course = await CourseModel.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json(course);
  } catch (error) {
    console.error("Error fetching course:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/api/user/profile", authenticateToken, async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (err) {
    console.error("❌ Profile fetch error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Get all reviews for a course
app.get("/api/reviews/:courseId", async (req, res) => {
  try {
    const reviews = await Review.find({ courseId: req.params.courseId }).sort({ date: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
});

// Add a new review
// app.post("/api/reviews/:courseId", async (req, res) => {
//   const { user, rating, comment } = req.body;

//   if (!user || !rating || !comment) {
//     return res.status(400).json({ error: "All fields are required" });
//   }

//   try {
//     const review = new Review({
//       courseId: req.params.courseId,
//       user,
//       rating,
//       comment,
//     });

//     await review.save();
//     res.status(201).json(review);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to submit review" });
//   }
// });

app.post("/api/reviews/:courseId", authenticateToken, async (req, res) => {
  const { rating, comment } = req.body;
  const courseId = req.params.courseId;

  try {
    const user = await UserModel.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const newReview = {
      courseId,
      user: user.username,
      rating,
      comment,
      date: new Date(),
    };

    const review = await Review.create(newReview);
    res.status(201).json(review);
  } catch (err) {
    console.error("Error posting review:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// module.exports = router;

  


// Start the server
app.listen(3001, () => {
  console.log("🚀 Server is running at http://localhost:3001");
});
