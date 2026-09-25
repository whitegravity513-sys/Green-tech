import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Wind,
  Gauge,
  Lightbulb,
  Package,
  Building2,
  CheckCircle2,
  Factory,
  Warehouse,
  Shirt,
  Wrench,
  ShieldCheck,
  PhoneCall,
  MessageCircle,
} from "lucide-react";
import { companyInfo } from "../data/company";

const industriesData = [
  {
    id: "garment-textile",
    title: "Garment & Textile Manufacturing",
    icon: Shirt,
    image: "/images/factory/about-factory.jpg",
    problem:
      "High worker density, heat from fabric pressing equipment, and airborne cotton dust require continuous fresh air exchange without drying out delicate threads.",
    solution:
      "Evaporative air cooling provides fresh, humidity-balanced air to keep workers cool and productive. Combined with specialized fabric cutting tables, stitching tables, and material movement trolleys.",
    recommendedProducts: [
      { name: "Industrial Ductable Air Coolers", link: "/products?category=air-coolers" },
      { name: "Cutting & Stitching Tables", link: "/products?category=furniture-storage" },
      { name: "Garment Loading Trolleys", link: "/products?category=furniture-storage" },
    ],
    tag: "High Humidity & Dust Control",
  },
  {
    id: "industrial-manufacturing",
    title: "Heavy Manufacturing & Engineering",
    icon: Factory,
    image: "/images/factory/strengths-industrial.jpg",
    problem:
      "CNC machining, injection moulding, metal fabrication, and welding generate massive localized heat loads and metal fumes that quickly exceed ambient limits.",
    solution:
      "High-velocity direct drive and belt drive exhaust fans rapidly extract fumes and hot air at roof level, while down-discharge and ductable air coolers deliver cool air directly to worker stations.",
    recommendedProducts: [
      { name: "Direct Drive Exhaust Fans", link: "/products?category=exhaust-fans" },
      { name: "Down Position Air Coolers", link: "/products?category=air-coolers" },
      { name: "Heavy Duty Workstations", link: "/products?category=furniture-storage" },
    ],
    tag: "Heat & Fume Extraction",
  },
  {
    id: "warehousing-storage",
    title: "Warehousing & Logistics Centers",
    icon: Warehouse,
    image: "/images/factory/hero-industrial-cooler.jpg",
    problem:
      "High-ceiling warehouses trap heat in summer, creating unbearable temperatures near racking levels, while vast floor areas require efficient illumination.",
    solution:
      "Fibercone exhaust fans and roof-mounted coolers circulate vast air volumes economically. High Bay IP65 UFO LEDs illuminate high-rack aisles with zero glare and low wattage.",
    recommendedProducts: [
      { name: "Industrial Fibercone Exhaust Fans", link: "/products?category=exhaust-fans" },
      { name: "High Bay UFO LED Lighting", link: "/products?category=industrial-lights" },
      { name: "Heavy Duty Storage Racks", link: "/products?category=furniture-storage" },
    ],
    tag: "Large Volume Ventilation",
  },
];

export default function Industries() {
  useEffect(() => {
    document.title =
      "Industries We Serve | GreenTech Solutions Noida – Industrial Cooling & Ventilation";
  }, []);

  return (
    <div className="bg-[#FAFDFB] text-[#17212B] min-h-screen">

      <section className="relative bg-[#142D4E] text-white py-16 md:py-24 px-4 overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 75% 25%, #009B4D 0%, transparent 45%), radial-gradient(circle at 20% 80%, #006B3C 0%, transparent 45%)",
          }}
        />
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-4">
            <Building2 size={13} />
            <span>Practical Industrial Applications</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Engineered For Demanding Industrial Environments
          </h1>
          <p className="mt-4 text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            From heat-intensive manufacturing sheds to high-density textile units and large logistic warehouses, discover how GreenTech Solutions delivers tailored climate control and workspace equipment.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-custom px-4">
          <div className="space-y-16">
            {industriesData.map((ind, idx) => {
              const Icon = ind.icon;
              const isReversed = idx % 2 !== 0;
              return (
                <div
                  key={ind.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >

                  <div
                    className={`lg:col-span-6 ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl group">
                      <img
                        src={ind.image}
                        alt={ind.title}
                        className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      <div className="absolute bottom-5 left-5 right-5 text-white">
                        <span className="inline-block bg-[#009B4D] text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                          {ind.tag}
                        </span>
                        <h3 className="text-xl font-black text-white">
                          {ind.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`lg:col-span-6 space-y-5 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="inline-flex items-center gap-2 p-2 rounded-xl bg-emerald-50 text-[#009B4D]">
                      <Icon size={22} />
                      <span className="text-xs font-bold uppercase tracking-wider">
                        Workspace Sector {idx + 1}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black text-[#142D4E] tracking-tight leading-tight">
                      {ind.title}
                    </h2>

                    <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                        <strong className="text-amber-950 block mb-1">
                          Environmental Challenge:
                        </strong>
                        <p>{ind.problem}</p>
                      </div>

                      <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                        <strong className="text-emerald-950 block mb-1">
                          GreenTech Engineering Solution:
                        </strong>
                        <p>{ind.solution}</p>
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                        Relevant GreenTech Categories:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {ind.recommendedProducts.map((p, pIdx) => (
                          <Link
                            key={pIdx}
                            to={p.link}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800 hover:border-emerald-500 hover:text-emerald-700 transition-colors shadow-sm"
                          >
                            <span>{p.name}</span>
                            <ArrowRight size={12} />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#142D4E] text-white">
        <div className="container-custom px-4 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
            Have a Specific Workspace Challenge?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl mx-auto">
            Our engineering team in Noida provides custom facility heat-load assessments and ducting layout suggestions.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#009B4D] hover:bg-[#007A3D] text-white px-7 py-3.5 text-sm font-bold shadow-lg transition-all"
            >
              <span>Consult Our Engineering Team</span>
              <ArrowRight size={15} />
            </Link>
            <a
              href={`https://wa.me/${companyInfo.contact.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 text-sm font-bold transition-all"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
