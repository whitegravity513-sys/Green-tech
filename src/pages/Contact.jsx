import { useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Building2,
  FileText,
  User,
  ShieldCheck,
  Truck,
  ExternalLink,
  Navigation,
} from "lucide-react";
import EnquiryForm from "../components/EnquiryForm";
import { companyInfo } from "../data/company";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const preselectedProduct = searchParams.get("product") || "";

  useEffect(() => {
    document.title =
      "Contact GreenTech Solutions | Industrial Air Coolers & Exhaust Fans Manufacturer Noida";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        `Contact GreenTech Solutions in Sector 121, Noida for Industrial Air Coolers, Exhaust Fans, and Commercial LED lighting. WhatsApp: ${companyInfo.contact.whatsapp}.`
      );
  }, []);

  const headOfficeAddress =
    "Office No-7, Yadu Market, FNG Service Road, Near Parthla, Sector-121, Noida (Uttar Pradesh) - 201307";

  const googleMapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    "Office No-7, Yadu Market, FNG Service Road, Near Parthla, Sector-121, Noida, Uttar Pradesh 201307"
  )}&t=&z=16&ie=UTF8&iwloc=B&output=embed`;

  const waMsg = encodeURIComponent(
    `Hello GreenTech Solutions! I would like to get a quote and catalogue for industrial air coolers and exhaust fans.`
  );

  return (
    <div className="bg-[#FAFDFB] text-slate-800 min-h-screen">
      
      {/* ── HEADER BANNER (MATCHING PRODUCTS PAGE HERO) ── */}
      <section className="relative bg-gradient-to-r from-[#0B1726] via-[#142D4E] to-[#0B1726] text-white py-12 sm:py-16 overflow-hidden">
        {/* Subtle engineering grid */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        <div className="container-custom relative z-10 px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-3">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Contact Us</span>
          </div>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#009B4D]/25 border border-[#009B4D]/40 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-emerald-300 mb-3 backdrop-blur-sm">
              <Building2 size={13} className="text-[#009B4D]" />
              Direct Factory Consultation • Noida Sector-121
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Connect With Our Factory Team
            </h1>

            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Get instant factory-direct commercial quotations, plant cooling CFM calculations, ducting layout blueprints, and technical engineer guidance.
            </p>

            {/* Quick Assurance Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold text-white/90">
              <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                <Truck size={15} className="text-[#009B4D]" /> Pan-India Delivery
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                <ShieldCheck size={15} className="text-[#009B4D]" /> Verified OEM Supplier
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                <Phone size={15} className="text-[#009B4D]" /> Direct Engineer Line
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTACT SECTION ── */}
      <section className="py-12 md:py-16">
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

            {/* ── LEFT COLUMN: DIRECT DETAILS & MAP (7 COLS) ── */}
            <div className="lg:col-span-7 space-y-6">

              {/* Quick Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* WhatsApp Direct */}
                <a
                  href={`https://wa.me/${companyInfo.contact.whatsappRaw}?text=${waMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 rounded-2xl bg-emerald-600 text-white hover:bg-emerald-700 shadow-md hover:shadow-lg transition-all flex items-start gap-3.5"
                >
                  <div className="p-2.5 rounded-xl bg-white/20 text-white shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-100 block">
                      Fastest Response
                    </span>
                    <span className="text-base font-black block mt-0.5">WhatsApp Chat</span>
                    <span className="text-xs text-emerald-100 mt-1 block font-mono">
                      {companyInfo.contact.whatsapp}
                    </span>
                  </div>
                </a>

                {/* Direct Call / Contact Person */}
                <a
                  href="tel:+919336373719"
                  className="group p-5 rounded-2xl bg-white border border-emerald-100 hover:border-emerald-300 shadow-sm hover:shadow-md transition-all flex items-start gap-3.5"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 shrink-0 group-hover:scale-110 transition-transform">
                    <Phone size={22} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Ashok Kumar Satsangi
                    </span>
                    <span className="text-base font-black text-slate-900 block mt-0.5">Direct Call</span>
                    <span className="text-xs text-emerald-700 font-bold mt-1 block font-mono">
                      +91 9336373719
                    </span>
                  </div>
                </a>

              </div>

              {/* Comprehensive Details Card */}
              <div className="rounded-2xl bg-white border border-emerald-100 p-6 sm:p-7 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                    <Building2 size={18} className="text-emerald-600" />
                    Office & Registered Details
                  </h3>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    Make in India
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-2.5 sm:col-span-2">
                    <MapPin size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Head Office Address:</strong>
                      <span>
                        Office No-7, Yadu Market, FNG Service Road, Near Parthla, Sector-121, Noida (Uttar Pradesh) - 201307
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <FileText size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">GSTIN:</strong>
                      <span className="font-mono text-slate-800 font-semibold">09BSTPD0181R1Z0</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Working Hours:</strong>
                      <span>Mon – Sat: 9:00 AM – 7:30 PM</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 sm:col-span-2">
                    <Mail size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 block">Official Emails:</strong>
                      <div className="text-emerald-700 font-medium space-x-2">
                        <a href="mailto:greentech_solutions02@outlook.com" className="hover:underline">
                          greentech_solutions02@outlook.com
                        </a>
                        <span className="text-slate-400">|</span>
                        <a href="mailto:akkaizenmarketing62@gmail.com" className="hover:underline">
                          akkaizenmarketing62@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── GOOGLE MAP CONTAINER WITH VERIFIED NOIDA LOCATION PIN ── */}
              <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm">
                <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <div className="p-2 rounded-xl bg-emerald-50 text-[#009B4D] shrink-0 mt-0.5 border border-emerald-200">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#009B4D] block">
                        Head Office Location
                      </span>
                      <p className="text-xs sm:text-sm font-extrabold text-[#142D4E] mt-0.5 leading-snug">
                        {headOfficeAddress}
                      </p>
                    </div>
                  </div>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      headOfficeAddress
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#009B4D] hover:bg-[#007A3D] text-white px-3.5 py-2 text-xs font-bold shrink-0 transition-colors shadow-xs"
                  >
                    <Navigation size={13} />
                    <span>Get Directions</span>
                    <ExternalLink size={12} />
                  </a>
                </div>

                <div className="relative w-full h-[360px] sm:h-[400px] bg-slate-100">
                  <iframe
                    title="GreenTech Solutions Office Map Sector 121 Noida"
                    src={googleMapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />

                  {/* ── LOCATION SIGN BADGE OVERLAY ON MAP ── */}
                  <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-emerald-200/80 flex items-start gap-3 max-w-[320px] sm:max-w-sm pointer-events-auto">
                    <div className="relative flex items-center justify-center mt-1">
                      <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-red-400 opacity-60"></span>
                      <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-red-600 text-white shadow-md">
                        <MapPin size={16} fill="white" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <p className="text-xs font-black text-[#142D4E] leading-tight">
                          GreenTech Solutions
                        </p>
                        <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800">
                          Head Office
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-700 font-semibold mt-1 leading-snug">
                        Office No-7, Yadu Market, FNG Service Road, Near Parthla, Sector-121, Noida (U.P.) - 201307
                      </p>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          headOfficeAddress
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-[#009B4D] hover:underline mt-1.5"
                      >
                        <span>View on Google Maps</span>
                        <ExternalLink size={10} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* ── RIGHT COLUMN: INTERACTIVE ENQUIRY FORM (5 COLS) ── */}
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <div className="rounded-2xl bg-white border border-emerald-100 p-6 sm:p-7 shadow-sm">
                  <div className="mb-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                      Free Consultation
                    </span>
                    <h3 className="text-xl font-black text-slate-900 mt-2">
                      Request Quotation & Sizing
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill out your requirement and our engineering team will respond within 2 business hours.
                    </p>
                  </div>

                  <EnquiryForm preselectedProduct={preselectedProduct} />

                  {/* Trust Badges */}
                  <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-2 gap-3 text-[11px] text-slate-600">
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={15} className="text-emerald-600 shrink-0" />
                      <span>Direct OEM Pricing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck size={15} className="text-emerald-600 shrink-0" />
                      <span>Pan-India Delivery</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
