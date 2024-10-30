import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavbarProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between bg-white p-4 shadow-lg border-b-4 border-black">
            <motion.div
                className="text-lg font-bold cursor-pointer text-gray-800"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                FIDELIS KARURI
            </motion.div>

            {/* Hamburger Icon for mobile */}
            <div className="md:hidden flex items-center">
                <button
                    className="text-gray-800 focus:outline-none text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Full-Screen Overlay for mobile */}
            <div className={`fixed inset-0 bg-black bg-opacity-90 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className={`flex flex-col items-center justify-center h-full transition-transform duration-300 transform ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                    {/* Close Button for overlay */}
                    <button
                        className="absolute top-4 right-4 text-white text-3xl"
                        onClick={() => setIsOpen(false)}
                    >
                        <FaTimes />
                    </button>
                    {['ABOUT ME', 'EXPERIENCE', 'PROJECTS', 'DESIGNS', 'SKILLS', 'CONTACT'].map((item) => (
                        <motion.button
                            key={item}
                            onClick={() => {
                                setActiveSection(item.toLowerCase());
                                const section = document.getElementById(item.toLowerCase());
                                section?.scrollIntoView({ behavior: 'smooth' });
                                setIsOpen(false); // Close menu on selection
                            }}
                            className={`text-white text-xl mb-4 px-6 py-2 hover:text-blue-500 transition-colors relative ${activeSection === item.toLowerCase() ? 'text-blue-500' : ''}`}
                            // whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {item}
                            {activeSection === item.toLowerCase() && (
                                <motion.div
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500"
                                    layoutId="underline"
                                />
                            )}
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Navigation links for larger screens */}
            <div className={`hidden md:flex md:gap-8`}>
                {['ABOUT ME', 'EXPERIENCE', 'PROJECTS', 'DESIGNS', 'SKILLS', 'CONTACT'].map((item) => (
                    <motion.button
                        key={item}
                        onClick={() => {
                            setActiveSection(item.toLowerCase());
                            const section = document.getElementById(item.toLowerCase());
                            section?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`text-gray-800 hover:text-blue-500 transition-colors relative text-base ${item === 'CONTACT' && "bg-black text-white"} px-2 py-2 ${activeSection === item.toLowerCase() ? 'text-blue-500' : ''}`}
                        // whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {item}
                        {activeSection === item.toLowerCase() && (
                            <motion.div
                                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500"
                                layoutId="underline"
                            />
                        )}
                    </motion.button>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
