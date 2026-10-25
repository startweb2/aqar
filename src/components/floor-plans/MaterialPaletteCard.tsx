import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export interface MaterialPaletteCardProps {
  readonly materials: readonly { readonly category: string; readonly material: string }[];
  readonly prevTypologyName?: string;
  readonly nextTypologyName?: string;
  readonly onPrev?: () => void;
  readonly onNext?: () => void;
  readonly onDownloadPdf?: () => void;
}

export const MaterialPaletteCard: React.FC<Readonly<MaterialPaletteCardProps>> = ({
  materials,
  prevTypologyName,
  nextTypologyName,
  onPrev,
  onNext,
  onDownloadPdf,
}) => {
  const { language, isRtl } = useLanguage();

  const prevName = prevTypologyName || (language === 'ar' ? 'غرفة نوم واحدة' : '1 Bed');
  const nextName = nextTypologyName || (language === 'ar' ? '3 غرف نوم' : '3 Bed');

  return (
    <div className="flex flex-col gap-space-md">
      {/* Architectural Specifications & Finishes */}
      <div className="bg-warm-ivory p-space-md rounded-2xl shadow-sm flex flex-col">
        <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] font-bold text-midnight-black mb-space-sm block">
          {language === 'ar' ? 'لوحة الخامات والتشطيبات الفاخرة' : 'Curated Material Palette'}
        </span>
        <div className="grid grid-cols-2 gap-space-xs mb-space-xs">
          {materials.map((item) => (
            <div key={item.category} className="bg-[#F0ECE1] p-2.5 rounded-xl flex flex-col">
              <span className="font-label-sm text-[10px] uppercase text-muted-slate font-bold">
                {item.category}
              </span>
              <span className="font-label-sm text-[12px] text-midnight-black font-semibold mt-0.5">
                {item.material}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* High Value Conversion Actions */}
      <div className="flex flex-col gap-space-xs">
        <Link
          to="/contact"
          className="w-full text-center py-space-sm px-space-md rounded-xl font-label-md text-label-md uppercase tracking-wider text-midnight-black font-bold shadow-lg bg-[linear-gradient(135deg,#FAECCD_0%,#DFB76E_50%,#BA8733_100%)] hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">calendar_month</span>
          <span>{language === 'ar' ? 'حجز معاينة لهذا المخطط' : 'Book Tour for this Layout'}</span>
        </Link>
        <button
          onClick={
            onDownloadPdf ||
            (() => {
              alert(
                language === 'ar'
                  ? 'تم تجهيز باقة المخططات والرسومات الهندسية لهذا النموذج.'
                  : 'Architectural blueprint documentation package generated for this typology.'
              );
            })
          }
          className="w-full text-center py-space-sm px-space-md rounded-xl font-label-md text-label-md uppercase tracking-wider text-midnight-black bg-warm-ivory border border-primary-container/40 hover:bg-sand-beige transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
          type="button"
        >
          <span className="material-symbols-outlined text-[18px]">download_for_offline</span>
          <span>
            {language === 'ar' ? 'تحميل ملف المخططات الهندسية (PDF)' : 'Download Blueprint Pack (PDF)'}
          </span>
        </button>
      </div>

      {/* Residence Pagination Micro-Navigator */}
      <div className="bg-warm-ivory/80 p-space-xs rounded-xl flex items-center justify-between">
        <button
          onClick={onPrev}
          type="button"
          className="flex items-center gap-1 text-surface-container-highest hover:text-midnight-black font-label-sm text-label-sm uppercase tracking-wider transition-colors cursor-pointer"
        >
          <span
            className={`material-symbols-outlined text-[16px] ${isRtl ? 'rotate-180' : ''}`}
          >
            arrow_back
          </span>
          <span>
            {language === 'ar' ? 'السابق: ' : 'Prev: '}
            {prevName}
          </span>
        </button>
        <span className="w-1 h-1 rounded-full bg-gold-dark" />
        <button
          onClick={onNext}
          type="button"
          className="flex items-center gap-1 text-surface-container-highest hover:text-midnight-black font-label-sm text-label-sm uppercase tracking-wider transition-colors cursor-pointer"
        >
          <span>
            {language === 'ar' ? 'التالي: ' : 'Next: '}
            {nextName}
          </span>
          <span
            className={`material-symbols-outlined text-[16px] ${isRtl ? 'rotate-180' : ''}`}
          >
            arrow_forward
          </span>
        </button>
      </div>
    </div>
  );
};
