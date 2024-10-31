import React from 'react';
import { motion } from 'framer-motion';

interface Experience {
    company: string;
    role: string;
    date: string;
    description: string;
    technologies: string[];
    color: string; // Color for the gradient background
}

interface ExperienceSectionProps {
    experience: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
    return (
        <motion.div
            id="experience"
            className="bg-white text-black rounded-2xl p-6 sm:p-8 my-6 sm:my-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">Experience</h2>
            <div className="space-y-10 sm:space-y-12">
                {experience.map((exp) => (
                    <motion.div
                        key={exp.company}
                        className={`rounded-xl p-[1px] sm:p-[2px] bg-gradient-to-r ${exp.color}`}
                    >
                        <div className="bg-white rounded-xl p-5 sm:p-6 md:p-8">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">{exp.company}</h3>
                            <p className="text-sm sm:text-base font-medium text-gray-600">{exp.role}</p>
                            <p className="text-xs sm:text-sm text-gray-500 mb-4">{exp.date}</p>

                            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">{exp.description}</p>

                            <div className="border-t border-gray-200 mt-4 pt-4">
                                <h4 className="text-sm font-semibold text-gray-600 mb-2">Technologies Used:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-gray-100 text-xs sm:text-sm md:text-base px-3 py-1 rounded-full text-gray-700 shadow-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default ExperienceSection;
