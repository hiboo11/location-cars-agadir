import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { testimonialsData } from '../data/data';

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-24 bg-warmDark relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold text-lg uppercase tracking-widest font-medium mb-2"
          >
            Client Stories
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white/90"
          >
            Trusted by the Elite
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-[#1F1C19] p-8 rounded-2xl relative border border-white/5 hover:border-gold/30 transition-colors duration-300"
            >
              <FaQuoteLeft className="text-gold/20 text-4xl absolute top-6 right-6" />
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-gold/50"
                />
                <div>
                  <h4 className="text-warmLight font-serif font-bold text-lg">{review.name}</h4>
                  <p className="text-gold text-sm uppercase tracking-wider">{review.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4 text-gold">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
              </div>

              <p className="text-white/70 italic leading-relaxed">
                "{review.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
