import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Award, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { heroSlides } from '../data/heroSlides';

export const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const totalSlides = heroSlides.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const current = heroSlides[currentSlide];

  return (
    <section
      className="relative w-full h-[460px] sm:h-[520px] md:h-[580px] lg:h-[640px] bg-slate-900 overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Campus Hero Carousel"
    >
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {heroSlides.map((slide, idx) => {
          const isActive = idx === currentSlide;
          const hasError = imageErrors[slide.id];

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Slide Image or High-Fidelity Architectural SVG Fallback */}
              {!hasError ? (
                <img
                  src={slide.image}
                  alt={slide.title}
                  onError={() => handleImageError(slide.id)}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000"
                />
              ) : (
                /* High-Fidelity Institutional Campus Visual Pattern Fallback */
                <div className="w-full h-full bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 relative flex items-center justify-center">
                  <div className="absolute inset-0 opacity-15">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="campus-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="1" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#campus-grid)" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Multi-layered Cinematic Gradient Scrim for Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/60 to-slate-950/40" />
              <div className="absolute inset-0 bg-radial at-center from-transparent via-slate-950/30 to-slate-950/70" />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-3xl text-left">
                    
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-amber-400 text-blue-950 text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-3 sm:mb-4 shadow-sm">
                      <Award className="w-4 h-4 shrink-0" />
                      <span>{slide.badge}</span>
                    </div>

                    {/* Main Title */}
                    <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-extrabold font-serif-college text-white tracking-tight leading-tight sm:leading-snug mb-3">
                      {slide.title}
                    </h2>

                    {/* Subtitle */}
                    <p className="text-sm sm:text-base md:text-lg font-semibold text-amber-200 mb-3">
                      {slide.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm md:text-base text-slate-200 max-w-2xl mb-6 leading-relaxed hidden sm:block">
                      {slide.description}
                    </p>

                    {/* Primary & Secondary Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3">
                      <Link
                        to={slide.ctaLink}
                        className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-blue-950 font-bold text-xs sm:text-sm rounded shadow-md transition-all transform hover:-translate-y-0.5"
                      >
                        <span>{slide.ctaText}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <Link
                        to="/admission"
                        className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-white/10 hover:bg-white/20 active:bg-white/30 text-white font-semibold text-xs sm:text-sm rounded border border-white/30 backdrop-blur-xs transition-colors"
                      >
                        <span>Enquiry 2026-27</span>
                      </Link>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        type="button"
        aria-label="Previous Slide"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white border border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-amber-400"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={nextSlide}
        type="button"
        aria-label="Next Slide"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white border border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-amber-400"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Wireframe Dot Indicators: ● ● ● ● */}
      <div 
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 sm:gap-3 bg-slate-900/70 px-4 py-2 rounded-full border border-white/10 backdrop-blur-xs"
        role="tablist"
        aria-label="Carousel Slides"
      >
        {heroSlides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(idx)}
            type="button"
            role="tab"
            aria-selected={idx === currentSlide}
            aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
            className={`transition-all rounded-full ${
              idx === currentSlide
                ? 'w-6 sm:w-7 h-2.5 sm:h-3 bg-amber-400 shadow-sm'
                : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

    </section>
  );
};
