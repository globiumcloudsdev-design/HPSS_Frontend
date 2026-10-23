"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Heart, Sparkles } from "lucide-react";

export function Testimonials() {
  const [likes, setLikes] = useState<{ [key: number]: number }>({
    0: 42,
    1: 58,
    2: 36,
    3: 49,
  });

  const handleLike = (idx: number) => {
    setLikes((prev) => ({
      ...prev,
      [idx]: (prev[idx] || 0) + 1,
    }));
  };

  const testimonials = [
    {
      name: "Muhammad Tariq",
      role: "Parent of Rayan (Grade 8) & Maryam (Grade 5)",
      badge: "VERIFIED GUARDIAN",
      badgeColor: "bg-[#ebdd51] text-slate-950",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop",
      fallback: "MT",
      text: "The dedicated Guardian Tab in the HPSS Student Portal gives me instant peace of mind. I can view my children's daily attendance, homework submissions, and fee vouchers straight from my phone without any delays.",
      highlight: "Guardian Tab gives absolute peace of mind",
      rotation: "rotate-[-1deg]",
      ringColor: "ring-[#17b4cd]",
    },
    {
      name: "Ayesha Noor",
      role: "Matriculation Science Topper (Grade 10)",
      badge: "ALUMNI TOKENS",
      badgeColor: "bg-[#17b4cd] text-white",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop",
      fallback: "AN",
      text: "The science teachers at Hamza Public give personal attention to every single concept. The laboratory practicals, past-paper drills, and weekly mock exams helped me secure an A-One distinction in the Board exams!",
      highlight: "Achieved A-One Board Distinction",
      rotation: "rotate-[1deg]",
      ringColor: "ring-[#ebdd51]",
    },
    {
      name: "Farzana Yasmeen, M.Sc.",
      role: "Senior Science Department Faculty",
      badge: "FACULTY DESK",
      badgeColor: "bg-[#ebdd51] text-slate-950",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&h=120&fit=crop",
      fallback: "FY",
      text: "Our Teacher Portal makes daily attendance roll-calls and homework distribution completely paperless. The school culture actively fosters creative thinking, moral discipline, and mutual respect.",
      highlight: "Seamless paperless classroom workflows",
      rotation: "rotate-[-1deg]",
      ringColor: "ring-[#17b4cd]",
    },
    {
      name: "Usman Ghani",
      role: "Parent of Bilal (Grade 10)",
      badge: "ACTIVE PARENT",
      badgeColor: "bg-[#17b4cd] text-white",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop",
      fallback: "UG",
      text: "Hamza Public combines Islamic moral character with cutting-edge academic rigor. My son's public speaking and confidence in STEM subjects have skyrocketed since joining HPSS.",
      highlight: "Islamic moral values with high STEM rigor",
      rotation: "rotate-[1deg]",
      ringColor: "ring-[#ebdd51]",
    },
  ];

  return (
    <section id="why-us" className="py-20 relative overflow-hidden">
      {/* Blurry Theme Background Glows */}
      <div className="absolute top-1/3 left-1/3 w-[650px] h-[450px] bg-gradient-to-r from-[#17b4cd]/20 to-[#ebdd51]/20 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2">
            <span className="funky-sticker bg-[#ebdd51] text-slate-950 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider rotate-[1deg]">
              💌 CAMPUS BUZZ & LOVE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Voices of the{" "}
            <span className="bg-gradient-to-r from-[#17b4cd] to-[#129db2] bg-clip-text text-transparent">
              HPSS Family
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            Real stories from parents, high-achieving alumni, and devoted faculty who make our school a magical place to learn.
          </p>
        </div>

        {/* 4 Testimonials Grid with Funky Sticky Locker Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`group relative funky-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between border-2 border-white/90 shadow-md transition-all duration-300 ${item.rotation} hover:rotate-0`}
            >
              {/* Funky Tape on top of card */}
              <div className="funky-tape" />

              <div>
                {/* Header with Avatar & Badge */}
                <div className="flex items-start justify-between gap-4 mb-4 pt-1">
                  <div className="flex items-center gap-3">
                    <Avatar className={`w-12 h-12 border-2 border-white shadow-sm ring-2 ${item.ringColor}`}>
                      <AvatarImage src={item.avatar} alt={item.name} />
                      <AvatarFallback className="bg-[#17b4cd] text-white font-black text-xs">
                        {item.fallback}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-base font-black text-slate-900 tracking-tight">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-500 font-bold">{item.role}</p>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Rating stars & highlighter stamp */}
                <div className="flex flex-wrap items-center gap-1.5 mb-3.5">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#ebdd51] text-amber-500" />
                    ))}
                  </div>
                  <span className="text-[11px] font-black text-slate-900 bg-[#ebdd51]/40 border border-[#ebdd51] px-2 py-0.5 rounded-md">
                    &ldquo;{item.highlight}&rdquo;
                  </span>
                </div>

                {/* Speech Content */}
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              {/* Interactive like button & verified footer */}
              <div className="mt-5 pt-3.5 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-500">
                <button
                  onClick={() => handleLike(index)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 hover:bg-rose-50 hover:text-rose-600 transition-colors cursor-pointer text-slate-700 font-black text-xs"
                >
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                  <span>{likes[index]} Likes</span>
                </button>

                <span className="text-[#17b4cd] font-black flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#ebdd51]" />
                  HPSS Campus Family
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
