"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { UsersIcon, CurrencyDollarIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

export default function Home() {
  // Animated counters
  const [communities, setCommunities] = useState(0);
  const [funds, setFunds] = useState(0);
  const [volunteers, setVolunteers] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 100;
    const intervalTime = duration / steps;

    let c = 0,
      f = 0,
      v = 0;

    const interval = setInterval(() => {
      c += 150 / steps;
      f += 1200000 / steps;
      v += 300 / steps;

      setCommunities(Math.min(Math.round(c), 150));
      setFunds(Math.min(Math.round(f), 1200000));
      setVolunteers(Math.min(Math.round(v), 300));

      if (c >= 150 && f >= 1200000 && v >= 300) clearInterval(interval);
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-gray-900 text-white min-h-screen">

      {/* Header */}
      <header className="w-full fixed top-0 left-0 z-50 border-0 shadow-none">
        {/* Background image overlay */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/kiddiekid.png"
            alt="Background"
            fill
            className="object-cover"
          />
          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-md"></div>
        </div>

        <nav className="relative max-w-7xl mx-auto flex justify-between items-center px-8 py-3">
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Image
              src="/hexalogo2.png"
              alt="Hexaprime Logo"
              width={160}
              height={50}
              className="block object-contain cursor-pointer"
            />
          </div>

          {/* Menu Items */}
          <ul className="hidden md:flex items-center text-white/90 font-medium ml-8">
            <li className="flex items-center">
              <span className="hover:text-purple-400 cursor-pointer transition">Home</span>
              <span className="mx-2">|</span>
            </li>
            <li className="flex items-center">
              <span className="hover:text-purple-400 cursor-pointer transition">Social Responsibility</span>
              <span className="mx-2">|</span>
            </li>
            <li className="flex items-center">
              <span className="hover:text-purple-400 cursor-pointer transition">About Us</span>
              <span className="mx-2">|</span>
            </li>
            <li>
              <span className="px-5 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition cursor-pointer shadow-md">
                Sign up
              </span>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <div className="md:hidden text-white cursor-pointer text-2xl">
            ☰
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Remove background image since header already covers */}
        {/* Overlay content */}
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-purple-600">
            Sharing Care, Beyond the line with Hexaprime!
          </h1>
          <p className="mt-4 max-w-2xl text-white/90">
            At Hexaprime Inc., we believe that hope should never be out of reach.
            We are a charity sweepstakes organization dedicated to supporting communities on the brink of — or recovering from — natural calamities.
          </p>
        </div>
      </section>


      {/* Mission Section */}
      <section className="py-16 px-4 md:px-16 bg-gray-800 text-white">
        <h2 className="text-3xl font-bold text-purple-600 mb-6">Our Mission</h2>
        <p className="max-w-3xl mb-4">
          To provide rapid, effective, and compassionate relief for communities facing disasters...
        </p>
        <p className="max-w-3xl">
          Your contribution supports emergency response, disaster relief, and long-term recovery programs...
        </p>
      </section>

      {/* Widgets Section */}
      <section className="py-16 px-4 md:px-16 bg-gray-900">
        <h2 className="text-3xl font-bold text-purple-600 text-center mb-12">Hexaprime Highlights</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Communities */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 flex items-center gap-4">
            <div className="p-4 bg-purple-600 rounded-full">
              <UsersIcon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Communities Supported</h3>
              <p className="text-3xl font-bold text-purple-500">{communities}+</p>
              <p className="mt-1 text-white/70 text-sm">Across multiple regions facing natural disasters.</p>
            </div>
          </div>

          {/* Funds */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 flex items-center gap-4">
            <div className="p-4 bg-purple-600 rounded-full">
              <CurrencyDollarIcon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Funds Distributed</h3>
              <p className="text-3xl font-bold text-purple-500">${(funds / 1000).toLocaleString()}K</p>
              <p className="mt-1 text-white/70 text-sm">Allocated directly to emergency relief and recovery programs.</p>
            </div>
          </div>

          {/* Volunteers */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 flex items-center gap-4">
            <div className="p-4 bg-purple-600 rounded-full">
              <HandRaisedIcon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Volunteers Engaged</h3>
              <p className="text-3xl font-bold text-purple-500">{volunteers}+</p>
              <p className="mt-1 text-white/70 text-sm">Working with local partners to maximize impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-16 px-4 md:px-16 bg-gray-800">
        <h2 className="text-3xl font-bold text-purple-600 text-center mb-12">Our Pillars of Responsibility</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Disaster Relief & Emergency Aid</h3>
            <p>We channel funds directly to communities facing natural disasters...</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Community Rebuilding Projects</h3>
            <p>Supporting long-term recovery efforts such as rebuilding homes and infrastructure...</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Partnership & Collaboration</h3>
            <p>We partner with local organizations, volunteers, and agencies to reach those in need...</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-16 bg-gray-800 text-center text-white">
        <p>© 2025 Hexaprime Inc. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
