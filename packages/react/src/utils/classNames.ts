import clsx, { ClassValue } from 'clsx';

/**
 * Utility function to merge class names
 * Uses clsx for conditional class merging
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/**
 * Generate BEM modifier class name
 */
export function bemModifier(block: string, modifier: string | undefined): string | undefined {
  return modifier ? `${block}--${modifier}` : undefined;
}

/**
 * Generate BEM element class name
 */
export function bemElement(block: string, element: string): string {
  return `${block}__${element}`;
}
