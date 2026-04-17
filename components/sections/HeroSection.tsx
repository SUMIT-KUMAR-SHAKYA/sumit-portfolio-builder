"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, Layers, ExternalLink, Sparkles } from "lucide-react";
import { GitHubIcon } from "@/components/icons/BrandIcons";
import { siteOwner } from "@/lib/data";
import GradientText from "@/components/react-bits/GradientText";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as any },
  }),
};

const floatOrb = {
  animate: {
    y: [-20, 20, -20],
    x: [-10, 10, -10],
    transition: { repeat: Infinity, duration: 8, ease: "easeInOut" as any },
  },
};

const floatOrb2 = {
  animate: {
    y: [20, -20, 20],
    x: [10, -10, 10],
    transition: { repeat: Infinity, duration: 10, ease: "easeInOut" as any },
  },
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center grid-bg overflow-hidden px-4"
    >
      {/* Ambient orbs */}
      <motion.div
        variants={floatOrb}
        animate="animate"
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none"
      />
      <motion.div
        variants={floatOrb2}
        animate="animate"
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"
      />
      <motion.div
        variants={floatOrb}
        animate="animate"
        className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-purple-500/8 blur-3xl pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-sm font-medium mb-8"
        >
          <Sparkles size={14} className="animate-pulse" />
          Available for new opportunities
        </motion.div>

        {/* Name */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-4"
        >
          <GradientText
            colors={["#22d3ee", "#0ea5e9", "#1e40af"]}
            animationSpeed={6}
            showBorder={false}
            className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05]"
          >
            Sumit Kumar Shakya
          </GradientText>
        </motion.div>

        {/* Title */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-xl sm:text-2xl text-[#94a3b8] font-light mb-6 tracking-wide"
        >
          {siteOwner.title}
        </motion.p>

        {/* Bio */}
        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-2xl mx-auto text-base sm:text-lg text-[#475569] leading-relaxed mb-10"
        >
          {siteOwner.bio}
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            id="hero-view-work-btn"
            href="#projects"
            className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-black font-bold text-sm btn-shimmer hover:from-teal-400 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-teal-500/25"
          >
            View My Work
            <ExternalLink
              size={15}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>

          <Link
            id="hero-builder-btn"
            href="/builder"
            className="group flex items-center gap-2 px-8 py-4 rounded-xl border border-[#1e293b] bg-[#0f172a] text-[#94a3b8] font-semibold text-sm hover:border-teal-500/50 hover:text-[#f8fafc] transition-all duration-300"
          >
            <Layers size={15} />
            Open Page Builder
          </Link>

          <a
            id="hero-github-btn"
            href={siteOwner.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 rounded-xl border border-teal-500/30 bg-teal-500/5 text-teal-400 font-bold text-sm hover:bg-teal-500/10 hover:border-teal-500/60 hover:shadow-[0_0_20px_rgba(45,212,191,0.2)] transition-all duration-300"
          >
            <GitHubIcon size={18} className="drop-shadow-[0_0_8px_rgba(45,212,191,1)]" />
            Explore GitHub
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl mx-auto"
        >
          {[
            { value: "2+", label: "Featured Projects" },
            { value: "5+", label: "Tech Stacks" },
            { value: "∞", label: "Passion to Build" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-black gradient-text">
                {stat.value}
              </div>
              <div className="text-xs text-[#475569] mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#334155] flex flex-col items-center gap-1"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
}
