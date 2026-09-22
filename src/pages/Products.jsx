import { useEffect, useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import {
  Wind,
  Gauge,
  Lightbulb,
  Package,
  Layers,
  Search,
  Star,
  ShieldCheck,
  Zap,
  Truck,
  Building2,
  CheckCircle2,
  Quote,
} from "lucide-react";

const categoryList = [
  { id: "all", label: "All Products", icon: Layers, count: products.length },
  {
    id: "air-coolers",
    label: "Industrial Air Coolers",
    icon: Wind,
    count: products.filter((p) => p.category === "air-coolers").length,
  },
  {
    id: "exhaust-fans",
    label: "Industrial Exhaust Fans",
    icon: Gauge,
    count: products.filter((p) => p.category === "exhaust-fans").length,
  },
  {
    id: "industrial-lights",
    label: "Industrial Lighting",
    icon: Lightbulb,
    count: products.filter((p) => p.category === "industrial-lights").length,
  },
  {
    id: "furniture-storage",
    label: "Factory & Garment Furniture",
    icon: Package,
    count: products.filter((p) => p.category === "furniture-storage").length,
  },
];

const clientReviews = [
  {
    id: 1,
    client: "Mangla Textiles",
    sector: "Textile Spinning & Weaving Mill",
    author: "Rajesh Sharma",
    role: "Plant Operations Head",
    equipment: "4.5 kW Top Discharge Coolers",
    rating: 5,
    date: "Verified Installation",
    review:
      "Installed 4 units of 4.5 kW Top Discharge Coolers in our weaving shed. Temperature dropped by 8°C even in peak 44°C Noida heat. Electricity bill was 70% lower than centralized chillers.",
  },
  {
    id: 2,
    client: "Roto Pumps Ltd",
    sector: "Fluid & Heavy Engineering",
    author: "Vikramaditya Singh",
    role: "Chief Infrastructure Engineer",
    equipment: "GTS-1530 Direct Drive Exhaust Fans",
    rating: 5,
    date: "Verified Installation",
    review:
      "The direct-drive 1530 exhaust fans extract welding fumes and furnace heat effortlessly. Zero belt maintenance issues in over 18 months of 24/7 continuous operation.",
  },
  {
    id: 3,
    client: "Tulsi Creation",
    sector: "Apparel & Garment Exports",
    author: "Manish Jain",
    role: "Director Operations",
    equipment: "Prime CRCA Tables & High Bay LEDs",
    rating: 5,
    date: "Verified Installation",
    review:
      "GreenTech's heavy-duty cutting tables, storage racks, and high-bay LED lights transformed our garment floor productivity. Fast delivery and direct engineer support from Noida.",
  },
  {
    id: 4,
    client: "FairDeal Manufacturing",
    sector: "Plastics & Injection Moulding",
    author: "Sandeep Patel",
    role: "Works Manager",
    equipment: "GTS-1.5 kW Down Position Coolers",
    rating: 5,
    date: "Verified Installation",
    review:
      "Down position coolers provide focused draft right above our injection moulding operators. Excellent build quality, zero water leakage, and pure copper motors.",
  },
];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    document.title =
      "Industrial Products Catalog – GreenTech Solutions | Air Coolers, Exhaust Fans & Equipment";
  }, []);

  useEffect(() => {
    const cat = searchParams.get("category") || "all";
    setActiveCategory(cat);
  }, [searchParams]);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    if (catId === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: catId });
    }
  };

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchCat = activeCategory === "all" || p.category === activeCategory;
      const matchSearch =
        searchTerm === "" ||
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <div className="bg-[#FAFDFB] min-h-screen text-[#17212B]">
      
      {/* ══════════════════════════════════════════════════
          1. PRODUCTS PAGE HERO SECTION
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-r from-[#0B1726] via-[#142D4E] to-[#0B1726] text-white py-12 sm:py-16 overflow-hidden">
        {/* Subtle grid pattern */}
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
            <span className="text-white">Products Catalog</span>
            {activeCategory !== "all" && (
              <>
                <span>/</span>
                <span className="text-emerald-300 capitalize">
                  {activeCategory.replace("-", " ")}
                </span>
              </>
            )}
          </div>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#009B4D]/25 border border-[#009B4D]/40 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-emerald-300 mb-3 backdrop-blur-sm">
              <ShieldCheck size={14} className="text-[#009B4D]" />
              Official GreenTech Catalog • OEM Certified
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Industrial Products & Equipment
            </h1>

            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Heavy-duty ductable coolers (0.75kW – 4.5kW), direct & belt-drive exhaust fans, commercial high-bay UFO LEDs, and factory storage furniture engineered for Indian manufacturing plants.
            </p>

            {/* Quick Assurance Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold text-white/90">
              <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                <Truck size={15} className="text-[#009B4D]" /> Pan-India Supply
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                <ShieldCheck size={15} className="text-[#009B4D]" /> Verified OEM Specs
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                <Zap size={15} className="text-[#009B4D]" /> Up to 80% Power Saving
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. ALL PRODUCTS SHOWCASE (TOOLBAR + CARDS GRID)
      ══════════════════════════════════════════════════ */}
      <section className="py-8 sm:py-12">
        <div className="container-custom px-4">
          
          {/* Controls Bar: Category Pills + Search */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-3 sm:p-4 shadow-xs mb-8 flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto w-full lg:w-auto no-scrollbar py-0.5">
              {categoryList.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`inline-flex shrink-0 items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs sm:text-sm font-bold transition-all duration-200 border ${
                      isActive
                        ? "bg-[#009B4D] border-[#009B4D] text-white shadow-sm"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-emerald-50 hover:border-emerald-300"
                    }`}
                  >
                    <Icon size={14} />
                    <span>{cat.label}</span>
                    <span
                      className={`rounded-full px-1.5 py-0.2 text-[10px] font-extrabold ${
                        isActive ? "bg-white/25 text-white" : "bg-slate-200 text-slate-600"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Product Count & Search Box */}
            <div className="flex items-center gap-3 w-full lg:w-auto shrink-0 justify-between lg:justify-end">
              <span className="text-xs font-semibold text-slate-500 shrink-0 hidden sm:inline-block">
                Showing <strong className="text-slate-900">{filteredProducts.length}</strong> Products
              </span>

              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-4 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#009B4D] focus:outline-none transition-colors"
                />
                <Search
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
              </div>
            </div>

          </div>

          {/* All Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 rounded-2xl bg-white border border-slate-200 p-8">
              <p className="text-slate-600 text-base font-semibold">
                No products found matching your search.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("all");
                  setSearchTerm("");
                }}
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#009B4D] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#007A3D] transition-colors"
              >
                Show All Products
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          3. CLIENT TESTIMONIALS & REVIEWS SECTION
      ══════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#F5F8F6] border-t border-slate-200">
        <div className="container-custom px-4">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#009B4D] bg-[#009B4D]/10 px-3.5 py-1.5 rounded-full mb-3">
              <Star size={13} className="text-amber-500 fill-amber-500" />
              Verified Plant Performance Reports
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#142D4E] tracking-tight">
              Client Reviews & Field Feedback
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              Real operational feedback from manufacturing plant managers, infrastructure heads, and factory engineers across India using GreenTech equipment.
            </p>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-[#009B4D] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Star Rating & Equipment Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-md">
                      {rev.date}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-xs text-slate-700 leading-relaxed italic mb-4">
                    "{rev.review}"
                  </p>
                </div>

                {/* Author & Client Info */}
                <div className="pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[#142D4E] font-extrabold text-xs shrink-0">
                      {rev.client.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-[#142D4E] truncate">
                        {rev.author}
                      </h4>
                      <p className="text-[11px] text-[#009B4D] font-semibold truncate">
                        {rev.client}
                      </p>
                      <p className="text-[10px] text-slate-400 truncate">
                        {rev.role}
                      </p>
                    </div>
                  </div>

                  <div className="mt-2.5 text-[10px] text-slate-500 font-mono bg-slate-50 px-2 py-1 rounded truncate">
                    Setup: {rev.equipment}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-bold text-slate-600">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#009B4D]" />
              100% Genuine Commercial Installations
            </span>
            <span className="flex items-center gap-2">
              <Star size={16} className="text-amber-500 fill-amber-500" />
              5.0 Average Field Performance Rating
            </span>
            <span className="flex items-center gap-2">
              <Building2 size={16} className="text-[#009B4D]" />
              150+ Industrial Facilities Powered Across India
            </span>
          </div>

        </div>
      </section>

    </div>
  );
}
