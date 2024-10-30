'use client'

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <motion.div
            className="fixed w-4 h-4 bg-white rounded-full mix-blend-difference pointer-events-none z-50"
            animate={{
                x: mousePosition.x,
                y: mousePosition.y,
                scale: 2,
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        />
    );
};

export default Cursor;
