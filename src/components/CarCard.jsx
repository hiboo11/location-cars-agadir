import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaCogs, FaGasPump, FaWhatsapp } from 'react-icons/fa';
import { handleWhatsApp, formatPrice } from '../utils/utils';

const CarCard = ({ car }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-[#F5F1E9] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute top-4 right-4 bg-warmDark/90 text-gold px-3 py-1 rounded-full text-sm font-bold shadow-md">
          {car.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-serif font-bold text-warmDark">{car.name}</h3>
          <div className="text-right">
            <span className="block text-2xl font-bold text-gold">{formatPrice(car.price)}</span>
            <span className="text-xs text-warmDark/60 uppercase tracking-wide">Per Day</span>
          </div>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6 border-t border-warmDark/10 pt-4">
          <div className="flex flex-col items-center text-center">
            <FaUser className="text-gold mb-1" size={16} />
            <span className="text-sm text-warmDark/80">{car.specs.passengers} Seats</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaCogs className="text-gold mb-1" size={16} />
            <span className="text-sm text-warmDark/80">{car.specs.transmission}</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaGasPump className="text-gold mb-1" size={16} />
            <span className="text-sm text-warmDark/80">{car.specs.fuel}</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => handleWhatsApp(car.name)}
          className="w-full flex items-center justify-center gap-2 bg-warmDark text-warmLight py-3 rounded-xl font-medium tracking-wide hover:bg-gold hover:text-warmDark transition-all duration-300 group-hover:shadow-lg"
        >
          <FaWhatsapp size={20} />
          Book Now
        </button>
      </div>
    </motion.div>
  );
};

export default CarCard;
