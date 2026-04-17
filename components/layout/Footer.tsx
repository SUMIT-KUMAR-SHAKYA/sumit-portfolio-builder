"use client";

import Link from "next/link";
import { Layers } from "lucide-react";
import { GitHubIcon, XIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import { siteOwner } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1e293b] bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center text-black text-sm font-black">
                S
              </span>
              <span className="font-bold text-[#f8fafc]">{siteOwner.name}</span>
            </div>
            <p className="text-sm text-[#475569] leading-relaxed">
              IIIT Student & Aspiring Cybersecurity Engineer. Building secure, 
              scalable solutions for the digital frontier.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-[#94a3b8] uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2">
              {["About", "Projects", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-[#475569] hover:text-[#2dd4bf] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-sm font-semibold text-[#94a3b8] uppercase tracking-wider mb-3">
              Tools
            </h4>
            <Link
              href="/builder"
              className="inline-flex items-center gap-2 text-sm text-[#475569] hover:text-[#2dd4bf] transition-colors"
            >
              <Layers size={14} />
              Visual Page Builder
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[#1e293b] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#334155]">
            © {year} {siteOwner.name}. Built with Next.js & ❤️
          </p>
          <div className="flex items-center gap-4">
            {[
              { Icon: GitHubIcon, href: siteOwner.socials.github, label: "GitHub" },
              { Icon: XIcon, href: siteOwner.socials.twitter, label: "Twitter / X" },
              { Icon: LinkedInIcon, href: siteOwner.socials.linkedin, label: "LinkedIn" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[#334155] hover:text-[#2dd4bf] transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
