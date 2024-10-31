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
        <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between bg-white py-3 px-3 shadow-lg border-b-4 border-black">
            <motion.div
                className="text-xs md:text-sm font-bold cursor-pointer text-gray-800"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                FIDELIS KARURI
            </motion.div>

            {/* Hamburger Icon for mobile */}
            <div className="md:hidden flex items-center">
                <button
                    className="text-gray-800 focus:outline-none text-xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Full-Screen Overlay for mobile */}
            <div className={`fixed  h-screen inset-0 bg-black bg-opacity-90 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className={`grid gap-2 place-items-center h-5/6 justify-center align-middle transition-transform duration-300 transform ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                    {/* Close Button for overlay */}
                    <button
                        className="absolute top-3 right-3 text-white text-2xl"
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
                                setIsOpen(false);
                            }}
                            className={`text-white text-s md:text-sm mb-3 px-4 py-2 hover:text-blue-500 transition-colors relative ${activeSection === item.toLowerCase() ? 'text-blue-500' : ''}`}
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
            <div className={`hidden md:flex md:gap-6 px-4 py-2`}>
                {['ABOUT ME', 'EXPERIENCE', 'PROJECTS', 'DESIGNS', 'SKILLS', 'CONTACT'].map((item) => (
                    <motion.button
                        key={item}
                        onClick={() => {
                            setActiveSection(item.toLowerCase());
                            const section = document.getElementById(item.toLowerCase());
                            section?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`text-gray-800 text-xs md:text-sm hover:text-blue-500 transition-colors relative px-2 py-1 ${item === 'CONTACT' && "bg-black text-white"} ${activeSection === item.toLowerCase() ? 'text-blue-500' : ''}`}
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
