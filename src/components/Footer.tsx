import React from 'react';
import { Link } from 'react-router-dom';
import { CollegeLogo } from './CollegeLogo';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Instagram, 
  MapPin, 
  Phone, 
  Mail,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-sm" aria-label="Site Footer">
      
      {/* Main Multi-Column Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Column 1: VEMU Logo + Short College Description */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <CollegeLogo size="md" variant="dark" />
              <div>
                <h3 className="font-serif-college font-bold text-lg text-white tracking-wide">
                  VEMU INSTITUTE OF TECHNOLOGY
                </h3>
                <p className="text-xs text-amber-400 font-semibold">
                  College Code: VEMU • Estd 2008
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Approved by AICTE, New Delhi, Permanently Affiliated to JNTUA, Ananthapuramu. Accredited by NAAC and NBA. 
              Committed to imparting quality technical education on the Tirupati-Chittoor Highway.
            </p>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Connect With Us
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="w-8 h-8 rounded bg-slate-900 hover:bg-sky-500 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded bg-slate-900 hover:bg-blue-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded bg-slate-900 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded bg-slate-900 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link to="/admission" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Admissions</span>
                </Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Academics</span>
                </Link>
              </li>
              <li>
                <Link to="/departments" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Departments</span>
                </Link>
              </li>
              <li>
                <Link to="/placements" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Placements</span>
                </Link>
              </li>
              <li>
                <Link to="/faculty" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Faculty</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Student Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-mono">
              Student Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/students?tab=results" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Results</span>
                </Link>
              </li>
              <li>
                <Link to="/students?tab=notices" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Notifications</span>
                </Link>
              </li>
              <li>
                <Link to="/students?tab=exam" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Examination</span>
                </Link>
              </li>
              <li>
                <Link to="/students?tab=clubs" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Student Clubs</span>
                </Link>
              </li>
              <li>
                <Link to="/students?tab=alumni" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Alumni</span>
                </Link>
              </li>
              <li>
                <Link to="/students?tab=library" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Library</span>
                </Link>
              </li>
              <li>
                <Link to="/students?tab=moodle" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Moodle</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Useful Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 font-mono">
              Useful Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/contact" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Careers at VEMU</span>
                </Link>
              </li>
              <li>
                <Link to="/innovation" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>R&D Cell</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>IQAC Committee</span>
                </Link>
              </li>
              <li>
                <Link to="/innovation" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Innovation (IIC)</span>
                </Link>
              </li>
              <li>
                <a
                  href="https://www.aicte-india.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>AICTE Approvals</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  <span>Mandatory Disclosure</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Legal / Copyright Ribbon */}
      <div className="border-t border-slate-800 bg-slate-950 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <div>
            © 2026 VEMU Institute of Technology. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>P. Kothakota, Chittoor District, AP – 517112</span>
            <span>•</span>
            <a href="https://www.vemu.org" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300">
              vemu.org
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};
