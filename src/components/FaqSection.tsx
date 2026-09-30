import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, Wand2 } from 'lucide-react';
import { APP_CONFIG } from '../constants';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "كيف يقوم التطبيق بمزامنة الصور مع ملف SRT بدقة؟",
      a: "يقوم التطبيق بقراءة التوقيتات الزمنية الدقيقة (بالثواني وأجزاء الثانية) من ملف الـ SRT ومطابقتها بالتسلسل مع الصور المحددة، بحيث تظهر كل صورة في لحظة نطق الكلمات المحددة لها مع مؤشر مطابقة ذكي يضمن عدم وجود أي فارق زمني."
    },
    {
      q: "ما هي صيغ الصوت والصور ونسب العرض المدعومة؟",
      a: "يدعم التطبيق ملفات الصوت بصيغتي MP3 و WAV، وجميع صيغ الصور الشائعة (JPEG, PNG, WEBP)، مع دعم كامل لثلاث نسب عرض رئيسية: 9:16 (عمودي لـ Reels و Shorts و TikTok)، و 16:9 (أفقي لليوتيوب والشاشات)، و 1:1 (مربع لمنشورات التواصل)."
    },
    {
      q: "هل يتم رفع صوري أو ملفاتي الصوتية إلى أي خوادم خارجية؟",
      a: "إطلاقاً! التطبيق يعمل بمعالجة محلية 100% (Local On-Device Engine) على معالج هاتفك مباشرة. جميع الصور، التسجيلات الصوتية، والفيديوهات المصدّرة تبقى داخل جهازك وتُحفظ مباشرة في معرض الصور الخاص بك."
    },
    {
      q: "ما هي المؤثرات الحركية العشرة المتاحة بعد تصدير الفيديو؟",
      a: "يوفر التطبيق 10 حركات كاميرا سينمائية: تكبير تدريجي، تصغير تدريجي، انزلاق لليمين، انزلاق لليسار، انزلاق لأسفل، انزلاق لأعلى، تكبير مع انزلاق، اهتزاز سينمائي (Shake)، انزلاق خفيف (Drift)، ونبض دوري (Pulse)، مع شريطين للتحكم في شدة وسرعة الحركة."
    },
    {
      q: "كيف يعمل نظام المؤقت الدائري وحماية إعادة التعيين؟",
      a: "يبدأ التطبيق بمؤقت مجاني مدته 5 دقائق لتصدير الفيديوهات. يمكنك إضافة 5 دقائق إضافية في أي وقت بمشاهدة إعلان شفاف ومحدد بزمن إغلاق 20 ثانية. ويتميز التطبيق بنظام حماية يمنع فقدان الوقت المتبقي حتى لو قمت بإعادة تثبيت التطبيق."
    },
    {
      q: "هل يمكنني الخروج من التطبيق أثناء تصدير الفيديو؟",
      a: "نعم، يدعم التطبيق التصدير في الخلفية (Background Rendering) مدعوماً بخاصية استيقاظ المعالج والإشعارات، حيث يصلك إشعار فوري عند اكتمال الفيديو وحفظه في المعرض دون الحاجة للبقاء داخل شاشة التطبيق."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-slate-950 relative border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold border border-cyan-500/20 mb-3">
            <HelpCircle className="w-3.5 h-3.5" /> مركز الإجابات والدعم
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            الأسئلة الشائعة حول تطبيق {APP_CONFIG.shortName}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            إجابات وافية على كافة التساؤلات حول استخدام وتثبيت التطبيق ومميزاته الحصرية.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5 text-right">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900 border-emerald-500/40 shadow-lg shadow-emerald-950/20'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 flex items-center justify-between text-right gap-4 focus:outline-none"
                >
                  <span className={`text-sm sm:text-base font-bold transition-colors ${
                    isOpen ? 'text-emerald-400' : 'text-slate-200'
                  }`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-emerald-500/20 text-emerald-400 rotate-180' : 'bg-slate-800 text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
