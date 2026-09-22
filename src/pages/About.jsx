import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Wind,
  Gauge,
  Lightbulb,
  Package,
  MapPin,
  FileCheck,
  PhoneCall,
  Factory,
  Layers,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import ProductImage from "../components/ProductImage";
import { companyInfo } from "../data/company";

const clientLogos = [
  { name: "Mangla Textiles", logo: "/images/clients/logo-mangla.png", sector: "Textile Mill" },
  { name: "Roto Pumps Ltd", logo: "/images/clients/logo-rotopumps.png", sector: "Pumps & Fluids" },
  { name: "Sony Enterprises", logo: "/images/clients/logo-sonyenterprises.png", sector: "Engineering Spares" },
  { name: "Tulsi Creation", logo: "/images/clients/logo-tulsi.png", sector: "Apparel Export" },
  { name: "FairDeal", logo: "/images/clients/logo-fairdeal.png", sector: "Consumer Products" },
  { name: "Maple Industries", logo: "/images/clients/logo-maple.png", sector: "Eco Manufacturing" },
  { name: "GK Fashions Pvt Ltd", logo: "/images/clients/logo-gkfashions.png", sector: "Garments" },
  { name: "Cotton Concepts", logo: "/images/clients/logo-cottonconcepts.png", sector: "Fabrics" },
  { name: "R-Exim India", logo: "/images/clients/logo-rexim.png", sector: "Global Trade" },
  { name: "CTA Associates", logo: "/images/clients/logo-cta.png", sector: "Industrial Tech" },
  { name: "Fenzy Styles", logo: "/images/clients/logo-fenzystyles.png", sector: "Active Wear" },
  { name: "Galaxy Garments", logo: "/images/clients/logo-galaxygarments.png", sector: "Apparel Mills" },
  { name: "Shankar Fenestrations", logo: "/images/clients/logo-shankarfenestrations.png", sector: "Glass & Infra" },
  { name: "SG Global Exports", logo: "/images/clients/logo-sgglobal.png", sector: "Supply Chain" },
  { name: "Krishna Beads (KBI)", logo: "/images/clients/logo-krishnabeads.png", sector: "Industries LLP" },
  { name: "Sparklerr", logo: "/images/clients/logo-sparklerr.png", sector: "Industrial Lighting" },
  { name: "Manish", logo: "/images/clients/logo-manish.png", sector: "Textile Exports" },
];

