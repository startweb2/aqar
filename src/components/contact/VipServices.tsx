import React from 'react';
import { getVipServices } from '../../data/mockData';
import { VipServiceItem } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

export interface VipServicesProps {
  readonly services?: readonly VipServiceItem[];
}

export const VipServices: React.FC<Readonly<VipServicesProps>> = ({ services }) => {
  const { language } = useLanguage();
  const serviceList = services || getVipServices(language);

  return (
    <div className="mt-space-xl pt-space-lg grid grid-cols-1 md:grid-cols-3 gap-gutter bg-surface-container-low/50 p-space-lg">
      {serviceList.map((service) => (
        <div key={service.number} className="flex items-start gap-space-sm">
          <span className="font-display-lg text-headline-lg text-primary/40 font-headline-lg shrink-0">
            {service.number}
          </span>
          <div className="flex flex-col">
            <h4 className="font-headline-sm text-headline-sm text-warm-ivory">{service.title}</h4>
            <p className="font-body-sm text-body-sm text-sand-beige/75 mt-1">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
