// import React, { createContext, useContext, useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { api } from "../config/axios"; 

// // 1️⃣ Create the Auth Context
// const AuthContext = createContext();

// // 2️⃣ Create the Auth Provider Component
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   // 3️⃣ Check for existing token on page load
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       api
//         .get("/user/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         })
//         .then((res) => setUser(res.data.user))
//         .catch(() => logout());
//     }
//     setLoading(false);
//   }, []);

//   // 4️⃣ Login function
//   const login = async (email, password) => {
//     try {
//       const res = await api.post("/auth/login", { email, password });
//       localStorage.setItem("token", res.data.token); // ✅ fix quotes
//       setUser(res.data.user);
//       navigate("/");
//     } catch (error) {
//       throw new Error("Login failed");
//     }
//   };

//   // 5️⃣ Sign Up function
//   const signUp = async (formData) => {
//     try {
//       const res = await api.post("/auth/register", formData);
//       localStorage.setItem("token", res.data.token); // ✅ fix quotes
//       setUser(res.data.user);
//       navigate("/login"); // ✅ redirect to login after signup
//     } catch (error) {
//       throw new Error("Registration failed");
//     }
//   };

//   // 6️⃣ Logout function
//   const logout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     navigate("/login");
//   };

//   // 7️⃣ Provide context values
//   return (
//     <AuthContext.Provider value={{ user, loading, login, signUp, logout }}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };

// // 8️⃣ Custom hook for using auth
// export const useAuth = () => {
//   return useContext(AuthContext); // ✅ must return context
// };
