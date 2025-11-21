import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import React from 'react'


function About() {
    return (
        <section id='about' className="relative w-full bg-[#F7F7F7] text-black py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-4 md:px-8 lg:px-10 xl:px-0">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="space-y-6 order-1 lg:order-0"
                >
                    {/* Badge */}
                    <span className="px-4 py-1 bg-[#EBEBEB] text-[#0F3D3A] rounded-full text-sm w-fit inline-block tracking-wide">
                        About Sumry Finance
                    </span>

                    {/* Heading */}
                    <h2 className="heading text-4xl sm:text-5xl md:text-6xl leading-tighter font-medium tracking-wide text-[#0F3D3A]">
                        Clarity in Every Decision
                    </h2>

                    {/* Description */}
                    <p className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-600 max-w-xl leading-relaxed">
                        At Sumry Finance, we combine accounting-level rigour with strategic lending expertise to help clients make smarter, long-term decisions. We go beyond rates — we build structures that align with your financial goals, protect you, and compound over time.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center space-x-4"
                    >
                        <button type='button' className="px-3.5 py-2 rounded-[8px] bg-[#C8F8A9] text-[#0F3D3A] hover:text-[#F7F7F7] hover:bg-[#0F3D3A] cursor-pointer transition-colors text-sm  flex items-center gap-3 font-medium">
                            Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>

                    {/* Values Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4">
                        {['Clarity', 'Strategy', 'Education', 'Integrity', 'Precision', 'Partnership'].map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-2 text-lg font-medium text-black/90"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-black/70"></span>
                                {value}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>


                {/* RIGHT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative h-80 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl  sm:order-1"
                >
                    <img
                        src="/about.jpg"
                        alt="About Sumry Finance"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                </motion.div>


            </div>
        </section>
    )
}

export default About