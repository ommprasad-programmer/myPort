'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-neon-cyan/20 blur-[100px] rounded-full animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-neon-violet/20 blur-[100px] rounded-full animate-pulse delay-1000" />

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-neon-cyan text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-6">
                        Welcome to my portfolio
                    </h2>

                    <h1 className="text-4xl md:text-7xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                            Omm prasad Nath
                        </span>
                        <br />
                        <motion.span
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                            className="inline-block overflow-hidden whitespace-nowrap bg-gradient-to-r from-neon-cyan to-neon-violet bg-clip-text text-transparent border-r-2 border-neon-cyan"
                        >
                            Crafting Digital Experiences
                        </motion.span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Full Stack Developer, UI/UX Designer, & Creative Thinker.
                        Blending code with creativity to build premium web solutions.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-neon-cyan text-black font-semibold rounded-full shadow-[0_0_20px_rgba(0,250,255,0.4)] transition-shadow hover:shadow-[0_0_30px_rgba(0,250,255,0.6)]"
                        >
                            View My Work
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 glass rounded-full font-medium hover:bg-white/10 transition-colors"
                        >
                            Get In Touch
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 cursor-pointer"
                onClick={() => {
                    const nextSection = document.getElementById('tech-stack');
                    nextSection?.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                <ArrowDown size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
