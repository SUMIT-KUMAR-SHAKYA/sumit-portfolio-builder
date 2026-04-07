"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical, Trash2 } from "lucide-react";
import { CanvasSection, useBuilderStore } from "@/lib/builder-store";
import EditableText from "./EditableText";

function SectionPreview({ section }: { section: CanvasSection }) {
  const { isPreviewMode } = useBuilderStore();

  switch (section.type) {
    case "hero":
      return (
        <div className="py-16 px-8 text-center">
          <EditableText
            sectionId={section.id}
            field="heading"
            tag="h1"
            className="text-4xl sm:text-5xl font-black gradient-text mb-3"
          />
          <EditableText
            sectionId={section.id}
            field="subheading"
            tag="p"
            className="text-lg text-[#94a3b8] mb-6"
          />
          <span
            className={`inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-black text-sm font-bold ${
              !isPreviewMode ? "pointer-events-none" : ""
            }`}
          >
            <EditableText sectionId={section.id} field="cta" tag="span" />
          </span>
        </div>
      );

    case "about":
      return (
        <div className="py-12 px-8">
          <EditableText
            sectionId={section.id}
            field="heading"
            tag="h2"
            className="text-2xl font-black text-[#f8fafc] mb-3"
          />
          <EditableText
            sectionId={section.id}
            field="body"
            tag="p"
            className="text-[#94a3b8] text-sm leading-relaxed max-w-lg"
          />
        </div>
      );

    case "projects":
      return (
        <div className="py-12 px-8">
          <EditableText
            sectionId={section.id}
            field="heading"
            tag="h2"
            className="text-2xl font-black text-[#f8fafc] mb-1"
          />
          <EditableText
            sectionId={section.id}
            field="subheading"
            tag="p"
            className="text-[#94a3b8] text-sm mb-6"
          />
          <div className="grid grid-cols-2 gap-4">
            {["Labor Connect", "Movie Sentiment Analyzer"].map((name) => (
              <div
                key={name}
                className="p-4 rounded-xl glass-card border border-[#1e293b]"
              >
                <div className="text-sm font-semibold text-[#f8fafc] mb-1">
                  {name}
                </div>
                <div className="text-xs text-[#475569]">View Project →</div>
              </div>
            ))}
          </div>
        </div>
      );

    case "contact":
      return (
        <div className="py-12 px-8">
          <EditableText
            sectionId={section.id}
            field="heading"
            tag="h2"
            className="text-2xl font-black text-[#f8fafc] mb-1"
          />
          <EditableText
            sectionId={section.id}
            field="subheading"
            tag="p"
            className="text-[#94a3b8] text-sm mb-6"
          />
          <div className="grid grid-cols-1 gap-3 max-w-sm">
            <div className="h-10 rounded-lg bg-[#0f172a] border border-[#1e293b]" />
            <div className="h-10 rounded-lg bg-[#0f172a] border border-[#1e293b]" />
            <div className="h-20 rounded-lg bg-[#0f172a] border border-[#1e293b]" />
            <div className="h-10 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 opacity-80" />
          </div>
        </div>
      );

    default:
      return null;
  }
}

interface SortableSectionProps {
  section: CanvasSection;
}

export default function SortableSection({ section }: SortableSectionProps) {
  const { removeSection, isPreviewMode } = useBuilderStore();

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: section.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1,
    zIndex: isDragging ? 50 : "auto",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`relative group rounded-2xl border bg-[#0d1526] overflow-hidden transition-colors ${
        isDragging
          ? "border-teal-500/60 shadow-lg shadow-teal-500/10"
          : "border-[#1e293b] hover:border-[#334155]"
      }`}
    >
      {/* Section type label + controls — hidden in preview mode */}
      {!isPreviewMode && (
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-3 py-2 bg-[#0a0f1e]/80 backdrop-blur-sm border-b border-[#1e293b] z-10 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-2">
            {/* Drag handle */}
            <button
              className="cursor-grab active:cursor-grabbing text-[#334155] hover:text-[#94a3b8] transition-colors"
              {...attributes}
              {...listeners}
              aria-label="Drag to reorder"
            >
              <GripVertical size={16} />
            </button>
            <span className="text-xs font-semibold text-[#475569] capitalize">
              {section.type}
            </span>
          </div>

          <button
            onClick={() => removeSection(section.id)}
            className="p-1 rounded text-[#334155] hover:text-red-400 hover:bg-red-500/10 transition-colors"
            aria-label="Remove section"
          >
            <Trash2 size={13} />
          </button>
        </div>
      )}

      {/* Content */}
      <div className={!isPreviewMode ? "pt-8" : ""}>
        <SectionPreview section={section} />
      </div>
    </div>
  );
}
