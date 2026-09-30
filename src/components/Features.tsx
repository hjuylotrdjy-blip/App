import React from 'react';
import { 
  Images, 
  FileText, 
  Music, 
  Layers, 
  SlidersHorizontal, 
  Tv, 
  Smartphone, 
  Square, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Eye, 
  Move, 
  DownloadCloud, 
  HardDriveDownload,
  Lock,
  Flame,
  Zap
} from 'lucide-react';

export const Features: React.FC = () => {
  const coreFeatures = [
    {
      icon: <Images className="w-6 h-6 text-emerald-400" />,
      bg: "bg-emerald-400/10 border-emerald-400/20",
      title: "دمج الصور مع الملف الصوتي",
      description: "اختر مجموعة صور متعددة وملف صوتي واحد (بصيغتي MP3 أو WAV) لإنشاء فيديو كامل بضغطة زر واحدة."
    },
    {
      icon: <FileText className="w-6 h-6 text-cyan-400" />,
      bg: "bg-cyan-400/10 border-cyan-400/20",
      title: "دعم ملفات SRT وتوقيتات الكلام",
      description: "استورد ملف SRT لتحديد توقيت ظهور كل صورة تلقائياً ومزامنتها بدقة أجزاء الثانية مع الكلمات المنطوقة."
    },
    {
      icon: <Layers className="w-6 h-6 text-indigo-400" />,
      bg: "bg-indigo-400/10 border-indigo-400/20",
      title: "فرز تلقائي وسحب وإفلات",
      description: "ترتيب فوري للصور حسب الأرقام في أسماء الملفات (01, 02..)، مع إمكانية السحب والإفلات لإعادة الترتيب اليدوي وحذف أي صورة."
    },
    {
      icon: <Eye className="w-6 h-6 text-amber-400" />,
      bg: "bg-amber-400/10 border-amber-400/20",
      title: "معاينة مباشرة ومؤشر المطابقة الذكي",
      description: "تشغيل متتابع قبل التصدير. يظهر مؤشر ذكي بالأخضر عند تطابق عدد الصور مع التوقيتات، وبالأحمر عند عدم التطابق."
    },
    {
      icon: <SlidersHorizontal className="w-6 h-6 text-rose-400" />,
      bg: "bg-rose-400/10 border-rose-400/20",
      title: "نسب عرض متعددة ودقة 4K",
      description: "دعم نسب 9:16 (Reels/Shorts/TikTok) و 16:9 (أفقي/YouTube) و 1:1 (مربع)، بدقة 720p و 1080p و 4K فائقة الوضوح حتى 60 FPS."
    },
    {
      icon: <HardDriveDownload className="w-6 h-6 text-teal-400" />,
      bg: "bg-teal-400/10 border-teal-400/20",
      title: "تصدير في الخلفية وحفظ تلقائي",
      description: "متابعة عملية تصدير الفيديو عبر إشعارات أندرويد دون الحاجة للبقاء داخل التطبيق، مع حفظ الفيديو مباشرة في معرض الصور (Gallery)."
    },
    {
      icon: <Flame className="w-6 h-6 text-orange-400" />,
      bg: "bg-orange-400/10 border-orange-400/20",
      title: "10 أنواع حركة وتحريك سينمائي",
      description: "أضف مؤثرات الكاميرا (تكبير، تصغير، انزلاق 4 اتجاهات، اهتزاز Shake، نبض Pulse) مع شريطي تحكم للشدة والسرعة."
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-400" />,
      bg: "bg-purple-400/10 border-purple-400/20",
      title: "مؤقت ذكي مع حماية إعادة التعيين",
      description: "مؤقت دائري 5 دقائق أولية بألوان ديناميكية، مع حماية أمان تضمن عدم فقدان الوقت المتبقي حتى عند إعادة تثبيت التطبيق."
    },
    {
      icon: <Lock className="w-6 h-6 text-emerald-400" />,
      bg: "bg-emerald-400/10 border-emerald-400/20",
      title: "معالجة محلية 100% وخصوصية تامة",
      description: "كل عمليات الرندر والدمج تتم داخل هاتفك فقط. لا يتم رفع صورك أو صوتك لأي خادم خارجي على الإطلاق."
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-900/40 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" /> مميزات التطبيق الشاملة
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            كل ما تحتاجه لإنتاج فيديوهات متزامنة باحترافية
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            تمت برمجة التطبيق وتصميمه خصيصاً ليتفوق على برامج المونتاج المعقدة بتبسيط العملية إلى نقرات معدودة.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-3xl bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/20 hover:-translate-y-1 text-right flex flex-col justify-between"
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl ${feature.bg} border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center gap-1 text-[11px] text-emerald-400 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>مدمج ومفعل في الإصدار v26</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
