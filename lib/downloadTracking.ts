'use client';

/**
 * Tracks how many free sheets an anonymous user has downloaded,
 * and when to show/suppress the "Create free account" popup.
 *
 * Why localStorage:
 * - Works without a backend
 * - Survives browser refreshes and tab closes
 * - Signed-in users don't need this (they already have an account)
 *
 * When the user signs up, this state becomes irrelevant.
 */

const COUNT_KEY = 'ckd_anon_download_count';
const SUPPRESS_KEY = 'ckd_popup_suppress_until'; // ms timestamp
const DISMISS_TIMES_KEY = 'ckd_popup_dismiss_count';

export const POPUP_TRIGGER_COUNT = 5;

const DAY_MS = 24 * 60 * 60 * 1000;
const DISMISS_SCHEDULE = [
  7 * DAY_MS,   // 1st dismiss → hide for 7 days
  30 * DAY_MS,  // 2nd dismiss → hide for 30 days
  Infinity,     // 3rd dismiss → never show again
];

function safeGet(key: string): string | null {
  try { return localStorage.getItem(key); } catch { return null; }
}

function safeSet(key: string, val: string) {
  try { localStorage.setItem(key, val); } catch { /* noop */ }
}

export function getDownloadCount(): number {
  return parseInt(safeGet(COUNT_KEY) ?? '0', 10) || 0;
}

export function incrementDownloadCount(): number {
  const current = getDownloadCount();
  const next = current + 1;
  safeSet(COUNT_KEY, String(next));
  return next;
}

export function shouldShowPopup(): boolean {
  // Never show if dismissed 3+ times
  const dismisses = parseInt(safeGet(DISMISS_TIMES_KEY) ?? '0', 10) || 0;
  if (dismisses >= DISMISS_SCHEDULE.length) return false;

  // Check suppression window
  const suppressUntil = parseInt(safeGet(SUPPRESS_KEY) ?? '0', 10) || 0;
  if (Date.now() < suppressUntil) return false;

  // Check download threshold
  return getDownloadCount() >= POPUP_TRIGGER_COUNT;
}

export function recordDismiss() {
  const dismisses = parseInt(safeGet(DISMISS_TIMES_KEY) ?? '0', 10) || 0;
  const newDismisses = dismisses + 1;
  safeSet(DISMISS_TIMES_KEY, String(newDismisses));

  // Set suppression window based on dismiss count
  const scheduleIdx = Math.min(dismisses, DISMISS_SCHEDULE.length - 1);
  const waitMs = DISMISS_SCHEDULE[scheduleIdx];
  if (isFinite(waitMs)) {
    safeSet(SUPPRESS_KEY, String(Date.now() + waitMs));
  } else {
    // Permanent suppression: set suppress to a far future date
    safeSet(SUPPRESS_KEY, String(Date.now() + 365 * 100 * DAY_MS));
  }
}

export function clearTracking() {
  try {
    localStorage.removeItem(COUNT_KEY);
    localStorage.removeItem(SUPPRESS_KEY);
    localStorage.removeItem(DISMISS_TIMES_KEY);
  } catch { /* noop */ }
}
