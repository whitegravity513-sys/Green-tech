import React, { useState, useRef } from "react";
import {
  Film,
  Play,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Layers,
  Sparkles,
  Maximize2,
  SlidersHorizontal,
  Video,
} from "lucide-react";

export const productVideos = [
  {
    id: "vid-1",
    src: "/vedio/one.mp4",
    title: "Industrial Air Cooler Live Demonstration",
    category: "Air Coolers",
    badge: "Featured Unit",
    description:
      "Real-world operational test of industrial ductable air cooler showing continuous fresh air throw and water circulation system.",
    tag: "Evaporative Cooling",
  },
  {
    id: "vid-2",
    src: "/vedio/two.mp4",
    title: "Heavy-Duty Workshop Cooling in Action",
    category: "Air Coolers",
    badge: "Shopfloor Demo",
    description:
      "High-CFM cooling performance engineered to rapidly lower ambient heat load on active factory and manufacturing floors.",
    tag: "High CFM Airflow",
  },
  {
    id: "vid-3",
    src: "/vedio/three.mp4",
    title:
      "Complete garments unit with bldc exhaust fan and ceiling fan or high bay light and furniture also.",
    category: "Garment Unit",
    badge: "Complete Setup",
    description:
      "Full turnkey garments manufacturing floor setup featuring BLDC exhaust fans, industrial ceiling fans, UFO high bay lights, and customized factory furniture.",
    tag: "Complete Plant Setup",
  },
  {
    id: "vid-4",
    src: "/vedio/four.mp4",
    title: "Cooler Inner Build & Heavy Axial Fan Assembly",
    category: "Air Coolers",
    badge: "Build Quality",
    description:
      "Closer view of the internal heavy-gauge structure, balanced axial fan blades, pure copper motor, and water distributor.",
    tag: "Precision Engineering",
  },
  {
    id: "vid-5",
    src: "/vedio/five.mp4",
    title: "Industrial exhaust fans",
    category: "Exhaust Fans",
    badge: "Heavy Ventilation",
    description:
      "Live smoke extraction and airflow velocity test of industrial exhaust fans delivering rapid air change and fume evacuation.",
    tag: "Smoke & Airflow Test",
  },
  {
    id: "vid-6",
    src: "/vedio/six.mp4",
    title: "Industrial High Bay lights",
    category: "Industrial Lighting",
    badge: "High Bay LED",
    description:
      "Heavy-duty commercial UFO LED high bay light demonstration designed for factory sheds, warehouses, and manufacturing plants.",
    tag: "Commercial LED",
  },
  {
    id: "vid-7",
    src: "/vedio/seven.mp4",
    title: "Factory Floor Climate Deployment Walkthrough",
    category: "Factory & Build",
    badge: "Plant Deployment",
    description:
      "Live walkthrough of complete industrial climate control and fresh air ventilation setup inside working factory conditions.",
    tag: "Factory Environment",
  },
  {
    id: "vid-8",
    src: "/vedio/eight.mp4",
    title: "Garment industry All types furniture",
    category: "Factory Furniture",
    badge: "Garment Furniture",
    description:
      "Heavy-duty workshop and garment industry furniture including fabric cutting tables, inspection lines, raw material trolleys, and storage racks.",
    tag: "All Types Furniture",
  },
  {
    id: "vid-9",
    src: "/vedio/nine.mp4",
    title: "Finished Industrial Unit Final Quality Check",
    category: "Factory & Build",
    badge: "Dispatch Ready",
    description:
      "Rigorous quality verification, motor balancing, and water circuit test before dispatch from our Sector-121 Noida unit.",
    tag: "Verified & Tested",
  },
  {
    id: "vid-10",
    src: "/vedio/ten.mp4",
    title: "Live Garment Manufacturing Plant Setup & Operational Line",
    category: "Garment Unit",
    badge: "Live Plant Line",
    description:
      "Operational view of working garment manufacturing plant featuring custom stitching tables, tailor workstations, quality inspection lines, and factory ventilation.",
    tag: "Garment Plant in Action",
  },
];

