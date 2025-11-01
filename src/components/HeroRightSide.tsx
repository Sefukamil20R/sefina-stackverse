"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

const HeroRightSide = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      opacity: number
      hue: number
    }

    const particles: Particle[] = []

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
        hue: Math.random() * 40 + 35,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        particle.y = Math.max(0, Math.min(canvas.height, particle.y))

        ctx.shadowColor = `hsla(${particle.hue}, 100%, 50%, 0.5)`
        ctx.shadowBlur = 8
        ctx.fillStyle = `hsla(${particle.hue}, 100%, 60%, ${particle.opacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="relative hidden lg:flex items-center justify-center w-full h-[600px]"
    >
      <canvas ref={canvasRef} className="absolute inset-0 rounded-3xl opacity-40" />

      {/* Central glowing orb */}
      <motion.div
        className="absolute w-80 h-80 rounded-full"
        style={{
          background: "radial-gradient(circle at 35% 35%, #bb852b40 0%, #bb852b10 40%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Main workspace visualization */}
      <motion.div className="relative z-10 w-full h-full flex items-center justify-center px-8">
        {/* CENTER: Code Editor Window - represents the development work */}
        <motion.div
          className="absolute"
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="w-72 rounded-2xl overflow-hidden border border-[#bb852b]/50 backdrop-blur-2xl bg-gradient-to-br from-[#282830]/80 to-[#373543]/80 shadow-2xl"
            whileHover={{
              borderColor: "#bb852b",
              boxShadow: "0 0 50px rgba(187, 133, 43, 0.5)",
            }}
          >
            {/* Code editor header */}
            <div className="bg-[#373543]/60 px-4 py-3 border-b border-[#515266]/50 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#bb852b]/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#bb852b]/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#bb852b]/20" />
              </div>
              <span className="text-xs text-[#bb852b]/70 ml-2 font-mono">app.tsx</span>
            </div>

            {/* Code content with animated lines */}
            <div className="p-4 space-y-2 font-mono text-xs">
              <motion.div
                className="text-[#bb852b]/80"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <span className="text-[#515266]">const</span> <span className="text-[#d8a650]">buildSolution</span> = ()
                =&gt;
              </motion.div>

              <motion.div
                className="text-[#bb852b]/70 ml-4"
                animate={{
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
              >
                <span className="text-[#515266]">return</span> ✨ <span className="text-[#d8a650]">amazing</span>
              </motion.div>

              <motion.div
                className="text-[#bb852b]/60 ml-4"
                animate={{
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3.4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
              >
                <span className="text-[#515266]">experience</span>
              </motion.div>

              <motion.div
                className="text-[#bb852b]/50 ml-4"
                animate={{
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 3.6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
              >
                <span className="text-[#515266]">{"}"}</span>
              </motion.div>

              {/* Blinking cursor */}
              <motion.div
                className="inline-block w-2 h-4 bg-[#bb852b] ml-1"
                animate={{
                  opacity: [1, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* LEFT: Design/UI Mockup - represents frontend creativity */}
        <motion.div
          className="absolute left-0 top-1/4"
          animate={{
            x: [0, 25, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="w-48 h-56 rounded-xl border border-[#bb852b]/40 backdrop-blur-lg bg-gradient-to-br from-[#373543]/60 to-[#282830]/60 p-4 shadow-xl overflow-hidden"
            whileHover={{
              borderColor: "#bb852b",
              boxShadow: "0 0 40px rgba(187, 133, 43, 0.4)",
            }}
          >
            {/* Frontend label */}
            <div className="text-xs text-[#bb852b]/80 font-mono mb-3 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#bb852b] animate-pulse" />
              Frontend UI
            </div>

            {/* UI Components showcase */}
            <div className="space-y-3">
              {/* Header/Title */}
              <motion.div
                className="h-4 bg-gradient-to-r from-[#bb852b] to-[#d8a650] rounded-lg"
                animate={{
                  scaleX: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              {/* Button component */}
              <motion.div
                className="h-8 bg-[#bb852b]/30 rounded-lg border border-[#bb852b]/50 flex items-center justify-center text-xs text-[#bb852b]/70 font-mono"
                whileHover={{ backgroundColor: "#bb852b50", borderColor: "#bb852b" }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                Button
              </motion.div>

              {/* Input field */}
              <motion.div
                className="h-7 bg-[#515266]/20 rounded-lg border border-[#515266]/40 px-2 flex items-center"
                animate={{
                  borderColor: ["#515266", "#bb852b", "#515266"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <span className="text-xs text-[#515266]/50 font-mono">Input...</span>
              </motion.div>

              {/* Card component */}
              <motion.div
                className="h-12 bg-gradient-to-br from-[#373543]/40 to-[#282830]/40 rounded-lg border border-[#bb852b]/20 p-2"
                animate={{
                  borderColor: ["#bb852b30", "#bb852b60", "#bb852b30"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="h-1.5 bg-[#bb852b]/40 rounded-full mb-1.5" />
                <div className="h-1 bg-[#515266]/30 rounded-full w-3/4" />
              </motion.div>

              {/* Component grid */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <motion.div
                  className="h-6 bg-[#bb852b]/15 rounded border border-[#bb852b]/25 flex items-center justify-center text-xs text-[#bb852b]/60"
                  animate={{
                    scale: [0.95, 1.05, 0.95],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  Icon
                </motion.div>
                <motion.div
                  className="h-6 bg-[#bb852b]/15 rounded border border-[#bb852b]/25 flex items-center justify-center text-xs text-[#bb852b]/60"
                  animate={{
                    scale: [0.95, 1.05, 0.95],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                >
                  Badge
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT: Database/Backend - represents backend logic */}
        <motion.div
          className="absolute right-0 top-1/4"
          animate={{
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 7.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.3,
          }}
        >
          <motion.div
            className="w-40 h-48 rounded-xl border border-[#bb852b]/40 backdrop-blur-lg bg-gradient-to-br from-[#373543]/60 to-[#282830]/60 p-3 shadow-xl"
            whileHover={{
              borderColor: "#bb852b",
              boxShadow: "0 0 40px rgba(187, 133, 43, 0.4)",
            }}
          >
            {/* Database visualization */}
            <div className="space-y-3">
              <div className="text-xs text-[#bb852b]/70 font-mono">Database</div>

              {/* Data rows */}
              <motion.div
                className="space-y-1.5"
                animate={{
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="h-1.5 bg-[#bb852b]/60 rounded-full w-full" />
                <div className="h-1.5 bg-[#bb852b]/40 rounded-full w-4/5" />
                <div className="h-1.5 bg-[#bb852b]/20 rounded-full w-3/5" />
              </motion.div>

              {/* Connection indicators */}
              <div className="pt-2 border-t border-[#515266]/30">
                <div className="text-xs text-[#515266]/60 font-mono mb-2">Connections</div>
                <div className="flex gap-1">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-[#bb852b]"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="w-2 h-2 rounded-full bg-[#bb852b]/70"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                  />
                  <motion.div
                    className="w-2 h-2 rounded-full bg-[#bb852b]/40"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 0.4,
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Connecting flow lines - data flowing between frontend, code, and backend */}
        <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#bb852b" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#d8a650" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#bb852b" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Left to center flow */}
          <motion.path
            d="M 15% 50% Q 35% 45% 50% 50%"
            stroke="url(#flowGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          />

          {/* Right to center flow */}
          <motion.path
            d="M 85% 50% Q 65% 45% 50% 50%"
            stroke="url(#flowGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              delay: 0.5,
            }}
          />
        </svg>
      </motion.div>

      {/* Outer glow ring */}
      <motion.div
        className="absolute inset-0 rounded-3xl border border-[#bb852b]/20"
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Accent glow orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-40 h-40 bg-[#bb852b] rounded-full opacity-5 blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-[#d8a650] rounded-full opacity-3 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
    </motion.div>
  )
}

export default HeroRightSide
