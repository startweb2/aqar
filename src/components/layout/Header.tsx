import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export interface HeaderProps {
  readonly onBookTourClick?: () => void;
}

export const Header: React.FC<Readonly<HeaderProps>> = () => {
  const location = useLocation();
  const { language, setLanguage, isRTL, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: t('nav_home', 'Home') },
    { path: '/residences', label: t('nav_residences', 'Residences') },
    { path: '/floor-plans', label: t('nav_floorplans', 'Floor Plans') },
    { path: '/contact', label: t('nav_contact', 'Contact') },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#071820]/95 backdrop-blur-md border-b border-primary-container/20 shadow-[0_2px_15px_rgba(0,0,0,0.4)]">
      <div className="h-20 max-w-[1600px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between gap-gutter">
        {/* Brand Logo & Title Link */}
        <div className="flex items-center gap-space-md">
          <Link to="/" className="flex items-center gap-3 group">
            {/* The Brand Logo Image */}
            <img
              alt="أبراج العلمين - Alamein Towers"
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              src="/logo-ar.png"
              onError={(e) => {
                // Fallback if image fails
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            {/* Complementary Bilingual Typography */}
            <div className={`hidden sm:flex flex-col ${isRTL ? 'text-right' : 'text-left'}`}>
              <span className="font-label-md text-label-md tracking-[0.2em] uppercase text-warm-ivory group-hover:text-primary transition-colors">
                {isRTL ? 'أبراج العلمين' : 'ALAMEIN TOWERS'}
              </span>
              <span className="font-label-sm text-[10px] uppercase tracking-[0.22em] text-primary">
                {isRTL ? 'إطلالة ساحلية فاخرة' : 'Mediterranean Luxury'}
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-gutter">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`font-label-md text-label-md uppercase tracking-wider py-space-xs transition-colors relative ${
                  isActive
                    ? 'text-primary font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r from-primary via-primary-container to-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-space-md">
          {/* Language Switcher */}
          <div className="inline-flex items-center bg-surface-container-lowest/90 p-1 border border-outline-variant/30 rounded-sm">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 font-label-sm text-label-sm uppercase transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-primary text-midnight-black font-bold shadow-sm'
                  : 'text-on-surface-variant hover:text-warm-ivory'
              }`}
              type="button"
              title="English"
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('ar')}
              className={`px-3 py-1 font-label-sm text-label-sm uppercase transition-all cursor-pointer ${
                language === 'ar'
                  ? 'bg-primary text-midnight-black font-bold shadow-sm'
                  : 'text-on-surface-variant hover:text-warm-ivory'
              }`}
              type="button"
              title="العربية"
            >
              عربي
            </button>
          </div>

          {/* Book a Private Tour Button */}
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center font-label-md text-label-md uppercase tracking-wider text-midnight-black px-space-lg py-2.5 shadow-[0_4px_20px_rgba(223,183,110,0.25)] hover:shadow-[0_4px_28px_rgba(223,183,110,0.45)] transition-all bg-[linear-gradient(135deg,#FAECCD_0%,#DFB76E_50%,#BA8733_100%)] hover:brightness-110 font-bold"
          >
            {t('btn_book_tour', 'Book a Private Tour')}
          </Link>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-10 h-10 flex items-center justify-center text-primary bg-surface-container-low border border-primary/20 hover:bg-surface-container transition-colors"
            type="button"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-midnight-black/95 border-b border-primary-container/30 px-margin py-space-md flex flex-col gap-space-sm animate-fadeIn">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-label-md text-label-md uppercase py-2 border-b border-outline-variant/20 ${
                location.pathname === item.path ? 'text-primary font-bold' : 'text-warm-ivory'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center py-2.5 font-label-md text-label-md uppercase tracking-wider text-midnight-black bg-[linear-gradient(135deg,#FAECCD_0%,#DFB76E_50%,#BA8733_100%)] font-bold shadow-md"
          >
            {t('btn_book_tour', 'Book a Private Tour')}
          </Link>
        </div>
      )}
    </header>
  );
};
