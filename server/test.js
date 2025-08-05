const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://rashwanth90474:1234@cluster0.dimsdbm.mongodb.net/Instructo?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("✅ MongoDB connected");
}).catch((err) => {
  console.error("❌ MongoDB connection error:", err);
});
