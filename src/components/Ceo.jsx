import React from "react";
import { motion } from "framer-motion";
import ce from "../assets/ceo.jpeg";

const Ceo = () => {

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="my-20 px-4 sm:px-8 md:px-16 lg:px-24">
      
    
      <motion.h1
        className="text-center text-3xl font-semibold text-gray-700 mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        Word From Our CEO
      </motion.h1>

      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        
        
        <motion.img
          src={ce}
          alt="CEO of Mombasa Therapy"
          className="w-32 h-32 rounded-full object-cover mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }}
          viewport={{ once: true, amount: 0.3 }}
        />

        
        <motion.p
          className="text-gray-600 leading-relaxed mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          At Mombasa Therapy, our mission has always been simple: to create a
          safe, compassionate, and supportive environment where individuals
          feel heard, understood, and empowered. Mental health is not a luxury
          — it is a fundamental part of living a balanced and fulfilling life.
          <br /><br />
          We understand that seeking therapy can feel overwhelming, and taking
          that first step requires courage. Our team is committed to walking
          with you through every stage of your journey, offering professional
          guidance grounded in empathy, respect, and evidence-based practice.
          <br /><br />
          Thank you for trusting us with your wellbeing. We are honored to be a
          part of your healing and growth.
        </motion.p>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.6 } }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="font-semibold text-gray-800">Dr. Sakiko Mwangi</h3>
          <span className="text-sm text-gray-500">Founder & Chief Executive Officer</span>
        </motion.div>

      </div>
    </section>
  );
};

export default Ceo;
