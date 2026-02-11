import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CarCard from './CarCard';
import { fleetData } from '../data/data';

const FleetGrid = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Economy', 'Citadine'];

  const filteredCars = filter === 'All' 
    ? fleetData 
    : fleetData.filter(car => car.category === filter);

  return (
    <section id="fleet" className="py-24 bg-warmDark relative">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold text-lg uppercase tracking-widest font-medium mb-2"
          >
            Our Fleet
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white/90"
          >
            Premium Vehicles
          </motion.h2>
        </div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2 rounded-full text-sm uppercase tracking-wider transition-all duration-300 border border-gold ${
                filter === cat
                  ? 'bg-gold text-warmDark font-bold shadow-lg shadow-gold/20 scale-105'
                  : 'bg-transparent text-gold hover:bg-gold/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default FleetGrid;
