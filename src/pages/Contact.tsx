import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Navigation, 
  Bus, 
  Train, 
  Plane, 
  Send, 
  CheckCircle2, 
  Building2,
  Users
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    department: 'Admissions Office',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Valid email is required';
    }
    if (!formData.mobile.trim()) {
      errs.mobile = 'Mobile number is required';
    } else if (!/^[0-9]{10}$/.test(formData.mobile.replace(/\D/g, ''))) {
      errs.mobile = 'Enter a valid 10-digit mobile number';
    }
    if (!formData.message.trim()) errs.message = 'Please enter your message';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', mobile: '', department: 'Admissions Office', message: '' });
    }, 700);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 text-left">
      
      {/* Banner */}
      <div className="bg-blue-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest block mb-2">
            Reach Out to VEMU
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif-college tracking-tight text-white">
            Contact & Campus Location
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Located strategically along the Tirupati–Chittoor National Highway. We welcome parents, prospective students, and industry recruiters.
          </p>
        </div>
      </div>

      <Breadcrumb items={[{ label: 'Contact Us' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Contact Info Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-serif-college text-slate-900">
                Postal Address
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                VEMU Institute of Technology<br />
                P. Kothakota, Tirupati–Chittoor Highway,<br />
                Near Pakala, Chittoor District,<br />
                Andhra Pradesh – 517112, India
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-blue-900 font-semibold">
              College Code: VEMU
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center mb-3">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-serif-college text-slate-900">
                Helplines & Phones
              </h3>
              <div className="text-xs text-slate-600 mt-2 space-y-1">
                <div>Admissions: <a href="tel:+918886661148" className="font-semibold text-blue-900 hover:underline">+91 8886661148</a></div>
                <div>Principal Office: <a href="tel:+918886661128" className="font-semibold text-blue-900 hover:underline">+91 8886661128</a></div>
                <div>Exam Branch: <a href="tel:+918886661150" className="font-semibold text-blue-900 hover:underline">+91 8886661150</a></div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
              Mon – Sat: 9:00 AM – 5:00 PM
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-900 flex items-center justify-center mb-3">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-serif-college text-slate-900">
                Official Correspondence
              </h3>
              <div className="text-xs text-slate-600 mt-2 space-y-1">
                <div>Admissions: <a href="mailto:vemupat@gmail.com" className="font-semibold text-blue-900 hover:underline">vemupat@gmail.com</a></div>
                <div>Principal: <a href="mailto:principal@vemu.org" className="font-semibold text-blue-900 hover:underline">principal@vemu.org</a></div>
                <div>TPO / Placements: <a href="mailto:tpo@vemu.org" className="font-semibold text-blue-900 hover:underline">tpo@vemu.org</a></div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
              Response within 24 business hours
            </div>
          </div>
        </section>

        {/* Map & Travel Guide */}
        <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold text-blue-900 uppercase tracking-wider font-mono">
                How to Reach VEMU
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-serif-college text-slate-900 mt-0.5">
                Campus Location & Transportation Connectivity
              </h2>
            </div>
            <a
              href="https://maps.google.com/?q=VEMU+Institute+of+Technology+Chittoor"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-900 text-white rounded text-xs font-bold hover:bg-blue-800 transition-colors shrink-0"
            >
              Open in Google Maps
            </a>
          </div>

          {/* Embedded Google Map */}
          <div className="w-full h-80 rounded-xl overflow-hidden border border-slate-300 relative shadow-2xs">
            <iframe
              title="VEMU Institute of Technology Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.6766787680196!2d79.1764353748455!3d13.245598687097723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad5cb16ea6ef99%3A0xbcfdd55a1532f741!2sVEMU%20INSTITUTE%20OF%20TECHNOLOGY!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Connectivity Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-1 text-xs">
              <div className="flex items-center gap-1.5 font-bold text-slate-900">
                <Bus className="w-4 h-4 text-blue-900" />
                <span>Road Connectivity</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Directly on the Tirupati–Chittoor National Highway. 45 km from Tirupati Bus Stand, 25 km from Chittoor APSRTC Central Bus Station.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-1 text-xs">
              <div className="flex items-center gap-1.5 font-bold text-slate-900">
                <Train className="w-4 h-4 text-blue-900" />
                <span>Railway Stations</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Pakala Junction (PAK) is 12 km away with trains connecting Chennai, Bengaluru, and Hyderabad. Tirupati Main (TPTY) is 45 km away.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-1 text-xs">
              <div className="flex items-center gap-1.5 font-bold text-slate-900">
                <Plane className="w-4 h-4 text-blue-900" />
                <span>Airport Connectivity</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Tirupati International Airport (Renigunta - TIR) is approximately 55 km away, operating daily flights to Hyderabad, Bengaluru, and New Delhi.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-white p-6 sm:p-10 rounded-xl border border-slate-200 shadow-sm max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-blue-900 uppercase tracking-widest font-mono">
              Online Feedback & Queries
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-college text-slate-900 mt-1">
              Send a Direct Message
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Have questions regarding admissions, verification, or campus visits? Leave your inquiry below.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3">
              <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
              <h3 className="text-lg font-bold text-emerald-950 font-serif-college">Message Sent Successfully!</h3>
              <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                Thank you for getting in touch. The concerned department will reach back to you shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                type="button"
                className="px-4 py-2 bg-emerald-100 text-emerald-900 text-xs font-bold rounded hover:bg-emerald-200 transition-colors"
              >
                Send Another Query
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full name"
                    className={`w-full px-3.5 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                      errors.name ? 'border-red-400 bg-red-50' : 'border-slate-300'
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className={`w-full px-3.5 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                      errors.email ? 'border-red-400 bg-red-50' : 'border-slate-300'
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    placeholder="10-digit mobile"
                    maxLength={10}
                    className={`w-full px-3.5 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                      errors.mobile ? 'border-red-400 bg-red-50' : 'border-slate-300'
                    }`}
                  />
                  {errors.mobile && <p className="mt-1 text-xs text-red-600">{errors.mobile}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Department to Contact
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="Admissions Office">Admissions Office</option>
                    <option value="Principal Office">Principal Office</option>
                    <option value="Examination Branch">Examination Branch</option>
                    <option value="Training & Placement Cell">Training & Placement Cell</option>
                    <option value="Alumni Association">Alumni Association</option>
                    <option value="Administrative Office">Administrative Office</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Message / Inquiry <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Type your message, inquiry, or appointment request..."
                  className={`w-full px-3.5 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                    errors.message ? 'border-red-400 bg-red-50' : 'border-slate-300'
                  }`}
                />
                {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm rounded shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Sending Message...' : 'Send Message to VEMU'}</span>
              </button>
            </form>
          )}
        </section>

      </div>
    </div>
  );
};
