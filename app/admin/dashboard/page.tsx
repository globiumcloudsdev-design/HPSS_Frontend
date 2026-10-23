"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  CalendarCheck2,
  Receipt,
  GraduationCap,
  ArrowUpRight,
  ArrowDownRight,
  Search,
  PlusCircle,
  Printer,
  FileText,
  MoreVertical,
  CheckCircle2,
  Clock,
  AlertCircle,
  Sparkles,
  CreditCard,
  Banknote,
  Send,
  Eye,
  School,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock Data for Metric Cards
interface MetricCardData {
  title: string;
  value: string;
  trend: string;
  trendPositive: boolean;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  pillText: string;
}

const metrics: MetricCardData[] = [
  {
    title: "Total Students Enrolled",
    value: "1,284",
    trend: "+14 this month",
    trendPositive: true,
    subtitle: "91.7% branch capacity (1,400 max)",
    icon: GraduationCap,
    accentColor: "from-[#17b4cd] to-teal-500",
    pillText: "Active Admissions",
  },
  {
    title: "Today's Attendance Rate",
    value: "94.6%",
    trend: "+1.2% vs yesterday",
    trendPositive: true,
    subtitle: "1,215 Present • 42 Absent • 27 Leave",
    icon: CalendarCheck2,
    accentColor: "from-emerald-500 to-teal-600",
    pillText: "Morning Register",
  },
  {
    title: "Monthly Fee Collection",
    value: "Rs 2,480,000",
    trend: "84.2% collected",
    trendPositive: true,
    subtitle: "Rs 420,000 pending across 64 vouchers",
    icon: Receipt,
    accentColor: "from-[#ebdd51] to-amber-500",
    pillText: "May 2026 Cycle",
  },
  {
    title: "Teaching Faculty & Staff",
    value: "48 / 48",
    trend: "100% checked-in",
    trendPositive: true,
    subtitle: "36 Active sections in session",
    icon: School,
    accentColor: "from-indigo-500 to-blue-600",
    pillText: "Zero Absenteeism",
  },
];

// Mock Transactions / Vouchers & Admissions Ledger
interface TransactionRecord {
  id: string;
  voucherNo: string;
  studentName: string;
  rollNo: string;
  classSection: string;
  category: "Tuition Fee" | "Admission Fee" | "Exam Fee" | "Sports & Lab";
  amount: number;
  date: string;
  status: "Paid" | "Pending" | "Overdue";
  paymentMethod?: "Cash Counter" | "Bank Transfer" | "Pending";
  avatarFallback: string;
}

