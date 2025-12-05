"use client";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function ContactUs() {
  return (
    <main className={`${roboto.className} bg-gray-900 text-white min-h-screen`}>
      {/* Header */}
      <header className="py-8 px-4 md:px-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-purple-500 mb-4">Contact Us</h1>
        <p className="max-w-3xl mx-auto text-white/80">
          At Hexaprime Inc., we are always happy to hear from you. Reach out for inquiries, support, or partnership opportunities.
        </p>
      </header>

      {/* Contact Details */}
      <section className="py-16 px-4 md:px-16 max-w-3xl mx-auto space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Company Address</h2>
          <p>123 Charity Lane, Hope City, Philippines</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Email</h2>
          <p>contact@hexaprime.com</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Phone</h2>
          <p>+63 912 345 6789</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Social Media</h2>
          <p>Facebook / Twitter / Instagram: @hexaprime</p>
        </div>
      </section>
    </main>
  );
}
