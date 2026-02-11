/**
 * Generates a WhatsApp URL for booking a specific car.
 * @param {string} carName - The name of the car to book.
 * @param {string} date - Optional date string.
 * @param {string} location - Optional location string.
 * @returns {void} - Redirects to WhatsApp.
 */
export const handleWhatsApp = (carName, pickupDate = '', pickupLocation = '') => {
  const phoneNumber = "212600000000"; // REPLACE WITH ACTUAL PHONE NUMBER
  
  let message = `Hello, I am interested in booking the *${carName}*.`;
  
  if (pickupDate) {
    message += `\nPickup Date: ${pickupDate}`;
  }
  
  if (pickupLocation) {
    message += `\nPickup Location: ${pickupLocation}`;
  }
  
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  window.open(url, '_blank');
};

export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(price);
};
