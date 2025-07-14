"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const brands = [
  { name: "CLSSYDINE", logo: "/logos/CLSSYDINE.jpg" },
  { name: "B21", logo: "/logos/B21.png", bg: true },
  { name: "Amedore", logo: "/logos/Amedore.jpg" },
  { name: "Inkstories", logo: "/logos/inkstories logo-02.png" },
];

export default function Brands() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-16 bg-[#FAF5F1]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E2E2E] mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-lg text-[#2E2E2E]/70">
            We're proud to partner with innovative companies worldwide
          </p>
        </motion.div>
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -100 * brands.length] }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="flex space-x-16 items-center"
            style={{ width: `${brands.length * 200}px` }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <motion.div
                key={`${brand.name}-${index}`}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 w-48 h-32 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-[#C38E70]/10"
              >
                {brand.bg ?
                  <div className="inline-block bg-black/80 rounded-lg p-2">
                    <img
                      src={brand.logo || "/placeholder.svg"}
                      alt={brand.name}
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                : brand.logo === "/logos/inkstories logo-02.png" ?
                  <div className="w-28 h-12 flex items-center justify-center mx-auto">
                    <img
                      src={brand.logo || "/placeholder.svg"}
                      alt={brand.name}
                      className="object-contain w-full h-full filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                : <img
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                }
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
