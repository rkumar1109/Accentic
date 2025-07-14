"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";
import SwiperCarousel from "./Carousel";
import VidCarousel from "./VidCarousel";

const galleryProjects = [
  {
    id: 101,
    title: "Gallery Image 1",
    category: "Gallery",
    image: "/logos/gallery/DSC_8385-2.jpg",
    description: "",
    technologies: [],
    liveUrl: "",
    githubUrl: "",
    date: "",
    client: "",
    results: [],
  },
  {
    id: 102,
    title: "Gallery Image 2",
    category: "Gallery",
    image: "/logos/gallery/DSC_8389.jpg",
    description: "",
    technologies: [],
    liveUrl: "",
    githubUrl: "",
    date: "",
    client: "",
    results: [],
  },
  {
    id: 103,
    title: "Gallery Image 3",
    category: "Gallery",
    image: "/logos/gallery/DSC_8412.jpg",
    description: "",
    technologies: [],
    liveUrl: "",
    githubUrl: "",
    date: "",
    client: "",
    results: [],
  },
  {
    id: 104,
    title: "Gallery Image 4",
    category: "Gallery",
    image: "/logos/gallery/DSC_8427.jpg",
    description: "",
    technologies: [],
    liveUrl: "",
    githubUrl: "",
    date: "",
    client: "",
    results: [],
  },
  {
    id: 105,
    title: "Gallery Image 5",
    category: "Gallery",
    image: "/logos/gallery/DSC_8429.jpg",
    description: "",
    technologies: [],
    liveUrl: "",
    githubUrl: "",
    date: "",
    client: "",
    results: [],
  },
  {
    id: 106,
    title: "Gallery Image 6",
    category: "Gallery",
    image: "/logos/gallery/DSC_8455.jpg",
    description: "",
    technologies: [],
    liveUrl: "",
    githubUrl: "",
    date: "",
    client: "",
    results: [],
  },
  {
    id: 107,
    title: "Gallery Image 7",
    category: "Gallery",
    image: "/logos/gallery/DSC_8493.jpg",
    description: "",
    technologies: [],
    liveUrl: "",
    githubUrl: "",
    date: "",
    client: "",
    results: [],
  },
  {
    id: 108,
    title: "Gallery Image 8",
    category: "Gallery",
    image: "/logos/gallery/DSC_8499.jpg",
    description: "",
    technologies: [],
    liveUrl: "",
    githubUrl: "",
    date: "",
    client: "",
    results: [],
  },
  {
    id: 109,
    title: "Gallery Image 9",
    category: "Gallery",
    image: "/logos/gallery/DSC_8509-2.jpg",
    description: "",
    technologies: [],
    liveUrl: "",
    githubUrl: "",
    date: "",
    client: "",
    results: [],
  },
];

const marketingProjects = [
  {
    id: 201,
    title: "Marketing Image 1",
    category: "Marketing",
    image: "/logos/marketing/Bridal Makeup.jpg",
    description: "",
    technologies: [],
    liveUrl: "",
    githubUrl: "",
    date: "",
    client: "",
    results: [],
  },
  {
    id: 202,
    title: "Marketing Image 2",
    category: "Marketing",
    image: "/logos/marketing/Bridal Makeup 2.jpg",
    description: "",
    technologies: [],
    liveUrl: "",
    githubUrl: "",
    date: "",
    client: "",
    results: [],
  },
  {
    id: 203,
    title: "Marketing Image 3",
    category: "Marketing",
    image: "/logos/marketing/Holi Special Offer-1.jpg",
    description: "",
    technologies: [],
    liveUrl: "",
    githubUrl: "",
    date: "",
    client: "",
    results: [],
  },
  {
    id: 204,
    title: "Marketing Image 4",
    category: "Marketing",
    image: "/logos/marketing/Home Delivery Available2-1.jpg",
    description: "",
    technologies: [],
    liveUrl: "",
    githubUrl: "",
    date: "",
    client: "",
    results: [],
  },
  {
    id: 205,
    title: "Marketing Image 5",
    category: "Marketing",
    image: "/logos/marketing/Piercing Available2.jpg",
    description: "",
    technologies: [],
    liveUrl: "",
    githubUrl: "",
    date: "",
    client: "",
    results: [],
  },
  {
    id: 206,
    title: "Marketing Image 6",
    category: "Marketing",
    image: "/logos/marketing/Piercing Available3.jpg",
    description: "",
    technologies: [],
    liveUrl: "",
    githubUrl: "",
    date: "",
    client: "",
    results: [],
  },
  {
    id: 207,
    title: "Marketing Image 7",
    category: "Marketing",
    image: "/logos/marketing/Raja B21 offer.jpg",
    description: "",
    technologies: [],
    liveUrl: "",
    githubUrl: "",
    date: "",
    client: "",
    results: [],
  },
  {
    id: 208,
    title: "Marketing Image 8",
    category: "Marketing",
    image: "/logos/marketing/Raja Offer-1.jpg",
    description: "",
    technologies: [],
    liveUrl: "",
    githubUrl: "",
    date: "",
    client: "",
    results: [],
  },
  {
    id: 209,
    title: "Marketing Image 9",
    category: "Marketing",
    image: "/logos/marketing/Summer Offer AD-1.jpg",
    description: "",
    technologies: [],
    liveUrl: "",
    githubUrl: "",
    date: "",
    client: "",
    results: [],
  },
];

