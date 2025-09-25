"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Award, BookOpen, Briefcase, GraduationCap } from "lucide-react"
import { jsPDF } from "jspdf";

const experiences = [
  {
    title: "UI/UX Designer Lead",
    company: "Splendenslab",
    period: "2023 - Present",
    location: "Salem, India",
    description:
      "I am a professional UI/UX designer focused on crafting intuitive, user-centered digital experiences. With expertise in design strategy and usability, I deliver solutions that blend aesthetics with functionality.",
    achievements: [
      "Leading design initiatives for multiple client projects",
      "Focused on user-centered design methodology",
      "Delivering strategic design solutions that meet business objectives",
      "Mentoring team members in design best practices",
    ],
    technologies: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Sketch"],
  },
  {
    title: "UI/UX Designer",
    company: "GJ Global IT Ventures",
    period: "2022 - 2023",
    location: "calicut ,Kerala",
    description:
      "As a UI/UX designer, I specialize in creating intuitive, visually appealing interfaces that enhance user experience. My work blends creativity and functionality, ensuring each design meets both user needs and business objectives.",
    achievements: [
      "Created intuitive user interfaces for web and mobile applications",
      "Enhanced user experience through thoughtful design decisions",
      "Balanced creativity with functionality in all design solutions",
      "Collaborated with development teams for seamless implementation",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Photoshop"],
  },
  {
    title: "Graphic Designer",
    company: "DJPS Solution Pvt. Ltd",
    period: "2018 - 2022",
    location: "Bengaluru, India",
    description:
      "Responsible for developing professional design work for both print and web. Developing unique customized design solutions. Advising clients on strategic content development. Compiling a library of standard, user-friendly templates for clients to use.",
    achievements: [
      "Developed professional design work for both print and web mediums",
      "Created unique customized design solutions for diverse clients",
      "Advised clients on strategic content development and branding",
      "Built comprehensive template library for client use",
    ],
    technologies: ["Photoshop", "Illustrator", "InDesign", "CorelDraw", "After Effects"],
  },
]

const education = [
  {
    degree: "MBA (Finance With Human Resources)",
    school: "Anna University - RKRR School of Management Studies",
    period: "2011 - 2013",
    location: "Tamil Nadu, India",
    description:
      "Focused on finance and human resources management with emphasis on business strategy and organizational development.",
    achievements: [
      "Specialized in Finance and HR management",
      "Completed comprehensive business strategy coursework",
      "Developed strong analytical and leadership skills",
    ],
  },
  {
    degree: "Arts & Science",
    school: "Periyar University - Muthayammal College",
    period: "2009 - 2011",
    location: "Tamil Nadu, India",
    description: "Foundation in arts and sciences with focus on analytical thinking and problem-solving methodologies.",
    achievements: [
      "Strong foundation in analytical thinking",
      "Developed problem-solving methodologies",
      "Excellent academic performance",
    ],
  },
]


const technicalSkills = [
  { category: "Design Tools", skills: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"] },
  { category: "Graphics", skills: ["Photoshop", "Illustrator", "InDesign", "CorelDraw", "After Effects"] },
  { category: "Prototyping", skills: ["Figma", "Adobe XD", "InVision", "Principle", "Marvel"] },
  { category: "Web Technologies", skills: ["HTML", "CSS", "JavaScript", "Responsive Design"] },
  { category: "Marketing", skills: ["Digital Marketing", "Social Media", "Facebook Ads", "Content Strategy"] },
]

export function ResumeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState("experience")

  const handleDownload = () => {
    // In a real application, this would trigger a PDF download
     const doc = new jsPDF("p", "mm", "a4");

    // Image of resume (must be in public folder or URL)
    const img = "/kadhir.jpg"; // place your resume image in public folder and rename

    const imgWidth = 210; // A4 width (mm)
    const imgHeight = 297; // A4 height (mm)

    doc.addImage(img, "JPEG", 0, 0, imgWidth, imgHeight);
    doc.save("Kalakathiravan_Resume.pdf");
    console.log("Downloading resume...")
  }

  return (
    <section id="resume" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary">Resume</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            A comprehensive overview of my professional journey, education, and technical expertise in UI/UX design.
          </p>
          <Button
            onClick={handleDownload}
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold"
          >
            <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Download Resume
          </Button>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex bg-muted rounded-lg p-1">
            {[
              { id: "experience", label: "Experience", icon: Briefcase },
              { id: "education", label: "Education", icon: GraduationCap },
              { id: "skills", label: "Skills", icon: Award },
            
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                  activeTab === id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon size={18} />
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {/* Experience Tab */}
          {activeTab === "experience" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {exp.title}
                          </CardTitle>
                          <p className="text-primary font-semibold">{exp.company}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold text-muted-foreground">{exp.period}</p>
                          <p className="text-sm text-muted-foreground">{exp.location}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-3 text-muted-foreground">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Education Tab */}
          {activeTab === "education" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {edu.degree}
                          </CardTitle>
                          <p className="text-primary font-semibold">{edu.school}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold text-muted-foreground">{edu.period}</p>
                          <p className="text-sm text-muted-foreground">{edu.location}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{edu.description}</p>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Achievements:</h4>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-3 text-muted-foreground">
                              <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Skills Tab */}
          {activeTab === "skills" && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {technicalSkills.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-card/50 backdrop-blur-sm h-full">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="border-primary/20 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Certifications Tab */}
         
        </div>
      </div>
    </section>
  )
}
