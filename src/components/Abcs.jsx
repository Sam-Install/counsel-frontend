import React from "react";
import { motion } from "framer-motion";
import about from "../assets/about1.jpg";
import team from "../assets/h1.jpg";

const Abcs = () => {
  
  const leftVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="my-5 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="flex flex-col sm:flex-row gap-10 items-center">
        
    
        <motion.div
          className="w-full sm:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={leftVariant}
        >
          <h1 className="text-3xl font-semibold mb-6 text-gray-700">
            Who We Are
          </h1>

          <img
            src={about}
            alt="about mombasa therapy"
            className="w-full h-[260px] object-cover rounded-lg mb-6"
          />

          <img
            src={team}
            alt="our therapy team"
            className="w-full h-[180px] object-cover rounded-lg"
          />
        </motion.div>

    
        <motion.div
          className="w-full sm:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={rightVariant}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            A Safe Space for Healing & Growth
          </h2>

          <p className="text-gray-600 leading-relaxed">
            At Mombasa Therapy, we are a dedicated team of licensed and
            compassionate mental health professionals committed to supporting
            individuals, couples, and families on their journey toward emotional
            wellbeing. We believe that everyone deserves a safe, confidential,
            and non-judgmental space to express themselves and work through
            life’s challenges at their own pace.
            <br /><br />
            Our approach is client-centered and evidence-based, meaning we
            tailor every session to meet your unique needs, experiences, and
            goals. Whether you are facing stress, anxiety, relationship
            challenges, emotional trauma, or simply seeking personal growth, we
            walk alongside you with empathy, respect, and understanding.
            <br /><br />
            Located in Mombasa, we offer both in-person and online therapy
            services to ensure accessible and flexible care for our clients.
            Above all, we are committed to helping you build resilience, gain
            clarity, and develop healthier ways of coping so you can live a more
            balanced and fulfilling life.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Abcs;
