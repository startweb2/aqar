import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export interface FooterProps {
  readonly onNewsletterSubmit?: (email: string) => void;
}

export const Footer: React.FC<Readonly<FooterProps>> = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { isRTL, t } = useLanguage();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="w-full bg-midnight-black relative border-t border-primary-container/15 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop pt-space-xl pb-space-lg relative z-10">
        {/* Newsletter Box */}
        <div className="w-full bg-[#071820]/75 backdrop-blur-xl border border-primary-container/20 p-space-md md:p-space-xl mb-space-xl shadow-[0_20px_50px_rgba(6,9,14,0.65)]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-gutter">
            <div className="max-w-2xl">
              <span className="font-label-sm text-label-sm tracking-[0.25em] uppercase text-primary block mb-space-xs">
                {t('footer_newsletter_badge', 'STAY CONNECTED')}
              </span>
              <h3 className="font-headline-lg text-headline-lg text-warm-ivory mb-space-xs">
                {t('footer_newsletter_title', 'Exceptional Homes, Extraordinary Living.')}
              </h3>
              <p className="font-body-md text-body-md text-sand-beige/80">
                {t(
                  'footer_newsletter_desc',
                  'Discover new residential concepts, architectural inspiration, and exclusive coastal lifestyle updates directly from New Alamein.'
                )}
              </p>
            </div>
            {subscribed ? (
              <div className="p-4 bg-primary/20 border border-primary text-primary font-label-md uppercase tracking-wider">
                {isRTL
                  ? 'شكراً لاشتراكك في النشرة المعمارية الحصرية لأبراج العلمين.'
                  : 'Thank you for subscribing to the Alamein Private Journal.'}
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-stretch gap-space-sm w-full lg:w-auto lg:min-w-[420px]"
              >
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-surface-container-lowest/80 border border-outline-variant/40 px-space-md py-space-sm text-on-surface placeholder:text-on-surface-variant/60 font-body-sm text-body-sm focus:outline-none focus:border-primary-container transition-colors flex-1"
                  placeholder={t('footer_placeholder', 'Enter your private email address')}
                  type="email"
                  required
                />
                <button
                  className="font-label-md text-label-md uppercase tracking-wider text-midnight-black px-space-lg py-space-sm bg-[linear-gradient(135deg,#FAECCD_0%,#DFB76E_50%,#BA8733_100%)] hover:brightness-105 transition-all shadow-md font-bold cursor-pointer"
                  type="submit"
                >
                  {t('footer_subscribe_btn', 'Subscribe')}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter pb-space-xl border-b border-outline-variant/20">
          <div className="lg:col-span-4 flex flex-col gap-space-md">
            <Link to="/" className="flex items-center gap-3">
              <img
                alt="أبراج العلمين - Alamein Towers"
                className="h-10 w-auto object-contain"
                src="/logo-ar.png"
              />
              <span className={`flex flex-col ${isRTL ? 'text-right' : 'text-left'}`}>
                <span className="font-label-md text-label-md tracking-[0.2em] uppercase text-warm-ivory">
                  {isRTL ? 'أبراج العلمين' : 'ALAMEIN TOWERS'}
                </span>
                <span className="font-label-sm text-[10px] uppercase tracking-[0.25em] text-primary">
                  {isRTL ? 'إطلالة ساحلية فاخرة' : 'Mediterranean Sanctuary'}
                </span>
              </span>
            </Link>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm leading-relaxed">
              {isRTL
                ? 'عنوان البحر الأبيض المتوسط الأيقوني في العلمين الجديدة، احتفاءً بالجمال المعماري والسكينة الساحلية.'
                : 'A landmark Mediterranean address in New Alamein celebrating architectural purity and coastal serenity.'}
            </p>
            <div className="flex items-center gap-space-sm pt-space-xs">
              <span className="w-9 h-9 bg-surface-container-low border border-primary-container/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[18px]">photo_camera</span>
              </span>
              <span className="w-9 h-9 bg-surface-container-low border border-primary-container/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[18px]">hub</span>
              </span>
              <span className="w-9 h-9 bg-surface-container-low border border-primary-container/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[18px]">smart_display</span>
              </span>
              <span className="w-9 h-9 bg-surface-container-low border border-primary-container/20 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[18px]">public</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-primary">
              {isRTL ? 'استكشف' : 'EXPLORE'}
            </span>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <Link to="/residences" className="hover:text-primary transition-colors">
                  {t('nav_residences', 'Residences')}
                </Link>
              </li>
              <li>
                <Link to="/floor-plans" className="hover:text-primary transition-colors">
                  {t('nav_floorplans', 'Floor Plans')}
                </Link>
              </li>
              <li>
                <Link to="/amenities" className="hover:text-primary transition-colors">
                  {t('nav_amenities', 'Amenities')}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-primary transition-colors">
                  {t('nav_gallery', 'Gallery')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-primary">
              {isRTL ? 'عن المشروع' : 'ABOUT'}
            </span>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  {isRTL ? 'رؤيتنا المعمارية' : 'Our Vision'}
                </Link>
              </li>
              <li>
                <Link to="/architecture" className="hover:text-primary transition-colors">
                  {isRTL ? 'الفلسفة الهندسية' : 'Architecture'}
                </Link>
              </li>
              <li>
                <Link to="/the-destination" className="hover:text-primary transition-colors">
                  {isRTL ? 'الوجهة الساحلية' : 'The Destination'}
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-primary">
              {isRTL ? 'الخدمات' : 'RESOURCES'}
            </span>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  {isRTL ? 'دليل الشراء والاستثمار' : 'Property Guide'}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  {isRTL ? 'المعاينة الخاصة' : 'Private Viewing'}
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-primary">
              {isRTL ? 'تواصل معنا' : 'CONTACT'}
            </span>
            <div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <p className="leading-relaxed">
                {isRTL
                  ? 'ممشى الواجهة البحرية، العلمين الجديدة، مصر'
                  : 'New Alamein Waterfront, Mediterranean Coast, Egypt'}
              </p>
              <p className="text-sand-beige hover:text-primary transition-colors">
                concierge@alameintowers.concept
              </p>
              <p>+20 (0) Concept Desk</p>
              <span className="font-label-sm text-label-sm text-outline tracking-widest mt-space-xs">
                30°50&apos;N 28°57&apos;E
              </span>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-space-md flex flex-col md:flex-row items-center justify-between gap-space-sm font-body-sm text-body-sm text-on-surface-variant/70">
          <div className="flex flex-col gap-0.5 text-center md:text-left">
            <p>{t('footer_copy', '© 2026 ALAMEIN TOWERS. Conceptual Architectural Showcase Portfolio Project.')}</p>
          </div>
          <div className="flex items-center gap-space-md font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
            <span>{isRTL ? 'سياسة الخصوصية' : 'Privacy Policy'}</span>
            <span className="text-outline-variant/40">|</span>
            <span>{isRTL ? 'الشروط والأحكام' : 'Terms of Experience'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
