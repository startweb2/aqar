import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export interface ResidencesFilterProps {
  readonly activeFilter: string;
  readonly onFilterChange: (filter: string) => void;
  readonly filterCounts: Record<string, number>;
  readonly priceOnApplicationOnly: boolean;
  readonly onPriceToggle: (val: boolean) => void;
}

export const ResidencesFilter: React.FC<Readonly<ResidencesFilterProps>> = ({
  activeFilter,
  onFilterChange,
  filterCounts,
  priceOnApplicationOnly,
  onPriceToggle,
}) => {
  const { t, isRTL } = useLanguage();

  const filterOptions = [
    { id: 'all', label: t('res_filter_all', 'All Residences'), count: filterCounts.all },
    { id: '1bed', label: t('res_filter_1bed', '1 Bedroom'), count: filterCounts['1bed'] },
    { id: '2bed', label: t('res_filter_2bed', '2 Bedrooms'), count: filterCounts['2bed'] },
    { id: '3bed', label: t('res_filter_3bed', '3 Bedrooms'), count: filterCounts['3bed'] },
    { id: 'penthouse', label: t('res_filter_penthouse', 'Sky Penthouses'), count: filterCounts.penthouse },
  ];

  return (
    <div className="w-full bg-surface-container py-space-sm border-y border-outline-variant/30 sticky top-20 z-40 backdrop-blur-md bg-opacity-95 shadow-md">
      <div className="max-w-[1600px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop flex flex-col xl:flex-row xl:items-center justify-between gap-space-sm">
        {/* Typology Filter Buttons */}
        <div className="flex items-center flex-wrap gap-2">
          {filterOptions.map((opt) => {
            const isSelected = activeFilter === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => onFilterChange(opt.id)}
                className={`px-space-md py-space-xs font-label-md text-label-md uppercase tracking-wider transition-all select-none cursor-pointer ${
                  isSelected
                    ? 'bg-primary text-midnight-black font-semibold shadow-sm'
                    : 'bg-surface-container-highest text-on-surface hover:text-primary'
                }`}
                type="button"
              >
                {opt.label}{' '}
                <span className="ml-1 opacity-60 font-normal">({opt.count})</span>
              </button>
            );
          })}
        </div>

        {/* Utility Toggles */}
        <div className="flex items-center justify-between sm:justify-end gap-space-md pt-space-xs xl:pt-0">
          <label className="flex items-center gap-space-sm cursor-pointer select-none">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-sand-beige/70">
              {t('res_poa', 'Price on Application Only')}
            </span>
            <input
              type="checkbox"
              checked={priceOnApplicationOnly}
              onChange={(e) => onPriceToggle(e.target.checked)}
              className="w-4 h-4 rounded-none accent-primary cursor-pointer"
            />
          </label>
        </div>
      </div>
    </div>
  );
};
