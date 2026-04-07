import { create } from "zustand";
import { persist } from "zustand/middleware";

export type SectionType = "hero" | "about" | "projects" | "contact";

export interface CanvasSection {
  /** Unique instance id (uuid-like) */
  id: string;
  type: SectionType;
  /** Editable content overrides keyed by field name */
  content: Record<string, string>;
}

interface BuilderState {
  sections: CanvasSection[];
  activeId: string | null;
  isPreviewMode: boolean;
  setSections: (sections: CanvasSection[]) => void;
  addSection: (type: SectionType) => void;
  removeSection: (id: string) => void;
  updateContent: (id: string, field: string, value: string) => void;
  setActiveId: (id: string | null) => void;
  togglePreview: () => void;
  clearCanvas: () => void;
}

function makeId() {
  return Math.random().toString(36).slice(2, 10);
}

const defaultContent: Record<SectionType, Record<string, string>> = {
  hero: {
    heading: "Sumit Kumar Shakya",
    subheading: "Full-Stack & AI/ML Engineer",
    cta: "View My Work",
  },
  about: {
    heading: "About Me",
    body: "I'm a passionate developer building impactful digital experiences.",
  },
  projects: {
    heading: "Featured Projects",
    subheading: "Things I've Built",
  },
  contact: {
    heading: "Let's Work Together",
    subheading: "Have a project in mind? Let's talk.",
  },
};

export const useBuilderStore = create<BuilderState>()(
  persist(
    (set) => ({
      sections: [],
      activeId: null,
      isPreviewMode: false,

      setSections: (sections) => set({ sections }),

      addSection: (type) =>
        set((state) => ({
          sections: [
            ...state.sections,
            { id: makeId(), type, content: { ...defaultContent[type] } },
          ],
        })),

      removeSection: (id) =>
        set((state) => ({
          sections: state.sections.filter((s) => s.id !== id),
          activeId: state.activeId === id ? null : state.activeId,
        })),

      updateContent: (id, field, value) =>
        set((state) => ({
          sections: state.sections.map((s) =>
            s.id === id ? { ...s, content: { ...s.content, [field]: value } } : s
          ),
        })),

      setActiveId: (id) => set({ activeId: id }),

      togglePreview: () =>
        set((state) => ({ isPreviewMode: !state.isPreviewMode })),

      clearCanvas: () => set({ sections: [], activeId: null }),
    }),
    { name: "portfolio-builder" }
  )
);
