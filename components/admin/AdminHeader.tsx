"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  Bell,
  Menu,
  ChevronDown,
  Building2,
  Calendar,
  LogOut,
  User,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AdminSidebar } from "./AdminSidebar";
import { useAuthStore } from "@/lib/auth-store";

export function AdminHeader() {
  const router = useRouter();
  const { user, logout, initializeFromStorage } = useAuthStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    initializeFromStorage();
  }, [initializeFromStorage]);

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  const displayName = user?.display_name || (user?.first_name ? `${user.first_name} ${user.last_name || ""}` : "Syed Hamza Ali");
  const displayRole = user?.display_role || (user?.user_type === "BRANCH_ADMIN" ? "Branch Admin" : "Principal / Admin");
  const displayEmail = user?.email || "admin@hpss.edu.pk";
  const displaySchool = user?.institute?.name || "Hamza Public Sec. School";
  const initials = displayName
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("") || "HA";

  return (
    <header className="sticky top-0 z-30 w-full h-16 bg-white/75 backdrop-blur-2xl border-b border-slate-200/60 shadow-xs transition-all duration-300">
      <div className="h-full px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Left: Mobile Sheet Menu Trigger + Search or Campus Breadcrumb */}
        <div className="flex items-center gap-3 flex-1 max-w-xl">
          {/* Mobile Sheet Trigger */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-slate-700 hover:bg-slate-100"
                >
                  <Menu className="w-5 h-5" />
                  <span className="sr-only">Toggle Sidebar</span>
                </Button>
              }
            />
            <SheetContent
              side="left"
              className="p-0 w-72 sm:w-80 bg-white/95 backdrop-blur-2xl border-r border-slate-200"
            >
              <SheetHeader className="sr-only">
                <SheetTitle>Admin Navigation</SheetTitle>
              </SheetHeader>
              <AdminSidebar onNavigate={() => setMobileMenuOpen(false)} />
            </SheetContent>
          </Sheet>

          {/* Search Bar with Blur & Smooth Ring */}
          <div className="relative w-full max-w-md hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <Input
              type="search"
              placeholder="Search students, admission no, vouchers, roll no..."
              className="pl-9 pr-12 h-9 text-xs bg-slate-50/80 hover:bg-slate-100/80 focus:bg-white border-slate-200/80 rounded-xl transition-all duration-200 focus-visible:ring-[#17b4cd]/30 focus-visible:border-[#17b4cd]"
            />
            <kbd className="absolute right-2.5 top-1/2 -translate-y-1/2 px-1.5 py-0.5 text-[10px] font-mono font-medium text-slate-400 bg-white rounded border border-slate-200 shadow-2xs">
              ⌘K
            </kbd>
          </div>
        </div>

        {/* Right Action Icons & Profile */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Active Session Badge */}
          <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-slate-100/90 border border-slate-200/80 text-xs text-slate-700">
            <Calendar className="w-3.5 h-3.5 text-[#17b4cd]" />
            <span className="font-sans font-medium">Academic 2025–26</span>
          </div>

          {/* TCA Super Admin Sync Badge */}
          <Badge
            variant="outline"
            className="hidden xl:inline-flex items-center gap-1 bg-emerald-50/80 text-emerald-700 border-emerald-200/70 text-[11px] py-1 px-2.5"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Super Admin Synced
          </Badge>

          {/* Notifications Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-xl"
                >
                  <Bell className="w-4 h-4" />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#17b4cd] rounded-full ring-2 ring-white" />
                  <span className="sr-only">Notifications</span>
                </Button>
              }
            />
            <DropdownMenuContent
              align="end"
              className="w-80 p-2 bg-white/95 backdrop-blur-2xl border border-slate-200 shadow-xl rounded-2xl"
            >
              <div className="flex items-center justify-between px-2 py-1.5 mb-1">
                <span className="text-xs font-heading font-semibold text-slate-900">
                  Campus Alerts
                </span>
                <Badge variant="secondary" className="text-[10px] bg-[#ebdd51]/30">
                  2 New
                </Badge>
              </div>
              <DropdownMenuSeparator />
              <div className="flex flex-col gap-1 py-1">
                <div className="p-2 rounded-xl bg-cyan-50/60 border border-cyan-100 text-xs hover:bg-cyan-50 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between font-semibold text-cyan-950 mb-0.5">
                    <span>Cashier Desk Alert</span>
                    <span className="text-[10px] text-cyan-700 font-normal">10m ago</span>
                  </div>
                  <p className="text-[11px] text-slate-600">
                    Rs 184,500 collected today across 32 paid vouchers.
                  </p>
                </div>
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 text-xs hover:bg-slate-100 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between font-semibold text-slate-900 mb-0.5">
                    <span>New Admission Request</span>
                    <span className="text-[10px] text-slate-500 font-normal">1h ago</span>
                  </div>
                  <p className="text-[11px] text-slate-600">
                    Zaid Bilal applied for Grade 9 (Computer Science).
                  </p>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Profile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 p-1.5 sm:px-2.5 sm:py-1.5 rounded-2xl hover:bg-slate-100/80 transition-all border border-slate-200/60"
                >
                  <Avatar size="sm" className="ring-2 ring-[#17b4cd]/40">
                    <AvatarImage src={user?.avatar_url || ""} />
                    <AvatarFallback className="bg-gradient-to-tr from-[#17b4cd] to-[#0d92a6] text-white font-bold text-xs">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="hidden lg:flex flex-col text-left">
                    <span className="text-xs font-semibold text-slate-900 leading-tight">
                      {displayName}
                    </span>
                    <span className="text-[10px] text-slate-500 leading-tight">
                      {displayRole}
                    </span>
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden sm:block" />
                </Button>
              }
            />
            <DropdownMenuContent
              align="end"
              className="w-56 p-1.5 bg-white/95 backdrop-blur-2xl border border-slate-200 shadow-xl rounded-2xl"
            >
              <DropdownMenuLabel className="px-2 py-1.5">
                <p className="text-xs font-semibold text-slate-900 font-heading">
                  {displaySchool}
                </p>
                <p className="text-[11px] text-slate-500 font-mono truncate">{displayEmail}</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer rounded-lg text-xs gap-2 py-2">
                <User className="w-3.5 h-3.5 text-slate-500" />
                Admin Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer rounded-lg text-xs gap-2 py-2">
                <Building2 className="w-3.5 h-3.5 text-slate-500" />
                Branch Configuration
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer rounded-lg text-xs gap-2 py-2">
                <Settings className="w-3.5 h-3.5 text-slate-500" />
                System Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleLogout}
                className="cursor-pointer rounded-lg text-xs gap-2 py-2 text-rose-600 focus:bg-rose-50 focus:text-rose-600"
              >
                <LogOut className="w-3.5 h-3.5 text-rose-600" />
                Sign Out Admin Session
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
