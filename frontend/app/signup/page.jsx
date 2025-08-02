"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaRunning, FaChalkboardTeacher } from "react-icons/fa";

const SignUpSelectionPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-400 via-indigo-100 to-white px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="backdrop-blur-md bg-white/30 border border-white/40 shadow-2xl rounded-3xl w-full max-w-2xl p-8 space-y-6"
      >
        <div className="text-center">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-700 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
            Join the Movement
          </h1>
          <p className="text-gray-700 text-sm font-medium mt-2">
            Choose your path and start your journey with us 🚀
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <div
            onClick={() => router.push("/signup/athlete")}
            className="cursor-pointer bg-white/60 hover:bg-blue-100 border border-blue-200 p-6 rounded-xl shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl flex flex-col items-center text-center"
          >
            <FaRunning className="text-5xl text-blue-600 mb-3" />
            <h2 className="text-lg font-bold text-blue-700 mb-1">Athlete</h2>
            <p className="text-sm text-gray-600">
              Track your training, showcase your stats, and elevate your performance.
            </p>
          </div>

          <div
            onClick={() => router.push("/signup/coach")}
            className="cursor-pointer bg-white/60 hover:bg-green-100 border border-green-200 p-6 rounded-xl shadow-md transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl flex flex-col items-center text-center"
          >
            <FaChalkboardTeacher className="text-5xl text-green-600 mb-3" />
            <h2 className="text-lg font-bold text-green-700 mb-1">Coach / Organization</h2>
            <p className="text-sm text-gray-600">
              Manage athletes, create programs, and build your coaching brand.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUpSelectionPage;
