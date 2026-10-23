"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  CheckCircle,
  GraduationCap,
  ShieldCheck,
  Laptop,
  Heart,
  Sparkles,
} from "lucide-react";
import { InquiryDialog } from "./InquiryDialog";

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-white relative pt-16 pb-12 overflow-hidden border-t-2 border-slate-800">
      {/* Blurry Funky Ambient Theme Glows */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#17b4cd]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#ebdd51]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Funky Pre-Footer Action Banner with Confetti Vibes */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <div className="relative bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900 backdrop-blur-2xl border-2 border-[#17b4cd]/40 rounded-3xl p-8 sm:p-12 shadow-[0_20px_60px_rgba(23,180,205,0.2)] flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden">
          {/* Decorative Corner Glow */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#ebdd51]/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#17b4cd]/30 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-3 text-center lg:text-left max-w-xl relative z-10">
            <div className="inline-flex items-center gap-2">
              <span className="funky-sticker bg-[#ebdd51] text-slate-950 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider rotate-[-2deg]">
                🎒 ADMISSIONS IN FULL SWING
              </span>
              <span className="text-xs font-bold text-[#17b4cd] hidden sm:inline-block">
                Session 2026-2027
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Begin your child&apos;s journey at{" "}
              <span className="bg-gradient-to-r from-[#17b4cd] via-[#0284c7] to-[#ebdd51] bg-clip-text text-transparent">
                Hamza Public School
              </span>
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
              Where rigorous academics meet moral values, modern science labs, and instant digital parent portals. Limited seats per grade to preserve our 1:15 ratio.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full lg:w-auto relative z-10">
            <InquiryDialog>
              <Button className="w-full sm:w-auto rounded-full bg-[#17b4cd] hover:bg-[#139bb0] text-white font-black text-sm h-12 px-7 shadow-lg transition-all hover:scale-105 cursor-pointer flex items-center justify-center gap-2 border-2 border-white/80">
                <Sparkles className="w-4 h-4 text-[#ebdd51]" />
                <span>Apply for Admission</span>
              </Button>
            </InquiryDialog>

            <Link href="/portal-login" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto rounded-full bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 hover:border-[#ebdd51] font-bold text-xs h-12 px-6 cursor-pointer flex items-center justify-center gap-2 transition-all"
              >
                <Laptop className="w-4 h-4 text-[#17b4cd]" />
                <span>Portals Gateway</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-0.5 border-2 border-[#17b4cd] ring-2 ring-[#ebdd51]/50 flex items-center justify-center shrink-0 shadow-sm">
                <Image
                  src="/image.png"
                  alt="HPSS"
                  width={42}
                  height={42}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-black tracking-tight text-white block">
                    HPSS
                  </span>
                  <span className="px-1.5 py-0.2 rounded bg-[#ebdd51] text-[9px] font-black text-slate-950 uppercase">
                    Campus
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-bold">
                  Hamza Public Secondary School
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-medium leading-relaxed">
              Guided by our motto <em>&ldquo;Enter to Learn, Go Forth to Serve&rdquo;</em>. Shaping future doctors, engineers, scholars, and ethical citizens with passionate pedagogy since 1999.
            </p>

            <div className="space-y-2.5 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#17b4cd] shrink-0" />
                <span>Harley Campus, Rawalpindi / Islamabad</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#ebdd51] shrink-0" />
                <span>+92 51 888 2568 • +92 300 786 1122</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#17b4cd] shrink-0" />
                <span>admissions@hamzapublic.edu.pk</span>
              </div>
            </div>
          </div>

          {/* Col 2: Academic Wings (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black text-[#ebdd51] uppercase tracking-wider">
              Academic Wings
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-semibold">
              <li>
                <a href="#academics" className="hover:text-[#17b4cd] transition-colors flex items-center gap-1">
                  <span>🌱 Primary (1 - 5)</span>
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-[#17b4cd] transition-colors flex items-center gap-1">
                  <span>⚡ Middle (6 - 8)</span>
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-[#17b4cd] transition-colors flex items-center gap-1">
                  <span>🏆 Matric Science</span>
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-[#17b4cd] transition-colors flex items-center gap-1">
                  <span>📖 General Group</span>
                </a>
              </li>
              <li>
                <a href="#campus-life" className="hover:text-[#17b4cd] transition-colors flex items-center gap-1">
                  <span>🔬 Robotics & IT Lab</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Portal Fast Track (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black text-[#17b4cd] uppercase tracking-wider">
              Smart Portals
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-semibold">
              <li>
                <Link href="/portal-login" className="hover:text-white transition-colors flex items-center gap-2">
                  <GraduationCap className="w-3.5 h-3.5 text-[#17b4cd]" />
                  <span>Student Homework Desk</span>
                </Link>
              </li>
              <li>
                <Link href="/portal-login" className="hover:text-white transition-colors flex items-center gap-2">
                  <Heart className="w-3.5 h-3.5 text-rose-400" />
                  <span>Dedicated Guardian Tab</span>
                </Link>
              </li>
              <li>
                <Link href="/portal-login" className="hover:text-white transition-colors flex items-center gap-2">
                  <Laptop className="w-3.5 h-3.5 text-[#ebdd51]" />
                  <span>Teacher Attendance Roll-Call</span>
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-white transition-colors flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#17b4cd]" />
                  <span>Branch Admin Desk & POS</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black text-[#ebdd51] uppercase tracking-wider">
              School Gazette
            </h4>
            <p className="text-xs text-slate-400 font-medium">
              Receive term datesheets, sports gala schedules, and admissions notices directly in your inbox.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 rounded-2xl text-xs text-emerald-300 flex items-center gap-2 font-bold">
                <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>Subscribed! Welcome to the HPSS family.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter parent email address..."
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#17b4cd] font-medium"
                />
                <Button
                  type="submit"
                  className="w-full rounded-xl bg-[#ebdd51] hover:bg-[#ebdd51]/90 text-slate-950 font-black text-xs h-10 shadow-sm cursor-pointer transition-transform hover:scale-102"
                >
                  Join Gazette
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-semibold">
          <p>
            &copy; 2026 Hamza Public Secondary School (HPSS). All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-[#ebdd51] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#17b4cd]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
