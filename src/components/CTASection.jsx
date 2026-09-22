import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    PhoneCall,
    ShieldCheck,
    Truck,
    Zap,
    Headphones,
    CheckCircle2,
} from "lucide-react";

const ctaImages = [
    "/images/factory/industrial-cooling-towers.jpg",
    "/images/factory/industrial-outdoor-unit.jpg",
    "/images/factory/hero-industrial-cooler.jpg",
];

export default function CTASection({ companyInfo, wa }) {
    const ctaRef = useRef(null);
    const [ctaVis, setCtaVis] = useState(false);
    const [ctaSlide, setCtaSlide] = useState(0);

    // Reveal animation
    useEffect(() => {
        const element = ctaRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setCtaVis(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    // Slide background
    useEffect(() => {
        const timer = setInterval(() => {
            setCtaSlide((prev) => (prev + 1) % ctaImages.length);
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section
            ref={ctaRef}
            className="relative isolate overflow-hidden bg-slate-900 py-20 md:py-24 text-white select-none"
        >
            {/* ── BACKGROUND IMAGE (CLEAR & VISIBLE) ── */}
            <div className="absolute inset-0 overflow-hidden">
                {ctaImages.map((image, index) => (
                    <img
                        key={image}
                        src={image}
                        alt="GreenTech Factory Infrastructure"
                        aria-hidden="true"
                        className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ease-in-out ${ctaSlide === index ? "opacity-75 scale-100" : "opacity-0 scale-105 pointer-events-none"
                            }`}
                        style={{ transitionProperty: "opacity, transform", transitionDuration: "1000ms" }}
                    />
                ))}

                {/* Subtle dark green vignette so text is easy to read while image is clear */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(6,35,21,0.65) 0%, rgba(6,35,21,0.78) 50%, rgba(6,35,21,0.85) 100%)",
                    }}
                />
            </div>

            {/* ── MAIN CTA CONTENT (CENTERED & IMPACTFUL) ── */}
            <div className="container-custom relative z-10">
                <div className="mx-auto max-w-3xl text-center">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/90 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white backdrop-blur-md mb-5 shadow-lg">

                        <span>GreenTech Solutions • Direct Factory Supply</span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight drop-shadow-md">
                        Ready to Cut Energy Bills & Upgrade{" "}
                        <span className="text-emerald-400 underline decoration-emerald-500/40">
                            Factory Ventilation?
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="mt-4 text-base sm:text-lg text-slate-100 max-w-2xl mx-auto leading-relaxed drop-shadow">
                        Get comprehensive industrial cooling sizing, ducting blueprints, and direct manufacturer pricing for your plant.
                    </p>

                    {/* Value Badges */}
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-bold text-white">
                        <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full">
                            <CheckCircle2 size={15} className="text-emerald-400" />
                            Pan-India Delivery
                        </span>
                        <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full">
                            <ShieldCheck size={15} className="text-emerald-400" />
                            100% Quality Inspected
                        </span>
                        <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full">
                            <Headphones size={15} className="text-emerald-400" />
                            Instant WhatsApp Support
                        </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/contact"
                            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#009B4D] px-8 py-3.5 text-sm font-bold text-white shadow-xl hover:bg-[#007A3D] transition-all transform hover:scale-105"
                        >
                            <span>Request Factory Quotation</span>
                            <ArrowRight size={16} />
                        </Link>

                        <a
                            href={`https://wa.me/${companyInfo?.contact?.whatsappRaw || "919336331985"}?text=${wa || "Hi GreenTech!"}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white text-slate-900 px-8 py-3.5 text-sm font-bold shadow-xl hover:bg-slate-100 hover:text-[#009B4D] transition-all transform hover:scale-105"
                        >
                            <PhoneCall size={16} className="text-[#009B4D]" />
                            <span>Chat on WhatsApp (+91 9336331985)</span>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
