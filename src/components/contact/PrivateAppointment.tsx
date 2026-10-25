import React from 'react';
import { useAppointmentForm } from '../../hooks/useAppointmentForm';
import { useLanguage } from '../../context/LanguageContext';

export interface PrivateAppointmentProps {
  readonly title?: string;
  readonly subtitle?: string;
  readonly badgeText?: string;
  readonly demoBadgeText?: string;
}

const RESIDENCE_OPTIONS = [
  '1 Bedroom',
  '2 Bed Signature',
  '3 Bed Horizon',
  'Sky Penthouse',
  'Duplex Villa',
  'Multiple / Invest',
] as const;

export const PrivateAppointment: React.FC<Readonly<PrivateAppointmentProps>> = (props) => {
  const { t, isRTL } = useLanguage();
  const {
    formData,
    updateField,
    isSubmitting,
    isSubmitted,
    handleSubmit,
    resetForm,
  } = useAppointmentForm();

  const title = props.title || t('contact_form_title', 'Request a Private Appointment');
  const subtitle =
    props.subtitle ||
    t(
      'contact_form_desc',
      'Please register your prospective interest below. An executive advisory director will respond within 4 business hours to arrange your customized engagement.'
    );
  const badgeText = props.badgeText || (isRTL ? 'استشارة سرية وخاصة' : 'Confidential Consultation');
  const demoBadgeText = props.demoBadgeText || (isRTL ? 'معرض حصري' : 'PORTFOLIO DEMO');

  return (
    <div className="bg-surface-container-low/90 backdrop-blur-2xl p-space-md md:p-space-xl shadow-2xl relative">
      {/* Specular Edge Accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-container to-transparent" />

      {/* Form Header Block */}
      <div className="flex flex-col gap-space-xs mb-space-lg">
        <div className="flex items-center justify-between">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-primary font-bold">
            {badgeText}
          </span>
          <span className="font-label-sm text-label-sm tracking-widest text-outline">
            {demoBadgeText}
          </span>
        </div>
        <h2 className="font-headline-lg text-headline-lg text-warm-ivory">{title}</h2>
        <p className="font-body-sm text-body-sm text-sand-beige/80">{subtitle}</p>
      </div>

      {isSubmitted ? (
        /* Success Confirmation State */
        <div className="flex flex-col items-center justify-center text-center p-space-xl bg-surface-container my-space-md">
          <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-space-sm">
            <span className="material-symbols-outlined text-[36px]">check_circle</span>
          </div>
          <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-primary mb-1">
            {isRTL ? 'تم تأكيد طلب الموعد بنجاح' : 'Appointment Confirmed'}
          </span>
          <h3 className="font-headline-md text-headline-md text-warm-ivory mb-space-xs">
            {isRTL ? 'بدأت ترتيبات جلستك الاستشارية الخاصة' : 'Your Private Briefing is Initiated'}
          </h3>
          <p className="font-body-md text-body-md text-sand-beige/80 max-w-md mb-space-md leading-relaxed">
            {isRTL
              ? `شكراً لتواصلك، ${formData.fullName || 'ضيفنا الكريم'}. تم إشعار مدير مكتب كبار العملاء وسيقوم بالتواصل معك لتحديد الجدول الخاص بك وتقديم كراسة المشروع المعمارية.`
              : `Thank you for your inquiry, ${formData.fullName || 'esteemed guest'}. A designated Private Client Director has been notified and will deliver your customized schedule along with the architectural collection prospectus.`}
          </p>
          <button
            onClick={resetForm}
            type="button"
            className="font-label-md text-label-md uppercase tracking-widest text-primary hover:text-gold-light underline underline-offset-4 cursor-pointer font-bold"
          >
            {isRTL ? 'إرسال طلب آخر' : 'Send Another Request'}
          </button>
        </div>
      ) : (
        /* Interactive Form */
        <form className="flex flex-col gap-space-md" onSubmit={handleSubmit}>
          {/* Row 1: Full Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label
                className="font-label-sm text-label-sm uppercase tracking-[0.14em] text-sand-beige"
                htmlFor="fullName"
              >
                {isRTL ? 'الاسم الكامل' : 'Full Name'} <span className="text-primary">*</span>
              </label>
              <div className="relative">
                <input
                  id="fullName"
                  name="fullName"
                  required
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => updateField('fullName', e.target.value)}
                  placeholder={isRTL ? 'الاسم الكريم / اللقب' : 'e.g. Lord / Mr. / Dr. Alexander Vance'}
                  className="w-full bg-midnight-black/70 px-space-md py-space-sm font-body-md text-body-md text-on-surface placeholder:text-outline-variant/60 focus:outline-none focus:bg-surface-container transition-all border border-transparent focus:border-primary"
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-1.5">
              <label
                className="font-label-sm text-label-sm uppercase tracking-[0.14em] text-sand-beige"
                htmlFor="emailAddress"
              >
                {isRTL ? 'البريد الإلكتروني الخاص' : 'Private Email Address'} <span className="text-primary">*</span>
              </label>
              <div className="relative">
                <input
                  id="emailAddress"
                  name="emailAddress"
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  placeholder="name@domain.com"
                  className="w-full bg-midnight-black/70 px-space-md py-space-sm font-body-md text-body-md text-on-surface placeholder:text-outline-variant/60 focus:outline-none focus:bg-surface-container transition-all border border-transparent focus:border-primary"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Telephone / WhatsApp with Country Code */}
          <div className="flex flex-col gap-1.5">
            <label
              className="font-label-sm text-label-sm uppercase tracking-[0.14em] text-sand-beige"
              htmlFor="phoneNumber"
            >
              {isRTL ? 'رقم الهاتف المباشر / واتساب' : 'Direct Telephone / WhatsApp'} <span className="text-primary">*</span>
            </label>
            <div className="grid grid-cols-12 gap-space-xs">
              <select
                id="countryCode"
                name="countryCode"
                value={formData.countryCode}
                onChange={(e) => updateField('countryCode', e.target.value)}
                className="col-span-4 sm:col-span-3 bg-midnight-black/70 px-space-sm py-space-sm font-body-md text-body-md text-sand-beige focus:outline-none focus:bg-surface-container cursor-pointer border border-transparent focus:border-primary"
              >
                <option value="EG (+20)">مصر (+20)</option>
                <option value="UAE (+971)">الإمارات (+971)</option>
                <option value="KSA (+966)">السعودية (+966)</option>
                <option value="QA (+974)">قطر (+974)</option>
                <option value="KW (+965)">الكويت (+965)</option>
                <option value="UK (+44)">بريطانيا (+44)</option>
                <option value="USA (+1)">أمريكا (+1)</option>
                <option value="CH (+41)">سويسرا (+41)</option>
              </select>
              <input
                id="phoneNumber"
                name="phoneNumber"
                required
                type="tel"
                value={formData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                placeholder="100 123 4567"
                className="col-span-8 sm:col-span-9 bg-midnight-black/70 px-space-md py-space-sm font-body-md text-body-md text-on-surface placeholder:text-outline-variant/60 focus:outline-none focus:bg-surface-container transition-all border border-transparent focus:border-primary"
              />
            </div>
          </div>

          {/* Residence Type Selection Chips */}
          <div className="flex flex-col gap-space-xs pt-space-xs">
            <label className="font-label-sm text-label-sm uppercase tracking-[0.14em] text-sand-beige">
              {isRTL ? 'نوع الوحدة السكنية المفضلة' : 'Residence Type of Interest'} <span className="text-primary">*</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {RESIDENCE_OPTIONS.map((option) => {
                const isSelected = formData.residenceType === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => updateField('residenceType', option)}
                    className={`text-left px-space-sm py-space-xs font-label-sm text-label-sm uppercase transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-primary-container/20 text-primary font-bold shadow-sm border border-primary/40'
                        : 'bg-surface-container-highest/40 text-sand-beige hover:bg-surface-container-highest border border-transparent'
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Preferred Appointment Type */}
          <div className="flex flex-col gap-1.5 pt-space-xs">
            <label
              className="font-label-sm text-label-sm uppercase tracking-[0.14em] text-sand-beige"
              htmlFor="appointmentType"
            >
              {isRTL ? 'طبيعة اللقاء والمقابلة' : 'Preferred Appointment Experience'} <span className="text-primary">*</span>
            </label>
            <select
              id="appointmentType"
              name="appointmentType"
              value={formData.experienceType}
              onChange={(e) => updateField('experienceType', e.target.value)}
              className="w-full bg-midnight-black/70 px-space-md py-space-sm font-body-md text-body-md text-warm-ivory focus:outline-none focus:bg-surface-container cursor-pointer border border-transparent focus:border-primary"
            >
              <option value="Private On-Site Viewing in New Alamein">
                {isRTL ? 'معاينة حصرية في موقع المشروع بالعلمين الجديدة' : 'Private On-Site Viewing in New Alamein'}
              </option>
              <option value="Digital Video Walkthrough & VR Presentation">
                {isRTL ? 'جلسة افتراضية رقمية 3D مع مستشارنا' : 'Digital Video Walkthrough & VR Presentation'}
              </option>
              <option value="Private Meeting in Cairo / Alexandria">
                {isRTL ? 'لقاء خاص بمقر الشركة في القاهرة / الإسكندرية' : 'Private Meeting in Cairo / Alexandria'}
              </option>
            </select>
          </div>

          {/* Preferred Date & Time Slot */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">
            <div className="flex flex-col gap-1.5">
              <label
                className="font-label-sm text-label-sm uppercase tracking-[0.14em] text-sand-beige"
                htmlFor="preferredDate"
              >
                {isRTL ? 'التاريخ المفضل' : 'Preferred Date'} <span className="text-primary">*</span>
              </label>
              <input
                id="preferredDate"
                name="preferredDate"
                required
                type="date"
                value={formData.preferredDate}
                onChange={(e) => updateField('preferredDate', e.target.value)}
                className="w-full bg-midnight-black/70 px-space-md py-space-sm font-body-md text-body-md text-on-surface focus:outline-none focus:bg-surface-container transition-all border border-transparent focus:border-primary"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label
                className="font-label-sm text-label-sm uppercase tracking-[0.14em] text-sand-beige"
                htmlFor="timeSlot"
              >
                {isRTL ? 'الوقت المناسب' : 'Preferred Time Window (EET)'} <span className="text-primary">*</span>
              </label>
              <select
                id="timeSlot"
                name="timeSlot"
                value={formData.preferredTime}
                onChange={(e) => updateField('preferredTime', e.target.value)}
                className="w-full bg-midnight-black/70 px-space-md py-space-sm font-body-md text-body-md text-warm-ivory focus:outline-none focus:bg-surface-container cursor-pointer border border-transparent focus:border-primary"
              >
                <option value="Morning (10:00 AM – 1:00 PM)">
                  {isRTL ? 'الفترة الصباحية (10:00 ص – 1:00 م)' : 'Morning (10:00 AM – 1:00 PM)'}
                </option>
                <option value="Afternoon (1:00 PM – 4:00 PM)">
                  {isRTL ? 'فترة الظهيرة (1:00 م – 4:00 م)' : 'Afternoon (1:00 PM – 4:00 PM)'}
                </option>
                <option value="Sunset / Dusk (4:00 PM – 6:00 PM)">
                  {isRTL ? 'وقت الغروب (4:00 م – 6:00 م)' : 'Sunset / Dusk (4:00 PM – 6:00 PM)'}
                </option>
              </select>
            </div>
          </div>

          {/* Personal Notes */}
          <div className="flex flex-col gap-1.5 pt-space-xs">
            <div className="flex items-center justify-between">
              <label
                className="font-label-sm text-label-sm uppercase tracking-[0.14em] text-sand-beige"
                htmlFor="personalNotes"
              >
                {isRTL ? 'ملاحظات أو مواصفات خاصة ترغب بها' : 'Personal Specifications / Architectural Notes'}
              </label>
              <span className="font-label-sm text-label-sm text-outline">
                {isRTL ? 'اختياري' : 'OPTIONAL'}
              </span>
            </div>
            <textarea
              id="personalNotes"
              name="personalNotes"
              rows={3}
              value={formData.notes}
              onChange={(e) => updateField('notes', e.target.value)}
              placeholder={
                isRTL
                  ? 'اذكر أية تفاصيل خاصة بالطابق المفضل، الإطلالة البحرية، أو المخطط المطلوب...'
                  : 'Share details regarding requested floor tiers, panoramic sea orientations, special accommodations, or investment criteria...'
              }
              className="w-full bg-midnight-black/70 px-space-md py-space-sm font-body-md text-body-md text-on-surface placeholder:text-outline-variant/60 focus:outline-none focus:bg-surface-container transition-all resize-none border border-transparent focus:border-primary"
            />
          </div>

          {/* Curated Updates Checkbox */}
          <div className="flex items-start gap-space-sm pt-space-xs">
            <input
              id="curatedUpdates"
              name="curatedUpdates"
              type="checkbox"
              checked={formData.newsletterConsent}
              onChange={(e) => updateField('newsletterConsent', e.target.checked)}
              className="mt-1 w-4 h-4 bg-midnight-black accent-primary rounded-none cursor-pointer"
            />
            <label
              className="font-body-sm text-body-sm text-sand-beige/90 cursor-pointer select-none"
              htmlFor="curatedUpdates"
            >
              {isRTL
                ? 'أرغب في استلام الكتيبات المعمارية الدورية وتقارير السوق العقاري الحصرية لأبراج العلمين.'
                : 'I would like to receive the curated conceptual architectural monographs, floor plate releases, and private market perspectives from Alamein Towers.'}
            </label>
          </div>

          {/* Submission CTA */}
          <div className="pt-space-sm flex flex-col gap-space-xs">
            <button
              id="submitBtn"
              type="submit"
              disabled={isSubmitting}
              className="w-full py-space-md px-space-lg font-label-lg text-label-lg uppercase tracking-[0.15em] text-midnight-black font-bold shadow-[0_4px_25px_rgba(223,183,110,0.3)] hover:shadow-[0_4px_35px_rgba(223,183,110,0.5)] transition-all bg-[linear-gradient(135deg,#FAECCD_0%,#DFB76E_50%,#BA8733_100%)] hover:brightness-105 active:scale-[0.99] flex items-center justify-center gap-space-sm cursor-pointer disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-[18px]">
                    progress_activity
                  </span>
                  <span>{isRTL ? 'جاري تسجيل طلبك بسرية...' : 'Registering Discretionary Inquiry...'}</span>
                </>
              ) : (
                <>
                  <span>{t('contact_submit', 'Submit Private Inquiry')}</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </>
              )}
            </button>
            <div className="flex items-center justify-center gap-space-xs text-center pt-space-xs text-outline">
              <span className="material-symbols-outlined text-[16px] text-primary">
                verified_user
              </span>
              <span className="font-body-sm text-body-sm text-sand-beige/70">
                {isRTL
                  ? 'خصوصية وسرية تامة مضمونة. يتم التعامل مع بيانات العملاء وفق أعلى معايير الأمان.'
                  : 'Complete privacy and discretion assured. Client data is handled according to strict confidentiality standards.'}
              </span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
