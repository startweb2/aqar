import React from 'react';
import { PavilionDetails } from '../components/contact/PavilionDetails';
import { PrivateAppointment } from '../components/contact/PrivateAppointment';
import { VipServices } from '../components/contact/VipServices';

export interface ContactPageProps {
  readonly title?: string;
}

export const ContactPage: React.FC<Readonly<ContactPageProps>> = () => {
  return (
    <main className="w-full pt-20 bg-background">
      <div className="flex flex-col w-full">
        {/* Atmospheric Background Glow Elements */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-secondary-container/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-[160px] pointer-events-none" />

          {/* Main Container */}
          <div className="max-w-[1600px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl">
            {/* Split Screen Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
              {/* Left Column: The Experience & Destination Context (5 cols) */}
              <div className="lg:col-span-5">
                <PavilionDetails />
              </div>

              {/* Right Column: The Bespoke Tour Request Form (7 cols) */}
              <div className="lg:col-span-7">
                <PrivateAppointment />
              </div>
            </div>

            {/* Bottom Advisory Accents / Concierge Assurance Strip */}
            <VipServices />
          </div>
        </div>
      </div>
    </main>
  );
};
