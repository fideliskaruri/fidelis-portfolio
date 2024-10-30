"use client";
import React, { useState } from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import DesignsSection from './components/DesignsSection';
import SkillsSection from './components/SkillsSection';
import { FaRocket, FaBrain, FaGlobe, FaGamepad, FaPython, FaJava, FaNode, FaReact, FaFigma, FaDocker, FaAws } from 'react-icons/fa';
import { SiCsharp, SiMicrosoftazure, SiTypescript, SiJavascript, SiTailwindcss, SiMongodb, SiPostgresql, SiDotnet, SiAzuredevops, SiCypress, SiFlask, SiFirebase, SiKotlin, SiMysql, SiGooglecloud, SiJest } from 'react-icons/si';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');

  const projects = [
    {
      title: "Space Portfolio",
      description: "An interactive, space-themed portfolio website showcasing my skills and projects.",
      technologies: ['React', 'Next.js', 'Framer Motion', 'Tailwind CSS'],
      image: "/placeholder.svg",
      githubLink: "https://github.com/fideliskaruri/fidelis-portfolio",
      icon: FaRocket,
      color: "from-purple-500 to-blue-500"
    },
    {
      title: "AI Chat Assistant",
      description: "A smart chatbot powered by machine learning algorithms to provide instant customer support.",
      technologies: ['Python', 'TensorFlow', 'Flask', 'React'],
      image: "/placeholder.svg",
      githubLink: "https://github.com/fideliskaruri/UmmaSecuregate",
      icon: FaBrain,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Crypto Tracker",
      description: "Real-time cryptocurrency tracking app with price alerts and portfolio management.",
      technologies: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
      image: "/placeholder.svg",
      githubLink: "https://github.com/fideliskaruri/crypto-tracker",
      icon: FaGlobe,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Gaming Platform",
      description: "A social gaming platform for connecting players and organizing tournaments.",
      technologies: ['React', 'Socket.io', 'Node.js', 'PostgreSQL'],
      image: "/placeholder.svg",
      githubLink: "https://github.com/fideliskaruri/gaming-platform",
      icon: FaGamepad,
      color: "from-red-500 to-pink-500"
    }
  ];

  const experience = [
    {
      company: "Microsoft",
      role: "Software Engineer Intern",
      date: "June 2024 – August 2024",
      description: "Improved an internal tool for tracking Accessibility compliance of Microsoft Products. Implemented user-centric design and personalized dashboard while maintaining high accessibility standards.",
      technologies: ['ReactJs', 'Cypress', 'Typescript', 'Jest', 'ASP.NET', 'Entity Framework', 'SQL', 'Azure DevOps'],
      icon: SiMicrosoftazure,
      color: "from-blue-600 to-cyan-600"
    },
    {
      company: "Safaricom PLC",
      role: "Software Engineer Intern",
      date: "October 2023 – April 2024",
      description: "Developed mini apps for the MPESA App, deployed on various cloud services, and collaborated with Backend and DevOps engineers to manage containerized microservices.",
      technologies: ['Azure', 'AWS', 'GCP', 'APIGEE'],
      icon: FaGamepad, // Assuming FaGamepad was intended for the mobile experience
      color: "from-green-600 to-emerald-600"
    },
    {
      company: "Everset Tech",
      role: "Software Engineer",
      date: "September 2023 – October 2023",
      description: "Built web apps for a startup focused on data privacy, up to their pre-seeding stage.",
      technologies: ['ReactJS', 'Tailwind CSS', 'Express JS', 'AWS Elastic Beanstalk', 'AWS Code Pipeline'],
      icon: FaReact, // Assuming FaReact was intended for the web app experience
      color: "from-purple-600 to-indigo-600"
    }
  ];

  const figmaDesigns = [
    {
      title: "E-commerce Dashboard",
      description: "A modern dashboard design for an e-commerce platform",
      image: "/first-render.png",
      link: "https://figma.com/file/...",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Mobile Banking App",
      description: "User-friendly mobile banking application interface",
      image: "/placeholder.svg",
      link: "https://figma.com/file/...",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Social Media Platform",
      description: "Next-gen social media platform design",
      image: "/placeholder.svg",
      link: "https://figma.com/file/...",
      color: "from-purple-500 to-pink-500"
    }
  ];
const skills = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
      { name: 'Python', icon: FaPython, color: 'text-blue-400' },
      { name: 'Java', icon: FaJava, color: 'text-red-500' },
      { name: 'C#', icon: SiCsharp, color: 'text-green-500' },
      { name: 'Kotlin', icon: SiKotlin, color: 'text-purple-500' },
    ],
  },
  {
    category: 'Frontend Development',
    items: [
      { name: 'React.js', icon: FaReact, color: 'text-cyan-400' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
    ],
  },
  {
    category: 'Backend Development',
    items: [
      { name: 'Node.js', icon: FaNode, color: 'text-green-500' },
      { name: '.NET', icon: SiDotnet, color: 'text-purple-600' },
      { name: 'Flask', icon: SiFlask, color: 'text-gray-800' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
      { name: 'MySQL', icon: SiMysql, color: 'text-blue-500' },
      { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' },
    ],
  },
  {
    category: 'DevOps & Tools',
    items: [
      { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
      { name: 'AWS', icon: FaAws, color: 'text-yellow-500' },
      { name: 'Azure DevOps', icon: SiAzuredevops, color: 'text-blue-600' },
      { name: 'Google Cloud', icon: SiGooglecloud, color: 'text-blue-500' },
    ],
  },
  {
    category: 'Testing',
    items: [
      { name: 'Cypress', icon: SiCypress, color: 'text-gray-800' },
      { name: 'Jest', icon: SiJest, color: 'text-red-600' },
    ],
  },
  {
    category: 'Design',
    items: [
      { name: 'Figma', icon: FaFigma, color: 'text-purple-500' },
    ],
  },
];

  return (
    <div className="App bg-blue-500 p-2 pb-10">
      <Cursor />
      <Navbar setActiveSection={setActiveSection} activeSection={activeSection} />
      <main className="container mx-auto px-4 mt-20">
        <AboutSection />
        <ExperienceSection experience={experience} />
        <ProjectsSection projects={projects} />
        <DesignsSection figmaDesigns={figmaDesigns} />
        <SkillsSection skills={skills} />
        <Contact/>
      </main>
    </div>
  );
};

export default App;
