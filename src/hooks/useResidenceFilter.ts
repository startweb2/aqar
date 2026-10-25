import { useState, useMemo } from 'react';
import { getResidenceUnits } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';
import { ResidenceUnit } from '../types';

export function useResidenceFilter() {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [priceOnApplicationOnly, setPriceOnApplicationOnly] = useState<boolean>(true);

  const units = useMemo(() => getResidenceUnits(language), [language]);

  const filteredResidences: readonly ResidenceUnit[] = useMemo(() => {
    if (activeFilter === 'all') {
      return units;
    }
    return units.filter((unit) => unit.id === activeFilter);
  }, [units, activeFilter]);

  const filterCounts = useMemo(() => {
    return {
      all: units.length,
      '1bed': units.filter((u) => u.id === '1bed').length,
      '2bed': units.filter((u) => u.id === '2bed').length,
      '3bed': units.filter((u) => u.id === '3bed').length,
      penthouse: units.filter((u) => u.id === 'penthouse').length,
    };
  }, [units]);

  return {
    activeFilter,
    setActiveFilter,
    priceOnApplicationOnly,
    setPriceOnApplicationOnly,
    filteredResidences,
    filterCounts,
  };
}
