"use client";

import { motion } from "framer-motion";

const logos = [
  {
    src: "/ANZ-removebg-preview.png",
    alt: "ANZ Bank Logo",
  },
  {
    src: "/Bendigo-removebg-preview.png",
    alt: "Bendigo Bank Logo",
  },
  {
    src: "/ING-removebg-preview.png",
    alt: "ING Bank Logo",
  },
  {
    src: "/redzed_logo-removebg-preview.png",
    alt: "RedZed Logo",
  },
  {
    src: "/CBA-removebg-preview.png",
    alt: "Commonwealth Bank Logo",
  },
  {
    src: "/MACQ-removebg-preview.png",
    alt: "Macquarie Bank Logo",
  },
];

export default function LogoMarquee() {
  return (
    <div className="w-full flex justify-center px-4 py-10 bg-[#F7F7F7]">
      <div className="relative w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-sm p-6 flex items-center gap-6 overflow-hidden">

        {/* Left Text */}
        <p className="text-lg font-medium text-gray-500 leading-tight whitespace-nowrap hidden md:block">
          Trusted by 500+ businesses  <br /> across industries.
        </p>
        {/* Left Text */}
        <p className="text-sm font-medium text-gray-800 whitespace-nowrap block md:hidden">
          Trusted by
        </p>

        {/* Marquee Wrapper */}
        <div className="relative w-full overflow-hidden">

          {/* Fade left */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-20"></div>

          {/* Fade right */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-20"></div>

          {/* Infinite Track */}
          <motion.div
            className="flex items-center gap-16 md:gap-20 w-full"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 10,
            }}
          >
            {/* Original */}
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center shrink-0"
              >
                <img
                  src={logo.src}
                  className="cursor-pointer h-8 md:h-10 lg:h-11 w-auto object-contain opacity-80 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-300"
                  alt={logo.alt}
                />
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </div>
  );
}
