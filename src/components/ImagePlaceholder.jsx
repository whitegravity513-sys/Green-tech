
export default function ImagePlaceholder({ category = "product", name = "", className = "", aspectRatio = "aspect-video" }) {
  const colors = {
    "air-coolers": { bg: "#E8F5EE", icon: "#009B4D", label: "Air Cooler" },
    "exhaust-fans": { bg: "#E8F0F5", icon: "#006B3C", label: "Exhaust Fan" },
    "industrial-lights": { bg: "#FFF8E1", icon: "#F59E0B", label: "Industrial Light" },
    "furniture-storage": { bg: "#EEF0F5", icon: "#142D4E", label: "Factory Furniture" },
    hero: { bg: "#E0F2EC", icon: "#009B4D", label: "Industrial" },
    factory: { bg: "#142D4E", icon: "#009B4D", label: "Factory" },
    about: { bg: "#E8F0F5", icon: "#142D4E", label: "About" },
    default: { bg: "#F0F9F3", icon: "#009B4D", label: "GreenTech" },
  };

  const color = colors[category] || colors.default;

  return (
    <div
      className={`${aspectRatio} ${className} flex flex-col items-center justify-center rounded-xl overflow-hidden`}
      style={{ backgroundColor: color.bg }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        className="mb-3 opacity-60"
      >
        <rect width="64" height="64" rx="12" fill={color.icon} fillOpacity="0.1" />
        <path
          d="M32 16C23.163 16 16 23.163 16 32s7.163 16 16 16 16-7.163 16-16S40.837 16 32 16zm0 28c-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12-5.373 12-12 12z"
          fill={color.icon}
        />
        <circle cx="32" cy="32" r="6" fill={color.icon} fillOpacity="0.5" />
      </svg>
      <p className="text-xs font-semibold text-center px-4" style={{ color: color.icon }}>
        {name || color.label}
      </p>
      <p className="text-xs text-gray-400 mt-1 text-center px-4">
        Place image in public/images/
      </p>
    </div>
  );
}
