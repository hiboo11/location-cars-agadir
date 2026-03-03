import React from 'react';
import { motion } from 'framer-motion';
import whatsappQR from '../assets/whatsapp number.svg';
import { Phone, Mail, MapPin, Download, Share2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactSection = () => {
  const { language } = useLanguage();

  // Contact Data
  const contactInfo = {
    phone: "+212667757625",
    displayPhone: "+212 667 757 625",
    email: "hibasedra72@gmail.com",
    address: "Hay Zitoun, Tilila, Agadir",
    website: "https://oriental-tours.com" // Update when available
  };

  // vCard Generator
  const generateVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:ORIENTAL-TOURS
ORG:ORIENTAL-TOURS Agadir
TEL;TYPE=WORK,VOICE:${contactInfo.phone}
EMAIL:${contactInfo.email}
ADR;TYPE=WORK:;;${contactInfo.address}
URL:${contactInfo.website}
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'OrientalTours.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const t = {
    en: {
      title: "Contact Us",
      subtitle: "Get in Touch",
      saveContact: "Save Contact",
      scanToShare: "Scan to Share"
    },
    fr: {
      title: "Contactez-nous",
      subtitle: "Restons en Contact",
      saveContact: "Enregistrer le Contact",
      scanToShare: "Scanner pour Partager"
    }
  };

  const text = t[language] || t.en;

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#1A1714] text-gray-900 dark:text-[#F5F1E9] relative border-t border-gray-200 dark:border-[#F5F1E9]/10 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Contact Info & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-gold text-lg uppercase tracking-widest font-medium mb-2 font-inter">
              {text.subtitle}
            </h3>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8 leading-tight text-gray-900 dark:text-white">
              {text.title}
            </h2>

            <div className="space-y-6 mb-10">
              <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold transition-all duration-300">
                  <Phone className="text-gold group-hover:text-warmDark" size={20} />
                </div>
                <span className="text-xl font-inter text-gray-900 dark:text-warmLight group-hover:text-gold transition-colors">{contactInfo.displayPhone}</span>
              </a>
              
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold transition-all duration-300">
                  <Mail className="text-gold group-hover:text-warmDark" size={20} />
                </div>
                <span className="text-xl font-inter text-gray-900 dark:text-warmLight group-hover:text-gold transition-colors">{contactInfo.email}</span>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <MapPin className="text-gold" size={20} />
                </div>
                <span className="text-xl font-inter text-gray-900 dark:text-warmLight">{contactInfo.address}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={generateVCard}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-gold text-gray-900 rounded-lg font-bold font-inter hover:bg-gray-900 hover:text-gold dark:hover:bg-white dark:hover:text-warmDark transition-colors duration-300 shadow-lg"
              >
                <Download size={20} />
                {text.saveContact}
              </button>
            </div>
          </motion.div>

          {/* QR Code & Map Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center bg-gray-50 dark:bg-[#F5F1E9]/5 p-8 rounded-2xl border border-gray-200 dark:border-[#F5F1E9]/10 backdrop-blur-sm"
          >
            <div className="bg-white p-2 rounded-xl mb-4 overflow-hidden">
              <img 
                src={whatsappQR} 
                alt="WhatsApp QR Code" 
                className="w-[200px] h-[200px] object-contain"
              />
            </div>
            <p className="text-gray-600 dark:text-[#F5F1E9]/60 font-inter flex items-center gap-2">
              <Share2 size={16} />
              {text.scanToShare}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
