"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, RefreshCw } from "lucide-react"

export function HeroSection() {
  const [text, setText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [windowDimensions, setWindowDimensions] = useState({ width: 1200, height: 800 })
  const [isRefreshing, setIsRefreshing] = useState(false)
  const fullText = "UI/UX Designer Lead | Animation Specialist"

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
        setShowCursor(false)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return

    const updateDimensions = () => {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  const handleRefresh = () => {
    setIsRefreshing(true)
    setText("")
    setShowCursor(true)

    setTimeout(() => {
      let i = 0
      const typingInterval = setInterval(() => {
        if (i < fullText.length) {
          setText(fullText.slice(0, i + 1))
          i++
        } else {
          clearInterval(typingInterval)
          setShowCursor(false)
          setIsRefreshing(false)
        }
      }, 80)
    }, 500)
  }

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-primary/5">
        {/* Floating Particles - Reduced for mobile performance */}
        {[...Array(typeof window !== "undefined" && window.innerWidth < 768 ? 10 : 20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            initial={{
              x: Math.random() * windowDimensions.width,
              y: Math.random() * windowDimensions.height,
            }}
            animate={{
              x: Math.random() * windowDimensions.width,
              y: Math.random() * windowDimensions.height,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}

        {/* Geometric Shapes - Adjusted for mobile */}
        <motion.div
          className="absolute top-10 sm:top-20 left-4 sm:left-20 w-16 sm:w-32 h-16 sm:h-32 border-2 border-primary/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-12 sm:w-24 h-12 sm:h-24 bg-secondary/10 rounded-lg"
          animate={{ rotate: -360, scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <br></br>
         <br></br>
          <br></br>
           <br></br>
         <br></br>
          <br></br>
        {/* Name Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6"
        >
          Kala
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Kathiravan</span>
        </motion.h1>

        {/* Typewriter Effect with Refresh Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 sm:mb-8 min-h-[3rem] sm:min-h-[4rem] flex items-center justify-center flex-col sm:flex-row gap-2 sm:gap-4"
        >
          <span className="font-mono text-center">
            {text}
            {showCursor && <span className="animate-pulse">|</span>}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleRefresh}
            disabled={isRefreshing}
            className={`p-2 hover:bg-primary/10 ${isRefreshing ? "animate-refresh-bounce" : ""}`}
            title="Refresh animation"
          >
            <RefreshCw size={16} className={isRefreshing ? "animate-spin" : ""} />
          </Button>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4"
        >
          Leading UI/UX design teams with expertise in animation-based interfaces. I specialize in creating visually
          compelling and user-friendly designs that blend creativity, functionality, and smooth animations to deliver
          exceptional digital experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16"
        >
          <Button
            size="lg"
            className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold w-full sm:w-auto min-h-[44px]"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span className="relative z-10">View My Work</span>
            <motion.div
              className="absolute inset-0 bg-secondary"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="group border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold bg-transparent w-full sm:w-auto min-h-[44px]"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
        </motion.div>

        {/* Social Links */}
        
<br></br>
<br></br>
        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.8 }}
          onClick={scrollToAbout}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors duration-300 min-h-[44px] flex flex-col items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <span className="text-xs sm:text-sm mb-2">Scroll Down</span>
            <ArrowDown size={16} className="sm:w-5 sm:h-5" />
          </motion.div>
        </motion.button>
      </div>

      {/* Parallax Elements - Adjusted sizes for mobile */}
      <motion.div
        className="absolute top-1/4 left-2 sm:left-10 w-3 sm:w-4 h-3 sm:h-4 bg-primary rounded-full opacity-60"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-2 sm:right-10 w-4 sm:w-6 h-4 sm:h-6 border-2 border-secondary rounded-full opacity-40"
        animate={{ y: [0, 15, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-2 sm:w-3 h-2 sm:h-3 bg-accent rounded-full opacity-50"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
      />
    </section>
  )
}
