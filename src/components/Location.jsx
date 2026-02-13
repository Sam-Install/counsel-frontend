import React from "react";

const Location = () => {
  return (
    <section className="w-full py-20 px-6 sm:px-10 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Our Location
        </h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-10 items-stretch">

          {/* Left: Address Info */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Visit Us
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              We are conveniently located in Mombasa, Mwembe area. Our
              welcoming space is designed to offer a calm and supportive
              environment for your therapy sessions.
            </p>

            <div className="text-gray-800 space-y-2">
              <p><span className="font-semibold">City:</span> Mombasa</p>
              <p><span className="font-semibold">Area:</span> Mwembe</p>
              <p><span className="font-semibold">Street:</span> 8000 Mwembe</p>
              <p><span className="font-semibold">Service Area:</span> Diani & Coast Region</p>
            </div>
          </div>

          {/* Right: Map */}
          <div className="w-full md:w-1/2 h-[350px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Diani Map"
              src="https://www.google.com/maps?q=Diani%20Beach%20Kenya&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Location;
