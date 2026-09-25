import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import { companyInfo } from "../data/company";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>

      <div className="hidden md:block bg-[#142D4E] text-white text-xs py-2 border-b border-white/10 select-none">
        <div className="container-custom flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${companyInfo.contact.phone}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-emerald-400 transition-colors"
            >
              <Phone size={12} className="text-emerald-400" />
              <span>{companyInfo.contact.phone}</span>
            </a>
            <a
              href={`mailto:${companyInfo.contact.email}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-emerald-400 transition-colors"
            >
              <Mail size={12} className="text-emerald-400" />
              <span>{companyInfo.contact.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-5 text-slate-300">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Make In India Certified OEM</span>
            </span>
            <span>
              <strong>GSTIN:</strong> {companyInfo.gstin}
            </span>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-1.5"
            : "bg-white border-b border-slate-100 py-2 sm:py-3"
        }`}
      >
        <div className="container-custom px-3 sm:px-4">
          <div className="flex items-center justify-between h-18 sm:h-22 md:h-24">

            <Link to="/" className="flex items-center gap-2 flex-shrink-0 group">
              <img
                src="/images/logo/greentech-logo.png"
                alt="GreenTech Solutions"
                className="h-14 sm:h-18 md:h-20 w-auto max-w-[200px] sm:max-w-[260px] md:max-w-[290px] object-contain transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main navigation">

              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    isActive
                      ? "text-[#009B4D] bg-emerald-50"
                      : "text-slate-700 hover:text-[#009B4D] hover:bg-slate-50"
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    isActive
                      ? "text-[#009B4D] bg-emerald-50"
                      : "text-slate-700 hover:text-[#009B4D] hover:bg-slate-50"
                  }`
                }
              >
                About Us
              </NavLink>

              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    isActive
                      ? "text-[#009B4D] bg-emerald-50"
                      : "text-slate-700 hover:text-[#009B4D] hover:bg-slate-50"
                  }`
                }
              >
                Products
              </NavLink>

              <NavLink
                to="/industries"
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    isActive
                      ? "text-[#009B4D] bg-emerald-50"
                      : "text-slate-700 hover:text-[#009B4D] hover:bg-slate-50"
                  }`
                }
              >
                Industries
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    isActive
                      ? "text-[#009B4D] bg-emerald-50"
                      : "text-slate-700 hover:text-[#009B4D] hover:bg-slate-50"
                  }`
                }
              >
                Contact
              </NavLink>

            </nav>

            <div className="flex items-center gap-2 sm:gap-3">

              <a
                href={`https://wa.me/${companyInfo.contact.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3.5 py-2 rounded-xl transition-colors"
              >
                <MessageCircle size={15} className="text-[#009B4D]" />
                <span>WhatsApp</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-[#009B4D] hover:bg-[#007A3D] text-white font-bold py-2.5 px-3.5 sm:px-5 rounded-xl text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
              >
                <span>Get a Quote</span>
              </Link>

              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-xl border border-slate-200 text-slate-800 hover:bg-slate-50 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>

            </div>

          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
          <div className="fixed top-0 right-0 w-[85%] max-w-[340px] h-full bg-white shadow-2xl p-6 overflow-y-auto flex flex-col justify-between">
            <div>

              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <img
                  src="/images/logo/greentech-logo.png"
                  alt="GreenTech Solutions"
                  className="h-12 sm:h-14 w-auto max-w-[190px] object-contain"
                />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-xl hover:bg-slate-100 text-slate-600"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="space-y-1 text-sm font-bold">
                <Link
                  to="/"
                  className="block px-3 py-2.5 rounded-xl text-slate-800 hover:bg-emerald-50 hover:text-[#009B4D]"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block px-3 py-2.5 rounded-xl text-slate-800 hover:bg-emerald-50 hover:text-[#009B4D]"
                >
                  About Us
                </Link>

                <Link
                  to="/products"
                  className="block px-3 py-2.5 rounded-xl text-slate-800 hover:bg-emerald-50 hover:text-[#009B4D]"
                >
                  Products
                </Link>

                <Link
                  to="/industries"
                  className="block px-3 py-2.5 rounded-xl text-slate-800 hover:bg-emerald-50 hover:text-[#009B4D]"
                >
                  Industries
                </Link>

                <Link
                  to="/contact"
                  className="block px-3 py-2.5 rounded-xl text-slate-800 hover:bg-emerald-50 hover:text-[#009B4D]"
                >
                  Contact
                </Link>
              </nav>
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-3">
              <a
                href={`https://wa.me/${companyInfo.contact.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 py-3 text-xs font-bold"
              >
                <MessageCircle size={16} />
                <span>WhatsApp: {companyInfo.contact.whatsapp}</span>
              </a>

              <Link
                to="/contact"
                className="w-full flex items-center justify-center rounded-xl bg-[#009B4D] text-white py-3 text-xs font-bold shadow-md"
              >
                <span>Request a Quote</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
