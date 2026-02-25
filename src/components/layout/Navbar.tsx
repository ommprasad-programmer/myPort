'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Briefcase, Layout, User, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Projects', href: '#projects', icon: Briefcase },
  { name: 'Design', href: '#design', icon: Layout },
  { name: 'About', href: '#about', icon: User },
  { name: 'Contact', href: '#contact', icon: Mail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className={`glass rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${scrolled ? "bg-black/40 shadow-[0_0_20px_rgba(0,250,255,0.1)]" : ""
          }`}
      >
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 transition-transform group-hover:rotate-12">
            <Image
              src="/logo.svg"
              alt="OPN Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-neon-cyan to-neon-violet bg-clip-text text-transparent">
            OPN
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-neon-cyan transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white/70 hover:text-neon-cyan transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="md:hidden mt-4 glass rounded-3xl p-6 flex flex-col gap-4 mx-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 text-white/70 hover:text-neon-cyan transition-colors text-lg"
              >
                <link.icon size={20} />
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
