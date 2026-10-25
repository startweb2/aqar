import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export interface RoomDimensionsListProps {
  readonly dimensions: readonly { readonly name: string; readonly areaM2: number }[];
  readonly title?: string;
  readonly badgeLabel?: string;
}

export const RoomDimensionsList: React.FC<Readonly<RoomDimensionsListProps>> = ({
  dimensions,
  title,
  badgeLabel,
}) => {
  const { language } = useLanguage();

  const displayTitle = title || (language === 'ar' ? 'أبعاد ومساحات الغرف' : 'Room Dimensions');
  const displayBadge = badgeLabel || (language === 'ar' ? 'المساحة الصافية' : 'Net Usable');

  return (
    <div className="bg-warm-ivory p-space-md rounded-2xl shadow-sm flex flex-col">
      <div className="flex items-center justify-between mb-space-sm pb-space-xs border-b border-surface-container-highest/20">
        <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] font-bold text-midnight-black">
          {displayTitle}
        </span>
        <span className="font-label-sm text-[11px] uppercase tracking-wider text-muted-slate">
          {displayBadge}
        </span>
      </div>

      <div className="flex flex-col gap-space-xs font-body-sm text-body-sm">
        {dimensions.map((room, idx) => {
          const isTerrace =
            room.name.toLowerCase().includes('terrace') ||
            room.name.toLowerCase().includes('balcony') ||
            room.name.toLowerCase().includes('deck') ||
            room.name.includes('تراس') ||
            room.name.includes('شرفة');

          return (
            <div
              key={room.name}
              className={`flex items-center justify-between py-1 ${
                idx > 0 ? 'border-t border-sand-beige/80' : ''
              }`}
            >
              <span
                className={`${
                  isTerrace
                    ? 'text-surface-container-highest font-medium text-gold-dark'
                    : 'text-surface-container-highest'
                }`}
              >
                {room.name}
              </span>
              <span
                className={`font-label-md text-label-md font-bold ${
                  isTerrace ? 'text-gold-dark' : 'text-midnight-black'
                }`}
              >
                {room.areaM2.toFixed(1)} {language === 'ar' ? 'م²' : 'm²'}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
