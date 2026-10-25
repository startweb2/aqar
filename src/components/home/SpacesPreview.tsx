import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getResidenceUnits } from '../../data/mockData';
import { ResidenceUnit } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

export interface SpacesPreviewProps {
  readonly id?: string;
}

export const SpacesPreview: React.FC<SpacesPreviewProps> = ({ id = 'signature-collection' }) => {
  const { language } = useLanguage();
  const [selectedUnitId, setSelectedUnitId] = useState<string>('1bed');

  const units = getResidenceUnits(language);
  const selectedUnit: ResidenceUnit =
    units.find((u) => u.id === selectedUnitId) || units[0];

  return (
    <section className="w-full py-28 md:py-36 bg-surface" id={id}>
      <div className="max-w-[1600px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-label-md text-label-md text-primary tracking-widest uppercase">
                04 / 09
              </span>
              <span className="w-8 h-px bg-primary/40" />
              <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-primary">
                {language === 'ar' ? 'مساحات معيشية متفردة' : 'CURATED LIVING SPACES'}
              </span>
            </div>
            <h2 className="font-display-lg text-display-lg text-warm-ivory">
              {language === 'ar' ? 'مساحات مصممة خصيصاً لتلائم أسلوبك.' : 'Spaces Designed Around You.'}
            </h2>
          </div>
          <p className="font-body-md text-body-md text-sand-beige/80 max-w-sm font-light">
            {language === 'ar'
              ? 'من شقق عصرية أنيقة بغرفة نوم واحدة إلى بنتهاوس ملكي فاخر بارتفاع مضاعف على البحر مباشرة.'
              : 'From light-flooded one-bedroom pied-à-terres to dramatic double-height ocean penthouses.'}
          </p>
        </div>

        {/* Unit Selector Tabs */}
        <div className="flex items-center flex-wrap gap-2 pb-10">
          {units.map((unit) => {
            const isSelected = unit.id === selectedUnitId;
            return (
              <button
                key={unit.id}
                onClick={() => setSelectedUnitId(unit.id)}
                className={`px-6 py-3.5 font-label-md text-label-md uppercase tracking-wider transition-all select-none cursor-pointer border ${
                  isSelected
                    ? 'bg-primary text-midnight-black font-bold shadow-md border-primary'
                    : 'bg-surface-container hover:bg-surface-container-high text-sand-beige border-outline-variant/30'
                }`}
                type="button"
              >
                {unit.title} {language === 'ar' ? '' : 'Residence'}
              </button>
            );
          })}
        </div>

        {/* Active Residence Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Render Canvas */}
          <div className="lg:col-span-8 bg-surface-container overflow-hidden relative min-h-[460px] md:min-h-[580px] shadow-2xl border border-primary-container/20">
            <div
              className="w-full h-full bg-cover bg-center transition-all duration-700 hover:scale-105"
              style={{ backgroundImage: `url('${selectedUnit.imageUrl}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute top-6 left-6 px-4 py-2 bg-midnight-black/85 backdrop-blur-md border border-primary/20">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
                {selectedUnit.tagline}
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-warm-ivory">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-sand-beige/70 block">
                  {language === 'ar' ? 'نطاق الطوابق' : 'FLOOR RANGE'}
                </span>
                <span className="font-headline-sm text-headline-sm text-warm-ivory">
                  {selectedUnit.floorLevels}
                </span>
              </div>
              <div className="text-right">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-sand-beige/70 block">
                  {language === 'ar' ? 'التعرض للشمس والإطلالة' : 'SUNLIGHT EXPOSURE'}
                </span>
                <span className="font-headline-sm text-headline-sm text-warm-ivory">
                  {selectedUnit.exposure}
                </span>
              </div>
            </div>
          </div>

          {/* Architectural Specifications Card */}
          <div className="lg:col-span-4 bg-surface-container p-8 md:p-10 flex flex-col justify-between shadow-2xl border border-outline-variant/30">
            <div>
              <div className="flex items-center justify-between pb-6 mb-6 bg-surface-container-high/60 p-4 border border-primary/20">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
                    {language === 'ar' ? 'المخطط والتكوين' : 'CONFIGURATION'}
                  </span>
                  <h3 className="font-headline-md text-headline-md text-warm-ivory mt-1">
                    {selectedUnit.title} {selectedUnit.typology}
                  </h3>
                </div>
                <span className="material-symbols-outlined text-primary text-[28px]">apartment</span>
              </div>

              {/* Spec Rows */}
              <div className="space-y-4 font-body-md text-body-md">
                <div className="flex items-center justify-between py-2 border-b border-surface-container-highest">
                  <span className="text-sand-beige/70">
                    {language === 'ar' ? 'إجمالي المساحة' : 'Total Footprint'}
                  </span>
                  <span className="font-semibold text-warm-ivory">
                    {selectedUnit.footprint} ({selectedUnit.footprintSqFt})
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-surface-container-highest">
                  <span className="text-sand-beige/70">
                    {language === 'ar' ? 'مساحة التراس' : 'Terrace Amenity'}
                  </span>
                  <span className="font-semibold text-warm-ivory">{selectedUnit.terrace}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-surface-container-highest">
                  <span className="text-sand-beige/70">
                    {language === 'ar' ? 'المخطط الداخلي' : 'Layout'}
                  </span>
                  <span className="font-semibold text-warm-ivory">{selectedUnit.layout}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-surface-container-highest">
                  <span className="text-sand-beige/70">
                    {language === 'ar' ? 'ارتفاع الأسقف' : 'Ceiling Height'}
                  </span>
                  <span className="font-semibold text-warm-ivory">{selectedUnit.ceilingHeight}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-surface-container-highest">
                  <span className="text-sand-beige/70">
                    {language === 'ar' ? 'المصعد الخاص' : 'Private Elevator'}
                  </span>
                  <span className="font-semibold text-warm-ivory">{selectedUnit.privateElevator}</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sand-beige/70">
                    {language === 'ar' ? 'تجهيزات المطبخ' : 'Kitchen Fitout'}
                  </span>
                  <span className="font-semibold text-warm-ivory">{selectedUnit.kitchenFitout}</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Link
                to="/residences"
                className="w-full inline-flex items-center justify-center font-label-lg text-label-lg uppercase tracking-wider text-midnight-black py-4 shadow-md hover:brightness-105 transition-all bg-[linear-gradient(135deg,#FAECCD_0%,#DFB76E_50%,#BA8733_100%)] font-bold text-center"
              >
                {language === 'ar' ? 'استكشف كافة المساكن' : 'Discover All Residences'}
              </Link>
              <p className="font-label-sm text-label-sm text-center text-muted-slate uppercase tracking-wider mt-3">
                {language === 'ar'
                  ? 'الملف المعماري الشامل والمخططات الهندسية متاحة فور الطلب'
                  : 'Comprehensive dossier & architectural drawings available upon request'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
