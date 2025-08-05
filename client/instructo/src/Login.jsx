// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useAuth } from "./App"; // Adjust if your context is in a separate file

// const Login = () => {
//   const navigate = useNavigate();
//   const { login } = useAuth();
// login(userRoleFromBackend, tokenFromBackend);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const response = await axios.post("http://localhost:3001/api/login", {
//         email,
//         password,
//       });

//       alert(`Welcome ${response.data.email}! You are logged in.`);
      
//       // Pass role from backend to login function
//       login(response.data.role);  // <-- UPDATED here
//        localStorage.setItem("token", response.data.token);
//       navigate("/"); // Redirect to home
//     } catch (err) {
//       if (err.response && err.response.data?.message) {
//         setError(err.response.data.message);
//       } else {
//         setError("Login failed. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-4">
//       <div className="max-w-md w-full bg-gray-900 rounded-xl shadow-lg p-8 text-gray-300">
//         <h2 className="text-3xl font-extrabold text-purple-400 mb-6 text-center">
//           Welcome Back
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-400">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="you@example.com"
//               className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-100"
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-400">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="••••••••"
//               className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-100"
//             />
//           </div>

//           {error && <p className="text-red-500 text-sm text-center">{error}</p>}

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-md text-white font-semibold hover:from-pink-500 hover:to-purple-600 transition disabled:opacity-50"
//           >
//             {loading ? "Logging in..." : "Log In"}
//           </button>
//         </form>

//         <p className="mt-6 text-center text-gray-500">
//           Don't have an account?{" "}
//           <button
//             className="text-purple-400 font-semibold hover:underline"
//             onClick={() => navigate("/signup")}
//           >
//             Sign Up
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./App"; // Adjust if your context is elsewhere

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Gets login method from context

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post("https://nextgen-instructo-1.onrender.com/api/login", {
        email,
        password,
      });

      const { token, role, email: userEmail } = response.data;

      // Call login from context with role and token
      login(role, token);

      // Store token in localStorage
      localStorage.setItem("token", token);

      // Optional: show welcome message
      alert(`Welcome ${userEmail}! You are logged in as ${role}.`);

      navigate("/"); // Redirect after successful login
    } catch (err) {
      if (err.response && err.response.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-4">
      <div className="max-w-md w-full bg-gray-900 rounded-xl shadow-lg p-8 text-gray-300">
        <h2 className="text-3xl font-extrabold text-purple-400 mb-6 text-center">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-400">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-100"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-400">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-100"
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-md text-white font-semibold hover:from-pink-500 hover:to-purple-600 transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500">
          Don't have an account?{" "}
          <button
            className="text-purple-400 font-semibold hover:underline"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
