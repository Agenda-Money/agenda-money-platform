// Maintenance mode is a build-time switch, so turning it on or off means a new
// deploy with the variable changed (no code change, no commit):
//
//   VITE_MAINTENANCE_MODE=true          show the maintenance page on every route
//   VITE_MAINTENANCE_ETA="3:00 PM GMT"  optional: shown as "Expected back"
//
// Anything other than the exact string "true" leaves the site running normally.

export const MAINTENANCE_MODE = import.meta.env.VITE_MAINTENANCE_MODE === "true";

export const MAINTENANCE_ETA = (import.meta.env.VITE_MAINTENANCE_ETA as string | undefined)?.trim() || "";
