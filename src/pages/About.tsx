import React from 'react';
import { Breadcrumb } from '../components/Breadcrumb';
import { 
  Award, 
  Compass, 
  Target, 
  ShieldCheck, 
  Building, 
  BookOpen, 
  Users, 
  Bus, 
  Home as HomeIcon, 
  Coffee, 
  CheckCircle,
  FileCheck2,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 text-left">
      
      {/* Banner / Hero */}
      <div className="bg-blue-950 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest block mb-2">
            Institutional Legacy Since 2008
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif-college tracking-tight text-white">
            About VEMU Institute of Technology
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            A premier center of technical excellence in Chittoor District, Andhra Pradesh, committed to value-based engineering education and research.
          </p>
        </div>
      </div>

      <Breadcrumb items={[{ label: 'About VEMU' }]} />

      {/* Main Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* History & Genesis */}
        <section className="bg-white p-6 sm:p-10 rounded-xl border border-slate-200 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">The Genesis</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-college text-slate-900">
                A Journey of Dedication and Educational Transformation
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>VEMU Institute of Technology (College Code: VEMU)</strong> was established in the academic year <strong>2008</strong> under the aegis of the Vemu Society, guided by the inspiring vision of <strong>Dr. K. Chandrasekhar Naidu</strong>, a celebrated academician and retired professor.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Situated along the scenic Tirupati–Chittoor National Highway at P. Kothakota (near Pakala), the institute was conceived to make world-standard engineering education, cutting-edge computing laboratories, and high-impact placement training accessible to aspiring youths of Andhra Pradesh and across India.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                The college is permanently affiliated to <strong>JNTUA Ananthapuramu</strong>, approved by <strong>AICTE, New Delhi</strong>, and recognized by the Government of Andhra Pradesh. The institution is accredited by <strong>NAAC</strong> and its key engineering programs are accredited by the <strong>National Board of Accreditation (NBA)</strong>.
              </p>
            </div>

            <div className="lg:col-span-5 bg-slate-900 rounded-xl p-6 text-white space-y-4">
              <h3 className="text-lg font-bold font-serif-college text-amber-300 border-b border-slate-700 pb-2">
                Key Accreditations & Recognitions
              </h3>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>AICTE Approval:</strong> Approved by All India Council for Technical Education, New Delhi.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>JNTUA Affiliation:</strong> Permanently affiliated to J.N.T. University Anantapur, Ananthapuramu.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>NAAC Accredited:</strong> Evaluated and accredited with commendable grade.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>NBA Accreditation:</strong> Outcome-based recognition for major engineering branches.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>ISO 9001:2015:</strong> Certified for quality management systems in higher technical education.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Vision & Mission Detailed Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs border-t-4 border-t-blue-900">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-serif-college text-slate-900">
                Our Vision
              </h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              To be a premier technical institution of academic excellence that empowers students with cutting-edge technology, research mindset, and strong human values to make significant contributions to the nation and the global society.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs border-t-4 border-t-amber-500">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-serif-college text-slate-900">
                Our Mission
              </h3>
            </div>
            <ul className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>Provide state-of-the-art infrastructure and student-centered learning environment.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>Inculcate research culture, problem-solving skills, and multidisciplinary design aptitude.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>Foster industry-academia partnerships to bridge curriculum gaps and ensure top placements.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>Nurture leadership qualities, ethical values, and social responsibility.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="bg-white p-6 sm:p-10 rounded-xl border border-slate-200 shadow-xs">
          <h2 className="text-2xl font-bold font-serif-college text-slate-900 mb-8 text-center">
            Institutional Leadership
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Chairman */}
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <span className="text-xs font-bold text-amber-600 uppercase font-mono">Chairman</span>
              <h3 className="text-lg font-bold text-slate-900">Dr. K. Chandrasekhar Naidu</h3>
              <p className="text-xs text-slate-500 font-medium">Founder & Chairman, VEMU IT</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                "Our guiding motto is to inspire every young student to dare to think differently, build technological confidence, and develop empathy for societal well-being. We have invested tirelessly in building an institution that students and parents can trust with pride."
              </p>
            </div>

            {/* Principal */}
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
              <span className="text-xs font-bold text-blue-900 uppercase font-mono">Principal</span>
              <h3 className="text-lg font-bold text-slate-900">Dr. Naveen Kilari</h3>
              <p className="text-xs text-slate-500 font-medium">Principal & Professor</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                "At VEMU, academic rigor is balanced seamlessly with practical industry projects, hackathons, and personal mentoring. Our students graduate as competent professionals ready to solve complex technological challenges across global industries."
              </p>
            </div>
          </div>
        </section>

        {/* Infrastructure & Campus Facilities */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-college text-slate-900">
              Campus Infrastructure & Facilities
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Spread across a 25-acre green campus designed for focused academic learning and holistic development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
              <Building className="w-8 h-8 text-blue-900 mb-3" />
              <h4 className="text-base font-bold text-slate-900">25-Acre Sprawling Campus</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Eco-friendly, pollution-free campus with lush green lawns, wide internal roads, solar energy generation, and rainwater harvesting structures.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
              <BookOpen className="w-8 h-8 text-blue-900 mb-3" />
              <h4 className="text-base font-bold text-slate-900">Central Digital Library</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Fully automated library with 35,000+ volumes, IEEE digital subscriptions, DELNET inter-library loans, and high-speed multimedia e-reading sections.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
              <Users className="w-8 h-8 text-blue-900 mb-3" />
              <h4 className="text-base font-bold text-slate-900">Advanced Computing Labs</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Equipped with over 1000+ high-performance networked desktop systems, NVIDIA GPU AI clusters, cloud platforms, and 1 Gbps dedicated fiber internet.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
              <HomeIcon className="w-8 h-8 text-blue-900 mb-3" />
              <h4 className="text-base font-bold text-slate-900">Separate Hostels for Boys & Girls</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Safe, hygienic residential accommodation with modern amenities, RO mineral drinking water, 24/7 security surveillance, and attached dining halls.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
              <Bus className="w-8 h-8 text-blue-900 mb-3" />
              <h4 className="text-base font-bold text-slate-900">Extensive Fleet of Buses</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Fleet of over 40+ college buses connecting the campus with Tirupati, Chittoor, Palamaner, Pakala, Chandragiri, and surrounding towns.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
              <Coffee className="w-8 h-8 text-blue-900 mb-3" />
              <h4 className="text-base font-bold text-slate-900">Cafeteria & Sports Complex</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Spacious hygienic food court, open sports grounds for cricket, football, basketball, badminton courts, and indoor gymnasium.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
