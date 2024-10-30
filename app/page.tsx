'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaNode,
  FaPython,
  FaJava,
  FaDocker,
  FaAws,
  FaFigma,
  FaRocket,
  FaGamepad,
  FaCode,
  FaMobile,
  FaGlobe,
  FaBrain,
} from 'react-icons/fa'
import {
  SiJavascript,
  SiTypescript,
  SiCsharp,
  SiDotnet,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiAzuredevops,
  SiCypress,
  SiJest,
  SiTailwindcss,
  SiKotlin,
  SiFlask,
  SiMicrosoftazure,
  SiGooglecloud,
} from 'react-icons/si'
import Image from 'next/image'

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const projects = [
    {
      title: "Space Portfolio",
      description: "An interactive, space-themed portfolio website showcasing my skills and projects.",
      technologies: ['React', 'Next.js', 'Framer Motion', 'Tailwind CSS'],
      image: "/placeholder.svg",
      githubLink: "https://github.com/fideliskaruri/space-portfolio",
      icon: FaRocket,
      color: "from-purple-500 to-blue-500"
    },
    {
      title: "AI Chat Assistant",
      description: "A smart chatbot powered by machine learning algorithms to provide instant customer support.",
      technologies: ['Python', 'TensorFlow', 'Flask', 'React'],
      image: "/placeholder.svg",
      githubLink: "https://github.com/fideliskaruri/ai-chat-assistant",
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
  ]

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
      icon: FaMobile,
      color: "from-green-600 to-emerald-600"
    },
    {
      company: "Everset Tech",
      role: "Software Engineer",
      date: "September 2023 – October 2023",
      description: "Built web apps for a startup focused on data privacy, up to their pre-seeding stage.",
      technologies: ['ReactJS', 'Tailwind CSS', 'Express JS', 'AWS Elastic Beanstalk', 'AWS Code Pipeline'],
      icon: FaCode,
      color: "from-purple-600 to-indigo-600"
    }
  ]

  const figmaDesigns = [
    {
      title: "E-commerce Dashboard",
      description: "A modern dashboard design for an e-commerce platform",
      image: "/placeholder.svg",
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
  ]

  const skills = {
    'Programming Languages': [
      { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
      { name: 'Python', icon: FaPython, color: 'text-blue-400' },
      { name: 'Java', icon: FaJava, color: 'text-red-500' },
      { name: 'C#', icon: SiCsharp, color: 'text-green-500' },
      { name: 'Kotlin', icon: SiKotlin, color: 'text-purple-500' },
    ],
    'Frontend Development': [
      { name: 'React.js', icon: FaReact, color: 'text-cyan-400' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
    ],
    'Backend Development': [
      { name: 'Node.js', icon: FaNode, color: 'text-green-500' },
      { name: '.NET', icon: SiDotnet, color: 'text-purple-600' },
      { name: 'Flask', icon: SiFlask, color: 'text-gray-800' },
    ],
    'Databases': [
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
      { name: 'MySQL', icon: SiMysql, color: 'text-blue-500' },
      { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' },
    ],
    'DevOps & Tools': [
      { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
      { name: 'AWS', icon: FaAws, color: 'text-yellow-500' },
      { name: 'Azure DevOps', icon: SiAzuredevops, color: 'text-blue-600' },
      { name: 'Google Cloud', icon: SiGooglecloud, color: 'text-blue-500' },
    ],
    'Testing': [
      { name: 'Cypress', icon: SiCypress, color: 'text-gray-800' },
      { name: 'Jest', icon: SiJest, color: 'text-red-600' },
    ],
    'Design': [
      { name: 'Figma', icon: FaFigma, color: 'text-purple-500' },
    ],
  }

  return (
    <div className="min-h-screen bg-[#0000FF] text-white">
      <div className="stars" />
      <div className="twinkling" />

      {/* Floating cursor effect */}
      <motion.div
        className="fixed w-4 h-4 bg-white rounded-full mix-blend-difference pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: 1.5,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between bg-black p-4">
        <motion.div
          className="text-xl font-bold px-4 py-2 bg-black"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          FIDELIS WACHIRA
        </motion.div>
        <div className="flex gap-8">
          {['ABOUT ME', 'EXPERIENCE', 'PROJECTS', 'DESIGNS', 'CONTACT'].map((item) => (
            <motion.button
              key={item}
              onClick={() => setActiveSection(item.toLowerCase())}
              className={`hover:text-yellow-300 transition-colors relative ${activeSection === item.toLowerCase() ? 'text-yellow-300' : ''
                }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {item}
              {activeSection === item.toLowerCase() && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-300"
                  layoutId="underline"
                />
              )}
            </motion.button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        {/* About Section */}
        <motion.div
          className="bg-white text-black rounded-3xl p-8 my-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-6xl font-bold mb-8 font-['Press_Start_2P'] bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h1>

          <div className="grid md:grid-cols-[300px_1fr] gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="w-full aspect-square relative rounded-2xl overflow-hidden border-4 border-black">
                <Image
                  src="/placeholder.svg"
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
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Hello there! 👋</h2>
              <p className="text-xl">
                I&apos;m Fidelis Wachira, a full-stack developer based in Nairobi, Kenya.
                A nerdy tech-bro with a dream to make software that random everyday people can use.
                Video gamer, anime enjoy-er, PC enthusiast.
              </p>
              <p className="text-xl">
                I am a curious individual when it comes to all things technology and by
                nurturing this I have been able to experience amazing things in the world of
                tech. Always excited to see where the world takes us next...
              </p>
              <p className="text-xl">
                I&apos;m always eager to explore new ideas, like this portfolio's neubrutalist
                design inspired by Adventure Time's color palette. I look forward to
                collaborating on something cool together 🚀
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="bg-white text-black rounded-3xl p-8 my-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                className={`rounded-xl p-[2px] bg-gradient-to-r ${exp.color}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-white rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <exp.icon className="text-4xl shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold">{exp.role}</h3>
                      <h4 className="text-xl font-semibold text-gray-700">{exp.company}</h4>
                      <p className="text-gray-600">{exp.date}</p>
                      <p className="mt-2">{exp.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          className="bg-white text-black rounded-3xl p-8 my-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className={`rounded-xl p-[2px] bg-gradient-to-r ${project.color}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white h-full rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <project.icon className="text-4xl shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="mt-2">{project.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-black text-white"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub />
                        View on GitHub
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* UI/UX Designs Section */}
        <motion.div
          className="bg-white text-black rounded-3xl p-8 my-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-8">UI/UX Designs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {figmaDesigns.map((design, index) => (
              <motion.a
                key={design.title}
                href={design.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative block rounded-xl p-[2px] bg-gradient-to-r ${design.color}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white rounded-xl p-2">
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={design.image}
                      alt={design.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="text-white text-center p-4">
                        <FaFigma className="text-4xl mx-auto mb-2" />
                        <h3 className="text-xl font-bold">{design.title}</h3>
                        <p className="text-sm">{design.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="bg-white text-black rounded-3xl p-8 my-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-8">Skills & Technologies</h2>
          <div className="space-y-8">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-4">{category}</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="bg-gray-100 rounded-xl p-4 flex items-center gap-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                      whileHover={{
                        scale: 1.05,
                        transition: { type: "spring", stiffness: 300 }
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

        {/* Contact Section */}
        <motion.div
          className="bg-white text-black rounded-3xl p-8 my-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-8">Let&apos;s Connect!</h2>
          <div className="flex justify-center gap-8">
            <motion.a
              href="https://github.com/fideliskaruri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/fideliskaruri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="mailto:fideliskaruri@gmail.com"
              className="text-4xl hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </motion.div>
      </main>
    </div>
  )
}