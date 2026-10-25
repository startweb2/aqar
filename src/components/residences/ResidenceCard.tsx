import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { ResidenceUnit } from '../../types';

export interface ResidenceCardProps {
  readonly unit: ResidenceUnit;
  readonly isReversed?: boolean;
}

export const ResidenceCard: React.FC<Readonly<ResidenceCardProps>> = ({
  unit,
  isReversed = false,
}) => {
  const { isRTL } = useLanguage();

  return (
    <article className="relative grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
      {/* Visual Presentation */}
      <div
        className={`lg:col-span-7 relative group ${
          isReversed ? 'order-1 lg:order-2' : 'order-1'
        }`}
      >
        <div className="relative overflow-hidden bg-surface-container-lowest shadow-2xl border border-primary-container/20">
          <div
            className="w-full h-[520px] lg:h-[620px] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('${unit.imageUrl}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/85 via-transparent to-transparent pointer-events-none" />

          {/* Floor Tag */}
          <div
            className={`absolute top-space-md ${
              isRTL ? 'right-space-md' : 'left-space-md'
            } bg-surface-container-lowest/85 backdrop-blur-md px-space-md py-space-xs border border-primary/20`}
          >
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.25em] font-bold">
              {unit.floorLevels}
            </span>
          </div>

          {/* Special Badge if any */}
          {unit.featuredBadge && (
            <div
              className={`absolute top-space-md ${
                isRTL ? 'left-space-md' : 'right-space-md'
              } bg-primary text-midnight-black font-label-sm text-label-sm uppercase tracking-[0.25em] px-space-md py-space-xs font-semibold shadow-lg`}
            >
              {unit.featuredBadge}
            </div>
          )}

          {/* Dimensions Ribbon Overlay */}
          <div className="absolute bottom-0 inset-x-0 bg-secondary-container/90 backdrop-blur-xl p-space-md flex flex-wrap items-center justify-between gap-space-sm text-on-surface border-t border-outline-variant/30">
            <div className="flex items-center gap-space-lg">
              <div>
                <span className="block font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                  {isRTL ? 'المساحة' : 'Footprint'}
                </span>
                <span className="font-headline-sm text-headline-sm text-warm-ivory">
                  {unit.footprint}
                </span>
                <span className="font-label-sm text-label-sm text-sand-beige/70 block">
                  {unit.footprintSqFt}
                </span>
              </div>
              <div className="w-px h-8 bg-outline-variant/30" />
              <div>
                <span className="block font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                  {isRTL ? 'المخطط' : 'Layout'}
                </span>
                <span className="font-headline-sm text-headline-sm text-warm-ivory">
                  {unit.layout.split('•')[0]}
                </span>
                <span className="font-label-sm text-label-sm text-sand-beige/70 block">
                  {unit.layout.split('•')[1] || (isRTL ? 'جناح ماستر' : 'Ensuite')}
                </span>
              </div>
              <div className="w-px h-8 bg-outline-variant/30" />
              <div>
                <span className="block font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                  {isRTL ? 'الواجهة' : 'Exposure'}
                </span>
                <span className="font-headline-sm text-headline-sm text-warm-ivory">
                  {unit.exposure.split(' ')[0]}
                </span>
                <span className="font-label-sm text-label-sm text-sand-beige/70 block">
                  {unit.exposure.split(' ').slice(1).join(' ')}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-primary uppercase tracking-widest font-bold">
              <span className="material-symbols-outlined text-[18px]">balcony</span>
              <span>{unit.terrace}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial Text Spread */}
      <div
        className={`lg:col-span-5 flex flex-col gap-space-md ${
          isReversed
            ? isRTL
              ? 'order-2 lg:order-1 lg:pl-space-md'
              : 'order-2 lg:order-1 lg:pr-space-md'
            : isRTL
            ? 'order-2 lg:pr-space-md'
            : 'order-2 lg:pl-space-md'
        }`}
      >
        <div className="flex items-center gap-space-sm">
          <span className="font-label-sm text-label-sm tracking-[0.25em] uppercase text-primary font-bold">
            {unit.tagline.split('•')[0]}
          </span>
          <span className="w-8 h-px bg-primary/30" />
          <span className="font-label-sm text-label-sm tracking-widest uppercase text-muted-slate">
            {unit.tagline.split('•')[1] || (isRTL ? 'عرض حصري' : 'Showcase')}
          </span>
        </div>

        <h2 className="font-headline-lg text-headline-lg text-warm-ivory leading-tight">
          {unit.title} <br />
          <span className="italic text-primary font-normal">{unit.typology}</span>
        </h2>

        <p className="font-body-md text-body-md text-sand-beige/85 leading-relaxed font-light">
          {unit.description}
        </p>

        {/* Specifications Matrix */}
        <div className="grid grid-cols-2 gap-space-md py-space-sm bg-surface-container-high/40 p-space-md border border-outline-variant/30">
          <div>
            <span className="block font-label-sm text-label-sm text-muted-slate uppercase tracking-wider font-bold">
              {isRTL ? 'ارتفاع الأسقف' : 'Ceiling Height'}
            </span>
            <span className="font-headline-sm text-headline-sm text-warm-ivory">
              {unit.ceilingHeight}
            </span>
          </div>
          <div>
            <span className="block font-label-sm text-label-sm text-muted-slate uppercase tracking-wider font-bold">
              {isRTL ? 'المصعد الخاص' : 'Private Elevator'}
            </span>
            <span className="font-headline-sm text-headline-sm text-warm-ivory">
              {unit.privateElevator}
            </span>
          </div>
          <div>
            <span className="block font-label-sm text-label-sm text-muted-slate uppercase tracking-wider font-bold">
              {isRTL ? 'تجهيزات المطبخ' : 'Kitchen Fitout'}
            </span>
            <span className="font-headline-sm text-headline-sm text-warm-ivory">
              {unit.kitchenFitout}
            </span>
          </div>
          <div>
            <span className="block font-label-sm text-label-sm text-muted-slate uppercase tracking-wider font-bold">
              {isRTL ? 'القيمة الابتدائية' : 'Starting Value'}
            </span>
            <span className="font-headline-sm text-headline-sm text-primary font-bold">
              {unit.startingPrice || (isRTL ? 'الأسعار عند الطلب' : 'Price on Application')}
            </span>
          </div>
        </div>

        {/* Interaction Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm pt-space-xs">
          <Link
            to={unit.floorPlanHref}
            className="flex-1 py-space-sm font-label-md text-label-md uppercase tracking-wider text-midnight-black text-center font-bold bg-[linear-gradient(135deg,#FAECCD_0%,#DFB76E_50%,#BA8733_100%)] shadow-md hover:brightness-110 transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">architecture</span>
            <span>{isRTL ? 'استكشف المخطط التفاعلي' : 'Interactive Floor Plan'}</span>
          </Link>
          <Link
            to="/contact"
            className="px-space-md py-space-sm font-label-md text-label-md uppercase tracking-wider text-warm-ivory text-center font-semibold border border-primary/40 hover:border-primary hover:bg-primary/10 transition-all"
          >
            {isRTL ? 'حجز موعد للمعاينة' : 'Register Interest'}
          </Link>
        </div>
      </div>
    </article>
  );
};
