'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Code2, FileCode2, Layout, Coffee, Terminal,
    Cpu, Zap, Database, ShieldCheck, Share2,
    Key, LineChart, Globe, Lock
} from 'lucide-react';

const technologies = [
    { name: 'Java', icon: Coffee, color: 'text-orange-500' },
    { name: 'JavaScript', icon: FileCode2, color: 'text-yellow-400' },
    { name: 'TypeScript', icon: Code2, color: 'text-blue-500' },
    { name: 'HTML5', icon: Layout, color: 'text-red-500' },
    { name: 'CSS3', icon: Layout, color: 'text-blue-400' },
    { name: 'React.js', icon: Cpu, color: 'text-cyan-400' },
    { name: 'Angular', icon: Zap, color: 'text-red-600' },
    { name: 'Node.js', icon: Terminal, color: 'text-green-500' },
    { name: 'Express.js', icon: Terminal, color: 'text-gray-400' },
    { name: 'Chart.js', icon: LineChart, color: 'text-pink-400' },
];

const securityDb = [
    { name: 'SQL', icon: Database, color: 'text-blue-300' },
    { name: 'Mongoose', icon: Database, color: 'text-green-400' },
    { name: 'JWT Auth', icon: Lock, color: 'text-purple-400' },
    { name: 'WebSockets', icon: Share2, color: 'text-yellow-500' },
    { name: 'Google Auth', icon: Globe, color: 'text-red-400' },
    { name: '2FA Security', icon: ShieldCheck, color: 'text-cyan-400' },
];

function LockIcon(props: React.ComponentProps<typeof Lock>) {
    return <Lock {...props} />;
}

const TechStack = () => {
    return (
        <section id="tech-stack" className="py-24 bg-black/20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                        My Tech Stack
                    </h2>
                    <div className="w-20 h-1 bg-neon-cyan mx-auto rounded-full" />
                </motion.div>

                {/* Marquee/Grid for Core Tech */}
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, translateY: -5 }}
                            className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-4 group transition-all"
                        >
                            <tech.icon size={40} className={`${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                            <span className="text-sm font-medium text-white/80">{tech.name}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Database & Security */}
                <div className="mt-20">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-2xl font-bold mb-8 text-neon-violet"
                    >
                        Database & Security
                    </motion.h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {securityDb.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass p-4 rounded-xl flex items-center gap-3 hover:border-neon-violet/50 transition-colors"
                            >
                                <item.icon size={20} className={item.color} />
                                <span className="text-xs font-semibold text-white/60">{item.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
