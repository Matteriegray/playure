"use client";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { authDataContext } from "@/app/context/AuthContext";
import { UserDataContext } from "@/app/context/UserContext";
import {
  FaUser,
  FaEnvelope,
  FaHashtag,
  FaLock,
  FaFutbol,
} from "react-icons/fa";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const AthleteSignupPage = () => {
  const { userData, setUserData } = useContext(UserDataContext);
  const { serverUrl } = useContext(authDataContext);
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [disableSignup, setDisableSignup] = useState(false);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sport, setSport] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const sportsOptions = [
    "Football",
    "Basketball",
    "Cricket",
    "Badminton",
    "Tennis",
    "Volleyball",
    "Athletics",
    "Swimming",
    "Table Tennis",
    "Hockey",
    "Martial Arts",
    "Esports",
  ];

  useEffect(() => {
    if (userData) router.push("/home");
  }, [userData]);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (disableSignup) return;

    // Basic client-side validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      setDisableSignup(true);
      const res = await axios.post(
        `${serverUrl}/api/auth/signup/athlete`,
        { firstname, lastname, username, email, password, sport },
        { withCredentials: true }
      );
      setSuccess(res.data.message);
      setError("");
      setFirstname("");
      setLastname("");
      setUsername("");
      setEmail("");
      setPassword("");
      setSport("");
      setUserData(res.data);
      router.push("/home");
    } catch (err) {
      setError(err?.response?.data?.message || "Signup failed");
    } finally {
      setDisableSignup(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-400 via-indigo-100 to-white px-4 py-8">
      <motion.form
        onSubmit={handleSignup}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="backdrop-blur-md bg-white/30 border border-white/40 shadow-2xl rounded-3xl w-full max-w-lg p-8 space-y-4"
      >
        <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
          Athlete Sign Up
        </h2>

        {/* First Name */}
        <div className="relative">
          <FaUser className="absolute left-3 top-4 text-gray-400" />
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            className="w-full pl-10 p-3 rounded-lg bg-white/60 border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
        </div>

        {/* Last Name */}
        <div className="relative">
          <FaUser className="absolute left-3 top-4 text-gray-400" />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            className="w-full pl-10 p-3 rounded-lg bg-white/60 border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </div>

        {/* Username */}
        <div className="relative">
          <FaHashtag className="absolute left-3 top-4 text-gray-400" />
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full pl-10 p-3 rounded-lg bg-white/60 border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        {/* Email */}
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-4 text-gray-400" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full pl-10 p-3 rounded-lg bg-white/60 border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Sport Dropdown */}
        <div className="relative">
          <FaFutbol className="absolute left-3 top-4 text-gray-400" />
          <select
            name="sport"
            value={sport}
            onChange={(e) => setSport(e.target.value)}
            required
            className="text-gray-500 appearance-none w-full pl-9 pr-4 py-3 rounded-lg bg-white/60 border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition"
          >
            <option value="" disabled >Select your sport</option>
            {sportsOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-blue-600 transition"> ▼</div>
        </div>

        {/* Password */}
        <div className="relative">
          <FaLock className="absolute left-3 top-4 text-gray-400" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="w-full pl-10 pr-12 p-3 rounded-lg bg-white/60 border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {showPassword ? (
            <IoIosEye
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-4 right-3 text-gray-700 cursor-pointer text-xl"
            />
          ) : (
            <IoIosEyeOff
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-4 right-3 text-gray-700 cursor-pointer text-xl"
            />
          )}
        </div>

        {/* Error & Success */}
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}
        {disableSignup && <p className="text-gray-500 text-center">Please wait...</p>}

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-bold rounded-xl text-lg hover:scale-[1.02] transition-transform shadow-md"
          disabled={disableSignup}
        >
          Sign Up
        </button>

        {/* Links */}
        <Link
          href="/signup/coach"
          className="block text-center text-indigo-700 hover:underline text-sm font-medium transition-all duration-200 hover:tracking-wide"
        >
          Sign up as a Coach / Organization
        </Link>

        <p className="text-sm text-center text-gray-700">
          Already registered?{" "}
          <Link
            href="/login"
            className="text-blue-700 font-semibold hover:underline transition"
          >
            Login
          </Link>
        </p>
      </motion.form>
    </div>
  );
};

export default AthleteSignupPage;