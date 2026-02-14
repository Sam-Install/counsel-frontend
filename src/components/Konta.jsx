import React from "react";
import { motion } from "framer-motion";

const Konta = () => {

  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="my-24 px-4 sm:px-8 md:px-16 lg:px-24">

      <motion.h1
        className="text-3xl font-semibold text-gray-700 mb-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        Contact Us & Do Your Online Booking
      </motion.h1>

      <div className="flex flex-col sm:flex-row gap-12">

        
        <motion.div
          className="w-full sm:w-1/2 bg-white shadow-md rounded-lg p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeLeft}
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Book a Session
          </h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <select className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400">
              <option>Select Therapy Type</option>
              <option>Individual Therapy</option>
              <option>Couple Therapy</option>
              <option>Group Therapy</option>
              <option>Online Therapy</option>
            </select>
            <input
              type="date"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <textarea
              rows="4"
              placeholder="Brief message (optional)"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 transition text-white py-3 rounded font-medium"
            >
              Book Appointment
            </button>
          </form>
        </motion.div>

        
        <motion.div
          className="w-full sm:w-1/2 flex flex-col justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeRight}
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Get in Touch
          </h2>

          <div className="space-y-5 text-gray-600">
            <p>
              <span className="font-medium text-gray-700">Location:</span><br />
              Mombasa, Kenya
            </p>
            <p>
              <span className="font-medium text-gray-700">Address:</span><br />
              Mwembe Tayari Road, 8000 Mombasa
            </p>
            <p>
              <span className="font-medium text-gray-700">Phone:</span><br />
              +254 712 345 678
            </p>
            <p>
              <span className="font-medium text-gray-700">Email:</span><br />
              info@mombasatherapy.co.ke
            </p>
            <p className="mt-6">
              Our team is available Monday to Friday, 9:00 AM – 6:00 PM. We
              respond to all enquiries within 24 hours.
            </p>
          </div>
        </motion.div>

      </div>

    
      <motion.div
        className="mt-20 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          Visit Us in Mombasa
        </h2>

        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Mwembe Tayari Mombasa Map"
            src="https://www.google.com/maps?q=Mwembe%20Tayari%20Mombasa&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>

    </section>
  );
};

export default Konta;
