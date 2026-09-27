import React from 'react';
import { Menu, LogIn, Phone, Mail, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CollegeLogo } from './CollegeLogo';

interface HeaderProps {
  onOpenMobileMenu: () => void;
  onOpenLogin: () => void;
  userSession?: { name: string; role: string } | null;
  onLogout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMobileMenu,
  onOpenLogin,
  userSession,
  onLogout
}) => {
  return (
    <header className="w-full bg-white border-b border-slate-200">
      {/* Topmost Informational Ribbon */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Accreditation and Affiliations */}
          <div className="flex items-center flex-wrap gap-x-4 gap-y-1 justify-center md:justify-start">
            <span className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Approved by AICTE, New Delhi</span>
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Affiliated to JNTUA, Ananthapuramu</span>
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="text-amber-300 font-medium">NAAC Accredited & ISO 9001:2015</span>
          </div>

          {/* Quick Helplines */}
          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href="tel:+918886661148"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              aria-label="Call Admissions Helpline"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>+91 8886661148</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="mailto:vemupat@gmail.com"
              className="hidden lg:flex items-center gap-1.5 hover:text-white transition-colors"
              aria-label="Email Admissions"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>vemupat@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Header Area matching the Wireframe */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between gap-3">
          
          {/* LEFT: Hamburger/menu icon + VEMU college logo */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <button
              onClick={onOpenMobileMenu}
              type="button"
              className="lg:hidden p-2 -ml-1 text-slate-700 hover:text-blue-900 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
            <Link to="/" className="flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded">
              <CollegeLogo size="md" />
            </Link>
          </div>

          {/* CENTER: College Code, College Name, Address */}
          <div className="flex flex-col items-center text-center px-1 sm:px-4 flex-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 mb-1 bg-amber-50 border border-amber-300 rounded text-[11px] sm:text-xs font-bold text-amber-900 tracking-wider">
              <span>COLLEGE CODE:</span>
              <span className="font-extrabold text-blue-900">VEMU</span>
            </div>
            
            <h1 className="text-base sm:text-xl md:text-2xl lg:text-2xl font-bold font-serif-college tracking-tight text-blue-950 uppercase leading-snug">
              VEMU Institute of Technology
            </h1>
            
            <p className="hidden sm:block text-xs md:text-[13px] text-slate-600 max-w-xl font-normal mt-0.5 leading-normal">
              P. Kothakota, Tirupati–Chittoor Highway, Near Pakala, Chittoor Dist., Andhra Pradesh – 517112
            </p>
            <p className="sm:hidden text-[10px] text-slate-600 truncate max-w-[210px]">
              P. Kothakota, Chittoor, AP - 517112
            </p>
          </div>

          {/* RIGHT: Login button */}
          <div className="shrink-0 flex items-center gap-2">
            {userSession ? (
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex flex-col text-right">
                  <span className="text-xs font-semibold text-slate-900">{userSession.name}</span>
                  <span className="text-[10px] text-slate-500 uppercase">{userSession.role}</span>
                </div>
                <button
                  onClick={onLogout}
                  type="button"
                  className="px-3 py-1.5 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-md transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenLogin}
                type="button"
                className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 active:bg-blue-950 rounded-md shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 whitespace-nowrap"
              >
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </button>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};
