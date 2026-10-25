import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export interface ArchitecturalLayoutProps {
  readonly id?: string;
}

export const ArchitecturalLayout: React.FC<ArchitecturalLayoutProps> = ({ id = 'floorplans' }) => {
  const { language, isRtl } = useLanguage();

  return (
    <section className="w-full py-28 md:py-36 bg-warm-ivory text-midnight-black" id={id}>
      <div className="max-w-[1600px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        {/* Section Header with Inverted Theme Palette */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-label-md text-label-md text-gold-dark tracking-widest uppercase">
                06 / 09
              </span>
              <span className="w-8 h-px bg-gold-dark/40" />
              <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-gold-dark font-semibold">
                {language === 'ar' ? 'دقة معمارية فائقة' : 'ARCHITECTURAL PRECISION'}
              </span>
            </div>
            <h2 className="font-display-lg text-display-lg text-midnight-black">
              {language === 'ar' ? 'مخططات ذكية وإطلالات استثنائية.' : 'Smart Layouts. Exceptional Views.'}
            </h2>
          </div>
          <p className="font-body-md text-body-md text-midnight-black/80 max-w-md font-light leading-relaxed">
            {language === 'ar'
              ? 'صُممت بدقة لتوفير العزل الحراري والتهوية الطبيعية مع زاوية رؤية 180 درجة مفتوحة على البحر مباشرة.'
              : 'Engineered to maximize thermal insulation, cross-ventilation, and 180-degree unobstructed sightlines toward the open sea.'}
          </p>
        </div>

        {/* Isometric Plan Canvas & Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Isometric Blueprint Canvas */}
          <div className="lg:col-span-8 bg-sand-beige/50 p-8 md:p-12 shadow-xl flex flex-col items-center justify-center relative min-h-[500px] border border-outline-variant/30">
            <div className="w-full max-w-2xl aspect-[4/3] relative flex items-center justify-center">
              <svg
                className="w-full h-full text-midnight-black"
                fill="none"
                viewBox="0 0 800 600"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer Boundary Wall */}
                <polygon
                  fill="#E8E2D5"
                  fillOpacity="0.3"
                  points="120,480 340,540 700,340 480,280"
                  stroke="currentColor"
                  strokeWidth="2.5"
                />
                {/* Terrace Projection */}
                <polygon
                  fill="#DFB76E"
                  fillOpacity="0.15"
                  points="120,480 40,430 260,370 340,540"
                  stroke="#BA8733"
                  strokeDasharray="4 4"
                  strokeWidth="2.5"
                />
                {/* Master Suite Partition */}
                <polygon
                  fill="#F6F3EC"
                  points="480,280 560,230 700,310 620,360"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                {/* Living & Dining Core */}
                <polygon
                  fill="#FAF6EE"
                  points="340,540 480,280 360,250 220,510"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                {/* Gourmet Kitchen Block */}
                <polygon
                  fill="#E8E2D5"
                  points="360,250 480,280 440,200 320,170"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />

                {/* Callout Pin 1: Master Salon */}
                <circle cx="340" cy="420" fill="#06090E" r="16" />
                <text
                  fill="#FFFFFF"
                  fontFamily={language === 'ar' ? 'Cairo, sans-serif' : 'Plus Jakarta Sans'}
                  fontSize="12"
                  fontWeight="600"
                  textAnchor="middle"
                  x="340"
                  y="425"
                >
                  01
                </text>
                <line stroke="#06090E" strokeWidth="1.5" x1="340" x2="340" y1="400" y2="350" />
                <rect fill="#06090E" height="30" width="180" x="250" y="320" />
                <text
                  fill="#FAECCD"
                  fontFamily={language === 'ar' ? 'Cairo, sans-serif' : 'Plus Jakarta Sans'}
                  fontSize="11"
                  letterSpacing="1"
                  textAnchor="middle"
                  x="340"
                  y="340"
                >
                  {language === 'ar' ? 'الصالون الكبير • 54 م²' : 'GRAND SALON • 54 M²'}
                </text>

                {/* Callout Pin 2: Horizon Balcony */}
                <circle cx="160" cy="450" fill="#BA8733" r="16" />
                <text
                  fill="#06090E"
                  fontFamily={language === 'ar' ? 'Cairo, sans-serif' : 'Plus Jakarta Sans'}
                  fontSize="12"
                  fontWeight="700"
                  textAnchor="middle"
                  x="160"
                  y="455"
                >
                  02
                </text>
                <line stroke="#BA8733" strokeWidth="1.5" x1="160" x2="160" y1="466" y2="520" />
                <rect fill="#BA8733" height="30" width="160" x="80" y="520" />
                <text
                  fill="#06090E"
                  fontFamily={language === 'ar' ? 'Cairo, sans-serif' : 'Plus Jakarta Sans'}
                  fontSize="11"
                  fontWeight="600"
                  letterSpacing="1"
                  textAnchor="middle"
                  x="160"
                  y="540"
                >
                  {language === 'ar' ? 'شرفة البحر • 32 م²' : 'SEA TERRACE • 32 M²'}
                </text>

                {/* Callout Pin 3: Primary Bedroom */}
                <circle cx="610" cy="300" fill="#06090E" r="16" />
                <text
                  fill="#FFFFFF"
                  fontFamily={language === 'ar' ? 'Cairo, sans-serif' : 'Plus Jakarta Sans'}
                  fontSize="12"
                  fontWeight="600"
                  textAnchor="middle"
                  x="610"
                  y="305"
                >
                  03
                </text>
                <line stroke="#06090E" strokeWidth="1.5" x1="610" x2="610" y1="284" y2="230" />
                <rect fill="#06090E" height="30" width="180" x="520" y="200" />
                <text
                  fill="#FAECCD"
                  fontFamily={language === 'ar' ? 'Cairo, sans-serif' : 'Plus Jakarta Sans'}
                  fontSize="11"
                  letterSpacing="1"
                  textAnchor="middle"
                  x="610"
                  y="220"
                >
                  {language === 'ar' ? 'الجناح الرئيسي • 38 م²' : 'MASTER SUITE • 38 M²'}
                </text>
              </svg>
            </div>
            <div className="w-full flex items-center justify-between pt-6 border-t border-midnight-black/10 text-midnight-black/70">
              <span className="font-label-sm text-label-sm tracking-wider uppercase font-semibold">
                {language === 'ar'
                  ? 'مخطط النموذج: مسكن ركني من 3 غرف نوم (الفئة C)'
                  : 'PLAN SCHEMATIC: THREE-BEDROOM CORNER RESIDENCE (TYPE-C)'}
              </span>
              <span className="font-label-sm text-label-sm tracking-widest uppercase">
                {language === 'ar' ? 'مقياس الرسم 1:100' : 'SCALE 1:100'}
              </span>
            </div>
          </div>

          {/* Specifications Breakdown */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-8">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-gold-dark font-semibold block mb-2">
                {language === 'ar' ? 'المقاييس المساحية' : 'DIMENSIONAL METRICS'}
              </span>
              <h3 className="font-headline-lg text-headline-lg text-midnight-black mb-4">
                {language === 'ar' ? 'هندسة معمارية فائقة الدقة' : 'Precision Engineering'}
              </h3>
              <p className="font-body-md text-body-md text-midnight-black/80 mb-6 leading-relaxed">
                {language === 'ar'
                  ? 'تمت هندسة كل نموذج بناءً على زوايا الشمس والرياح الساحلية، لتحقيق كفاءة مناخية ورؤية بانورامية بلا أعمدة تحجب الأفق.'
                  : 'Every layout has been computationally sculpted according to the coastal sun azimuth, providing passive cooling through cross-ventilation and zero-pillar panoramic sightlines.'}
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-sand-beige/40 flex items-center justify-between">
                  <div>
                    <span className="font-headline-sm text-headline-sm text-midnight-black block">
                      {language === 'ar' ? 'المساحة الداخلية المغلقة' : 'Internal Enclosed'}
                    </span>
                    <span className="font-body-sm text-body-sm text-midnight-black/70">
                      {language === 'ar' ? 'المعيشة، الأجنحة، مطبخ الشيف' : 'Living, suites, gourmet pantry'}
                    </span>
                  </div>
                  <span className="font-label-lg text-label-lg font-bold text-midnight-black">
                    185 {language === 'ar' ? 'م²' : 'm²'}
                  </span>
                </div>
                <div className="p-4 bg-sand-beige/40 flex items-center justify-between">
                  <div>
                    <span className="font-headline-sm text-headline-sm text-midnight-black block">
                      {language === 'ar' ? 'التراس والشرفة المغطاة' : 'Covered Verandah'}
                    </span>
                    <span className="font-body-sm text-body-sm text-midnight-black/70">
                      {language === 'ar' ? 'تراس كابولي معلق' : 'Continuous cantilever deck'}
                    </span>
                  </div>
                  <span className="font-label-lg text-label-lg font-bold text-midnight-black">
                    42 {language === 'ar' ? 'م²' : 'm²'}
                  </span>
                </div>
                <div className="p-4 bg-sand-beige/40 flex items-center justify-between">
                  <div>
                    <span className="font-headline-sm text-headline-sm text-midnight-black block">
                      {language === 'ar' ? 'إجمالي المساحة الشاملة' : 'Gross Total Footprint'}
                    </span>
                    <span className="font-body-sm text-body-sm text-midnight-black/70">
                      {language === 'ar' ? 'المكيفة والمساحات المفتوحة' : 'Air-conditioned & outdoor'}
                    </span>
                  </div>
                  <span className="font-label-lg text-label-lg font-bold text-gold-dark">
                    227 {language === 'ar' ? 'م²' : 'm²'}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link
                to="/floor-plans"
                className="inline-flex items-center gap-3 font-label-lg text-label-lg uppercase tracking-wider text-midnight-black group font-bold hover:text-gold-dark transition-colors"
              >
                <span>
                  {language === 'ar'
                    ? 'استكشف كافة المخططات الهندسية والرسومات'
                    : 'Explore All Floor Plans & Schematics'}
                </span>
                <span
                  className={`material-symbols-outlined text-gold-dark text-[20px] transition-transform ${
                    isRtl ? 'group-hover:-translate-x-1.5 rotate-180' : 'group-hover:translate-x-1.5'
                  }`}
                >
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
