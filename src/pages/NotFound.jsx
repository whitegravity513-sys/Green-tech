import { Link } from "react-router-dom";
import { companyInfo } from "../data/company";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-graybg">
      <div className="bg-white rounded-3xl shadow-card p-12 max-w-md w-full">

        <div className="mb-6">
          <div className="text-8xl font-extrabold text-primary/20 leading-none select-none">404</div>
          <div className="text-4xl mt-2">🏭</div>
        </div>
        <h1 className="text-2xl font-extrabold text-navy mb-3">Page Not Found</h1>
        <p className="text-gray-500 mb-8 text-sm leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="btn-primary justify-center py-3">
            Go to Home
          </Link>
          <Link to="/products" className="btn-secondary justify-center py-3">
            View Products
          </Link>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-400">
            Need help?{" "}
            <a
              href={`https://wa.me/${companyInfo.contact.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              WhatsApp us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
