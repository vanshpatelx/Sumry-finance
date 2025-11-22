'use client'

import { motion } from 'framer-motion'
import { ArrowRight} from 'lucide-react'
import { Variants } from "framer-motion";
import Navbar from './Navbar';
import { badgeVariants, containerVariants, imageVariants, itemVariants } from '@/components/data';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div id='home' className="relative min-h-screen 2xl:min-h-[100vh] text-[#F7F7F7] overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/hero.jpg"
          alt="Hero background"
          className="w-full h-full object-cover object-center lg:object-center"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#00000080]  -z-10" />
      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-10 xl:px-0 2xl:px-0 py-24 2xl:py-32 mt-[24px] sm:mt-[40px] 2xl:mt-96">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-12 2xl:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4 2xl:space-y-8"
            >
              {/* Badge */}
              <motion.div
                variants={badgeVariants}
                className="w-fit flex items-center gap-3 2xl:gap-4 py-2 shrink-0 rounded-lg"
              >
                <span className="px-2 py-1 bg-[#EBEBEB] text-[#0F3D3A] rounded text-xs sm:text-[14px] 2xl:text-lg font-medium text-nowrap">
                  Strategic Lending
                </span>
                <span className="text-[14px] 2xl:text-lg text-[#F7F7F7] text-nowrap">
                  Clarity in Complexity
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                variants={itemVariants}
                className="space-y-2 2xl:space-y-4"
              >
                <h1 className="logo text-5xl xs:text-6xl sm:text-6xl lg:text-[84px] 2xl:text-[140px] font-serif font-light leading-tighter tracking-tight text-[#F7F7F7]">
                  Smarter Lending, <br className='hidden sm:block' />Built Strategically
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-sm sm:text-[18px] 2xl:text-2xl text-[#F7F7F7] max-w-lg 2xl:max-w-3xl w-full leading-normal tracking-tight"
              >
                A numbers-driven lending approach built on expertise, partnership, and long-term financial clarity—not just cheaper rates.
              </motion.p>

              {/* CTA Button */}
              <motion.button
                type='button'
                variants={itemVariants}
                onClick={() => navigate('/contact')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 px-3.5 py-2.5 2xl:px-6 2xl:py-4.5 bg-[#F7F7F7] text-black rounded-[8px] text-[14px] 2xl:text-lg font-medium hover:bg-[#C8F8A9] hover:text-[#0F3D3A] transition-colors cursor-pointer"
              >
                Get Your Strategy
                <ArrowRight className="w-4 h-4 2xl:w-6 2xl:h-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>

          {/* Mobile Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative h-80 sm:h-96 mt-12 lg:hidden"
          >
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      {/* <div className="max-w-7xl absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 right-0 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 0.9, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl"
        />
      </div> */}
    </div>
  )
}
