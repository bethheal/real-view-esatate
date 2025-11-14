// App.jsx
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import RootLayout from "./globalComponents/RootLayout";
import AuthLayout from "./globalComponents/AuthLayout";
import BuyerLayout from "./layouts/BuyerLayout";
import AgentLayout from "./layouts/AgentLayout";

import Home from "./pages/Home/Home";
import Contact from "./pages/Home/Contact";
import Services from "./pages/Home/Services";
import Properties from "./pages/Home/Properties";
import FAQ from "./pages/Home/FAQ";
import BuyerDashboard from "./pages/Buyer/Dashboard";
import AgentDashboard from "./pages/Agent/Dashboard";

// Lazy load auth pages
const Login = React.lazy(() => import("./pages/Home/auth/Login"));
const SignUp = React.lazy(() => import("./pages/Home/auth/SignUp"));

// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
      <Routes>
        {/* Public routes with RootLayout */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="properties" element={<Properties />} />
          <Route path="contact" element={<Contact />} />
          <Route path="help-center" element={<FAQ />} />
        </Route>

        {/* Auth routes (no Navbar/Footer) */}
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        {/* Buyer dashboard */}
        <Route element={<BuyerLayout />}>
          <Route path="buyer-dashboard" element={<BuyerDashboard />} />
        </Route>

        {/* Agent dashboard */}
        <Route element={<AgentLayout />}>
          <Route path="agent-dashboard" element={<AgentDashboard />} />
        </Route>
      </Routes>

      {/* Global Toast Notifications */}
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
