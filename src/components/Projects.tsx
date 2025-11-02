"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Github } from "lucide-react"
import {
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiLaravel,
  SiPhp,
  SiJavascript,
  SiFirebase,
  SiNodedotjs,
  SiCss3,
  SiBootstrap,
} from "react-icons/si"

interface Project {
  id: number
  name: string
  description: string
  mockupImage: string
  type: "Frontend" | "Backend" | "Fullstack"
  frameworks: string[]
  frameworkIcons: React.ReactNode[]
  githubLink?: string
  isOpenSource?: boolean
}

const projects: Project[] = [
  {
    id: 1,
    name: "MaledaHandcraft Ecommerce",
    description:
      "Full-featured ecommerce platform for handcrafted products with secure payment processing and inventory management",
    mockupImage: "/Screenshoot/MaledaHandcraft.png",
    type: "Fullstack",
    frameworks: ["JavaScript", "CSS5", "PHP"],
    frameworkIcons: [
      <SiJavascript key="js" className="w-6 h-6 text-yellow-400" />,
      <SiCss3 key="css" className="w-6 h-6 text-blue-500" />,
      <SiPhp key="php" className="w-6 h-6 text-purple-500" />,
    ],
    githubLink: "https://github.com/Sefukamil20R/maleda-ecommerce-backend",
  },
  {
    id: 2,
    name: "CryptoSentinel",
    description:
      "Blockchain-based transaction monitoring platform for fintech companies to track and verify cryptocurrency transactions with real-time analytics",
    mockupImage: "/Screenshoot/chainGuard.jpg",
    type: "Fullstack",
    frameworks: ["Next.js", "Express.js", "Hedera"],
    frameworkIcons: [
      <SiNextdotjs key="next" className="w-6 h-6 text-white" />,
      <SiExpress key="express" className="w-6 h-6 text-gray-400" />,
      <div
        key="hedera"
        className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded text-white text-xs flex items-center justify-center font-bold"
      >
        HD
      </div>,
    ],
    githubLink: "https://github.com/Sefukamil20R/CryptoSentinel",
  },
  {
    id: 3,
    name: "Streamly",
    description:
      "Netflix-inspired movie streaming application with personalized recommendations, watchlist management, and smooth video playback",
    mockupImage: "/Screenshoot/NetflixStreamly.png",
    type: "Frontend",
    frameworks: ["React.js", "CSS5"],
    frameworkIcons: [
      <SiReact key="react" className="w-6 h-6 text-cyan-400" />,
      <SiCss3 key="css" className="w-6 h-6 text-blue-500" />,
    ],
    githubLink: "https://github.com/Sefukamil20R/Streamly",
  },
  {
    id: 4,
    name: "Ecometrix",
    description:
      "Amazon-like e-commerce platform with advanced product filtering, real-time inventory, secure checkout, and order tracking",
    mockupImage: "/Screenshoot/Ecometrix.png",
    type: "Frontend",
    frameworks: ["React.js", "Firebase", "CSS5"],
    frameworkIcons: [
      <SiReact key="react" className="w-6 h-6 text-cyan-400" />,
      <SiFirebase key="firebase" className="w-6 h-6 text-yellow-500" />,
      <SiCss3 key="css" className="w-6 h-6 text-blue-500" />,
    ],
    githubLink: "https://github.com/Sefukamil20R/Ecometrix",
  },
  {
    id: 5,
    name: "InterTechHub",
    description:
      "Comprehensive intern management system for tracking internships, submissions, resources, and performance with real-time notifications",
    mockupImage: "/Screenshoot/Intertechub_intern_Management_App.png",
    type: "Frontend",
    frameworks: ["React.js", "CSS5", "REST API"],
    frameworkIcons: [
      <SiReact key="react" className="w-6 h-6 text-cyan-400" />,
      <SiCss3 key="css" className="w-6 h-6 text-blue-500" />,
      <div
        key="api"
        className="w-6 h-6 bg-green-500 rounded text-white text-xs flex items-center justify-center font-bold"
      >
        API
      </div>,
    ],
    githubLink: "https://github.com/Sefukamil20R/Intertechub_intern_Management_App",
  },
  {
    id: 6,
    name: "EduEcho",
    description:
      "Community-driven forum platform where students can ask questions, share knowledge, and collaborate with peers in real-time",
    mockupImage: "/Screenshoot/EduEcho.png",
    type: "Fullstack",
    frameworks: ["React.js", "Express.js", "Node.js", "Bootstrap"],
    frameworkIcons: [
      <SiReact key="react" className="w-6 h-6 text-cyan-400" />,
      <SiExpress key="express" className="w-6 h-6 text-gray-400" />,
      <SiNodedotjs key="node" className="w-6 h-6 text-green-500" />,
      <SiBootstrap key="bootstrap" className="w-6 h-6 text-purple-600" />,
    ],
    githubLink: "https://github.com/Sefukamil20R/EduEcho",
  },
  {
    id: 7,
    name: "ParentalLink",
    description:
      "Student management system backend with conversation features, enabling seamless communication between parents, students, and administrators",
    mockupImage: "/parentallink-mockup.jpg",
    type: "Backend",
    frameworks: ["Laravel", "PHP"],
    frameworkIcons: [
      <SiLaravel key="laravel" className="w-6 h-6 text-red-500" />,
      <SiPhp key="php" className="w-6 h-6 text-purple-500" />,
    ],
    githubLink: "https://github.com/Sefukamil20R/parentalink",
  },
  {
    id: 8,
    name: "Ticketify",
    description:
      "Event management and movie ticket booking system with seat selection, payment integration, and digital ticket delivery",
    mockupImage: "/ticketify-mockup.jpg",
    type: "Frontend",
    frameworks: ["React.js", "JavaScript", "CSS5"],
    frameworkIcons: [
      <SiReact key="react" className="w-6 h-6 text-cyan-400" />,
      <SiJavascript key="js" className="w-6 h-6 text-yellow-400" />,
      <SiCss3 key="css" className="w-6 h-6 text-blue-500" />,
    ],
    githubLink: "https://github.com/Sefukamil20R/Movie-Ticket-Booking",
    isOpenSource: true,
  },
]

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const hoverVariants: any = {
  hover: {
    scale: 1.05,
    rotateX: 5,
    rotateY: -5,
    transition: {
      duration: 0.3,
    },
  },
}

