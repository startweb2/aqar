import React, { useState } from 'react';
import { FloorPlanTypology } from '../../types';

export interface InteractiveViewerProps {
  readonly typology: FloorPlanTypology;
  readonly viewMode: '3D' | '2D';
  readonly onToggleViewMode: (mode: '3D' | '2D') => void;
  readonly zoomLevel: number;
  readonly onZoomIn: () => void;
  readonly onZoomOut: () => void;
  readonly onResetZoom: () => void;
}

interface ZonePin {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly icon: string;
  readonly top: string;
  readonly left: string;
  readonly zoneNumber: string;
}

const DEFAULT_PINS: readonly ZonePin[] = [
  {
    id: 'master-bedroom',
    zoneNumber: 'Zone 01',
    title: 'Master Bedroom Suite',
    subtitle: '34 m² • Walk-in Robe & Ensuite',
    icon: 'bed',
    top: '28%',
    left: '24%',
  },
  {
    id: 'sea-terrace',
    zoneNumber: 'Zone 02',
    title: 'Wraparound Sea Terrace',
    subtitle: '28 m² • Dual Sun Loungers',
    icon: 'wb_sunny',
    top: '78%',
    left: '72%',
  },
  {
    id: 'living-salon',
    zoneNumber: 'Zone 03',
    title: 'Open Living & Dining Salon',
    subtitle: '42 m² • Frameless Sea Glazing',
    icon: 'chair',
    top: '52%',
    left: '56%',
  },
  {
    id: 'lift-vestibule',
    zoneNumber: 'Zone 04',
    title: 'Direct Lift Vestibule',
    subtitle: 'Secure biometric lobby access',
    icon: 'sensor_door',
    top: '80%',
    left: '16%',
  },
];

