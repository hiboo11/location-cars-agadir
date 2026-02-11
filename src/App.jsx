import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import FleetGrid from './components/FleetGrid';
import ServicesSection from './components/ServicesSection';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';

function App() {
  // Debug mount
  useEffect(() => {
    console.log("App mounted");
  }, []);

  return (
    <div className="min-h-screen bg-warmDark text-textLight">
      <Navbar />
      <HeroSlider />
      <FleetGrid />
      <ServicesSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
}

export default App;