const pulseGlowVariants: any = {
  animate: {
    boxShadow: [
      "0 0 15px rgba(187, 133, 43, 0.3), inset 0 0 15px rgba(187, 133, 43, 0.05)",
      "0 0 30px rgba(187, 133, 43, 0.5), inset 0 0 20px rgba(187, 133, 43, 0.1)",
      "0 0 15px rgba(187, 133, 43, 0.3), inset 0 0 15px rgba(187, 133, 43, 0.05)",
    ],
    transition: {
      duration: 2.5,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "loop" as const,
    },
  },
}

const getTypeBadgeColor = (type: string) => {
  switch (type) {
    case "Frontend":
      return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
    case "Backend":
      return "bg-purple-500/20 text-purple-400 border-purple-500/30"
    case "Fullstack":
      return "bg-green-500/20 text-green-400 border-green-500/30"
    default:
      return "bg-gray-500/20 text-gray-400 border-gray-500/30"
  }
}

const renderBackendVisual = () => (
  <div className="h-full w-full flex flex-col items-center justify-center gap-6 p-8 relative overflow-hidden">
    {/* Animated background grid */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-transparent to-green-500"></div>
    </div>

    {/* Database icon representation */}
    <div className="relative z-10 flex flex-col items-center gap-4">
      <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-green-400">
        {"{ }"}
      </div>
      <div className="text-center">
        <p className="text-purple-300 text-sm font-mono mb-2">Backend API</p>
        <p className="text-green-300 text-xs font-mono">Data Processing</p>
      </div>
    </div>

    {/* Animated bars */}
    <div className="space-y-3 w-full relative z-10">
      <motion.div
        animate={{ width: ["60%", "100%", "60%"] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="h-2 bg-gradient-to-r from-purple-500 to-transparent rounded-full"
      ></motion.div>
      <motion.div
        animate={{ width: ["70%", "100%", "70%"] }}
        transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
        className="h-2 bg-gradient-to-r from-green-500 to-transparent rounded-full"
      ></motion.div>
      <motion.div
        animate={{ width: ["50%", "100%", "50%"] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        className="h-2 bg-gradient-to-r from-cyan-500 to-transparent rounded-full"
      ></motion.div>
    </div>
  </div>
)

const renderTicketifyVisual = () => (
  <div className="h-full w-full flex flex-col items-center justify-center gap-6 p-8 relative overflow-hidden">
    {/* Subtle background */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0 bg-gradient-to-br from-[#bb852b] via-transparent to-[#bb852b]"></div>
    </div>

    {/* Movie ticket UI representation */}
    <div className="relative z-10 flex flex-col items-center gap-6 w-full">
      {/* Ticket 1 */}
      <motion.div
        animate={{ y: [-2, 2, -2] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        className="w-full max-w-xs h-16 bg-gradient-to-r from-[#373543] to-[#2a2a30] rounded-lg shadow-lg flex items-center justify-between px-4 border border-[#bb852b]/40"
      >
        <div className="text-[#bb852b] font-semibold text-sm">🎬 Event</div>
        <div className="text-[#bb852b] text-xs">Premium</div>
      </motion.div>

      {/* Seat grid visualization */}
      <div className="grid grid-cols-5 gap-2 relative z-10">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, delay: i * 0.1, repeat: Number.POSITIVE_INFINITY }}
            className="w-5 h-5 bg-[#bb852b]/60 hover:bg-[#bb852b] rounded text-white text-xs flex items-center justify-center font-bold transition-colors"
          >
            ◆
          </motion.div>
        ))}
      </div>

      {/* Ticket 2 */}
      <motion.div
        animate={{ y: [2, -2, 2] }}
        transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY }}
        className="w-full max-w-xs h-16 bg-gradient-to-r from-[#2a2a30] to-[#373543] rounded-lg shadow-lg flex items-center justify-between px-4 border border-[#bb852b]/40"
      >
        <div className="text-[#bb852b] font-semibold text-sm">🎟️ Booking</div>
        <div className="text-[#bb852b] text-xs">Available</div>
      </motion.div>
    </div>
  </div>
)

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 lg:px-16 bg-[#282830]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Creations</h2>
          <p className="text-gray-400 text-lg mb-6">
            Full-stack projects showcasing frontend, backend, and blockchain expertise
          </p>
          <div className="flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#bb852b] to-transparent rounded-full"></div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="group">
              <motion.div
                whileHover={hoverVariants.hover}
                className="bg-[#373543] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                style={{ perspective: "1000px" }}
              >
                <motion.div
                  animate="animate"
                  variants={pulseGlowVariants}
                  className="relative h-64 bg-gradient-to-br from-[#1a1a1e] to-[#2a2a30] flex items-center justify-center overflow-hidden rounded-lg border-2 border-[#bb852b]/40 hover:border-[#bb852b]/70 transition-colors duration-300"
                >
                  {/* Subtle shimmer effect */}
                  <motion.div
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                    className="absolute inset-0 opacity-30"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(187, 133, 43, 0.4) 0%, rgba(187, 133, 43, 0.1) 50%, rgba(187, 133, 43, 0.4) 100%)",
                      backgroundSize: "200% 200%",
                    }}
                  ></motion.div>

                  {/* Subtle radial glow */}
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      background: "radial-gradient(circle at center, rgba(187, 133, 43, 0.3) 0%, transparent 70%)",
                    }}
                  ></div>

                  {project.type === "Backend" ? (
                    renderBackendVisual()
                  ) : project.id === 8 ? (
                    renderTicketifyVisual()
                  ) : (
                    <motion.img
                      src={project.mockupImage}
                      alt={project.name}
                      className="h-full w-full object-cover object-top rounded-md shadow-2xl relative z-10"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-white flex-1">{project.name}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border whitespace-nowrap ${getTypeBadgeColor(project.type)}`}
                    >
                      {project.type}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm md:text-base mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      {project.frameworkIcons.map((icon, idx) => (
                        <div key={idx} className="flex items-center justify-center">
                          {icon}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      {project.githubLink ? (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#bb852b] hover:bg-[#a67a24] text-white transition-colors duration-200 group/icon"
                          title="View on GitHub"
                        >
                          <Github size={20} />
                        </a>
                      ) : null}
                      {project.isOpenSource && (
                        <span className="text-xs text-[#bb852b] font-semibold">Open Source</span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
