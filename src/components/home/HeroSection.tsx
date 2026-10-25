import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

export interface HeroSectionProps {
  readonly onExploreClick?: () => void;
}

const TOTAL_FRAMES = 210;

export const HeroSection: React.FC<Readonly<HeroSectionProps>> = () => {
  const { language, isRTL, t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentFrameIndex, setCurrentFrameIndex] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [showVideoModal, setShowVideoModal] = useState<boolean>(false);

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameIndexRef = useRef<number>(0);
  const animFrameIdRef = useRef<number | null>(null);

  // Preload initial frames and initialize canvas
  useEffect(() => {
    let isCancelled = false;
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);

    const getFrameUrl = (idx: number) => {
      const padded = String(idx + 1).padStart(3, '0');
      return `/hero-sequence/ezgif-frame-${padded}.jpg`;
    };

    // Load initial frame immediately
    const firstImg = new Image();
    firstImg.src = getFrameUrl(0);
    firstImg.onload = () => {
      if (!isCancelled) {
        images[0] = firstImg;
        imagesRef.current = images;
        setIsLoaded(true);
        drawFrame(0);
      }
    };

    // Buffer the remaining frames progressively
    for (let i = 1; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      img.onload = () => {
        if (!isCancelled) {
          images[i] = img;
        }
      };
    }

    return () => {
      isCancelled = true;
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[index] || imagesRef.current[0];
    if (!img || !img.complete) return;

    // High DPI Canvas Scaling & Cover aspect ratio
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    const imgRatio = img.naturalWidth / img.naturalHeight || 16 / 9;
    const canvasRatio = width / height;

    let renderW: number;
    let renderH: number;
    let offsetX: number;
    let offsetY: number;

    if (canvasRatio > imgRatio) {
      renderW = width;
      renderH = width / imgRatio;
      offsetX = 0;
      offsetY = (height - renderH) / 2;
    } else {
      renderH = height;
      renderW = height * imgRatio;
      offsetX = (width - renderW) / 2;
      offsetY = 0;
    }

    ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
    ctx.restore();
  };

  // Continuous luxury animation playback loop
  useEffect(() => {
    let lastTime = performance.now();
    const fps = 24;
    const interval = 1000 / fps;

    const animate = (now: number) => {
      if (isPlaying) {
        const delta = now - lastTime;
        if (delta >= interval) {
          lastTime = now - (delta % interval);
          frameIndexRef.current = (frameIndexRef.current + 1) % TOTAL_FRAMES;
          setCurrentFrameIndex(frameIndexRef.current);
          drawFrame(frameIndexRef.current);
        }
      }
      animFrameIdRef.current = requestAnimationFrame(animate);
    };

    animFrameIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [isPlaying]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      drawFrame(frameIndexRef.current);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative w-full min-h-[960px] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-midnight-black -mt-20 pt-28 pb-16">
      {/* Cinematic 3D Canvas Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: isLoaded ? 1 : 0.4 }}
        />

        {/* Ambient Dark Scrim & Golden Glow Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-midnight-black/55 to-midnight-black/75 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(223,183,110,0.1)_0%,transparent_75%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,9,14,0.85)_0%,transparent_60%)] pointer-events-none" />
      </div>

      {/* Top Structural Metadata Coordinates Ribbon */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop pt-6 flex items-center justify-between">
        <div className="flex items-center gap-space-sm bg-surface-container-low/80 backdrop-blur-md px-4 py-1.5 border border-primary/25 rounded-sm shadow-lg">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
          <span className="font-label-sm text-label-sm tracking-[0.25em] uppercase text-primary font-bold">
            {isRTL ? 'معمار العلمين الجديدة • ساحل البحر المتوسط' : 'SCENE 01 — COASTAL ARRIVAL'}
          </span>
        </div>
        <div className="hidden md:flex items-center gap-space-md text-sand-beige/80 bg-surface-container-low/60 backdrop-blur-md px-4 py-1.5 border border-outline-variant/30 text-xs">
          <span className="font-label-sm tracking-widest uppercase">
            30°50&apos;22&quot;N 28°57&apos;14&quot;E
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
          <span className="font-label-sm tracking-widest uppercase">
            {isRTL ? 'ارتفاع الأبراج: 180 متراً' : 'MEDITERRANEAN ELEVATION 180M'}
          </span>
        </div>
      </div>

      {/* Main Hero Narrative Content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop my-auto py-12 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
        <div className="max-w-3xl flex flex-col items-start">
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 bg-surface-container-high/90 backdrop-blur-md shadow-lg border border-primary/30">
            <span className="material-symbols-outlined text-primary text-[16px]">stars</span>
            <span className="font-label-sm text-label-sm tracking-[0.25em] uppercase text-primary font-bold">
              {t('hero_badge', 'EXCLUSIVE SEAFRONT LIVING')}
            </span>
          </div>

          {/* Dynamic Headline with Shimmering Champagne Gold Gradient */}
          <h1 className="font-display-xl text-display-xl text-warm-ivory mb-6 max-w-2xl leading-[1.08] tracking-tight">
            {t('hero_title_l1', 'A New Standard')}{' '}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(135deg,#FAECCD_0%,#DFB76E_50%,#BA8733_100%)] animate-shimmer">
              {t('hero_title_l2', 'of Coastal Luxury.')}
            </span>
          </h1>

          {/* Editorial Paragraph */}
          <p className="font-body-xl text-body-xl text-sand-beige/90 max-w-xl mb-10 leading-relaxed font-light">
            {t(
              'hero_desc',
              'Experience an extraordinary coastal lifestyle in New Alamein, where sculptural architectural purity, boundless azure sea horizons, and ultra-prime residences converge in supreme serenity.'
            )}
          </p>

          {/* Action Button Cluster */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <Link
              to="/residences"
              className="inline-flex items-center justify-center gap-2 font-label-md text-label-md uppercase tracking-wider text-midnight-black px-space-lg py-4 shadow-[0_4px_25px_rgba(223,183,110,0.35)] hover:shadow-[0_4px_35px_rgba(223,183,110,0.55)] hover:brightness-110 transition-all bg-[linear-gradient(135deg,#FAECCD_0%,#DFB76E_50%,#BA8733_100%)] font-bold text-center group cursor-pointer"
            >
              <span>{t('hero_cta_explore', 'Explore Residences')}</span>
              <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>

            <Link
              to="/floor-plans"
              className="inline-flex items-center justify-center gap-2 font-label-md text-label-md uppercase tracking-wider text-warm-ivory px-space-lg py-4 bg-surface-container-high/80 hover:bg-surface-container-highest transition-colors shadow-lg border border-primary/30 text-center hover:border-primary group cursor-pointer"
            >
              <span className="material-symbols-outlined text-primary text-[18px]">architecture</span>
              <span>{t('hero_cta_floorplans', 'Floor Plans Explorer')}</span>
            </Link>

            {/* Cinematic Film Trigger */}
            <button
              onClick={() => setShowVideoModal(true)}
              type="button"
              className="inline-flex items-center justify-center gap-2 font-label-md text-label-md uppercase tracking-wider text-primary hover:text-warm-ivory px-4 py-4 transition-colors cursor-pointer group"
            >
              <span className="w-10 h-10 rounded-full border border-primary/50 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                <span className="material-symbols-outlined text-[20px]">play_arrow</span>
              </span>
              <span className="text-xs tracking-widest">{t('hero_cta_video', 'Watch Film')}</span>
            </button>
          </div>
        </div>

        {/* Hero Architectural Highlights Card */}
        <div className="lg:w-88 p-6 bg-surface-container/90 backdrop-blur-2xl border border-primary-container/30 shadow-2xl flex flex-col gap-5">
          <div className="flex items-center justify-between pb-3 border-b border-primary-container/20">
            <span className="font-label-sm text-label-sm text-primary tracking-[0.2em] uppercase font-bold">
              {isRTL ? 'مواصفات حصرية' : 'ARCHITECTURAL INDEX'}
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-[22px] mt-0.5">apartment</span>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-warm-ivory font-bold">
                  {t('stat_floors_val', 'Levels 08 — 44')}
                </span>
                <span className="font-body-sm text-body-sm text-sand-beige/70">
                  {t('stat_floors_lbl', 'Sky Duplexes & Suites')}
                </span>
              </div>
            </div>

            <div className="w-full h-px bg-surface-container-highest/60" />

            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-[22px] mt-0.5">height</span>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-warm-ivory font-bold">
                  {t('stat_ceilings_val', '3.40m — 6.0m')}
                </span>
                <span className="font-body-sm text-body-sm text-sand-beige/70">
                  {t('stat_ceilings_lbl', 'Clear Ceiling Heights')}
                </span>
              </div>
            </div>

            <div className="w-full h-px bg-surface-container-highest/60" />

            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-[22px] mt-0.5">deck</span>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-warm-ivory font-bold">
                  {t('stat_terrace_val', '3.2m Cantilever')}
                </span>
                <span className="font-body-sm text-body-sm text-sand-beige/70">
                  {t('stat_terrace_lbl', 'Seafront Balconies')}
                </span>
              </div>
            </div>

            <div className="w-full h-px bg-surface-container-highest/60" />

            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-[22px] mt-0.5">sailing</span>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-warm-ivory font-bold">
                  {t('stat_marina_val', 'Superyacht Berths')}
                </span>
                <span className="font-body-sm text-body-sm text-sand-beige/70">
                  {t('stat_marina_lbl', 'Private Marina Promenade')}
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Player Controls in Bottom of Card */}
          <div className="pt-2 border-t border-primary-container/20 flex items-center justify-between text-xs text-sand-beige/70">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              type="button"
              className="flex items-center gap-1.5 text-primary hover:text-warm-ivory transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">
                {isPlaying ? 'pause' : 'play_arrow'}
              </span>
              <span>{isPlaying ? (isRTL ? 'إيقاف الحركة' : 'Pause Sequence') : (isRTL ? 'تشغيل' : 'Play Sequence')}</span>
            </button>
            <span className="font-mono text-[11px] text-muted-slate">
              {String(currentFrameIndex + 1).padStart(3, '0')} / {TOTAL_FRAMES}
            </span>
          </div>
        </div>
      </div>

      {/* Video Modal Walkthrough */}
      {showVideoModal && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
          onClick={() => setShowVideoModal(false)}
        >
          <div
            className="relative w-full max-w-5xl bg-surface-container-low border border-primary-container/40 p-4 shadow-2xl flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-primary/20">
              <div className="flex items-center gap-2 text-primary font-label-md text-label-md uppercase tracking-wider">
                <span className="material-symbols-outlined text-[20px]">movie</span>
                <span>{isRTL ? 'الجولة المعمارية السينمائية — أبراج العلمين' : 'Cinematic Architectural Walkthrough'}</span>
              </div>
              <button
                onClick={() => setShowVideoModal(false)}
                className="w-8 h-8 rounded-full bg-surface-container hover:bg-primary hover:text-midnight-black text-warm-ivory flex items-center justify-center transition-colors cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <div className="relative aspect-video w-full bg-black overflow-hidden shadow-inner flex items-center justify-center">
              <img
                src="/hero-sequence/ezgif-frame-001.jpg"
                alt="Alamein Towers Panoramic Walkthrough"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div className="flex flex-col text-warm-ivory">
                  <span className="font-label-sm text-primary uppercase tracking-widest">
                    {isRTL ? 'الساحل الشمالي • العلمين الجديدة' : 'North Coast • New Alamein'}
                  </span>
                  <h3 className="font-headline-md text-headline-md">
                    {isRTL ? 'تجربة الحياة الفاخرة المطلة على الأفق' : 'An Unrivaled Mediterranean Sky Sanctuary'}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
