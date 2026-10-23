"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2, GraduationCap, Send, Sparkles } from "lucide-react";

interface InquiryDialogProps {
  children?: React.ReactNode;
}

export function InquiryDialog({ children }: InquiryDialogProps) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    grade: "Primary Wing (Grade 1 - 5)",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={children ? <span className="inline-block">{children}</span> : undefined}>
        {!children && (
          <Button className="rounded-full bg-[#17b4cd] hover:bg-[#139bb0] text-white font-black text-xs h-10 px-6 shadow-md transition-all hover:scale-105 cursor-pointer flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#ebdd51]" />
            <span>Apply Online</span>
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="max-w-md w-full bg-white/95 backdrop-blur-2xl border-2 border-white/90 rounded-3xl shadow-[0_30px_70px_rgba(23,180,205,0.25)] p-6 sm:p-8 text-slate-900 relative overflow-hidden">
        {/* Decorative corner glows inside dialog */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#ebdd51]/30 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-[#17b4cd]/25 rounded-full blur-2xl pointer-events-none" />

        <DialogHeader className="space-y-1.5 text-left relative z-10">
          <div className="flex items-center gap-2">
            <span className="funky-sticker bg-[#ebdd51] text-slate-950 px-2.5 py-0.5 rounded-full font-black text-[10px] tracking-wide rotate-[-1deg]">
              ★ ADMISSIONS 2026-2027
            </span>
            <span className="text-xs text-slate-500 font-bold">HPSS Campus</span>
          </div>
          <DialogTitle className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <div className="w-7 h-7 rounded-xl bg-[#17b4cd] text-white flex items-center justify-center shrink-0">
              <GraduationCap className="w-4 h-4" />
            </div>
            <span>HPSS Admission Desk</span>
          </DialogTitle>
          <DialogDescription className="text-slate-600 text-xs sm:text-sm font-medium">
            Fill out this quick 2-minute inquiry. Our campus admissions team will schedule an assessment visit.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-6 text-center space-y-4 relative z-10">
            <div className="w-16 h-16 rounded-3xl bg-[#ebdd51] text-slate-950 border-2 border-slate-900 shadow-md flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <div className="space-y-1.5">
              <h4 className="text-xl font-black text-slate-900">Inquiry Successfully Registered!</h4>
              <p className="text-xs text-slate-600 max-w-xs mx-auto font-medium">
                Thank you, <strong>{formData.parentName || "Parent"}</strong>. We have saved{" "}
                <span className="text-[#17b4cd] font-bold">{formData.studentName || "your child"}</span>&apos;s application for{" "}
                <strong className="text-slate-900">{formData.grade}</strong>. Our admissions officer will call you within 24 hours.
              </p>
            </div>
            <Button
              onClick={handleReset}
              className="w-full rounded-2xl bg-[#17b4cd] hover:bg-[#139bb0] text-white font-black text-xs h-11 shadow-md cursor-pointer transition-transform hover:scale-102"
            >
              Done & Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5 mt-3 relative z-10">
            <div className="space-y-1">
              <label className="text-[11px] font-black text-slate-800 uppercase tracking-wide">
                Student Full Name
              </label>
              <input
                required
                type="text"
                value={formData.studentName}
                onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                placeholder="e.g. Zaid Ali"
                className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#17b4cd] focus:border-[#17b4cd] focus:outline-none bg-slate-50/70 font-semibold"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] font-black text-slate-800 uppercase tracking-wide">
                  Parent / Guardian
                </label>
                <input
                  required
                  type="text"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  placeholder="e.g. Tariq Mehmood"
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#17b4cd] focus:border-[#17b4cd] focus:outline-none bg-slate-50/70 font-semibold"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-black text-slate-800 uppercase tracking-wide">
                  Contact Phone
                </label>
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+92 300 1234567"
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#17b4cd] focus:border-[#17b4cd] focus:outline-none bg-slate-50/70 font-semibold"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-black text-slate-800 uppercase tracking-wide">
                Email Address
              </label>
              <input
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="parent@example.com"
                className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#17b4cd] focus:border-[#17b4cd] focus:outline-none bg-slate-50/70 font-semibold"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-black text-slate-800 uppercase tracking-wide">
                Target Academic Wing
              </label>
              <select
                value={formData.grade}
                onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#17b4cd] focus:border-[#17b4cd] focus:outline-none bg-slate-50/70 font-bold"
              >
                <option>Primary Wing (Grade 1 - 5)</option>
                <option>Middle School Wing (Grade 6 - 8)</option>
                <option>Secondary Wing - Matric 9th Science</option>
                <option>Secondary Wing - Matric 10th Science</option>
                <option>Secondary Wing - General Group</option>
              </select>
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                className="w-full rounded-2xl bg-[#17b4cd] hover:bg-[#139bb0] text-white font-black text-sm h-11 shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2 transition-transform hover:scale-102"
              >
                <Send className="w-4 h-4 text-[#ebdd51]" />
                <span>Submit Admission Inquiry</span>
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
