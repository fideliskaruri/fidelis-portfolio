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
            className="bg-white text-black rounded-3xl p-8 my-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-4xl font-bold mb-8">Experience</h2>
            <div className="space-y-8">
                {experience.map((exp) => (
                    <motion.div
                        key={exp.company}
                        className={`rounded-xl p-[2px] bg-gradient-to-r ${exp.color}`}
                    >
                        <div className="bg-white rounded-xl p-4">
                            <h3 className="text-xl font-bold">{exp.company}</h3>
                            <p>{exp.role}</p>
                            <p>{exp.date}</p>
                            <p>{exp.description}</p>
                            <p className="mt-2">
                                Technologies: {exp.technologies.join(', ')}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default ExperienceSection;
