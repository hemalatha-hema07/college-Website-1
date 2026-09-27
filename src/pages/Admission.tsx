import React, { useState } from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { 
  GraduationCap, 
  CheckCircle2, 
  AlertCircle, 
  Send, 
  FileText, 
  Phone, 
  Mail, 
  Clock, 
  HelpCircle,
  Award,
  ChevronRight,
  UserCheck
} from 'lucide-react';
import { coursesData } from '../data/courses';

interface EnquiryFormState {
  name: string;
  email: string;
  gender: string;
  phone: string;
  altPhone: string;
  address: string;
  quota: string;
  course: string;
  branch: string;
  message: string;
}

export const Admission: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'btech' | 'mtech' | 'diploma' | 'pg'>('btech');
  
  const [form, setForm] = useState<EnquiryFormState>({
    name: '',
    email: '',
    gender: 'Male',
    phone: '',
    altPhone: '',
    address: '',
    quota: 'Category-A (EAPCET Convener)',
    course: 'B.Tech',
    branch: 'Computer Science & Engineering (CSE)',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const branchesByCourse: Record<string, string[]> = {
    'B.Tech': [
      'Computer Science & Engineering (CSE)',
      'CSE (Artificial Intelligence & Machine Learning)',
      'CSE (Artificial Intelligence)',
      'CSE (AI & Data Science)',
      'Computer Science & Information Technology (CSIT)',
      'Electronics & Communication Engineering (ECE)',
      'Electrical & Electronics Engineering (EEE)',
      'Mechanical Engineering (MECH)',
      'Civil Engineering (CIVIL)'
    ],
    'M.Tech': [
      'Computer Science & Engineering (CSE)',
      'VLSI & Embedded Systems'
    ],
    'MBA': [
      'MBA (Finance, HR, Marketing, Business Analytics)'
    ],
    'MCA': [
      'Master of Computer Applications (MCA)'
    ],
    'Diploma': [
      'Diploma in Computer Engineering (DCSE)',
      'Diploma in Electronics & Communication (DECE)',
      'Diploma in Electrical & Electronics (DEEE)',
      'Diploma in Mechanical Engineering (DMECH)'
    ]
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Full Name is required';
    if (!form.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = 'Valid email is required';
    }
    if (!form.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(form.phone.replace(/\D/g, ''))) {
      errs.phone = 'Must be a 10-digit mobile number';
    }
    if (form.altPhone && !/^[0-9]{10}$/.test(form.altPhone.replace(/\D/g, ''))) {
      errs.altPhone = 'Alternate phone must be 10 digits';
    }
    if (!form.address.trim()) errs.address = 'Communication address is required';
    if (!form.quota) errs.quota = 'Admission Quota is required';

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
    }, 700);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 text-left">
      
      {/* Header Banner */}
      <div className="bg-blue-950 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest block mb-2">
            Admissions Open For 2026-2027
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif-college tracking-tight text-white">
            Admissions at VEMU Institute of Technology
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            Join a premier accredited engineering institution. Explore admissions procedure, quota guidelines, eligibility criteria, and submit your admission enquiry.
          </p>
        </div>
      </div>

      <Breadcrumb items={[{ label: 'Admissions 2026' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Admission Quotas & Categories Overview */}
        <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs">
          <h2 className="text-2xl font-bold font-serif-college text-slate-900 mb-6">
            Admission Categories & Eligibility Criteria
          </h2>

          {/* Program Tabs */}
          <div className="flex items-center gap-2 border-b border-slate-200 pb-3 mb-6 overflow-x-auto">
            <button
              onClick={() => setActiveTab('btech')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-md whitespace-nowrap transition-colors ${
                activeTab === 'btech' ? 'bg-blue-900 text-white' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              B.Tech Admissions
            </button>
            <button
              onClick={() => setActiveTab('mtech')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-md whitespace-nowrap transition-colors ${
                activeTab === 'mtech' ? 'bg-blue-900 text-white' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              M.Tech Research
            </button>
            <button
              onClick={() => setActiveTab('diploma')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-md whitespace-nowrap transition-colors ${
                activeTab === 'diploma' ? 'bg-blue-900 text-white' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Polytechnic Diploma
            </button>
            <button
              onClick={() => setActiveTab('pg')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-md whitespace-nowrap transition-colors ${
                activeTab === 'pg' ? 'bg-blue-900 text-white' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              MBA & MCA
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'btech' && (
            <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-lg space-y-3">
                  <div className="inline-block px-2.5 py-1 bg-blue-100 text-blue-900 text-xs font-bold rounded">
                    Category-A (Convener Quota - 70% Seats)
                  </div>
                  <h3 className="text-base font-bold text-slate-900">AP EAPCET Counseling</h3>
                  <ul className="space-y-2 text-xs text-slate-600">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Passed 10+2 / Intermediate examination with Mathematics, Physics & Chemistry (MPC) with min 45% (40% for reserved categories).</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Allotted through centralized AP EAPCET counseling by APSCHE.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Eligible for Jagananna Vidya Deevena (JVD) fee reimbursement as per AP Government norms.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-5 bg-slate-50 border border-slate-200 rounded-lg space-y-3">
                  <div className="inline-block px-2.5 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded">
                    Category-B (Management / NRI Quota - 30% Seats)
                  </div>
                  <h3 className="text-base font-bold text-slate-900">Direct Merit Admissions</h3>
                  <ul className="space-y-2 text-xs text-slate-600">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Admissions offered based on merit in 10+2 marks, JEE Mains, or AP EAPCET ranks.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Direct application through college administrative portal or campus admission desk.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>NRI / Out-of-State applicants eligible with equivalent qualifying board certification.</span>
                    </li>
                  </ul>
                </div>

              </div>

              {/* Lateral Entry Notice */}
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-3 text-xs text-blue-950">
                <GraduationCap className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold">Lateral Entry Admissions (Direct 2nd Year B.Tech):</strong>
                  Diploma holders with valid AP ECET rank can secure direct admission into 2nd year B.Tech against 10% supernumerary quota in all branches.
                </div>
              </div>
            </div>
          )}

          {activeTab === 'mtech' && (
            <div className="space-y-4 text-sm text-slate-700">
              <h3 className="text-base font-bold text-slate-900">M.Tech Program Eligibility</h3>
              <p>
                Candidates must possess a B.E. / B.Tech in CSE, IT, ECE, EEE or allied disciplines from an AICTE recognized university with at least 50% aggregate marks.
              </p>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>• <strong>Category A:</strong> Valid GATE score or AP PGECET counseling rank.</li>
                <li>• <strong>Category B:</strong> Direct management sponsored quota based on undergraduate degree merit.</li>
                <li>• <strong>Stipend:</strong> AICTE scholarship available for qualified GATE score holders.</li>
              </ul>
            </div>
          )}

          {activeTab === 'diploma' && (
            <div className="space-y-4 text-sm text-slate-700">
              <h3 className="text-base font-bold text-slate-900">Polytechnic 3-Year Diploma Admissions</h3>
              <p>
                Offered under the State Board of Technical Education and Training (SBTET), Andhra Pradesh.
              </p>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>• <strong>Eligibility:</strong> 10th Standard (SSC) passed with Mathematics and Science.</li>
                <li>• <strong>Selection:</strong> Qualifying rank in AP POLYCET counseling or direct management seat.</li>
                <li>• <strong>Branches:</strong> DCSE, DECE, DEEE, DMECH.</li>
              </ul>
            </div>
          )}

          {activeTab === 'pg' && (
            <div className="space-y-4 text-sm text-slate-700">
              <h3 className="text-base font-bold text-slate-900">MBA & MCA Eligibility</h3>
              <p>
                Postgraduate management and applications programs affiliated to JNTUA.
              </p>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>• <strong>MBA:</strong> Any recognized bachelor degree (3 or 4 years) with min 50% marks and AP ICET rank.</li>
                <li>• <strong>MCA:</strong> BCA or B.Sc in Computer Science / IT / Mathematics with AP ICET rank.</li>
              </ul>
            </div>
          )}
        </section>

        {/* Section: Comprehensive Admission Enquiry Form */}
        <section className="bg-white p-6 sm:p-10 rounded-xl border border-slate-200 shadow-sm" id="enquiry-form">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-bold text-blue-900 uppercase tracking-widest font-mono">
                Direct Application Assistance
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-serif-college text-slate-900 mt-1">
                Admission Enquiry Form 2026–2027
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Submit your credentials and program preferences. Our admission counseling committee will reach out with seat availability, fee structure, and scholarship verification.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-bold text-emerald-950 font-serif-college">
                  Admission Enquiry Successfully Received!
                </h3>
                <p className="text-xs sm:text-sm text-emerald-800 max-w-lg mx-auto leading-relaxed">
                  Thank you, <strong>{form.name}</strong>. Your enquiry for <strong>{form.course} ({form.branch})</strong> under <strong>{form.quota}</strong> has been logged into our admissions database. 
                  Our admissions officer will contact you shortly at <strong>{form.phone}</strong> or <strong>{form.email}</strong>.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setForm({
                        name: '',
                        email: '',
                        gender: 'Male',
                        phone: '',
                        altPhone: '',
                        address: '',
                        quota: 'Category-A (EAPCET Convener)',
                        course: 'B.Tech',
                        branch: 'Computer Science & Engineering (CSE)',
                        message: ''
                      });
                    }}
                    type="button"
                    className="px-5 py-2.5 text-xs font-bold text-emerald-900 bg-emerald-100 hover:bg-emerald-200 rounded transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                
                {/* 1. Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Applicant Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. K. Sai Sumanth"
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
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="e.g. sumanth@gmail.com"
                      className={`w-full px-3.5 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                        errors.email ? 'border-red-400 bg-red-50' : 'border-slate-300'
                      }`}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                  </div>
                </div>

                {/* 2. Gender & Quota */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Gender <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={form.gender}
                      onChange={(e) => setForm({ ...form, gender: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Admission Quota <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={form.quota}
                      onChange={(e) => setForm({ ...form, quota: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      <option value="Category-A (EAPCET Convener)">Category-A (EAPCET Convener)</option>
                      <option value="Category-B (Management/NRI)">Category-B (Management / NRI Quota)</option>
                      <option value="Lateral Entry (ECET Direct 2nd Year)">Lateral Entry (ECET Direct 2nd Year)</option>
                      <option value="PGECET / GATE (M.Tech)">PGECET / GATE (M.Tech)</option>
                      <option value="AP ICET (MBA / MCA)">AP ICET (MBA / MCA)</option>
                      <option value="POLYCET (Diploma)">POLYCET (Diploma)</option>
                    </select>
                  </div>
                </div>

                {/* 3. Phone & Alternate Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Primary Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      className={`w-full px-3.5 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                        errors.phone ? 'border-red-400 bg-red-50' : 'border-slate-300'
                      }`}
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Alternate / Parent Phone
                    </label>
                    <input
                      type="tel"
                      value={form.altPhone}
                      onChange={(e) => setForm({ ...form, altPhone: e.target.value })}
                      placeholder="Parent / Guardian contact"
                      maxLength={10}
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    {errors.altPhone && <p className="mt-1 text-xs text-red-600">{errors.altPhone}</p>}
                  </div>
                </div>

                {/* 4. Course & Branch */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Course Level <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={form.course}
                      onChange={(e) => {
                        const newCourse = e.target.value;
                        const available = branchesByCourse[newCourse] || [];
                        setForm({
                          ...form,
                          course: newCourse,
                          branch: available[0] || ''
                        });
                      }}
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      <option value="B.Tech">B.Tech (Bachelor of Technology)</option>
                      <option value="M.Tech">M.Tech (Master of Technology)</option>
                      <option value="MBA">MBA (Master of Business Admin)</option>
                      <option value="MCA">MCA (Master of Computer App)</option>
                      <option value="Diploma">Polytechnic Diploma</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Preferred Branch / Specialization <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={form.branch}
                      onChange={(e) => setForm({ ...form, branch: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    >
                      {(branchesByCourse[form.course] || []).map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 5. Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Permanent / Communication Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    placeholder="e.g. D.No, Street, Mandal, District, State, PIN"
                    className={`w-full px-3.5 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                      errors.address ? 'border-red-400 bg-red-50' : 'border-slate-300'
                    }`}
                  />
                  {errors.address && <p className="mt-1 text-xs text-red-600">{errors.address}</p>}
                </div>

                {/* 6. Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Message / Special Requests / EAPCET Rank
                  </label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Enter your EAPCET/ECET/ICET rank, hostel accommodation request, or questions..."
                    className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-900 hover:bg-blue-800 active:bg-blue-950 text-white font-bold text-sm rounded shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Submitting Application...' : 'Submit Admission Enquiry'}</span>
                </button>
              </form>
            )}

            {/* Helpline contact banner */}
            <div className="mt-8 p-4 bg-slate-100 border border-slate-200 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-900" />
                <span>Admissions Helpline: <strong>+91 8886661148 / 1128</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-900" />
                <span>Email: <strong>vemupat@gmail.com</strong></span>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};
