// Maintenance mode is ON by default: the whole site shows the maintenance page.
//
// To bring the site back, set MAINTENANCE_DEFAULT to false below and deploy.
// (VITE_MAINTENANCE_MODE=true/false at build time overrides it if ever needed.)
//
//   VITE_MAINTENANCE_ETA="3:00 PM GMT"  optional: shown as "Expected back"

const MAINTENANCE_DEFAULT = true;

const flag = (import.meta.env.VITE_MAINTENANCE_MODE as string | undefined)?.trim();

export const MAINTENANCE_MODE = flag === "true" ? true : flag === "false" ? false : MAINTENANCE_DEFAULT;

export const MAINTENANCE_ETA = (import.meta.env.VITE_MAINTENANCE_ETA as string | undefined)?.trim() || "";
