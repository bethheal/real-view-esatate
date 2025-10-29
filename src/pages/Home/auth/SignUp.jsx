import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import { useAuth } from "../auth/AuthProvider";
import { Eye, EyeOff } from "lucide-react"; 

export default function SignupPage() {
  // const { signup } = useAuth();
   const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [role, setRole] = useState("buyer");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // await signup({ ...formData, role });
      console.log("Signing up as:", role, formData);

      if (role === "agent") {
        navigate("/agent-dashboard");
      } else {
        navigate("/buyer-dashboard");
      }
    } catch {
      alert("Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fff8ec] to-[#ffe3c2]">
      <div className="bg-white/40 backdrop-blur-md border border-white/30 shadow-2xl rounded-2xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-[#ed7d31] mb-8">
          Create Your Account         </h2>

        {/* Role Selector */}
        <div className="flex justify-center mb-6">
          <div className="flex bg-white/40 rounded-full shadow-inner overflow-hidden">
            <button
              type="button"
              onClick={() => setRole("buyer")}
              className={`px-5 py-2 font-semibold transition-all ${
                role === "buyer"
                  ? "bg-[#ed7d31] text-white"
                  : "text-gray-700 hover:text-[#ed7d31]"
              }`}
            >
              Buyer
            </button>
            <button
              type="button"
              onClick={() => setRole("agent")}
              className={`px-5 py-2 font-semibold transition-all ${
                role === "agent"
                  ? "bg-[#ed7d31] text-white"
                  : "text-gray-700 hover:text-[#ed7d31]"
              }`}
            >
              Agent
            </button>
          </div>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSignup} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full border text-gray-700 border-gray-300/60 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#ed7d31]"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full border text-gray-700 border-gray-300/60  rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#ed7d31]"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full text-gray-700  border border-gray-300/60 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#ed7d31]"
            value={formData.phone}
            onChange={handleChange}
            required
          />
      <div className="relative">
          <input
          type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="w-full text-gray-700 border border-gray-300/60  rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#ed7d31]"
            value={formData.password}
            onChange={handleChange}
            required
          />
           <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-3 text-gray-500 hover:text-[#ed7d31] transition"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
         {/* Confirm Password Field */}
      <div className="relative">
        <input
          type={showConfirmPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirm password"
          className="w-full text-gray-700 border border-gray-300/60 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#ed7d31]"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <button
          type="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="absolute right-3 top-3 text-gray-500 hover:text-[#ed7d31] transition"
        >
          {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

          <button
            type="submit"
            className="w-full bg-[#ed7d31] text-white font-semibold py-3 rounded-md shadow-lg hover:bg-[#d96b1f] transition-all"
          >
            Sign Up as {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        </form>


       {/* Divider + Socials in one line */}
<div className="flex items-center justify-center my-6 w-full">
  {/* Left Line */}
  <div className="flex-grow border-t border-gray-300"></div>

  {/* Google */}
  <button className="flex items-center justify-center mx-3 rounded-full p-1 transition">
    <img
      src="https://www.svgrepo.com/show/355037/google.svg"
      alt="Google"
      className="w-5 h-5"
    />
  </button>

  {/* "or" text */}
  <span className="text-gray-500 text-sm mx-3">or</span>

  {/* Facebook */}
  <button className="flex items-center justify-center mx-3 rounded-full p-1 transition">
    <img
      src="https://www.svgrepo.com/show/475647/facebook-color.svg"
      alt="Facebook"
      className="w-5 h-5"
    />
  </button>

  {/* Right Line */}
  <div className="flex-grow border-t border-gray-300"></div>
</div>

        <p className="text-sm text-gray-700 text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#ed7d31] font-semibold hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
