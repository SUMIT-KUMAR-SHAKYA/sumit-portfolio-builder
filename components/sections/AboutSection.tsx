"use client";

import { motion } from "framer-motion";
import { skills, siteOwner } from "@/lib/data";
import { User, Code2, Cpu, Server } from "lucide-react";
import ProfileCard from "@/components/react-bits/ProfileCard";

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
          className="flex flex-col items-center justify-center lg:items-start"
        >
          <div className="flex items-center gap-3 mb-6 w-full justify-center lg:justify-start">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
              <User size={18} className="text-black" />
            </div>
            <span className="text-sm font-semibold text-teal-400 uppercase tracking-wider">
              About Me
            </span>
          </div>

          <div className="w-full flex justify-center lg:justify-start">
            <ProfileCard
              name="Sumit Shakya"
              title="Sumit Shakya | IIIT Student | Aspiring Cybersecurity Engineer"
              handle="sumit"
              status="Open to work 🟢"
              contactText="Contact Me"
              avatarUrl="/images/profile.png"
              showUserInfo={true}
              enableTilt={true}
              behindGlowColor="rgba(45, 212, 191, 0.4)"
              innerGradient="linear-gradient(145deg, #0a0f1e 0%, #0f172a 100%)"
              className="w-full max-w-sm"
              onContactClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
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
