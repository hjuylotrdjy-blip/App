import React, { useState, useEffect } from 'react';
import { Download, Smartphone, QrCode, Share2, ShieldCheck, Menu, X, Sparkles } from 'lucide-react';
import { APP_CONFIG, triggerDirectApkDownload } from '../constants';

interface NavbarProps {
  onOpenQr: () => void;
  onOpenShare: () => void;
  onDownloadClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQr, onOpenShare, onDownloadClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'المميزات', href: '#features' },
    { label: 'طريقة التثبيت', href: '#guide' },
    { label: 'المواصفات', href: '#specs' },
    { label: 'الأسئلة الشائعة', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/30'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-500 to-cyan-400 p-[2px] shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all duration-300">
                <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight bg-gradient-to-l from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  {APP_CONFIG.shortName}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  APK
                </span>
              </div>
              <p className="text-xs text-slate-400 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400 inline" />
                آمن ومجاني 100%
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenQr}
              type="button"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all duration-200 shadow-sm"
              title="مسح رمز QR للتحميل على الهاتف"
            >
              <QrCode className="w-4 h-4 text-emerald-400" />
              <span>رمز QR</span>
            </button>

            <button
              onClick={onOpenShare}
              type="button"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all duration-200 shadow-sm"
              title="مشاركة الرابط"
            >
              <Share2 className="w-4 h-4 text-cyan-400" />
              <span>مشاركة</span>
            </button>

            <button
              onClick={() => {
                triggerDirectApkDownload();
                onDownloadClick();
              }}
              type="button"
              className="relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:via-teal-400 hover:to-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <Download className="w-4 h-4 text-slate-950 stroke-[2.5]" />
              <span>تحميل APK</span>
              <span className="text-[11px] px-1.5 py-0.5 rounded bg-slate-950/20 text-slate-950 font-black">
                {APP_CONFIG.size}
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => {
                triggerDirectApkDownload();
                onDownloadClick();
              }}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md shadow-emerald-500/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>تحميل</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="القائمة الرئيسية"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQr();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-800 rounded-xl"
              >
                <QrCode className="w-4 h-4 text-emerald-400" />
                <span>رمز QR</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenShare();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-800 rounded-xl"
              >
                <Share2 className="w-4 h-4 text-cyan-400" />
                <span>مشاركة</span>
              </button>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                triggerDirectApkDownload();
                onDownloadClick();
              }}
              type="button"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20"
            >
              <Download className="w-4 h-4" />
              <span>تحميل ملف APK الآن ({APP_CONFIG.size})</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
