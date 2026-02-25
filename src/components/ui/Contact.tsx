'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
    const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        };

        // Create particles for the burst effect
        const newParticles = Array.from({ length: 12 }).map((_, i) => ({
            id: Date.now() + i,
            x: (Math.random() - 0.5) * 200,
            y: (Math.random() - 0.5) * 200,
        }));
        setParticles(newParticles);

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('sent');
            } else {
                setStatus('idle');
                alert('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('idle');
            alert('An error occurred. Please try again.');
        } finally {
            setParticles([]);
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's Connect</h2>
                    <p className="text-white/60">Ready to bring your vision to life? Drop a message!</p>
                </motion.div>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-card p-10 rounded-[3rem] space-y-6 relative"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-white/40 ml-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/30 transition-all text-white"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-white/40 ml-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-neon-violet focus:ring-1 focus:ring-neon-violet/30 transition-all text-white"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-white/40 ml-2">Message</label>
                        <textarea
                            rows={5}
                            name="message"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/30 transition-all text-white resize-none"
                            placeholder="Tell me about your project..."
                        />
                    </div>

                    <div className="relative">
                        <button
                            disabled={status !== 'idle'}
                            className={`w-full py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 overflow-hidden ${status === 'sent'
                                ? 'bg-green-500 text-white'
                                : 'bg-gradient-to-r from-neon-cyan to-neon-violet text-black hover:opacity-90'
                                }`}
                        >
                            <AnimatePresence mode="wait">
                                {status === 'idle' && (
                                    <motion.div key="idle" className="flex items-center gap-2" initial={{ y: 20 }} animate={{ y: 0 }} exit={{ y: -20 }}>
                                        <Send size={20} /> Send Message
                                    </motion.div>
                                )}
                                {status === 'sending' && (
                                    <motion.div key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                                        Processing...
                                    </motion.div>
                                )}
                                {status === 'sent' && (
                                    <motion.div key="sent" initial={{ y: 20 }} animate={{ y: 0 }} className="flex items-center gap-2">
                                        <CheckCircle2 size={20} /> Success!
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Particle Burst */}
                            {particles.map((p) => (
                                <motion.div
                                    key={p.id}
                                    initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                                    animate={{ x: p.x, y: p.y, opacity: 0, scale: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="absolute w-2 h-2 bg-neon-cyan rounded-full z-0 pointer-events-none"
                                />
                            ))}
                        </button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
