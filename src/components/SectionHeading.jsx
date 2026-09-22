export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
  className = "",
}) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""} ${className}`}>
      {badge && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 ${light ? "bg-white/20 text-white" : "bg-greenlight text-primary"}`}>
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold leading-tight ${light ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg leading-relaxed max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-white/80" : "text-gray-600"}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 flex items-center gap-2 ${centered ? "justify-center" : ""}`}>
        <div className={`h-1 w-12 rounded-full ${light ? "bg-white" : "bg-primary"}`} />
        <div className={`h-1 w-6 rounded-full ${light ? "bg-white/50" : "bg-primary/40"}`} />
        <div className={`h-1 w-3 rounded-full ${light ? "bg-white/30" : "bg-primary/20"}`} />
      </div>
    </div>
  );
}
