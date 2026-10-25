import { useState, FormEvent } from 'react';

export interface AppointmentFormData {
  fullName: string;
  email: string;
  countryCode: string;
  phone: string;
  residenceType: string;
  experienceType: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
  newsletterConsent: boolean;
}

export function useAppointmentForm() {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    email: '',
    countryCode: 'EG (+20)',
    phone: '',
    residenceType: '2 Bed Signature',
    experienceType: 'Private On-Site Viewing in New Alamein',
    preferredDate: '2026-10-26',
    preferredTime: 'Sunset / Dusk (4:00 PM – 6:00 PM)',
    notes: '',
    newsletterConsent: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = (field: keyof AppointmentFormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      countryCode: 'EG (+20)',
      phone: '',
      residenceType: '2 Bed Signature',
      experienceType: 'Private On-Site Viewing in New Alamein',
      preferredDate: '2026-10-26',
      preferredTime: 'Sunset / Dusk (4:00 PM – 6:00 PM)',
      notes: '',
      newsletterConsent: true,
    });
  };

  return {
    formData,
    updateField,
    handleSubmit,
    isSubmitting,
    isSubmitted,
    resetForm,
  };
}
