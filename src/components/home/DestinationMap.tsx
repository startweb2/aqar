import React from 'react';
import { getNearbyDestinations } from '../../data/mockData';
import { useLanguage } from '../../context/LanguageContext';

export interface DestinationMapProps {
  readonly id?: string;
}

export const DestinationMap: React.FC<DestinationMapProps> = ({ id = 'location' }) => {
  const { language } = useLanguage();
  const destinations = getNearbyDestinations(language);

  const MAP_IMAGE_URL =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAIC0PwbTp31YrfLGadb2M1V1-uQCdGcXIPZpghFalH5gOrBp7qsQjxWN2OusQVZ1cIq-iC1Sao0Ai6REqMCP0wAkmfeh-Jhv_YZeNa_psQPv5xoxblBX7wFgfVAeFsl_P9rhRQZvi6b7I3tlK-B612lJlwaRRpdqUVOjNCEVgMx8rVnhdf4U0iOrx0b_o5L0IeGgNPk8X8AeaRA05f1zAsRTJnn7tDv7JyDza-uf7_6WNqy3yzSr4x';

  return (
    <section className="w-full py-28 md:py-36 bg-surface-container-lowest" id={id}>
      <div className="max-w-[1600px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-label-md text-label-md text-primary tracking-widest uppercase">
                08 / 09
              </span>
              <span className="w-8 h-px bg-primary/40" />
              <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-primary">
                {language === 'ar' ? 'موقع استراتيجي فريد' : 'STRATEGIC GEOGRAPHY'}
              </span>
            </div>
            <h2 className="font-display-lg text-display-lg text-warm-ivory">
              {language === 'ar' ? 'اكتشف العلمين الجديدة.' : 'Discover New Alamein.'}
            </h2>
          </div>
          <p className="font-body-md text-body-md text-sand-beige/80 max-w-md font-light leading-relaxed">
            {language === 'ar'
              ? 'عاصمة البحر الأبيض المتوسط المصرية الحديثة — وجهة ساحلية عالمية نابضة بالحياة على مدار العام تمزج بين التراث، والفنون المعاصرة، والمراسي الدولية.'
              : 'Egypt\'s flagship Mediterranean metropolis — a vibrant year-round global coastal hub fusing heritage, contemporary arts, world-class marinas, and seamless international transport.'}
          </p>
        </div>

        {/* Location Map & Destination Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Interactive Map Canvas Container */}
          <div className="lg:col-span-8 bg-surface-container overflow-hidden min-h-[460px] shadow-2xl relative border border-outline-variant/30">
            <div
              className="w-full h-full min-h-[460px] bg-cover bg-center"
              style={{ backgroundImage: `url('${MAP_IMAGE_URL}')` }}
            />
            {/* Map Overlay Badges */}
            <div className="absolute top-6 left-6 p-6 bg-surface-container-lowest/90 backdrop-blur-xl max-w-xs shadow-lg border border-primary/20">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary block mb-1 font-bold">
                {language === 'ar' ? 'الموقع الساحلي' : 'COASTAL PROXIMITY'}
              </span>
              <h4 className="font-headline-sm text-headline-sm text-warm-ivory mb-2">
                {language === 'ar' ? 'القطاع الساحلي الرئيسي' : 'Prime Waterfront Sector'}
              </h4>
              <p className="font-body-sm text-body-sm text-sand-beige/70">
                {language === 'ar'
                  ? 'موقع استثنائي مباشر على ممشى المتوسط الخلاب، محاط بالمدينة التراثية وشبكة البحيرات الكريستالية الساحلية.'
                  : 'Directly anchored on the pristine Mediterranean boulevard, flanked by the Heritage City and coastal lagoon network.'}
              </p>
            </div>
            <div className="absolute bottom-6 right-6 px-4 py-2 bg-midnight-black/90 backdrop-blur-md border border-primary/30">
              <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase font-bold">
                {language === 'ar'
                  ? '45 دقيقة • مطار برج العرب الدولي'
                  : '45 MIN • BORG EL ARAB AIRPORT'}
              </span>
            </div>
          </div>

          {/* Landmarks List */}
          <div className="lg:col-span-4 bg-surface-container p-8 md:p-10 flex flex-col justify-between shadow-2xl border border-outline-variant/30">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary block mb-4 font-bold">
                {language === 'ar' ? 'وجهات ومعالم قريبة' : 'NEARBY DESTINATIONS'}
              </span>
              <div className="space-y-6">
                {destinations.map((dest) => (
                  <div key={dest.number} className="pb-4 border-b border-surface-container-highest last:border-b-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-label-sm text-label-sm text-primary font-bold">
                        {dest.number} • {dest.name}
                      </span>
                      <span className="font-label-sm text-[10px] text-muted-slate uppercase">
                        {dest.distanceTime}
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-sand-beige/80">
                      {dest.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-label-md text-label-md uppercase tracking-wider text-primary hover:text-warm-ivory transition-colors font-bold"
              >
                <span>
                  {language === 'ar' ? 'استعراض الدليل الجغرافي للمنطقة' : 'View Interactive Destination Guide'}
                </span>
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
