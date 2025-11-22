import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { services } from "@/components/data";

export default function ServicesSection() {

   useEffect(() => {
          window.scrollTo(0, 0);
      }, []);

  return (
    <section id="service" className="max-w-6xl mx-auto px-4 md:px-8 lg:px-10 xl:px-0 py-24">
      {/* Top Heading */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 mb-14">
        <div>
          <span className="px-3 py-1 text-sm bg-[#EBEBEB] text-[#0F3D3A] rounded-full">
            Services Overview
          </span>
          <h2 className="heading text-4xl sm:text-5xl font-serif mt-4 leading-tighter tracking-wide font-medium text-[#0F3D3A]">
            Smarter lending designed for real-world goals
          </h2>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
          We provide structured, strategy-driven lending guidance built on deep financial insight — helping you borrow smarter, grow stronger, and plan with clarity.
        </p>
      </div>

      <div className="w-full">
        {/* Mobile horizontal scroll */}
        <div className="flex overflow-x-auto pb-4 space-x-4 md:hidden scrollbar-hide">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#f7f7f7] rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col w-80 shrink-0 h-[550px]"
            >
              {/* Icons */}
              <img
                className="w-11 h-11 rounded-[4px] mb-4 object-contain"
                alt={service.title + ' icon'}
                src={service.icon}
              />
              <h3 className="heading text-2xl font-normal text-black">{service.title}</h3>
              <p className="text-[#252525] mt-2 mb-4 text-base line-clamp-3">
                {service.desc}
              </p>
              <div className="w-full h-48 rounded-[8px] overflow-hidden">
                <img
                  src={service.img}
                  className="w-full h-full object-cover"
                  alt={service.title}
                />
              </div>

              {/* Button */}
              <Link
                to={`/services/${service.id}`}
                className="group mt-auto bg-[#0F3D3A] text-[#F7F7F7] w-full py-3 rounded-[6px] 
                           flex items-center justify-between px-4 gap-2 
                          hover:bg-[#C8F8A9] hover:text-[#0F3D3A] transition cursor-pointer text-center"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Original grid for larger screens */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#f7f7f7] rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col h-full"
            >
              {/* Icons */}
              <img
                className="w-11 h-11 rounded-sm mb-4 object-contain"
                alt={service.title + ' icon'}
                src={service.icon}
              />
              <h3 className="heading text-2xl font-normal text-black">{service.title}</h3>
              <p className="text-[#252525] mt-2 mb-4 text-base line-clamp-3">
                {service.desc}
              </p>
              <div className="w-full h-48 rounded-[8px] overflow-hidden">
                <img
                  src={service.img}
                  className="w-full h-full object-cover"
                  alt={service.title}
                />
              </div>

              {/* Button */}
              <Link
                to={`/services/${service.id}`}
                className="group mt-6 bg-[#0F3D3A] text-[#F7F7F7] w-full py-3 rounded-[6px] 
                           flex items-center justify-between px-4 gap-2 
                          hover:bg-[#C8F8A9] hover:text-[#0F3D3A] transition cursor-pointer text-center"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}