import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export interface InteriorPreviewItem {
  readonly roomNumber: string;
  readonly title: string;
  readonly subtitle: string;
  readonly areaM2: number;
  readonly imageUrl: string;
}

export interface InteriorPreviewsProps {
  readonly previews: readonly InteriorPreviewItem[];
  readonly title?: string;
  readonly eyebrow?: string;
  readonly description?: string;
}

export const InteriorPreviews: React.FC<Readonly<InteriorPreviewsProps>> = ({
  previews,
  title,
  eyebrow,
  description,
}) => {
  const { language } = useLanguage();

  const displayTitle =
    title || (language === 'ar' ? 'معاينة الغرف والتصميم الداخلي' : 'Room-by-Room Interior Previews');
  const displayEyebrow =
    eyebrow || (language === 'ar' ? 'آفاق ورؤى تفصيلية' : 'IMMERSIVE PERSPECTIVES');
  const displayDesc =
    description ||
    (language === 'ar'
      ? 'استكشف تشطيبات الغرف وتوزيع الإضاءة للوحدات السكنية المواجهة لساحل العلمين الجديدة.'
      : 'Explore rendered interior finishes representing curated residential configurations facing the New Alamein coast.');

  return (
    <section className="w-full bg-warm-ivory py-space-xl border-t border-sand-beige/60">
      <div className="max-w-[1600px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm mb-space-lg">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-gold-dark font-bold block mb-1">
              {displayEyebrow}
            </span>
            <h3 className="font-headline-lg text-headline-lg text-midnight-black">{displayTitle}</h3>
          </div>
          <p className="font-body-md text-body-md text-surface-container-highest max-w-md">
            {displayDesc}
          </p>
        </div>

        {/* 4-Card Horizontal Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {previews.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-2xl overflow-hidden bg-sand-beige shadow-md flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={item.imageUrl}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-midnight-black/70 backdrop-blur-sm text-primary font-label-sm text-[10px] tracking-wider uppercase px-2 py-1 rounded">
                  {item.roomNumber}
                </span>
              </div>
              <div className="p-space-sm bg-warm-ivory flex flex-col justify-between flex-1">
                <div>
                  <h4 className="font-label-lg text-label-lg text-midnight-black font-bold">
                    {item.title}
                  </h4>
                  <p className="font-body-sm text-[12px] text-muted-slate mt-0.5">{item.subtitle}</p>
                </div>
                <span className="font-label-sm text-[11px] text-gold-dark font-semibold mt-space-xs block">
                  {item.areaM2} {language === 'ar' ? 'م² المساحة' : 'm² Area'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Legal & Conceptual Architectural Disclaimer Note */}
        <div className="mt-space-lg pt-space-md border-t border-sand-beige/70 flex flex-col sm:flex-row items-center justify-between gap-space-sm text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px] text-muted-slate">verified</span>
            <p className="font-label-sm text-[11px] text-muted-slate tracking-wide">
              {language === 'ar'
                ? 'جميع الأبعاد، والمخططات، والتوزيعات المكانية توضيحية ومعدة لأغراض العرض والتصميم المعماري للمشروع.'
                : 'All dimensions, room layouts, and spatial arrangements are conceptual and illustrative for portfolio design presentation.'}
            </p>
          </div>
          <div className="font-label-sm text-[11px] uppercase tracking-widest text-gold-dark font-semibold">
            REF: ALM-TW-PLN-2025-V4
          </div>
        </div>
      </div>
    </section>
  );
};
