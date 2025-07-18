"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";
import SwiperCarousel from "./Carousel";
import VidCarousel from "./VidCarousel";
import {
  projects,
  galleryImages,
  portfolioVideos,
  categories,
  // marketingProjects, // not used directly
  // designProjects, // not used directly
} from "./ProjectConObj";

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
        ["Web Development", "Marketing", "Design"].includes(project.category)
      )
    : projects.filter((project) => project.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ overflowX: "hidden" }}
      className="min-h-screen scrollbar-hide"
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
              {/* <h3 className="text-2xl font-bold text-[#2E2E2E] text-center mb-8">
                Images
              </h3> */}
              <SwiperCarousel
                images={galleryImages.map((img) => ({
                  id: img.id,
                  label: img.title,
                  imgURL: img.image,
                }))}
              />
            </>
          )}

          {/* Regular Projects Grid */}
          {activeCategory !== "Gallery" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => setSelectedProject(project)}
                  className={`relative group w-full aspect-[4/5] bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#C38E70]/10 cursor-pointer sm:w-full sm:max-w-sm sm:mx-auto sm:aspect-[4/5] md:w-full md:aspect-[4/5] ${
                    (
                      (activeCategory === "Marketing" &&
                        project.category === "Marketing") ||
                      (activeCategory === "Design" &&
                        project.category === "Design")
                    ) ?
                      "p-0 shadow-2xl"
                    : ""
                  }`}
                >
                  <div className="relative w-full h-full min-h-[320px] aspect-[4/5] flex items-stretch bg-white">
                    {project.image &&
                      project.image.startsWith("/logos/B21.png") && (
                        <div className="absolute inset-0 bg-black/70 z-10 rounded-2xl pointer-events-none" />
                      )}
                    {project.image &&
                      project.image.startsWith("/logos/CLSSYDINE.jpg") && (
                        <div className="absolute inset-0 bg-white/70 z-10 rounded-2xl pointer-events-none" />
                      )}
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className={`w-full h-full object-contain rounded-2xl${project.image && (project.image.startsWith("/logos/B21.png") || project.image.startsWith("/logos/CLSSYDINE.jpg")) ? " relative z-20 drop-shadow-lg" : ""}`}
                    />
                  </div>
                  {/* Overlay gradient on hover for Marketing */}
                  {((activeCategory === "Marketing" &&
                    project.category === "Marketing") ||
                    (activeCategory === "Design" &&
                      project.category === "Design")) && (
                    <div className="absolute inset-0 bg-gradient-to-t from-[#C38E70]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-10" />
                  )}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-[#C38E70] text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Video Portfolio Section */}
        {/* {activeCategory === "Gallery" && (
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-[#2E2E2E] text-center mb-8">
              Videos
            </h3>
            <VidCarousel videos={portfolioVideos} />
          </div>
        )} */}
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
                className="absolute top-4 right-4 w-10 h-10 bg-white/80 hover:bg-white text-[#2E2E2E] rounded-full flex items-center justify-center transition-colors duration-200 z-20 shadow-md border border-[#C38E70]/40 backdrop-blur"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="relative">
                {selectedProject.image &&
                  selectedProject.image.startsWith("/logos/B21.png") && (
                    <div className="absolute inset-0 bg-black/70 z-10 rounded-2xl pointer-events-none" />
                  )}
                {selectedProject.image &&
                  selectedProject.image.startsWith("/logos/CLSSYDINE.jpg") && (
                    <div className="absolute inset-0 bg-white/70 z-10 rounded-2xl pointer-events-none" />
                  )}
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className={`w-full h-64 object-cover rounded-2xl${selectedProject.image && (selectedProject.image.startsWith("/logos/B21.png") || selectedProject.image.startsWith("/logos/CLSSYDINE.jpg")) ? " relative z-20 drop-shadow-lg" : ""}`}
                />
              </div>
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
              {selectedProject.client && (
                <p className="text-[#C38E70] font-medium mb-6">
                  Client: {selectedProject.client}
                </p>
              )}

              <p className="text-[#2E2E2E]/70 mb-8 leading-relaxed text-lg">
                {selectedProject.description}
              </p>

              {/* Technologies */}
              {selectedProject.category !== "Design" && (
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
              )}

              {/* Results */}
              {selectedProject.category !== "Design" && (
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
              )}

              {/* Buttons */}
              {selectedProject.category !== "Design" && (
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
              )}
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
      <WhatsAppFloat />
    </motion.div>
  );
}
