"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Sparkles, Rocket } from "lucide-react";

const AboutMe = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8">My Journey</h2>
            <div className="space-y-6 text-white/70 leading-relaxed text-lg">
              <p>
                Started from the basics. Every day I grind with code, design,
                and learning. One clear goal in my mind to become a full-stack
                developer with strong UI/UX skills, building beautiful, useful
                products for people.
              </p>
              <p>
                From mastering complex architectures in Java and React to
                designing intuitive user interfaces, I thrive in environments
                that challenge my technical and creative limits.
              </p>
              <p className="border-l-4 border-neon-cyan pl-6 italic">
                Currently, I am deep-diving into the world of **AI
                Integration**, exploring how Large Language Models can be
                seamlessly woven into web applications to create smarter, more
                autonomous user experiences.
              </p>
            </div>
          </motion.div>

          {/* AI Exploration Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            <div className="glass-card p-10 rounded-[3rem] relative overflow-hidden group">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-neon-violet/20 blur-[80px] group-hover:bg-neon-violet/40 transition-colors" />

              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-neon-violet/20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(189,0,255,0.2)]">
                  <BrainCircuit size={40} className="text-neon-violet" />
                </div>

                <h3 className="text-2xl font-bold mb-4">AI Exploration</h3>
                <p className="text-white/60 mb-8">
                  Integrating Generative AI, RAG architectures, and autonomous
                  agents into modern web stacks.
                </p>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl">
                    <Sparkles className="text-neon-cyan" size={20} />
                    <span className="text-sm font-medium">
                      Coming Soon: AI-Integrated Experiments
                    </span>
                  </div>
                  <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl opacity-50">
                    <Rocket className="text-neon-violet" size={20} />
                    <span className="text-sm font-medium">
                      Deep Learning Workshops
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5">
                  <span className="px-4 py-2 bg-neon-violet/20 rounded-full text-[10px] font-bold uppercase tracking-widest text-neon-violet animate-pulse">
                    Forward Thinking
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
