"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, ArrowRight } from "lucide-react";
import { InquiryDialog } from "./InquiryDialog";

export function FaqSection() {
  const faqs = [
    {
      id: "faq-1",
      question: "How do I enroll my child at Hamza Public Secondary School for 2026-2027?",
      answer:
        "Admissions for the 2026-2027 academic session are currently open! You can click 'Apply for Admission' to submit an inquiry online. Our school admissions desk will schedule a friendly readiness assessment and guided campus walkthrough. Following the assessment, registration formalities are completed at the campus branch.",
    },
    {
      id: "faq-2",
      question: "How does the Student Portal work and how do parents access the Guardian Tab?",
      answer:
        "Every student receives a unique Student Roll Number. By signing in to the Student Portal, students access their daily homework desk, timetable, and study resources. The dedicated Guardian Tab enables parents to review live attendance, fee vouchers, and direct teacher notices on any phone or laptop.",
    },
    {
      id: "faq-3",
      question: "What curriculum and board affiliations are followed at HPSS?",
      answer:
        "Hamza Public Secondary School follows the recognized Secondary School Certificate (Matriculation) syllabus affiliated with the Board of Intermediate and Secondary Education. We combine strict board preparation with modern digital IT labs, robotics, and active science practicals.",
    },
    {
      id: "faq-4",
      question: "What are the fee payment options (Bank Challans & Cashier Desk)?",
      answer:
        "Monthly fee vouchers can be downloaded directly with 1-click from the Student & Guardian Portal and paid at designated partner bank branches using official 3-part bank vouchers, or paid conveniently at the school's cashier desk with an instant thermal POS receipt.",
    },
    {
      id: "faq-5",
      question: "Does HPSS offer merit scholarships or sibling concessions?",
      answer:
        "Yes! Merit scholarships are proudly awarded to high-achieving students demonstrating top marks in annual and board examinations. Need-based concessions and sibling discounts are also available upon review by the campus administration.",
    },
  ];

  return (
    <section id="faqs" className="py-20 relative overflow-hidden">
      {/* Blurry Theme Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#17b4cd]/15 via-[#ebdd51]/20 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2">
            <span className="funky-sticker bg-[#ebdd51] text-slate-950 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider rotate-[-1deg]">
              💡 QUESTIONS & ANSWERS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#17b4cd] to-[#129db2] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-sm text-slate-600 font-medium">
            Everything you need to know about admissions, daily routines, and school portals.
          </p>
        </div>

        {/* Funky Frosted Glass Accordion */}
        <div className="funky-card rounded-3xl p-6 sm:p-9 border-2 border-white/90 shadow-[0_20px_50px_rgba(23,180,205,0.1)] relative">
          <div className="funky-tape" />

          <Accordion className="w-full space-y-3">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-white/70 backdrop-blur-md rounded-2xl border border-slate-200/60 px-4 py-1.5 transition-colors hover:border-[#17b4cd]/50 shadow-2xs"
              >
                <AccordionTrigger className="text-left font-black text-slate-900 text-sm sm:text-base hover:no-underline hover:text-[#17b4cd] py-3.5">
                  <span className="pr-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#17b4cd]" />
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed pb-3 pl-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Bottom Helper with Funky Colors */}
          <div className="mt-8 pt-5 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-2xl bg-[#ebdd51] text-slate-950 flex items-center justify-center shrink-0 shadow-sm">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-black text-slate-900">Still have questions?</p>
                <p className="text-xs text-slate-500 font-semibold">Our campus admissions counselors are happy to guide you.</p>
              </div>
            </div>

            <InquiryDialog>
              <Button className="w-full sm:w-auto rounded-full bg-[#17b4cd] hover:bg-[#139bb0] text-white font-black text-xs h-11 px-6 shadow-md transition-all hover:scale-105 cursor-pointer flex items-center gap-2">
                <span>Talk to Admissions Desk</span>
                <ArrowRight className="w-4 h-4 text-[#ebdd51]" />
              </Button>
            </InquiryDialog>
          </div>
        </div>
      </div>
    </section>
  );
}
