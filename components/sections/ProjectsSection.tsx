"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { ExternalLink, FolderOpen, Star } from "lucide-react";
import { GitHubIcon } from "@/components/icons/BrandIcons";
import BorderGlow from "@/components/react-bits/BorderGlow";

const badgeStyles = {
  teal: "bg-teal-500/15 text-teal-400 border-teal-500/30",
  purple: "bg-purple-500/15 text-purple-400 border-purple-500/30",
  cyan: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-[#1e293b] bg-[#0f172a] text-[#94a3b8] text-sm">
            <FolderOpen size={14} />
            Featured Projects
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#f8fafc] mb-4">
            Things I&apos;ve{" "}
            <span className="gradient-text">Built</span>
          </h2>
          <p className="text-[#475569] max-w-xl mx-auto text-sm sm:text-base">
            From full-stack platforms to AI pipelines — here are my most
            impactful projects.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.article
              key={project.id}
              id={`project-card-${project.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="group relative rounded-2xl overflow-hidden h-full"
            >
              <BorderGlow
                backgroundColor="#0a0f1e"
                colors={[project.color, project.color, project.color]}
                glowColor={project.color}
                glowIntensity={3}
                glowRadius={60}
                edgeSensitivity={50}
                className="h-full rounded-2xl"
              >
                {/* Top accent bar */}
                <div
                  className="h-1 w-full"
                  style={{
                    background: `linear-gradient(90deg, ${project.color}, ${project.color}80)`,
                  }}
                />

                <div className="p-6 sm:p-8 flex flex-col h-full">
                  {/* Header row */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: `${project.color}20` }}
                      >
                        <Star size={16} style={{ color: project.color }} />
                      </div>
                      <div>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
                            badgeStyles[project.badgeColor]
                          }`}
                        >
                          {project.badge}
                        </span>
                      </div>
                    </div>

                    {/* Action links */}
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                          className="p-2 rounded-lg text-[#475569] hover:text-[#f8fafc] hover:bg-[#1e293b] transition-colors"
                        >
                          <GitHubIcon size={15} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live Demo"
                          className="p-2 rounded-lg text-[#475569] hover:text-[#2dd4bf] hover:bg-[#1e293b] transition-colors"
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#f8fafc] mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <p className="text-[#475569] text-xs leading-relaxed mb-6">
                    {project.longDescription}
                  </p>

                  <div className="mt-auto">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs rounded-md bg-[#1e293b] text-[#475569] border border-[#334155]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Live link CTA */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-teal-500/30 bg-teal-500/10 text-teal-400 text-sm font-semibold hover:bg-teal-500/20 hover:border-teal-500/50 transition-all duration-200"
                      >
                        View Live Project
                        <ExternalLink
                          size={14}
                          className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </BorderGlow>

              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: `inset 0 0 60px ${project.color}10`,
                  border: `1px solid ${project.color}30`,
                }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
