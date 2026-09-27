import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  Clock, 
  Navigation,
  AlertCircle
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email';
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[0-9]{10}$/.test(formData.mobile.replace(/\D/g, ''))) {
      newErrors.mobile = 'Enter a valid 10-digit mobile number';
    }
    if (!formData.message.trim()) newErrors.message = 'Please type your query or message';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', mobile: '', message: '' });
    }, 700);
  };

  return (
    <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-900 mb-2">
            <MapPin className="w-4 h-4 text-amber-500" />
            <span>Campus Location & Helplines</span>
          </div>
          <h2 id="contact-heading" className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif-college text-slate-900 tracking-tight">
            Connect With VEMU
          </h2>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Reach out for admissions, campus visits, academic verifications, or corporate recruitment partnerships.
          </p>
        </div>

        {/* Contact Layout: Info & Map on Left, Contact Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Contact Information & Google Maps Area */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Campus Info Card */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-lg font-bold font-serif-college text-slate-900">
                VEMU Institute of Technology
              </h3>

              <div className="flex items-start gap-3 text-sm text-slate-700">
                <MapPin className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-semibold">Campus Address:</strong>
                  <span>P. Kothakota, Tirupati–Chittoor Highway,</span>
                  <br />
                  <span>Chittoor District, Andhra Pradesh – 517112, India</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-700">
                <Phone className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-semibold">Contact Helplines:</strong>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1">
                    <a href="tel:+918886661148" className="text-blue-900 hover:underline font-medium">
                      +91 8886661148
                    </a>
                    <span>•</span>
                    <a href="tel:+918886661128" className="text-blue-900 hover:underline font-medium">
                      +91 8886661128
                    </a>
                    <span>•</span>
                    <a href="tel:+918886661150" className="text-blue-900 hover:underline font-medium">
                      +91 8886661150
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-700">
                <Mail className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-semibold">Official Email:</strong>
                  <a href="mailto:vemupat@gmail.com" className="text-blue-900 hover:underline font-medium">
                    vemupat@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-700 pt-1 border-t border-slate-100">
                <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-semibold">Administrative Office Hours:</strong>
                  <span>Monday – Saturday: 9:00 AM – 5:00 PM</span>
                </div>
              </div>
            </div>

            {/* Google Maps Area */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="p-3 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-blue-900" />
                  <span>Campus Geo-Location: Tirupati-Chittoor Highway</span>
                </span>
                <a
                  href="https://maps.google.com/?q=VEMU+Institute+of+Technology+Chittoor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-900 hover:underline font-bold"
                >
                  Open in Google Maps
                </a>
              </div>
              <div className="h-60 w-full bg-slate-200 relative">
                <iframe
                  title="VEMU Institute of Technology Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.6766787680196!2d79.1764353748455!3d13.245598687097723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad5cb16ea6ef99%3A0xbcfdd55a1532f741!2sVEMU%20INSTITUTE%20OF%20TECHNOLOGY!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

          {/* RIGHT: Contact Form from Wireframe */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs text-left">
            <h3 className="text-xl font-bold font-serif-college text-slate-900 mb-2">
              Send an Enquiry / Message
            </h3>
            <p className="text-xs text-slate-600 mb-6">
              Fill in your details below and our admissions or administrative office will respond shortly.
            </p>

            {isSubmitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-lg text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-emerald-950">Thank You!</h4>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Your message has been sent to VEMU Institute of Technology. Our team will get back to you at <strong>{formData.email}</strong> or your mobile number.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  type="button"
                  className="px-4 py-2 text-xs font-bold text-emerald-900 bg-emerald-100 hover:bg-emerald-200 rounded transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 mb-1">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. S. Venkat Reddy"
                    className={`w-full px-3.5 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                      errors.name ? 'border-red-400 bg-red-50' : 'border-slate-300'
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. venkat.reddy@gmail.com"
                    className={`w-full px-3.5 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                      errors.email ? 'border-red-400 bg-red-50' : 'border-slate-300'
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                </div>

                {/* Mobile */}
                <div>
                  <label htmlFor="contact-mobile" className="block text-xs font-bold text-slate-700 mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    placeholder="e.g. 9876543210"
                    maxLength={10}
                    className={`w-full px-3.5 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                      errors.mobile ? 'border-red-400 bg-red-50' : 'border-slate-300'
                    }`}
                  />
                  {errors.mobile && <p className="mt-1 text-xs text-red-600">{errors.mobile}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 mb-1">
                    Message / Query <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Enter your admission inquiry, course details, or feedback..."
                    className={`w-full px-3.5 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                      errors.message ? 'border-red-400 bg-red-50' : 'border-slate-300'
                    }`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-900 hover:bg-blue-800 active:bg-blue-950 text-white font-bold text-sm rounded shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending Message...' : 'Submit Message'}</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
