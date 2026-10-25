import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getComparisonSpecs } from '../../data/mockData';
import { ComparisonSpecRow } from '../../types';

export interface ComparisonMatrixProps {
  readonly specs?: readonly ComparisonSpecRow[];
  readonly title?: string;
  readonly subtitle?: string;
  readonly description?: string;
}

export const ComparisonMatrix: React.FC<Readonly<ComparisonMatrixProps>> = ({
  specs,
  title,
  subtitle,
  description,
}) => {
  const { language, isRTL, t } = useLanguage();
  const activeSpecs = specs || getComparisonSpecs(language);

  const displayTitle = title || t('res_matrix_title', 'Architectural Comparison Matrix');
  const displaySubtitle = subtitle || t('res_matrix_subtitle', 'Technical Index');
  const displayDesc =
    description ||
    t(
      'res_matrix_desc',
      'Standardized specifications across all residential tiers. Every unit maintains unobstructed views of the Mediterranean coastline.'
    );

  return (
    <section className="w-full py-space-xl bg-surface-container-lowest">
      <div className="max-w-[1600px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
          <div>
            <span className="font-label-md text-label-md text-primary tracking-[0.25em] uppercase block mb-space-xs">
              {displaySubtitle}
            </span>
            <h2 className="font-headline-lg text-headline-lg text-warm-ivory">{displayTitle}</h2>
          </div>
          <p className="font-body-md text-body-md text-sand-beige/80 max-w-md">{displayDesc}</p>
        </div>

        <div className="overflow-x-auto shadow-xl bg-surface-container">
          <table className={`w-full ${isRTL ? 'text-right' : 'text-left'} border-collapse`}>
            <thead>
              <tr className="bg-surface-container-highest text-on-surface">
                <th className="py-space-md px-space-md font-label-md text-label-md uppercase tracking-wider text-primary">
                  {isRTL ? 'المواصفة المعمارية' : 'Specification'}
                </th>
                <th className="py-space-md px-space-md font-label-md text-label-md uppercase tracking-wider">
                  {isRTL ? 'غرفة نوم كوستال' : '1 Bedroom Coastal'}
                </th>
                <th className="py-space-md px-space-md font-label-md text-label-md uppercase tracking-wider text-primary">
                  {isRTL ? 'غرفتان سيجنتشر' : '2 Bedroom Signature'}
                </th>
                <th className="py-space-md px-space-md font-label-md text-label-md uppercase tracking-wider">
                  {isRTL ? '3 غرف هورايزون' : '3 Bedroom Horizon'}
                </th>
                <th className="py-space-md px-space-md font-label-md text-label-md uppercase tracking-wider text-primary">
                  {isRTL ? 'رويال سكاي بنتهاوس' : 'Royal Sky Penthouse'}
                </th>
              </tr>
            </thead>
            <tbody className="font-body-sm text-body-sm text-sand-beige/90">
              {activeSpecs.map((row, idx) => (
                <tr
                  key={row.specification}
                  className={`${
                    idx % 2 === 0 ? 'bg-surface-container-low/60' : 'bg-surface-container'
                  } hover:bg-surface-container-high transition-colors`}
                >
                  <td className="py-space-md px-space-md font-label-md text-label-md text-warm-ivory uppercase font-semibold">
                    {row.specification}
                  </td>
                  <td className="py-space-md px-space-md">{row.oneBed}</td>
                  <td className="py-space-md px-space-md text-warm-ivory font-semibold">{row.twoBed}</td>
                  <td className="py-space-md px-space-md">{row.threeBed}</td>
                  <td className="py-space-md px-space-md text-primary font-semibold">{row.penthouse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
