"use client";

import {
  DndContext,
  closestCenter,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { useState } from "react";
import { useBuilderStore, SectionType } from "@/lib/builder-store";
import SortableSection from "./SortableSection";
import DragOverlayItem from "./DragOverlayItem";
import { LayoutTemplate } from "lucide-react";

export default function BuilderCanvas() {
  const { sections, setSections, isPreviewMode } = useBuilderStore();
  const [activeDragType, setActiveDragType] = useState<SectionType | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragStart(event: DragStartEvent) {
    const dragged = sections.find((s) => s.id === event.active.id);
    if (dragged) setActiveDragType(dragged.type);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    setActiveDragType(null);
    if (!over || active.id === over.id) return;

    const oldIndex = sections.findIndex((s) => s.id === active.id);
    const newIndex = sections.findIndex((s) => s.id === over.id);
    setSections(arrayMove(sections, oldIndex, newIndex));
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="flex-1 h-full overflow-y-auto p-6">
        {sections.length === 0 ? (
          /* Empty state */
          <div className="h-full flex flex-col items-center justify-center text-center gap-4 min-h-[400px]">
            <div className="w-20 h-20 rounded-2xl border-2 border-dashed border-[#1e293b] flex items-center justify-center">
              <LayoutTemplate size={28} className="text-[#334155]" />
            </div>
            <div>
              <p className="text-[#475569] font-medium mb-1">Canvas is empty</p>
              <p className="text-xs text-[#334155]">
                Click a block from the sidebar to add it here.
              </p>
            </div>
          </div>
        ) : (
          <SortableContext
            items={sections.map((s) => s.id)}
            strategy={verticalListSortingStrategy}
          >
            <div className="flex flex-col gap-4 max-w-4xl mx-auto">
              {sections.map((section) => (
                <SortableSection key={section.id} section={section} />
              ))}

              {!isPreviewMode && sections.length > 0 && (
                <p className="text-center text-xs text-[#334155] py-2">
                  ↑ Drag the ⠿ handle to reorder · Click text to edit
                </p>
              )}
            </div>
          </SortableContext>
        )}
      </div>

      <DragOverlay>
        {activeDragType ? <DragOverlayItem type={activeDragType} /> : null}
      </DragOverlay>
    </DndContext>
  );
}
