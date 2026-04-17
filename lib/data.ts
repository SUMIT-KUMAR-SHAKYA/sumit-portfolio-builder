// ─── Static site data ────────────────────────────────────────────────────────

export const siteOwner = {
  name: "Sumit Kumar Shakya",
  title: "IIIT Student | Aspiring Cybersecurity Engineer",
  tagline: "Securing the digital frontier through code and engineering.",
  bio: "Aspiring Cybersecurity Engineer and IIIT student focused on building secure, scalable full-stack applications and researching modern threat vectors.",
  location: "India",
  email: "sumit@example.com",
  socials: {
    github: "https://github.com/SUMIT-KUMAR-SHAKYA",
    linkedin: "https://linkedin.com/in/sumit",
    twitter: "https://x.com/SumitSh77415816",
  },
};

export const skills = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Framer Motion", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "Supabase", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "TensorFlow", category: "AI/ML" },
  { name: "NLP", category: "AI/ML" },
  { name: "scikit-learn", category: "AI/ML" },
  { name: "Pandas", category: "AI/ML" },
  { name: "Vercel", category: "DevOps" },
  { name: "Git", category: "DevOps" },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  badge: "Live" | "AI/ML" | "Open Source";
  badgeColor: "teal" | "purple" | "cyan";
  stats?: { label: string; value: string }[];
  featured: boolean;
  color: string;
}

export const projects: Project[] = [
  {
    id: "labor-connect-2",
    title: "Labour Connect 2.0",
    description: "A platform for labor employment.",
    longDescription: "Labour Connect 2.0 bridges the gap between skilled local professionals and customers who need them. Built with a modern dark glassmorphism UI, real-time booking system, background-verified worker profiles, and an admin dashboard.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://labour-connects20.vercel.app",
    badge: "Live",
    badgeColor: "teal",
    featured: true,
    color: "#2dd4bf",
  },
  {
    id: "labor-connect",
    title: "Labour Connect",
    description: "A platform for labor employment.",
    longDescription: "The original Labour Connect platform connecting verified local service professionals with customers for fast, reliable, and secure bookings.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://labor-connect-ruddy.vercel.app",
    badge: "Live",
    badgeColor: "cyan",
    featured: true,
    color: "#0ea5e9",
  },
  {
    id: "movie-sentiment",
    title: "Movie Sentiment Analyzer",
    description: "An AI-based project to analyze viewer emotions.",
    longDescription: "An end-to-end machine learning project that analyzes movie reviews to determine viewer sentiments, giving deep insights into audience reactions.",
    tags: ["Python", "NLP", "AI/ML", "React"],
    badge: "AI/ML",
    badgeColor: "purple",
    featured: true,
    color: "#a78bfa",
  },
  {
    id: "food-delivery",
    title: "Smart Food Delivery System",
    description: "A logistics and food tech solution.",
    longDescription: "A comprehensive solution handling routing, logistics, and real-time tracking for food delivery services.",
    tags: ["React", "Logistics", "Routing", "WebSockets"],
    badge: "Open Source",
    badgeColor: "teal",
    featured: true,
    color: "#f43f5e",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
