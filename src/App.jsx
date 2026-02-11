import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import FleetGrid from './components/FleetGrid';
import ServicesSection from './components/ServicesSection';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  // Debug mount
  useEffect(() => {
    console.log("App mounted");
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen transition-colors duration-300 bg-warmBeige text-warmDark dark:bg-warmDark dark:text-warmLight">
          <Navbar />
          <HeroSlider />
          <FleetGrid />
          <ServicesSection />
          <ReviewsSection />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
