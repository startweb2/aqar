import React, { useState } from 'react';
import { getRoomDetails } from '../../data/mockData';
import { RoomDetail } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

export interface EleganceDetailsProps {
  readonly id?: string;
}

export const EleganceDetails: React.FC<EleganceDetailsProps> = ({ id = 'interior' }) => {
  const { language, isRtl } = useLanguage();
  const [selectedRoomId, setSelectedRoomId] = useState<string>('salon');

  const roomDetails = getRoomDetails(language);
  const selectedRoom: RoomDetail =
    roomDetails.find((r) => r.id === selectedRoomId) || roomDetails[0];

  return (
    <section className="w-full py-28 md:py-36 bg-surface-container-lowest" id={id}>
      <div className="max-w-[1600px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-label-md text-label-md text-primary tracking-widest uppercase">
                03 / 09
              </span>
              <span className="w-8 h-px bg-primary/40" />
              <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-primary">
                {language === 'ar' ? 'تصميم للمعيشة الاستثنائية' : 'DESIGNED FOR EXCEPTIONAL LIVING'}
              </span>
            </div>
            <h2 className="font-display-lg text-display-lg text-warm-ivory">
              {language === 'ar' ? 'أناقة في كل تفصيل' : 'Elegance in Every Detail.'}
            </h2>
          </div>
          <p className="font-body-md text-body-md text-sand-beige/80 max-w-md font-light leading-relaxed">
            {language === 'ar'
              ? 'مساحات مدروسة بعناية، وخامات فائقة التميز، وإطلالات خلابة ترسم بعداً جديداً للمعيشة الساحلية الفاخرة.'
              : 'Thoughtfully designed spaces, sophisticated materials, and remarkable views define a new expression of coastal living.'}
          </p>
        </div>

        {/* Main Interior Hero Feature */}
        <div className="relative w-full h-[520px] lg:h-[680px] bg-surface-container shadow-2xl overflow-hidden mb-12 border border-primary-container/20">
          <div
            className="w-full h-full bg-cover bg-center transition-all duration-700"
            style={{ backgroundImage: `url('${selectedRoom.imageUrl}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/90 via-midnight-black/20 to-transparent pointer-events-none" />

          {/* Overlaid Curated Specification Banner */}
          <div className="absolute bottom-0 inset-x-0 p-8 md:p-12 flex flex-col md:flex-row md:items-end justify-between gap-6 z-10">
            <div className="max-w-xl">
              <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-primary block mb-2 font-bold">
                {language === 'ar' ? 'خامات وتجهيزات راقية • ' : 'CURATED MATERIALITY • '}
                {selectedRoom.category}
              </span>
              <h3 className="font-headline-lg text-headline-lg text-warm-ivory mb-2">
                {selectedRoom.title}
              </h3>
              <p className="font-body-md text-body-md text-sand-beige/85">
                {selectedRoom.description}
              </p>
            </div>
            <div className="flex items-center gap-8">
              {selectedRoom.specs.map((spec) => (
                <div key={spec.label} className="flex flex-col">
                  <span className="font-headline-md text-headline-md text-primary">
                    {spec.value}
                  </span>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-sand-beige/70">
                    {spec.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mini Preview Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {roomDetails.map((room) => {
            const isSelected = room.id === selectedRoomId;
            return (
              <button
                key={room.id}
                onClick={() => setSelectedRoomId(room.id)}
                className={`group ${isRtl ? 'text-right' : 'text-left'} p-6 transition-all shadow-sm border ${
                  isSelected
                    ? 'bg-surface-container border-primary shadow-lg'
                    : 'bg-surface-container-low hover:bg-surface-container-high border-outline-variant/30'
                }`}
                type="button"
              >
                <span className="font-label-sm text-label-sm tracking-widest text-primary block mb-2 font-bold">
                  {room.category}
                </span>
                <h4
                  className={`font-headline-sm text-headline-sm mb-2 transition-colors ${
                    isSelected ? 'text-primary' : 'text-warm-ivory group-hover:text-primary'
                  }`}
                >
                  {room.title}
                </h4>
                <p className="font-body-sm text-body-sm text-sand-beige/70 line-clamp-2">
                  {room.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
