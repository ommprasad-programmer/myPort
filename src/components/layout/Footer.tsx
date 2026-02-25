'use client';

import React from 'react';
import { Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5 bg-black/40">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <p className="text-white/40 text-sm">
                            Crafting Digital Experiences with Passion & Precision.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="#" className="text-white/40 hover:text-neon-cyan transition-all hover:scale-110 active:scale-95"><Github size={24} /></a>
                        <a href="#" className="text-white/40 hover:text-neon-violet transition-all hover:scale-110 active:scale-95"><Linkedin size={24} /></a>
                        <a href="#" className="text-white/40 hover:text-neon-cyan transition-all hover:scale-110 active:scale-95"><Twitter size={24} /></a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/20 text-xs text-center">
                        &copy; {new Date().getFullYear()} Omm prasad Nath. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-white/20 text-xs hover:text-white/40 transition-colors">Privacy Policy</a>
                        <a href="#" className="text-white/20 text-xs hover:text-white/40 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
