import React from "react";
import { motion } from "framer-motion";
import indi from "../assets/individual.jpg";
import cpl from "../assets/couple.jpg";
import onl from "../assets/online.jpg";
import grp from "../assets/group.jpg";

const Service = () => {
  const offered = [
    {
      image: indi,
      title: "Individual Therapy",
      description:
        "One-on-one therapy sessions designed to help you understand yourself better, manage stress, anxiety, depression, and build emotional resilience in a safe and supportive environment.",
    },
    {
      image: cpl,
      title: "Couples Therapy",
      description:
        "Professional guidance for couples seeking to improve communication, resolve conflicts, rebuild trust, and strengthen emotional connection in their relationship.",
    },
    {
      image: grp,
      title: "Group Therapy",
      description:
        "Supportive group sessions where individuals share experiences, learn coping strategies, and grow together in a guided and confidential setting.",
    },
    {
      image: onl,
      title: "Online Therapy",
      description:
        "Flexible and confidential virtual therapy sessions, allowing you to access professional mental health support from the comfort of your home.",
    },
  ];

  
  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, type: "spring", stiffness: 80 },
    }),
  };

  return (
    <div className="my-32 px-4 sm:px-8 md:px-16">
      <h1 className="text-center text-3xl font-bold mb-12">Our Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {offered.map((item, index) => (
          <motion.div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg group bg-white"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariant}
          >
            <div className="h-64 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3">{item.title}</h2>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Service;
