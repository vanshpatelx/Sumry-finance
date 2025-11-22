'use client';

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", route: "/" },
    { label: "About",  route: "/about" },
    { label: "Service",  route: "/services" },
    { label: "Contact", route: "/contact" },
    { label: "Savings Calculator", route: "/calculator" },
    { label: "Quiz", route: "/quiz" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';
  
  const shouldShowGrayBackground = !isHomePage || isScrolled || isMenuOpen;
  const shouldShowWhiteText = isHomePage && !isScrolled && !isMenuOpen;

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b py-4 transition-all duration-300
        ${
          shouldShowGrayBackground
            ? "bg-[#F7F7F7] shadow-md border-zinc-300"
            : "bg-transparent border-white/20"
        }
        ${
          shouldShowWhiteText ? "text-white" : "text-black"
        }
      `}
    >
      <div className="max-w-6xl 2xl:max-w-7xl 2xl:max-w-8xl mx-auto px-4 md:px-8 lg:px-10 xl:px-0 2xl:px-8">
        <div className="flex items-center justify-between h-18 2xl:h-24">
          
          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`relative inline-flex items-end gap-1.5 shrink-0 text-2xl 2xl:text-3xl font-light 
              ${shouldShowWhiteText ? "text-white" : "text-black"}`}
          >
            <span className="logo leading-none cursor-pointer" title='Sumry Finance'>
              Sumry Finance
            </span>
            <span
              className={`w-2 h-2 2xl:w-3 2xl:h-3 rounded-full mb-1 
                ${
                  shouldShowWhiteText ? "bg-[#C8F8A9]" : "bg-[#0F3D3A]"
                }`}
            ></span>
          </motion.div>

          {/* DESKTOP NAV */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex items-center space-x-4 2xl:space-x-6"
          >
            {navItems.map((item) => {
              const classes = `
                text-sm 2xl:text-base p-1 px-3 2xl:px-4 rounded-full font-medium transition-colors
                ${
                  shouldShowWhiteText
                    ? "text-white hover:text-[#272727] hover:bg-white"
                    : "text-[#272727] hover:bg-[#272727] hover:text-white"
                }
              `;

              return (
                <Link key={item.label} to={item.route} className={classes}>
                  {item.label}
                </Link>
              );
            })}
          </motion.div>

          {/* DESKTOP CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:flex items-center space-x-4 2xl:space-x-6"
          >
            <button
              type='button'
              onClick={() => navigate('/contact')}
              className={`
                px-3.5 py-2 2xl:px-5 2xl:py-3 rounded-[8px] text-sm 2xl:text-base 
                font-medium transition-colors cursor-pointer
                ${
                  shouldShowWhiteText
                    ? "bg-white text-[#272727] hover:bg-[#0F3D3A] hover:text-white"
                    : "bg-white text-[#272727] border border-[#272727] hover:bg-[#0F3D3A] hover:text-white hover:border-[#0F3D3A]"
                }
              `}
            >
              Get Strategy
            </button>
          </motion.div>

          {/* MOBILE MENU BUTTON */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden cursor-pointer"
          >
            {isMenuOpen ? (
              <X size={24} className={shouldShowWhiteText ? "text-white" : "text-black"} />
            ) : (
              <Menu size={24} className={shouldShowWhiteText ? "text-white" : "text-black"} />
            )}
          </motion.button>
        </div>

        {/* MOBILE NAV */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden pb-6 space-y-5 bg-[#F7F7F7] p-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.route}
                onClick={() => setIsMenuOpen(false)}
                className="block text-sm font-medium p-0.5 px-2.5 rounded-full text-[#272727] w-fit transition-colors hover:text-white hover:bg-[#272727]"
              >
                {item.label}
              </Link>
            ))}

            <div className="flex gap-3 pt-4">
              <button
               onClick={() => navigate('/contact')}
                type="button"
                className="px-4 py-2 rounded-[8px] border border-gray-600 bg-black text-white hover:bg-[#0F3D3A] w-full text-sm font-medium"
              >
                Get Strategy
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}