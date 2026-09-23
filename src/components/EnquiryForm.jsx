import { useState } from "react";
import { Send, CheckCircle, AlertCircle, MessageCircle } from "lucide-react";
import { productOptions } from "../data/products";
import { companyInfo } from "../data/company";

export default function EnquiryForm({ preselectedProduct = "" }) {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    product: preselectedProduct || "",
    quantity: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.product) newErrors.product = "Please select a product.";
    if (!formData.message.trim()) newErrors.message = "Please write a brief message.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    // Simulate form submission (no backend)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleWhatsApp = () => {
    const product = formData.product || "your products";
    const msg = `Hello GreenTech Solutions! I am ${formData.fullName || "interested"} and would like to enquire about: ${product}. ${formData.message ? "Message: " + formData.message : ""}`;
    window.open(`https://wa.me/${companyInfo.contact.whatsappRaw}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-card p-8 text-center">
        <div className="w-16 h-16 bg-greenlight rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="text-primary" size={32} />
        </div>
        <h3 className="text-xl font-bold text-navy mb-2">Enquiry Submitted!</h3>
        <p className="text-gray-600 mb-6">
          Thank you, <strong>{formData.fullName}</strong>! We have received your enquiry for{" "}
          <strong>{formData.product}</strong>.
        </p>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6 text-left">
          <p className="text-emerald-900 text-sm">
            Our technical sales team will review your inquiry and connect with you promptly. For immediate assistance or technical quotations, feel free to contact us directly on WhatsApp or phone.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={handleWhatsApp}
            className="btn-primary bg-green-600 hover:bg-green-700 justify-center"
          >
            <MessageCircle size={18} />
            WhatsApp Us Now
          </button>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ fullName: "", companyName: "", phone: "", email: "", product: preselectedProduct || "", quantity: "", message: "" });
            }}
            className="btn-secondary justify-center"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-card p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-navy mb-1">Send an Enquiry</h3>
        <p className="text-gray-500 text-sm">Fill in the form and our team will contact you shortly.</p>

      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label className="label">Full Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your full name"
              className={`input-field ${errors.fullName ? "border-red-400 focus:ring-red-400" : ""}`}
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.fullName}</p>}
          </div>

          {/* Company Name */}
          <div>
            <label className="label">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Your company (optional)"
              className="input-field"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="label">Phone / WhatsApp <span className="text-red-500">*</span></label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              maxLength={10}
              className={`input-field ${errors.phone ? "border-red-400 focus:ring-red-400" : ""}`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.phone}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="label">Email Address <span className="text-red-500">*</span></label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className={`input-field ${errors.email ? "border-red-400 focus:ring-red-400" : ""}`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.email}</p>}
          </div>

          {/* Product */}
          <div>
            <label className="label">Product Interested In <span className="text-red-500">*</span></label>
            <select
              name="product"
              value={formData.product}
              onChange={handleChange}
              className={`input-field ${errors.product ? "border-red-400 focus:ring-red-400" : ""}`}
            >
              <option value="">-- Select a product --</option>
              {productOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            {errors.product && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.product}</p>}
          </div>

          {/* Quantity */}
          <div>
            <label className="label">Quantity Required</label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="e.g. 5 units"
              className="input-field"
            />
          </div>
        </div>

        {/* Message */}
        <div className="mt-4">
          <label className="label">Message <span className="text-red-500">*</span></label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Describe your requirements, factory size, or any specific needs..."
            className={`input-field resize-none ${errors.message ? "border-red-400 focus:ring-red-400" : ""}`}
          />
          {errors.message && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.message}</p>}
        </div>

        {/* Submit Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 btn-primary justify-center py-3 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send size={16} />
                Send Enquiry
              </>
            )}
          </button>
          <button
            type="button"
            onClick={handleWhatsApp}
            className="flex-1 btn-secondary border-green-600 text-green-700 hover:bg-green-50 justify-center py-3"
          >
            <MessageCircle size={16} />
            WhatsApp Enquiry
          </button>
        </div>
      </form>
    </div>
  );
}
