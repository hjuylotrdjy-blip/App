import React from 'react';
import { Smartphone, ShieldCheck, Download, Heart, ArrowUp } from 'lucide-react';
import { APP_CONFIG, triggerDirectApkDownload } from '../constants';

interface FooterProps {
  onDownloadClick: () => void;
  onOpenQr: () => void;
  onOpenShare: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onDownloadClick, onOpenQr, onOpenShare }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-right relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-cyan-500 p-[2px]">
                <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-emerald-400" />
                </div>
              </div>
              <div>
                <span className="font-extrabold text-lg text-white">
                  {APP_CONFIG.shortName}
                </span>
                <span className="mr-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  APK
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              صفحة التحميل الرسمية والمباشرة لتطبيق {APP_CONFIG.name}. تحويل الصور ومقاطع الصوت وملفات SRT إلى فيديوهات متزامنة بدقة 4K مع 10 مؤثرات حركية.
            </p>

            <div className="flex items-center gap-3 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>معالجة محلية 100% بدون خوادم خارجية</span>
            </div>

            <div>
              <a
                href={APP_CONFIG.privacyPolicyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-400 hover:text-emerald-400 underline transition-colors"
              >
                سياسة الخصوصية الرسمية (Privacy Policy)
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">روابط سريعة</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-emerald-400 transition-colors">الرئيسية</a></li>
              <li><a href="#features" className="hover:text-emerald-400 transition-colors">مميزات التطبيق</a></li>
              <li><a href="#guide" className="hover:text-emerald-400 transition-colors">طريقة التثبيت خطوة بخطوة</a></li>
              <li><a href="#specs" className="hover:text-emerald-400 transition-colors">المواصفات التقنية</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">الأسئلة الشائعة</a></li>
            </ul>
          </div>

          {/* Direct CTA Box */}
          <div className="md:col-span-4 p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
            <h4 className="text-sm font-bold text-white">تحميل الإصدار الأخير</h4>
            <p className="text-xs text-slate-400">
              احصل على ملف APK برابط مباشر وسريع وابدأ استخدامه فوراً.
            </p>
            <button
              onClick={() => {
                triggerDirectApkDownload();
                onDownloadClick();
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-95 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>تنزيل APK مجاناً ({APP_CONFIG.size})</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400">
            جميع الحقوق محفوظة © {new Date().getFullYear()} - صفحة تحميل تطبيق الأندرويد الرسمي
          </p>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors flex items-center gap-1.5"
            title="العودة للأعلى"
          >
            <ArrowUp className="w-4 h-4" />
            <span>للأعلى</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
