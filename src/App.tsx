import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LoginModal } from './components/LoginModal';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Admission } from './pages/Admission';
import { Academics } from './pages/Academics';
import { Departments } from './pages/Departments';
import { Placements } from './pages/Placements';
import { Faculty } from './pages/Faculty';
import { Students } from './pages/Students';
import { Innovation } from './pages/Innovation';
import { Contact } from './pages/Contact';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [userSession, setUserSession] = useState<{ name: string; role: string; id: string } | null>(null);

  const handleLoginSuccess = (session: { name: string; role: string; id: string }) => {
    setUserSession(session);
  };

  const handleLogout = () => {
    setUserSession(null);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-blue-900 selection:text-white">
        
        {/* Header - Top Section (Wireframe 1, 2, 3) */}
        <Header
          onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
          onOpenLogin={() => setIsLoginModalOpen(true)}
          userSession={userSession}
          onLogout={handleLogout}
        />

        {/* Sticky Navbar (Wireframe 4) */}
        <Navbar
          isMobileMenuOpen={isMobileMenuOpen}
          onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
          onOpenLogin={() => setIsLoginModalOpen(true)}
          userSession={userSession}
        />

        {/* Routed Main Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/students" element={<Students />} />
            <Route path="/innovation" element={<Innovation />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Footer (Wireframe 17) */}
        <Footer />

        {/* Single Sign-On / Login Gateway Modal */}
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
          onSuccessLogin={handleLoginSuccess}
        />

      </div>
    </BrowserRouter>
  );
}
