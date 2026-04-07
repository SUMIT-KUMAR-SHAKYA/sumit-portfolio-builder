"use client";

import { useBuilderStore } from "@/lib/builder-store";
import BuilderCanvas from "@/components/builder/BuilderCanvas";
import BuilderSidebar from "@/components/builder/BuilderSidebar";
import Link from "next/link";
import {
  Eye,
  EyeOff,
  Trash2,
  ArrowLeft,
  Save,
  Layers,
} from "lucide-react";

export default function BuilderPage() {
  const {
    sections,
    isPreviewMode,
    togglePreview,
    clearCanvas,
    addSection,
  } = useBuilderStore();

  function handleSave() {
    // State auto-persists to localStorage via Zustand persist middleware.
    // Show a quick visual confirmation.
    const btn = document.getElementById("builder-save-btn");
    if (btn) {
      btn.textContent = "✓ Saved!";
      setTimeout(() => {
        btn.textContent = "Save";
      }, 1500);
    }
  }

  return (
    <div className="flex flex-col h-screen bg-[#030712] overflow-hidden">
      {/* ── Top Bar ─────────────────────────────────────── */}
      <header className="flex items-center justify-between px-4 h-14 border-b border-[#1e293b] bg-[#0a0f1e] flex-shrink-0">
        {/* Left */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-[#475569] hover:text-[#f8fafc] transition-colors text-sm"
          >
            <ArrowLeft size={14} />
            <span className="hidden sm:inline">Portfolio</span>
          </Link>

          <div className="w-px h-5 bg-[#1e293b]" />

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
              <Layers size={12} className="text-black" />
            </div>
            <span className="text-sm font-semibold text-[#f8fafc]">
              Page Builder
            </span>
          </div>
        </div>

        {/* Centre — section count */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e293b] text-xs text-[#475569]">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: sections.length ? "#2dd4bf" : "#334155" }}
          />
          {sections.length} section{sections.length !== 1 ? "s" : ""} on canvas
        </div>

        {/* Right — controls */}
        <div className="flex items-center gap-2">
          {/* Preview toggle */}
          <button
            id="builder-preview-btn"
            onClick={togglePreview}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
              isPreviewMode
                ? "bg-teal-500/20 text-teal-400 border border-teal-500/40"
                : "border border-[#1e293b] text-[#94a3b8] hover:text-[#f8fafc] hover:border-[#334155]"
            }`}
          >
            {isPreviewMode ? (
              <>
                <EyeOff size={12} /> Edit
              </>
            ) : (
              <>
                <Eye size={12} /> Preview
              </>
            )}
          </button>

          {/* Save */}
          <button
            id="builder-save-btn"
            onClick={handleSave}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-[#1e293b] text-[#94a3b8] hover:text-[#f8fafc] hover:border-[#334155] transition-all duration-200"
          >
            <Save size={12} />
            Save
          </button>

          {/* Clear */}
          {sections.length > 0 && (
            <button
              id="builder-clear-btn"
              onClick={() => {
                if (
                  confirm(
                    "Clear all sections from the canvas? This cannot be undone."
                  )
                )
                  clearCanvas();
              }}
              className="p-1.5 rounded-lg text-[#334155] hover:text-red-400 hover:bg-red-500/10 border border-transparent hover:border-red-500/20 transition-all duration-200"
              aria-label="Clear canvas"
            >
              <Trash2 size={14} />
            </button>
          )}
        </div>
      </header>

      {/* ── Body: Sidebar + Canvas ──────────────────────── */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar hidden in preview mode */}
        {!isPreviewMode && (
          <BuilderSidebar onAdd={addSection} />
        )}

        {/* Canvas */}
        <main
          className={`flex-1 overflow-hidden transition-all duration-300 ${
            isPreviewMode ? "bg-[#030712]" : "bg-[#060d1a]"
          }`}
        >
          <BuilderCanvas />
        </main>
      </div>
    </div>
  );
}
