import React, { useState, useEffect } from 'react';
import { Download, Smartphone, QrCode, ShieldCheck, ArrowUp } from 'lucide-react';
import { APP_CONFIG, triggerDirectApkDownload } from '../constants';

interface FloatingDownloadBarProps {
  onDownloadClick: () => void;
  onOpenQr: () => void;
}

export const FloatingDownloadBar: React.FC<FloatingDownloadBarProps> = ({ onDownloadClick, onOpenQr }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-40 animate-fade-in max-w-md mx-auto sm:max-w-none">
      <div className="bg-slate-900/90 backdrop-blur-xl border border-emerald-500/30 p-3 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/80 flex items-center justify-between gap-3">
        
        {/* App Info Mini */}
        <div className="flex items-center gap-2.5 text-right">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 p-[1.5px] shrink-0">
            <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-emerald-400" />
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="text-xs font-bold text-white flex items-center gap-1">
              <span>{APP_CONFIG.shortName}</span>
              <span className="text-[10px] text-emerald-400 font-mono">({APP_CONFIG.version})</span>
            </div>
            <div className="text-[10px] text-slate-400">حجم {APP_CONFIG.size} • آمن 100%</div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenQr}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
            title="مسح QR"
          >
            <QrCode className="w-4 h-4 text-emerald-400" />
          </button>

          <button
            onClick={() => {
              triggerDirectApkDownload();
              onDownloadClick();
            }}
            className="flex items-center gap-2 py-2.5 px-4 sm:px-5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-emerald-500/30 active:scale-95 transition-all"
          >
            <Download className="w-4 h-4 stroke-[2.5]" />
            <span>تحميل الـ APK الآن</span>
          </button>
        </div>

      </div>
    </div>
  );
};
