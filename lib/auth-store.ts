import { create } from "zustand";
import { apiClient } from "./api";

export interface InstituteInfo {
  id: string;
  name: string;
  code: string;
  logo_url?: string | null;
  institute_type?: string;
  settings?: Record<string, unknown>;
}

export interface BranchInfo {
  id: string;
  name: string;
  code?: string;
}

export interface UserAccount {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  registration_no?: string | null;
  user_type: string;
  staff_type?: string | null;
  school_id?: string | null;
  branch_id?: string | null;
  avatar_url?: string | null;
  permissions?: string[];
  institute?: InstituteInfo | null;
  branch?: BranchInfo | null;
  role?: { id: string; name: string; code?: string } | null;
  display_name?: string;
  display_role?: string;
}

interface AuthState {
  user: UserAccount | null;
  accessToken: string | null;
  schoolCode: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  
  // Pending multi-account selection state
  pendingAccounts: UserAccount[] | null;
  pendingPassword: string | null;

  setAuth: (user: UserAccount, token: string, schoolCode?: string) => void;
  clearAuth: () => void;
  initializeFromStorage: () => void;
  login: (email: string, password?: string) => Promise<{
    success: boolean;
    requiresSelection?: boolean;
    accounts?: UserAccount[];
    user?: UserAccount;
    error?: string;
  }>;
  loginWithAccount: (accountId: string, password: string) => Promise<{
    success: boolean;
    user?: UserAccount;
    error?: string;
  }>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  accessToken: null,
  schoolCode: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  pendingAccounts: null,
  pendingPassword: null,

  setAuth: (user, token, schoolCode) => {
    const code = schoolCode || user.institute?.code || "HPSS";
    if (typeof window !== "undefined") {
      localStorage.setItem("hpss_access_token", token);
      localStorage.setItem("hpss_user", JSON.stringify(user));
      localStorage.setItem("hpss_school_code", code);
    }
    set({
      user,
      accessToken: token,
      schoolCode: code,
      isAuthenticated: true,
      error: null,
      pendingAccounts: null,
      pendingPassword: null,
    });
  },

  clearAuth: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("hpss_access_token");
      localStorage.removeItem("hpss_user");
      localStorage.removeItem("hpss_school_code");
    }
    set({
      user: null,
      accessToken: null,
      schoolCode: null,
      isAuthenticated: false,
      error: null,
      pendingAccounts: null,
      pendingPassword: null,
    });
  },

  initializeFromStorage: () => {
    if (typeof window === "undefined") return;
    try {
      const token = localStorage.getItem("hpss_access_token");
      const userStr = localStorage.getItem("hpss_user");
      const schoolCode = localStorage.getItem("hpss_school_code");

      if (token && userStr) {
        const user = JSON.parse(userStr);
        set({
          user,
          accessToken: token,
          schoolCode: schoolCode || user.institute?.code || "HPSS",
          isAuthenticated: true,
        });
      }
    } catch (e) {
      console.error("Failed to parse local storage auth session", e);
    }
  },

  login: async (email: string, password?: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await apiClient.post("/auth/login", {
        email,
        password: password || undefined,
      });

      const resData = response.data?.data || response.data;

      // Scenario 1: Multi-account selection required
      if (resData.requiresSelection && Array.isArray(resData.accounts)) {
        set({
          isLoading: false,
          pendingAccounts: resData.accounts,
          pendingPassword: password || null,
        });
        return {
          success: true,
          requiresSelection: true,
          accounts: resData.accounts,
        };
      }

      // Scenario 2: Direct login successful
      if (resData.accessToken && resData.user) {
        const schoolCode = resData.user.institute?.code || "HPSS";
        get().setAuth(resData.user, resData.accessToken, schoolCode);
        set({ isLoading: false });
        return {
          success: true,
          user: resData.user,
        };
      }

      throw new Error(resData.message || "Unexpected login response format");
    } catch (err: unknown) {
      const errorMsg =
        (err as { response?: { data?: { message?: string } } })?.response?.data
          ?.message ||
        (err as Error)?.message ||
        "Login failed. Please check your credentials.";
      set({ isLoading: false, error: errorMsg });
      return { success: false, error: errorMsg };
    }
  },

  loginWithAccount: async (accountId: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await apiClient.post("/auth/login-with-account", {
        accountId,
        password,
      });

      const resData = response.data?.data || response.data;

      if (resData.accessToken && resData.user) {
        const schoolCode = resData.user.institute?.code || "HPSS";
        get().setAuth(resData.user, resData.accessToken, schoolCode);
        set({ isLoading: false });
        return { success: true, user: resData.user };
      }

      throw new Error(resData.message || "Failed to authenticate selected account");
    } catch (err: unknown) {
      const errorMsg =
        (err as { response?: { data?: { message?: string } } })?.response?.data
          ?.message ||
        (err as Error)?.message ||
        "Authentication failed for selected account";
      set({ isLoading: false, error: errorMsg });
      return { success: false, error: errorMsg };
    }
  },

  logout: async () => {
    try {
      await apiClient.post("/auth/logout");
    } catch {
      // Ignore network errors on logout
    } finally {
      get().clearAuth();
    }
  },
}));
