import React from 'react';
import { Link } from 'react-router-dom';
import { BALCONY_IMAGE_URL, getBalconyStats } from '../../data/mockData';
import { useLanguage } from '../../context/LanguageContext';

export interface BalconySceneProps {
  readonly id?: string;
}

export const BalconyScene: React.FC<Readonly<BalconySceneProps>> = ({ id = 'scene-balcony' }) => {
  const { language, isRTL } = useLanguage();
  const stats = getBalconyStats(language);

  return (
    <section className="relative w-full py-28 md:py-36 bg-surface overflow-hidden" id={id}>
      <div className="max-w-[1600px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        {/* Section Counter Tag */}
        <div className="flex items-center justify-between pb-10">
          <div className="flex items-center gap-3">
            <span className="font-label-md text-label-md text-primary tracking-widest uppercase font-bold">
              02 / 09
            </span>
            <span className="w-12 h-px bg-primary/40" />
            <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-sand-beige/80">
              {isRTL ? 'شرفة الأفق الساحلي' : 'BALCONY THRESHOLD'}
            </span>
          </div>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-muted-slate hidden sm:inline">
            {isRTL ? 'الخط الساحلي المباشر لأبراج العلمين' : 'ALAMEIN RESIDENTIAL WATERLINE'}
          </span>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Presentation */}
          <div className="lg:col-span-7 relative">
            <div className="relative w-full h-[540px] md:h-[640px] overflow-hidden bg-surface-container shadow-2xl border border-primary-container/20">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{ backgroundImage: `url('${BALCONY_IMAGE_URL}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/70 via-transparent to-transparent pointer-events-none" />

              {/* In-Image Specification Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-surface-container-high/90 backdrop-blur-xl shadow-lg border border-primary/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary block mb-1 font-bold">
                    {isRTL ? 'تراس كابولي ناتئ' : 'CANTILEVER TERRACE'}
                  </span>
                  <p className="font-headline-sm text-headline-sm text-warm-ivory">
                    {isRTL ? 'عمق شرفة متصل 3.2 متر' : 'Continuous 3.2m Balcony Depth'}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sand-beige/80 font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    wb_sunny
                  </span>
                  <span>
                    {isRTL ? 'زجاج عازل حراري ومقاوم للأشعة' : 'Optimized UV Acoustic Glazing'}
                  </span>
                </div>
              </div>
            </div>

            {/* Overlapping Geometric Detail Card */}
            <div
              className={`hidden md:flex flex-col -mt-16 ${
                isRTL ? '-mr-8' : '-ml-8'
              } relative z-20 w-72 p-6 bg-surface-container-highest shadow-xl border border-outline-variant/40`}
            >
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary mb-1 font-bold">
                {isRTL ? 'إضاءة طبيعية' : 'NATURAL LIGHT'}
              </span>
              <span className="font-headline-md text-headline-md text-warm-ivory">
                {isRTL ? '+320 يوماً' : '320+ Days'}
              </span>
              <p className="font-body-sm text-body-sm text-sand-beige/70 mt-1">
                {isRTL
                  ? 'سطوع شمسي ساحلي مع حواجز مدروسة هندسياً لكسر الرياح البحرية.'
                  : 'Sun-drenched seaside exposure with engineered marine wind-baffles.'}
              </p>
            </div>
          </div>

          {/* Copy & Actions */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-primary mb-3 font-bold">
              {isRTL ? 'حياة على شاطئ البحر المتوسط' : 'A LIFE BY THE MEDITERRANEAN'}
            </span>
            <h2 className="font-display-lg text-display-lg text-warm-ivory mb-6 leading-tight">
              {isRTL ? 'منزلك الأقرب إلى مياه البحر.' : 'Your Home Closer to the Sea.'}
            </h2>
            <p className="font-body-md text-body-md text-sand-beige/80 mb-6 leading-relaxed">
              {isRTL
                ? 'خطوات معدودة تفصلك عن أفق البحر اللازوردي عبر بوابات زجاجية منزلقة عازلة للصوت، تمحو الحدود بين ملاذك الداخلي وسكينة الأمواج ونسيم البحر العليل في العلمين الجديدة.'
                : 'Step through frameless acoustic sliding portals onto an uninterrupted sky terrace. The barrier between your coastal sanctuary and the Mediterranean vanishes, welcoming invigorating sea breezes, golden Egyptian sunlight, and meditative waves.'}
            </p>

            <div className="grid grid-cols-2 gap-6 my-6 p-6 bg-surface-container-low border border-outline-variant/30 shadow-sm">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <span className="font-display-lg text-headline-lg text-primary block mb-1">
                    {stat.subtitle}
                  </span>
                  <span className="font-body-sm text-body-sm text-warm-ivory block font-medium">
                    {stat.value}
                  </span>
                  <span className="font-label-sm text-label-sm text-muted-slate uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Link
                to="/residences"
                className="w-full sm:w-auto inline-flex items-center justify-center font-label-md text-label-md uppercase tracking-wider text-midnight-black px-space-lg py-3.5 shadow-md hover:brightness-105 transition-all bg-[linear-gradient(135deg,#FAECCD_0%,#DFB76E_50%,#BA8733_100%)] font-bold text-center"
              >
                {isRTL ? 'استكشف الوحدات' : 'Discover Residences'}
              </Link>
              <Link
                to="/floor-plans"
                className="w-full sm:w-auto inline-flex items-center justify-center font-label-md text-label-md uppercase tracking-wider text-warm-ivory px-space-lg py-3.5 bg-surface-container-high hover:bg-surface-container-highest transition-colors border border-outline-variant/30 text-center"
              >
                {isRTL ? 'استعرض المخططات' : 'Explore Floor Plans'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
