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
            id="projects"
            className="bg-white text-black rounded-2xl p-6 sm:p-8 my-6 sm:my-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {projects.map((project) => (
                    <motion.div
                        key={project.title}
                        className={`rounded-xl p-[1px] sm:p-[2px] bg-gradient-to-r ${project.color}`}
                    >
                        <div className="bg-white rounded-xl p-5 sm:p-6 md:p-8">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">{project.title}</h3>
                            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">{project.description}</p>

                            <div className="border-t border-gray-200 mt-4 pt-4">
                                <h4 className="text-sm font-semibold text-gray-600 mb-2">Technologies:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-gray-100 text-xs sm:text-sm md:text-base px-3 py-1 rounded-full text-gray-700 shadow-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block mt-4 text-sm sm:text-base text-blue-600 font-medium hover:underline transition-all"
                            >
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
