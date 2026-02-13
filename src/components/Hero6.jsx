import React, { useState, useEffect } from "react";
import one from '../assets/h1.jpg';
import two from '../assets/h2.jpg';
import three from '../assets/h2.jpg';

const slides = [
  { image: one, heading: "Welcome to LolaTherapy", paragraph: "Expert care and personalized therapy services to help you thrive." },
  { image: two, heading: "Your Mental Wellbeing Matters", paragraph: "We provide professional guidance to help you navigate life's challenges." },
  { image: three, heading: "Heal, Grow, and Succeed", paragraph: "Join our community and start your journey toward a healthier mind." },
];

const Hero6 = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.heading}
            className="w-full h-full object-cover"
          />
          
        
          <div className="absolute top-0 left-0 w-full h-full bg-black/25 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
              {slide.heading}
            </h1>
            <p className="text-white text-sm md:text-lg mb-6 max-w-xl">
              {slide.paragraph}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
              <button className="bg-orange-500 text-white py-3 w-full rounded">
                Learn More
              </button>
              <button className="bg-gray-700 text-white py-3 w-full rounded">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero6;
