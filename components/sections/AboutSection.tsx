"use client";

import { motion } from "framer-motion";
import { skills, siteOwner } from "@/lib/data";
import { User, Code2, Cpu, Server } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as any },
  }),
};

const categoryMeta: Record<string, { color: string; label: string; icon: React.ElementType }> = {
  Frontend: { color: "#2dd4bf", label: "Frontend", icon: Code2 },
  Backend: { color: "#22d3ee", label: "Backend", icon: Server },
  "AI/ML": { color: "#a78bfa", label: "AI / ML", icon: Cpu },
  DevOps: { color: "#fb923c", label: "DevOps", icon: User },
};

const categories = ["Frontend", "Backend", "AI/ML", "DevOps"] as const;

export default function AboutSection() {
  return (
    <section id="about" className="section-padding max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left — Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
              <User size={18} className="text-black" />
            </div>
            <span className="text-sm font-semibold text-teal-400 uppercase tracking-wider">
              About Me
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#f8fafc] mb-6 leading-tight">
            Crafting Digital
            <br />
            <span className="gradient-text">Experiences</span>
          </h2>

          <p className="text-[#94a3b8] leading-relaxed mb-6 text-base sm:text-lg">
            {siteOwner.bio}
          </p>

          <p className="text-[#475569] leading-relaxed text-sm sm:text-base">
            My journey spans from building enterprise-grade booking platforms
            with real-time data to training AI models that understand human
            sentiment. I love the full spectrum — pixels to pipelines.
          </p>

          {/* Quick facts */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { label: "Location", value: siteOwner.location },
              { label: "Focus", value: "Full-Stack + AI/ML" },
              { label: "Email", value: siteOwner.email },
              { label: "Status", value: "Open to work 🟢" },
            ].map((fact) => (
              <div
                key={fact.label}
                className="p-3 rounded-xl border border-[#1e293b] bg-[#0d1526]"
              >
                <div className="text-xs text-[#475569] mb-1">{fact.label}</div>
                <div className="text-sm text-[#f8fafc] font-medium truncate">
                  {fact.value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Skills grid */}
        <div id="skills">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
              <Code2 size={18} className="text-black" />
            </div>
            <span className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
              Tech Stack
            </span>
          </div>

          <div className="space-y-6">
            {categories.map((cat) => {
              const meta = categoryMeta[cat];
              const Icon = meta.icon;
              const catSkills = skills.filter((s) => s.category === cat);

              return (
                <motion.div
                  key={cat}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Icon size={14} style={{ color: meta.color }} />
                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: meta.color }}>
                      {meta.label}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {catSkills.map((skill, i) => (
                      <motion.span
                        key={skill.name}
                        custom={i}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 hover:scale-105 cursor-default"
                        style={{
                          borderColor: `${meta.color}30`,
                          backgroundColor: `${meta.color}10`,
                          color: meta.color,
                        }}
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
