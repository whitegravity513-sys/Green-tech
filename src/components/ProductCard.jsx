import { Link, useNavigate } from "react-router-dom";
import { Eye, MessageSquare, Star, ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";
import ProductImage from "./ProductImage";
import { companyInfo } from "../data/company";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleEnquire = (e) => {
    e.preventDefault();
    navigate(`/contact?product=${encodeURIComponent(product.name)}`);
  };

  const waMsg = encodeURIComponent(
    `Hello GreenTech Solutions! I would like to enquire about ${product.name} (Model ID: ${product.id}).`
  );

  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#009B4D] transition-all duration-300 flex flex-col overflow-hidden">
      
      {/* ── BADGE ── */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
        {product.badge ? (
          <span className="rounded-full bg-[#009B4D] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-sm">
            {product.badge}
          </span>
        ) : (
          <span className="rounded-full bg-[#142D4E]/90 backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
            Industrial Grade
          </span>
        )}
      </div>

      {/* ── IMAGE AREA ── */}
      <Link
        to={`/products/${product.id}`}
        className="relative block aspect-[4/3] w-full overflow-hidden bg-slate-50 p-4"
      >
        <ProductImage
          src={product.image}
          alt={product.name}
          category={product.category}
          name={product.name}
          className="h-full w-full"
          imgClassName="h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-108"
        />
      </Link>

      {/* ── CARD BODY ── */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        
        {/* Rating & Category */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#009B4D]">
            {product.categoryName || "GreenTech Solution"}
          </span>
          <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
            <Star size={13} fill="currentColor" />
            <span>5.0</span>
          </div>
        </div>

        {/* Product Title */}
        <h3 className="font-bold text-[#142D4E] text-sm sm:text-base leading-snug mb-2 group-hover:text-[#009B4D] transition-colors line-clamp-2">
          <Link to={`/products/${product.id}`}>
            {product.name}
          </Link>
        </h3>

        {/* Short description */}
        <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mb-4">
          {product.shortDescription}
        </p>

        {/* Technical Specs Tags */}
        {product.features && product.features.length > 0 && (
          <div className="mt-auto mb-4 space-y-1 pt-3 border-t border-slate-100">
            {product.features.slice(0, 2).map((feat, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                <CheckCircle2 size={13} className="text-[#009B4D] shrink-0" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        )}

        {/* Factory Direct Pricing Label */}
        <div className="mb-4 flex items-baseline justify-between pt-1">
          <div>
            <span className="text-[11px] font-semibold text-slate-400 block uppercase">
              Pricing Tier
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#142D4E]">
              Direct Factory Wholesale
            </span>
          </div>
          <span className="text-[11px] font-bold text-[#009B4D] bg-emerald-50 px-2 py-0.5 rounded-md">
            Pan-India Supply
          </span>
        </div>

        {/* Action Buttons: WhatsApp Enquiry + Details */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
          <Link
            to={`/products/${product.id}`}
            className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white py-2.5 px-3 text-xs font-bold text-slate-700 hover:border-[#009B4D] hover:bg-emerald-50 hover:text-[#009B4D] transition-colors"
          >
            <Eye size={13} />
            <span>Details</span>
          </Link>

          <a
            href={`https://wa.me/${companyInfo.contact.whatsappRaw}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 rounded-xl bg-[#009B4D] py-2.5 px-3 text-xs font-bold text-white hover:bg-[#007A3D] shadow-sm transition-colors"
          >
            <PhoneCall size={13} />
            <span>Enquire</span>
          </a>
        </div>

      </div>

    </div>
  );
}