export default function ProductVideoShowcase() {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [filter, setFilter] = useState("all");
  const [viewMode, setViewMode] = useState("featured");

  const videoRefs = useRef({});
  const mainVideoRef = useRef(null);

  const handlePlay = (playedId) => {
    Object.keys(videoRefs.current).forEach((key) => {
      const el = videoRefs.current[key];
      if (el && key !== playedId && !el.paused) {
        el.pause();
      }
    });
    if (mainVideoRef.current && playedId !== "main" && !mainVideoRef.current.paused) {
      mainVideoRef.current.pause();
    }
  };

  const currentFeatured = productVideos[selectedVideoIndex];

  const filteredVideos =
    filter === "all"
      ? productVideos
      : productVideos.filter((v) => v.category === filter);

  const handleSelectFeatured = (index) => {
    if (mainVideoRef.current) {
      mainVideoRef.current.pause();
    }
    setSelectedVideoIndex(index);
  };

  const handlePrevVideo = () => {
    if (mainVideoRef.current) mainVideoRef.current.pause();
    setSelectedVideoIndex((prev) =>
      prev === 0 ? productVideos.length - 1 : prev - 1
    );
  };

  const handleNextVideo = () => {
    if (mainVideoRef.current) mainVideoRef.current.pause();
    setSelectedVideoIndex((prev) =>
      prev === productVideos.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="video-showcase-section" className="py-12 sm:py-20 bg-gradient-to-b from-[#FAFDFB] via-white to-[#F5F8F6] border-b border-slate-200">
      <div className="container-custom px-4">

        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#009B4D]/10 border border-[#009B4D]/25 px-4 py-1.5 text-xs font-black text-[#009B4D] uppercase tracking-widest mb-3">
            <Film size={14} className="text-[#009B4D]" />
            <span>Live Product & Factory Demonstrations</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-[#142D4E] tracking-tight leading-[1.15]">
            Products In Action & Manufacturing Videos
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed max-w-2xl mx-auto">
            Dekhiye hamare industrial air coolers, heavy exhaust fans aur factory equipment ko live action mein. 
            Real testing, heavy airflow delivery aur build quality demonstration.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-3 mt-8 pt-4 border-t border-slate-100">
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: "all", label: "All Videos" },
                { id: "Air Coolers", label: "Air Coolers" },
                { id: "Exhaust Fans", label: "Exhaust Fans" },
                { id: "Industrial Lighting", label: "High Bay Lights" },
                { id: "Factory Furniture", label: "Furniture" },
                { id: "Garment Unit", label: "Garments Setup" },
                { id: "Factory & Build", label: "Factory & Testing" },
              ].map((tab) => {
                const count =
                  tab.id === "all"
                    ? productVideos.length
                    : productVideos.filter((v) => v.category === tab.id).length;
                if (tab.id !== "all" && count === 0) return null;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setFilter(tab.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                      filter === tab.id
                        ? "bg-[#009B4D] text-white shadow-sm"
                        : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900"
                    }`}
                  >
                    {tab.label} ({count})
                  </button>
                );
              })}
            </div>

            <div className="inline-flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200">
              <button
                onClick={() => setViewMode("featured")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  viewMode === "featured"
                    ? "bg-white text-[#142D4E] shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                title="Featured Cinema Player"
              >
                <Video size={14} />
                <span>Featured Theater</span>
              </button>

              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  viewMode === "grid"
                    ? "bg-white text-[#142D4E] shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                title="Browse Grid"
              >
                <Layers size={14} />
                <span>All Videos Grid</span>
              </button>
            </div>
          </div>
        </div>

        {viewMode === "featured" && (
          <div className="rounded-3xl bg-[#142D4E] p-3.5 sm:p-7 shadow-2xl border border-slate-800 text-white mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start">

              <div className="lg:col-span-8 flex flex-col w-full">
                <div className="relative aspect-[4/3] sm:aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 shadow-inner border border-slate-700/60 flex items-center justify-center">
                  <video
                    key={currentFeatured.src}
                    ref={mainVideoRef}
                    src={currentFeatured.src}
                    controls
                    autoPlay={false}
                    preload="metadata"
                    playsInline
                    onPlay={() => handlePlay("main")}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute top-3 left-3 pointer-events-none z-10">
                    <span className="rounded-md bg-[#009B4D] px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-md">
                      {currentFeatured.badge}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-700/60">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold uppercase text-[#009B4D] tracking-wider">
                        {currentFeatured.category} • {currentFeatured.tag}
                      </span>
                      <span className="text-slate-500">•</span>
                      <span className="text-xs text-slate-300">
                        Video #{selectedVideoIndex + 1} of {productVideos.length}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-xl font-black text-white mt-1 break-words">
                      {currentFeatured.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                      {currentFeatured.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                    <button
                      onClick={handlePrevVideo}
                      className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 transition-colors"
                      title="Previous Video"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={handleNextVideo}
                      className="p-2.5 rounded-xl bg-[#009B4D] hover:bg-[#007A3D] text-white shadow-sm transition-colors"
                      title="Next Video"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col h-[360px] sm:h-[440px] lg:h-[500px] w-full">
                <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-700/70">
                  <div className="flex items-center gap-2">
                    <Film size={16} className="text-[#009B4D]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Product Video Playlist ({productVideos.length})
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400">Click to Play</span>
                </div>

                <div className="overflow-y-auto space-y-2 pr-1 custom-scrollbar flex-1">
                  {productVideos.map((video, idx) => {
                    const isSelected = selectedVideoIndex === idx;
                    return (
                      <div
                        key={video.id}
                        onClick={() => handleSelectFeatured(idx)}
                        className={`group cursor-pointer rounded-xl p-2.5 transition-all border text-left flex items-start gap-3 ${
                          isSelected
                            ? "bg-[#009B4D]/20 border-[#009B4D] text-white shadow-xs"
                            : "bg-slate-800/60 border-slate-700/60 hover:bg-slate-800 text-slate-300 hover:text-white"
                        }`}
                      >
                        <div className="relative w-16 h-12 rounded-lg bg-slate-900 border border-slate-700 overflow-hidden shrink-0 flex items-center justify-center">
                          <Play
                            size={16}
                            className={
                              isSelected
                                ? "text-[#009B4D] fill-[#009B4D]"
                                : "text-slate-400 group-hover:text-white"
                            }
                          />
                          <span className="absolute bottom-0.5 right-1 text-[9px] font-mono font-bold text-slate-300">
                            #{idx + 1}
                          </span>
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-[10px] uppercase font-bold text-[#009B4D] truncate">
                              {video.category}
                            </span>
                            {isSelected && (
                              <span className="text-[9px] font-bold bg-[#009B4D] text-white px-1.5 py-0.2 rounded">
                                Active
                              </span>
                            )}
                          </div>
                          <h4 className="text-xs font-bold leading-tight line-clamp-1 mt-0.5 text-white">
                            {video.title}
                          </h4>
                          <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                            {video.tag}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        )}

        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          }
        >
          {filteredVideos.map((video, idx) => (
            <div
              key={video.id}
              className="group rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#009B4D] transition-all duration-300 flex flex-col overflow-hidden"
            >
              <div className="relative aspect-[4/3] sm:aspect-video w-full bg-slate-950 overflow-hidden border-b border-slate-100 flex items-center justify-center">
                <video
                  ref={(el) => {
                    videoRefs.current[video.id] = el;
                  }}
                  src={video.src}
                  controls
                  autoPlay={false}
                  preload="metadata"
                  playsInline
                  onPlay={() => handlePlay(video.id)}
                  className="w-full h-full object-contain"
                />

                <div className="absolute top-3 left-3 pointer-events-none z-10">
                  <span className="rounded-md bg-[#142D4E]/85 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 shadow-sm">
                    {video.badge}
                  </span>
                </div>

                <div className="absolute top-3 right-3 pointer-events-none z-10">
                  <span className="rounded-md bg-[#009B4D]/90 text-white text-[10px] font-black px-2 py-0.5 shadow-sm font-mono">
                    Video #{idx + 1}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[11px] font-bold text-[#009B4D] uppercase tracking-wider">
                    {video.category}
                  </span>
                  <span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                    {video.tag}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-black text-[#142D4E] group-hover:text-[#009B4D] transition-colors leading-snug line-clamp-2">
                  {video.title}
                </h3>

                <p className="text-xs text-slate-500 mt-2 leading-relaxed flex-1">
                  {video.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500 flex items-center gap-1">
                    <CheckCircle2 size={13} className="text-[#009B4D]" />
                    Controls Enabled
                  </span>
                  <button
                    onClick={() => {
                      const foundIdx = productVideos.findIndex(
                        (v) => v.id === video.id
                      );
                      if (foundIdx !== -1) {
                        handleSelectFeatured(foundIdx);
                        setViewMode("featured");
                        window.scrollTo({
                          top:
                            document
                              .getElementById("video-showcase-section")
                              ?.getBoundingClientRect().top +
                            window.scrollY -
                            80,
                          behavior: "smooth",
                        });
                      }
                    }}
                    className="text-[#009B4D] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>Spotlight View</span>
                    <Maximize2 size={11} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-white border border-slate-200 p-5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#009B4D] flex items-center justify-center shrink-0">
              <CheckCircle2 size={20} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-black text-[#142D4E] uppercase">
                Want a Customized Live Video Demonstration?
              </h4>
              <p className="text-xs text-slate-500">
                Contact our Noida engineering team on WhatsApp for video calls or specific product testing videos for your factory requirements.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/919289299496?text=Hello%20GreenTech%20Solutions!%20I%20saw%20your%20product%20demonstration%20videos%20and%20would%20like%20more%20details%20for%20my%20factory."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#009B4D] hover:bg-[#007A3D] text-white px-5 py-2.5 text-xs font-bold shadow-sm transition-all shrink-0"
          >
            <span>Ask for Video & Quote</span>
          </a>
        </div>

      </div>
    </section>
  );
}
