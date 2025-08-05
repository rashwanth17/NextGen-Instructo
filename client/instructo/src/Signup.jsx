// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Signup = () => {
//   const navigate = useNavigate();

//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [age, setAge] = useState("");
//   const [school, setSchool] = useState("");

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");
//     setLoading(true);

//     try {
//       const response = await axios.post("http://localhost:3001/api/signup", {
//         username,
//         email,
//         password,
//         age: parseInt(age),
//         schoolOrCollege: school,
//       });

//       setSuccess("Signup successful! You can now log in.");
//       setUsername("");
//       setEmail("");
//       setPassword("");
//       setAge("");
//       setSchool("");
//     } catch (err) {
//       if (err.response?.data?.error) {
//         setError(err.response.data.error);
//       } else {
//         setError("Server error. Please try again later.");
//       }
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-4">
//       <div className="max-w-md w-full bg-gray-900 rounded-xl shadow-lg p-8 text-gray-300">
//         <h2 className="text-3xl font-extrabold text-purple-400 mb-6 text-center">
//           Create an Account
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block mb-2 text-sm font-medium text-gray-400">
//               Username
//             </label>
//             <input
//               type="text"
//               required
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Enter your username"
//               className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-purple-500 text-gray-100"
//             />
//           </div>

//           <div>
//             <label className="block mb-2 text-sm font-medium text-gray-400">
//               Email Address
//             </label>
//             <input
//               type="email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="you@example.com"
//               className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-purple-500 text-gray-100"
//             />
//           </div>

//           <div>
//             <label className="block mb-2 text-sm font-medium text-gray-400">
//               Password
//             </label>
//             <input
//               type="password"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="••••••••"
//               className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-purple-500 text-gray-100"
//             />
//           </div>

//           <div>
//             <label className="block mb-2 text-sm font-medium text-gray-400">
//               Age
//             </label>
//             <input
//               type="number"
//               required
//               value={age}
//               onChange={(e) => setAge(e.target.value)}
//               placeholder="Enter your age"
//               className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-purple-500 text-gray-100"
//             />
//           </div>

//           <div>
//             <label className="block mb-2 text-sm font-medium text-gray-400">
//               School / College Name
//             </label>
//             <input
//               type="text"
//               required
//               value={school}
//               onChange={(e) => setSchool(e.target.value)}
//               placeholder="Your institution"
//               className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-purple-500 text-gray-100"
//             />
//           </div>

//           {error && <p className="text-red-500 text-center">{error}</p>}
//           {success && <p className="text-green-500 text-center">{success}</p>}

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-md text-white font-semibold hover:from-pink-500 hover:to-purple-600 transition disabled:opacity-50"
//           >
//             {loading ? "Signing up..." : "Sign Up"}
//           </button>
//         </form>

//         <p className="mt-6 text-center text-gray-500">
//           Already have an account?{" "}
//           <button
//             className="text-purple-400 font-semibold hover:underline"
//             onClick={() => navigate("/login")}
//           >
//             Log In
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [role, setRole] = useState(""); // Mentor or Student

  // Role-specific fields
  const [institution, setInstitution] = useState("");
  const [mentorExpertise, setMentorExpertise] = useState("");
  const [studentGrade, setStudentGrade] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/signup`, {
        username,
        email,
        password,
        age: parseInt(age),
        role,
        institution,
        mentorExpertise: role === "Mentor" ? mentorExpertise : undefined,
        studentGrade: role === "Student" ? studentGrade : undefined,
      });

      setSuccess("Signup successful! You can now log in.");
      setUsername("");
      setEmail("");
      setPassword("");
      setAge("");
      setRole("");
      setInstitution("");
      setMentorExpertise("");
      setStudentGrade("");
    } catch (err) {
      setError(err.response?.data?.error || "Server error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-4">
      <div className="max-w-md w-full bg-gray-900 rounded-xl shadow-lg p-8 text-gray-300">
        <h2 className="text-3xl font-extrabold text-purple-400 mb-6 text-center">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Common fields */}
          <Input label="Username" value={username} onChange={setUsername} />
          <Input label="Email Address" type="email" value={email} onChange={setEmail} />
          <Input label="Password" type="password" value={password} onChange={setPassword} />
          <Input label="Age" type="number" value={age} onChange={setAge} />

          {/* Role Selector */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-400">Role</label>
            <select
              required
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-gray-100"
            >
              <option value="">Select role</option>
              <option value="Student">Student</option>
              <option value="Mentor">Mentor</option>
            </select>
          </div>

          {/* Institution (common) */}
          <Input label="Institution Name" value={institution} onChange={setInstitution} />

          {/* Role-specific fields */}
          {role === "Student" && (
            <Input label="Grade / Year" value={studentGrade} onChange={setStudentGrade} />
          )}

          {role === "Mentor" && (
            <Input label="Area of Expertise" value={mentorExpertise} onChange={setMentorExpertise} />
          )}

          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-md text-white font-semibold hover:from-pink-500 hover:to-purple-600 transition disabled:opacity-50"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500">
          Already have an account?{" "}
          <button
            className="text-purple-400 font-semibold hover:underline"
            onClick={() => navigate("/login")}
          >
            Log In
          </button>
        </p>
      </div>
    </div>
  );
};

const Input = ({ label, type = "text", value, onChange }) => (
  <div>
    <label className="block mb-2 text-sm font-medium text-gray-400">{label}</label>
    <input
      type={type}
      required
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={`Enter your ${label.toLowerCase()}`}
      className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-purple-500 text-gray-100"
    />
  </div>
);

export default Signup;
