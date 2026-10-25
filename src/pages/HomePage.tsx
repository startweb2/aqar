import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { BalconyScene } from '../components/home/BalconyScene';
import { EleganceDetails } from '../components/home/EleganceDetails';
import { SpacesPreview } from '../components/home/SpacesPreview';
import { AmenitiesSection } from '../components/home/AmenitiesSection';
import { ArchitecturalLayout } from '../components/home/ArchitecturalLayout';
import { MonographGallery } from '../components/home/MonographGallery';
import { DestinationMap } from '../components/home/DestinationMap';
import { InquiryCTA } from '../components/home/InquiryCTA';

export interface HomePageProps {
  readonly title?: string;
}

export const HomePage: React.FC<Readonly<HomePageProps>> = () => {
  return (
    <main className="w-full pt-20 bg-background">
      <HeroSection />
      <BalconyScene />
      <EleganceDetails />
      <SpacesPreview />
      <AmenitiesSection />
      <ArchitecturalLayout />
      <MonographGallery />
      <DestinationMap />
      <InquiryCTA />
    </main>
  );
};
