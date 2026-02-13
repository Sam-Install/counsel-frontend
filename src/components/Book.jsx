import React from "react";
import one from "../assets/h1.jpg";

const Book = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      
      {/* Background */}
      <img
        src={one}
        alt="Book session"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug mb-5">
            Book Your Session <br className="hidden sm:block" />
            With Us
          </h1>

          <p className="text-gray-200 text-base sm:text-lg mb-8">
            Start your healing journey today. Book an online or in-person
            therapy session at your convenience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/254757854308"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-lg text-white font-semibold shadow-lg"
            >
              WhatsApp Us
            </a>

            <a
              href="/booking"
              className="bg-pink-500 hover:bg-pink-600 transition px-8 py-4 rounded-lg text-white font-semibold shadow-lg"
            >
              Book a Session
            </a>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Book;
