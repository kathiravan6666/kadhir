"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, Code, Lightbulb, Users, Award, Coffee } from "lucide-react"

const skills = [
  { name: "Figma", level: 95, icon: Palette },
  { name: "Adobe XD", level: 90, icon: Lightbulb },
  { name: "Photoshop", level: 60, icon: Code },
  { name: "Illustrator", level: 60, icon: Users },
  { name: "Sketch", level: 60, icon: Award },
  { name: "Digital Marketing", level: 65, icon: Coffee },
]

const timeline = [
  {
    year: "2023-present",
    title: "UI/UX Designer Lead",
    company: "Splendenslab",
    description:
      "I am a professional UI/UX designer focused on crafting intuitive, user-centered digital experiences. With expertise in design strategy and usability, I deliver solutions that blend aesthetics with functionality.",
    achievements: [
      "Leading design initiatives for multiple projects",
      "Focused on user-centered design approach",
      "Delivering strategic design solutions",
    ],
  },
  {
    year: "2022",
    title: "UI/UX Designer",
    company: "GJ Global IT Ventures",
    description:
      "As a UI/UX designer, I specialize in creating intuitive, visually appealing interfaces that enhance user experience. My work blends creativity and functionality, ensuring each design meets both user needs and business objectives.",
    achievements: [
      "Created intuitive user interfaces",
      "Enhanced user experience across projects",
      "Balanced creativity with functionality",
    ],
  },
  {
    year: "2018",
    title: "Graphic Designer",
    company: "DJPS Solution Pvt. Ltd",
    description:
      "Responsible for developing professional design work for both print and web. Developing unique customized design solutions. Advising clients on strategic content development.",
    achievements: [
      "Developed professional design work for print and web",
      "Created unique customized design solutions",
      "Advised clients on strategic content development",
    ],
  },
  {
    year: "2016",
    title: "Marketing Engineer",
    company: "Marketing Engineer",
    description:
      "Social Media marketing worked Home owner and Service providers. Facebook ads, Twitter, Facebook campaign.",
    achievements: [
      "Managed social media marketing campaigns",
      "Worked with home owners and service providers",
      "Executed Facebook and Twitter campaigns",
    ],
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [visibleSkills, setVisibleSkills] = useState<number[]>([])

  useEffect(() => {
    if (isInView) {
      skills.forEach((_, index) => {
        setTimeout(() => {
          setVisibleSkills((prev) => [...prev, index])
        }, index * 200)
      })
    }
  }, [isInView])

  return (
    <section id="about" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
           Hi, I’m a UI/UX Designer with 5 years of experience turning ideas into engaging digital experiences. I believe great design is not just about how it looks, but how it works. My passion lies in simplifying complexity—transforming challenges into clean, intuitive, and beautiful solutions. With a strong background in Figma, Adobe XD, Illustrator, After Effects, and Lottie, I enjoy mentoring teams, collaborating across functions, and delivering products that feel intuitive, engaging, and alive.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="relative mb-8">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                      <img
                        src="/kk.png"
                        alt="KalaKathiravan"
                        className="w-28 h-28 rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <motion.div
                    className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <div className="w-3 h-3 bg-primary-foreground rounded-full" />
                  </motion.div>
                </div>

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">KalaKathiravan</h3>
                  <p className="text-primary font-semibold mb-4">UI/UX Designer Lead</p>
                  <p className="text-muted-foreground leading-relaxed">
                    I specialize in crafting user-centered designs that not only enhance user experience but also drive measurable business results. With expertise in both digital and print design, I bring strong skills in graphical design and UI/UX to deliver impactful solutions.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  {["Figma", "Adobe XD", "Photoshop", "Illustrator", "Sketch", "InVision"].map((tool) => (
                    <Badge
                      key={tool}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">Skills & Expertise</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon
                const isVisible = visibleSkills.includes(index)

                return (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                          <Icon size={20} />
                        </div>
                        <span className="font-semibold text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            My <span className="text-primary">Journey</span>
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-bold">
                            {item.year}
                          </div>
                        </div>
                        <h4 className="text-xl font-bold text-foreground mb-1">{item.title}</h4>
                        <p className="text-primary font-semibold mb-3">{item.company}</p>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
                        <div className="space-y-1">
                          {item.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <motion.div
                      className="w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg"
                      whileHover={{ scale: 1.2 }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                    />
                  </div>

                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
