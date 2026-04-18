/**
 * Base URL for the Express API (no trailing slash).
 * On Railway, set VITE_API_URL to your backend public URL (e.g. https://technotran-api.up.railway.app).
 */
const raw = import.meta.env.VITE_API_URL;

export const API_URL =
  typeof raw === "string" && raw.trim() !== ""
    ? raw.trim().replace(/\/$/, "")
    : "https://your-backend-url";

/** Build an absolute API path (path should start with `/`, e.g. `/api/health`). */
export function apiUrl(path) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${API_URL}${p}`;
}
