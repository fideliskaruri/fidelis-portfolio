"use client";
import React, { useState } from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import DesignsSection from './components/DesignsSection';
import SkillsSection from './components/SkillsSection';
import { FaRocket, FaBrain, FaGlobe, FaGamepad, FaPython, FaJava, FaNode, FaReact, FaFigma, FaDocker, FaAws, FaFileAlt, FaChartLine, FaCameraRetro, FaShieldAlt } from 'react-icons/fa';
import { SiCsharp, SiMicrosoftazure, SiTypescript, SiJavascript, SiTailwindcss, SiMongodb, SiPostgresql, SiDotnet, SiAzuredevops, SiCypress, SiFlask, SiFirebase, SiKotlin, SiMysql, SiGooglecloud, SiJest, SiTensorflow, SiScikitlearn, SiJupyter, SiHuggingface, SiPytorch, SiMicrosoft } from 'react-icons/si';
import Contact from './components/Contact';
import ContactButton from './components/ContactButton';
import Footer from './components/Footer';
import { Icon } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');

  const projects = [
    {
      title: "Personal Portfolio",
      description: "An interactive, space-themed portfolio website showcasing my skills and projects.",
      technologies: ['React', 'Next.js', 'Framer Motion', 'Tailwind CSS'],
      image: "/placeholder.svg",
      githubLink: "https://github.com/fideliskaruri/fidelis-portfolio",
      icon: FaRocket,
      color: "from-purple-500 to-blue-500"
    },
    {
      title: "DocSynk",
      description: "A collaborative document editing platform with real-time synchronization and version tracking.",
      technologies: ['TypeScript', 'Next.js', 'tRPC', 'Prisma'],
      image: "/placeholder.svg",
      githubLink: "https://github.com/fideliskaruri/docSynk",
      icon: FaFileAlt,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "AI Social Sentiments",
      description: "Analyze social media posts and determine public sentiment using AI-powered insights.",
      technologies: ['TypeScript', 'Python', 'PyTorch', 'React', 'Flask'],
      image: "/placeholder.svg",
      githubLink: "https://github.com/fideliskaruri/social-media-sentiment-analysis",
      icon: FaChartLine,
      color: "from-blue-500 to-cyan-500"
    },
    // {
    //   title: "QuickPic",
    //   description: "A full-stack gallery app for quick photo management and sharing.",
    //   technologies: ['TypeScript', 'React', 'Node.js', 'Express'],
    //   image: "/placeholder.svg",
    //   githubLink: "https://github.com/fideliskaruri/t3gallery",
    //   icon: FaCameraRetro,
    //   color: "from-pink-500 to-orange-500"
    // },
    {
      title: "UmmaSecuregate",
      description: "A security staff management and incident recording system for streamlined operations.",
      technologies: ['React', 'Firebase'],
      image: "/placeholder.svg",
      githubLink: "https://github.com/fideliskaruri/SecureGateAndroid",
      icon: FaShieldAlt,
      color: "from-red-500 to-yellow-500"
    }
  ];


  const experience = [
    {
      company: "Microsoft",
      role: "Software Engineer Intern",
      date: "June 2024 – August 2024",
      description: "Improved the User Experience for an internal tool for tracking Accessibility compliance for majority of Microsoft's Products. Did full-stack development, testing, and deployment.",
      technologies: ['ReactJs', 'Cypress', 'Typescript', 'Jest', 'ASP.NET', 'Entity Framework', 'SQL', 'Azure DevOps'],
      logo: "/Microsoft.svg",
      color: "from-blue-600 to-cyan-600"
    },
    {
      company: "Safaricom PLC",
      role: "Software Engineer Intern",
      date: "October 2023 – April 2024",
      description: "Developed mini apps for the MPESA Super App, deployed on various cloud services, and collaborated with Backend and DevOps engineers to manage containerized microservices.",
      technologies: ['Azure', 'AWS', 'GCP', 'APIGEE', 'Javascript'],
      logo: '/Safaricom.svg', 
      color: "from-green-600 to-emerald-600"
    },
    {
      company: "Everset Tech",
      role: "Software Engineer",
      date: "September 2023 – October 2023",
      description: "Built web apps for a startup focused on data privacy, up to their pre-seeding stage.",
      technologies: ['ReactJS', 'Tailwind CSS', 'Express JS', 'AWS Elastic Beanstalk', 'AWS Code Pipeline'],
      logo: "", 
      color: "from-purple-600 to-indigo-600"
    }
  ];

  const figmaDesigns = [
    {
      title: "Upcoming Personal Porfolio",
      description: "A more creative and interactive personal portfolio design",
      image: "/Designs/RevisedPortfolio.png",
      link: "https://www.figma.com/proto/Xd4uQLqFDrOQNT0b83W99f?node-id=70-13&fuid=968866836753698867&prev-plan-id=1358740513916422838&prev-plan-type=team&prev-selected-view=recentsAndSharing&prev-tab=recently-viewed",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "PC builder mobile app",
      description: "User-friendly mobile banking application interface",
      image: "/Designs/pc-builder.png",
      link: "https://www.figma.com/proto/J2LocxeGC6XJDcG4EFApIp/CraftScore-PC-Builder?node-id=1-2&starting-point-node-id=1%3A2",
      color: "from-blue-500 to-indigo-500"
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
    {
      category: "Machine Learning",
      items: [
        { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-500' },
        { name: "PyTorch", icon: SiPytorch, color: "text-red-500" },
        { name: 'Scikit-Learn', icon: SiScikitlearn, color: 'text-yellow-500' },
        { name: 'Jupyter Notebook', icon: SiJupyter, color: 'text-blue-500' },
        { name: "Hugging Face", icon: SiHuggingface, color: "text-yellow-500" }
      ],
    }
  ];

  return (

    <div className="App">
      <Cursor />
      <Navbar setActiveSection={setActiveSection} activeSection={activeSection} />
      <main className="container mx-auto px-4 mt-20">
        <AboutSection />
        <ExperienceSection experience={experience} />
        <ProjectsSection projects={projects} />
        <DesignsSection figmaDesigns={figmaDesigns} />
        <SkillsSection skills={skills} />
        <Contact />
        <ContactButton />
      </main>
      <Footer/>
    </div>
  );
};

export default App;
