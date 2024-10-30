import React from 'react';
import { motion } from 'framer-motion';

interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubLink: string;
    color: string; // Color for the gradient background
}

interface ProjectsSectionProps {
    projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
    return (
        <motion.div
        id='projects'
            className="bg-white text-black rounded-3xl p-8 my-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-4xl font-bold mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <motion.div
                        key={project.title}
                        className={`rounded-xl p-[2px] bg-gradient-to-r ${project.color}`}
                    >
                        <div className="bg-white rounded-xl p-4">
                            <h3 className="text-xl font-bold">{project.title}</h3>
                            <p>{project.description}</p>
                            <p className="mt-2">
                                Technologies: {project.technologies.join(', ')}
                            </p>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-blue-600">
                                View on GitHub
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default ProjectsSection;
