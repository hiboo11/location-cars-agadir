import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';


const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer id="contact" className="bg-[#111] text-white/80 pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div>
            <a href="#" className="flex items-center gap-3 text-3xl font-serif font-bold text-warmLight mb-6 block">
              <span>ORIENTAL-TOURS</span>
            </a>
            <p className="text-white/60 leading-relaxed mb-6 font-light">
              {t('footer.brandDesc')}
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/anwar_lours_care/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-warmDark transition-all duration-300">
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
            <h4 className="text-xl font-serif font-bold text-white mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-gold transition-colors">{t('footer.links.home')}</a></li>
              <li><a href="#fleet" className="text-white/60 hover:text-gold transition-colors">{t('footer.links.fleet')}</a></li>
              <li><a href="#services" className="text-white/60 hover:text-gold transition-colors">{t('footer.links.services')}</a></li>
              <li><a href="#reviews" className="text-white/60 hover:text-gold transition-colors">{t('footer.links.reviews')}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-serif font-bold text-white mb-6">{t('footer.services')}</h4>
            <ul className="space-y-3">
              <li className="text-white/60">{t('footer.serviceList.transfers')}</li>
              <li className="text-white/60">{t('footer.serviceList.chauffeur')}</li>
              <li className="text-white/60">{t('footer.serviceList.events')}</li>
              <li className="text-white/60">{t('footer.serviceList.rentals')}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-serif font-bold text-white mb-6">{t('footer.contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-gold mt-1">📍</span>
                <span className="text-white/60">Hay Zitoun, Tilila, Agadir</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold mt-1">📞</span>
                <span className="text-white/60">+212 667 757 625</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gold mt-1">✉️</span>
                <span className="text-white/60">hibasedra72@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full h-64 rounded-xl overflow-hidden border border-white/10 mb-16 grayscale hover:grayscale-0 transition-all duration-500">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13768.123456789!2d-9.5!3d30.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b6e80b0b0b0b%3A0x0!2sHay%20Zitoun%2C%20Tilila%2C%20Agadir!5e0!3m2!1sen!2sma!4v1600000000000!5m2!1sen!2sma" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="ORIENTAL-TOURS Location"
          ></iframe>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>© {new Date().getFullYear()} ORIENTAL-TOURS. {t('footer.rights')}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-gold transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
