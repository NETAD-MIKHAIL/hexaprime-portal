"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { UsersIcon, CurrencyDollarIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const [communities, setCommunities] = useState(0);
  const [funds, setFunds] = useState(0);
  const [volunteers, setVolunteers] = useState(0);

  // Navbar scroll state
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const duration = 2000;
    const steps = 100;
    const intervalTime = duration / steps;

    let c = 0, f = 0, v = 0;

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

  // Scroll listener for navbar shrink
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-gray-900 shadow-lg py-2" : "bg-transparent py-6"
        }`}
      >
        <nav className="relative max-w-7xl mx-auto flex justify-between items-center px-8 transition-all duration-300">
          {/* LOGO */}
          <div className="flex-shrink-0 transition-all duration-300">
            <Image
              src="/hexalogo2.png"
              alt="Hexaprime Logo"
              width={isScrolled ? 120 : 170}   // shrink logo size
              height={isScrolled ? 40 : 60}
              className="block object-contain cursor-pointer transition-all duration-300"
            />
          </div>

          {/* Menu Items */}
          <ul className="hidden md:flex items-center text-white/90 font-medium ml-8">
            <li className="flex items-center">
              <span className="hover:text-purple-400 cursor-pointer transition">Home</span>
              <span className="mx-2"></span>
            </li>
            <li className="flex items-center">
              <span className="hover:text-purple-400 cursor-pointer transition">Social Responsibility</span>
              <span className="mx-2"></span>
            </li>
            <li className="flex items-center">
              <span className="hover:text-purple-400 cursor-pointer transition">About Us</span>
              <span className="mx-2"></span>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <div className="md:hidden text-white cursor-pointer text-2xl">☰</div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
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

      {/* ...rest of your sections unchanged */}
    </main>
  );
}
