import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#111] text-white/80 pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div>
            <a href="#" className="text-3xl font-serif font-bold text-warmLight mb-6 block">
              LUXE<span className="text-gold">CARS</span>
            </a>
            <p className="text-white/60 leading-relaxed mb-6 font-light">
              Experience the pinnacle of automotive luxury. We provide an exclusive fleet of premium vehicles for those who demand excellence in every journey.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-warmDark transition-all duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-warmDark transition-all duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-warmDark transition-all duration-300">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-serif font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-gold transition-colors">Home</a></li>
              <li><a href="#fleet" className="text-white/60 hover:text-gold transition-colors">Our Fleet</a></li>
              <li><a href="#services" className="text-white/60 hover:text-gold transition-colors">Services</a></li>
              <li><a href="#reviews" className="text-white/60 hover:text-gold transition-colors">Reviews</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-serif font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="text-white/60">Airport Transfers</li>
              <li className="text-white/60">Chauffeur Service</li>
              <li className="text-white/60">Wedding Hire</li>
              <li className="text-white/60">Corporate Travel</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-serif font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-gold mt-1">📍</span>
                <span className="text-white/60">123 Marina Boulevard, Agadir, Morocco</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold mt-1">📞</span>
                <span className="text-white/60">+212 600 000 000</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold mt-1">✉️</span>
                <span className="text-white/60">booking@luxecars-agadir.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>© 2024 LuxeCars Agadir. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
