import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export interface PavilionDetailsProps {
  readonly eyebrow?: string;
  readonly deskLabel?: string;
  readonly coordinates?: string;
  readonly title?: string;
  readonly description?: string;
  readonly pavilionAddress?: string;
  readonly hours?: string;
  readonly deskPhone?: string;
  readonly deskEmail?: string;
  readonly heroImageUrl?: string;
  readonly mapImageUrl?: string;
}

export const PavilionDetails: React.FC<Readonly<PavilionDetailsProps>> = (props) => {
  const { t, isRTL } = useLanguage();

  const eyebrow = props.eyebrow || t('contact_badge', 'Private Client Services');
  const deskLabel = props.deskLabel || t('contact_desk', 'Mediterranean Desk');
  const coordinates = props.coordinates || "30°50'42\"N • 28°57'18\"E — North Coast, Egypt";
  const title = props.title || t('contact_title', 'Your Coastal Journey Starts Here');
  const description =
    props.description ||
    t(
      'contact_desc',
      'Whether you are seeking a serene summer sanctuary or a premier Mediterranean property investment, our private client advisors provide tailored architectural briefings, virtual 3D walkthroughs, and bespoke site visits in New Alamein.'
    );
  const pavilionAddress =
    props.pavilionAddress ||
    t(
      'contact_pavilion_address',
      'New Alamein Waterfront Promenade, Sector 4\nNorth Coast, Mediterranean Shoreline, Egypt'
    );
  const hours =
    props.hours ||
    t(
      'contact_hours_text',
      'Sunday – Thursday, 10:00 AM – 7:00 PM (EET)\nWeekend site encounters by private confirmation only'
    );
  const deskPhone = props.deskPhone || '+20 (0) Concept Inquiry Desk';
  const deskEmail = props.deskEmail || 'inquiries@alameintowers.concept';
  const heroImageUrl =
    props.heroImageUrl ||
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAOTt3qjmYdinp1Q8v7SHdJlI34PEnjORk1ELtURiU7LCzTrGvsqvwlC6Ss09JG7_8W6C6TLVOfJyT-bMKAGGK8sRVJAZfbx4aL1dbiFQbVmQ1gbPauYUgOEltq4y_cNh5Tvisajzl-pbhC1C89-8Ay4_F4H5ypyUWcB0WzYk-XXzA21uPy68F9YXYjcNjEVBlyNGWNd3bGB4E14p8afgRWvy1JhmKDQIDivLEZwMS8swFF1Sg7y-75';
  const mapImageUrl =
    props.mapImageUrl ||
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCxtFgsEJ8wrheZ5yfZqhg1iqJcNgM7maDUwce5Fj5NiXa1wLS_Tt9pQ4IY0N8mj-w0SoL3JeXn52WShpmoxNkdc1W5UBp2YrNMd-2MfvZg250UIj6KXtPMwjWwadNak5OctyvuwfY8xb0V2dJU-AQEAZwj3UurDn5VHBaXvLrShB8uXB68-0x6zD2RINz9UUnz68keYqPYeHcFXFdRKC0qrR8JaUWM0FSmFrFJ4nS-VBVJ43AZ9GAc';

  return (
    <div className="flex flex-col gap-space-lg">
      {/* Top Monogram & Geo Header Ribbon */}
      <div className="flex flex-wrap items-center justify-between gap-space-sm text-outline">
        <div className="flex items-center gap-space-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-primary">
            {eyebrow}
          </span>
          <span className="text-outline-variant/50">/</span>
          <span className="font-label-sm text-label-sm tracking-widest text-on-surface-variant">
            {deskLabel}
          </span>
        </div>
        <div className="font-label-sm text-label-sm tracking-[0.25em] text-sand-beige/70 uppercase">
          {coordinates}
        </div>
      </div>

      {/* Typography Group */}
      <div className="flex flex-col gap-space-xs">
        <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </span>
        <h1 className="font-headline-lg text-headline-lg lg:text-display-lg text-warm-ivory tracking-tight leading-none">
          {title}
        </h1>
        <p className="font-body-xl text-body-xl text-sand-beige/85 leading-relaxed mt-space-xs">
          {description}
        </p>
      </div>

      {/* Cinematic Visual Feature Card */}
      <div className="relative w-full aspect-[16/10] bg-surface-container overflow-hidden shadow-2xl group">
        <img
          alt="Alamein Towers Waterfront Pavilion"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={heroImageUrl}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-black via-midnight-black/30 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-surface-container-low/90 backdrop-blur-md px-space-md py-space-xs text-sand-beige">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-primary text-[18px]">domain</span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-warm-ivory">
              {isRTL ? 'قطاع الممشى الساحلي' : 'Pavilion Waterfront Sector'}
            </span>
          </div>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
            {isRTL ? 'إطلالة حية' : 'Live Elevation'}
          </span>
        </div>
      </div>

      {/* Key Information Blocks (Framed Matrix) */}
      <div className="flex flex-col gap-space-md bg-surface-container-low/70 backdrop-blur-md p-space-md md:p-space-lg shadow-xl">
        {/* Pavilion Address */}
        <div className="flex items-start gap-space-md">
          <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-primary shadow-inner">
            <span className="material-symbols-outlined text-[20px]">location_on</span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.18em] text-primary">
              {t('contact_pavilion_title', 'Private Viewing Pavilion')}
            </span>
            <p className="font-body-md text-body-md text-warm-ivory mt-0.5 whitespace-pre-line">
              {pavilionAddress}
            </p>
          </div>
        </div>

        {/* Advisory Hours */}
        <div className="flex items-start gap-space-md">
          <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-primary shadow-inner">
            <span className="material-symbols-outlined text-[20px]">schedule</span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.18em] text-primary">
              {t('contact_hours_title', 'Advisory Hours')}
            </span>
            <p className="font-body-md text-body-md text-warm-ivory mt-0.5 whitespace-pre-line">
              {hours}
            </p>
          </div>
        </div>

        {/* Direct Client Desk */}
        <div className="flex items-start gap-space-md">
          <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-primary shadow-inner">
            <span className="material-symbols-outlined text-[20px]">support_agent</span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.18em] text-primary">
              {t('contact_desk_title', 'Direct Client Desk')}
            </span>
            <p className="font-body-md text-body-md text-warm-ivory mt-0.5">{deskPhone}</p>
            <a
              className="font-body-sm text-body-sm text-primary hover:text-gold-light transition-colors mt-0.5"
              href={`mailto:${deskEmail}`}
            >
              {deskEmail}
            </a>
          </div>
        </div>

        {/* Conceptual Notice Banner */}
        <div className="bg-surface-container p-space-sm mt-space-xs">
          <div className="flex items-start gap-space-xs">
            <span className="material-symbols-outlined text-outline text-[16px] shrink-0 mt-0.5">
              info
            </span>
            <p className="font-body-sm text-body-sm text-sand-beige/80 italic leading-snug">
              {isRTL
                ? 'إشعار المعرض المعماري: هذه المنصة الرقمية هي نموذج استعراضي معقد للأبراج الساحلية الفاخرة.'
                : 'Conceptual Showcase Notice: This digital showcase is an independent architectural portfolio concept. Real contact inquiries are handled for design demonstration.'}
            </p>
          </div>
        </div>
      </div>

      {/* Micro Geographic Coordinates Map Anchor */}
      <div
        className="w-full h-44 bg-surface-container-high bg-cover bg-center relative shadow-lg overflow-hidden group cursor-pointer"
        style={{ backgroundImage: `url('${mapImageUrl}')` }}
        onClick={() => {
          window.open('https://maps.google.com/?q=New+Alamein+City', '_blank');
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-black via-midnight-black/40 to-transparent flex items-end p-space-sm">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-space-xs text-sand-beige">
              <span className="material-symbols-outlined text-primary text-[18px]">explore</span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-warm-ivory">
                {isRTL ? 'الوصول الجغرافي التفاعلي' : 'Interactive Geographic Access'}
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-primary uppercase">
              {isRTL ? '← فتح الإحداثيات' : 'Open Coordinates →'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
