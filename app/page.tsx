import { Navbar } from "@/components/home/Navbar";
import { Hero } from "@/components/home/Hero";
import { FunkyCounters } from "@/components/home/FunkyCounters";
import { PortalShowcase } from "@/components/home/PortalShowcase";
import { AcademicWings } from "@/components/home/AcademicWings";
import { CampusLife } from "@/components/home/CampusLife";
import { Testimonials } from "@/components/home/Testimonials";
import { FaqSection } from "@/components/home/FaqSection";
import { Footer } from "@/components/home/Footer";
import { FloatingDoodles } from "@/components/home/FloatingDoodles";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 selection:bg-[#ebdd51] selection:text-slate-900 relative">
      {/* Whimsical Floating Background School Doodles */}
      <FloatingDoodles />

      {/* Glassmorphic Navbar with Glowing Crest */}
      <Navbar />

      {/* Main Creative Flow */}
      <main className="flex-1 relative z-10">
        {/* Funky Animated Hero with Student Passport Desk */}
        <Hero />

        {/* Funky Interactive Metric Counters */}
        <FunkyCounters />

        {/* 3-Portals Ecosystem (Student & Guardian, Teacher, Admin) */}
        <PortalShowcase />

        {/* Academic Wings Adventure (Primary, Middle, Matric) */}
        <AcademicWings />

        {/* Campus Life & Wonder Zones Bento Grid */}
        <CampusLife />

        {/* Voices of HPSS (Funky Pinboard Testimonials) */}
        <Testimonials />

        {/* Interactive FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Frosted Glass Footer with Admissions CTA */}
      <Footer />
    </div>
  );
}