const mockTransactions: TransactionRecord[] = [
  {
    id: "TX-101",
    voucherNo: "VCH-2026-0891",
    studentName: "Muhammad Ayaan",
    rollNo: "HPSS-2026-104",
    classSection: "Grade 10 - Newton (Sci)",
    category: "Tuition Fee",
    amount: 7500,
    date: "Today, 10:45 AM",
    status: "Paid",
    paymentMethod: "Cash Counter",
    avatarFallback: "MA",
  },
  {
    id: "TX-102",
    voucherNo: "ADM-2026-0042",
    studentName: "Fatima Noor",
    rollNo: "HPSS-2026-192",
    classSection: "Grade 9 - Curie (Sci)",
    category: "Admission Fee",
    amount: 14500,
    date: "Today, 09:30 AM",
    status: "Paid",
    paymentMethod: "Bank Transfer",
    avatarFallback: "FN",
  },
  {
    id: "TX-103",
    voucherNo: "VCH-2026-0892",
    studentName: "Syed Bilal Raza",
    rollNo: "HPSS-2026-088",
    classSection: "Grade 8 - Einstein",
    category: "Tuition Fee",
    amount: 6800,
    date: "Today, 09:15 AM",
    status: "Pending",
    paymentMethod: "Pending",
    avatarFallback: "BR",
  },
  {
    id: "TX-104",
    voucherNo: "VCH-2026-0870",
    studentName: "Ayesha Siddiqua",
    rollNo: "HPSS-2026-215",
    classSection: "Grade 7 - Al-Biruni",
    category: "Sports & Lab",
    amount: 3200,
    date: "Yesterday",
    status: "Paid",
    paymentMethod: "Cash Counter",
    avatarFallback: "AS",
  },
  {
    id: "TX-105",
    voucherNo: "VCH-2026-0854",
    studentName: "Hamdan Tariq",
    rollNo: "HPSS-2026-056",
    classSection: "Grade 10 - Newton (Sci)",
    category: "Exam Fee",
    amount: 4500,
    date: "Yesterday",
    status: "Overdue",
    paymentMethod: "Pending",
    avatarFallback: "HT",
  },
  {
    id: "TX-106",
    voucherNo: "VCH-2026-0849",
    studentName: "Zainab Kashif",
    rollNo: "HPSS-2026-311",
    classSection: "Grade 6 - Ibn Sina",
    category: "Tuition Fee",
    amount: 6500,
    date: "21 Oct 2026",
    status: "Paid",
    paymentMethod: "Bank Transfer",
    avatarFallback: "ZK",
  },
  {
    id: "TX-107",
    voucherNo: "ADM-2026-0043",
    studentName: "Rayyan Ahmed",
    rollNo: "HPSS-2026-402",
    classSection: "Grade 1 - Jasmine",
    category: "Admission Fee",
    amount: 12000,
    date: "20 Oct 2026",
    status: "Paid",
    paymentMethod: "Cash Counter",
    avatarFallback: "RA",
  },
];

