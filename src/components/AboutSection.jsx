import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Shield, Clock, MapPin } from 'lucide-react';

const AboutSection = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "About Lours Cars",
      subtitle: "Excellence in Agadir",
      description: "Lours Cars is your premier car rental agency in Agadir, specializing in VIP transfers and high-quality vehicle rentals. Located in the heart of Hay Zitoun, Tikiouin, we are dedicated to providing a seamless and luxurious travel experience.",
      features: [
        { title: "Premium Fleet", description: "Meticulously maintained vehicles for your comfort.", icon: Shield },
        { title: "24/7 Availability", description: "Round-the-clock support for all your travel needs.", icon: Clock },
        { title: "Local Expertise", description: "Deep knowledge of Agadir and surrounding areas.", icon: MapPin }
      ]
    },
    fr: {
      title: "À Propos de Lours Cars",
      subtitle: "L'Excellence à Agadir",
      description: "Lours Cars s'impose comme votre agence de référence à Agadir pour la location de voitures et les transferts VIP. Situés au cœur de Hay Zitoun, Tikiouin, nous nous engageons à offrir une expérience de voyage fluide et prestigieuse. Que ce soit pour un transfert aéroportuaire ou une escapade touristique, notre priorité est votre confort et votre sécurité.",
      features: [
        { title: "Flotte Premium", description: "Des véhicules méticuleusement entretenus pour votre confort absolu.", icon: Shield },
        { title: "Disponibilité 24/7", description: "Un support continu pour répondre à tous vos besoins de déplacement.", icon: Clock },
        { title: "Expertise Locale", description: "Une connaissance approfondie d'Agadir et de ses environs.", icon: MapPin }
      ]
    }
  };

  const text = content[language] || content.en;

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#1A1714] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h3 className="text-[#D4AF37] text-lg uppercase tracking-widest font-medium mb-2 font-inter">
              {text.subtitle}
            </h3>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#1A1714] dark:text-[#F5F1E9] mb-6 leading-tight">
              {text.title}
            </h2>
            <p className="text-[#1A1714]/70 dark:text-[#F5F1E9]/70 text-lg leading-relaxed mb-8 font-inter">
              {text.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {text.features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0">
                    <feature.icon className="text-[#D4AF37]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-[#1A1714] dark:text-[#F5F1E9] mb-1">{feature.title}</h4>
                    <p className="text-sm text-[#1A1714]/60 dark:text-[#F5F1E9]/60 font-inter">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#D4AF37]/20">
              <div className="absolute inset-0 bg-[#1A1714]/20 mix-blend-multiply"></div>
              {/* Using a placeholder or the generated image if available. For now, using a high-quality Unsplash image as placeholder until generated image is ready/integrated */}
              <img 
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop" 
                alt="Luxury Car Agadir" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#D4AF37] rounded-full blur-2xl opacity-20"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
