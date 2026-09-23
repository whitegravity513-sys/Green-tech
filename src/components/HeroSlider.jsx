import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: "slide-1",
    headline: "Powering Better Workspaces Through Smarter Industrial Solutions",
    subline: "High-performance industrial air coolers, exhaust fans, and factory equipment engineered for Indian industry.",
    image: "/images/factory/about-factory.jpg",
    primaryLink: "/products",
    primaryText: "Explore Products",
    secondaryLink: "/contact?tab=quote",
    secondaryText: "Get a Quote",
  },
  {
    id: "slide-2",
    headline: "Save Up To 80% On Industrial Electrical Power",
    subline: "Heavy-duty ductable evaporative coolers delivering 100% fresh, dust-filtered air to factories and warehouses.",
    image: "/images/coolers/ductable-air-cooler-2.jpg",
    primaryLink: "/products?category=air-coolers",
    primaryText: "Industrial Coolers",
    secondaryLink: "/contact?tab=quote",
    secondaryText: "Request Sizing",
  },
  {
    id: "slide-3",
    headline: "Heavy-Duty Industrial Ventilation & Air Extraction",
    subline: "Direct drive, belt drive, and fibercone exhaust fans built for continuous 24/7 factory duty and fume evacuation.",
    image: "/images/exhaust-fans/fibercone-rooftop.jpg",
    primaryLink: "/products?category=exhaust-fans",
    primaryText: "Industrial Exhaust Fans",
    secondaryLink: "/contact?tab=quote",
    secondaryText: "Get Factory Price",
  },
  {
    id: "slide-4",
    headline: "Reliable Factory Lighting & Workspace Storage Solutions",
    subline: "Commercial high-bay LED lighting, heavy-duty storage racks, and custom workstations based in Sector-121 Noida.",
    image: "/images/factory/hero-industrial-cooler.jpg",
    primaryLink: "/products",
    primaryText: "View All Solutions",
    secondaryLink: "/contact",
    secondaryText: "Contact Us",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-slide every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 3500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const slide = slides[current];

  return (
    <section
      className="relative w-full h-[460px] sm:h-[520px] md:h-[580px] lg:h-[620px] overflow-hidden bg-[#0D1F37] text-white select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={(e) => {
        touchStartX.current = e.targetTouches[0].clientX;
      }}
      onTouchMove={(e) => {
        touchEndX.current = e.targetTouches[0].clientX;
      }}
      onTouchEnd={() => {
        if (!touchStartX.current || !touchEndX.current) return;
        const diff = touchStartX.current - touchEndX.current;
        if (diff > 45) nextSlide();
        if (diff < -45) prevSlide();
        touchStartX.current = null;
        touchEndX.current = null;
      }}
      aria-label="GreenTech Solutions Banner Slider"
    >
      {/* ── 1. FULL-WIDTH BACKGROUND IMAGES (CROSSFADE) ── */}
      {slides.map((item, index) => {
        const isActive = current === index;
        return (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-0" : "opacity-0 pointer-events-none z-0"
            }`}
          >
            <img
              src={item.image}
              alt=""
              aria-hidden="true"
              className={`w-full h-full object-cover object-center transition-transform duration-[4000ms] ease-out ${
                isActive ? "scale-105" : "scale-100"
              }`}
              onError={(e) => {
                e.currentTarget.src = "/images/factory/about-factory.jpg";
              }}
            />
          </div>
        );
      })}

      {/* ── 2. BALANCED DARK GRADIENT OVERLAY FOR READABILITY ── */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(13, 31, 55, 0.65) 0%, rgba(20, 45, 78, 0.75) 50%, rgba(13, 31, 55, 0.85) 100%)",
        }}
      />

      {/* ── 3. SIMPLE 1-2 LINE CENTERED TEXT CONTENT ── */}
      <div className="container-custom relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          
          {/* Line 1: Main Headline */}
          <h1
            key={`title-${current}`}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-white tracking-tight leading-[1.15] drop-shadow-md animate-fade-in"
          >
            {slide.headline}
          </h1>

          {/* Line 2: 1-Line Concise Subtitle */}
          <p
            key={`sub-${current}`}
            className="text-sm sm:text-base md:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto drop-shadow animate-fade-in"
          >
            {slide.subline}
          </p>

          {/* Clean Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              to={slide.primaryLink}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#009B4D] hover:bg-[#007A3D] text-white px-7 py-3.5 text-xs sm:text-sm font-bold shadow-lg shadow-[#009B4D]/30 transition-all transform hover:scale-105"
            >
              <span>{slide.primaryText}</span>
              <ArrowRight size={15} />
            </Link>

            <Link
              to={slide.secondaryLink}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-7 py-3.5 text-xs sm:text-sm font-bold transition-all transform hover:scale-105"
            >
              <span>{slide.secondaryText}</span>
            </Link>
          </div>

        </div>
      </div>

      {/* ── 4. MINIMALIST SLIDER CONTROLS (DOTS & ARROWS) ── */}
      <div className="absolute bottom-5 left-0 right-0 z-30">
        <div className="container-custom flex items-center justify-between px-4">
          
          {/* Slide Dots */}
          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  current === idx
                    ? "w-8 h-2 bg-[#009B4D]"
                    : "w-2 h-2 bg-white/40 hover:bg-white/75"
                }`}
              />
            ))}
          </div>

          {/* Prev / Next Minimalist Arrows */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="w-9 h-9 rounded-full bg-black/30 hover:bg-[#009B4D] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next Slide"
              className="w-9 h-9 rounded-full bg-black/30 hover:bg-[#009B4D] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
