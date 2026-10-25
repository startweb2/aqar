import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useFloorPlan } from '../hooks/useFloorPlan';
import { TypologyTabs } from '../components/floor-plans/TypologyTabs';
import { SpatialCadastre } from '../components/floor-plans/SpatialCadastre';
import { InteractiveViewer } from '../components/floor-plans/InteractiveViewer';
import { RoomDimensionsList } from '../components/floor-plans/RoomDimensionsList';
import { MaterialPaletteCard } from '../components/floor-plans/MaterialPaletteCard';
import { InteriorPreviews } from '../components/floor-plans/InteriorPreviews';

export interface FloorPlansPageProps {
  readonly title?: string;
}

export const FloorPlansPage: React.FC<Readonly<FloorPlansPageProps>> = () => {
  const { t, isRTL } = useLanguage();
  const {
    activeId,
    setActiveId,
    viewMode,
    setViewMode,
    zoomLevel,
    handleZoomIn,
    handleZoomOut,
    handleResetZoom,
    activeTypology,
    allTypologies,
  } = useFloorPlan();

  const currentIndex = allTypologies.findIndex((t) => t.id === activeId);
  const prevIndex = (currentIndex - 1 + allTypologies.length) % allTypologies.length;
  const nextIndex = (currentIndex + 1) % allTypologies.length;

  const prevTypology = allTypologies[prevIndex];
  const nextTypology = allTypologies[nextIndex];

  return (
    <main className="w-full pt-20 bg-background">
      <div className="flex flex-col w-full text-midnight-black selection:bg-primary-container selection:text-midnight-black">
        {/* Top Header & Controls Section */}
        <section className="w-full bg-warm-ivory relative overflow-hidden pt-space-xl pb-space-lg">
          <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#BA8733_0.75px,transparent_0.75px)] [background-size:24px_24px]" />
          <div className="max-w-[1600px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop relative z-10">
            {/* Top Meta Badge */}
            <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-md">
              <div className="inline-flex items-center gap-space-xs bg-surface-container-lowest/10 px-space-md py-1 rounded-full shadow-sm">
                <span className="w-2 h-2 rounded-full bg-gold-dark animate-pulse" />
                <span className="font-label-sm text-label-sm tracking-[0.25em] uppercase text-gold-dark">
                  {t('fp_badge', 'ARCHITECTURAL BLUEPRINTS & SPATIAL DESIGN')}
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-space-md font-label-sm text-label-sm tracking-[0.2em] text-muted-slate uppercase">
                <span>COORDINATES: 30°50'N 28°57'E</span>
                <span>•</span>
                <span>{activeTypology.floorRange.toUpperCase()}</span>
              </div>
            </div>

            {/* Editorial Title & Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md lg:gap-gutter-desktop items-end mb-space-lg">
              <div className="lg:col-span-8">
                <h1 className="font-display-lg text-display-lg text-midnight-black tracking-tight leading-[1.08] mb-space-sm">
                  {t('fp_title_l1', 'Smart Layouts,')}{' '}
                  <span className="italic font-normal text-gold-dark">
                    {t('fp_title_l2', 'Exceptional Views.')}
                  </span>
                </h1>
                <p className="font-body-xl text-body-xl text-surface-container-highest max-w-3xl leading-relaxed">
                  {t(
                    'fp_desc',
                    'Meticulously engineered residence layouts maximizing panoramic Mediterranean sea vistas, dual-aspect natural lighting, and seamless indoor-outdoor coastal living.'
                  )}
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col lg:items-end justify-end">
                <div className="bg-surface-container-lowest/5 p-space-md rounded-xl backdrop-blur-sm w-full lg:max-w-xs shadow-sm">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-muted-slate block mb-1">
                    {isRTL ? 'زاوية الارتفاع' : 'Elevation Perspective'}
                  </span>
                  <div className="flex items-baseline justify-between">
                    <span className="font-headline-sm text-headline-sm text-midnight-black">
                      {isRTL ? 'البرج ألفا' : 'Tower Alpha'}
                    </span>
                    <span className="font-label-md text-label-md uppercase text-gold-dark">
                      {isRTL ? 'إطلالة بحرية عليا' : 'High-Floor Orientation'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Residence Selector Bar */}
            <TypologyTabs
              typologies={allTypologies}
              activeId={activeId}
              onSelectTypology={setActiveId}
            />
          </div>
        </section>

        {/* Central Architectural Workspace (3-Column Interactive Canvas) */}
        <section className="w-full bg-[#ECE7DC] py-space-lg relative">
          <div className="max-w-[1600px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
              {/* Left Column: Design Philosophy & Detailed Metrics */}
              <div className="lg:col-span-3 flex flex-col gap-space-md order-2 lg:order-1">
                <SpatialCadastre typology={activeTypology} />
              </div>

              {/* Center Column: Hero Interactive 3D/2D Floor Plan Canvas */}
              <div className="lg:col-span-6 flex flex-col gap-space-sm order-1 lg:order-2">
                <InteractiveViewer
                  typology={activeTypology}
                  viewMode={viewMode}
                  onToggleViewMode={setViewMode}
                  zoomLevel={zoomLevel}
                  onZoomIn={handleZoomIn}
                  onZoomOut={handleZoomOut}
                  onResetZoom={handleResetZoom}
                />
              </div>

              {/* Right Column: Dimensions Table, Finishes & High-Intent Conversion */}
              <div className="lg:col-span-3 flex flex-col gap-space-md order-3">
                <RoomDimensionsList dimensions={activeTypology.roomDimensions} />
                <MaterialPaletteCard
                  materials={activeTypology.materials}
                  prevTypologyName={prevTypology.name.replace('The ', '')}
                  nextTypologyName={nextTypology.name.replace('The ', '')}
                  onPrev={() => setActiveId(prevTypology.id)}
                  onNext={() => setActiveId(nextTypology.id)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Section: Room-by-Room Interior Previews Strip */}
        <InteriorPreviews previews={activeTypology.roomPreviews} />
      </div>
    </main>
  );
};
