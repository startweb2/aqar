import React from 'react';
import { FloorPlanTypology } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

export interface SpatialCadastreProps {
  readonly typology: FloorPlanTypology;
}

export const SpatialCadastre: React.FC<Readonly<SpatialCadastreProps>> = ({ typology }) => {
  const { language } = useLanguage();
  const { cadastre, features } = typology;

  return (
    <div className="flex flex-col gap-space-md">
      {/* Unit Overview Box */}
      <div className="bg-warm-ivory p-space-md rounded-2xl shadow-sm flex flex-col">
        <div className="flex items-center justify-between mb-space-xs">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-gold-dark font-bold">
            {language === 'ar' ? 'نوع الوحدة المعمارية' : 'Unit Typology'}
          </span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-muted-slate">
            {typology.series}
          </span>
        </div>
        <h2 className="font-headline-md text-headline-md text-midnight-black mb-space-sm">
          {typology.name}
        </h2>
        <p className="font-body-md text-body-md text-surface-container-highest leading-relaxed mb-space-md">
          {typology.description}
        </p>

        {/* Key Architectural Highlights */}
        <div className="flex flex-col gap-space-sm pt-space-xs">
          {features.map((feature, idx) => {
            const icons = ['panorama_photosphere', 'deck', 'bathtub', 'countertops'];
            const iconName = icons[idx % icons.length];
            return (
              <div key={feature.title} className="flex items-start gap-space-sm">
                <span className="material-symbols-outlined text-gold-dark mt-0.5 text-[20px]">
                  {iconName}
                </span>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold text-midnight-black">
                    {feature.title}
                  </span>
                  <span className="font-body-sm text-body-sm text-muted-slate">{feature.desc}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Spatial Metrics Matrix */}
      <div className="bg-midnight-black text-warm-ivory p-space-md rounded-2xl shadow-xl">
        <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-primary block mb-space-sm">
          {language === 'ar' ? 'المخطط المساحي الهندسي' : 'Spatial Cadastre'}
        </span>
        <div className="flex flex-col gap-space-xs">
          <div className="flex justify-between items-baseline py-1.5 border-b border-surface-container-highest/60">
            <span className="font-body-sm text-body-sm text-sand-beige/70">
              {language === 'ar' ? 'إجمالي المساحة المبنية' : 'Total Built Area'}
            </span>
            <span className="font-headline-sm text-headline-sm text-primary font-bold">
              {cadastre.builtAreaM2} {language === 'ar' ? 'م²' : 'm²'}{' '}
              <span className="font-body-sm text-body-sm font-normal text-muted-slate">
                / {cadastre.builtAreaSqFt.toLocaleString()} {language === 'ar' ? 'قدم²' : 'sq.ft'}
              </span>
            </span>
          </div>
          <div className="flex justify-between items-baseline py-1.5 border-b border-surface-container-highest/60">
            <span className="font-body-sm text-body-sm text-sand-beige/70">
              {language === 'ar' ? 'المساحة الداخلية' : 'Internal Living'}
            </span>
            <span className="font-label-md text-label-md text-warm-ivory">
              {cadastre.internalLivingM2} {language === 'ar' ? 'م²' : 'm²'} ({cadastre.internalPct}%)
            </span>
          </div>
          <div className="flex justify-between items-baseline py-1.5 border-b border-surface-container-highest/60">
            <span className="font-body-sm text-body-sm text-sand-beige/70">
              {language === 'ar' ? 'التراسات والشرفات' : 'Outdoor Terraces'}
            </span>
            <span className="font-label-md text-label-md text-warm-ivory">
              {cadastre.terraceM2} {language === 'ar' ? 'م²' : 'm²'} ({cadastre.terracePct}%)
            </span>
          </div>
          <div className="flex justify-between items-baseline py-1.5 border-b border-surface-container-highest/60">
            <span className="font-body-sm text-body-sm text-sand-beige/70">
              {language === 'ar' ? 'ارتفاع الأسقف' : 'Ceiling Height'}
            </span>
            <span className="font-label-md text-label-md text-primary">
              {cadastre.ceilingHeight}
            </span>
          </div>
          <div className="flex justify-between items-baseline py-1.5">
            <span className="font-body-sm text-body-sm text-sand-beige/70">
              {language === 'ar' ? 'اتجاه الإطلالة' : 'Exposure'}
            </span>
            <span className="font-label-md text-label-md text-warm-ivory">{cadastre.exposure}</span>
          </div>
        </div>
        <div className="mt-space-md p-space-xs bg-surface-container-low rounded-xl flex items-center justify-between">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-sand-beige/60">
            {language === 'ar' ? 'مواقف السيارات' : 'Parking allocation'}
          </span>
          <span className="font-label-sm text-label-sm uppercase text-primary font-bold">
            {language === 'ar'
              ? `${cadastre.parkingBays} مواقف مخصصة مؤمنة`
              : `${cadastre.parkingBays} Reserved ${cadastre.parkingBays > 1 ? 'Bays' : 'Bay'}`}
          </span>
        </div>
      </div>
    </div>
  );
};
