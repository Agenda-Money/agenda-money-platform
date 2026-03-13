/**
 * Centralized API configuration for Agenda Money.
 * All backend communications should route through these helpers.
 */

const getApiBaseUrl = () => {
  const url = import.meta.env.VITE_API_URL;
  if (!url) {
    // We do not provide a hardcoded fallback here to ensure security
    // and rely on environment configuration.
    throw new Error("VITE_API_URL is not defined in the environment.");
  }
  return url;
};

export const API_ENDPOINTS = {
  ENQUIRIES: `${getApiBaseUrl()}/api/site/enquiries`,
  SUPPORT: `${getApiBaseUrl()}/api/site/support`,
};

export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

export async function postRequest(url: string, payload: Record<string, unknown>) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  
  const result = await response.json();
  
  if (!response.ok) {
    throw new ApiError(result.message || "Something went wrong. Please try again.", response.status);
  }
  
  return result;
}
