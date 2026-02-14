import React from "react";
import gr from "../assets/group.jpg";
import ol from "../assets/online.jpg";
import cl from "../assets/couple.jpg";
import il from "../assets/individual.jpg";

const Servix = () => {
  return (
    <section className="my-10 px-4 sm:px-8 md:px-16 lg:px-24">
    
      <h1 className="text-center text-3xl font-semibold text-gray-700 mb-16">
        What We Offer
      </h1>

      
      <div className="flex flex-col sm:flex-row items-center gap-8 mb-20">
        <div className="w-full sm:w-1/2">
          <img
            src={gr}
            alt="mombasa group therapy"
            className="w-full h-[300px] object-cover rounded-lg"
          />
        </div>

        <div className="w-full sm:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Group Therapy</h2>
          <p className="text-gray-600 leading-relaxed">
            Group therapy provides a safe and supportive environment where
            individuals can share experiences, learn from others, and build
            meaningful connections while guided by a licensed therapist.
          </p>
        </div>
      </div>

      
      <div className="flex flex-col sm:flex-row items-center gap-8 mb-20">
        <div className="w-full sm:w-1/2 order-2 sm:order-1">
          <h2 className="text-2xl font-semibold mb-4">Online Therapy</h2>
          <p className="text-gray-600 leading-relaxed">
            Access professional therapy from the comfort of your home. Our
            online sessions offer flexibility, privacy, and the same quality
            care as in-person therapy.
          </p>
        </div>

        <div className="w-full sm:w-1/2 order-1 sm:order-2">
          <img
            src={ol}
            alt="mombasa online therapy"
            className="w-full h-[300px] object-cover rounded-lg"
          />
        </div>
      </div>

    
      <div className="flex flex-col sm:flex-row items-center gap-8 mb-20">
        <div className="w-full sm:w-1/2">
          <img
            src={cl}
            alt="mombasa couple therapy"
            className="w-full h-[300px] object-cover rounded-lg"
          />
        </div>

        <div className="w-full sm:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Couple Therapy</h2>
          <p className="text-gray-600 leading-relaxed">
            Strengthen communication, rebuild trust, and deepen emotional
            connection. Couple therapy helps partners navigate challenges and
            grow together in a healthy way.
          </p>
        </div>
      </div>

    
      <div className="flex flex-col sm:flex-row items-center gap-8">
        <div className="w-full sm:w-1/2 order-2 sm:order-1">
          <h2 className="text-2xl font-semibold mb-4">Individual Therapy</h2>
          <p className="text-gray-600 leading-relaxed">
            One-on-one therapy focused entirely on you. We help you understand
            your thoughts, emotions, and behaviors while supporting personal
            growth and emotional wellbeing.
          </p>
        </div>

        <div className="w-full sm:w-1/2 order-1 sm:order-2">
          <img
            src={il}
            alt="individual therapy mombasa"
            className="w-full h-[300px] object-cover rounded-lg"
          />
        </div>
      </div>
      
    
<div className="mt-20 flex flex-col items-center justify-center text-center">
  <h2 className="text-2xl font-semibold text-gray-700 mb-4">
    For more services or enquiries
  </h2>

  <p className="text-gray-600 mb-6 max-w-md">
    Reach out to us today and let’s help you find the support that’s right for you.
  </p>

  <button className="bg-green-400 hover:bg-green-500 transition text-white font-medium px-8 py-3 rounded-full">
    Reach Out
  </button>
</div>

    </section>
  );
};

export default Servix;
