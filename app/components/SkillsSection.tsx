import React from 'react';
import { motion } from 'framer-motion';

interface SkillItem {
    name: string;
    icon: React.ElementType; // Accepts React components for icons
    color: string; // Color for the skill icon
}

interface SkillCategory {
    category: string;
    items: SkillItem[];
}

interface SkillsSectionProps {
    skills: SkillCategory[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
    return (
        <motion.div
            id='skills'
            className="bg-white text-black rounded-3xl p-8 my-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-4xl font-bold mb-8 text-center">Skills & Technologies</h2>
            <div className="space-y-8">
                {skills.map((category, categoryIndex) => (
                    <motion.div
                        key={category.category}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 }}
                    >
                        <h3 className="text-2xl font-bold mb-4">{category.category}</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {category.items.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    className="bg-gray-100 rounded-xl p-4 flex items-center gap-3 font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                                    whileHover={{
                                        scale: 1.05,
                                        transition: { type: 'spring', stiffness: 300 }
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <skill.icon className={`text-2xl ${skill.color}`} />
                                    {skill.name}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default SkillsSection;
