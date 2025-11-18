// lib/utils.ts

/**
 * A simple class name combiner for NativeWind (Tailwind for React Native)
 * Removes falsy values and joins class names with space.
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}
