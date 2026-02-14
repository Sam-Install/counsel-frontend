import React from "react";
import { motion } from "framer-motion";
import one from "../assets/h1.jpg";

const Book = () => {

  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const buttonVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.5 + i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
    
      <img
        src={one}
        alt="Book session"
        className="absolute inset-0 w-full h-full object-cover"
      />

      
      <div className="absolute inset-0 bg-black/50" />

  
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
      
          <motion.h1
            className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug mb-5"
            initial="hidden"
            animate="visible"
            variants={textVariant}
          >
            Book Your Session <br className="hidden sm:block" /> With Us
          </motion.h1>

          
          <motion.p
            className="text-gray-200 text-base sm:text-lg mb-8"
            initial="hidden"
            animate="visible"
            variants={textVariant}
            transition={{ delay: 0.2 }}
          >
            Start your healing journey today. Book an online or in-person
            therapy session at your convenience.
          </motion.p>

        
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://wa.me/254757854308"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-lg text-white font-semibold shadow-lg"
              custom={0}
              initial="hidden"
              animate="visible"
              variants={buttonVariant}
            >
              WhatsApp Us
            </motion.a>

            <motion.a
              href="/booking"
              className="bg-pink-500 hover:bg-pink-600 transition px-8 py-4 rounded-lg text-white font-semibold shadow-lg"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={buttonVariant}
            >
              Book a Session
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
