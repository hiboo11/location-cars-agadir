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
    price: 30,
    specs: {
      passengers: 5,
      transmission: "Manual",
      fuel: "Diesel"
    }
  },
  {
    id: 2,
    name: "Renault Clio 5 Black Edition",
    category: "Citadine",
    image: clioBlack,
    price: 40,
    specs: {
      passengers: 5,
      transmission: "Manual",
      fuel: "Diesel"
    }
  },
  {
    id: 3,
    name: "Peugeot 208 Gris Allure",
    category: "Citadine",
    image: peugeot208,
    price: 45,
    specs: {
      passengers: 5,
      transmission: "Manual",
      fuel: "Diesel"
    }
  },
  {
    id: 4,
    name: "Dacia Sandero",
    category: "Economy",
    image: daciaSandero,
    price: 30,
    specs: {
      passengers: 5,
      transmission: "Manual",
      fuel: "Diesel"
    }
  }
];

// Services Data (Unchanged)
export const servicesData = [
  {
    id: 1,
    title: "Premium Insurance",
    description: "Full coverage for peace of mind during your premium driving experience.",
    icon: MdVerifiedUser
  },
  {
    id: 2,
    title: "24/7 VIP Support",
    description: "Dedicated concierge service available at any time of day or night.",
    icon: MdOutlineSupportAgent
  },
  {
    id: 3,
    title: "Airport Transfer",
    description: "Seamless pickup and drop-off services at all major airports.",
    icon: MdAirplanemodeActive
  },
  {
    id: 4,
    title: "Flexible Pricing",
    description: "Competitive daily, weekly, and monthly rates tailored to your needs.",
    icon: MdPriceCheck
  }
];

// Testimonials Data (Unchanged)
export const testimonialsData = [
  {
    id: 1,
    name: "James Anderson",
    role: "Business Executive",
    content: "The S-Class was in pristine condition. The service was impeccable from start to finish. Highly recommended for business travel.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Travel Lifestyle Blogger",
    content: "Absolutely stunning fleet! The Range Rover made our trip to the Atlas Mountains unforgettable. The booking process was so smooth.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Mohammed Al-Fayed",
    role: "Entrepreneur",
    content: "Professionalism at its best. The car was delivered exactly on time and the chauffeur service was top-notch.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/67.jpg"
  }
];
