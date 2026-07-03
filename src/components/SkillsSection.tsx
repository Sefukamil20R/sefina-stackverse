"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

interface Skill {
  name: string
  logo: string
  brandColor: string
}

const skillRows: Skill[][] = [
  [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      brandColor: "#61DAFB",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      brandColor: "#f2f2f2",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      brandColor: "#339933",
    },
    {
      name: "OpenAI",
      logo: "https://cdn.simpleicons.org/openai/10A37F",
      brandColor: "#10A37F",
    },
  ],
  [
    {
      name: "Gemini",
      logo: "https://cdn.simpleicons.org/googlegemini/8E75B2",
      brandColor: "#8E75B2",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      brandColor: "#3178C6",
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      brandColor: "#336791",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      brandColor: "#13AA52",
    },
  ],
  [
    {
      name: "Express",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      brandColor: "#f2f2f2",
    },
    {
      name: "GraphQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
      brandColor: "#E10098",
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      brandColor: "#3776AB",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      brandColor: "#F7DF1E",
    },
  ],
  [
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      brandColor: "#2496ED",
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      brandColor: "#06B6D4",
    },
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      brandColor: "#007396",
    },
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      brandColor: "#00758F",
    },
  ],
]

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <div
        className="relative p-6 rounded-lg transition-all duration-300"
        style={{
          backgroundColor: "#373543",
          border: isHovered ? `2px solid ${skill.brandColor}` : "1px solid #515266",
        }}
      >
        {isHovered && (
          <div
            className="absolute inset-0 rounded-lg opacity-20 blur-lg"
            style={{ backgroundColor: skill.brandColor }}
          />
        )}

        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 flex flex-col items-center gap-3"
        >
          <div className="w-12 h-12 relative">
            <Image
              src={skill.logo || "/placeholder.svg"}
              alt={skill.name}
              fill
              unoptimized
              className="object-contain"
              style={{ filter: isHovered ? `drop-shadow(0 0 8px ${skill.brandColor})` : "none" }}
            />
          </div>
          <p className="font-semibold text-sm text-center" style={{ color: "#f2f2f2" }}>
            {skill.name}
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function SkillsSection() {
  return (
    <section className="py-20 px-4 md:px-8" style={{ backgroundColor: "#282830" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#f2f2f2" }}>
            Technical <span className="text-[#bb852b]">Expertise</span>
          </h2>
          <div className="h-1 w-16 mx-auto rounded-full" style={{ backgroundColor: "#bb852b" }} />
          <p className="mt-6 text-lg" style={{ color: "#a0a0a0" }}>
            The technologies that shape my craft and bring my ideas to life — tested, refined, and proven through hands-on experience.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4 md:gap-6">
          {skillRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            >
              {row.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={rowIndex * 4 + index}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
