import React from "react";
import { motion } from "framer-motion";
import gr from "../assets/group.jpg";
import ol from "../assets/online.jpg";
import cl from "../assets/couple.jpg";
import il from "../assets/individual.jpg";

const Servix = () => {

  const leftVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="my-10 px-4 sm:px-8 md:px-16 lg:px-24">
    
      <motion.h1
        className="text-center text-3xl font-semibold text-gray-700 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        What We Offer
      </motion.h1>

      
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-8 mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <motion.div className="w-full sm:w-1/2" variants={leftVariant}>
          <img
            src={gr}
            alt="mombasa group therapy"
            className="w-full h-[300px] object-cover rounded-lg"
          />
        </motion.div>

        <motion.div className="w-full sm:w-1/2" variants={rightVariant}>
          <h2 className="text-2xl font-semibold mb-4">Group Therapy</h2>
          <p className="text-gray-600 leading-relaxed">
            Group therapy provides a safe and supportive environment where
            individuals can share experiences, learn from others, and build
            meaningful connections while guided by a licensed therapist.
          </p>
        </motion.div>
      </motion.div>

    
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-8 mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <motion.div className="w-full sm:w-1/2 order-2 sm:order-1" variants={leftVariant}>
          <h2 className="text-2xl font-semibold mb-4">Online Therapy</h2>
          <p className="text-gray-600 leading-relaxed">
            Access professional therapy from the comfort of your home. Our
            online sessions offer flexibility, privacy, and the same quality
            care as in-person therapy.
          </p>
        </motion.div>

        <motion.div className="w-full sm:w-1/2 order-1 sm:order-2" variants={rightVariant}>
          <img
            src={ol}
            alt="mombasa online therapy"
            className="w-full h-[300px] object-cover rounded-lg"
          />
        </motion.div>
      </motion.div>

    
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-8 mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <motion.div className="w-full sm:w-1/2" variants={leftVariant}>
          <img
            src={cl}
            alt="mombasa couple therapy"
            className="w-full h-[300px] object-cover rounded-lg"
          />
        </motion.div>

        <motion.div className="w-full sm:w-1/2" variants={rightVariant}>
          <h2 className="text-2xl font-semibold mb-4">Couple Therapy</h2>
          <p className="text-gray-600 leading-relaxed">
            Strengthen communication, rebuild trust, and deepen emotional
            connection. Couple therapy helps partners navigate challenges and
            grow together in a healthy way.
          </p>
        </motion.div>
      </motion.div>

      
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <motion.div className="w-full sm:w-1/2 order-2 sm:order-1" variants={leftVariant}>
          <h2 className="text-2xl font-semibold mb-4">Individual Therapy</h2>
          <p className="text-gray-600 leading-relaxed">
            One-on-one therapy focused entirely on you. We help you understand
            your thoughts, emotions, and behaviors while supporting personal
            growth and emotional wellbeing.
          </p>
        </motion.div>

        <motion.div className="w-full sm:w-1/2 order-1 sm:order-2" variants={rightVariant}>
          <img
            src={il}
            alt="individual therapy mombasa"
            className="w-full h-[300px] object-cover rounded-lg"
          />
        </motion.div>
      </motion.div>

      
      <motion.div
        className="mt-20 flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          For more services or enquiries
        </h2>

        <p className="text-gray-600 mb-6 max-w-md">
          Reach out to us today and let’s help you find the support that’s right for you.
        </p>

        <button className="bg-green-400 hover:bg-green-500 transition text-white font-medium px-8 py-3 rounded-full">
          Reach Out
        </button>
      </motion.div>

    </section>
  );
};

export default Servix;
