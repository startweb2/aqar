import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useResidenceFilter } from '../hooks/useResidenceFilter';
import { ResidencesFilter } from '../components/residences/ResidencesFilter';
import { ResidenceCard } from '../components/residences/ResidenceCard';
import { ComparisonMatrix } from '../components/residences/ComparisonMatrix';
import { AdvisorInquiryForm } from '../components/residences/AdvisorInquiryForm';

export interface ResidencesPageProps {
  readonly title?: string;
}

export const ResidencesPage: React.FC<Readonly<ResidencesPageProps>> = () => {
  const { t } = useLanguage();
  const {
    activeFilter,
    setActiveFilter,
    priceOnApplicationOnly,
    setPriceOnApplicationOnly,
    filteredResidences,
    filterCounts,
  } = useResidenceFilter();

  return (
    <main className="w-full pt-20 bg-background">
      {/* Editorial Page Header */}
      <section className="w-full py-space-xl bg-midnight-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(223,183,110,0.1)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-[1600px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop relative z-10">
          <div className="flex flex-col gap-space-sm max-w-4xl">
            <div className="inline-flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase tracking-[0.25em]">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>{t('res_badge', 'Architectural Living Catalog')}</span>
            </div>
            <h1 className="font-display-lg text-display-lg text-warm-ivory tracking-tight">
              {t('res_title', 'The Residences Collection')}
            </h1>
            <p className="font-body-xl text-body-xl text-sand-beige/85 font-light leading-relaxed">
              {t(
                'res_desc',
                'Four distinct typologies curated for discerning architectural enthusiasts, offering boundless panoramas across the crystal azure Mediterranean Sea.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <ResidencesFilter
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        filterCounts={filterCounts}
        priceOnApplicationOnly={priceOnApplicationOnly}
        onPriceToggle={setPriceOnApplicationOnly}
      />

      {/* Residences Catalog List */}
      <section className="w-full py-space-xl bg-background">
        <div className="max-w-[1600px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop flex flex-col gap-space-xl">
          {filteredResidences.length === 0 ? (
            <div className="text-center py-space-xl bg-surface-container-low p-space-lg">
              <p className="font-headline-sm text-warm-ivory mb-2">No residences match this criteria.</p>
              <button
                onClick={() => setActiveFilter('all')}
                className="text-primary uppercase font-label-md tracking-wider underline cursor-pointer"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            filteredResidences.map((unit, index) => (
              <ResidenceCard
                key={unit.id}
                unit={unit}
                isReversed={index % 2 !== 0}
              />
            ))
          )}
        </div>
      </section>

      {/* Architectural Comparison Matrix */}
      <ComparisonMatrix
        title={t('res_matrix_title', 'Architectural Comparison Matrix')}
        subtitle={t('res_matrix_subtitle', 'Technical Index')}
        description={t(
          'res_matrix_desc',
          'Standardized specifications across all residential tiers. Every unit maintains unobstructed views of the Mediterranean coastline.'
        )}
      />

      {/* Private Viewing Invitation Form */}
      <AdvisorInquiryForm />
    </main>
  );
};
