"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import {
  Code,
  Palette,
  TrendingUp,
  Smartphone,
  Search,
  Users,
  ArrowRight,
  CheckCircle,
  MapPin,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Users,
    title: "Influencer Marketing",
    description:
      "Connect with the right influencers to amplify your brand message and reach your target audience.",
    features: [
      "Influencer Research",
      "Campaign Strategy",
      "Content Collaboration",
      "Performance Tracking",
    ],
    price: "Contact for Pricing",
    image: "/logos/services/4.jpg",
  },
  {
    icon: TrendingUp,
    title: "Meta & Google Ads Setup",
    description:
      "Professional setup and optimization of Facebook, Instagram, and Google advertising campaigns.",
    features: [
      "Campaign Setup",
      "Audience Targeting",
      "Ad Creative Design",
      "Performance Optimization",
    ],
    price: "Contact for Pricing",
    image: "/logos/services/6.jpg",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description:
      "Dominate local search results and attract nearby customers with comprehensive local SEO.",
    features: [
      "Local Keyword Research",
      "Google My Business",
      "Local Citations",
      "Review Management",
    ],
    price: "Contact for Pricing",
    image: "/logos/services/3.jpg",
  },
  {
    icon: Palette,
    title: "Graphics Designing",
    description:
      "Eye-catching visual designs for your brand including logos and marketing materials.",
    features: [
      "Logo Design",
      "Social Media Graphics",
      "Marketing Materials",
      "Brand Guidelines",
    ],
    price: "Contact for Pricing",
    image: "/logos/services/1.jpg",
  },
  {
    icon: Search,
    title: "Website SEO",
    description:
      "Comprehensive on-page and technical SEO optimization to improve search rankings.",
    features: [
      "Technical SEO Audit",
      "On-Page Optimization",
      "Content Strategy",
      "Link Building",
    ],
    price: "Contact for Pricing",
    image: "/logos/services/5.jpg",
  },
  {
    icon: Smartphone,
    title: "Google My Business Management",
    description:
      "Complete GMB optimization and management to enhance your local online presence.",
    features: [
      "Profile Optimization",
      "Post Management",
      "Review Responses",
      "Insights Reporting",
    ],
    price: "Contact for Pricing",
    image: "/logos/services/9.jpg",
  },
  {
    icon: Code,
    title: "Social Media Management",
    description:
      "Full-service social media management including content creation and community engagement.",
    features: [
      "Content Creation",
      "Posting Schedule",
      "Community Management",
      "Analytics Reporting",
    ],
    price: "Contact for Pricing",
    image: "/logos/services/7.jpg",
  },
  // Additional images as placeholder services
  // {
  //   icon: Users,
  //   title: "Service Placeholder",
  //   description: "Description for additional service.",
  //   features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  //   price: "Contact for Pricing",
  //   image: "/logos/services/8.jpg",
  // },
  // {
  //   icon: Users,
  //   title: "Service Placeholder",
  //   description: "Description for additional service.",
  //   features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  //   price: "Contact for Pricing",
  //   image: "/logos/services/2.jpg",
  // },
  // {
  //   icon: Users,
  //   title: "Service Placeholder",
  //   description: "Description for additional service.",
  //   features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  //   price: "Contact for Pricing",
  //   image: "/logos/services/services.png",
  // },
];

export default function Services() {
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
      <section className="pt-24 pb-12 sm:pb-16 bg-gradient-to-br from-[#FAF5F1] to-[#C38E70]/10">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4 sm:mb-6">
              Our Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#2E2E2E]/70 leading-relaxed">
              Comprehensive digital solutions designed to transform your
              business and drive sustainable growth. From web development to
              digital marketing, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-2 sm:px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                className="group bg-[#FAF5F1] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md sm:shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 border border-[#C38E70]/10 flex flex-col h-full relative"
              >
                {/* Service Image */}
                <div className="relative h-40 sm:h-48 md:h-56 lg:h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2E2E2E]/50 to-transparent"></div>
                  <div className="absolute top-3 left-3 w-10 h-10 sm:w-12 sm:h-12 gradient-bg rounded-xl flex items-center justify-center">
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-5 sm:p-8 flex flex-col flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2E2E2E] mb-2 sm:mb-3 group-hover:text-[#C38E70] transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-[#2E2E2E]/70 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle className="w-4 h-4 text-[#37695F]" />
                        <span className="text-xs sm:text-sm text-[#2E2E2E]/80">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="flex items-center justify-between mt-auto">
                    <Link
                      href="/contact"
                      className="ml-8 sm:ml-16 px-4 py-2 rounded-full bg-gradient-to-r from-[#C38E70] to-[#37695F] text-white font-semibold shadow-md hover:from-[#A76D4E] hover:to-[#37695F] hover:scale-105 transition-all duration-200 text-base sm:text-lg focus:outline-none z-[1]"
                    >
                      {service.price}
                    </Link>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#37695F]/5 to-[#C38E70]/5">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4 sm:mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-base sm:text-xl text-[#2E2E2E]/70 mb-6 sm:mb-8">
              Let's discuss your project and create something amazing together.
              Get a free consultation and custom quote today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-bg text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Free Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </motion.div>
  );
}
