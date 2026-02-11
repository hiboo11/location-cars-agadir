export const handleWhatsApp = (carName, pickupDate = '', pickupLocation = '') => {
  const phoneNumber = "212667757625"; // Updated business number
  
  let message = `Hello, I want to book the ${carName}.`;
  
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
  return `${price} DH`;
};