export const InteractiveViewer: React.FC<Readonly<InteractiveViewerProps>> = ({
  typology,
  viewMode,
  onToggleViewMode,
  zoomLevel,
  onZoomIn,
  onZoomOut,
  onResetZoom,
}) => {
  const [rotation, setRotation] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const handleToggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };

  const currentImage = viewMode === '3D' ? typology.isometricImageUrl : typology.blueprintImageUrl;

  return (
    <div
      className={`flex flex-col gap-space-sm ${
        isFullscreen ? 'fixed inset-0 z-50 bg-background/95 p-6 backdrop-blur-lg flex flex-col justify-center' : ''
      }`}
    >
      <div
        id="planContainer"
        className="relative bg-warm-ivory rounded-3xl p-space-md shadow-xl overflow-hidden aspect-[4/3] md:aspect-[16/11] flex items-center justify-center group"
      >
        {/* Floorplan Technical Grid Background */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[linear-gradient(to_right,#06090E_1px,transparent_1px),linear-gradient(to_bottom,#06090E_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Compass Cardinal Floating Element */}
        <div className="absolute top-space-md left-space-md z-20 flex flex-col items-center bg-midnight-black/85 backdrop-blur-md text-warm-ivory px-2.5 py-2 rounded-xl shadow-lg pointer-events-none">
          <span className="font-label-sm text-label-sm text-primary font-bold">N</span>
          <span className="material-symbols-outlined text-[16px] text-sand-beige rotate-45">
            navigation
          </span>
          <span className="font-label-sm text-[9px] text-muted-slate tracking-tighter">MED SEA</span>
        </div>

        {/* Level Elevation Badge */}
        <div className="absolute top-space-md right-space-md z-20 bg-midnight-black/85 backdrop-blur-md text-warm-ivory px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="font-label-sm text-label-sm tracking-wider uppercase">
            {typology.floorRange} • {typology.series}
          </span>
        </div>

        {/* The Floor Plan Render Layer with Zoom & Rotation */}
        <div
          className="relative w-full h-full flex items-center justify-center transition-transform duration-500 ease-out"
          style={{
            transform: `scale(${zoomLevel}) rotate(${rotation}deg)`,
          }}
        >
          <img
            alt={`${typology.name} ${viewMode} Architectural Plan`}
            className="w-full h-full object-contain filter drop-shadow-2xl select-none pointer-events-none"
            src={currentImage}
          />

          {/* Interactive Zone Pins (only in 3D view for clarity) */}
          {viewMode === '3D' &&
            DEFAULT_PINS.map((pin) => {
              const isPinned = activeTooltip === pin.id;
              return (
                <div
                  key={pin.id}
                  style={{ top: pin.top, left: pin.left }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group/pin z-30 cursor-pointer"
                  onClick={() => setActiveTooltip(isPinned ? null : pin.id)}
                  onMouseEnter={() => setActiveTooltip(pin.id)}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  <div className="relative flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-primary/30 animate-ping absolute" />
                    <div className="w-7 h-7 rounded-full bg-midnight-black text-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[16px]">{pin.icon}</span>
                    </div>
                  </div>

                  {/* Pin Tooltip */}
                  <div
                    className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-midnight-black/95 backdrop-blur-md text-warm-ivory p-space-xs rounded-xl shadow-2xl transition-all pointer-events-none z-40 transform ${
                      isPinned
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-1 group-hover/pin:opacity-100 group-hover/pin:translate-y-0'
                    }`}
                  >
                    <span className="font-label-sm text-[10px] tracking-wider text-primary block uppercase">
                      {pin.zoneNumber}
                    </span>
                    <span className="font-label-md text-label-md font-bold block text-warm-ivory">
                      {pin.title}
                    </span>
                    <span className="font-body-sm text-[11px] text-sand-beige/80">{pin.subtitle}</span>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Floor Plan Watermark */}
        <div className="absolute bottom-space-md left-space-md pointer-events-none opacity-40">
          <span className="font-headline-lg text-headline-lg font-serif italic text-midnight-black select-none">
            ALAMEIN TOWERS
          </span>
        </div>
      </div>

      {/* Interactive Plan Utility Control Bar */}
      <div className="bg-warm-ivory p-space-xs rounded-2xl shadow-sm flex flex-wrap items-center justify-between gap-space-xs">
        {/* View Mode Switcher */}
        <div className="inline-flex p-1 bg-[#E2DBD0] rounded-xl">
          <button
            onClick={() => onToggleViewMode('3D')}
            type="button"
            className={`px-space-md py-1.5 rounded-lg font-label-sm text-label-sm uppercase tracking-wider font-bold shadow-sm flex items-center gap-1.5 cursor-pointer transition-colors ${
              viewMode === '3D'
                ? 'bg-midnight-black text-warm-ivory'
                : 'text-surface-container-highest hover:text-midnight-black'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">view_in_ar</span>
            <span>3D Isometric</span>
          </button>
          <button
            onClick={() => onToggleViewMode('2D')}
            type="button"
            className={`px-space-md py-1.5 rounded-lg font-label-sm text-label-sm uppercase tracking-wider font-bold shadow-sm flex items-center gap-1.5 cursor-pointer transition-colors ${
              viewMode === '2D'
                ? 'bg-midnight-black text-warm-ivory'
                : 'text-surface-container-highest hover:text-midnight-black'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">architecture</span>
            <span>2D CAD Blueprint</span>
          </button>
        </div>

        {/* View Manipulation Tools */}
        <div className="flex items-center gap-1">
          <button
            onClick={handleRotate}
            type="button"
            title="Rotate Plan 90°"
            className="w-9 h-9 rounded-xl bg-surface-container-lowest/5 hover:bg-midnight-black hover:text-primary transition-colors flex items-center justify-center text-midnight-black cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">rotate_right</span>
          </button>
          <button
            onClick={onZoomIn}
            type="button"
            title="Zoom In"
            className="w-9 h-9 rounded-xl bg-surface-container-lowest/5 hover:bg-midnight-black hover:text-primary transition-colors flex items-center justify-center text-midnight-black cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
          </button>
          <button
            onClick={onZoomOut}
            type="button"
            title="Zoom Out"
            className="w-9 h-9 rounded-xl bg-surface-container-lowest/5 hover:bg-midnight-black hover:text-primary transition-colors flex items-center justify-center text-midnight-black cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">remove</span>
          </button>
          <button
            onClick={onResetZoom}
            type="button"
            title="Reset View"
            className="w-9 h-9 rounded-xl bg-surface-container-lowest/5 hover:bg-midnight-black hover:text-primary transition-colors flex items-center justify-center text-midnight-black cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">center_focus_strong</span>
          </button>
          <button
            onClick={handleToggleFullscreen}
            type="button"
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen Expansion'}
            className="w-9 h-9 rounded-xl bg-gold-light/60 text-gold-dark hover:bg-gold-dark hover:text-warm-ivory transition-colors flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">
              {isFullscreen ? 'fullscreen_exit' : 'fullscreen'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
