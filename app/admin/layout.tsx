import { Metadata } from "next";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminHeader } from "@/components/admin/AdminHeader";

export const metadata: Metadata = {
  title: "Branch Admin Portal | Hamza Public Secondary School (HPSS)",
  description:
    "Branch Executive Management Console for Hamza Public Secondary School. Admissions, Attendance, Fees, and Exams.",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-900 flex relative overflow-x-hidden selection:bg-[#ebdd51] selection:text-slate-900 font-sans antialiased">
      {/* Whimsical Ambient Glow Orbs for Soft Blur Depth */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#17b4cd]/12 blur-3xl animate-orb-1" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-[#ebdd51]/15 blur-3xl animate-orb-2" />
        <div className="absolute -bottom-32 left-1/3 w-[30rem] h-[30rem] rounded-full bg-teal-300/10 blur-3xl animate-orb-3" />
      </div>

      {/* Desktop Sidebar (Fixed to Viewport on Left) */}
      <div className="hidden lg:block fixed inset-y-0 left-0 w-72 h-screen z-40">
        <AdminSidebar />
      </div>

      {/* Main Content Pane with desktop sidebar offset */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-72">
        <AdminHeader />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto animate-in fade-in duration-300">
          {children}
        </main>
      </div>
    </div>
  );
}
