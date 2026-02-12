import React, { createContext, useContext, useState } from 'react';
import BookingModal from '../components/BookingModal';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [bookingData, setBookingData] = useState({});

  const openBooking = (data = {}) => {
    setBookingData(data);
    setIsOpen(true);
  };

  const closeBooking = () => {
    setIsOpen(false);
    setBookingData({});
  };

  return (
    <BookingContext.Provider value={{ openBooking, closeBooking }}>
      {children}
      <BookingModal 
        isOpen={isOpen} 
        onClose={closeBooking} 
        prefilledData={bookingData} 
      />
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
