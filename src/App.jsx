import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { Suspense } from "react";
import "./App.css";
import RootLayout from "./globalComponents/RootLayout";
import AuthLayout from "./globalComponents/AuthLayout";
import Home from "./pages/Home/Home";
import Contact from "./pages/Home/Contact";
import Services from "./pages/Home/Services";
import Properties from "./pages/Home/Properties";
import FAQ from "./pages/Home/FAQ";
// import { AuthProvider } from "./pages/Home/auth/AuthProvider";

// Toastify imports
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = React.lazy(() => import("./pages/Home/auth/Login"));
const SignUp = React.lazy(() => import("./pages/Home/auth/SignUp"));

const router = createBrowserRouter([
  // Public routes (with Navbar + Footer)
  {
    path: "/",
    element: (
      // <AuthProvider>
      <RootLayout />
      // </AuthProvider>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "properties", element: <Properties /> },
      { path: "contact", element: <Contact /> },
      { path: "help-center", element: <FAQ /> },
    ],
  },

  // Auth routes (no Nav + Footer)
  {
    path: "/",
    element: (
      // <AuthProvider>
      <AuthLayout />
      // </AuthProvider>
    ),
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
      {/* Router Provider */}
      <RouterProvider router={router} />

      {/* ✅ Global Toast Notification Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </Suspense>
  );
}

export default App;
