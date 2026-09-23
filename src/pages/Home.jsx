import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Wind,
  Gauge,
  Lightbulb,
  Package,
  ShieldCheck,
  CheckCircle2,
  Building2,
  PhoneCall,
  MessageCircle,
  ExternalLink,
  ChevronRight,
  Layers,
  Wrench,
  Factory,
  Warehouse,
  Shirt,
  Star,
  Eye,
} from "lucide-react";
import HeroSlider from "../components/HeroSlider";
import ClientLogoSlider from "../components/ClientLogoSlider";
import { companyInfo } from "../data/company";

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    document.title =
      "GreenTech Solutions | Industrial Air Coolers, Exhaust Fans & Workspace Equipment";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "GreenTech Solutions manufactures and supplies industrial ductable air coolers, exhaust fans, commercial lighting, and factory furniture in Noida and across India."
      );
    }
  }, []);

  const waMsg = encodeURIComponent(
    "Hello GreenTech Solutions! I would like to request a quotation for your industrial products."
  );

  /* ── 1. AUTHENTIC FEATURED PRODUCTS (8 BALANCED ITEMS) ── */
  const featuredProducts = [
    {
      id: "top-discharge-air-cooler",
      category: "coolers",
      categoryName: "Industrial Air Cooler",
      badge: "Bestseller",
      name: "Top Discharge Industrial Air Cooler",
      model: "GTS 1.1 kW – 4.5 kW Series",
      desc: "Upward ceiling duct distribution designed for factory floor cooling without floor space loss.",
      specs: ["Airflow: Up to 25,000 CFM", "3 Phase 380/415V Heavy Axial Fan"],
      image: "/images/coolers/top-discharge-cooler.jpg",
      link: "/products/top-discharge-air-cooler",
    },
    {
      id: "down-discharge-air-cooler",
      category: "coolers",
      categoryName: "Industrial Air Cooler",
      badge: "Shopfloor Choice",
      name: "Down Position Industrial Air Cooler",
      model: "GTS 0.75 kW – 3.0 kW Series",
      desc: "Downward air delivery engineered for worker-zone cooling in injection moulding and assembly lines.",
      specs: ["Airflow: 8,000 – 18,000 CFM", "Coverage: 800–2,500 Sq Ft"],
      image: "/images/coolers/down-discharge-cooler.jpg",
      link: "/products/down-discharge-air-cooler",
    },
    {
      id: "ss-heavy-duty-air-cooler",
      category: "coolers",
      categoryName: "Industrial Air Cooler",
      badge: "Extreme Duty",
      name: "Heavy Duty Stainless Steel Cooler",
      model: "GTS SS-304 Extreme Series",
      desc: "Grade 304 stainless steel body with corner reinforcement built for harsh chemical & high-heat plants.",
      specs: ["Body: SS 304 Stainless Sheet", "Pure Copper Winding Motor"],
      image: "/images/coolers/stainless-steel-cooler.jpg",
      link: "/products/ss-heavy-duty-air-cooler",
    },
    {
      id: "industrial-ductable-air-cooler",
      category: "coolers",
      categoryName: "Industrial Air Cooler",
      badge: "Energy Saver",
      name: "Industrial Ductable Air Cooler",
      model: "GTS Multi-Zone Series",
      desc: "Multi-zone air distribution through central ducts for large manufacturing bays and warehouses.",
      specs: ["Multi-Zone Air Delivery", "Up to 80% Power Saving"],
      image: "/images/coolers/ductable-air-cooler.jpg",
      link: "/products/industrial-ductable-air-cooler",
    },
    {
      id: "direct-drive-exhaust-fan",
      category: "fans",
      categoryName: "Industrial Exhaust Fan",
      badge: "Zero Maintenance",
      name: "Direct Drive Industrial Exhaust Fan",
      model: "GTS-800 to GTS-1530 Direct",
      desc: "Galvanized steel casing with direct motor drive, eliminating belt slippage and maintenance.",
      specs: ["Airflow: 8,000 – 18,000 CFM", "Speed: 1400 RPM Direct Drive"],
      image: "/images/exhaust-fans/direct-drive-fan.jpg",
      link: "/products/direct-drive-exhaust-fan",
    },
    {
      id: "fibercone-exhaust-fan",
      category: "fans",
      categoryName: "Industrial Exhaust Fan",
      badge: "High CFM",
      name: "Industrial Fibercone Exhaust Fan",
      model: "GTS-560 to GTS-1460 Cone",
      desc: "Aerodynamic molded fiberglass discharge cone for maximum exhaust velocity and corrosion immunity.",
      specs: ['Diameter: 15" to 50"', "Airflow: 6,000 – 44,000 CFM"],
      image: "/images/exhaust-fans/fibercone-fan.jpg",
      link: "/products/fibercone-exhaust-fan",
    },
    {
      id: "high-bay-ufo-led",
      category: "lights",
      categoryName: "Industrial Lighting",
      badge: "IP65 Waterproof",
      name: "Commercial High Bay UFO LED Light",
      model: "GTS-HB Series (50W – 250W)",
      desc: "Commercial high-efficacy high-bay lighting engineered for 8m to 15m high factory ceilings.",
      specs: ["140+ Lumens/Watt Efficacy", "Die-Cast Aluminum IP65 Casing"],
      image: "/images/industrial-lights/category-lights.jpg",
      link: "/products?category=industrial-lights",
    },
    {
      id: "storage-racks-furniture",
      category: "furniture",
      categoryName: "Factory & Storage",
      badge: "Prime Steel",
      name: "Heavy Duty Factory Storage Almirah",
      model: "GTS Workstation & Storage Line",
      desc: "Heavy-gauge CRCA prime steel storage cabinets, cutting tables, and trolleys for garment factories.",
      specs: ["CRCA Prime Steel Sheet", "Epoxy Powder Coated Finish"],
      image: "/images/furniture/steel-almirah.jpg",
      link: "/products?category=furniture-storage",
    },
  ];

  const filteredProducts =
    activeTab === "all"
      ? featuredProducts
      : featuredProducts.filter((p) => p.category === activeTab);

  /* ── 2. REAL VERIFIED CLIENTS FROM BROCHURE IMAGE 2 ── */
  const brochureClients = [
    { name: "Mangla Textiles", sector: "Textile Mill", badge: "Textiles" },
    { name: "Roto Pumps Ltd", sector: "Fluid Engineering", badge: "Pumps (Since 1968)" },
    { name: "FairDeal", sector: "Consumer Products", badge: "Consumer" },
    { name: "Tulsi Creation", sector: "Apparel Exports", badge: "Garments" },
    { name: "Maple Industries", sector: "Eco Manufacturing", badge: "Eco Products" },
    { name: "CTA Associates", sector: "Industrial & Tech", badge: "Technology" },
    { name: "Shankar Glass (SFG)", sector: "Glass & Infrastructure", badge: "Glass Architecture" },
    { name: "SG Global Exports", sector: "International Supply", badge: "Exports" },
    { name: "Kumar Labels", sector: "Packaging & Labels", badge: "Eco Packaging" },
    { name: "Krishna Beads (KBI)", sector: "Industries LLP", badge: "Manufacturing" },
    { name: "Sony Enterprises", sector: "Heavy Engineering", badge: "Engineering" },
    { name: "GK Fashions Pvt Ltd", sector: "Garment Manufacturing", badge: "Apparel" },
    { name: "Manish", sector: "Textile Exports", badge: "Textile" },
    { name: "Sparkler", sector: "Industrial Lighting", badge: "Lighting" },
    { name: "Cotton Concepts", sector: "Organic Fabric", badge: "Cotton" },
  ];

  return (
    <div className="bg-[#FFFFFF] text-[#17212B] min-h-screen">
      
      {/* ══════════════════════════════════════════════════
          1. FULL-WIDTH AUTO-SLIDING HERO BANNER
      ══════════════════════════════════════════════════ */}
      <HeroSlider />

      {/* ══════════════════════════════════════════════════
          2. PRODUCT CATEGORY SHOWCASE ("Industrial Solutions for Every Workspace")
      ══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-[#FAFDFB] border-b border-slate-200">
        <div className="container-custom px-4">
          
          {/* Centered Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#009B4D]/10 border border-[#009B4D]/25 px-3.5 py-1 text-xs font-black text-[#009B4D] uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#009B4D] animate-pulse" />
              <span>Engineered For Indian Industry</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-[#142D4E] tracking-tight leading-[1.15]">
              Industrial Solutions for Every Workspace
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed max-w-2xl mx-auto">
              Explore our 4 core manufacturing product lines, engineered to lower thermal load, evacuate industrial fumes, and optimize factory floor operations.
            </p>
          </div>

          {/* 4 Cards Grid - Clean, Balanced & Minimal upfront details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* ── CARD 1: INDUSTRIAL AIR COOLERS ── */}
            <div className="group rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#009B4D] transition-all duration-300 flex flex-col overflow-hidden">
              {/* Image Container with Badge */}
              <div className="relative aspect-[4/3] bg-slate-50 overflow-hidden p-4 border-b border-slate-100">
                <span className="absolute top-3 left-3 z-10 rounded-full bg-[#009B4D] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 shadow-sm">
                  Up to 80% Power Saving
                </span>
                <img
                  src="/images/coolers/top-discharge-cooler.jpg"
                  alt="Industrial Air Coolers"
                  className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500"
                />
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#009B4D] uppercase tracking-wider mb-1">
                  <Wind size={15} />
                  <span>Air Cooling Systems</span>
                </div>

                <h3 className="text-xl font-black text-[#142D4E] group-hover:text-[#009B4D] transition-colors leading-snug">
                  Industrial Air Coolers
                </h3>

                <p className="text-xs text-slate-500 mt-2 leading-relaxed mb-6">
                  High-capacity ductable evaporative coolers (0.75kW – 4.5kW) delivering 100% fresh, dust-filtered air to factory floors and warehouses.
                </p>

                {/* View More Button */}
                <div className="mt-auto pt-4 border-t border-slate-100">
                  <Link
                    to="/products?category=air-coolers"
                    className="inline-flex items-center justify-between w-full rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-[#009B4D] px-4 py-2.5 text-xs font-bold text-[#142D4E] hover:text-[#009B4D] transition-all"
                  >
                    <span>View More & Specs</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* ── CARD 2: INDUSTRIAL EXHAUST FANS ── */}
            <div className="group rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#009B4D] transition-all duration-300 flex flex-col overflow-hidden">
              {/* Image Container with Badge */}
              <div className="relative aspect-[4/3] bg-slate-50 overflow-hidden p-4 border-b border-slate-100">
                <span className="absolute top-3 left-3 z-10 rounded-full bg-[#142D4E] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 shadow-sm">
                  Heavy Ventilation
                </span>
                <img
                  src="/images/exhaust-fans/direct-drive-fan.jpg"
                  alt="Industrial Exhaust Fans"
                  className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500"
                />
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#009B4D] uppercase tracking-wider mb-1">
                  <Gauge size={15} />
                  <span>Exhaust & Extraction</span>
                </div>

                <h3 className="text-xl font-black text-[#142D4E] group-hover:text-[#009B4D] transition-colors leading-snug">
                  Industrial Exhaust Fans
                </h3>

                <p className="text-xs text-slate-500 mt-2 leading-relaxed mb-6">
                  Direct drive, belt drive, and fibercone exhaust systems engineered for rapid evacuation of smoke, high heat, and industrial fumes.
                </p>

                {/* View More Button */}
                <div className="mt-auto pt-4 border-t border-slate-100">
                  <Link
                    to="/products?category=exhaust-fans"
                    className="inline-flex items-center justify-between w-full rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-[#009B4D] px-4 py-2.5 text-xs font-bold text-[#142D4E] hover:text-[#009B4D] transition-all"
                  >
                    <span>View More & Specs</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* ── CARD 3: INDUSTRIAL LIGHTING ── */}
            <div className="group rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#009B4D] transition-all duration-300 flex flex-col overflow-hidden">
              {/* Image Container with Badge */}
              <div className="relative aspect-[4/3] bg-slate-50 overflow-hidden p-4 border-b border-slate-100">
                <span className="absolute top-3 left-3 z-10 rounded-full bg-amber-600 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 shadow-sm">
                  140+ Lumens / Watt
                </span>
                <img
                  src="/images/industrial-lights/category-lights.jpg"
                  alt="Industrial Commercial Lighting"
                  className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500"
                />
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#009B4D] uppercase tracking-wider mb-1">
                  <Lightbulb size={15} />
                  <span>Commercial Illumination</span>
                </div>

                <h3 className="text-xl font-black text-[#142D4E] group-hover:text-[#009B4D] transition-colors leading-snug">
                  Industrial Lighting
                </h3>

                <p className="text-xs text-slate-500 mt-2 leading-relaxed mb-6">
                  High-bay UFO LEDs and IP65 flood/street lights with 6kV surge suppression built for high-ceiling industrial sheds and warehouses.
                </p>

                {/* View More Button */}
                <div className="mt-auto pt-4 border-t border-slate-100">
                  <Link
                    to="/products?category=industrial-lights"
                    className="inline-flex items-center justify-between w-full rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-[#009B4D] px-4 py-2.5 text-xs font-bold text-[#142D4E] hover:text-[#009B4D] transition-all"
                  >
                    <span>View More & Specs</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* ── CARD 4: FACTORY & GARMENT FURNITURE ── */}
            <div className="group rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#009B4D] transition-all duration-300 flex flex-col overflow-hidden">
              {/* Image Container with Badge */}
              <div className="relative aspect-[4/3] bg-slate-50 overflow-hidden p-4 border-b border-slate-100">
                <span className="absolute top-3 left-3 z-10 rounded-full bg-slate-800 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 shadow-sm">
                  Prime CRCA Steel
                </span>
                <img
                  src="/images/furniture/category-furniture.jpg"
                  alt="Factory & Garment Furniture"
                  className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500"
                />
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#009B4D] uppercase tracking-wider mb-1">
                  <Package size={15} />
                  <span>Workshop Storage & Racks</span>
                </div>

                <h3 className="text-xl font-black text-[#142D4E] group-hover:text-[#009B4D] transition-colors leading-snug">
                  Factory Furniture
                </h3>

                <p className="text-xs text-slate-500 mt-2 leading-relaxed mb-6">
                  Heavy-gauge prime steel fabric cutting tables, multi-tier pallet storage racks, garment movement trolleys, and industrial almirahs.
                </p>

                {/* View More Button */}
                <div className="mt-auto pt-4 border-t border-slate-100">
                  <Link
                    to="/products?category=furniture-storage"
                    className="inline-flex items-center justify-between w-full rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-[#009B4D] px-4 py-2.5 text-xs font-bold text-[#142D4E] hover:text-[#009B4D] transition-all"
                  >
                    <span>View More & Specs</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Industrial Benefit Bar Below Categories */}
          <div className="mt-12 rounded-2xl bg-white border border-slate-200 p-6 shadow-xs">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#009B4D] flex items-center justify-center shrink-0 font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#142D4E] uppercase">Direct Factory Supply</h4>
                  <p className="text-[11px] text-slate-500">Commercial pricing without middlemen</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#009B4D] flex items-center justify-center shrink-0 font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#142D4E] uppercase">Technical Blueprints</h4>
                  <p className="text-[11px] text-slate-500">Custom ducting & CFM calculations</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#009B4D] flex items-center justify-center shrink-0 font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#142D4E] uppercase">Pan-India Dispatch</h4>
                  <p className="text-[11px] text-slate-500">Fast delivery from Sector-121 Noida</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#009B4D] flex items-center justify-center shrink-0 font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#142D4E] uppercase">Make In India</h4>
                  <p className="text-[11px] text-slate-500">GSTIN: {companyInfo.gstin}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          3. FEATURED PRODUCTS SHOWCASE (AUTHENTIC BROCHURE SPECIFICATIONS)
      ══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="container-custom px-4">
          
          {/* Centered Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#009B4D] bg-[#009B4D]/10 px-4 py-1.5 rounded-full mb-3">
              <ShieldCheck size={14} className="text-[#009B4D]" />
              Verified Catalogue Models
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#142D4E] tracking-tight">
              Featured Industrial Products
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Explore our heavy-duty ductable coolers, high-velocity exhaust ventilation, commercial LED lights, and factory storage solutions.
            </p>

            {/* Centered Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {[
                { id: "all", label: "All Items", count: featuredProducts.length },
                { id: "coolers", label: "Air Coolers", count: 4 },
                { id: "fans", label: "Exhaust Fans", count: 2 },
                { id: "lights", label: "Lighting", count: 1 },
                { id: "furniture", label: "Furniture", count: 1 },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                    activeTab === tab.id
                      ? "bg-[#009B4D] border-[#009B4D] text-white shadow-sm"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-emerald-50 hover:border-emerald-300"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`rounded-full px-2 py-0.2 text-[10px] font-extrabold ${
                      activeTab === tab.id
                        ? "bg-white/20 text-white"
                        : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Product Cards Grid: 4 columns on desktop, 2 on tablet, 1 on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => {
              const waQuote = encodeURIComponent(
                `Hi GreenTech Solutions! I would like to request specifications and a formal quotation for: ${prod.name} (${prod.model}).`
              );
              return (
                <div
                  key={prod.id}
                  className="rounded-2xl bg-white border border-slate-200 p-4 sm:p-5 shadow-xs hover:shadow-xl hover:border-[#009B4D] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="rounded-full bg-[#009B4D] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-sm">
                      {prod.badge || "Verified"}
                    </span>
                  </div>

                  <div>
                    {/* Image Box */}
                    <Link
                      to={prod.link}
                      className="aspect-[4/3] rounded-xl bg-slate-50 border border-slate-100 p-3 flex items-center justify-center overflow-hidden mb-4 group-hover:bg-emerald-50/20 transition-colors block"
                    >
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="max-h-full max-w-full object-contain group-hover:scale-108 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = "/images/coolers/category-air-coolers.jpg";
                        }}
                      />
                    </Link>

                    {/* Category & Star Rating */}
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[11px] font-bold text-[#009B4D] uppercase tracking-wider">
                        {prod.categoryName}
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 text-[11px] font-bold">
                        <Star size={12} fill="currentColor" />
                        <span>5.0</span>
                      </div>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-sm sm:text-base font-bold text-[#142D4E] group-hover:text-[#009B4D] transition-colors leading-snug line-clamp-2">
                      <Link to={prod.link}>{prod.name}</Link>
                    </h3>

                    {/* Model Code */}
                    <p className="text-[11px] font-mono font-semibold text-slate-500 mt-1">
                      {prod.model}
                    </p>

                    {/* Specs Bullet List */}
                    <div className="mt-3 pt-3 border-t border-slate-100 space-y-1">
                      {prod.specs.slice(0, 2).map((sp, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center gap-1.5 text-xs text-slate-600 font-medium"
                        >
                          <CheckCircle2 size={12} className="text-[#009B4D] shrink-0" />
                          <span className="truncate">{sp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing / Supply & Actions */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <div className="flex items-center justify-between mb-3 text-[11px]">
                      <span className="text-slate-500 font-medium">Wholesale Supply</span>
                      <span className="text-[#009B4D] font-bold bg-emerald-50 px-2 py-0.5 rounded">Pan-India</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        to={prod.link}
                        className="flex items-center justify-center gap-1 rounded-xl border border-slate-300 bg-white py-2 px-2 text-xs font-bold text-slate-700 hover:border-[#009B4D] hover:bg-emerald-50 hover:text-[#009B4D] transition-colors"
                      >
                        <Eye size={12} />
                        <span>Details</span>
                      </Link>

                      <a
                        href={`https://wa.me/${companyInfo.contact.whatsappRaw}?text=${waQuote}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1 rounded-xl bg-[#009B4D] py-2 px-2 text-xs font-bold text-white hover:bg-[#007A3D] shadow-sm transition-colors"
                      >
                        <MessageCircle size={12} />
                        <span>Enquire</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA to /products */}
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-xl bg-[#142D4E] hover:bg-[#009B4D] text-white px-7 py-3 text-xs sm:text-sm font-bold shadow-sm hover:shadow-md transition-all duration-300"
            >
              <span>Explore Complete Product Catalog</span>
              <ArrowRight size={15} />
            </Link>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4. ABOUT GREENTECH PREVIEW (TWO-COLUMN ARCHITECTURAL COMPOSITION)
      ══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-[#F5F7F6] border-b border-slate-200">
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Photo Composition */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl bg-slate-900 group">
                <img
                  src="/images/factory/about-factory.jpg"
                  alt="GreenTech Solutions Manufacturing Facilities"
                  className="w-full h-[380px] sm:h-[440px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#142D4E]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center gap-1.5 rounded-md bg-[#009B4D] px-2.5 py-0.5 text-[10px] font-bold uppercase mb-2">
                    <ShieldCheck size={12} />
                    <span>Verified Manufacturer</span>
                  </div>
                  <h3 className="text-lg font-black text-white">
                    GreenTech Solutions • Noida Facility
                  </h3>
                  <p className="text-xs text-slate-200 mt-1">
                    Office No-7, Yadu Market, FNG Service Road, Sector-121, Noida
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-md bg-[#009B4D]/10 px-3 py-1 text-xs font-bold text-[#009B4D] uppercase tracking-wider">
                <Building2 size={13} />
                <span>About GreenTech Solutions</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-[#142D4E] tracking-tight leading-tight">
                Specialized in Large Space Cooling, Ventilation and Industrial Infrastructure
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                GreenTech Solutions operates from Sector-121, Noida, supplying specialized industrial climate control systems and factory furniture across manufacturing clusters in India.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                Industrial air coolers make big spaces comfortable by continuously replacing trapped heat and stale air with fresh, dust-filtered cooled air. We assist factory owners and plant engineers in choosing the exact top discharge, down position, or ductable cooler model matched to their floor area and heat load.
              </p>

              {/* 4 Practical Pillars from Brochure */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-white border border-slate-200">
                  <CheckCircle2 size={18} className="text-[#009B4D] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs font-black text-[#142D4E] block">Electricity Saver</strong>
                    <span className="text-[11px] text-slate-500">Up to 80% power cut compared to central chillers.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-white border border-slate-200">
                  <CheckCircle2 size={18} className="text-[#009B4D] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs font-black text-[#142D4E] block">Provide Fresh Air</strong>
                    <span className="text-[11px] text-slate-500">100% fresh, oxygenated air displacement continuously.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-white border border-slate-200">
                  <CheckCircle2 size={18} className="text-[#009B4D] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs font-black text-[#142D4E] block">Less Noise Operation</strong>
                    <span className="text-[11px] text-slate-500">Precision balanced axial fans operate quietly at 70 dB.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-white border border-slate-200">
                  <CheckCircle2 size={18} className="text-[#009B4D] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs font-black text-[#142D4E] block">Humidity Control</strong>
                    <span className="text-[11px] text-slate-500">High-density evaporative honeycomb pads maintain ideal humidity.</span>
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#142D4E] hover:bg-[#009B4D] text-white px-6 py-3 text-xs sm:text-sm font-bold transition-colors"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. INDUSTRIES WE SERVE (IMAGE-LED PRACTICAL WORKSPACES)
      ══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="container-custom px-4">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#009B4D] bg-[#009B4D]/10 px-3 py-1 rounded-md">
                Practical Workspace Deployments
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#142D4E] mt-2 tracking-tight">
                Industries We Serve
              </h2>
            </div>
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#009B4D] hover:underline"
            >
              <span>Explore All 4 Industry Sectors</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Industry 1: Garments */}
            <div className="rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#009B4D] transition-all flex flex-col justify-between group">
              <div>
                <div className="h-44 overflow-hidden relative">
                  <img
                    src="/images/factory/about-factory.jpg"
                    alt="Garment & Textile Manufacturing"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#142D4E]/80 backdrop-blur-sm text-white p-2 rounded-xl">
                    <Shirt size={18} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-black text-slate-900 text-base group-hover:text-[#009B4D] transition-colors">
                    Garment & Textile Units
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Combines fresh evaporative cooling with fabric cutting tables, stitching lines, and material handling trolleys.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link
                  to="/industries"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009B4D] group-hover:underline"
                >
                  <span>Learn Application</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Industry 2: Heavy Manufacturing */}
            <div className="rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#009B4D] transition-all flex flex-col justify-between group">
              <div>
                <div className="h-44 overflow-hidden relative">
                  <img
                    src="/images/factory/strengths-industrial.jpg"
                    alt="Heavy Manufacturing & Engineering"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#142D4E]/80 backdrop-blur-sm text-white p-2 rounded-xl">
                    <Factory size={18} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-black text-slate-900 text-base group-hover:text-[#009B4D] transition-colors">
                    Manufacturing & Engineering
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Injection moulding, fabrication, and machine shops requiring rapid heat extraction and spot worker cooling.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link
                  to="/industries"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009B4D] group-hover:underline"
                >
                  <span>Learn Application</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Industry 3: Warehouses */}
            <div className="rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#009B4D] transition-all flex flex-col justify-between group">
              <div>
                <div className="h-44 overflow-hidden relative">
                  <img
                    src="/images/factory/hero-industrial-cooler.jpg"
                    alt="Warehousing & Logistics"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#142D4E]/80 backdrop-blur-sm text-white p-2 rounded-xl">
                    <Warehouse size={18} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-black text-slate-900 text-base group-hover:text-[#009B4D] transition-colors">
                    Warehouses & Logistics
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Large-volume ventilation with fibercone exhaust fans, heavy storage racking, and high bay IP65 lighting.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link
                  to="/industries"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009B4D] group-hover:underline"
                >
                  <span>Learn Application</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Industry 4: Workshops */}
            <div className="rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#009B4D] transition-all flex flex-col justify-between group">
              <div>
                <div className="h-44 overflow-hidden relative">
                  <img
                    src="/images/factory/industrial-outdoor-unit.jpg"
                    alt="Workshops & Assembly Lines"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#142D4E]/80 backdrop-blur-sm text-white p-2 rounded-xl">
                    <Wrench size={18} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-black text-slate-900 text-base group-hover:text-[#009B4D] transition-colors">
                    Workshops & Assembly Lines
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Flexible zone cooling, lockable industrial tool storage cabinets, and commercial task lighting.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link
                  to="/industries"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009B4D] group-hover:underline"
                >
                  <span>Learn Application</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6. WHY CHOOSE GREENTECH (SUPPORTED BY VERIFIED INFORMATION)
      ══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-[#F5F7F6] border-b border-slate-200">
        <div className="container-custom px-4">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#009B4D] bg-[#009B4D]/10 px-3 py-1 rounded-md">
              Reliable Industrial Partnership
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#142D4E] mt-2 tracking-tight">
              Why Choose GreenTech Solutions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Practical capabilities and direct OEM support for manufacturing plants across India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            
            {/* 1. Multiple Product Categories */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#009B4D] flex items-center justify-center mb-4">
                <Layers size={24} />
              </div>
              <h3 className="text-lg font-black text-[#142D4E]">
                Comprehensive Lineup
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Coolers, exhaust fans, high bay lights, and factory furniture available under one verified manufacturer umbrella.
              </p>
            </div>

            {/* 2. Workspace Options */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#009B4D] flex items-center justify-center mb-4">
                <Wrench size={24} />
              </div>
              <h3 className="text-lg font-black text-[#142D4E]">
                Configured For Your Space
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                From top-discharge roof units to floor-level down discharge and direct-drive fans matched to your specific floor area.
              </p>
            </div>

            {/* 3. Specification Support */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#009B4D] flex items-center justify-center mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg font-black text-[#142D4E]">
                Technical Sizing Support
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Clear airflow CFM, kilowatt ratings, voltage, and duct outlet sizing based on verified engineering tables.
              </p>
            </div>

            {/* 4. Prompt Assistance */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#009B4D] flex items-center justify-center mb-4">
                <PhoneCall size={24} />
              </div>
              <h3 className="text-lg font-black text-[#142D4E]">
                Direct Factory Assistance
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Connect directly with Ashok Kumar Satsangi and our Noida technical team for quotes and site visits.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          7. AUTHENTIC CLIENT SHOWCASE ("Our Valued Clients")
      ══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="container-custom px-4 mb-8">
          
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#009B4D]/10 border border-[#009B4D]/25 px-3.5 py-1 text-xs font-black text-[#009B4D] uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#009B4D] animate-pulse" />
              <span>Trusted Industrial Partners</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-black text-[#142D4E] tracking-tight leading-tight">
              Our Valued Clients
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl mx-auto leading-relaxed">
              Trusted by leading textile mills, heavy engineering manufacturers, and export houses across India.
            </p>
          </div>

        </div>

        {/* ── CONTINUOUS LOGO AUTO-SLIDER (ONLY LOGOS EXTRACTED FROM BROCHURE) ── */}
        <ClientLogoSlider />
      </section>

      {/* ══════════════════════════════════════════════════
          8. CALL TO ACTION (CLEAN INDUSTRIAL AESTHETIC WITH CRISP ACCENTS)
      ══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-[#FAFDFB]">
        <div className="container-custom px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-white via-slate-50 to-emerald-50/30 p-8 sm:p-14 lg:p-16 shadow-xl border border-slate-200/90 text-center max-w-4xl mx-auto">
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              
              <div className="inline-flex items-center gap-2 rounded-full bg-[#009B4D]/10 border border-[#009B4D]/25 text-[#009B4D] px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-2xs">
                <CheckCircle2 size={13} className="text-[#009B4D]" />
                <span>Get Factory Direct Pricing</span>
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#142D4E] tracking-tight leading-tight">
                Looking for the Right Industrial Solution?
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-normal">
                Tell us about your workspace, plant square footage, and cooling needs. Our Noida engineering team can provide CFM blueprints and commercial proposals.
              </p>

              <div className="pt-3 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#009B4D] hover:bg-[#007A3D] text-white px-8 py-3.5 text-sm sm:text-base font-bold shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <span>Request a Quote</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 hover:border-[#009B4D] bg-white hover:bg-slate-50 text-[#142D4E] hover:text-[#009B4D] px-8 py-3.5 text-sm sm:text-base font-bold transition-all duration-200"
                >
                  <span>Contact Us</span>
                </Link>
              </div>

              <div className="pt-6 text-xs text-slate-500 font-medium border-t border-slate-200/80 mt-8">
                Office No-7, Yadu Market, FNG Service Road, Sector-121, Noida | WhatsApp: {companyInfo.contact.whatsapp}
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

