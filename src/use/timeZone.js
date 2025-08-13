/**
 * Get the user's current IANA time zone.
 *
 * @returns {string} The user's IANA time zone identifier.
 * @example
 * import { timeZone } from '@/use/timeZone'
 * const zone = timeZone()
 * console.log(zone)
 */
export function timeZone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
