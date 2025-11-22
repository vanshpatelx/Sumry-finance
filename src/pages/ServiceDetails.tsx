import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { services } from "@/components/data";

export default function ServiceDetails() {
  const { serviceId } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const service = services.find(s => s.id === serviceId);


  // If service not found
  if (!service) {
    return (
      <div className="min-h-screen bg-[#F7F7F7] pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#0F3D3A] mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-6">The service you're looking for doesn't exist.</p>
          <Link to="/services" className="px-6 py-3 bg-[#0F3D3A] text-white rounded-[8px] hover:bg-[#0f3d3adc] transition-colors">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F7F7] pt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-10 xl:px-0 py-16">

        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-[#0F3D3A] transition-colors">Home</Link>
          <span>›</span>
          <Link to="/services" className="hover:text-[#0F3D3A] transition-colors">Services</Link>
          <span>›</span>
          <span className="text-[#0F3D3A] font-medium">{service.title}</span>
        </nav>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <img
              className="w-16 h-16 rounded-[4px] object-contain"
              alt={service.title + ' icon'}
              src={service.icon}
            />
            <div>
              <span className="px-3 py-1 text-sm bg-[#EBEBEB] text-[#0F3D3A] rounded-full">
                {service.tag}
              </span>
              <h1 className="heading text-4xl sm:text-5xl font-normal text-[#0F3D3A] mt-2">
                {service.title}
              </h1>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8 order-1 sm:order-0"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-[#0F3D3A]">Service Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {service.detailedDesc || service.desc}
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-[#0F3D3A]">Key Features</h2>
              <ul className="space-y-3 text-lg text-gray-600">
                {service.features?.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#0F3D3A] mt-2 flex-shrink-0"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-[#0F3D3A]">Benefits</h2>
              <div className="grid grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-[8px] shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#C8F8A9] flex-shrink-0"></span>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image & Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-8 order-0 sm:order-1"
          >
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* CTA Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold text-[#0F3D3A] mb-4">Get Started Today</h3>
              <p className="text-gray-600 mb-6">
                Ready to learn more about how {service.title} can help you achieve your financial goals?
              </p>
              <div className="space-y-3">
                <button className="w-full px-6 py-3 rounded-[8px] bg-[#0F3D3A] text-white hover:bg-[#0f3d3adc] transition-colors font-medium">
                  Schedule Consultation
                </button>
                <button className="w-full px-6 py-3 rounded-[8px] border border-[#0F3D3A] text-[#0F3D3A] hover:bg-[#0F3D3A] hover:text-white transition-colors font-medium">
                  Download Brochure
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-white rounded-2xl p-8"
        >
          <h2 className="text-3xl font-semibold text-[#0F3D3A] mb-6 text-center">Explore Other Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {services
              .filter(s => s.id !== serviceId)
              .slice(0, 3)
              .map((relatedService) => (
                <Link
                  key={relatedService.id}
                  to={`/services/${relatedService.id}`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="p-4 rounded-[8px] border border-gray-200 hover:border-[#0F3D3A] hover:bg-[#F7F7F7] transition-colors group"
                >
                  <h3 className="font-semibold text-[#0F3D3A] group-hover:text-[#0f3d3adc]">
                    {relatedService.title}
                  </h3>
                </Link>
              ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}