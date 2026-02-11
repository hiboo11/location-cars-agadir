import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import BookingBar from './BookingBar';

const HeroSlider = () => {
  const { t } = useLanguage();

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1563720223185-11003d5169ad?q=80&w=2000&auto=format&fit=crop',
      title: t('hero.title1'),
      subtitle: t('hero.subtitle1')
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2000&auto=format&fit=crop',
      title: t('hero.title2'),
      subtitle: t('hero.subtitle2')
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2000&auto=format&fit=crop',
      title: t('hero.title3'),
      subtitle: t('hero.subtitle3')
    }
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        speed={1500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background Image with Zoom Effect */}
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 6, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
              </motion.div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
                <motion.h2
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-gold text-lg md:text-xl uppercase tracking-[0.2em] mb-4 font-sans font-medium"
                >
                  {slide.subtitle}
                </motion.h2>
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight"
                >
                  {slide.title}
                </motion.h1>
                <motion.button
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="px-8 py-3 bg-gold text-warmDark font-bold text-lg rounded-full hover:bg-white transition-colors duration-300"
                  onClick={() => document.getElementById('fleet').scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('fleet.bookNow')}
                </motion.button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Floating Booking Bar */}
      <div className="absolute bottom-10 left-0 w-full z-20 px-4 flex justify-center">
        <BookingBar />
      </div>
    </section>
  );
};

export default HeroSlider;
