'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "Food Connector",
        description: "A platform bridging the gap between food donors and those in need. Real-time tracking and geo-spatial matching.",
        image: "https://source.unsplash.com/featured/?food,technology",
        github: "https://github.com/Omm-Prasad/FoodConnector",
        tags: ["React", "Node.js", "MongoDB", "Socket.io"],
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        title: "Song Listing Platform",
        description: "High-performance music streaming and listing platform with advanced filtering and seamless playback.",
        image: "https://source.unsplash.com/featured/?music,digital",
        github: "https://github.com/Omm-Prasad/SongListing",
        tags: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        title: "Complex Todo App",
        description: "Enterprise-grade task management system with workspace collaboration and deep integration features.",
        image: "https://source.unsplash.com/featured/?productivity,office",
        github: "https://github.com/Omm-Prasad/TodoApp",
        tags: ["React", "Express", "PostgreSQL", "JWT"],
        color: "from-green-500/20 to-cyan-500/20"
    },
    {
        title: "Health Suggestion App",
        description: "AI-powered health companion providing personalized diet and workout plans based on biometric data.",
        image: "https://source.unsplash.com/featured/?health,gym",
        github: "https://github.com/Omm-Prasad/HealthApp",
        tags: ["React Native", "Python", "ML Models", "FastAPI"],
        color: "from-pink-500/20 to-rose-500/20"
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-white/60 max-w-xl">
                        A collection of my most complex and impactful digital solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02, rotateY: 2, rotateX: 2 }}
                            className={`glass-card rounded-3xl overflow-hidden group border border-white/5 bg-gradient-to-br ${project.color}`}
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                                <div className="absolute top-4 right-4 flex gap-2">
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-3 glass rounded-full text-white hover:text-neon-cyan transition-colors"
                                    >
                                        <Github size={20} />
                                    </motion.a>
                                </div>
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-neon-cyan transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-white/60 text-sm mb-6 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 glass rounded-full text-white/40">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
