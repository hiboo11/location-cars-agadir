export const handleWhatsApp = (carName, pickupDate = '', pickupLocation = '') => {
  const phoneNumber = "212667757625"; // Updated business number
  
  let message = `Bonjour Lours Cars, je souhaite réserver une voiture ${carName}.`;
  
  if (pickupDate) {
    message += `\nDate de prise: ${pickupDate}`;
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