export default function AdminDashboardPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  // Filtered transactions based on search query and status tab
  const filteredTransactions = useMemo(() => {
    return mockTransactions.filter((tx) => {
      const matchesSearch =
        tx.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tx.rollNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tx.voucherNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tx.classSection.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;

      if (statusFilter === "paid") return tx.status === "Paid";
      if (statusFilter === "pending") return tx.status === "Pending";
      if (statusFilter === "overdue") return tx.status === "Overdue";
      return true;
    });
  }, [searchQuery, statusFilter]);

  return (
    <div className="flex flex-col gap-6 sm:gap-8 pb-12">
      {/* Funky Hero Welcome Banner */}
      <section className="relative overflow-hidden rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-white/90 via-white/80 to-cyan-50/70 backdrop-blur-2xl border-2 border-white/90 shadow-xl shadow-cyan-950/5">
        {/* Subtle decorative glow ribbons */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#17b4cd]/15 via-[#ebdd51]/15 to-transparent rounded-full blur-2xl pointer-events-none -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-1/3 w-64 h-32 bg-[#ebdd51]/10 rounded-full blur-xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <Badge
                variant="secondary"
                className="bg-[#ebdd51]/40 text-slate-800 font-medium px-2.5 py-0.5 rounded-full border border-[#ebdd51]/60 text-xs"
              >
                🎓 Academic Term 2025–26
              </Badge>
              <Badge
                variant="outline"
                className="bg-white/80 text-cyan-800 border-cyan-200 text-xs"
              >
                📍 Main Campus (Karachi)
              </Badge>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
              Good Morning, Syed Hamza! 👋
            </h1>

            <p className="text-sm sm:text-base text-slate-600 font-sans max-w-2xl leading-relaxed">
              Campus registers are active. Today&apos;s attendance is{" "}
              <span className="font-semibold text-emerald-600">94.6%</span> and{" "}
              <span className="font-semibold text-[#17b4cd]">32 fee vouchers</span>{" "}
              have been collected at the cashier desk.
            </p>
          </div>

          {/* Quick Action Buttons with Smooth Interactions */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <Link href="/admin/students">
              <Button
                variant="default"
                className="bg-gradient-to-r from-[#17b4cd] to-[#0fa2ba] hover:from-[#15a2b9] hover:to-[#0d8e9f] text-white shadow-lg shadow-[#17b4cd]/25 rounded-xl font-heading font-semibold text-xs sm:text-sm h-10 px-4 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <PlusCircle className="w-4 h-4 mr-1.5" />
                New Admission
              </Button>
            </Link>

            <Link href="/admin/attendance">
              <Button
                variant="outline"
                className="bg-white/80 hover:bg-slate-100 text-slate-800 border-slate-200/90 rounded-xl font-sans font-medium text-xs sm:text-sm h-10 px-3.5 shadow-2xs transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <CalendarCheck2 className="w-4 h-4 mr-1.5 text-[#17b4cd]" />
                Daily Register
              </Button>
            </Link>

            <Link href="/admin/fees">
              <Button
                variant="outline"
                className="bg-[#ebdd51]/30 hover:bg-[#ebdd51]/50 text-slate-900 border-[#ebdd51]/80 rounded-xl font-sans font-semibold text-xs sm:text-sm h-10 px-3.5 shadow-2xs transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Receipt className="w-4 h-4 mr-1.5 text-amber-600" />
                Cashier Desk
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4 Primary KPI Metric Cards with Blur Effect & Smooth Hover */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {metrics.map((metric, idx) => {
          const Icon = metric.icon;
          return (
            <Card
              key={idx}
              className="group relative overflow-hidden bg-white/75 backdrop-blur-2xl border-2 border-white/90 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:shadow-[#17b4cd]/15 transition-all duration-300 hover:-translate-y-1 rounded-2xl"
            >
              {/* Top Accent Gradient Line */}
              <div
                className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${metric.accentColor}`}
              />

              <CardHeader className="flex flex-row items-center justify-between pb-2 pt-4 px-4 sm:px-5">
                <Badge
                  variant="outline"
                  className="text-[10px] font-sans font-medium bg-slate-50 border-slate-200 text-slate-600"
                >
                  {metric.pillText}
                </Badge>
                <div
                  className={`p-2 rounded-xl bg-gradient-to-br ${metric.accentColor} text-white shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
                >
                  <Icon className="w-4 h-4" />
                </div>
              </CardHeader>

              <CardContent className="px-4 sm:px-5 pb-4">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-sans text-slate-500 font-medium">
                    {metric.title}
                  </span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
                      {metric.value}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 mt-2 text-xs font-sans">
                    <span
                      className={`inline-flex items-center font-semibold text-[11px] ${
                        metric.trendPositive
                          ? "text-emerald-600"
                          : "text-rose-600"
                      }`}
                    >
                      {metric.trendPositive ? (
                        <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" />
                      ) : (
                        <ArrowDownRight className="w-3.5 h-3.5 mr-0.5" />
                      )}
                      {metric.trend}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-400 mt-1 truncate">
                    {metric.subtitle}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </section>

      {/* Secondary Highlights Row: Cashier Counter & Academic Alerts */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Cashier Status Card */}
        <Card className="lg:col-span-2 bg-white/75 backdrop-blur-2xl border-2 border-white/90 shadow-md shadow-slate-900/5 rounded-2xl overflow-hidden">
          <CardHeader className="p-4 sm:p-5 pb-3 border-b border-slate-100 flex flex-row items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-[#ebdd51]/30 text-amber-800 border border-[#ebdd51]/50">
                <Banknote className="w-4 h-4" />
              </div>
              <div>
                <CardTitle className="text-base font-heading font-semibold text-slate-900">
                  Today&apos;s Fee Counter Live Status
                </CardTitle>
                <CardDescription className="text-xs text-slate-500">
                  Cash drawer & digital reconciliation for 23 October 2026
                </CardDescription>
              </div>
            </div>
            <Link href="/admin/fees">
              <Button
                variant="ghost"
                size="sm"
                className="text-xs text-[#17b4cd] hover:text-[#0f8b9e] font-sans font-medium"
              >
                Cashier Desk →
              </Button>
            </Link>
          </CardHeader>

          <CardContent className="p-4 sm:p-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/70 flex flex-col justify-between">
                <span className="text-[11px] text-slate-500 font-sans font-medium">
                  Cash in Counter Drawer
                </span>
                <div className="my-1.5">
                  <span className="text-lg sm:text-xl font-bold font-heading text-slate-900">
                    Rs 112,500
                  </span>
                </div>
                <Badge
                  variant="outline"
                  className="w-fit bg-emerald-50 text-emerald-700 border-emerald-200 text-[10px]"
                >
                  20 Thermal Slips Issued
                </Badge>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/70 flex flex-col justify-between">
                <span className="text-[11px] text-slate-500 font-sans font-medium">
                  Bank Direct Deposits
                </span>
                <div className="my-1.5">
                  <span className="text-lg sm:text-xl font-bold font-heading text-slate-900">
                    Rs 72,000
                  </span>
                </div>
                <Badge
                  variant="outline"
                  className="w-fit bg-blue-50 text-blue-700 border-blue-200 text-[10px]"
                >
                  12 3-Part Vouchers
                </Badge>
              </div>

              <div className="p-3.5 rounded-xl bg-gradient-to-br from-cyan-50/60 to-amber-50/40 border border-cyan-200/60 flex flex-col justify-between">
                <span className="text-[11px] text-slate-600 font-sans font-medium">
                  Total Day Collection
                </span>
                <div className="my-1.5">
                  <span className="text-lg sm:text-xl font-extrabold font-heading text-[#17b4cd]">
                    Rs 184,500
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 font-sans">
                  ⚡ Auto-synced to Neon DB
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Academic Notice & Schedule Card */}
        <Card className="bg-white/75 backdrop-blur-2xl border-2 border-white/90 shadow-md shadow-slate-900/5 rounded-2xl overflow-hidden flex flex-col justify-between">
          <CardHeader className="p-4 sm:p-5 pb-3 border-b border-slate-100 flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#ebdd51]" />
              <CardTitle className="text-base font-heading font-semibold text-slate-900">
                Action Highlights
              </CardTitle>
            </div>
            <Badge variant="secondary" className="text-[10px] bg-slate-100">
              Term 1
            </Badge>
          </CardHeader>

          <CardContent className="p-4 sm:p-5 flex flex-col gap-2.5">
            <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-amber-50/60 border border-amber-200/60 text-xs">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-900">
                  Mid-Term Datesheet Approval
                </p>
                <p className="text-[11px] text-amber-700/90 mt-0.5">
                  Class 9 & 10 exam schedule awaiting branch principal confirmation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-cyan-50/60 border border-cyan-200/60 text-xs">
              <CheckCircle2 className="w-4 h-4 text-[#17b4cd] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-cyan-950">
                  Daily Attendance Reconciled
                </p>
                <p className="text-[11px] text-cyan-800/90 mt-0.5">
                  All 36 class teacher registers submitted by 09:00 AM.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Main Data Table: Recent Student Vouchers & Admissions */}
      <section>
        <Card className="bg-white/80 backdrop-blur-2xl border-2 border-white/90 shadow-xl shadow-slate-900/5 rounded-3xl overflow-hidden transition-all duration-300">
          <CardHeader className="p-4 sm:p-6 pb-4 border-b border-slate-200/70">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <CardTitle className="text-lg sm:text-xl font-bold font-heading text-slate-900">
                    Recent Vouchers & Admissions Ledger
                  </CardTitle>
                  <Badge variant="secondary" className="text-xs bg-slate-100 font-mono">
                    {filteredTransactions.length} records
                  </Badge>
                </div>
                <CardDescription className="text-xs sm:text-sm text-slate-500 font-sans mt-0.5">
                  Live voucher ledger for branch students, admissions, and cashier counter payments.
                </CardDescription>
              </div>

              {/* Status Filter Tabs (Using Shadcn Tabs) */}
              <div className="flex items-center gap-2">
                <Tabs
                  value={statusFilter}
                  onValueChange={setStatusFilter}
                  className="w-full sm:w-auto"
                >
                  <TabsList className="bg-slate-100/90 p-1 rounded-xl">
                    <TabsTrigger
                      value="all"
                      className="text-xs rounded-lg font-sans data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-xs"
                    >
                      All
                    </TabsTrigger>
                    <TabsTrigger
                      value="paid"
                      className="text-xs rounded-lg font-sans data-[state=active]:bg-white data-[state=active]:text-emerald-700 data-[state=active]:shadow-xs"
                    >
                      Paid
                    </TabsTrigger>
                    <TabsTrigger
                      value="pending"
                      className="text-xs rounded-lg font-sans data-[state=active]:bg-white data-[state=active]:text-amber-700 data-[state=active]:shadow-xs"
                    >
                      Pending
                    </TabsTrigger>
                    <TabsTrigger
                      value="overdue"
                      className="text-xs rounded-lg font-sans data-[state=active]:bg-white data-[state=active]:text-rose-700 data-[state=active]:shadow-xs"
                    >
                      Overdue
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>

            {/* Search Input Bar */}
            <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  type="text"
                  placeholder="Filter by student name, roll number, or voucher code..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 h-9 text-xs sm:text-sm bg-slate-50/70 border-slate-200/80 rounded-xl focus-visible:ring-[#17b4cd]/30"
                />
              </div>

              {searchQuery && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSearchQuery("")}
                  className="text-xs text-slate-500 hover:text-slate-800"
                >
                  Clear Search
                </Button>
              )}
            </div>
          </CardHeader>

          {/* Strictly Shadcn Table Component */}
          <CardContent className="p-0 overflow-x-auto">
            <Table>
              <TableHeader className="bg-slate-50/60 border-b border-slate-200/60">
                <TableRow className="hover:bg-transparent">
                  <TableHead className="w-[240px] text-xs font-heading font-semibold text-slate-700 pl-6">
                    Student Details
                  </TableHead>
                  <TableHead className="text-xs font-heading font-semibold text-slate-700">
                    Voucher / Reference
                  </TableHead>
                  <TableHead className="text-xs font-heading font-semibold text-slate-700">
                    Class & Section
                  </TableHead>
                  <TableHead className="text-xs font-heading font-semibold text-slate-700">
                    Amount
                  </TableHead>
                  <TableHead className="text-xs font-heading font-semibold text-slate-700">
                    Status
                  </TableHead>
                  <TableHead className="text-xs font-heading font-semibold text-slate-700">
                    Payment Mode
                  </TableHead>
                  <TableHead className="text-xs font-heading font-semibold text-slate-700 text-right pr-6">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {filteredTransactions.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={7}
                      className="h-32 text-center text-slate-500 text-sm font-sans"
                    >
                      No voucher or student records match your filter criteria.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredTransactions.map((tx) => (
                    <TableRow
                      key={tx.id}
                      className="group transition-colors duration-200 hover:bg-cyan-50/40 border-b border-slate-100"
                    >
                      {/* Student Info with Avatar */}
                      <TableCell className="py-3.5 pl-6">
                        <div className="flex items-center gap-3">
                          <Avatar size="sm" className="ring-1 ring-slate-200">
                            <AvatarImage src="" />
                            <AvatarFallback className="bg-gradient-to-br from-[#17b4cd]/20 to-[#ebdd51]/30 text-slate-800 font-bold text-xs">
                              {tx.avatarFallback}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col">
                            <span className="font-heading font-semibold text-xs sm:text-sm text-slate-900 group-hover:text-[#17b4cd] transition-colors">
                              {tx.studentName}
                            </span>
                            <span className="font-mono text-[11px] text-slate-400">
                              {tx.rollNo}
                            </span>
                          </div>
                        </div>
                      </TableCell>

                      {/* Voucher Ref & Category */}
                      <TableCell className="py-3.5">
                        <div className="flex flex-col">
                          <span className="font-mono font-medium text-xs text-slate-800">
                            {tx.voucherNo}
                          </span>
                          <span className="text-[11px] text-slate-500 font-sans">
                            {tx.category}
                          </span>
                        </div>
                      </TableCell>

                      {/* Class & Section */}
                      <TableCell className="py-3.5">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-medium font-sans">
                          {tx.classSection}
                        </span>
                      </TableCell>

                      {/* Amount */}
                      <TableCell className="py-3.5">
                        <div className="flex flex-col">
                          <span className="font-heading font-bold text-xs sm:text-sm text-slate-900">
                            Rs {tx.amount.toLocaleString()}
                          </span>
                          <span className="text-[10px] text-slate-400 font-sans">
                            {tx.date}
                          </span>
                        </div>
                      </TableCell>

                      {/* Status Badge */}
                      <TableCell className="py-3.5">
                        {tx.status === "Paid" && (
                          <Badge
                            variant="default"
                            className="bg-emerald-500/15 text-emerald-700 border border-emerald-500/30 text-[11px] font-semibold hover:bg-emerald-500/20"
                          >
                            <CheckCircle2 className="w-3 h-3 mr-1 text-emerald-600" />
                            Paid
                          </Badge>
                        )}
                        {tx.status === "Pending" && (
                          <Badge
                            variant="secondary"
                            className="bg-amber-500/15 text-amber-700 border border-amber-500/30 text-[11px] font-semibold hover:bg-amber-500/20"
                          >
                            <Clock className="w-3 h-3 mr-1 text-amber-600" />
                            Pending
                          </Badge>
                        )}
                        {tx.status === "Overdue" && (
                          <Badge
                            variant="destructive"
                            className="bg-rose-500/15 text-rose-700 border border-rose-500/30 text-[11px] font-semibold hover:bg-rose-500/20"
                          >
                            <AlertCircle className="w-3 h-3 mr-1 text-rose-600" />
                            Overdue
                          </Badge>
                        )}
                      </TableCell>

                      {/* Payment Method */}
                      <TableCell className="py-3.5">
                        <div className="flex items-center gap-1.5 text-xs text-slate-600 font-sans">
                          {tx.paymentMethod === "Cash Counter" && (
                            <>
                              <Banknote className="w-3.5 h-3.5 text-emerald-600" />
                              <span>Cashier Desk</span>
                            </>
                          )}
                          {tx.paymentMethod === "Bank Transfer" && (
                            <>
                              <CreditCard className="w-3.5 h-3.5 text-blue-600" />
                              <span>Bank Deposit</span>
                            </>
                          )}
                          {tx.paymentMethod === "Pending" && (
                            <span className="text-slate-400 italic">Uncollected</span>
                          )}
                        </div>
                      </TableCell>

                      {/* Action Dropdown Menu */}
                      <TableCell className="py-3.5 text-right pr-6">
                        <DropdownMenu>
                          <DropdownMenuTrigger
                            render={
                              <Button
                                variant="ghost"
                                size="icon-xs"
                                className="text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg"
                              >
                                <MoreVertical className="w-4 h-4" />
                                <span className="sr-only">Actions</span>
                              </Button>
                            }
                          />
                          <DropdownMenuContent
                            align="end"
                            className="w-48 p-1.5 bg-white/95 backdrop-blur-xl border border-slate-200 shadow-lg rounded-xl"
                          >
                            <DropdownMenuLabel className="text-[11px] font-semibold text-slate-500">
                              Voucher Actions
                            </DropdownMenuLabel>
                            <DropdownMenuItem className="text-xs cursor-pointer gap-2 py-1.5">
                              <FileText className="w-3.5 h-3.5 text-slate-500" />
                              View 3-Part Voucher
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-xs cursor-pointer gap-2 py-1.5">
                              <Printer className="w-3.5 h-3.5 text-slate-500" />
                              Print Thermal Slip (80mm)
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-xs cursor-pointer gap-2 py-1.5">
                              <Eye className="w-3.5 h-3.5 text-slate-500" />
                              Student Record
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-xs cursor-pointer gap-2 py-1.5 text-[#17b4cd]">
                              <Send className="w-3.5 h-3.5 text-[#17b4cd]" />
                              Send SMS Reminder
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
