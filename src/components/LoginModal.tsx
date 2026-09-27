import React, { useState } from 'react';
import { X, LogIn, Shield, User, Lock, KeyRound, CheckCircle2 } from 'lucide-react';
import { CollegeLogo } from './CollegeLogo';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessLogin: (session: { name: string; role: string; id: string }) => void;
}

type UserRole = 'student' | 'faculty' | 'admin' | 'parent';

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onSuccessLogin
}) => {
  const [role, setRole] = useState<UserRole>('student');
  const [username, setUsername] = useState('224M1A0501');
  const [password, setPassword] = useState('vemu@2026');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleRoleChange = (newRole: UserRole) => {
    setRole(newRole);
    setError('');
    if (newRole === 'student') {
      setUsername('224M1A0501');
      setPassword('vemu@student');
    } else if (newRole === 'faculty') {
      setUsername('VEMU-FAC-108');
      setPassword('faculty@vemu');
    } else if (newRole === 'admin') {
      setUsername('admin@vemu.org');
      setPassword('admin@2026');
    } else {
      setUsername('PAR-988661148');
      setPassword('parent@vemu');
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError('Please provide your ID and password');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      let name = 'Student User (K. Sai Sumanth)';
      if (role === 'faculty') name = 'Faculty (Dr. S. Rama Krishna)';
      if (role === 'admin') name = 'Principal / Academic Admin';
      if (role === 'parent') name = 'Parent Guardian (K. Subba Rao)';

      onSuccessLogin({
        name,
        role: role.toUpperCase(),
        id: username
      });
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Card */}
      <div className="relative bg-white rounded-xl shadow-2xl border border-slate-200 max-w-md w-full overflow-hidden z-10 text-left">
        
        {/* Header */}
        <div className="bg-blue-950 text-white p-5 flex items-center justify-between border-b border-blue-900">
          <div className="flex items-center gap-3">
            <CollegeLogo size="sm" variant="dark" />
            <div>
              <h3 className="font-serif-college font-bold text-base text-amber-300">
                VEMU Campus Portal
              </h3>
              <p className="text-[11px] text-slate-300">
                Secure Single Sign-On Gateway
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-blue-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Role Selector Tabs */}
        <div className="grid grid-cols-4 bg-slate-100 p-1 border-b border-slate-200 text-xs font-semibold">
          {(['student', 'faculty', 'admin', 'parent'] as UserRole[]).map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => handleRoleChange(r)}
              className={`py-2 text-center capitalize rounded transition-colors ${
                role === r
                  ? 'bg-white text-blue-950 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Form Body */}
        <form onSubmit={handleLogin} className="p-6 space-y-4">
          {error && (
            <div className="p-2.5 bg-red-50 border border-red-200 rounded text-xs text-red-600 font-medium">
              {error}
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {role === 'student' && 'Hall Ticket / Roll Number'}
              {role === 'faculty' && 'Faculty Employee ID'}
              {role === 'admin' && 'Administrator Email'}
              {role === 'parent' && 'Registered Mobile Number'}
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Password / PIN
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
          </div>

          {/* Demo Hint */}
          <div className="p-2.5 bg-amber-50 border border-amber-200 rounded text-[11px] text-amber-900 flex items-start gap-1.5">
            <KeyRound className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
            <span>
              Pre-filled with demo credentials for instant preview. Click <strong>Login to Portal</strong> to continue.
            </span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-900 hover:bg-blue-800 active:bg-blue-950 text-white font-bold text-sm rounded shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 disabled:opacity-50"
          >
            <LogIn className="w-4 h-4" />
            <span>{isLoading ? 'Verifying Credentials...' : 'Login to Portal'}</span>
          </button>
        </form>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 text-center text-xs text-slate-500">
          Need login assistance? Contact VEMU Examination & IT Cell at <span className="font-semibold text-slate-700">+91 8886661148</span>
        </div>

      </div>
    </div>
  );
};
