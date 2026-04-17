"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { GitHubIcon, XIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import { siteOwner } from "@/lib/data";
import GlitchText from "@/components/react-bits/GlitchText";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id.replace('contact-', '')]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="section-padding max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-[#1e293b] bg-[#0f172a] text-[#94a3b8] text-sm">
          <Mail size={14} />
          Get In Touch
        </div>
        <div className="text-3xl sm:text-5xl font-black text-[#f8fafc] mb-4">
          <GlitchText speed={1.5} enableShadows={true} enableOnHover={true} className="text-3xl sm:text-5xl font-black inline-block">
            Let&apos;s <span className="gradient-text">Work Together</span>
          </GlitchText>
        </div>
        <p className="text-[#475569] max-w-xl mx-auto text-sm sm:text-base">
          Have a project in mind or just want to say hello? My inbox is always
          open.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Contact info — left */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-4"
        >
          {[
            {
              icon: Mail,
              label: "Email",
              value: siteOwner.email,
              href: `mailto:${siteOwner.email}`,
            },
            {
              icon: MapPin,
              label: "Location",
              value: siteOwner.location,
              href: null,
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 p-4 rounded-xl glass-card"
            >
              <div className="w-10 h-10 rounded-lg bg-teal-500/15 border border-teal-500/30 flex items-center justify-center flex-shrink-0">
                <item.icon size={16} className="text-teal-400" />
              </div>
              <div>
                <div className="text-xs text-[#475569] mb-0.5">{item.label}</div>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm text-[#f8fafc] hover:text-teal-400 transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <div className="text-sm text-[#f8fafc]">{item.value}</div>
                )}
              </div>
            </div>
          ))}

          {/* Social links */}
          <div className="p-4 rounded-xl glass-card">
            <div className="text-xs text-[#475569] mb-3">Find me on</div>
            <div className="flex gap-3">
              {[
                { Icon: GitHubIcon, href: siteOwner.socials.github, label: "GitHub" },
                { Icon: LinkedInIcon, href: siteOwner.socials.linkedin, label: "LinkedIn" },
                { Icon: XIcon, href: siteOwner.socials.twitter, label: "Twitter / X" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg border border-[#1e293b] text-[#475569] hover:text-[#2dd4bf] hover:border-teal-500/40 hover:bg-teal-500/5 transition-all duration-200 text-xs"
                >
                  <Icon size={14} />
                  {label.split(" ")[0]}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Form — right */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-3"
        >
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-6 sm:p-8 space-y-5 relative"
          >
            {status === "success" && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a0f1e]/90 backdrop-blur z-10 rounded-2xl p-6 sm:p-8 text-center animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-teal-500/20 text-teal-400 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#f8fafc] mb-2">Message Sent!</h3>
                <p className="text-[#94a3b8]">I will get back to you as soon as possible.</p>
              </div>
            )}
            
            {status === "error" && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a0f1e]/90 backdrop-blur z-10 rounded-2xl p-6 sm:p-8 text-center animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center mb-4">
                  <AlertCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#f8fafc] mb-2">Something went wrong!</h3>
                <p className="text-[#94a3b8]">Failed to send message. Please try again later.</p>
                <button 
                  type="button" 
                  onClick={() => setStatus("idle")}
                  className="mt-4 px-6 py-2 rounded-lg bg-[#1e293b] text-white hover:bg-[#334155] transition-colors"
                >
                  Try Again
                </button>
              </div>
            )}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  id: "contact-name",
                  label: "Name",
                  type: "text",
                  placeholder: "Your name",
                  value: formData.name
                },
                {
                  id: "contact-email",
                  label: "Email",
                  type: "email",
                  placeholder: "your@email.com",
                  value: formData.email
                },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block text-xs font-medium text-[#94a3b8] mb-2"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    value={field.value}
                    onChange={handleChange}
                    required
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-xl bg-[#0f172a] border border-[#1e293b] text-[#f8fafc] placeholder-[#334155] text-sm focus:outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/30 transition-all"
                  />
                </div>
              ))}
            </div>

            <div>
              <label
                htmlFor="contact-subject"
                className="block text-xs font-medium text-[#94a3b8] mb-2"
              >
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
                className="w-full px-4 py-3 rounded-xl bg-[#0f172a] border border-[#1e293b] text-[#f8fafc] placeholder-[#334155] text-sm focus:outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/30 transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs font-medium text-[#94a3b8] mb-2"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl bg-[#0f172a] border border-[#1e293b] text-[#f8fafc] placeholder-[#334155] text-sm focus:outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/30 transition-all resize-none"
              />
            </div>

            <button
              id="contact-submit-btn"
              type="submit"
              disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-black font-bold text-sm btn-shimmer hover:from-teal-400 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-teal-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
              {status !== "loading" && <Send size={14} />}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
