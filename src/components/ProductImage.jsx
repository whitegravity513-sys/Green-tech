
const categoryFallbacks = {
  "air-coolers": "/images/coolers/category-air-coolers.jpg",
  "exhaust-fans": "/images/exhaust-fans/direct-drive-fan.jpg",
  "industrial-lights": "/images/industrial-lights/category-lights.jpg",
  "furniture-storage": "/images/furniture/category-furniture.jpg",
};

export default function ProductImage({
  src,
  alt,
  category,
  name,
  className = "",
  imgClassName = "",
}) {
  const fallbackSrc =
    categoryFallbacks[category] || "/images/coolers/category-air-coolers.jpg";

  const hasExplicitFit = imgClassName.includes("object-");

  return (
    <div className={`relative overflow-hidden bg-slate-50 flex items-center justify-center ${className}`}>
      <img
        src={src || fallbackSrc}
        alt={alt || name}
        className={`w-full h-full ${hasExplicitFit ? "" : "object-contain"} ${imgClassName}`}
        onError={(e) => {
          if (e.currentTarget.src !== fallbackSrc) {
            e.currentTarget.src = fallbackSrc;
          }
        }}
      />
    </div>
  );
}
