import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { User, Settings, Fuel } from 'lucide-react';
import { formatPrice } from '../utils/utils';
import { useLanguage } from '../contexts/LanguageContext';
import { useBooking } from '../contexts/BookingContext';

const CarCard = ({ car }) => {
  const { t } = useLanguage();
  const { openBooking } = useBooking();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white dark:bg-white/5 backdrop-blur-md border border-warmDark/10 dark:border-white/10 rounded-2xl overflow-hidden hover:bg-gold/5 dark:hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 shadow-lg dark:shadow-none"
    >
      {/* Image Container */}
      <div className="relative h-64 bg-transparent overflow-hidden flex items-center justify-center">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700 ease-in-out p-4"
        />
        <div className="absolute top-4 right-4 bg-warmDark/90 text-gold px-3 py-1 rounded-full text-sm font-bold shadow-md">
          {car.category === 'Economy' ? t('booking.economy') : t('booking.citadine')}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl md:text-2xl font-serif font-bold text-warmDark dark:text-white leading-tight">{car.name}</h3>
          <div className="text-right">
            <span className="block text-2xl font-bold text-gold">{formatPrice(car.price)}</span>
            <span className="text-xs text-warmDark/60 dark:text-white/60 uppercase tracking-wide">{t('fleet.perDay')}</span>
          </div>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-2 mb-6 border-t border-warmDark/10 dark:border-white/10 pt-4">
          <div className="flex flex-col items-center text-center">
            <User className="text-gold mb-1" size={16} />
            <span className="text-sm font-sans text-warmDark/80 dark:text-white/80">{car.specs.passengers} {t('fleet.seats')}</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Settings className="text-gold mb-1" size={16} />
            <span className="text-sm font-sans text-warmDark/80 dark:text-white/80">{car.specs.transmission}</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Fuel className="text-gold mb-1" size={16} />
            <span className="text-sm font-sans text-warmDark/80 dark:text-white/80">{car.specs.fuel}</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => openBooking({ carType: car.name })}
          className="w-full flex items-center justify-center gap-2 bg-warmDark dark:bg-warmBeige text-warmLight dark:text-warmDark py-3 rounded-xl font-bold tracking-wide hover:bg-gold hover:text-warmDark dark:hover:bg-gold dark:hover:text-warmDark transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <FaWhatsapp size={20} />
          {t('fleet.bookNow')}
        </button>
      </div>
    </motion.div>
  );
};

export default CarCard;
