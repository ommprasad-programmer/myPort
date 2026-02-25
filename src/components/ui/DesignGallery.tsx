'use client';

import React from 'react';
import { motion } from 'framer-motion';

const designs = [
    { id: 1, title: "Modern Fintech Dashboard", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop", span: "row-span-2" },
    { id: 2, title: "E-commerce Mobile App", image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=800&auto=format&fit=crop", span: "row-span-1" },
    { id: 3, title: "Healthcare Platform", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop", span: "row-span-1" },
    { id: 4, title: "Travel Booking UI", image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop", span: "row-span-2" },
    { id: 5, title: "AI Generation Interface", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop", span: "row-span-1" },
    { id: 6, title: "Real Estate Portal", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop", span: "row-span-1" },
];

const DesignGallery = () => {
    return (
        <section id="design" className="py-24 bg-black/40">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-cyan to-neon-violet bg-clip-text text-transparent">
                        Design Showcase
                    </h2>
                    <p className="text-white/60">UI/UX Exploration & Creative Solutions</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                    {designs.map((design, index) => (
                        <motion.div
                            key={design.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 0.98 }}
                            className={`relative rounded-3xl overflow-hidden glass group cursor-pointer ${design.span}`}
                        >
                            <img
                                src={design.image}
                                alt={design.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                                <h4 className="text-xl font-bold text-white">{design.title}</h4>
                                <p className="text-neon-cyan text-sm">Case Study</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DesignGallery;
