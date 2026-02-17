export const handleWhatsApp = (carName, pickupDate = '', pickupLocation = '') => {
  const phoneNumber = "212667757625"; // Updated business number
  
  let message = `Bonjour ORIENTAL-TOURS, je souhaite réserver une voiture ${carName}.`;
  
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
  let message = `*Nouvelle Réservation ORIENTAL-TOURS*\n\n`;
  
  if (data.fullName) message += `👤 Nom: ${data.fullName}\n`;
  if (data.dob) message += `🎂 Né(e) le: ${data.dob}\n`;
  if (data.pickupLocation) message += `📍 Lieu: ${data.pickupLocation}\n`;
  if (data.pickupDate) message += `📅 Date: ${data.pickupDate}\n`;
  if (data.carType) message += `🚗 Catégorie: ${data.carType}\n`;
  
  // Link to uploaded ID
  if (data.idUrl) {
    message += `📷 Scan ID/CIN: ${data.idUrl}\n`;
  } else if (data.idFile) {
    message += `📷 ID/CIN: (Fichier joint/à envoyer)\n`;
  }
  
  message += `\nMerci de confirmer ma réservation.`;

  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(url, '_blank');
};

export const uploadImageToImgBB = async (file) => {
  const formData = new FormData();
  formData.append('image', file);
  
  // Placeholder API Key - User must replace this!
  const API_KEY = '467fb432cbda8a0d59c095027d8d5c9c'; 
  
  try {
    const response = await fetch(`https://api.imgbb.com/1/upload?key=${API_KEY}`, {
      method: 'POST',
      body: formData,
    });
    
    const data = await response.json();
    if (data.success) {
      return data.data.url;
    } else {
      console.error('ImgBB Upload Error:', data);
      // Fallback for demo: return a fake URL if key is invalid, so valid flow can be tested visually
      // return URL.createObjectURL(file); 
      throw new Error('Upload failed');
    }
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
};

export const formatPrice = (price) => {
  return `${price} DH`;
};
