"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Design {
    title: string;
    description: string;
    link: string;
    image: string;
}

interface DesignsSectionProps {
    figmaDesigns: Design[];
}

const DesignsSection: React.FC<DesignsSectionProps> = ({ figmaDesigns }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const getDesignsPerSlide = () => {
        if (typeof window !== "undefined") {

            if (window.innerWidth >= 1024) return 2; // Desktop: 2 designs
            if (window.innerWidth >= 640) return 1;
        } // Tablet: 1 design
        return 1;                                // Mobile: 1 design
    };

    const [designsPerSlide, setDesignsPerSlide] = useState(getDesignsPerSlide());
    const totalSlides = Math.ceil(figmaDesigns.length / designsPerSlide);

    useEffect(() => {
        const handleResize = () => {
            const newDesignsPerSlide = getDesignsPerSlide();
            setDesignsPerSlide(newDesignsPerSlide);
            setCurrentSlide((prev) => Math.min(prev, Math.ceil(figmaDesigns.length / newDesignsPerSlide) - 1));
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);

    }, [figmaDesigns.length]);

    const goToPreviousSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const goToNextSlide = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    return (
        <motion.div
            id="designs"
            className="bg-white relative text-black rounded-3xl p-4 my-8 h-1/2 sm:min-h-[70vh] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-4xl font-bold mb-8 text-center">Figma Designs</h2>

            <div className="overflow-hidden relative h-full w-full">
                <div
                    className="flex transition-transform duration-500"
                    style={{
                        transform: `translateX(-${currentSlide * (100 / designsPerSlide)}%)`,
                    }}
                >
                    {figmaDesigns.map((design) => (
                        <motion.div
                            key={design.title}
                            className="flex-shrink-0 w-full sm:w-1/2 p-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex flex-col  bg-white rounded-xl min-h-[250px] max-h-[300px] md:max-h-[400px]  shadow-md border border-gray-200">
                                <div className="relative h-[400px] xl:h-[700px] w-full overflow-hidden">
                                    <Image
                                        src={design.image}
                                        alt={design.title}
                                        layout="fill"  // Allows the image to fill the container
                                        objectFit="cover"  // Ensures the image covers the container without distorting
                                        className="rounded-t-xl"
                                    />
                                </div>
                                <div className="p-4 flex-grow">
                                    <h3 className="text-xl font-bold">{design.title}</h3>
                                    <p className="text-sm">{design.description}</p>
                                    <a
                                        href={design.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-2 inline-block text-blue-600"
                                    >
                                        View Design
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <span
                        key={index}
                        className={`h-2 w-2 rounded-full ${index === currentSlide ? 'bg-blue-600' : 'bg-gray-400'}`}
                    />
                ))}
            </div>

            <button
                onClick={goToPreviousSlide}
                className="flex justify-center absolute top-1/2 -left-3 text-2xl h-10 w-10 text-center bg-white border-2 border-black font-bold rounded-full transform -translate-y-1/2"
            >
                &lt;
            </button>
            <button
                onClick={goToNextSlide}
                className="flex justify-center absolute top-1/2 -right-3 text-2xl h-10 w-10 text-center bg-white border-2 border-black font-bold rounded-full transform -translate-y-1/2"
            >
                &gt;
            </button>
        </motion.div>
    );
};

export default DesignsSection;
