"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github, Eye } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Fashion Collection Website",
    category: "UI Design",
    description:
      "A modern e-commerce website design for fashion collection with focus on visual appeal and user experience.",
    longDescription:
      "Designed a comprehensive fashion e-commerce website from the ground up, focusing on visual storytelling, product showcase, and seamless shopping experience. The design features clean layouts, high-quality imagery, and intuitive navigation that resulted in improved user engagement and conversion rates.",
    image: "/fashion-collection-project.jpg",
    technologies: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    year: "2024",
    client: "Fashion Brand",
    results: [
      "Improved visual appeal and brand recognition",
      "Enhanced user shopping experience",
      "Increased product visibility",
      "Modern responsive design implementation",
    ],
  },
  {
    id: 2,
    title: "Creative Studio Branding",
    category: "UI Design",
    description: "Complete branding and web design solution for a creative studio focusing on modern aesthetics.",
    longDescription:
      "Developed comprehensive branding and web design for a creative studio, including logo design, brand guidelines, and website interface. The project emphasized modern aesthetics, creative expression, and professional presentation of the studio's portfolio and services.",
    image: "/creative-studio-project.jpg",
    technologies: ["Illustrator", "Photoshop", "Figma", "Adobe XD"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    year: "2023",
    client: "Creative Studio",
    results: [
      "Established strong brand identity",
      "Created cohesive visual language",
      "Improved client engagement",
      "Professional portfolio presentation",
    ],
  },
  {
    id: 3,
    title: "Mobile App UI/UX Design",
    category: "UI Design",
    description: "Modern mobile application design with focus on user experience and intuitive navigation.",
    longDescription:
      "Designed a comprehensive mobile application interface focusing on user experience, accessibility, and modern design principles. The app features intuitive navigation, clean layouts, and engaging visual elements that enhance user interaction and satisfaction.",
    image: "/mobile-app-design-project.jpg",
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    year: "2023",
    client: "Tech Startup",
    results: [
      "Intuitive user interface design",
      "Improved user engagement",
      "Modern and accessible design",
      "Seamless user experience flow",
    ],
  },
  {
    id: 4,
    title: "Logo Design Collection",
    category: "UI Design",
    description: "Professional logo designs for various clients across different industries and business sectors.",
    longDescription:
      "Created a diverse collection of professional logos for clients across various industries including technology, healthcare, fashion, and services. Each logo was designed to reflect the brand's identity, values, and target audience while maintaining visual impact and memorability.",
    image: "/logo-design-collection.jpg",
    technologies: ["Illustrator", "Photoshop", "CorelDraw", "Figma"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    year: "2022",
    client: "Various Clients",
    results: [
      "Strong brand identity creation",
      "Memorable and impactful designs",
      "Versatile logo applications",
      "Client satisfaction and brand recognition",
    ],
  },
  {
    id: 5,
    title: "Mobile UI/UX Design System",
    category: "UI Design",
    description: "Comprehensive design system for mobile applications with consistent UI components and patterns.",
    longDescription:
      "Developed a comprehensive design system for mobile applications including UI components, design patterns, color schemes, and typography guidelines. The system ensures consistency across different app screens and provides a foundation for scalable design solutions.",
    image: "/mobile-design-system.jpg",
    technologies: ["Figma", "Sketch", "Adobe XD", "InVision"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    year: "2024",
    client: "Mobile App Company",
    results: [
      "Consistent design language",
      "Scalable design components",
      "Improved development efficiency",
      "Enhanced user experience consistency",
    ],
  },
  {
    id: 6,
    title: "Digital Marketing Campaigns",
    category: "UX Research",
    description:
      "Strategic digital marketing campaign designs with focus on user engagement and conversion optimization.",
    longDescription:
      "Designed and executed comprehensive digital marketing campaigns including social media graphics, web banners, and promotional materials. The campaigns focused on user engagement, brand awareness, and conversion optimization through strategic visual communication.",
    image: "/digital-marketing-campaigns.jpg",
    technologies: ["Photoshop", "Illustrator", "Canva", "After Effects"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    year: "2023",
    client: "Marketing Agency",
    results: [
      "Increased brand awareness",
      "Improved engagement rates",
      "Higher conversion rates",
      "Effective visual communication",
    ],
  },
]

const categories = ["All", "UI Design", "UX Research"]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const filteredProjects = projects.filter((project) => activeCategory === "All" || project.category === activeCategory)

  return (
    <section id="projects" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work in UI/UX design, user research, and interactive prototyping. Each project
            represents a unique challenge and creative solution.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-2 bg-card/50 backdrop-blur-sm rounded-lg p-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="overflow-hidden border-0 bg-card/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      {project.featured && <Badge className="bg-primary text-primary-foreground">Featured</Badge>}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/90 text-black hover:bg-white"
                          onClick={() => setSelectedProject(project)}
                        >
                          <Eye size={16} className="mr-1" />
                          View
                        </Button>
                        <Button size="sm" variant="secondary" className="bg-white/90 text-black hover:bg-white">
                          <ExternalLink size={16} className="mr-1" />
                          Live
                        </Button>
                        <Button size="sm" variant="secondary" className="bg-white/90 text-black hover:bg-white">
                          <Github size={16} className="mr-1" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{project.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-foreground">{selectedProject.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="relative">
                    <img
                      src={selectedProject.image || "/placeholder.svg"}
                      alt={selectedProject.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        <ExternalLink size={16} className="mr-1" />
                        Live Demo
                      </Button>
                      <Button size="sm" variant="outline">
                        <Github size={16} className="mr-1" />
                        View Code
                      </Button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Project Overview</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">{selectedProject.longDescription}</p>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-semibold">Client:</span>
                          <span className="text-muted-foreground">{selectedProject.client}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">Year:</span>
                          <span className="text-muted-foreground">{selectedProject.year}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">Category:</span>
                          <span className="text-muted-foreground">{selectedProject.category}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">Key Results</h3>
                      <ul className="space-y-2 mb-6">
                        {selectedProject.results.map((result, index) => (
                          <li key={index} className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>

                      <h3 className="text-lg font-semibold text-foreground mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
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
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
