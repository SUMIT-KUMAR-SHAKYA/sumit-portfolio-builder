// ─── Static site data ────────────────────────────────────────────────────────

export const siteOwner = {
  name: "Sumit Kumar Shakya",
  title: "Full-Stack & AI/ML Engineer",
  tagline: "Building impactful products that scale.",
  bio: "I'm a passionate full-stack developer who loves turning complex problems into elegant, user-friendly solutions. From real-time booking platforms to AI-powered analysis tools — I build things that matter.",
  location: "India",
  email: "sumit@example.com",
  socials: {
    github: "https://github.com/sumit",
    linkedin: "https://linkedin.com/in/sumit",
    twitter: "https://twitter.com/sumit",
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
    id: "labor-connect",
    title: "Labor Connect",
    description:
      "A full-stack platform connecting verified local service professionals with customers for fast, reliable, and secure bookings.",
    longDescription:
      "Labor Connect bridges the gap between skilled local professionals and customers who need them. Built with a modern dark glassmorphism UI, real-time booking system, background-verified worker profiles, Supabase backend, and an admin dashboard with live analytics.",
    tags: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://labor-connect-ruddy.vercel.app",
    githubUrl: "https://github.com/sumit/labor-connect",
    badge: "Live",
    badgeColor: "teal",
    stats: [
      { label: "Active Users", value: "50K+" },
      { label: "Service Categories", value: "120+" },
      { label: "Successful Jobs", value: "2M+" },
      { label: "Avg Rating", value: "4.9★" },
    ],
    featured: true,
    color: "#2dd4bf",
  },
  {
    id: "movie-sentiment",
    title: "Movie Sentiment Analyzer",
    description:
      "An AI/ML pipeline that classifies movie reviews as positive or negative using NLP techniques and a fine-tuned transformer model.",
    longDescription:
      "An end-to-end machine learning project that scrapes movie reviews, preprocesses text data, applies TF-IDF and BERT embeddings, and trains a binary sentiment classifier with 94%+ accuracy. Deployed with a Flask API and an interactive React dashboard.",
    tags: ["Python", "NLP", "TensorFlow", "BERT", "Flask", "React"],
    githubUrl: "https://github.com/sumit/movie-sentiment",
    badge: "AI/ML",
    badgeColor: "purple",
    stats: [
      { label: "Accuracy", value: "94%+" },
      { label: "Dataset Size", value: "50K+" },
      { label: "Model", value: "BERT" },
      { label: "Language", value: "Python" },
    ],
    featured: true,
    color: "#a78bfa",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
