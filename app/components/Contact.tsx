'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [budget, setBudget] = useState('');
    const [idea, setIdea] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
        if (!accessKey) {
            console.error('Access key is not set');
            return;
        }

        const formData = new FormData();
        formData.append("access_key", accessKey);
        formData.append("name", name);
        formData.append("email", email);
        formData.append("budget", budget);
        formData.append("idea", idea);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Form submitted successfully:", data);
                setMessage("Thank you for your submission! We will get back to you soon.");
                setIsSuccess(true);
            } else {
                console.error("Form submission failed:", data);
                setMessage("Submission failed. Please try again.");
                setIsSuccess(false);
            }
        } catch (error) {
            console.error("Error during form submission:", error);
            setMessage("An error occurred. Please check your connection and try again.");
            setIsSuccess(false);
        }

        // Reset the form fields
        setName('');
        setEmail('');
        setBudget('');
        setIdea('');

        // Reset message after 5 seconds
        setTimeout(() => {
            setMessage('');
        }, 5000);
    };

    return (
        <section id="contact" className="bg-black p-8 mt-16 rounded-lg relative shadow-[8px_8px_0px_0px_white]">
            <div className="absolute inset-0 border-white rounded-lg pointer-events-none"></div>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-white mb-6 relative z-10"
            >
                Contact Me
            </motion.h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="border-2 border-gray-600 rounded-lg bg-transparent"
                >
                    <label htmlFor="name" className="sr-only">Your Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-4 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                        required
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="border-2 border-gray-600 rounded-lg bg-transparent"
                >
                    <label htmlFor="email" className="sr-only">Your Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-4 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                        required
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="border-2 border-gray-600 rounded-lg bg-transparent"
                >
                    <label htmlFor="budget" className="sr-only">Budget</label>
                    <select
                        id="budget"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full p-4 bg-black text-white focus:outline-none"
                        required
                    >
                        <option value="" className="bg-black text-white">Select your budget</option>
                        <option value="$100 - $500">$100 - $500</option>
                        <option value="$500 - $1,000">$500 - $1,000</option>
                        <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                    </select>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="border-2 border-gray-600 rounded-lg bg-transparent"
                >
                    <label htmlFor="idea" className="sr-only">Project Idea</label>
                    <textarea
                        id="idea"
                        placeholder="Project Idea"
                        value={idea}
                        onChange={(e) => setIdea(e.target.value)}
                        className="w-full p-4 bg-transparent text-white placeholder-gray-400 focus:outline-none h-32 resize-none"
                        required
                    />
                </motion.div>
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    type="submit"
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition flex items-center justify-center"
                >
                    <span>Send Message</span>
                    <FaPaperPlane className="ml-2" />
                </motion.button>
            </form>
            {message && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`mt-4 p-4 rounded-lg ${isSuccess ? 'bg-green-500' : 'bg-red-500'} text-white`}
                >
                    <div className="flex items-center">
                        {isSuccess ? <FaCheckCircle className="mr-2" /> : <FaExclamationCircle className="mr-2" />}
                        <span>{message}</span>
                    </div>
                </motion.div>
            )}
        </section>
    );
}
