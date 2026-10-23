import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Hamza Public Secondary School (HPSS) — Enter to Learn, Strive for Excellence",
  description:
    "Welcome to Hamza Public Secondary School (HPSS). Fostering character, academic rigor, and digital multi-portal connectivity for students, teachers, and guardians.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased text-slate-900 bg-slate-50 selection:bg-[#ebdd51] selection:text-slate-900">
        {children}
      </body>
    </html>
  );
}

