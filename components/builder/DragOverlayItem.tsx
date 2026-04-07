"use client";

import { SectionType } from "@/lib/builder-store";
import { Sparkles, User, FolderOpen, Mail } from "lucide-react";

const icons: Record<SectionType, React.ElementType> = {
  hero: Sparkles,
  about: User,
  projects: FolderOpen,
  contact: Mail,
};

const colors: Record<SectionType, string> = {
  hero: "#2dd4bf",
  about: "#22d3ee",
  projects: "#a78bfa",
  contact: "#fb923c",
};

interface DragOverlayItemProps {
  type: SectionType;
}

export default function DragOverlayItem({ type }: DragOverlayItemProps) {
  const Icon = icons[type];
  const color = colors[type];

  return (
    <div
      className="flex items-center gap-3 px-4 py-3 rounded-xl border shadow-2xl"
      style={{
        background: "#0d1526",
        borderColor: `${color}60`,
        boxShadow: `0 0 30px ${color}30`,
        minWidth: 180,
      }}
    >
      <div
        className="w-7 h-7 rounded-lg flex items-center justify-center"
        style={{ background: `${color}20` }}
      >
        <Icon size={13} style={{ color }} />
      </div>
      <span className="text-sm font-semibold text-[#f8fafc] capitalize">
        {type}
      </span>
    </div>
  );
}
