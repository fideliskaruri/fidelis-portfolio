import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const AboutSection: React.FC = () => {
    return (
        <motion.div
            className="bg-white  text-black rounded-3xl p-8 my-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            id="about me"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <motion.h1
                className="text-4xl font-bold mb-8"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                About Me
            </motion.h1>
            <div className="grid md:grid-cols-[300px_1fr] gap-8 justify-center items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                >
                    <div className="w-full aspect-square relative rounded-2xl overflow-hidden border-4 border-black">
                        <Image
                            src="/😘.jpeg"
                            alt="Profile"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-4 md:space-y-6"
                >
                    <h2 className="text-2xl md:text-3xl font-bold">Hello there! 👋</h2>
                    <p className="text-base md:text-xl">
                        I&apos;m Fidelis Karuri, a full-stack developer based in Nairobi, Kenya.
                        A nerdy tech-bro with a dream to make software that random everyday people can use.
                        Video gamer, anime enjoy-er, PC enthusiast.
                    </p>
                    <p className="text-base md:text-xl">
                        I am a curious individual when it comes to all things technology and by
                        nurturing this I have been able to experience amazing things in the world of
                        tech. Always excited to see where the world takes us next...
                    </p>
                    <p className="text-base md:text-xl">
                        I&apos;m always eager to explore new ideas, like this portfolio&apos;s neubrutalist
                        design inspired by {
                            <Link className="bg-gradient-to-r  from-blue-600 to-purple-600 inline-block bg-clip-text text-transparent" target='_blank' href="https://www.imdb.com/title/tt1305826/"> Adventure Time's </Link>
                        } color palette. I look forward to
                        collaborating on something cool together 🚀
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default AboutSection;
