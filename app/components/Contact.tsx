import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [budget, setBudget] = useState('');
    const [idea, setIdea] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic (e.g., send data to an API)
        console.log({ name, email, budget, idea });
        // Reset the form fields
        setName('');
        setEmail('');
        setBudget('');
        setIdea('');
    };

    return (
        <section id="contact" className="bg-black p-8 mt-16 rounded-lg relative shadow-[8px_8px_0px_0px_white]">
            {/* White borders with varying thickness */}
            <div className="absolute inset-0 border-white rounded-lg pointer-events-none"></div>

            <motion.h2 className="text-3xl font-bold text-white mb-4 relative z-10">
                Contact Me
            </motion.h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 relative z-10">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-4 rounded-lg border-2 border-gray-600 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-4 rounded-lg border-2 border-gray-600 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required
                />
                <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="p-4 rounded-lg border-2 border-gray-600 bg-black text-white  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none "
                    required
                >
                    <option value="" className="bg-black text-white">Select your budget</option>
                    <option value="$500 - $1,000">$500 - $1,000</option>
                    <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="Above $10,000">Above $10,000</option>
                </select>
                <textarea
                    placeholder="Project Idea"
                    value={idea}
                    onChange={(e) => setIdea(e.target.value)}
                    className="p-4 rounded-lg border-2 border-gray-600 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition h-32"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    Submit
                </button>
            </form>
        </section>
    );
};

export default Contact;
