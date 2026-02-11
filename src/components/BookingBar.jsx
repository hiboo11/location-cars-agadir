import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaCar } from 'react-icons/fa';
import { handleWhatsApp } from '../utils/utils';

const BookingBar = () => {
  const [formData, setFormData] = useState({
    pickupLocation: '',
    pickupDate: '',
    carType: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.carType) {
      handleWhatsApp(formData.carType, formData.pickupDate, formData.pickupLocation);
    } else {
      // If no car selected, just open generic whatsapp
      handleWhatsApp("Luxury Car", formData.pickupDate, formData.pickupLocation);
    }
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="w-full max-w-5xl bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-2xl"
    >
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-center">
        
        {/* Location Input */}
        <div className="w-full md:w-1/4 relative group">
          <label className="block text-xs uppercase text-gold font-bold mb-1 ml-1 tracking-wider">Pick-up Location</label>
          <div className="relative">
            <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 group-focus-within:text-gold transition-colors" />
            <input
              type="text"
              name="pickupLocation"
              placeholder="City, Airport, or Address"
              value={formData.pickupLocation}
              onChange={handleChange}
              className="w-full bg-black/30 text-white pl-10 pr-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all placeholder-white/40"
            />
          </div>
        </div>

        {/* Date Input */}
        <div className="w-full md:w-1/4 relative group">
          <label className="block text-xs uppercase text-gold font-bold mb-1 ml-1 tracking-wider">Pick-up Date</label>
          <div className="relative">
            <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 group-focus-within:text-gold transition-colors" />
            <input
              type="date"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              className="w-full bg-black/30 text-white pl-10 pr-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
            />
          </div>
        </div>

        {/* Car Type Input */}
        <div className="w-full md:w-1/4 relative group">
          <label className="block text-xs uppercase text-gold font-bold mb-1 ml-1 tracking-wider">Select Car</label>
          <div className="relative">
            <FaCar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 group-focus-within:text-gold transition-colors" />
            <select
              name="carType"
              value={formData.carType}
              onChange={handleChange}
              className="w-full bg-black/30 text-white pl-10 pr-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all appearance-none cursor-pointer"
            >
              <option value="" className="bg-warmDark">Choose a Car Class</option>
              <option value="Luxury Sedan" className="bg-warmDark">Luxury Sedan</option>
              <option value="SUV" className="bg-warmDark">Premium SUV</option>
              <option value="Sporstcar" className="bg-warmDark">Sports Car</option>
              <option value="Van" className="bg-warmDark">Luxury Van</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="w-full md:w-1/4 pt-5">
          <button
            type="submit"
            className="w-full bg-gold text-warmDark font-bold py-3.5 rounded-lg hover:bg-white hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-gold/20"
          >
            Book Now
          </button>
        </div>

      </form>
    </motion.div>
  );
};

export default BookingBar;
