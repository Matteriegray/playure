"use client";
import Link from "next/link";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { authDataContext } from "../context/AuthContext";
import { UserDataContext } from "../context/UserContext";
import { useRouter } from "next/navigation";

import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

const LoginPage = () => {
  const { serverUrl } = useContext(authDataContext);
  const { userData, setUserData } = useContext(UserDataContext);
  const router = useRouter();

  useEffect(() => {
    if (userData == null) return;
    if (userData) router.push("/home");
  }, [userData]);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [disableLogin, setDisableLogin] = useState(false);
  let [showPassword, setShowPassword] = useState(false)


  const handlelogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    try {
      setDisableLogin(true);
      const res = await axios.post(
        `${serverUrl}/api/auth/login`,
        { email, password },
        { withCredentials: true }
      );

      setUserData(res.data);
      setSuccess("Login successful!");
      setEmail("");
      setPassword("");
      router.push("/home");
    } catch (err) {
      setError(err?.response?.data?.message || "Login failed");
    } finally {
      setDisableLogin(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0e7ff] via-[#f8fafc] to-[#e0f2fe] flex items-center justify-center px-4 py-12">
      <div className="grid md:grid-cols-2 w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Login Form */}
        <div className="p-10 md:p-14 space-y-8">
          <div className="flex items-center gap-3 text-blue-700">
            <FaUserCircle className="text-4xl" />
            <h2 className="text-3xl font-bold">Welcome Back</h2>
          </div>

          <form onSubmit={handlelogin} className="space-y-6">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {showPassword ? (
                <IoIosEye className="text-gray-700 absolute top-3 right-3 cursor-pointer" size={24} onClick={() => setShowPassword(!showPassword)}/>
              ) : (
                <IoIosEyeOff className="text-gray-700 absolute top-3 right-3 cursor-pointer" size={24} onClick={() => setShowPassword(!showPassword)}/>
              )}
            </div>

            {error && <p className="text-center text-red-500">{error}</p>}
            {success && <p className="text-center text-green-500">{success}</p>}
            {disableLogin && <p className="text-center text-gray-500">Logging in...</p>}

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-xl font-medium shadow-md hover:bg-blue-700 transition duration-200"
              disabled={disableLogin}
            >
              Log In
            </button>
          </form>

          <p className="text-center text-gray-600 text-sm">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-blue-600 font-medium hover:underline">
              Sign up here
            </Link>
          </p>
        </div>

        {/* CTA Section */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-tr from-blue-100 to-blue-50 px-10 py-16 text-center">
          <h3 className="text-3xl font-extrabold text-blue-700 mb-4">
            Join the Future of Sports
          </h3>
          <p className="text-gray-700 mb-8 leading-relaxed max-w-sm">
            Unlock your potential. Train with elite coaches. Track your progress with precision.
          </p>
          <Link
            href="/signup"
            className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
