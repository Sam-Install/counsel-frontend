import React from "react";
import { FaFacebookF, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { SiMinds } from "react-icons/si";

const Footer = () => {
  return (
    <footer className=" my-25 -full bg-gradient-to-b from-[#0b1220] to-[#020617] text-gray-300 overflow-x-hidden">
      
    
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        
        <div>
          <div className="flex items-center gap-2 mb-4">
            <SiMinds className="text-white text-2xl" />
            <h2 className="text-white font-bold text-lg">
              LolaTherapy
            </h2>
          </div>

          <p className="text-sm leading-relaxed">
            LolaTherapy provides professional mental health and wellness
            services across Kenya. From personalized therapy sessions to
            compassionate guidance, we help individuals heal, grow, and live
            balanced lives through a supportive and confidential approach.
          </p>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/services" className="hover:text-white transition">Services</a></li>
            <li><a href="/gallery" className="hover:text-white transition">Gallery</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact Us</a></li>
          </ul>
        </div>

    
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaWhatsapp />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaTiktok />
            </a>
          </div>
        </div>

      </div>

      
      <div className="border-t border-white/10 py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} LolaTherapy. All rights reserved.
        <div className="mt-2">
          Created by <span className="text-white">ButcherCodes</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
