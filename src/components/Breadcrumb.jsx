import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb({ items }) {
  // items: [{label: 'Home', href: '/'}, {label: 'Products', href: '/products'}, {label: 'Product Name'}]
  return (
    <nav aria-label="Breadcrumb" className="bg-graybg border-b border-gray-200 py-3">
      <div className="container-custom">
        <ol className="flex items-center flex-wrap gap-1 text-sm">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-1">
              {idx > 0 && <ChevronRight size={14} className="text-gray-400 flex-shrink-0" />}
              {item.href ? (
                <Link
                  to={item.href}
                  className="text-primary hover:text-darkgreen font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-navy font-semibold truncate max-w-[200px]" title={item.label}>
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
