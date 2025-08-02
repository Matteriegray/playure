'use client'
import React from 'react'
import { FaPlay } from 'react-icons/fa'
import Link from 'next/link'

const HeroSection = () => {
  const stats = [
    { count: '10K+', label: 'Active Athletes', color: 'text-yellow-400' },
    { count: '500+', label: 'Competitions', color: 'text-pink-400' },
    { count: '50+', label: 'Sports', color: 'text-green-400' },
  ];

  return (
    <section className="relative max-h-screen bg-[url('/main-bg.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60  z-0" />

      {/* Top Nav */}
      <div className="relative z-10 flex justify-between items-center px-8 py-6 max-w-7xl mx-auto bg">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="logo" className="w-20 object-contain" />
          {/* <h2 className="text-white text-2xl font-bold tracking-wide">Playure</h2> */}
        </div>

        {/* Nav Actions */}
        <div className="flex gap-4">
          <Link href="/login">
            <button className="text-white font-medium border border-white/40 px-5 py-2 rounded-full hover:bg-white hover:text-black transition duration-200">
              Log In
            </button>
          </Link>
          <Link href="/signup">
            <button className="bg-gradient-to-r from-yellow-400 to-pink-500 text-black font-semibold px-6 py-2 rounded-full shadow-md hover:brightness-110 transition duration-200">
              Register Now
            </button>
          </Link>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24 sm:py-32 max-w-5xl mx-auto">
        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight drop-shadow-md">
          BUILDING THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500">FUTURE</span><br />
          FOR SPORTS PLAYERS
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl mt-6 max-w-2xl">
          One platform to elevate your sports career. Discover, connect, compete — all in one place.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/signup">
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition">
              Get Started →
            </button>
          </Link>
          <button className="bg-white/10 border border-white/30 text-white font-medium px-5 py-3 rounded-full flex items-center gap-2 hover:bg-white/20 transition">
            <FaPlay className="text-sm" />
            Watch Demo
          </button>
        </div>

        {/* Stats Section */}
        <div className="mt-16 flex flex-wrap justify-center gap-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.count}</p>
              <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
