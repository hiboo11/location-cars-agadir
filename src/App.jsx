import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';
import FleetGrid from './components/FleetGrid';
import ServicesSection from './components/ServicesSection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { BookingProvider } from './contexts/BookingContext';

function App() {
  // Debug mount
  useEffect(() => {
    console.log("App mounted");
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <BookingProvider>
          <div className="min-h-screen transition-colors duration-300 bg-warmBeige text-warmDark dark:bg-warmDark dark:text-warmLight">
            <Navbar />
            <HeroSlider />
            <AboutSection />
            <FleetGrid />
            <ServicesSection />
            <ReviewsSection />
            <ContactSection />
            <Footer />
          </div>
        </BookingProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
