// Gallery images for SwiperCarousel (simple structure)
export const galleryImages = [
  { id: 101, title: "Gallery Image 1", image: "/logos/gallery/DSC_1088.JPG" },
  { id: 102, title: "Gallery Image 2", image: "/logos/gallery/DSC_1101.JPG" },
  { id: 103, title: "Gallery Image 3", image: "/logos/gallery/DSC_1102.JPG" },
  { id: 104, title: "Gallery Image 4", image: "/logos/gallery/DSC_1136.JPG" },
  { id: 105, title: "Gallery Image 5", image: "/logos/gallery/DSC_1172.JPG" },
  { id: 106, title: "Gallery Image 6", image: "/logos/gallery/DSC_1176.JPG" },
  { id: 107, title: "Gallery Image 7", image: "/logos/gallery/DSC_1205.JPG" },
  { id: 108, title: "Gallery Image 8", image: "/logos/gallery/DSC_1206.JPG" },
  { id: 109, title: "Gallery Image 9", image: "/logos/gallery/DSC_1210.JPG" },
  { id: 110, title: "Gallery Image 10", image: "/logos/gallery/DSC_1375.JPG" },
  { id: 111, title: "Gallery Image 11", image: "/logos/gallery/DSC_1379.JPG" },
  { id: 112, title: "Gallery Image 12", image: "/logos/gallery/DSC_1390.JPG" },
  {
    id: 113,
    title: "Gallery Image 13",
    image: "/logos/gallery/DSC_8385-2.jpg",
  },
  { id: 114, title: "Gallery Image 14", image: "/logos/gallery/DSC_8389.jpg" },
  { id: 115, title: "Gallery Image 15", image: "/logos/gallery/DSC_8412.jpg" },
  { id: 116, title: "Gallery Image 16", image: "/logos/gallery/DSC_8427.jpg" },
  { id: 117, title: "Gallery Image 17", image: "/logos/gallery/DSC_8429.jpg" },
  { id: 118, title: "Gallery Image 18", image: "/logos/gallery/DSC_8455.jpg" },
  { id: 119, title: "Gallery Image 19", image: "/logos/gallery/DSC_8493.jpg" },
  { id: 120, title: "Gallery Image 20", image: "/logos/gallery/DSC_8499.jpg" },
  {
    id: 121,
    title: "Gallery Image 21",
    image: "/logos/gallery/DSC_8509-2.jpg",
  },
];

// Full structure for projects array concat
export const galleryProjects = galleryImages.map((img) => ({
  ...img,
  category: "Gallery",
  description: "",
  technologies: [],
  liveUrl: "",
  githubUrl: "",
  date: "",
  client: "",
  results: [],
}));

// Marketing items for UI (simple structure)
export const marketingItems = [
  {
    id: 201,
    title: "inkstories logo-02",
    image: "/logos/inkstories logo-02.png",
  },
  { id: 202, title: "CLSSYDINE", image: "/logos/CLSSYDINE.jpg" },
  { id: 203, title: "B21", image: "/logos/B21.png" },
  { id: 204, title: "Amedore", image: "/logos/Amedore.jpg" },
];

// Full structure for projects array concat
export const marketingProjects = marketingItems.map((item) => ({
  ...item,
  category: "Marketing",
  description: "",
  technologies: [],
  liveUrl: "",
  githubUrl: "",
  date: "",
  client: "",
  results: [],
}));

// Design items for UI (simple structure)
export const designItems = [
  {
    id: 301,
    title: "Business Without Digital Strategy",
    image: "/logos/design/Business Without Digital Strategy.jpg",
    client: "Accentic",
  },
  {
    id: 303,
    title: "Holi Special Offer",
    image: "/logos/design/Holi Special Offer-1.jpg",
    client: "B21",
  },
  {
    id: 304,
    title: "Home Delivery Available",
    image: "/logos/design/Home Delivery Available2-1.jpg",
    client: "BEYRUT",
  },
  {
    id: 305,
    title: "Bridal Makeup",
    image: "/logos/design/Bridal Makeup.jpg",
    client: "B21",
  },
  {
    id: 306,
    title: "Bridal Makeup",
    image: "/logos/design/Bridal Makeup 2.jpg",
    client: "B21",
  },
  {
    id: 307,
    title: "Piercing Available",
    image: "/logos/design/Piercing Available2.jpg",
    client: "B21",
  },
  {
    id: 308,
    title: "Raja Offer",
    image: "/logos/design/Raja Offer-1.jpg",
    client: "B21",
  },
  {
    id: 309,
    title: "Piercing Available",
    image: "/logos/design/Piercing Available3.jpg",
    client: "B21",
  },
  {
    id: 310,
    title: "Summer Offer",
    image: "/logos/design/Summer Offer AD-1.jpg",
    client: "B21",
  },
  {
    id: 311,
    title: "Raja B21 Offer",
    image: "/logos/design/Raja B21 offer.jpg",
    client: "B21",
  },
  { id: 312, title: "B21", image: "/logos/design/b21-2.jpeg", client: "B21" },
  { id: 313, title: "B21", image: "/logos/design/b21-1.jpeg", client: "B21" },
];

// Full structure for projects array concat
export const designProjects = designItems.map((item) => ({
  ...item,
  category: "Design",
  description: "",
  technologies: [],
  liveUrl: "",
  githubUrl: "",
  date: "",
  results: [],
}));

// Video items for UI (simple structure)
export const videoItems = [
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
  {
    id: "4",
    title: "RestaurantPro Management System Overview",
    youtubeUrl: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
  },
  {
    id: "5",
    title: "FitTracker Mobile App Walkthrough",
    youtubeUrl: "https://www.youtube.com/watch?v=l482T0yNkeo",
  },
  {
    id: "6",
    title: "Creative Design Highlights 2024",
    youtubeUrl: "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
  },
  {
    id: "7",
    title: "Marketing Campaign Success Story",
    youtubeUrl: "https://www.youtube.com/watch?v=V-_O7nl0Ii0",
  },
];

export const portfolioVideos = videoItems;

export const projects = [
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
].concat(galleryProjects, marketingProjects, designProjects);

export const categories = [
  "All",
  "Web Development",
  "Design",
  "Marketing",
  "Gallery",
];
