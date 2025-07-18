// import React, { useState, createContext, useContext } from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import HomePage from "./HomePage";
// import CoursesPage from "./CoursesPage";
// import CourseDetailsPage from "./CourseDetailsPage";
// import Login from "./Login";
// import Signup from "./Signup";
// import ProfilePage from "./ProfilePage";
// import AboutUsPage from "./AboutUsPage";
// import TeachersPage from "./TeachersPage";

// // Create Auth Context
// const AuthContext = createContext(null);
// export const useAuth = () => useContext(AuthContext);

// // Protect routes
// const ProtectedRoute = ({ children }) => {
//   const { isAuthenticated } = useAuth();
//   return isAuthenticated ? children : <Navigate to="/login" replace />;
// };

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [role, setRole] = useState(""); // "Student" or "Mentor"

//   // Update login to accept role argument
//   const login = (userRole) => {
//     setIsAuthenticated(true);
//     setRole(userRole); // store role after login
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//     setRole("");
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout, role }}>
//       <Router>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               isAuthenticated ? <HomePage /> : <Navigate to="/login" replace />
//             }
//           />
//           <Route
//             path="/courses"
//             element={
//               <ProtectedRoute>
//                 <CoursesPage />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/courses/:id"
//             element={
//               <ProtectedRoute>
//                 <CourseDetailsPage />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/profile"
//             element={
//               <ProtectedRoute>
//                 <ProfilePage />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/teachers"
//             element={
//               <ProtectedRoute>
//                 <TeachersPage />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/about"
//             element={
//               <ProtectedRoute>
//                 <AboutUsPage />
//               </ProtectedRoute>
//             }
//           />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="*" element={<Navigate to="/login" replace />} />
//         </Routes>
//       </Router>
//     </AuthContext.Provider>
//   );
// };

// export default App;


import React, { useState, useEffect, createContext, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import CoursesPage from "./CoursesPage";
import CourseDetailsPage from "./CourseDetailsPage";
import Login from "./Login";
import Signup from "./Signup";
import ProfilePage from "./ProfilePage";
import AboutUsPage from "./AboutUsPage";
import TeachersPage from "./TeachersPage";

// Create Auth Context
const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(""); // "Student" or "Mentor"

  // Read token from localStorage on first load
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("role");
    if (token) {
      setIsAuthenticated(true);
      setRole(userRole);
    }
  }, []);

  // Login function
  // const login = (userRole, token) => {
  //   localStorage.setItem("token", token);
  //   localStorage.setItem("role", userRole);
  //   setIsAuthenticated(true);
  //   setRole(userRole);
  // };
  const login = (userRole, token) => {
  setIsAuthenticated(true);
  setRole(userRole);
  localStorage.setItem("token", token);
};


  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsAuthenticated(false);
    setRole("");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, role }}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? <HomePage /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/courses"
            element={
              <ProtectedRoute>
                <CoursesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/courses/:id"
            element={
              <ProtectedRoute>
                <CourseDetailsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teachers"
            element={
              <ProtectedRoute>
                <TeachersPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <AboutUsPage />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
