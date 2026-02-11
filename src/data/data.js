import { FaStar, FaCarSide, FaCogs, FaGasPump } from 'react-icons/fa';
import { MdVerifiedUser, MdOutlineSupportAgent, MdAirplanemodeActive, MdPriceCheck } from 'react-icons/md';

// Fleet Data
export const fleetData = [
  {
    id: 1,
    name: "Mercedes-Benz S-Class",
    category: "Luxury",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1000&auto=format&fit=crop",
    price: 250,
    specs: {
      passengers: 5,
      transmission: "Auto",
      fuel: "Petrol"
    }
  },
  {
    id: 2,
    name: "Range Rover Vogue",
    category: "Luxury",
    image: "https://images.unsplash.com/photo-1606152421811-aa9116c925d4?q=80&w=1000&auto=format&fit=crop",
    price: 300,
    specs: {
      passengers: 5,
      transmission: "Auto",
      fuel: "Diesel"
    }
  },
  {
    id: 3,
    name: "BMW 5 Series",
    category: "Business",
    image: "https://images.unsplash.com/photo-1555215695-3004980adade?q=80&w=1000&auto=format&fit=crop",
    price: 180,
    specs: {
      passengers: 5,
      transmission: "Auto",
      fuel: "Diesel"
    }
  },
  {
    id: 4,
    name: "Audi A6",
    category: "Business",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1000&auto=format&fit=crop",
    price: 170,
    specs: {
      passengers: 5,
      transmission: "Auto",
      fuel: "Diesel"
    }
  },
  {
    id: 5,
    name: "Mercedes V-Class",
    category: "Van",
    image: "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?q=80&w=1000&auto=format&fit=crop",
    price: 220,
    specs: {
      passengers: 7,
      transmission: "Auto",
      fuel: "Diesel"
    }
  },
  {
    id: 6,
    name: "Porsche Panamera",
    category: "Luxury",
    image: "https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=1000&auto=format&fit=crop",
    price: 400,
    specs: {
      passengers: 4,
      transmission: "Auto",
      fuel: "Petrol"
    }
  }
];

// Services Data
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

// Testimonials Data
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