export default function About() {
  useEffect(() => {
    document.title = "About GreenTech Solutions – Industrial Cooling, Ventilation & Equipment Manufacturer";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "GreenTech Solutions is a dedicated industrial cooling, ventilation, commercial lighting, and factory furniture manufacturer based in Sector-121 Noida."
      );
    }
  }, []);

  return (
    <div className="bg-[#FAFDFB] text-[#17212B]">
      
      {/* ── 1. EDITORIAL PAGE HERO ── */}
      <section className="relative bg-gradient-to-br from-[#0B1726] via-[#142D4E] to-[#0B1726] text-white py-14 sm:py-20 overflow-hidden">
        {/* Subtle engineering grid */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        <div className="container-custom relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">About Us</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#009B4D]/20 border border-[#009B4D]/40 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-emerald-300 mb-4 backdrop-blur-sm shadow-xs">
                <Factory size={14} className="text-[#009B4D]" />
                Engineering & Manufacturing Hub • Sector-121 Noida
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                About GreenTech Solutions
              </h1>

              <p className="mt-2 text-base sm:text-lg font-bold text-emerald-300">
                Engineering Heavy-Duty Climate & Workspace Equipment for Indian Industry
              </p>

              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                Founded in Sector-121 Noida, GreenTech Solutions manufactures and delivers high-performance ductable evaporative coolers, direct-drive exhaust fans, commercial UFO LED lighting, and prime steel factory furniture built for continuous operation across Indian manufacturing plants.
              </p>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#009B4D] hover:bg-[#007A3D] text-white px-6 py-3 text-xs sm:text-sm font-bold shadow-md transition-all"
                >
                  <span>Explore Products</span>
                  <ArrowRight size={15} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white px-6 py-3 text-xs sm:text-sm font-bold transition-all"
                >
                  <span>Contact Our Engineers</span>
                </Link>
              </div>

              {/* Verified Badges */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-3 sm:gap-4 text-xs font-semibold text-slate-200">
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2">
                  <FileCheck size={16} className="text-[#009B4D]" />
                  <span>GSTIN: {companyInfo.gstin}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2">
                  <MapPin size={16} className="text-[#009B4D]" />
                  <span>FNG Road, Noida (U.P.)</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2">
                  <ShieldCheck size={16} className="text-[#009B4D]" />
                  <span>Verified OEM Fabrication</span>
                </div>
              </div>
            </div>

            {/* Right Side Industrial Facility Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-slate-900 group">
                <img
                  src="/images/factory/about-factory.jpg"
                  alt="GreenTech Solutions Manufacturing Facility Noida"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1726]/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Manufacturing & Supply Unit
                    </span>
                    <span className="text-[10px] font-bold text-emerald-300 bg-[#009B4D]/30 px-2 py-0.5 rounded-md">
                      Sector-121 Noida
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-200">
                    Direct factory supply, custom CFM sizing blueprints & pan-India logistics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. COMPANY INTRODUCTION & VERIFIED PILLARS ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Intro */}
            <div className="lg:col-span-7">
              <span className="text-xs font-black uppercase tracking-widest text-[#009B4D]">
                Who We Are
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#142D4E] mt-2 mb-6 leading-tight">
                Dedicated Manufacturer of Industrial Equipment & Climate Control Systems
              </h2>

              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  Operating from our primary facility in <strong>Sector-121 Noida (Yadu Market, FNG Service Road)</strong>, GreenTech Solutions manufactures and supplies specialized industrial ventilation equipment, commercial grade LED lights, and custom workshop furniture.
                </p>
                <p>
                  Industrial environments face intense heat buildup from heavy machinery, injection moulding, furnaces, and dense garment workstations. Conventional AC systems are prohibitively expensive to install and run. Our evaporative cooling units deliver massive volumes of fresh, dust-filtered air with <strong>up to 80% lower electricity consumption</strong> compared to conventional cooling.
                </p>
                <p>
                  Beyond cooling, we manufacture heavy-duty direct-drive and fibercone exhaust fans for fume evacuation, energy-saving UFO LED high-bay lights for high-ceiling warehouses, and heavy-duty steel racks and cutting tables for garment production.
                </p>
              </div>

              {/* 4 Core Brochure Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 size={18} className="text-[#009B4D] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#142D4E] uppercase">100% Fresh Air</h4>
                    <p className="text-[12px] text-slate-500 mt-0.5">Continuous positive-pressure displacement of stale air and fumes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 size={18} className="text-[#009B4D] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#142D4E] uppercase">Power Efficiency</h4>
                    <p className="text-[12px] text-slate-500 mt-0.5">Engineered with high-efficiency copper wound industrial motors.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 size={18} className="text-[#009B4D] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#142D4E] uppercase">Rugged Construction</h4>
                    <p className="text-[12px] text-slate-500 mt-0.5">SS 304 and anti-corrosion galvanized casings for longevity.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 size={18} className="text-[#009B4D] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#142D4E] uppercase">Direct Factory Supply</h4>
                    <p className="text-[12px] text-slate-500 mt-0.5">Transparent commercial quotations and direct engineering support.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Factory & Equipment Collage */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <img
                  src="/images/factory/about-factory.jpg"
                  alt="Industrial shopfloor and manufacturing operations"
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xs bg-slate-100 p-2">
                  <img
                    src="/images/coolers/real-top-discharge.jpg"
                    alt="Top Discharge Air Cooler"
                    className="w-full h-32 object-contain"
                  />
                  <p className="text-[11px] font-bold text-slate-800 text-center mt-2">
                    Air Cooler Fabrication
                  </p>
                </div>

                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xs bg-slate-100 p-2">
                  <img
                    src="/images/exhaust-fans/fibercone-exhaust-fan.jpg"
                    alt="Fibercone Exhaust Fan"
                    className="w-full h-32 object-contain"
                  />
                  <p className="text-[11px] font-bold text-slate-800 text-center mt-2">
                    Exhaust & Ventilation
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. WHAT GREENTECH OFFERS — 4 CORE CATEGORIES ── */}
      <section className="py-16 bg-[#F5F7F6] border-y border-slate-200">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-[#009B4D]">
              Product Scope
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#142D4E] mt-2">
              Comprehensive Industrial Portfolio
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Every product in our catalog is engineered to withstand grueling factory duty cycles, heat, and vibration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Category 1 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#009B4D] flex items-center justify-center mb-4">
                <Wind size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#142D4E] mb-2">Industrial Air Coolers</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-1">
                Top discharge, down position, and ductable evaporative coolers (0.75 kW to 4.5 kW) with airflow from 18,000 to 40,000+ CFM.
              </p>
              <Link
                to="/products?category=air-coolers"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009B4D] hover:underline pt-2 border-t border-slate-100"
              >
                <span>View Coolers</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Category 2 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#142D4E] flex items-center justify-center mb-4">
                <Gauge size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#142D4E] mb-2">Exhaust Fans</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-1">
                Direct-drive heavy-duty fans (GTS-800 to 1530) and aerodynamic fibercone cone exhaust fans for fume, heat, and lint extraction.
              </p>
              <Link
                to="/products?category=exhaust-fans"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009B4D] hover:underline pt-2 border-t border-slate-100"
              >
                <span>View Fans</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Category 3 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <Lightbulb size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#142D4E] mb-2">Industrial Lighting</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-1">
                High-bay UFO LED lighting (50W to 250W), IP65 industrial street luminaires, and commercial flood lights for shed illumination.
              </p>
              <Link
                to="/products?category=industrial-lights"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009B4D] hover:underline pt-2 border-t border-slate-100"
              >
                <span>View Lighting</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Category 4 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-4">
                <Package size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#142D4E] mb-2">Factory Furniture</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-1">
                Heavy-duty multi-tier storage racks, garment inspection and cutting tables, material handling trolleys, and industrial steel almirahs.
              </p>
              <Link
                to="/products?category=furniture-storage"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009B4D] hover:underline pt-2 border-t border-slate-100"
              >
                <span>View Furniture</span>
                <ArrowRight size={13} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. INDUSTRIAL APPLICATIONS ── */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-xs font-black uppercase tracking-widest text-[#009B4D]">
                Applications
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#142D4E] mt-2 mb-4 leading-tight">
                Designed for Challenging Industrial Workspaces
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                From garment stitching floors with hundreds of operators to high-ceiling logistics warehouses, GreenTech Solutions tailors cooling and ventilation to the unique thermal and spatial dynamics of each plant.
              </p>

              <Link
                to="/industries"
                className="inline-flex items-center gap-2 rounded-xl bg-[#142D4E] text-white px-5 py-3 text-xs font-bold hover:bg-[#0D1F37] transition-colors"
              >
                <span>Explore Industry Case Studies</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-sm text-[#142D4E] mb-1">Garments & Textiles</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Removes fabric lint, maintains controlled air changes, and cools dense operator lines.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-sm text-[#142D4E] mb-1">Heavy Manufacturing & Forging</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Evacuates thermal heat buildup from furnaces and machinery via high-CFM fibercone extractors.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-sm text-[#142D4E] mb-1">Warehouses & Logistics Hubs</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Low-energy ductless cooling and IP65 high bay illumination across thousands of square meters.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-sm text-[#142D4E] mb-1">Assembly & Auto Ancillaries</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Custom material handling trolleys, QC tables, and ductable spot cooling for workstations.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. AUTHENTIC CLIENTS SHOWCASE ── */}
      <section className="py-16 bg-[#F5F7F6] border-t border-slate-200">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-[#009B4D] bg-[#009B4D]/10 px-3.5 py-1.5 rounded-full inline-block">
              Verified Industrial Clients
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#142D4E] mt-3 tracking-tight">
              Trusted by Leading Industrial Enterprises
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Proud equipment supplier to manufacturing plants, textile export mills, engineering houses, and logistics leaders across India.
            </p>
          </div>

          {/* Clean Logos & Company Names Grid (NO BROCHURE BANNER IMAGE) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 max-w-5xl mx-auto">
            {clientLogos.map((client) => (
              <div
                key={client.name}
                className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-[#009B4D] transition-all duration-300 flex flex-col items-center justify-center text-center gap-2 group"
              >
                <div className="h-12 w-full flex items-center justify-center p-1">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-11 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 leading-snug group-hover:text-[#009B4D] transition-colors">
                    {client.name}
                  </h4>
                  <span className="text-[10px] text-slate-500 font-medium block mt-0.5">
                    {client.sector}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. STRONG ENQUIRY CALL TO ACTION ── */}
      <section className="py-14 sm:py-20 bg-[#FAFDFB]">
        <div className="container-custom px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#062B18] via-[#006331] to-[#009B4D] text-white p-8 sm:p-14 lg:p-16 shadow-2xl border border-emerald-500/30 text-center max-w-5xl mx-auto">
            <div className="relative z-10 max-w-3xl mx-auto space-y-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 border border-white/25 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-emerald-100 backdrop-blur-sm shadow-xs">
                Direct Factory Consultation
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Looking for the Right Industrial Solution?
              </h2>
              <p className="text-emerald-50 text-xs sm:text-base leading-relaxed max-w-2xl mx-auto">
                Tell us about your workspace, plant dimensions, and cooling requirements. Our team in Sector-121 Noida can provide custom ducting designs, CFM calculations, and commercial proposals.
              </p>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link
                  to="/contact?tab=quote"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-emerald-50 text-[#006331] px-8 py-3.5 text-xs sm:text-sm font-extrabold shadow-lg hover:shadow-xl transition-all"
                >
                  <span>Request a Quote</span>
                  <ArrowRight size={15} />
                </Link>

                <a
                  href={`https://wa.me/${companyInfo.contact.whatsappRaw}?text=${encodeURIComponent(
                    "Hello GreenTech Solutions! I would like to schedule a consultation for industrial cooling and ventilation."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 text-xs sm:text-sm font-bold backdrop-blur-sm transition-all"
                >
                  <PhoneCall size={15} />
                  <span>Talk to Technical Engineer</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
