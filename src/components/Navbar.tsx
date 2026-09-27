import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  Home, 
  GraduationCap, 
  BookOpen, 
  Building2, 
  Briefcase, 
  Users, 
  UserCheck, 
  Lightbulb, 
  Info, 
  PhoneCall, 
  X, 
  LogIn, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { CollegeLogo } from './CollegeLogo';

interface NavbarProps {
  isMobileMenuOpen: boolean;
  onCloseMobileMenu: () => void;
  onOpenLogin: () => void;
  userSession?: { name: string; role: string } | null;
}

export const Navbar: React.FC<NavbarProps> = ({
  isMobileMenuOpen,
  onCloseMobileMenu,
  onOpenLogin,
  userSession
}) => {
  const navItems = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Admission', path: '/admission', icon: GraduationCap },
    { label: 'Academics', path: '/academics', icon: BookOpen },
    { label: 'Department', path: '/departments', icon: Building2 },
    { label: 'Placements', path: '/placements', icon: Briefcase },
    { label: 'Faculty', path: '/faculty', icon: Users },
    { label: 'Student', path: '/students', icon: UserCheck },
    { label: 'Innovation', path: '/innovation', icon: Lightbulb },
    { label: 'About', path: '/about', icon: Info },
    { label: 'Contact', path: '/contact', icon: PhoneCall },
  ];

  return (
    <>
      {/* Sticky Main Desktop Navigation Bar */}
      <nav 
        className="sticky top-0 z-40 w-full bg-blue-950 text-white shadow-md border-y border-blue-900"
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            
            {/* Desktop Navigation Items */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `px-3 py-2 text-[13px] xl:text-sm font-semibold tracking-wide rounded-md transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-blue-800 text-amber-300 shadow-inner'
                        : 'text-slate-100 hover:text-amber-200 hover:bg-blue-900/80'
                    }`
                  }
                >
                  <item.icon className="w-3.5 h-3.5 opacity-80" />
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>

            {/* Mobile Header Quick Bar (When scrolled or in mobile view) */}
            <div className="flex lg:hidden items-center justify-between w-full">
              <span className="text-xs font-bold tracking-wider text-amber-300 uppercase flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                VEMU Portal Navigation
              </span>
              <button
                onClick={onOpenLogin}
                type="button"
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold bg-amber-400 text-blue-950 rounded hover:bg-amber-300 transition-colors"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>{userSession ? 'My Account' : 'Login'}</span>
              </button>
            </div>

            {/* Desktop Right Quick Action: Apply Online 2026-27 */}
            <div className="hidden lg:flex items-center gap-2">
              <Link
                to="/admission"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-blue-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded transition-colors shadow-sm"
              >
                <span>Apply Online 2026</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Side Drawer Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/70 backdrop-blur-xs transition-opacity"
            onClick={onCloseMobileMenu}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div className="relative w-full max-w-xs bg-slate-900 text-white h-full shadow-2xl flex flex-col z-10 overflow-y-auto">
            
            {/* Drawer Header */}
            <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-blue-950">
              <div className="flex items-center gap-2.5">
                <CollegeLogo size="sm" variant="dark" />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-amber-300 font-serif-college">VEMU IT</span>
                  <span className="text-[10px] text-slate-300">Code: VEMU • Chittoor</span>
                </div>
              </div>
              <button
                onClick={onCloseMobileMenu}
                type="button"
                className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Close Navigation"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Login in Mobile Menu */}
            <div className="p-4 border-b border-slate-800 bg-slate-900/60">
              <button
                onClick={() => {
                  onCloseMobileMenu();
                  onOpenLogin();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-blue-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow transition-colors"
              >
                <LogIn className="w-4 h-4" />
                <span>{userSession ? `Logged In: ${userSession.name}` : 'Student & Staff Login'}</span>
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 py-3 px-2 space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  onClick={onCloseMobileMenu}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-800 text-amber-300 font-semibold'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`
                  }
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-4 h-4 opacity-80" />
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-40" />
                </NavLink>
              ))}
            </div>

            {/* Drawer Footer Information */}
            <div className="p-4 border-t border-slate-800 bg-slate-950 text-xs text-slate-400 space-y-2">
              <div className="flex items-center justify-between">
                <span>Admissions Helpline:</span>
                <a href="tel:+918886661148" className="text-amber-300 font-semibold">+91 8886661148</a>
              </div>
              <div className="flex items-center justify-between">
                <span>Official Web:</span>
                <span className="text-slate-200">vemu.org</span>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
