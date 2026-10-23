"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ShieldCheck,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Building2,
  AlertCircle,
  CheckCircle2,
  UserCheck,
  Server,
  Layers,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useAuthStore, UserAccount } from "@/lib/auth-store";
import { FloatingDoodles } from "@/components/home/FloatingDoodles";

export default function AdminLoginPage() {
  const router = useRouter();
  const { login, loginWithAccount, setAuth, error: authError, isLoading } = useAuthStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [localError, setLocalError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Multi-account selection modal
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [accounts, setAccounts] = useState<UserAccount[]>([]);
  const [selectedAccountId, setSelectedAccountId] = useState<string>("");

  // Backend connection status checking
  const [backendStatus, setBackendStatus] = useState<"checking" | "online" | "offline">("checking");

  useEffect(() => {
    // Quick ping to check if backend is listening
    const checkBackend = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";
        const res = await fetch(`${apiUrl}/docs`, { method: "HEAD", signal: AbortSignal.timeout(3000) }).catch(() => null);
        if (res && res.status < 500) {
          setBackendStatus("online");
        } else {
          setBackendStatus("offline");
        }
      } catch {
        setBackendStatus("offline");
      }
    };
    checkBackend();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError(null);
    setSuccessMsg(null);

    if (!email.trim()) {
      setLocalError("Please enter your admin email address.");
      return;
    }
    if (!password) {
      setLocalError("Please enter your password.");
      return;
    }

    try {
      const result = await login(email.trim(), password);

      if (result.success) {
        if (result.requiresSelection && result.accounts && result.accounts.length > 0) {
          setAccounts(result.accounts);
          setSelectedAccountId(result.accounts[0].id);
          setShowAccountModal(true);
          return;
        }

        if (result.user) {
          // Verify user type
          const allowedRoles = ["BRANCH_ADMIN", "INSTITUTE_ADMIN", "MASTER_ADMIN", "SYSTEM_ADMIN"];
          if (!allowedRoles.includes(result.user.user_type)) {
            setLocalError(
              `This account (${result.user.user_type}) does not have Branch Admin permissions. Please use the Portal Login.`
            );
            return;
          }

          setSuccessMsg("Welcome back, Administrator! Redirecting to campus console...");
          setTimeout(() => {
            router.push("/admin/dashboard");
          }, 600);
        }
      } else {
        setLocalError(result.error || "Invalid email or password.");
      }
    } catch (err: unknown) {
      setLocalError((err as Error)?.message || "Failed to connect to authentication server.");
    }
  };

  const handleAccountSelectionSubmit = async () => {
    if (!selectedAccountId) {
      setLocalError("Please select an account.");
      return;
    }

    try {
      const result = await loginWithAccount(selectedAccountId, password);
      if (result.success && result.user) {
        setShowAccountModal(false);
        setSuccessMsg("Account verified! Launching dashboard...");
        setTimeout(() => {
          router.push("/admin/dashboard");
        }, 600);
      } else {
        setLocalError(result.error || "Failed to authenticate selected account.");
      }
    } catch (err: unknown) {
      setLocalError((err as Error)?.message || "Error selecting account.");
    }
  };

  // Demo bypass mode if backend is not yet started or running on an alternate port
  const handleQuickDemoAdmin = () => {
    const demoAdmin: UserAccount = {
      id: "ae33334e-c015-46c4-ad5c-5fc63b04d79f",
      first_name: "Muhammad",
      last_name: "Hamza",
      email: "admin@hpss.edu.pk",
      user_type: "BRANCH_ADMIN",
      display_role: "Branch Administrator",
      display_name: "Muhammad Hamza (Principal)",
      school_id: "b9f33750-2fd4-4567-9b7d-92a21200ae95",
      branch_id: "e637ab98-8baf-4855-a5e5-3c615b7b4302",
      permissions: ["ALL"],
      institute: {
        id: "b9f33750-2fd4-4567-9b7d-92a21200ae95",
        name: "Hamza Public Secondary School",
        code: "HPSS-RAWALPINDI",
        institute_type: "SCHOOL",
      },
      branch: {
        id: "e637ab98-8baf-4855-a5e5-3c615b7b4302",
        name: "Harley Street Campus",
        code: "HARLEY-01",
      },
    };

    setAuth(demoAdmin, "demo-jwt-token-hpss-admin", "HPSS-RAWALPINDI");
    setSuccessMsg("Demo Branch Admin Session Activated! Redirecting...");
    setTimeout(() => {
      router.push("/admin/dashboard");
    }, 500);
  };

  const activeError = localError || authError;

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900 relative overflow-hidden selection:bg-[#ebdd51] selection:text-slate-900">
      {/* Background Doodles & Ambient Glows */}
      <FloatingDoodles />
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[30rem] h-[30rem] rounded-full bg-[#17b4cd]/15 blur-[120px] animate-orb-1" />
        <div className="absolute top-1/2 -right-32 w-[28rem] h-[28rem] rounded-full bg-[#ebdd51]/20 blur-[120px] animate-orb-2" />
        <div className="absolute -bottom-32 left-1/3 w-[32rem] h-[32rem] rounded-full bg-[#17b4cd]/10 blur-[130px] animate-orb-3" />
      </div>

      {/* Top Header Navigation */}
      <header className="relative z-10 px-4 sm:px-8 py-5 flex items-center justify-between max-w-6xl w-full mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-white shadow-sm border-2 border-[#17b4cd] p-0.5 flex items-center justify-center transition-transform group-hover:scale-105">
            <Image
              src="/image.png"
              alt="HPSS Logo"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
          </div>
          <div>
            <span className="text-base font-black tracking-tight text-slate-900 font-sans">
              HPSS
            </span>
            <span className="text-[10px] block font-bold text-slate-500 leading-none">
              Hamza Public Secondary School
            </span>
          </div>
        </Link>

        <Link href="/">
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 gap-1.5 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Button>
        </Link>
      </header>

      {/* Main Login Card */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          {/* Funky Security Top Tag */}
          <div className="flex justify-center mb-3">
            <div className="funky-sticker inline-flex items-center gap-1.5 bg-[#ebdd51] text-slate-950 px-3.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider rotate-[-1deg] shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-900" />
              <span>Campus Executive Console</span>
            </div>
          </div>

          {/* Form Card Container */}
          <div className="funky-card bg-white/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(23,180,205,0.15)] border-2 border-white/90 relative">
            {/* Header info inside card */}
            <div className="text-center space-y-1.5 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#17b4cd] to-[#0284c7] p-0.5 mx-auto flex items-center justify-center shadow-md mb-3">
                <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                  <ShieldCheck className="w-7 h-7 text-[#ebdd51]" />
                </div>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Branch Admin Login
              </h1>
              <p className="text-xs text-slate-500 font-medium">
                Admissions, Attendance Register, Fees & POS Cashier Desk
              </p>
            </div>

            {/* Live Backend Connection Indicator */}
            <div className="mb-5 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-slate-500" />
                <span className="font-semibold text-slate-600">Backend API:</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span
                  className={`w-2 h-2 rounded-full ${
                    backendStatus === "online"
                      ? "bg-emerald-500 animate-pulse"
                      : backendStatus === "checking"
                      ? "bg-amber-400"
                      : "bg-slate-400"
                  }`}
                />
                <span className="font-bold text-slate-700">
                  {backendStatus === "online"
                    ? "Live Connected (5000)"
                    : backendStatus === "checking"
                    ? "Connecting..."
                    : "Standby"}
                </span>
              </div>
            </div>

            {/* Error & Success Alerts */}
            {activeError && (
              <div className="mb-5 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-start gap-2.5 animate-in fade-in duration-200">
                <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div className="flex-1 leading-relaxed">
                  <p className="font-bold">Authentication Notice</p>
                  <p className="text-[11px] text-rose-600 mt-0.5">{activeError}</p>
                </div>
              </div>
            )}

            {successMsg && (
              <div className="mb-5 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-start gap-2.5 animate-in fade-in duration-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="flex-1 leading-relaxed">
                  <p className="font-bold">Access Authorized</p>
                  <p className="text-[11px] text-emerald-700 mt-0.5">{successMsg}</p>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-4">
              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 block">
                  Admin Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@hpss.edu.pk"
                    required
                    autoComplete="email"
                    className="pl-9 h-10 rounded-xl bg-slate-50/70 border-slate-200 focus:border-[#17b4cd] focus:bg-white text-xs font-medium"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700">
                    Security Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-[11px] font-bold text-[#17b4cd] hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    required
                    autoComplete="current-password"
                    className="pl-9 pr-9 h-10 rounded-xl bg-slate-50/70 border-slate-200 focus:border-[#17b4cd] focus:bg-white text-xs font-medium"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me Option */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-slate-600 select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded border-slate-300 text-[#17b4cd] focus:ring-[#17b4cd] w-4 h-4"
                  />
                  <span>Keep branch session active</span>
                </label>
                <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                  Harley Campus
                </span>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-2xl bg-[#17b4cd] hover:bg-[#139bb0] text-white font-black text-xs h-11 shadow-[0_8px_20px_rgba(23,180,205,0.4)] transition-all hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2 border-2 border-white mt-2"
              >
                {isLoading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Verifying Credentials...</span>
                  </>
                ) : (
                  <>
                    <span>Sign In to Branch Desk</span>
                    <ArrowRight className="w-4 h-4 text-[#ebdd51]" />
                  </>
                )}
              </Button>
            </form>

            {/* Quick Demo Helper */}
            <div className="mt-5 pt-4 border-t border-slate-200/60 text-center">
              <p className="text-[11px] text-slate-500 font-medium mb-2.5">
                Developer / Demonstration Testing:
              </p>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleQuickDemoAdmin}
                className="rounded-full text-[11px] font-black h-8 px-4 border-dashed border-slate-300 hover:border-[#ebdd51] hover:bg-[#ebdd51]/20 text-slate-800 transition-all cursor-pointer flex items-center justify-center gap-1.5 mx-auto"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Quick-Launch Branch Admin Demo</span>
              </Button>
            </div>
          </div>

          {/* Switch to Teacher / Student Portal Login */}
          <div className="mt-5 text-center space-y-2">
            <p className="text-xs text-slate-600 font-medium">
              Are you a teacher, student, or guardian?
            </p>
            <Link href="/portal-login">
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full text-xs font-bold text-slate-700 hover:text-slate-950 hover:bg-white/80 border border-slate-200 gap-1.5 cursor-pointer"
              >
                <GraduationCap className="w-3.5 h-3.5 text-[#17b4cd]" />
                <span>Go to Student & Teacher Portal Login</span>
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-4 text-center text-[11px] text-slate-400 font-medium">
        © 2026 Hamza Public Secondary School (HPSS) — The Clouds Academy System
      </footer>

      {/* Multi-Account Selection Modal */}
      <Dialog open={showAccountModal} onOpenChange={setShowAccountModal}>
        <DialogContent className="max-w-md bg-white p-6 rounded-3xl border-2 border-slate-200 shadow-2xl">
          <DialogHeader className="text-left space-y-1 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#17b4cd]" />
              <DialogTitle className="text-lg font-black text-slate-900">
                Select Your Campus Account
              </DialogTitle>
            </div>
            <DialogDescription className="text-xs text-slate-500 font-medium">
              This email is linked to multiple roles or branches. Choose which account to enter.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-2.5 py-3 max-h-72 overflow-y-auto">
            {accounts.map((acc) => (
              <div
                key={acc.id}
                onClick={() => setSelectedAccountId(acc.id)}
                className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                  selectedAccountId === acc.id
                    ? "border-[#17b4cd] bg-[#17b4cd]/10 shadow-xs"
                    : "border-slate-200 hover:border-slate-300 bg-white"
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-slate-900">
                      {acc.first_name} {acc.last_name}
                    </span>
                    <Badge
                      variant="outline"
                      className="text-[10px] font-black uppercase bg-[#ebdd51] text-slate-950 border-0"
                    >
                      {acc.user_type}
                    </Badge>
                  </div>
                  <p className="text-[11px] text-slate-500 flex items-center gap-1">
                    <Building2 className="w-3 h-3 text-slate-400" />
                    <span>{acc.branch?.name || acc.institute?.name || "Main Campus"}</span>
                  </p>
                </div>

                <div className="w-5 h-5 rounded-full border-2 border-slate-300 flex items-center justify-center">
                  {selectedAccountId === acc.id && (
                    <div className="w-2.5 h-2.5 rounded-full bg-[#17b4cd]" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowAccountModal(false)}
              className="rounded-full text-xs font-bold"
            >
              Cancel
            </Button>
            <Button
              size="sm"
              onClick={handleAccountSelectionSubmit}
              disabled={isLoading || !selectedAccountId}
              className="rounded-full bg-[#17b4cd] hover:bg-[#139bb0] text-white font-black text-xs px-5 shadow-sm"
            >
              {isLoading ? "Entering..." : "Continue to Portal"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
