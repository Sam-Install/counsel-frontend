import React from "react";
import { motion } from "framer-motion";

const Quote = () => {

  const quoteVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="my-32 px-4 sm:px-8 md:px-16">
      <motion.div
        className="bg-pink-500 rounded-2xl py-16 px-6 sm:px-12 text-center text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={quoteVariant}
      >
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }}
          viewport={{ once: true, amount: 0.3 }}
        >
          “Healing begins the moment you allow yourself to be honest about how you feel.”
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl opacity-90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } }}
          viewport={{ once: true, amount: 0.3 }}
        >
          You don’t have to face life alone — support is always within reach.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Quote;
