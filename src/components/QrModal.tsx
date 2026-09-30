import React, { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import { 
  QrCode, 
  Smartphone, 
  Download, 
  X, 
  Check, 
  Copy, 
  Share2, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { DIRECT_APK_DOWNLOAD_URL, APP_CONFIG } from '../constants';

interface QrModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QrModal: React.FC<QrModalProps> = ({ isOpen, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen && canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, DIRECT_APK_DOWNLOAD_URL, {
        width: 240,
        margin: 2,
        color: {
          dark: '#020617',
          light: '#ffffff'
        }
      }, (error) => {
        if (error) console.error('QR code generation error:', error);
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(DIRECT_APK_DOWNLOAD_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-right overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow */}
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-48 h-24 bg-emerald-500/20 blur-3xl rounded-full pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto mb-3 shadow-lg shadow-emerald-500/10">
            <QrCode className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white">
            امسح الرمز للتحميل على هاتفك
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            وجّه كاميرا هاتفك الأندرويد نحو الرمز أدناه لبدء التنزيل التلقائي.
          </p>
        </div>

        {/* QR Code Container */}
        <div className="flex justify-center my-4">
          <div className="p-4 bg-white rounded-2xl shadow-xl shadow-emerald-950/40 border-4 border-emerald-500/30">
            <canvas ref={canvasRef} className="rounded-lg w-48 h-48 sm:w-56 sm:h-56"></canvas>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-slate-950/70 p-3.5 rounded-2xl border border-slate-800 text-center text-xs text-slate-300 space-y-1 mb-5">
          <div className="font-bold text-emerald-400 flex items-center justify-center gap-1.5">
            <Smartphone className="w-3.5 h-3.5" /> مسح سريع ومباشر
          </div>
          <p className="text-slate-400 text-[11px]">
            يدعم تطبيق الكاميرا الرسمي أو أي قارئ QR Code على أندرويد.
          </p>
        </div>

        {/* Copy Link Button */}
        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            className="flex-1 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 border border-slate-700 transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? "تم نسخ الرابط!" : "نسخ رابط التحميل"}</span>
          </button>

          <button
            onClick={onClose}
            className="py-2.5 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-colors"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
};
