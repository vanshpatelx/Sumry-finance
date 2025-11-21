import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";


export default function Services() {
    const services = [
        {
            title: "Self-Employed & Business Owner Lending   ",
            desc: "Specialist lending solutions built on deep financial analysis. Leverages accounting expertise to interpret financials, cash flow, tax structures, and business performance. Designed to give self-employed borrowers clearer pathways and stronger, more strategic lending outcomes.",
            img: "https://placehold.co/600x400",
            icon: "/service1.svg",
        },
        {
            title: "Owner-Occupied Home Loans",
            desc: "Structured home loan solutions focused on reducing interest and accelerating debt reduction. Goes beyond rate-shopping — uses features, cash flow optimisation, and smart structuring to help clients get ahead faster.",
            img: "https://placehold.co/600x400",
            icon: "/service2.svg",
        },
        {
            title: "Smart Investment Loan Options",
            desc: "Strategic lending for new and experienced property investors. Helps clients understand how loan structures support growth, cash flow, and long-term investment plans. Works alongside accountants to ensure alignment with broader financial strategies.",
            img: "https://placehold.co/600x400",
            icon: "/service3.svg",
        },
        {
            title: "Strategic Loan Refinancing",
            desc: "A full structural review rather than a simple rate comparison. Models multiple structure options to reduce interest, increase flexibility, and shorten the life of the loan. Combines competitive rates with smarter long-term design.",
            img: "https://placehold.co/600x400",
            icon: "/service4.svg",
        },
        {
            title: "Personal Loans Finance",
            desc: "Flexible lending options for vehicles, equipment, and personal purchases. Advises clients on choices that fit within their long-term borrowing strategy and financial plan.",
            img: "https://placehold.co/600x400",
            icon: "/service5.svg",
        },
    ];

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
                    {services.map((s, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#f7f7f7] rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col w-80 shrink-0 h-[550px]"
                        >
                            {/* Icons */}
                            <img
                                className="w-11 h-11 rounded-[4px] mb-4 object-contain"
                                alt={s.title + ' icon'}
                                src={s.icon}
                            />
                            <h3 className="heading text-2xl font-normal text-black">{s.title}</h3>
                            <p className="text-[#252525] mt-2 mb-4 text-base line-clamp-3">
                                {s.desc}
                            </p>
                            <div className="w-full h-48 rounded-[8px] overflow-hidden">
                                <img
                                    src={s.img}
                                    className="w-full h-full object-cover"
                                    alt={s.title}
                                />
                            </div>

                            {/* Button - mt-auto se bottom pe chipk jayega */}
                            <button
                                type="button"
                                className="group mt-auto bg-[#0F3D3A] text-[#F7F7F7] w-full py-3 rounded-[6px] 
                               flex items-center justify-between px-4 gap-2 
                              hover:bg-[#C8F8A9] hover:text-[#0F3D3A] transition cursor-pointer"
                            >
                                <span>Learn more</span>

                                <ArrowRight
                                    className="w-4 h-4 transform transition-transform duration-300 
                    group-hover:translate-x-1"
                                />
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Original grid for larger screens */}
                <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((s, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#f7f7f7] rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col h-full"
                        >
                            {/* Icons */}
                            <img
                                className="w-11 h-11 rounded-sm mb-4 object-contain"
                                alt={s.title + ' icon'}
                                src={s.icon}
                            />
                            <h3 className="heading text-2xl font-normal text-black">{s.title}</h3>
                            <p className="text-[#252525] mt-2 mb-4 text-base line-clamp-3">
                                {s.desc}
                            </p>
                            <div className="w-full h-48 rounded-[8px] overflow-hidden">
                                <img
                                    src={s.img}
                                    className="w-full h-full object-cover"
                                    alt={s.title}
                                />
                            </div>

                            {/* Button */}
                            <button
                                type="button"
                                className="group mt-6 bg-[#0F3D3A] text-[#F7F7F7] w-full py-3 rounded-[6px] 
           flex items-center justify-between px-4 gap-2 
           hover:bg-[#C8F8A9] hover:text-[#0F3D3A] transition cursor-pointer"
                            >
                                <span>Learn more</span>

                                <ArrowRight
                                    className="w-4 h-4 transform transition-transform duration-300 
            group-hover:translate-x-1"
                                />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
