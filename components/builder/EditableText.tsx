"use client";

import { useBuilderStore } from "@/lib/builder-store";

interface EditableTextProps {
  sectionId: string;
  field: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
}

export default function EditableText({
  sectionId,
  field,
  tag: Tag = "p",
  className = "",
}: EditableTextProps) {
  const { sections, isPreviewMode, updateContent } = useBuilderStore();
  const section = sections.find((s) => s.id === sectionId);
  const value = section?.content[field] ?? "";

  if (isPreviewMode) {
    return <Tag className={className}>{value}</Tag>;
  }

  return (
    <Tag
      contentEditable
      suppressContentEditableWarning
      className={className}
      onBlur={(e) => {
        const text = e.currentTarget.textContent ?? "";
        if (text !== value) updateContent(sectionId, field, text);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          (e.currentTarget as HTMLElement).blur();
        }
      }}
    >
      {value}
    </Tag>
  );
}
