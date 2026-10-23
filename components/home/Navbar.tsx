"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Menu,
  Sparkles,
  LogIn,
  Star,
} from "lucide-react";
import { InquiryDialog } from "./InquiryDialog";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Academics", href: "#academics", emoji: "🎒" },
    { name: "Digital Portals", href: "#portals", emoji: "💻" },
    { name: "Campus Life", href: "#campus-life", emoji: "⚽" },
    { name: "Why HPSS", href: "#why-us", emoji: "🌟" },
    { name: "FAQs", href: "#faqs", emoji: "💡" },
  ];

  return (
    <header className="sticky top-0 z-50 px-3 sm:px-6 lg:px-8 py-3 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 px-3 sm:px-6 py-2.5 flex items-center justify-between ${
          scrolled
            ? "glass-panel shadow-[0_16px_40px_rgba(23,180,205,0.12)] border-2 border-white/90"
            : "bg-white/80 backdrop-blur-2xl border-2 border-white/80 shadow-sm"
        }`}
      >
        {/* Brand / Logo with funky glowing border */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-white shadow-sm border-2 border-[#17b4cd] ring-2 ring-[#ebdd51]/60 p-0.5 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6">
            <Image
              src="/image.png"
              alt="Hamza Public Secondary School (HPSS) Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 font-sans">
                HPSS
              </span>
              <span className="px-1.5 py-0.5 rounded-md bg-[#ebdd51] text-[9px] font-black uppercase text-slate-900 tracking-wider hidden xs:inline-block shadow-xs">
                Campus
              </span>
            </div>
            <span className="text-[10px] font-bold text-slate-500 hidden md:block">
              Hamza Public Secondary School
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links with Funky Hover */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/70 shadow-xs">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group px-3 py-1.5 text-xs font-bold text-slate-700 hover:text-slate-950 hover:bg-[#ebdd51]/30 rounded-full transition-all duration-200 flex items-center gap-1.5"
            >
              <span className="text-xs transition-transform group-hover:scale-125">{link.emoji}</span>
              <span>{link.name}</span>
            </Link>
          ))}
        </nav>

        {/* Action Buttons with Funky School Colors */}
        <div className="hidden sm:flex items-center gap-2.5">
          <Link href="/portal-login">
            <Button
              variant="ghost"
              className="rounded-full text-xs font-bold h-9 px-3.5 text-slate-700 hover:text-slate-900 hover:bg-[#17b4cd]/10 transition-all cursor-pointer flex items-center gap-1.5 border border-transparent hover:border-[#17b4cd]/30"
            >
              <LogIn className="w-3.5 h-3.5 text-[#17b4cd]" />
              <span>Portal Login</span>
            </Button>
          </Link>

          <InquiryDialog>
            <Button className="relative group rounded-full bg-[#17b4cd] hover:bg-[#139bb0] text-white font-black text-xs h-9 px-5 shadow-[0_6px_18px_rgba(23,180,205,0.4)] transition-all hover:scale-105 cursor-pointer flex items-center gap-1.5 border-2 border-white">
              <span className="absolute -top-1.5 -right-1 px-1.5 py-0.2 bg-[#ebdd51] text-slate-950 text-[8px] font-black rounded-full uppercase shadow-xs animate-bounce">
                Open!
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#ebdd51] animate-spin-slow" />
              <span>Apply 2026</span>
            </Button>
          </InquiryDialog>
        </div>

        {/* Mobile Menu (Sheet with clean blur) */}
        <div className="flex md:hidden items-center gap-2">
          <InquiryDialog>
            <button className="bg-[#ebdd51] text-slate-900 px-3 py-1 rounded-full text-xs font-black shadow-xs sm:hidden">
              Apply
            </button>
          </InquiryDialog>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger render={
              <Button
                variant="ghost"
                size="icon"
                className="w-9 h-9 rounded-full bg-slate-100 text-slate-800"
                aria-label="Open navigation"
              >
                <Menu className="w-4 h-4" />
              </Button>
            } />
            <SheetContent
              side="right"
              className="w-[85vw] max-w-sm bg-white/90 backdrop-blur-2xl border-l border-white/50 p-6 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <SheetHeader className="text-left border-b border-slate-200/50 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-white shadow-xs border-2 border-[#17b4cd] p-0.5 flex items-center justify-center">
                      <Image
                        src="/image.png"
                        alt="HPSS"
                        width={36}
                        height={36}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <SheetTitle className="text-lg font-black text-slate-900">
                        HPSS Campus
                      </SheetTitle>
                      <p className="text-xs text-slate-500 font-medium">
                        Hamza Public Secondary School
                      </p>
                    </div>
                  </div>
                </SheetHeader>

                {/* Mobile Links */}
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="px-4 py-2.5 text-sm font-bold text-slate-800 hover:bg-[#ebdd51]/30 rounded-2xl transition-all flex items-center gap-3"
                    >
                      <span className="text-lg">{link.emoji}</span>
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-br from-[#17b4cd]/15 to-[#ebdd51]/20 border border-[#17b4cd]/30 space-y-2">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span className="text-xs font-black text-slate-900">Admissions 2026-2027</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    Seats are filling fast across Primary, Middle, and Matriculation Wings.
                  </p>
                </div>
              </div>

              {/* Bottom CTAs */}
              <div className="space-y-3 pt-6 border-t border-slate-200/50">
                <InquiryDialog>
                  <Button
                    onClick={() => setMobileOpen(false)}
                    className="w-full rounded-2xl bg-[#17b4cd] hover:bg-[#139bb0] text-white font-black text-sm h-11 shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-[#ebdd51]" />
                    <span>Apply for Admission</span>
                  </Button>
                </InquiryDialog>

                <Link href="/portal-login" onClick={() => setMobileOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full rounded-2xl border-slate-300 text-slate-800 font-bold text-xs h-10 cursor-pointer flex items-center justify-center gap-2 mt-2"
                  >
                    <LogIn className="w-4 h-4 text-[#17b4cd]" />
                    <span>Digital Portals Login</span>
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