const projects = [
  {
    id: 1,
    title: "TechStart E-Commerce Platform",
    category: "Web Development",
    description:
      "A comprehensive e-commerce solution with advanced features including real-time inventory management, multi-payment gateway integration, and AI-powered product recommendations.",
    image: "/logos/Amedore.jpg?height=300&width=600",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    date: "2024",
    client: "TechStart Inc.",
    results: [
      "300% increase in sales",
      "50% faster checkout process",
      "99.9% uptime",
    ],
  },
  {
    id: 2,
    title: "GreenLife Brand Identity",
    category: "Design",
    description:
      "Complete brand overhaul for an eco-friendly lifestyle company, including logo design, brand guidelines, packaging design, and marketing materials.",
    image: "/logos/B21.png?height=400&width=600",
    technologies: ["Figma", "Illustrator", "Photoshop", "InDesign"],
    liveUrl: "#",
    githubUrl: "#",
    date: "2024",
    client: "GreenLife Co.",
    results: [
      "40% brand recognition increase",
      "25% sales growth",
      "Award-winning design",
    ],
  },
  {
    id: 3,
    title: "FinanceFlow SaaS Dashboard",
    category: "Web Development",
    description:
      "A sophisticated financial analytics dashboard with real-time data visualization, automated reporting, and advanced security features.",
    image: "/logos/CLSSYDINE.jpg?height=400&width=600",
    technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
    date: "2023",
    client: "FinanceFlow Ltd.",
    results: ["60% time savings", "Real-time insights", "Enterprise security"],
  },
  {
    id: 4,
    title: "FitTracker Mobile App",
    category: "Gallery",
    description:
      "Cross-platform fitness tracking application with social features, workout planning, and integration with wearable devices.",
    image: "/logos/Amedore.jpg?height=300&width=600",
    technologies: ["React Native", "Firebase", "Redux", "HealthKit"],
    liveUrl: "#",
    githubUrl: "#",
    date: "2023",
    client: "FitTracker Inc.",
    results: ["100K+ downloads", "4.8 app store rating", "Featured by Apple"],
  },
  {
    id: 5,
    title: "EduLearn Digital Campaign",
    category: "Marketing",
    description:
      "Multi-channel digital marketing campaign for an online education platform, including SEO, PPC, social media, and content marketing.",
    image: "/logos/inkstories logo-02.png?height=400&width=600",
    technologies: ["Google Ads", "Facebook Ads", "SEMrush", "HubSpot"],
    liveUrl: "#",
    githubUrl: "#",
    date: "2023",
    client: "EduLearn Platform",
    results: ["400% lead increase", "200% ROI", "50% cost reduction"],
  },
  {
    id: 6,
    title: "RestaurantPro Management System",
    category: "Web Development",
    description:
      "Comprehensive restaurant management system with POS integration, inventory tracking, staff scheduling, and customer analytics.",
    image: "/logos/B21.png?height=400&width=600",
    technologies: ["Angular", "Express.js", "MySQL", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
    date: "2022",
    client: "RestaurantPro Chain",
    results: [
      "30% efficiency increase",
      "Real-time operations",
      "Cost optimization",
    ],
  },
].concat(galleryProjects, marketingProjects);

const categories = ["All", "Web Development", "Design", "Marketing", "Gallery"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  // const filteredProjects =
  //   activeCategory === "All" ?
  //     projects.filter(
  //       (project) => project.category === "Web Development" && "Design" && "Marketing"
  //     )
  //   : projects.filter((project) => project.category === activeCategory);

  const filteredProjects =
    activeCategory === "All" ?
      projects.filter((project) =>
        ["Web Development", "Design"].includes(project.category)
      )
    : projects.filter((project) => project.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#FAF5F1] to-[#C38E70]/10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Our Portfolio
            </h1>

            <p className="text-xl text-[#2E2E2E]/70 leading-relaxed">
              Explore our latest projects and discover how we've helped
              businesses achieve remarkable digital transformation and
              sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category ?
                    "gradient-bg text-white shadow-lg"
                  : "bg-[#FAF5F1] text-[#2E2E2E] hover:bg-[#C38E70]/10 border border-[#C38E70]/20"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-[#FAF5F1]">
        <div className="container mx-auto px-4 md:px-6">
          {activeCategory === "Gallery" && (
            <>
              <h3 className="text-2xl font-bold text-[#2E2E2E] text-center mb-8">
                Images
              </h3>
              <SwiperCarousel
                images={galleryProjects.map((img) => ({
                  id: img.id,
                  label: img.title,
                  imgURL: img.image,
                }))}
              />
            </>
          )}

          {/* Regular Projects Grid */}
          {activeCategory !== "Gallery" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => setSelectedProject(project)}
                  className={`group w-90 aspect-square bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#C38E70]/10 cursor-pointer ${
                    (
                      activeCategory === "Marketing" &&
                      project.category === "Marketing"
                    ) ?
                      "p-0"
                    : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative overflow-hidden ${
                      (
                        activeCategory === "Marketing" &&
                        project.category === "Marketing"
                      ) ?
                        "h-full w-full min-h-[320px] flex items-stretch"
                      : (
                        activeCategory === "Web Development" &&
                        project.category === "Web Development"
                      ) ?
                        "h-[220px]"
                      : (
                        activeCategory === "Design" &&
                        project.category === "Design"
                      ) ?
                        "h-[180px]"
                      : activeCategory === "All" ? "h-[200px]"
                      : "h-60"
                    } ${activeCategory === "Marketing" && project.category === "Marketing" ? "aspect-square" : "h-[200px]"}`}
                  >
                    {project.image.startsWith("/logos/B21.png") ?
                      <div className="bg-[#2E2E2E] w-full h-full flex items-center justify-center rounded-2xl">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className={`w-full h-full object-contain rounded-2xl`}
                        />
                      </div>
                    : (
                      project.image.startsWith("/logos/inkstories logo-02.png")
                    ) ?
                      <div className="w-full h-full flex items-center justify-center rounded-2xl bg-white">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="object-contain max-h-40 max-w-xs mx-auto rounded-2xl"
                        />
                      </div>
                    : <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className={`w-full h-full ${
                          (
                            activeCategory === "Marketing" &&
                            project.category === "Marketing"
                          ) ?
                            "object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                          : (
                            (activeCategory === "Web Development" &&
                              project.category === "Web Development") ||
                            (activeCategory === "Design" &&
                              project.category === "Design") ||
                            activeCategory === "All"
                          ) ?
                            "object-contain"
                          : "object-cover"
                        }`}
                      />
                    }
                    {/* Overlay gradient on hover for Marketing */}
                    {activeCategory === "Marketing" &&
                      project.category === "Marketing" && (
                        <div className="absolute inset-0 bg-gradient-to-t from-[#C38E70]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-10" />
                      )}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-[#C38E70] text-white px-3 py-1 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`px-6 ${activeCategory === "Marketing" && project.category === "Marketing" ? "pt-4 pb-6" : "pt-6 pb-10"}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-[#2E2E2E] group-hover:text-[#C38E2E] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="text-sm text-[#2E2E2E]/60">
                        {project.date}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="bg-[#FAF5F1] text-[#37695F] px-2 py-1 rounded-full text-xs font-medium border border-[#37695F]/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="bg-[#FAF5F1] text-[#37695F] px-2 py-1 rounded-full text-xs font-medium border border-[#37695F]/20">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-[#2E2E2E]/60">
                      Client: {project.client}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Video Portfolio Section */}
        {activeCategory === "Gallery" && (
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-[#2E2E2E] text-center mb-8">
              Videos
            </h3>
            <VidCarousel
              videos={[
                {
                  id: "1",
                  title: "Project Showcase - TechStart E-Commerce",
                  youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                },
                {
                  id: "2",
                  title: "GreenLife Brand Identity Design Process",
                  youtubeUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
                },
                {
                  id: "3",
                  title: "FinanceFlow Dashboard Demo",
                  youtubeUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
                },
              ]}
            />
          </div>
        )}
      </section>

      {/* Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header & Image */}
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-[#2E2E2E]/10 hover:bg-[#2E2E2E]/20 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
              ></button>
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Modal Body */}
            <div className="p-8">
              {/* Meta */}
              <div className="flex items-center justify-between mb-4">
                <span className="bg-[#C38E70] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {selectedProject.category}
                </span>
                <div className="flex items-center space-x-2 text-[#2E2E2E]/60">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedProject.date}</span>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-[#2E2E2E] mb-2">
                {selectedProject.title}
              </h2>
              <p className="text-[#C38E70] font-medium mb-6">
                Client: {selectedProject.client}
              </p>

              <p className="text-[#2E2E2E]/70 mb-8 leading-relaxed text-lg">
                {selectedProject.description}
              </p>

              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#2E2E2E] mb-4 flex items-center">
                  <Tag className="w-5 h-5 mr-2" />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#FAF5F1] text-[#37695F] px-4 py-2 rounded-full font-medium border border-[#37695F]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#2E2E2E] mb-4">
                  Key Results
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedProject.results.map((result, index) => (
                    <div
                      key={index}
                      className="bg-[#FAF5F1] p-4 rounded-xl border border-[#C38E70]/10"
                    >
                      <p className="text-[#2E2E2E] font-medium">{result}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex space-x-4">
                <motion.a
                  href={selectedProject.liveUrl}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 gradient-bg text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>View Live</span>
                </motion.a>
                <motion.a
                  href={selectedProject.githubUrl}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-[#2E2E2E] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#2E2E2E]/90 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                  <span>View Code</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
      <WhatsAppFloat />
    </motion.div>
  );
}
