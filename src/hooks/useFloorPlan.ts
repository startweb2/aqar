import { useState, useMemo } from 'react';
import { getFloorPlanTypologies } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';
import { FloorPlanTypology } from '../types';

export function useFloorPlan() {
  const { language } = useLanguage();
  const [activeId, setActiveId] = useState<string>('2bed');
  const [viewMode, setViewMode] = useState<'3D' | '2D'>('3D');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [activePin, setActivePin] = useState<string | null>(null);

  const allTypologies = useMemo(() => getFloorPlanTypologies(language), [language]);

  const activeTypology: FloorPlanTypology = useMemo(() => {
    return allTypologies.find((t) => t.id === activeId) || allTypologies[1];
  }, [allTypologies, activeId]);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.15, 1.6));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.15, 0.85));
  const handleResetZoom = () => setZoomLevel(1);

  return {
    activeId,
    setActiveId,
    viewMode,
    setViewMode,
    zoomLevel,
    handleZoomIn,
    handleZoomOut,
    handleResetZoom,
    activePin,
    setActivePin,
    activeTypology,
    allTypologies,
  };
}
