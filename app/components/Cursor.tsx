'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [deviceIsMobile, setDeviceIsMobile] = useState<boolean>(isMobile);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        if (deviceIsMobile) return;
        if (typeof window !== "undefined") {
            window.addEventListener('mousemove', handleMouseMove);

            return () => window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [deviceIsMobile]);

    return (
        <motion.div
            className="fixed w-12 h-12 rounded-full pointer-events-none bg-white opacity-80 z-50 border border-black mix-blend-difference"

            animate={{
                x: mousePosition.x - 48, // Offset to center the effect
                y: mousePosition.y - 48,
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        />
    );
};

export default Cursor;
