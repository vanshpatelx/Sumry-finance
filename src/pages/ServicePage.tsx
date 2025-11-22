import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';
import { services } from '@/components/data';

export default function ServicesPage() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F7F7] pt-24">
      {/* Header Section */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 lg:px-10 xl:px-0 py-16">
        
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2 text-sm text-gray-600 mb-8"
        >
          <Link 
            to="/" 
            className="hover:text-[#0F3D3A] transition-colors flex items-center gap-1"
          >
            <span>Home</span>
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#0F3D3A] font-medium">Services</span>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-1 bg-[#EBEBEB] text-[#0F3D3A] rounded-full text-sm inline-block tracking-wide mb-4">
            Our Services
          </span>
          <h1 className="heading text-4xl sm:text-5xl md:text-6xl leading-tighter font-medium tracking-wide text-[#0F3D3A] mb-6">
            Strategic Financial Solutions
          </h1>
          <p className="text-[18px] md:text-[20px] text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive financial services designed to help you achieve your goals with clarity and confidence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <ServiceSection 
              key={service.id} 
              service={service} 
              isReversed={index % 2 !== 0} 
            />
          ))}
        </div>
      </section>
    </div>
  );
}


function ServiceSection({ service, isReversed }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className={`flex flex-col lg:flex-row items-center gap-12 ${
        isReversed ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Content Section */}
      <div className="flex-1 space-y-6 order-1 sm:order-0">
        {/* Badge/Icon */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-[8px] flex items-center justify-center">
            <img 
              src={service.icon} 
              alt={service.title}
              className="w-6 h-6 filter brightness-0 invert"
            />
          </div>
          <span className="px-3 py-1 bg-[#EBEBEB] text-[#0F3D3A] rounded-full text-sm font-medium">
            {service.tag}
          </span>
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-4">
          <h2 className="heading text-3xl sm:text-4xl md:text-5xl font-medium text-[#0F3D3A] leading-tight">
            {service.title}
          </h2>
          <p className="text-xl text-gray-700 font-medium">
            {service.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-600 leading-relaxed">
          {service.desc}
        </p>

        {/* Features List - FIXED */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-4">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#0F3D3A] flex-shrink-0"></div>
              <span className="text-gray-700 font-medium">{feature}</span>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <Link
          to={`/services/${service.id}`}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#0F3D3A] text-white rounded-[8px] hover:bg-[#0f3d3adc] transition-colors group font-medium"
        >
          Learn more
          <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Image Section */}
      <div className="flex-1 order-0 sm:order-1">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-80 lg:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </motion.div>
      </div>
    </motion.section>
  );
}