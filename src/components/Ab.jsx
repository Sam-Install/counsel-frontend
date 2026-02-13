import React from 'react';
import img1 from '../assets/h2.jpg';
import img2 from '../assets/h1.jpg';

const Ab = () => {
  return (
    <div className="my-10 px-4 md:px-16">
      <div className="flex flex-col sm:flex-row gap-12 sm:gap-20 items-center">

        <div className="w-full sm:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">Lola Therapy</h1>
          <h2 className="text-2xl font-semibold text-orange-500">About Us</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Welcome to Lola Therapy, based in the vibrant coastal city of Mombasa. 
            We specialize in providing professional therapy services tailored to help 
            individuals achieve mental clarity, emotional balance, and overall wellbeing. 
            Our experienced team of therapists is dedicated to guiding you on your journey 
            towards a healthier and happier life.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            At Lola Therapy, we combine modern therapeutic techniques with personalized 
            care to ensure each client feels heard, supported, and empowered. 
            Whether you are seeking help for stress, anxiety, relationship challenges, 
            or personal growth, our holistic approach ensures comprehensive support.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our mission is to make mental health services accessible, effective, and compassionate. 
            We believe that everyone deserves a safe space to explore their thoughts and emotions 
            and discover the tools to thrive in all aspects of life. Join us at Lola Therapy and 
            experience a journey of transformation and self-discovery.
          </p>
        </div>

        <div className="w-full sm:w-1/2 flex flex-col gap-6 relative sm:pl-6">
        
          <img 
            src={img1} 
            alt="Therapy session" 
            className="w-full rounded-xl shadow-lg object-cover h-64 sm:h-72"
          />


          <img 
            src={img2} 
            alt="Relaxing environment" 
            className="w-5/6 rounded-xl shadow-lg object-cover h-64 sm:h-72 sm:-ml-8"
          />
        </div>

      </div>
    </div>
  );
};

export default Ab;
