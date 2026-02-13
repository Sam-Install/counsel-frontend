import React from 'react'
import { FaCalendarCheck, FaVideo, FaHeart } from 'react-icons/fa'

const Journey = () => {
  return (
    <div className='my-32 px-4 sm:px-8 md:px-16'>

      <h1 className='text-sm text-gray-500 mb-2 text-center uppercase tracking-wide'>
        Steps To Follow Us
      </h1>
      <h2 className='text-center text-2xl sm:text-3xl font-semibold text-gray-900 mb-16'>
        How To Get A Session With Us
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>

        
        <div className='group text-center px-6 py-10 rounded-2xl transition-all duration-300 hover:-translate-y-3 hover:shadow-xl bg-white'>
          <div className='w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full 
                          bg-pink-100 text-pink-600 text-2xl
                          transition-all duration-300
                          group-hover:bg-pink-600 group-hover:text-white'>
            <FaCalendarCheck />
          </div>
          <h3 className='text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-pink-600'>
            Book a Session
          </h3>
          <p className='text-gray-600 leading-relaxed'>
            Schedule your therapy session easily by booking online or calling us directly. 
            Choose a time that works best for you.
          </p>
        </div>

    
        <div className='group text-center px-6 py-10 rounded-2xl transition-all duration-300 hover:-translate-y-3 hover:shadow-xl bg-white'>
          <div className='w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full 
                          bg-pink-100 text-pink-600 text-2xl
                          transition-all duration-300
                          group-hover:bg-pink-600 group-hover:text-white'>
            <FaVideo />
          </div>
          <h3 className='text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-pink-600'>
            Join the Session
          </h3>
          <p className='text-gray-600 leading-relaxed'>
            Attend your session in a safe and comfortable space — either in person or online — 
            and connect with a professional therapist.
          </p>
        </div>

        
        <div className='group text-center px-6 py-10 rounded-2xl transition-all duration-300 hover:-translate-y-3 hover:shadow-xl bg-white'>
          <div className='w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full 
                          bg-pink-100 text-pink-600 text-2xl
                          transition-all duration-300
                          group-hover:bg-pink-600 group-hover:text-white'>
            <FaHeart />
          </div>
          <h3 className='text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-pink-600'>
            Heal & Grow
          </h3>
          <p className='text-gray-600 leading-relaxed'>
            Work through your challenges, gain clarity, and develop tools to improve your 
            mental wellbeing and overall quality of life.
          </p>
        </div>

      </div>

    </div>
  )
}

export default Journey
