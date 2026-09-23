import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, CheckCircle2, ExternalLink } from "lucide-react";
import { companyInfo } from "../data/company";
import { categories } from "../data/categories";

export default function Footer() {
  const year = new Date().getFullYear();
  const waMsg = encodeURIComponent("Hello GreenTech Solutions! I would like to enquire about your industrial cooling and equipment solutions.");

  return (
    <footer className="bg-[#0B1726] text-white">
      {/* Upper Industrial Assurance Strip */}
      <div className="border-t border-b border-white/10 bg-[#06101B] py-6">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#009B4D]/20 text-[#009B4D] flex items-center justify-center shrink-0 border border-[#009B4D]/30">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">OEM Fabrication</p>
                <p className="text-[11px] text-slate-300">Heavy-duty industrial grade</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#009B4D]/20 text-[#009B4D] flex items-center justify-center shrink-0 border border-[#009B4D]/30">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Verified GSTIN</p>
                <p className="text-[11px] text-slate-300">09BSTPD0181R1Z0</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#009B4D]/20 text-[#009B4D] flex items-center justify-center shrink-0 border border-[#009B4D]/30">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Sector-121 Noida</p>
                <p className="text-[11px] text-slate-300">FNG Road, Delhi NCR</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#009B4D]/20 text-[#009B4D] flex items-center justify-center shrink-0 border border-[#009B4D]/30">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Direct Engineer Support</p>
                <p className="text-[11px] text-slate-300">+91 9711435123</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1 – Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <img
                src="/images/logo/greentech-logo.png"
                alt="GreenTech Solutions"
                className="h-16 w-auto bg-white p-2 rounded-xl object-contain shadow-sm"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <div>
                <div className="font-black text-lg text-white tracking-wide">GREENTECH</div>
                <div className="text-[10px] font-bold text-[#009B4D] tracking-widest uppercase">SOLUTIONS</div>
              </div>
            </Link>

            <p className="text-slate-300 text-xs leading-relaxed mb-5">
              Industrial air coolers, ductable ventilation, exhaust fans, commercial LED high bays, and factory furniture customized for manufacturing, garments, and warehousing.
            </p>

            <div className="flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${companyInfo.contact.whatsappRaw}?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#009B4D] hover:bg-[#007A3D] text-white text-xs font-bold px-4 py-3 rounded-xl transition-all shadow-md shadow-emerald-950/40"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>WhatsApp Enquiry</span>
              </a>              {/* Quick links to verified social channels & catalog */}
              <div className="grid grid-cols-2 gap-2 mt-1">
                <a
                  href={companyInfo.social.whatsappChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow Greentech Solutions on WhatsApp"
                  className="flex items-center justify-center gap-1.5 px-2.5 py-2.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/30 text-[11px] font-bold transition-all group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>WA Channel</span>
                </a>

                <a
                  href={companyInfo.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Subscribe to Greentech Solutions on YouTube"
                  className="flex items-center justify-center gap-1.5 px-2.5 py-2.5 rounded-xl bg-[#FF0000]/15 hover:bg-[#FF0000] text-[#FF4D4D] hover:text-white border border-[#FF0000]/30 text-[11px] font-bold transition-all group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  <span>YouTube</span>
                </a>
              </div>

              {/* View Our Catalog IndiaMART */}
              <a
                href={companyInfo.social.indiamart}
                target="_blank"
                rel="noopener noreferrer"
                title="View Our Catalog on IndiaMART"
                className="inline-flex items-center justify-center gap-2 bg-[#009B4D] hover:bg-[#007A3D] text-white px-3 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md group mt-1"
              >
                <CheckCircle2 size={15} />
                <span>View Our Catalog ⬇️</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Column 2 – Quick Links */}
          <div>
            <h3 className="font-bold text-sm text-white uppercase tracking-wider mb-5 pb-2 border-b border-white/10">Navigation</h3>
            <ul className="space-y-2.5">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About GreenTech" },
                { to: "/products", label: "Products Catalog" },
                { to: "/industries", label: "Industries We Serve" },
                { to: "/contact", label: "Contact Us" },
                { to: "/contact?tab=quote", label: "Request a Quote" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-2 text-slate-300 hover:text-[#009B4D] text-xs font-medium transition-colors group"
                  >
                    <ArrowRight size={12} className="text-[#009B4D] group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Product Categories */}
          <div>
            <h3 className="font-bold text-sm text-white uppercase tracking-wider mb-5 pb-2 border-b border-white/10">Industrial Equipment</h3>
            <ul className="space-y-2.5">
              {[
                { to: "/products?category=air-coolers", label: "Industrial Air Coolers" },
                { to: "/products?category=exhaust-fans", label: "Industrial Exhaust Fans" },
                { to: "/products?category=industrial-lights", label: "Commercial Industrial Lighting" },
                { to: "/products?category=furniture-storage", label: "Factory & Garment Furniture" },
              ].map((cat) => (
                <li key={cat.label}>
                  <Link
                    to={cat.to}
                    className="flex items-center gap-2 text-slate-300 hover:text-[#009B4D] text-xs font-medium transition-colors group"
                  >
                    <ArrowRight size={12} className="text-[#009B4D] group-hover:translate-x-1 transition-transform" />
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 – Contact Details */}
          <div>
            <h3 className="font-bold text-sm text-white uppercase tracking-wider mb-5 pb-2 border-b border-white/10">Contact Office</h3>
            <ul className="space-y-3.5 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#009B4D] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Office No-7, Yadu Market, FNG Service Road Near Parthla, Sector-121, Noida (U.P.)
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-[#009B4D] shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919336373719" className="hover:text-white transition-colors">
                    Ashok Kumar Satsangi (WhatsApp): +91 93363 73719
                  </a>
                  <a href="tel:+919711435123" className="hover:text-white transition-colors">
                    Sales Support: +91 9711435123
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={14} className="text-[#009B4D] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href="mailto:greentech_solutions02@outlook.com" className="hover:text-white transition-colors break-all">
                    greentech_solutions02@outlook.com
                  </a>
                  <a href="mailto:akkaizenmarketing62@gmail.com" className="hover:text-white transition-colors break-all">
                    akkaizenmarketing62@gmail.com
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-5 space-y-2.5">
              <div className="text-[11px] text-slate-300 bg-white/5 rounded-xl p-3 border border-white/10">
                <span className="text-white font-bold block mb-0.5">GSTIN Registered</span>
                <span className="font-mono text-emerald-400 font-semibold">09BSTPD0181R1Z0</span>
              </div>

              {/* IndiaMART Verified Supplier & Catalog */}
              <a
                href={companyInfo.social.indiamart}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[11px] bg-emerald-950/40 hover:bg-emerald-900/50 text-slate-300 rounded-xl p-3 border border-emerald-500/30 hover:border-emerald-500/60 transition-all group"
              >
                <div className="flex items-center justify-between text-white font-bold mb-1">
                  <span className="flex items-center gap-1.5 text-emerald-300">
                    <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                    IndiaMART Verified Supplier
                  </span>
                  <ExternalLink size={12} className="text-slate-400 group-hover:text-emerald-300 transition-colors" />
                </div>
                <span className="text-slate-300 block text-[11px]">
                  View our catalog ⬇️
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-white/10 bg-[#06101B]">
        <div className="container-custom py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <p className="text-center sm:text-left">
            © {year} GreenTech Solutions. All rights reserved. • Industrial Cooling & Ventilation Solutions.
          </p>
          <div className="flex items-center gap-4">
            <span>Sector-121 Noida, Uttar Pradesh</span>
            <span>•</span>
            <span className="text-[#009B4D] font-bold">Make In India</span>
          </div>
        </div>
      </div>
    </footer >
  );
}

