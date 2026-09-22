import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const clientLogos = [
  { name: "Mangla Textiles", logo: "/images/clients/logo-mangla.png", sector: "Textiles" },
  { name: "R-Exim India", logo: "/images/clients/logo-rexim.png", sector: "Global Trade" },
  { name: "CTA Associates", logo: "/images/clients/logo-cta.png", sector: "Engineering Tech" },
  { name: "Tulsi Creation", logo: "/images/clients/logo-tulsi.png", sector: "Apparel" },
  { name: "Maple Industries", logo: "/images/clients/logo-maple.png", sector: "Eco Manufacturing" },
  { name: "FairDeal", logo: "/images/clients/logo-fairdeal.png", sector: "Consumer Products" },
  { name: "GK Fashions Pvt Ltd", logo: "/images/clients/logo-gkfashions.png", sector: "Garments" },
  { name: "Cotton Concepts", logo: "/images/clients/logo-cottonconcepts.png", sector: "Fabrics" },
  { name: "Manish", logo: "/images/clients/logo-manish.png", sector: "Textile Exports" },
  { name: "Fenzy Styles", logo: "/images/clients/logo-fenzystyles.png", sector: "Active Wear" },
  { name: "Galaxy Garments", logo: "/images/clients/logo-galaxygarments.png", sector: "Apparel Mills" },
  { name: "Sony Enterprises", logo: "/images/clients/logo-sonyenterprises.png", sector: "Industrial Spares" },
  { name: "Shankar Fenestrations", logo: "/images/clients/logo-shankarfenestrations.png", sector: "Glass & Infrastructure" },
  { name: "Roto Pumps Ltd", logo: "/images/clients/logo-rotopumps.png", sector: "Pumps (Since 1968)" },
  { name: "SG Global Exports", logo: "/images/clients/logo-sgglobal.png", sector: "Supply Chain" },
  { name: "Krishna Beads (KBI)", logo: "/images/clients/logo-krishnabeads.png", sector: "Industries LLP" },
  { name: "Sparklerr", logo: "/images/clients/logo-sparklerr.png", sector: "Industrial Lighting" },
];

export default function ClientLogoSlider() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Manual smooth scroll step
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.6;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Continuous loop duplicate array for seamless marquee
  const loopedLogos = [...clientLogos, ...clientLogos];

  return (
    <div
      className="relative w-full overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle edge fades for smooth infinity effect */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* ── CONTINUOUS AUTO-SLIDING MARQUEE TRACK (ONLY LOGOS) ── */}
      <div
        className="animate-client-marquee py-4"
        style={{
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {loopedLogos.map((client, idx) => (
          <div
            key={`${client.name}-${idx}`}
            className="shrink-0 w-44 sm:w-52 mx-3 group"
          >
            <div className="h-28 sm:h-32 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-xl hover:border-[#009B4D] transition-all duration-300 flex flex-col items-center justify-center p-4">
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 sm:max-h-20 max-w-[85%] object-contain group-hover:scale-108 transition-transform duration-300"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
            <p className="text-center text-[11px] font-bold text-slate-700 mt-2 truncate">
              {client.name}
            </p>
          </div>
        ))}
      </div>

      {/* ── MINIMALIST CONTROLS BAR ── */}
      <div className="container-custom mt-6 flex items-center justify-between px-4 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#009B4D] animate-pulse" />
          <span className="font-semibold text-slate-600">
            17+ Verified Industrial Clients From Official Brochure
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] text-slate-400 hidden sm:inline mr-1">
            Hover to pause
          </span>
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Scroll clients left"
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#009B4D] hover:text-white text-slate-600 flex items-center justify-center transition-colors border border-slate-200"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Scroll clients right"
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#009B4D] hover:text-white text-slate-600 flex items-center justify-center transition-colors border border-slate-200"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

    </div>
  );
}
