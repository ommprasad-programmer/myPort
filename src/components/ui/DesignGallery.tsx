'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';

const designs = [
    { id: 1, title: "Modern Yoga app Ui", image: "/4157008.jpg", span: "lg:col-span-2 row-span-2" },
    { id: 2, title: "FoodConnector Dashboard", image: "/food.png", span: "col-span-1 row-span-1" },
    { id: 3, title: "Food post Ui ", image: "/foodPost.png", span: "col-span-1 row-span-1" },
    { id: 4, title: "Full web ui", image: "/tere-web.jpg", span: "lg:col-span-1 row-span-2" },
    { id: 5, title: "my college instagram design", image: "/2025.jpg", span: "col-span-1 row-span-1" },
    { id: 6, title: "College event poster design", image: "/AAM 2025-26.png", span: "col-span-1 row-span-1" },
];

const DesignGallery = () => {
    const [selectedDesign, setSelectedDesign] = useState<typeof designs[0] | null>(null);

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
                    <p className="text-white/60">UI/UX Exploration &amp; Creative Solutions</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
                    {designs.map((design, index) => (
                        <motion.div
                            key={design.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 0.98 }}
                            onClick={() => setSelectedDesign(design)}
                            className={`relative rounded-3xl overflow-hidden glass group cursor-pointer ${design.span}`}
                        >
                            <Image
                                src={design.image}
                                alt={design.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                priority={index < 2}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 z-10">
                                <h4 className="text-xl font-bold text-white">{design.title}</h4>
                                <p className="text-neon-cyan text-sm">Case Study</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedDesign && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedDesign(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl cursor-zoom-out"
                    >
                        <motion.button
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute top-8 right-8 text-white z-[100] p-4 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-xl border border-white/20 transition-all shadow-2xl group"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedDesign(null);
                            }}
                            title="Close preview"
                        >
                            <X size={32} className="group-hover:rotate-90 transition-transform duration-300" />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-full max-w-[95vw] max-h-[85vh]">
                                <Image
                                    src={selectedDesign.image}
                                    alt={selectedDesign.title}
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="mt-6 text-center"
                            >
                                <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">{selectedDesign.title}</h3>
                                <p className="text-neon-cyan font-medium tracking-wide">INTERACTIVE CONCEPT PREVIEW</p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};


export default DesignGallery;
