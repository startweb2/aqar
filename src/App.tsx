import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ResidencesPage } from './pages/ResidencesPage';
import { FloorPlansPage } from './pages/FloorPlansPage';
import { ContactPage } from './pages/ContactPage';

export interface AppProps {
  readonly initialPath?: string;
}

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent: React.FC = () => {
  const { isRTL } = useLanguage();

  return (
    <div className={`min-h-screen flex flex-col bg-background text-on-surface ${isRTL ? 'font-arabic' : 'font-body'}`}>
      <Header />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/residences" element={<ResidencesPage />} />
          <Route path="/floor-plans" element={<FloorPlansPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Seamless aliases for header & footer exploration links */}
          <Route path="/book-a-tour" element={<ContactPage />} />
          <Route path="/amenities" element={<HomePage />} />
          <Route path="/about" element={<HomePage />} />
          <Route path="/gallery" element={<HomePage />} />
          <Route path="/location" element={<HomePage />} />

          {/* Fallback to Home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export const App: React.FC<Readonly<AppProps>> = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppContent />
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
