import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { MessageSquare, Phone, CheckCircle, ArrowRight, ChevronRight } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import ProductCard from "../components/ProductCard";
import ProductImage from "../components/ProductImage";
import SectionHeading from "../components/SectionHeading";
import { getProductById, getRelatedProducts } from "../data/products";
import { companyInfo } from "../data/company";

const benefitIcons = {
  "Efficient Performance": "⚡",
  "Durable Construction": "🛡️",
  "Industrial Applications": "🏭",
  "Easy Maintenance": "🔧",
  "Energy Saving": "💡",
  "Long Lifespan": "⏱️",
  "Zero Energy Cost": "☀️",
  "Eco-Friendly": "🌿",
  "Heavy Duty": "💪",
  "Ergonomic Design": "📐",
  "Factory Applications": "🏗️",
  "Custom Sizes": "📐",
  "Space Optimization": "📦",
  "Organized Facility": "📋",
  "Purpose Built": "🎯",
  "Garment Industry": "👗",
  "Material Handling": "🔄",
  "Secure Storage": "🔒",
  "Complete Solution": "✅",
  "Custom Layout": "📏",
  "Worker Welfare": "👷",
  "Hygiene": "🧹",
  "Organized Storage": "🗄️",
  "Organized Workspace": "🗃️",
  "Efficiency": "📈",
};

export default function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = getProductById(productId);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} – GreenTech Solutions`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", `${product.name} – ${product.shortDescription} | GreenTech Solutions, Noida.`);
      setActiveImage(0);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="text-6xl mb-4">🔍</div>
        <h1 className="text-2xl font-bold text-navy mb-3">Product Not Found</h1>
        <p className="text-gray-500 mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <div className="flex gap-3">
          <Link to="/products" className="btn-primary">View All Products</Link>
          <Link to="/" className="btn-secondary">Go Home</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, product.category, 3);
  const gallery = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
  const waMsg = encodeURIComponent(`Hello GreenTech Solutions! I am interested in: ${product.name}. Please send me more details and pricing.`);

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.name },
        ]}
      />

      {/* ===================== PRODUCT DETAIL ===================== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left – Images */}
            <div>
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden shadow-card border border-slate-200 mb-4 bg-slate-50 flex items-center justify-center">
                <ProductImage
                  src={gallery[activeImage]}
                  alt={`${product.name} - image ${activeImage + 1}`}
                  category={product.category}
                  name={product.name}
                  className="h-[380px] md:h-[440px] w-full"
                  imgClassName="object-contain p-4"
                />
              </div>
              {/* Thumbnails */}
              {gallery.length > 1 && (
                <div className="flex gap-3 flex-wrap">
                  {gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`w-20 h-20 rounded-xl overflow-hidden border-2 bg-slate-50 p-1 transition-all ${activeImage === idx ? "border-primary shadow-green" : "border-gray-200 hover:border-primary/50"}`}
                      aria-label={`View image ${idx + 1}`}
                    >
                      <ProductImage
                        src={img}
                        alt={`${product.name} thumbnail ${idx + 1}`}
                        category={product.category}
                        name=""
                        className="w-full h-full"
                        imgClassName="object-contain"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right – Info */}
            <div>
              {/* Category tag */}
              <span className="inline-block badge-green mb-3">{product.categoryName}</span>
              {product.badge && (
                <span className="inline-block badge bg-primary/10 text-primary ml-2 mb-3">{product.badge}</span>
              )}

              <h1 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight mb-4">
                {product.name}
              </h1>

              <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

              {/* Features */}
              {product.features && (
                <div className="mb-6">
                  <h3 className="font-bold text-navy text-sm uppercase tracking-wide mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {product.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-sm text-gray-700">
                        <CheckCircle size={15} className="text-primary flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Link
                  to={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="flex-1 btn-primary py-3.5 justify-center text-sm font-bold shadow-sm"
                >
                  <MessageSquare size={16} />
                  Request Commercial Quote
                </Link>
                <a
                  href={`https://wa.me/${companyInfo.contact.whatsappRaw}?text=${waMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#009B4D] hover:bg-[#007A3D] text-white px-5 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>

              {/* Contact info */}
              <div className="bg-[#FAFDFB] rounded-xl p-4 border border-slate-200">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#142D4E]">
                  <Phone size={14} className="text-[#009B4D]" />
                  <span className="font-semibold">Direct Technical Support:</span>
                  <a href={`tel:${companyInfo.contact.phone}`} className="text-[#009B4D] font-bold hover:underline">
                    {companyInfo.contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SPECS TABLE ===================== */}
      {product.specs ? (
        <section className="py-14 bg-graybg">
          <div className="container-custom">
            <SectionHeading
              badge="Specifications"
              title="Technical Specifications"
              subtitle="Detailed technical data for informed purchasing decisions."
            />
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-card overflow-hidden border border-gray-100">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    {product.specs.headers.map((h, i) => (
                      <th key={i} className={`px-6 py-4 text-left font-semibold tracking-wide ${i === 0 ? "w-2/5" : ""}`}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {product.specs.rows.map((row, i) => (
                    <tr key={i} className={`border-b border-gray-100 hover:bg-greenlight transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                      {row.map((cell, j) => (
                        <td key={j} className={`px-6 py-3.5 ${j === 0 ? "font-semibold text-navy" : "text-gray-600"}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-gray-400 text-xs mt-4">
              * Specifications may vary. Contact us for custom requirements.
            </p>
          </div>
        </section>
      ) : (
        <section className="py-12 bg-graybg">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 text-center shadow-card border border-gray-100">
              <div className="w-14 h-14 bg-greenlight rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={22} className="text-primary" />
              </div>
              <h3 className="font-bold text-navy text-lg mb-2">Technical Specifications</h3>
              <p className="text-gray-500 text-sm mb-4">
                Contact us for detailed technical specifications for this product.
              </p>
              <Link to="/contact" className="btn-primary justify-center mx-auto">
                Contact Us for Specifications
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ===================== BENEFITS ===================== */}
      {product.benefits && product.benefits.length > 0 && (
        <section className="py-14 bg-white">
          <div className="container-custom">
            <SectionHeading badge="Why Choose This" title="Product Benefits" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl mx-auto">
              {product.benefits.map((b, i) => (
                <div key={i} className="bg-greenlight rounded-2xl p-5 text-center border border-primary/10 hover:border-primary hover:-translate-y-1 transition-all duration-200">
                  <div className="text-3xl mb-3">{benefitIcons[b] || "✅"}</div>
                  <p className="font-semibold text-navy text-sm leading-tight">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===================== RELATED PRODUCTS ===================== */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-graybg">
          <div className="container-custom">
            <SectionHeading
              badge="More Products"
              title="Related Products"
              subtitle="Other products from the same category you might be interested in."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/products" className="btn-navy py-3 px-8">
                View All Products
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ===================== ENQUIRY CTA ===================== */}
      <section className="py-16 bg-gradient-to-r from-navy to-darkgreen">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Need Help Choosing the Right Product?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Our technical team will help you select the perfect solution for your factory needs.
          </p>
          <Link
            to={`/contact?product=${encodeURIComponent(product.name)}`}
            className="btn-primary py-3.5 px-10 text-sm"
          >
            <MessageSquare size={16} />
            Send an Enquiry
          </Link>
        </div>
      </section>
    </>
  );
}
