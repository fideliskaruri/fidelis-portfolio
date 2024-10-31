import React from 'react';
import { FaMessage, FaRegMessage } from 'react-icons/fa6';

// Function to handle scrolling
const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
};

const ContactButton: React.FC = () => {
    return (
        <button
            onClick={scrollToContact}
            className="fixed bottom-10 z-10 right-2 md:right-5 bg-white border-2 border-black text-white py-4 px-4 rounded-full transition"
        >
            <FaRegMessage className="w-6 h-6" color='black'   />
        </button>
    );
};

export default ContactButton;
