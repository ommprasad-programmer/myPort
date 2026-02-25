'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

interface Bubble {
    id: number;
    x: number;
    y: number;
    size: number;
}

const CursorTracker = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [bubbles, setBubbles] = useState<Bubble[]>([]);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    const spawnBubble = useCallback((x: number, y: number) => {
        const id = Date.now();
        const newBubble: Bubble = {
            id,
            x,
            y,
            size: Math.random() * 40 + 20,
        };

        setBubbles((prev) => [...prev.slice(-15), newBubble]);

        setTimeout(() => {
            setBubbles((prev) => prev.filter((b) => b.id !== id));
        }, 1000);
    }, []);

    useEffect(() => {
        let lastX = 0;
        let lastY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
            if (dist > 25) {
                spawnBubble(e.clientX, e.clientY);
                lastX = e.clientX;
                lastY = e.clientY;
            }

            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [mouseX, mouseY, isVisible, spawnBubble]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            <AnimatePresence>
                {bubbles.map((bubble) => (
                    <motion.div
                        key={bubble.id}
                        initial={{ opacity: 0, scale: 0.5, x: bubble.x - bubble.size / 2, y: bubble.y - bubble.size / 2 }}
                        animate={{ opacity: [0, 0.4, 0], scale: 2, y: bubble.y - bubble.size / 2 - 50 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute rounded-full border border-white/20 bg-white/5 backdrop-blur-[2px]"
                        style={{ width: bubble.size, height: bubble.size }}
                    >
                        <div className="absolute inset-0 rounded-full border-t border-white/40 opacity-50" />
                    </motion.div>
                ))}
            </AnimatePresence>

            <motion.div
                style={{
                    translateX: smoothX,
                    translateY: smoothY,
                    left: -15,
                    top: -15,
                }}
                animate={{
                    opacity: isVisible ? 1 : 0,
                    scale: isVisible ? 1 : 0
                }}
                className="w-8 h-8 rounded-full flex items-center justify-center mix-blend-screen"
            >
                <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full shadow-[0_0_15px_#00FAFF]" />
                <div className="absolute inset-0 border border-neon-cyan/30 rounded-full animate-pulse" />
                <div className="absolute inset-0 bg-neon-cyan/5 blur-[10px] rounded-full" />
            </motion.div>
        </div>
    );
};

export default CursorTracker;
