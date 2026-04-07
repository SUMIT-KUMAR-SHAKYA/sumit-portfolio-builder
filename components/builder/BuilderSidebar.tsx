"use client";

import { SectionType } from "@/lib/builder-store";
import {
  Sparkles,
  User,
  FolderOpen,
  Mail,
} from "lucide-react";

const BLOCK_META: Record<
  SectionType,
  { label: string; icon: React.ElementType; color: string; description: string }
> = {
  hero: {
    label: "Hero",
    icon: Sparkles,
    color: "#2dd4bf",
    description: "Full-height intro with your name & CTA.",
  },
  about: {
    label: "About",
    icon: User,
    color: "#22d3ee",
    description: "Bio, quick facts, and skill chips.",
  },
  projects: {
    label: "Projects",
    icon: FolderOpen,
    color: "#a78bfa",
    description: "Project showcase cards with stats.",
  },
  contact: {
    label: "Contact",
    icon: Mail,
    color: "#fb923c",
    description: "Contact form + social links.",
  },
};

interface BlockChipProps {
  type: SectionType;
  onAdd: (type: SectionType) => void;
}

function BlockChip({ type, onAdd }: BlockChipProps) {
  const meta = BLOCK_META[type];
  const Icon = meta.icon;

  return (
    <button
      id={`sidebar-block-${type}`}
      onClick={() => onAdd(type)}
      className="group w-full flex items-start gap-3 p-3 rounded-xl border border-[#1e293b] bg-[#0d1526] hover:border-opacity-60 hover:bg-[#0f172a] transition-all duration-200 text-left"
      style={
        {
          "--hover-color": meta.color,
        } as React.CSSProperties
      }
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = `${meta.color}60`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#1e293b";
      }}
    >
      {/* Icon */}
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110"
        style={{ background: `${meta.color}20` }}
      >
        <Icon size={14} style={{ color: meta.color }} />
      </div>

      {/* Text */}
      <div>
        <div className="text-sm font-semibold text-[#f8fafc] mb-0.5">
          {meta.label}
        </div>
        <div className="text-xs text-[#475569] leading-relaxed">
          {meta.description}
        </div>
      </div>

      {/* + indicator */}
      <div
        className="ml-auto text-lg leading-none opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
        style={{ color: meta.color }}
      >
        +
      </div>
    </button>
  );
}

interface BuilderSidebarProps {
  onAdd: (type: SectionType) => void;
}

export default function BuilderSidebar({ onAdd }: BuilderSidebarProps) {
  const sectionTypes: SectionType[] = ["hero", "about", "projects", "contact"];

  return (
    <aside className="w-72 flex-shrink-0 h-full overflow-y-auto border-r border-[#1e293b] bg-[#0a0f1e] p-4 flex flex-col gap-4">
      {/* Header */}
      <div>
        <h2 className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-1">
          UI Blocks
        </h2>
        <p className="text-xs text-[#334155]">
          Click a block to add it to the canvas.
        </p>
      </div>

      {/* Block list */}
      <div className="flex flex-col gap-2">
        {sectionTypes.map((type) => (
          <BlockChip key={type} type={type} onAdd={onAdd} />
        ))}
      </div>

      {/* Tip */}
      <div className="mt-auto p-3 rounded-xl bg-teal-500/5 border border-teal-500/20">
        <p className="text-xs text-[#475569] leading-relaxed">
          💡 <strong className="text-teal-400/80">Tip:</strong> Click any text on the canvas to edit it inline. Drag the{" "}
          <span className="text-[#94a3b8]">⠿</span> handle to reorder sections.
        </p>
      </div>
    </aside>
  );
}
