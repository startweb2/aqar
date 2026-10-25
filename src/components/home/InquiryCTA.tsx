import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export interface InquiryCTAProps {
  readonly onActionClick?: () => void;
}

export const InquiryCTA: React.FC<InquiryCTAProps> = () => {
  const { language } = useLanguage();

  return (
    <section className="relative w-full py-32 bg-midnight-black overflow-hidden border-t border-primary-container/20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop text-center flex flex-col items-center">
        <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-primary mb-4 font-bold">
          {language === 'ar' ? '09 / 09 — الاستفسار والمعاينة الخاصة' : '09 / 09 — INQUIRY & PREVIEW'}
        </span>

        <h2 className="font-display-xl text-display-xl text-warm-ivory mb-6 max-w-3xl leading-tight">
          {language === 'ar'
            ? 'فصلك الجديد يبدأ على ضفاف المتوسط.'
            : 'Your Next Chapter Begins by the Sea.'}
        </h2>

        <p className="font-body-xl text-body-xl text-sand-beige/85 max-w-2xl mb-10 leading-relaxed font-light">
          {language === 'ar'
            ? 'تواصل مع مكتب الاستقبال والكونسيرج الخاص للحصول على المخططات الحصرية، والكتيبات المعمارية، وتنسيق جولة خاصة واستثنائية بموقع أبراج العلمين.'
            : 'Connect with our private residence concierge to receive exclusive floor plans, detailed architectural monographs, and request a personalized private site tour in New Alamein.'}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-5">
          <Link
            to="/residences"
            className="w-full sm:w-auto inline-flex items-center justify-center font-label-lg text-label-lg uppercase tracking-wider text-midnight-black px-space-lg py-4 shadow-xl hover:brightness-110 transition-all bg-[linear-gradient(135deg,#FAECCD_0%,#DFB76E_50%,#BA8733_100%)] font-bold text-center"
          >
            {language === 'ar' ? 'استكشف الوحدات السكنية' : 'Explore Residences'}
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center font-label-lg text-label-lg uppercase tracking-wider text-warm-ivory px-space-lg py-4 bg-surface-container-high/80 hover:bg-surface-container-highest transition-colors shadow-sm border border-outline-variant/30 text-center"
          >
            {language === 'ar' ? 'طلب جولة خاصة' : 'Request a Private Tour'}
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-outline-variant/20 text-sand-beige/70 font-body-sm text-body-sm">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[18px]">desk</span>
            <span>
              {language === 'ar'
                ? 'مكتب الكونسيرج الخاص: 20+ (0) مكتب الاستقبال'
                : 'Private Concierge Desk: +20 (0) Concept Desk'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[18px]">mail</span>
            <span>concierge@alameintowers.concept</span>
          </div>
        </div>
      </div>
    </section>
  );
};
