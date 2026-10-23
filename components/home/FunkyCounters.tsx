"use client";

import { Trophy, Users, Award, Rocket } from "lucide-react";

export function FunkyCounters() {
  const stats = [
    {
      value: "25+",
      label: "Years of Educational Legacy",
      detail: "Empowering youth since 1999",
      icon: Trophy,
      iconBg: "bg-[#ebdd51] text-slate-900",
      accentBorder: "border-[#ebdd51]/40 hover:border-[#ebdd51]",
      sticker: "EST. 1999",
      stickerColor: "bg-[#ebdd51] text-slate-900",
      rotation: "group-hover:-rotate-1",
    },
    {
      value: "1,800+",
      label: "Thriving Students & Families",
      detail: "Primary, Middle & Matric wings",
      icon: Users,
      iconBg: "bg-[#17b4cd] text-white",
      accentBorder: "border-[#17b4cd]/40 hover:border-[#17b4cd]",
      sticker: "HPSS TRIBE",
      stickerColor: "bg-[#17b4cd] text-white",
      rotation: "group-hover:rotate-1",
    },
    {
      value: "99.4%",
      label: "Board Pass & Distinction Rate",
      detail: "Consistent A* & A grades record",
      icon: Award,
      iconBg: "bg-gradient-to-tr from-[#17b4cd] to-[#ebdd51] text-slate-900",
      accentBorder: "border-[#ebdd51]/40 hover:border-[#ebdd51]",
      sticker: "TOP SCORES",
      stickerColor: "bg-[#ebdd51] text-slate-900",
      rotation: "group-hover:-rotate-2",
    },
    {
      value: "30+",
      label: "Robotics, Arts & Sports Clubs",
      detail: "Active learning beyond textbooks",
      icon: Rocket,
      iconBg: "bg-[#17b4cd] text-white",
      accentBorder: "border-[#17b4cd]/40 hover:border-[#17b4cd]",
      sticker: "EXP-LEARNING",
      stickerColor: "bg-[#17b4cd] text-white",
      rotation: "group-hover:rotate-2",
    },
  ];

  return (
    <section className="relative z-10 mt-6 sm:mt-10 mb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className={`group relative glass-panel rounded-3xl p-5 sm:p-6 border ${stat.accentBorder} transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(23,180,205,0.25)] flex flex-col justify-between`}
              >
                {/* Funky Corner Tape / Sticker */}
                <div
                  className={`absolute -top-3 right-5 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm ${stat.stickerColor} transition-transform duration-300 ${stat.rotation}`}
                >
                  {stat.sticker}
                </div>

                <div className="flex items-center gap-3.5 mb-3">
                  <div
                    className={`w-12 h-12 rounded-2xl ${stat.iconBg} flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                      {stat.value}
                    </p>
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-800 leading-snug">
                    {stat.label}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {stat.detail}
                  </p>
                </div>

                {/* Subtle animated underline on hover */}
                <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#17b4cd] to-[#ebdd51] rounded-full transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
