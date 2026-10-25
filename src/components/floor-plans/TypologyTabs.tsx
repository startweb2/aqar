import React from 'react';
import { FloorPlanTypology } from '../../types';

export interface TypologyTabsProps {
  readonly typologies: readonly FloorPlanTypology[];
  readonly activeId: string;
  readonly onSelectTypology: (id: string) => void;
}

export const TypologyTabs: React.FC<Readonly<TypologyTabsProps>> = ({
  typologies,
  activeId,
  onSelectTypology,
}) => {
  return (
    <div className="w-full bg-sand-beige/60 p-1.5 rounded-2xl shadow-sm flex flex-col md:flex-row items-center gap-1.5 overflow-x-auto scrollbar-none">
      {typologies.map((item) => {
        const isActive = item.id === activeId;
        return (
          <button
            key={item.id}
            onClick={() => onSelectTypology(item.id)}
            type="button"
            className={`group residence-tab w-full md:w-auto flex-1 flex items-center justify-between md:justify-center gap-space-sm px-space-md py-space-sm rounded-xl font-label-md text-label-md uppercase tracking-wider transition-all cursor-pointer ${
              isActive
                ? 'bg-midnight-black text-warm-ivory shadow-md'
                : 'text-surface-container-highest hover:text-midnight-black hover:bg-warm-ivory/80'
            }`}
          >
            <span className="flex items-center gap-2">
              {isActive && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
              <span className={`font-semibold ${isActive ? 'text-primary font-bold' : ''}`}>
                {item.name}
              </span>
            </span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full transition-colors ${
                isActive
                  ? 'bg-surface-container-highest text-primary font-bold'
                  : 'bg-black/5 text-muted-slate group-hover:text-midnight-black'
              }`}
            >
              {item.areaM2} m²
            </span>
          </button>
        );
      })}
    </div>
  );
};
