import React from 'react';
import { getAmenities } from '../../data/mockData';
import { useLanguage } from '../../context/LanguageContext';

export interface AmenitiesSectionProps {
  readonly id?: string;
}

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ id = 'lifestyle' }) => {
  const { language } = useLanguage();
  const amenitiesList = getAmenities(language);

  return (
    <section className="w-full py-28 md:py-36 bg-surface-container-low" id={id}>
      <div className="max-w-[1600px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-label-md text-label-md text-primary tracking-widest uppercase">
                05 / 09
              </span>
              <span className="w-8 h-px bg-primary/40" />
              <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-primary">
                {language === 'ar' ? 'مرافق ومستوى منتجعي' : 'RESORT ELEVATION'}
              </span>
            </div>
            <h2 className="font-display-lg text-display-lg text-warm-ivory">
              {language === 'ar'
                ? 'أكثر من مجرد فخامة. أسلوب حياة ساحلي متكامل.'
                : 'Beyond Luxury. A Coastal Way of Life.'}
            </h2>
          </div>
          <p className="font-body-md text-body-md text-sand-beige/80 max-w-md font-light leading-relaxed">
            {language === 'ar'
              ? 'مجموعة غير مسبوقة من المساحات الترفيهية الخاصة، وأجنحة الاستشفاء، والمرافق البحرية المصممة لنمط حياة متجدد.'
              : 'An unprecedented collection of private leisure spaces, health pavilions, and personalized nautical amenities conceived for restorative living.'}
          </p>
        </div>

        {/* Editorial Magazine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Large Featured Amenity: Lagoon */}
          <div className="md:col-span-8 bg-surface-container overflow-hidden group shadow-2xl relative border border-primary-container/20">
            <div className="h-96 md:h-[480px] w-full overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${amenitiesList[0].imageUrl}')` }}
              />
            </div>
            <div className="p-8 md:p-10 bg-surface-container-high/90">
              <div className="flex items-center justify-between mb-3">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
                  {amenitiesList[0].category}
                </span>
                <span className="material-symbols-outlined text-primary text-[22px]">pool</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-warm-ivory mb-2">
                {amenitiesList[0].title}
              </h3>
              <p className="font-body-md text-body-md text-sand-beige/80 leading-relaxed">
                {amenitiesList[0].description}
              </p>
            </div>
          </div>

          {/* Vertical Amenities Column */}
          <div className="md:col-span-4 flex flex-col gap-8">
            {amenitiesList.slice(1).map((amenity) => (
              <div
                key={amenity.id}
                className="bg-surface-container p-8 shadow-xl flex-1 flex flex-col justify-between group border border-outline-variant/30"
              >
                <div className="h-44 w-full mb-6 overflow-hidden bg-surface-container-highest">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${amenity.imageUrl}')` }}
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
                      {amenity.category}
                    </span>
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      {amenity.id === 'marina' ? 'sailing' : 'spa'}
                    </span>
                  </div>
                  <h4 className="font-headline-md text-headline-md text-warm-ivory mb-2">
                    {amenity.title}
                  </h4>
                  <p className="font-body-sm text-body-sm text-sand-beige/70">
                    {amenity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Metric Highlights Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="p-6 bg-surface-container shadow-sm flex items-center gap-4 border border-outline-variant/30">
            <span className="material-symbols-outlined text-primary text-[32px]">fitness_center</span>
            <div>
              <span className="font-headline-sm text-headline-sm text-warm-ivory block">
                {language === 'ar' ? 'صالة تكنوجيم' : 'Technogym'}
              </span>
              <span className="font-label-sm text-label-sm text-sand-beige/70 uppercase">
                {language === 'ar' ? 'تجهيزات Artis Suite' : 'Artis Suite Facility'}
              </span>
            </div>
          </div>
          <div className="p-6 bg-surface-container shadow-sm flex items-center gap-4 border border-outline-variant/30">
            <span className="material-symbols-outlined text-primary text-[32px]">beach_access</span>
            <div>
              <span className="font-headline-sm text-headline-sm text-warm-ivory block">
                {language === 'ar' ? 'شاطئ خاص' : 'Private Beach'}
              </span>
              <span className="font-label-sm text-label-sm text-sand-beige/70 uppercase">
                {language === 'ar' ? 'واجهة بطول 400 متر' : 'Exclusive 400m Shore'}
              </span>
            </div>
          </div>
          <div className="p-6 bg-surface-container shadow-sm flex items-center gap-4 border border-outline-variant/30">
            <span className="material-symbols-outlined text-primary text-[32px]">restaurant</span>
            <div>
              <span className="font-headline-sm text-headline-sm text-warm-ivory block">
                {language === 'ar' ? 'مطاعم راقية' : 'Signature Dining'}
              </span>
              <span className="font-label-sm text-label-sm text-sand-beige/70 uppercase">
                {language === 'ar' ? '3 وجهات تذوق عالمية' : '3 Curated Restaurants'}
              </span>
            </div>
          </div>
          <div className="p-6 bg-surface-container shadow-sm flex items-center gap-4 border border-outline-variant/30">
            <span className="material-symbols-outlined text-primary text-[32px]">room_service</span>
            <div>
              <span className="font-headline-sm text-headline-sm text-warm-ivory block">
                {language === 'ar' ? 'خدمة كونسيرج 24/7' : '24/7 Butler'}
              </span>
              <span className="font-label-sm text-label-sm text-sand-beige/70 uppercase">
                {language === 'ar' ? 'ضيافة فندقية متكاملة' : 'White Glove Service'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
