import React from 'react';
import { getMonographGallery } from '../../data/mockData';
import { useLanguage } from '../../context/LanguageContext';

export interface MonographGalleryProps {
  readonly id?: string;
}

export const MonographGallery: React.FC<MonographGalleryProps> = ({ id = 'gallery' }) => {
  const { language } = useLanguage();
  const gallery = getMonographGallery(language);

  return (
    <section className="w-full py-28 md:py-36 bg-surface" id={id}>
      <div className="max-w-[1600px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-label-md text-label-md text-primary tracking-widest uppercase">
                07 / 09
              </span>
              <span className="w-8 h-px bg-primary/40" />
              <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-primary">
                {language === 'ar' ? 'سجل بصري معماري' : 'VISUAL MONOGRAPH'}
              </span>
            </div>
            <h2 className="font-display-lg text-display-lg text-warm-ivory">
              {language === 'ar'
                ? 'رؤى معمارية منتقاة بعناية.'
                : 'Curated Architectural Perspectives.'}
            </h2>
          </div>
          <p className="font-body-md text-body-md text-sand-beige/80 max-w-sm font-light">
            {language === 'ar'
              ? 'سجل بصري يوثق انعكاسات شروق الشمس، وملمس الخامات الطبيعية، والروعة المعمارية على ساحل المتوسط.'
              : 'A visual record capturing sunrise reflections, tactile organic textures, and Mediterranean atmospheric grandeur.'}
          </p>
        </div>

        {/* Asymmetric Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Column 1 */}
          <div className="md:col-span-7 flex flex-col gap-8">
            {/* Top Large Feature */}
            <div className="relative h-[480px] bg-surface-container overflow-hidden group shadow-2xl border border-outline-variant/30">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${gallery[0].imageUrl}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary block mb-1 font-bold">
                  {gallery[0].category}
                </span>
                <p className="font-headline-md text-headline-md text-warm-ivory">
                  {gallery[0].title}
                </p>
                <p className="font-body-sm text-body-sm text-sand-beige/70 mt-1">
                  {gallery[0].caption}
                </p>
              </div>
            </div>

            {/* Split Two Smaller */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="relative h-[320px] bg-surface-container overflow-hidden group shadow-xl border border-outline-variant/30">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${gallery[1].imageUrl}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary block font-bold">
                    {gallery[1].category}
                  </span>
                  <span className="font-headline-sm text-headline-sm text-warm-ivory">
                    {gallery[1].title}
                  </span>
                </div>
              </div>

              <div className="relative h-[320px] bg-surface-container overflow-hidden group shadow-xl border border-outline-variant/30">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${gallery[2].imageUrl}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary block font-bold">
                    {gallery[2].category}
                  </span>
                  <span className="font-headline-sm text-headline-sm text-warm-ivory">
                    {gallery[2].title}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="md:col-span-5 flex flex-col gap-8">
            <div className="relative h-[340px] bg-surface-container overflow-hidden group shadow-xl border border-outline-variant/30">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${gallery[3].imageUrl}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary block mb-1 font-bold">
                  {gallery[3].category}
                </span>
                <p className="font-headline-md text-headline-md text-warm-ivory">
                  {gallery[3].title}
                </p>
              </div>
            </div>

            <div className="relative h-[460px] bg-surface-container overflow-hidden group shadow-2xl border border-outline-variant/30">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${gallery[4].imageUrl}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary block mb-1 font-bold">
                  {gallery[4].category}
                </span>
                <p className="font-headline-md text-headline-md text-warm-ivory">
                  {gallery[4].title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
