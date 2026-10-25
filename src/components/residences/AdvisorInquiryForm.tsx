import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export interface AdvisorInquiryFormProps {
  readonly title?: string;
  readonly highlightedTitle?: string;
  readonly subtitle?: string;
  readonly description?: string;
  readonly onSuccess?: () => void;
}

export const AdvisorInquiryForm: React.FC<Readonly<AdvisorInquiryFormProps>> = (props) => {
  const { isRTL } = useLanguage();
  const [fullName, setFullName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [typology, setTypology] = useState('Four Bedroom Royal Sky Penthouse');
  const [submitted, setSubmitted] = useState(false);

  const title = props.title || (isRTL ? 'احجز موعداً لمعاينة' : 'Schedule an Exclusive');
  const highlightedTitle =
    props.highlightedTitle || (isRTL ? 'استثنائية خاصة' : 'Private Viewing Experience');
  const subtitle =
    props.subtitle ||
    (isRTL ? 'صالة المبيعات الخاصة واللاونج البحري' : 'Private Sales Gallery & Offshore Lounge');
  const description =
    props.description ||
    (isRTL
      ? 'استكشف المقاييس المعمارية الواقعية من خلال أجنحة العرض التفاعلية المجهزة بالعلمين الجديدة، أو رتّب انتقالاً بحرياً خاصاً مباشرة من مارينا اليخوت.'
      : 'Experience the residential scale first-hand through our high-definition full-scale presentation suites in New Alamein, or arrange a private maritime site transfer directly from the yacht marina.');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (props.onSuccess) {
      props.onSuccess();
    }
  };

  return (
    <section className="w-full py-space-xl bg-midnight-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(223,183,110,0.12)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-[1600px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop relative z-10">
        <div className="bg-surface-container-low p-space-lg md:p-space-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            {/* Text Narrative */}
            <div className="lg:col-span-7 flex flex-col gap-space-sm">
              <span className="font-label-sm text-label-sm tracking-[0.25em] uppercase text-primary font-bold">
                {subtitle}
              </span>
              <h2 className="font-headline-lg text-headline-lg text-warm-ivory">
                {title} <br />
                <span className="italic text-primary font-normal">{highlightedTitle}</span>
              </h2>
              <p className="font-body-md text-body-md text-sand-beige/85 max-w-xl font-light leading-relaxed">
                {description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md pt-space-md">
                <div className="flex items-center gap-space-xs text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[20px]">calendar_today</span>
                  <span className="font-body-sm text-body-sm">
                    {isRTL ? 'مواعيد مرنة ومخصصة' : 'Flexible Timelines'}
                  </span>
                </div>
                <div className="flex items-center gap-space-xs text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[20px]">security</span>
                  <span className="font-body-sm text-body-sm">
                    {isRTL ? 'بروتوكول سرية تامة' : 'Discreet NDA Protocol'}
                  </span>
                </div>
                <div className="flex items-center gap-space-xs text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[20px]">flight</span>
                  <span className="font-body-sm text-body-sm">
                    {isRTL ? 'مهبط طائرات هليكوبتر' : 'Helipad Transfers'}
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Inquiry Form Box */}
            <div className="lg:col-span-5 bg-surface-container-high/60 backdrop-blur-xl p-space-lg flex flex-col gap-space-md shadow-xl">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary block mb-1 font-bold">
                  {isRTL ? 'تواصل مباشر مع المستشار الخاص' : 'Direct Advisor Access'}
                </span>
                <p className="font-body-sm text-body-sm text-sand-beige/80">
                  {isRTL
                    ? 'تواصل مباشرة مع المنسق المعماري الرئيسي لأبراج العلمين الجديدة.'
                    : 'Connect directly with the Principal Residences Curator for New Alamein Towers.'}
                </p>
              </div>

              {submitted ? (
                <div className="p-space-md bg-surface-container-lowest border border-primary/40 text-center">
                  <span className="material-symbols-outlined text-primary text-[32px] mb-2 block">
                    verified
                  </span>
                  <h4 className="font-headline-sm text-warm-ivory mb-1">
                    {isRTL ? 'تم إرسال طلبك بنجاح' : 'Inquiry Transmitted'}
                  </h4>
                  <p className="font-body-xs text-sand-beige/80">
                    {isRTL
                      ? 'شكراً لك. سيتواصل معك أحد كبار المستشارين المعماريين خلال 24 ساعة.'
                      : 'Thank you. A senior residential curator will contact you discreetly within 24 hours.'}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-primary text-label-sm uppercase tracking-widest underline hover:text-warm-ivory cursor-pointer"
                  >
                    {isRTL ? 'إرسال طلب آخر' : 'Submit Another Inquiry'}
                  </button>
                </div>
              ) : (
                <form className="flex flex-col gap-space-sm" onSubmit={handleSubmit}>
                  <div>
                    <label className="block font-label-sm text-label-sm uppercase tracking-wider text-muted-slate mb-1">
                      {isRTL ? 'الاسم الكامل' : 'Full Name'}
                    </label>
                    <input
                      className="w-full bg-surface-container-lowest px-space-md py-space-xs text-on-surface text-body-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all border border-transparent focus:border-primary"
                      placeholder={isRTL ? 'اللقب / الاسم' : 'Lord / Lady / Dr. / Mr. / Ms.'}
                      required
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block font-label-sm text-label-sm uppercase tracking-wider text-muted-slate mb-1">
                      {isRTL ? 'البريد أو الهاتف المباشر' : 'Contact Email / Phone'}
                    </label>
                    <input
                      className="w-full bg-surface-container-lowest px-space-md py-space-xs text-on-surface text-body-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all border border-transparent focus:border-primary"
                      placeholder={isRTL ? 'advisory@domain.com أو رقم الهاتف' : 'advisory@clientdomain.com'}
                      required
                      type="text"
                      value={contactInfo}
                      onChange={(e) => setContactInfo(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block font-label-sm text-label-sm uppercase tracking-wider text-muted-slate mb-1">
                      {isRTL ? 'الوحدة السكنية المفضلة' : 'Preferred Typology'}
                    </label>
                    <select
                      className="w-full bg-surface-container-lowest px-space-md py-space-xs text-on-surface text-body-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all border border-transparent focus:border-primary cursor-pointer"
                      value={typology}
                      onChange={(e) => setTypology(e.target.value)}
                    >
                      <option value="Four Bedroom Royal Sky Penthouse">
                        {isRTL ? 'بنتهاوس رويال سكاي 4 غرف' : 'Four Bedroom Royal Sky Penthouse'}
                      </option>
                      <option value="Three Bedroom Horizon Residence">
                        {isRTL ? 'شقة هورايزون 3 غرف نوم' : 'Three Bedroom Horizon Residence'}
                      </option>
                      <option value="Two Bedroom Signature Residence">
                        {isRTL ? 'شقة سيجنتشر غرفتان نوم' : 'Two Bedroom Signature Residence'}
                      </option>
                      <option value="One Bedroom Coastal Residence">
                        {isRTL ? 'شقة كوستال غرفة نوم واحدة' : 'One Bedroom Coastal Residence'}
                      </option>
                      <option value="Multiple Unit Investment Inquiry">
                        {isRTL ? 'استفسار استثماري لوحدات متعددة' : 'Multiple Unit Investment Inquiry'}
                      </option>
                    </select>
                  </div>

                  <button
                    className="mt-space-xs w-full py-space-sm font-label-md text-label-md uppercase tracking-widest text-midnight-black font-semibold bg-[linear-gradient(135deg,#FAECCD_0%,#DFB76E_50%,#BA8733_100%)] shadow-md hover:brightness-110 transition-all cursor-pointer font-bold"
                    type="submit"
                  >
                    {isRTL ? 'طلب الكتيب الخاص وحجز الموعد' : 'Request Private Dossier & Booking'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
