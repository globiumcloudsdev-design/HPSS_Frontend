import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

/**
 * Base API URL resolved from NEXT_PUBLIC_API_URL or defaulting to port 5000/5001.
 * As per PRD Section 2.1:
 * Rule 1: Base URL: http://localhost:5000/api/v1
 * Rule 3: withCredentials: true
 * Rule 4: Do NOT send X-Branch-ID header. Use ?branch_id= query param or req.user.branch_id.
 * Rule 5: Send X-School-Code: <code_from_login> header on all authenticated requests.
 * Rule 6: Refresh token route is POST /api/v1/auth/refresh-token.
 */
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";

export const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

// Interceptor to inject Bearer token and X-School-Code header
apiClient.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("hpss_access_token");
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      const schoolCode = localStorage.getItem("hpss_school_code");
      if (schoolCode && config.headers) {
        config.headers["X-School-Code"] = schoolCode;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor for handling 401 and token refresh
let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value?: unknown) => void;
  reject: (reason?: unknown) => void;
}> = [];

const processQueue = (error: unknown, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status === 401 && !originalRequest._retry) {
      // Avoid looping if the failing request is the refresh token itself or login
      if (
        originalRequest.url?.includes("/auth/refresh-token") ||
        originalRequest.url?.includes("/auth/login")
      ) {
        return Promise.reject(error);
      }

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            if (originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${token}`;
            }
            return apiClient(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const response = await axios.post(
          `${API_BASE_URL}/auth/refresh-token`,
          {},
          { withCredentials: true }
        );

        const newAccessToken =
          response.data?.data?.accessToken || response.data?.accessToken;

        if (newAccessToken && typeof window !== "undefined") {
          localStorage.setItem("hpss_access_token", newAccessToken);
          if (originalRequest.headers) {
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          }
          processQueue(null, newAccessToken);
          return apiClient(originalRequest);
        } else {
          processQueue(error, null);
        }
      } catch (refreshErr) {
        processQueue(refreshErr, null);
        if (typeof window !== "undefined") {
          localStorage.removeItem("hpss_access_token");
          localStorage.removeItem("hpss_user");
        }
        return Promise.reject(refreshErr);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
