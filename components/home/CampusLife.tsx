"use client";

import { Button } from "@/components/ui/button";
import {
  Cpu,
  Trophy,
  Palette,
  BookOpen,
  Apple,
  Bus,
  ArrowRight,
  ShieldCheck,
  Calendar,
} from "lucide-react";
import { InquiryDialog } from "./InquiryDialog";

export function CampusLife() {
  const highlights = [
    {
      title: "Science & Robotics Labs",
      tag: "🔬 HANDS-ON STEM",
      tagColor: "bg-[#17b4cd] text-white",
      description:
        "Modern physics, chemistry, and biology experimental apparatus paired with high-speed digital IT workstations for coding and robotics.",
      icon: Cpu,
      iconColor: "text-[#17b4cd] bg-[#17b4cd]/15",
      stat: "Live Experiments",
      colSpan: "md:col-span-2",
      badgeEmoji: "🤖",
    },
    {
      title: "Sports Arena & Cricket Nets",
      tag: "⚽ ATHLETICS",
      tagColor: "bg-[#ebdd51] text-slate-950",
      description:
        "Cricket turf nets, badminton courts, table tennis, and annual sports week fostering teamwork, stamina, and competitive discipline.",
      icon: Trophy,
      iconColor: "text-amber-600 bg-[#ebdd51]/30",
      stat: "Champions League",
      colSpan: "md:col-span-1",
      badgeEmoji: "🏆",
    },
    {
      title: "Speech, Drama & Qirat Club",
      tag: "🎤 EXPRESSION",
      tagColor: "bg-[#ebdd51] text-slate-950",
      description:
        "Bilingual debate competitions, parliamentary mock sessions, Qirat & Naat contests, and annual stage exhibitions.",
      icon: Palette,
      iconColor: "text-amber-600 bg-[#ebdd51]/30",
      stat: "Inter-School Cups",
      colSpan: "md:col-span-1",
      badgeEmoji: "🎭",
    },
    {
      title: "Cyber Library & Reading Pods",
      tag: "📚 KNOWLEDGE HUB",
      tagColor: "bg-[#17b4cd] text-white",
      description:
        "Curated collection of 10,000+ academic references, Islamic literature, science periodicals, and quiet reading study pods.",
      icon: BookOpen,
      iconColor: "text-[#17b4cd] bg-[#17b4cd]/15",
      stat: "10,000+ Books",
      colSpan: "md:col-span-2",
      badgeEmoji: "📖",
    },
    {
      title: "Hygienic Canteen & Pure RO Plant",
      tag: "🍎 WELLNESS",
      tagColor: "bg-[#ebdd51] text-slate-950",
      description:
        "Commercial multi-stage RO water filtration plant providing 100% clean drinking water, nutritious snacks, and campus nurse care.",
      icon: Apple,
      iconColor: "text-amber-600 bg-[#ebdd51]/30",
      stat: "100% RO Filtered",
      colSpan: "md:col-span-1",
      badgeEmoji: "🥗",
    },
    {
      title: "Dedicated GPS School Fleet",
      tag: "🚌 SAFE TRANSIT",
      tagColor: "bg-[#17b4cd] text-white",
      description:
        "Dedicated school pick-and-drop vans serving designated neighbourhood routes with vetted drivers, attendants, and GPS tracking.",
      icon: Bus,
      iconColor: "text-[#17b4cd] bg-[#17b4cd]/15",
      stat: "Full City Transit",
      colSpan: "md:col-span-2",
      badgeEmoji: "🚐",
    },
  ];

  return (
    <section id="campus-life" className="py-20 relative overflow-hidden">
      {/* Blurry Background Orbs */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[500px] bg-[#17b4cd]/20 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[650px] h-[450px] bg-[#ebdd51]/25 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="funky-sticker bg-[#ebdd51] text-slate-950 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider rotate-[-1deg]">
                ✨ VIBRANT CAMPUS WONDERS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Life & Wonder at{" "}
              <span className="bg-gradient-to-r from-[#17b4cd] via-[#0284c7] to-[#17b4cd] bg-clip-text text-transparent">
                HPSS Campus
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              Every day is an adventure: high-energy sports, hands-on scientific discovery, creative stages, and a warm family spirit.
            </p>
          </div>

          <InquiryDialog>
            <Button className="rounded-full bg-white/90 hover:bg-[#ebdd51] hover:text-slate-950 text-slate-900 border-2 border-slate-200 font-black text-xs h-11 px-6 shadow-sm transition-all hover:scale-105 cursor-pointer flex items-center gap-2 self-start md:self-auto">
              <Calendar className="w-4 h-4 text-[#17b4cd]" />
              <span>Schedule Campus Tour</span>
            </Button>
          </InquiryDialog>
        </div>

        {/* Bento Grid with Funky Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`group relative funky-card rounded-3xl p-6 ${item.colSpan} flex flex-col justify-between border-2 border-white/90 transition-all duration-300`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs ${item.tagColor}`}
                    >
                      {item.tag}
                    </span>
                    <span className="text-[11px] font-extrabold text-slate-700 bg-slate-100/90 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <span>{item.badgeEmoji}</span>
                      <span>{item.stat}</span>
                    </span>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-2xl ${item.iconColor} flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-600 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#17b4cd]" />
                    Safe & Monitored
                  </span>
                  <InquiryDialog>
                    <span className="text-xs font-black text-[#17b4cd] hover:text-[#139bb0] flex items-center gap-1 cursor-pointer hover:underline">
                      Explore Wing <ArrowRight className="w-3.5 h-3.5" />
                    </span>
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
