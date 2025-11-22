import { motion } from 'framer-motion'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import TeamSection from './Teams'
import { ChevronRight } from 'lucide-react';

function AboutPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="min-h-screen bg-[#F7F7F7] pt-24">
            <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-10 xl:px-0 py-16">
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
                    <span className="text-[#0F3D3A] font-medium">About Us</span>
                </motion.nav>
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="px-4 py-1 bg-[#EBEBEB] text-[#0F3D3A] rounded-full text-sm inline-block tracking-wide mb-4">
                        About Sumry Finance
                    </span>
                    <h1 className="heading text-4xl sm:text-5xl md:text-6xl leading-tighter font-medium tracking-wide text-[#0F3D3A] mb-6">
                        Clarity in Every Decision
                    </h1>
                    <p className="text-[18px] md:text-[20px] text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        At Sumry Finance, we combine accounting-level rigour with strategic lending expertise to help clients make smarter, long-term decisions.
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="space-y-6 order-1 sm:order-0"
                    >
                        <div className="space-y-4">
                            <h2 className="text-3xl font-semibold text-[#0F3D3A]">Our Mission</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We go beyond rates — we build structures that align with your financial goals, protect you, and compound over time. Our mission is to provide transparent, data-driven financial solutions that empower our clients to make informed decisions about their future.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl font-semibold text-[#0F3D3A]">Our Approach</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We believe every financial decision should be made with clarity and confidence. That's why we take the time to understand your unique situation, goals, and challenges before recommending solutions.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl font-semibold text-[#0F3D3A]">Why Choose Us</h2>
                            <ul className="space-y-3 text-lg text-gray-600">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-[#0F3D3A] mt-2 flex-shrink-0"></span>
                                    <span>Personalized financial strategies tailored to your goals</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-[#0F3D3A] mt-2 flex-shrink-0"></span>
                                    <span>Expert guidance from industry professionals</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-[#0F3D3A] mt-2 flex-shrink-0"></span>
                                    <span>Transparent pricing with no hidden fees</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-[#0F3D3A] mt-2 flex-shrink-0"></span>
                                    <span>Long-term partnership focused on your success</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Image & Values */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="space-y-8 order-0 md:order-1"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative h-80 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl sm:order-1"
                        >
                            <img
                                src="/aboutPage.png"
                                alt="About Sumry Finance"
                                className="w-full h-full object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-black/10" />
                        </motion.div>

                        {/* Values */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <h3 className="text-2xl font-semibold text-[#0F3D3A] mb-6">Our Values</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {['Clarity', 'Strategy', 'Education', 'Integrity', 'Precision', 'Partnership'].map((value, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full bg-[#0F3D3A] flex-shrink-0"></span>
                                        <span className="text-lg font-medium text-gray-800">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
                <TeamSection />

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="bg-[#0F3D3A] rounded-2xl p-8 text-center text-white mt-12"
                >
                    <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
                    <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                        Contact us for a free consultation and discover how we can help you achieve your financial goals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="px-6 py-3 rounded-[8px] bg-[#C8F8A9] text-[#0F3D3A] hover:bg-[#b0e895] transition-colors font-medium"
                        >
                            Get in Touch
                        </Link>
                        <button className="px-6 py-3 rounded-[8px] border border-white text-white hover:bg-white hover:text-[#0F3D3A] transition-colors font-medium">
                            Call Now
                        </button>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default AboutPage