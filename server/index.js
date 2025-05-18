const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User");

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174"],
  methods: ["GET", "POST"],
  credentials: true
}));

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/Instructo", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("✅ MongoDB connected");
}).catch((err) => {
  console.error("❌ MongoDB connection error:", err);
});

// Signup Route
// app.post("/api/signup", async (req, res) => {
//   const { username, email, password, age, schoolOrCollege } = req.body;

//   if (!username || !email || !password || !age || !schoolOrCollege) {
//     return res.status(400).json({ error: "All fields are required" });
//   }

//   try {
//     const existingUser = await UserModel.findOne({ email });
//     if (existingUser) {
//       return res.status(409).json({ error: "Email already in use" });
//     }

//     const user = await UserModel.create({
//       username,
//       email,
//       password,
//       age,
//       schoolOrCollege
//     });

//     res.status(201).json({ message: "User registered successfully", user });
//   } catch (error) {
//     console.error("❌ Signup error:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });
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

    const user = await UserModel.create({
      username,
      email,
      password,
      age,
      role,
      institution,
      mentorExpertise: role === "Mentor" ? mentorExpertise : undefined,
      studentGrade: role === "Student" ? studentGrade : undefined,
    });

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    console.error("❌ Signup error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


// Login Route
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("❌ Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Start the server
app.listen(3001, () => {
  console.log("🚀 Server is running at http://localhost:3001");
});
