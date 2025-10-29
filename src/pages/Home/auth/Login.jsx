import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("buyer");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("Logging in as:", role, email);
      if (role === "agent") navigate("/agent-dashboard");
      else navigate("/buyer-dashboard");
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fff8ec] to-[#ffe3c2]">
      <div className="bg-white/40 backdrop-blur-md border border-white/30 shadow-2xl rounded-2xl p-10 w-full max-w-md z-10">
        <h2 className="text-3xl font-extrabold text-center text-[#ed7d31] mb-8">
          Welcome Back
        </h2>

        {/* Role Selector */}
        <div className="flex justify-center mb-6">
          <div className="flex bg-white/40 rounded-full shadow-inner overflow-hidden">
            <button
              type="button"
              onClick={() => setRole("buyer")}
              className={`px-5 py-2 font-semibold transition-all ${
                role === "buyer"
                  ? "bg-[#ed7d31] text-white"
                  : "text-gray-800 hover:text-[#ed7d31]"
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

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full text-gray-700 border border-gray-300/60 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#ed7d31]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full text-gray-700 border border-gray-300/60 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#ed7d31]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          <button
            type="submit"
            className="w-full bg-[#ed7d31] text-white font-semibold py-3 rounded-md shadow-lg hover:bg-[#d96b1f] transition-all"
          >
            Log In as {role.charAt(0).toUpperCase() + role.slice(1)}
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
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-[#ed7d31] font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
