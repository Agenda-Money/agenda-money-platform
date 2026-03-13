import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Strips spaces and hyphens from a phone number string.
 * Used for normalizing Ghana phone input before validation.
 */
export function normalizePhone(value: string): string {
  return value.replace(/[\s-]/g, "");
}

/**
 * Sanitizes a phone input event by removing non-digit characters and
 * capping the value at 10 characters. Attach to the `onInput` event
 * of a phone/tel input element.
 */
export function sanitizePhoneInput(e: React.FormEvent<HTMLInputElement>): void {
  const target = e.currentTarget;
  target.value = target.value.replace(/\D/g, "").slice(0, 10);
}
