import React from "react";
import { motion } from "framer-motion";

const Location = () => {
  // Variants
  const leftVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="w-full py-20 px-6 sm:px-10 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
      
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Our Location
        </motion.h2>

      
        <div className="flex flex-col md:flex-row gap-10 items-stretch">
          
          <motion.div
            className="w-full md:w-1/2 flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={leftVariant}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Visit Us</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              We are conveniently located in Mombasa, Mwembe area. Our welcoming space is designed to offer a calm and supportive environment for your therapy sessions.
            </p>

            <div className="text-gray-800 space-y-2">
              <p><span className="font-semibold">City:</span> Mombasa</p>
              <p><span className="font-semibold">Area:</span> Mwembe</p>
              <p><span className="font-semibold">Street:</span> 8000 Mwembe</p>
              <p><span className="font-semibold">Service Area:</span> Diani & Coast Region</p>
            </div>
          </motion.div>

          
          <motion.div
            className="w-full md:w-1/2 h-[350px] md:h-[400px] rounded-xl overflow-hidden shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={rightVariant}
          >
            <iframe
              title="Diani Map"
              src="https://www.google.com/maps?q=Diani%20Beach%20Kenya&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
