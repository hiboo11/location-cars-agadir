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
  const url = `https://wa.me/212667757625?text=${encodedMessage}`;
  window.open(url, '_blank');
};

export const sendBookingDetails = (data) => {
  const phoneNumber = "212667757625";
  let message = `*Nouvelle Réservation Lours Cars*\n\n`;
  
  if (data.fullName) message += `👤 Nom: ${data.fullName}\n`;
  if (data.dob) message += `🎂 Né(e) le: ${data.dob}\n`;
  if (data.pickupLocation) message += `📍 Lieu: ${data.pickupLocation}\n`;
  if (data.pickupDate) message += `📅 Date: ${data.pickupDate}\n`;
  if (data.carType) message += `🚗 Catégorie: ${data.carType}\n`;
  if (data.idFile) message += `📷 ID/CIN: (Fichier joint/à envoyer)\n`;
  
  message += `\nMerci de confirmer ma réservation.`;

  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(url, '_blank');
};

export const formatPrice = (price) => {
  return `${price} DH`;
};
