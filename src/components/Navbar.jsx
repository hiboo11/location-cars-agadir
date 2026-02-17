import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useBooking } from '../contexts/BookingContext';



const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const { openBooking } = useBooking();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: t('navbar.home'), href: '#' },
    { title: t('navbar.about'), href: '#about' },
    { title: t('navbar.fleet'), href: '#fleet' },
    { title: t('navbar.services'), href: '#services' },
    { title: t('navbar.reviews'), href: '#reviews' },
    { title: t('navbar.contact'), href: '#contact' },
  ];

  const textColor = scrolled ? 'text-warmDark dark:text-warmLight' : 'text-white';

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-warmDark/90 backdrop-blur-md py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className={`flex items-center gap-3 text-2xl font-serif font-bold tracking-wide ${textColor}`}>
          <span className="inline">ORIENTAL-TOURS</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className={`${scrolled ? 'text-warmDark/80 dark:text-warmLight/80' : 'text-white/90'} hover:text-gold dark:hover:text-gold transition-colors duration-300 font-medium text-sm tracking-wide uppercase`}
            >
              {link.title}
            </a>
          ))}

          {/* Toggles */}
          <div className={`flex items-center gap-4 border-l pl-4 ${scrolled ? 'border-warmDark/10 dark:border-white/10' : 'border-white/20'}`}>
            <button 
              onClick={toggleLanguage}
              className={`flex items-center gap-1 text-sm font-bold hover:text-gold uppercase ${textColor}`}
            >
              <Globe size={14} />
              {language}
            </button>
            <button 
              onClick={toggleTheme}
              className={`hover:text-gold transition-colors ${textColor}`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <button
            onClick={() => openBooking()}
            className="flex items-center gap-2 px-5 py-2 border border-gold text-gold hover:bg-gold hover:text-warmDark transition-all duration-300 rounded-full font-medium text-sm uppercase tracking-wide"
          >
            <FaWhatsapp size={18} />
            {t('navbar.bookNow')}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden hover:text-gold transition-colors ${textColor}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-warmBeige dark:bg-warmDark border-t border-warmDark/10 dark:border-white/10 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="text-warmDark dark:text-warmLight hover:text-gold font-medium block"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </a>
              ))}
              
              <div className="flex justify-between items-center py-4 border-t border-warmDark/10 dark:border-white/10 mt-2">
                <button 
                   onClick={toggleLanguage}
                  className="flex items-center gap-2 text-warmDark dark:text-warmLight font-bold uppercase"
                >
                  <Globe size={16} /> {language === 'en' ? 'English' : 'Français'}
                </button>
                <button 
                  onClick={toggleTheme}
                  className="flex items-center gap-2 text-warmDark dark:text-warmLight font-bold"
                >
                  {theme === 'dark' ? <><Sun size={16} /> Light Mode</> : <><Moon size={16} /> Dark Mode</>}
                </button>
              </div>

              <button
                onClick={() => { setIsOpen(false); openBooking(); }}
                className="flex items-center justify-center gap-2 w-full py-3 bg-gold text-warmDark font-bold rounded-lg mt-4"
              >
                <FaWhatsapp size={20} />
                {t('navbar.bookNow')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
