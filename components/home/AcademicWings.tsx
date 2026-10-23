"use client";

import {
  CheckCircle2,
  ArrowRight,
  Rocket,
  Atom,
  Trophy,
} from "lucide-react";
import { InquiryDialog } from "./InquiryDialog";

export function AcademicWings() {
  const wings = [
    {
      title: "Primary Wing",
      subtitle: "Foundational Wonder (Grades 1 – 5)",
      badge: "🌱 EARLY EXPLORERS",
      badgeColor: "bg-[#ebdd51] text-slate-950 border border-slate-900",
      accentBorder: "hover:border-[#ebdd51]",
      icon: Rocket,
      iconBg: "bg-[#ebdd51] text-slate-950",
      description:
        "Cultivating reading fluency, sensory science experiments, and cheerful social growth. Students learn through phonics, math puzzles, and interactive activity centers.",
      features: [
        "Interactive phonics & storytelling circles",
        "Sensory science kits & hands-on arts",
        "Character building & Islamic moral stories",
        "Early computing & visual coding basics",
      ],
      ageRange: "Grades 1 to 5 • Age 5-10",
      funSticker: "100% Fun & Joy",
      buttonColor: "bg-[#ebdd51] text-slate-950 hover:bg-[#ebdd51]/90",
    },
    {
      title: "Middle School Wing",
      subtitle: "Analytical Growth & Logic (Grades 6 – 8)",
      badge: "⚡ STEM INNOVATORS",
      badgeColor: "bg-[#17b4cd] text-white border border-[#17b4cd]",
      accentBorder: "hover:border-[#17b4cd]",
      icon: Atom,
      iconBg: "bg-[#17b4cd] text-white",
      description:
        "Bridging core academic concepts with scientific experimentation, mathematical logic, bilingual debates, and digital IT laboratory sessions.",
      features: [
        "Hands-on Physics, Chemistry & Biology demos",
        "Inter-house speech & parliamentary debate",
        "Advanced mathematics problem-solving",
        "Intramural sports leagues & physical training",
      ],
      ageRange: "Grades 6 to 8 • Age 11-13",
      funSticker: "Robotics & Logic",
      buttonColor: "bg-[#17b4cd] text-white hover:bg-[#139bb0]",
    },
    {
      title: "Secondary Wing",
      subtitle: "Matriculation Excellence (Grades 9 – 10)",
      badge: "🏆 BOARD CHAMPIONS",
      badgeColor: "bg-gradient-to-r from-[#17b4cd] to-[#ebdd51] text-slate-950 border border-slate-900",
      accentBorder: "hover:border-[#17b4cd]",
      icon: Trophy,
      iconBg: "bg-slate-900 text-[#ebdd51]",
      description:
        "Elite preparation for Federal & Secondary Board examinations. Targeted syllabus mastery, full lab practicals, past-paper drills, and career guidance.",
      features: [
        "Exemplary Federal & Secondary Board syllabus mastery",
        "Individual science lab apparatus for each student",
        "Rigorous mock examinations with detailed diagnostics",
        "Higher-secondary & pre-medical/engineering counseling",
      ],
      ageRange: "Grades 9 & 10 (Matriculation)",
      funSticker: "99.4% A* Record",
      buttonColor: "bg-slate-900 text-white hover:bg-slate-800",
    },
  ];

  return (
    <section id="academics" className="py-20 relative overflow-hidden">
      {/* Blurry ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-[#ebdd51]/20 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[400px] bg-[#17b4cd]/20 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2">
            <span className="funky-sticker bg-[#ebdd51] text-slate-950 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider rotate-[1deg]">
              🎓 ACADEMIC ADVENTURE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Three Wings,{" "}
            <span className="relative inline-block mx-1">
              <span className="absolute -inset-1 -skew-y-1 bg-[#17b4cd]/20 rounded-xl -z-10" />
              <span className="bg-gradient-to-r from-[#17b4cd] to-[#129db2] bg-clip-text text-transparent">
                One Lifelong Journey
              </span>
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            From kindergarten wonder to triumphant matriculation board results, we nurture character, confidence, and curiosity.
          </p>
        </div>

        {/* 3 Wings Grid with Funky Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {wings.map((wing, index) => {
            const Icon = wing.icon;
            return (
              <div
                key={index}
                className={`group relative funky-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between border-2 border-white/90 ${wing.accentBorder} transition-all duration-300`}
              >
                {/* Funky Tape on card top */}
                <div className="funky-tape" />

                <div>
                  {/* Top Bar with Badge & Icon */}
                  <div className="flex items-center justify-between mb-5 pt-1">
                    <span
                      className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-xs ${wing.badgeColor}`}
                    >
                      {wing.badge}
                    </span>
                    <div
                      className={`w-11 h-11 rounded-2xl ${wing.iconBg} flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-1 mb-3">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                      {wing.title}
                    </h3>
                    <p className="text-xs font-bold text-[#17b4cd]">
                      {wing.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-5">
                    {wing.description}
                  </p>

                  {/* Features List with Funky Checkmarks */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-200/60">
                    {wing.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs font-bold text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-[#17b4cd]/15 text-[#17b4cd] flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer with Age Tag and Admission Button */}
                <div className="pt-5 mt-6 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-[11px] font-extrabold text-slate-500 bg-slate-100/80 px-2.5 py-1 rounded-full">
                    {wing.ageRange}
                  </span>
                  <InquiryDialog>
                    <button
                      className={`text-xs font-black px-4 py-2 rounded-full shadow-xs cursor-pointer flex items-center gap-1.5 transition-transform hover:scale-105 ${wing.buttonColor}`}
                    >
                      <span>Apply</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </InquiryDialog>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
