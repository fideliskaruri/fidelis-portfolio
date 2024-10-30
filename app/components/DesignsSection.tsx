import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Design {
    title: string;
    description: string;
    link: string;
    color: string; // Color for the gradient background
    image: string; // URL for the design image
}

interface DesignsSectionProps {
    figmaDesigns: Design[];
}

const DesignsSection: React.FC<DesignsSectionProps> = ({ figmaDesigns }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = figmaDesigns.length;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
        <motion.div
            id="designs"
            className="bg-white relative text-black rounded-3xl p-8 h-fit my-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-4xl font-bold mb-8">Figma Designs</h2>
            <div className="relative overflow-hidden">
                <div
                    className="flex transition-transform duration-500 gap-10"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }} // Slide effect
                >
                    {figmaDesigns.map((design) => (
                        <motion.div
                            key={design.title}
                            className={`rounded-xl p-0 bg-gradient-to-r ${design.color} h-[300px] min-w-[300px]`} // Set desired height and min width
                        >
                            <div className="bg-white rounded-xl h-full flex flex-col">
                                <img
                                    src={design.image}
                                    alt={design.title}
                                    className="rounded-t-xl h-3/4 w-full object-cover" // Maintain image size
                                />
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
            
            <button onClick={prevSlide} className="absolute top-1/2 -left-3 text-2xl h-10 w-10 text-center bg-white  border-2 border-black font-bold rounded-full">
                &lt;
            </button>
            <button onClick={prevSlide} className="absolute top-1/2 -right-3 text-2xl h-10 w-10 text-center bg-white  border-2 border-black font-bold rounded-full">
                &gt;
            </button>
           
        </motion.div>
        
    );
};

export default DesignsSection;
