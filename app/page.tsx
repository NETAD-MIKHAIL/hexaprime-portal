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
    <main id="top" className={`${roboto.className} bg-black text-white min-h-screen`}>
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
                className="cursor-pointer transition px-3 py-2 hover:text-gray-400"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Home
              </span>
            </li>
            <li className="flex items-center ml-3">
              <span className="cursor-pointer transition px-3 py-2 hover:text-gray-400">
                Social Responsibility
              </span>
            </li>
            <li className="flex items-center ml-3">
              <a
                href="/contact_us"
                className="cursor-pointer transition px-3 py-2 hover:text-gray-400"
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
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 py-5 max-w-7xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-snug sm:leading-tight">
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
        <h2 className="max-w-6xl text-center text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-snug sm:leading-tight">
          Our Mission
        </h2>
        <p className="max-w-7xl mt-6 text-white/80 text-sm sm:text-base md:text-lg leading-snug font-light">
          To provide rapid, effective, and compassionate relief for communities facing disasters, ensuring they receive the resources and support needed to rebuild and thrive. Your contribution supports emergency response, disaster relief, and long-term recovery programs. We give back directly to affected communities, ensuring transparency and real results.
        </p>
      </section>

{/* Together, We Make Hope Happen */}
<section className="relative w-full min-h-screen flex items-end justify-start">
  <Image
    src="/image_2.png"
    alt="Hexaprime Background"
    fill
    className="object-cover w-full h-full"
    priority
  />
  <div className="absolute inset-0 bg-black/50"></div>
  <div className="relative z-10 flex flex-col items-start justify-end text-left px-6 py-10 max-w-7xl">
    <h2 className="max-w-6xl text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-snug sm:leading-tight">
      Together, We Make Hope Happen
    </h2>
    <p className="max-w-7xl mt-4 text-white/80 text-sm sm:text-base md:text-lg leading-snug font-light">
      Join our mission today. Participate, donate, and be a beacon of support for those in need
    </p>
  </div>
</section>

      
      {/* Pillars Section */}
      <section className="py-16 px-4 md:px-16 bg-black">
        <div className="flex justify-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-snug sm:leading-tight">
            Our Pillars of Responsibility
          </h2>
        </div>
<div className="grid md:grid-cols-3 gap-8">
  <div className="bg-gray-900 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
    <h3 className="text-xl font-semibold mb-2">Disaster Relief & Emergency Aid</h3>
    <p className="max-w-7xl mt-6 text-white/80 text-sm sm:text-base md:text-lg leading-snug font-light">
      We channel funds directly to communities facing natural disasters—floods, earthquakes, storms, and more. Immediate relief includes food, water, shelter, and emergency essentials.
    </p>
  </div>

  <div className="bg-gray-900 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
    <h3 className="text-xl font-semibold mb-2">Community Rebuilding Projects</h3>
    <p className="max-w-7xl mt-6 text-white/80 text-sm sm:text-base md:text-lg leading-snug font-light">
      We don’t stop at immediate aid. HexaPrime supports long-term recovery efforts such as rebuilding homes, restoring infrastructure, and providing livelihood support.
    </p>
  </div>

  <div className="bg-gray-900 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
    <h3 className="text-xl font-semibold mb-2">Partnership & Collaboration</h3>
    <p className="max-w-7xl mt-6 text-white/80 text-sm sm:text-base md:text-lg leading-snug font-light">
      We partner with local organizations, volunteers, and agencies to ensure aid is delivered efficiently and reaches those who need it most.
    </p>
  </div>
</div>

      </section>
      
{/* Committed to Community Resilience */}
<section className="relative w-full min-h-screen">
  <Image
    src="/image_3.png"
    alt="Hexaprime Background"
    fill
    className="object-cover w-full h-full"
    priority
  />
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Text block positioned bottom-right */}
  <div className="absolute bottom-10 right-10 z-10 w-full max-w-3xl ml-auto text-right">
    <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-snug sm:leading-tight">
      Committed to Community Resilience
    </h2>
    <p className="mt-6 text-white/80 text-sm sm:text-base md:text-lg leading-snug font-light">
      Hexaprime Inc. operates with the belief that giving should create lasting change. 
      Our social responsibility practices reflect our dedication to ethical action, 
      transparent operations, and community empowerment.
    </p>
  </div>
</section>
      
      {/* A Culture of Giving */}
      <section className="flex flex-col items-center justify-center text-center min-h-fit py-5 px-4 md:px-16 bg-black text-white">
        <h2 className="max-w-6xl text-center text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-snug sm:leading-tight">
          A Culture of Giving
        </h2>
        <p className="max-w-7xl mt-6 text-white/80 text-sm sm:text-base md:text-lg leading-snug font-light">
          Through innovation and compassion, we nurture a global community that stands together in times of crisis.
        </p>
      </section>
     {/* new section*/}
      <section className="relative w-full min-h-screen flex items-center justify-center">
        <Image
          src="/image_4.png"
          alt="Hexaprime Background"
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-5 max-w-7xl">
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-16 bg-black text-center text-white">
        <p className="max-w-7xl mt-6 mx-auto text-white/80 text-sm sm:text-base md:text-lg leading-snug font-light text-center">
          © 2025 Hexaprime Inc. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
