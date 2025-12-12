"use client";

import { Roboto } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";
import { UsersIcon, CurrencyDollarIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["200", "500", "700"],
});

export default function Home() {
  const [communities, setCommunities] = useState(0);
  const [funds, setFunds] = useState(0);
  const [volunteers, setVolunteers] = useState(0);
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main id="top" className={`${roboto.className} bg-gray-900 text-white min-h-screen`}>
      {/* Header */}
      <header
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-gray-900 shadow-lg py-2" : "bg-transparent py-6"
        }`}
      >
        <nav className="relative max-w-8xl mx-auto flex justify-between items-center px-8 transition-all duration-300">
          <div className="flex-shrink-0 transition-all duration-300">
            <Image
              src="/hexalogo2.png"
              alt="Hexaprime Logo"
              width={isScrolled ? 120 : 170}
              height={isScrolled ? 40 : 60}
              className="block object-contain cursor-pointer transition-all duration-300"
            />
          </div>
          <ul className="hidden md:flex items-center text-white/90 font-medium ml-8">
            <li className="flex items-center">
              <span
                className="cursor-pointer transition px-3 py-2 rounded-lg hover:bg-gray-700 hover:text-white"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Home
              </span>
            </li>
            <li className="flex items-center ml-3">
              <span className="cursor-pointer transition px-3 py-2 rounded-lg hover:bg-gray-700 hover:text-white">
                Social Responsibility
              </span>
            </li>
            <li className="flex items-center ml-3">
              <a
                href="/contact_us"
                className="cursor-pointer transition px-3 py-2 rounded-lg hover:bg-gray-700 hover:text-white"
              >
                Contact Us
              </a>
            </li>
          </ul>
          <div className="md:hidden text-white cursor-pointer text-2xl">☰</div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center">
        <Image
          src="/kiddiekid.png"
          alt="Hexaprime Background"
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 py-5 max-w-7xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent leading-snug sm:leading-tight">
            Sharing Care, Beyond the line with Hexaprime!
          </h1>
          <p className="mt-6 text-white/80 text-sm sm:text-base md:text-lg leading-snug font-light">
            “At Hexaprime Inc., we believe that hope should never be out of reach. 
            We are a charity sweepstakes organization dedicated to supporting communities on the brink of — or recovering from — natural calamities. 
            Through engaging sweepstakes, generous donors, and community-driven initiatives, we transform fun participation into meaningful impact.”
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="flex flex-col items-center justify-center text-center min-h-fit py-5 px-4 md:px-16 bg-black text-white">
        <h2 className="max-w-6xl text-center text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent leading-snug sm:leading-tight">
          Our Mission
        </h2>
        <p className="max-w-7xl mt-6 text-white/80 text-sm sm:text-base md:text-lg leading-snug font-light">
          To provide rapid, effective, and compassionate relief for communities facing disasters, ensuring they receive the resources and support needed to rebuild and thrive. Your contribution supports emergency response, disaster relief, and long-term recovery programs. We give back directly to affected communities, ensuring transparency and real results.
        </p>
      </section>

      {/* Together, We Make Hope Happen */}
      <section className="relative w-full min-h-screen flex items-center justify-center">
        <Image
          src="/image_2.png"
          alt="Hexaprime Background"
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-5 max-w-7xl">
          <h2 className="max-w-6xl text-center text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent leading-snug sm:leading-tight">
            Together, We Make Hope Happen
          </h2>
          <p className="max-w-7xl mt-6 text-white/80 text-sm sm:text-base md:text-lg leading-snug font-light">
            Join our mission today. Participate, donate, and be a beacon of support for those in need
          </p>
        </div>
      </section>

      {/* Widgets Section */}
      <section className="py-16 px-4 md:px-16 bg-gray-900">
        <h2 className="text-3xl font-bold text-purple-600 text-center mb-12">Hexaprime Highlights</h2>
        <div className="grid md:grid-cols-3 gap-8">
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
