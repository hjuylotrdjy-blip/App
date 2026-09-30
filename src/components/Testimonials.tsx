import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { APP_CONFIG } from '../constants';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "طارق السعيد",
      role: "صانع محتوى ريلز ويوتيوب",
      device: "Samsung Galaxy S23 Ultra",
      rating: 5,
      date: "منذ 3 أيام",
      text: "كنت أقضي ساعات في برنامج المونتاج على الكمبيوتر لأطابق الصور مع الصوت والـ SRT. بهذا التطبيق أصبح الفيديو يجهز في دقيقة واحدة مع حركة الكاميرا السينمائية. تطبيق عبقري!"
    },
    {
      name: "منى عبد العزيز",
      role: "معلقة صوتية وصانعة قصص",
      device: "Xiaomi Poco F5",
      rating: 5,
      date: "منذ 5 أيام",
      text: "خاصية فرز الصور بالأرقام تلقائياً ومؤشر المطابقة الأخضر تمنع أي خطأ في ترتيب المشاهد. التصدير في الخلفية سريع جداً وجودة 4K ممتازة."
    },
    {
      name: "عبد الرحمن القحطاني",
      role: "منتج محتوى تعليمي",
      device: "Google Pixel 8 Pro",
      rating: 5,
      date: "منذ أسبوع",
      text: "المؤثرات الحركية الـ 10 أعطت الفيديوهات طابعاً سينمائياً جذاباً جداً بدون أي برامج خارجية. والأجمل أنه يعمل محلياً بالكامل على الهاتف بأمان تام."
    }
  ];

  return (
    <section className="py-20 bg-slate-900/40 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/20 mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400" /> تجارب صناع المحتوى
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ماذا يقول المستخدمون عن {APP_CONFIG.shortName}؟
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <span className="font-bold text-white text-base">{APP_CONFIG.rating} / 5</span>
            <span className="text-slate-400 text-xs">(أكثر من {APP_CONFIG.reviewsCount} تقييم في مجتمع صناع الفيديو)</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 text-right flex flex-col justify-between hover:border-slate-700 transition-colors shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-500">{rev.date}</span>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  &quot;{rev.text}&quot;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>{rev.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-[10px] text-emerald-400 font-semibold">{rev.role}</div>
                  <div className="text-[9px] text-slate-500 mt-0.5">{rev.device}</div>
                </div>

                <div className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-xs font-black text-emerald-400">
                  {rev.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
