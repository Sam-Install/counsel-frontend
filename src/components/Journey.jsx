import React from "react";
import { FaCalendarCheck, FaVideo, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const Journey = () => {
  const steps = [
    {
      icon: <FaCalendarCheck />,
      title: "Book a Session",
      description:
        "Schedule your therapy session easily by booking online or calling us directly. Choose a time that works best for you.",
      color: "pink",
    },
    {
      icon: <FaVideo />,
      title: "Join the Session",
      description:
        "Attend your session in a safe and comfortable space — either in person or online — and connect with a professional therapist.",
      color: "pink",
    },
    {
      icon: <FaHeart />,
      title: "Heal & Grow",
      description:
        "Work through your challenges, gain clarity, and develop tools to improve your mental wellbeing and overall quality of life.",
      color: "pink",
    },
  ];

  
  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6, type: "spring", stiffness: 80 },
    }),
  };

  return (
    <div className="my-32 px-4 sm:px-8 md:px-16">
      <h1 className="text-sm text-gray-500 mb-2 text-center uppercase tracking-wide">
        Steps To Follow Us
      </h1>
      <h2 className="text-center text-2xl sm:text-3xl font-semibold text-gray-900 mb-16">
        How To Get A Session With Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="group text-center px-6 py-10 rounded-2xl transition-all duration-300 hover:-translate-y-3 hover:shadow-xl bg-white"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariant}
          >
            <div
              className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full 
                          bg-${step.color}-100 text-${step.color}-600 text-2xl
                          transition-all duration-300
                          group-hover:bg-${step.color}-600 group-hover:text-white`}
            >
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-pink-600">
              {step.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
