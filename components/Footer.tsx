"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
    services: [
      { name: "Influencer Marketing", href: "/services#influencer" },
      { name: "Meta & Google Ads", href: "/services#ads" },
      { name: "Local SEO", href: "/services#local-seo" },
      { name: "Graphics Design", href: "/services#graphics" },
      { name: "Website SEO", href: "/services#website-seo" },
      { name: "Social Media Management", href: "/services#social-media" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      // { name: "Terms of Service", href: "/terms" },
      // { name: "Cookie Policy", href: "/cookies" },
    ],
  };

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/19Mm8FVMqi/",
      name: "Facebook",
    },
    // { icon: Twitter, href: "#", name: "Twitter" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/accenticsolutions?igsh=bWhmeTk3bW83dTBn",
      name: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/accentic-solutions/",
      name: "LinkedIn",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-[#2E2E2E] text-white py-16"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-12 mb-14">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Link href="/">
              <div className="flex items-center space-x-3">
                <img
                  src="/logos/mainLogo/Accentic Solutions png wht.png"
                  alt="Accentic Logo"
                  className="ml-10 h-48 w-auto"
                />
              </div>
            </Link>
            {/* <h3 className="text-2xl font-bold text-gradient mb-4">
              Accentic Solutions
            </h3> */}
            {/* <p className="text-gray-300 mb-6 leading-relaxed">
              Fueling growth with creativity. We transform businesses through
              innovative digital solutions and strategic thinking.
            </p> */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#C38E70]" />
                <a
                  href="mailto:Accenticdigitalsolutions@gmail.com"
                  className="text-gray-300 hover:text-[#C38E70] transition-colors duration-300"
                >
                  {/* Accenticdigitalsolutions@gmail.com */}
                  Accenticsolutions@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#C38E70]" />
                <div className="flex flex-col space-y-1">
                  <span className="text-gray-300">6370611812</span>
                  {/* <span className="text-gray-300">8249806562</span> */}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                {/* <MapPin className="w-5 h-5 text-[#C38E70]" /> */}
                <span className="text-gray-300">
                  Accentic Solutions, Jagamara, Bhubaneswar, Odisha, 751003
                </span>
              </div>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:ml-8"
          >
            <h4 className="text-lg font-semibold mb-4 text-[#C38E70] text-center md:text-left">
              Company
            </h4>
            <ul className="space-y-2 text-center md:text-left">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#C38E70] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-[#C38E70] text-center md:text-left">
              Services
            </h4>
            <ul className="space-y-2 text-center md:text-left">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#C38E70] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-[#C38E70] text-center md:text-left">
              Legal
            </h4>
            <ul className="space-y-2 mb-6 text-center md:text-left">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#C38E70] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-[#C38E70]/20 rounded-full flex items-center justify-center hover:bg-[#C38E70] transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2025 Accentic Solutions. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
