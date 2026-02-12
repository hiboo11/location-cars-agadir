import { FaStar, FaCarSide, FaCogs, FaGasPump } from 'react-icons/fa';
import { MdVerifiedUser, MdOutlineSupportAgent, MdAirplanemodeActive, MdPriceCheck } from 'react-icons/md';

// Import Local Images
import daciaStepway from '../assets/dacia sandero grey.webp';
import clioBlack from '../assets/clio black.jpg';
import peugeot208 from '../assets/gris.avif';
import daciaSandero from '../assets/dacia sandero white.webp';

// Fleet Data
export const fleetData = [
  {
    id: 1,
    name: "Dacia Sandero Stepway",
    category: "Economy",
    image: daciaStepway,
    price: 350,
    specs: {
      passengers: 5,
      transmission: "Manuelle",
      fuel: "Diesel"
    }
  },
  {
    id: 2,
    name: "Renault Clio 5 Black Edition",
    category: "Citadine",
    image: clioBlack,
    price: 450,
    specs: {
      passengers: 5,
      transmission: "Manuelle",
      fuel: "Diesel"
    }
  },
  {
    id: 3,
    name: "Peugeot 208 Gris Allure",
    category: "Citadine",
    image: peugeot208,
    price: 400,
    specs: {
      passengers: 5,
      transmission: "Manuelle",
      fuel: "Diesel"
    }
  }
];

// Services Data (Unchanged)
export const servicesData = [
  {
    id: 1,
    title: "Assurance Tous Risques",
    description: "Une couverture complète pour votre tranquillité d'esprit.",
    icon: MdVerifiedUser
  },
  {
    id: 2,
    title: "Support VIP 24/7",
    description: "Service de conciergerie dédié disponible jour et nuit.",
    icon: MdOutlineSupportAgent
  },
  {
    id: 3,
    title: "Transfert Aéroport",
    description: "Prise en charge et retour fluides à l'aéroport.",
    icon: MdAirplanemodeActive
  },
  {
    id: 4,
    title: "Tarifs Flexibles",
    description: "Tarifs compétitifs à la journée ou à la semaine adaptés à vos besoins.",
    icon: MdPriceCheck
  }
];

// Testimonials Data (Unchanged)
export const testimonialsData = [
  {
    id: 1,
    name: "Karim Bennani",
    role: "Chef d'entreprise",
    content: "La voiture était dans un état impeccable. Service irréprochable. Hautement recommandé pour les voyages d'affaires.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Sarah Alami",
    role: "Touriste",
    content: "Une flotte absolument magnifique ! Le voyage vers les montagnes de l'Atlas était inoubliable.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Mohammed El Fassi",
    role: "Entrepreneur",
    content: "Le professionnalisme à son meilleur. La voiture a été livrée exactement à l'heure.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/67.jpg"
  }
];
