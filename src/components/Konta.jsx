import React from "react";

const Konta = () => {
  return (
    <section className="my-24 px-4 sm:px-8 md:px-16 lg:px-24">
      
      <h1 className="text-3xl font-semibold text-gray-700 mb-12 text-center">
        Contact Us & Do Your Online Booking
      </h1>

      <div className="flex flex-col sm:flex-row gap-12">


        <div className="w-full sm:w-1/2 bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Book a Session
          </h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <select
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option>Select Therapy Type</option>
              <option>Individual Therapy</option>
              <option>Couple Therapy</option>
              <option>Group Therapy</option>
              <option>Online Therapy</option>
            </select>

            <input
              type="date"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <textarea
              rows="4"
              placeholder="Brief message (optional)"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 transition text-white py-3 rounded font-medium"
            >
              Book Appointment
            </button>
          </form>
        </div>

        
        <div className="w-full sm:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Get in Touch
          </h2>

          <div className="space-y-5 text-gray-600">
            <p>
              <span className="font-medium text-gray-700">Location:</span><br />
              Mombasa, Kenya
            </p>

            <p>
              <span className="font-medium text-gray-700">Address:</span><br />
              Mwembe Tayari Road, 8000 Mombasa
            </p>

            <p>
              <span className="font-medium text-gray-700">Phone:</span><br />
              +254 712 345 678
            </p>

            <p>
              <span className="font-medium text-gray-700">Email:</span><br />
              info@mombasatherapy.co.ke
            </p>

            <p className="mt-6">
              Our team is available Monday to Friday, 9:00 AM – 6:00 PM. We
              respond to all enquiries within 24 hours.
            </p>
          </div>
        </div>

      </div>

<div className="mt-20 w-full">
  <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
    Visit Us in Mombasa
  </h2>

  <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
    <iframe
      title="Mwembe Tayari Mombasa Map"
      src="https://www.google.com/maps?q=Mwembe%20Tayari%20Mombasa&output=embed"
      className="w-full h-full border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>


    </section>
  );
};

export default Konta;
