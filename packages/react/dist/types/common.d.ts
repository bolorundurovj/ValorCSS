import { ReactNode } from 'react';
/**
 * Color variants used across components
 */
export type ColorVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
/**
 * Size variants used across components
 */
export type SizeVariant = 'sm' | 'md' | 'lg' | 'xl';
/**
 * Common props for all components
 */
export interface BaseComponentProps {
    /**
     * Additional CSS class names
     */
    className?: string;
    /**
     * Children elements
     */
    children?: ReactNode;
    /**
     * Test ID for testing
     */
    'data-testid'?: string;
}
/**
 * Props for components that support color variants
 */
export interface ColorVariantProps {
    /**
     * Color variant of the component
     */
    variant?: ColorVariant;
}
/**
 * Props for components that support size variants
 */
export interface SizeVariantProps {
    /**
     * Size variant of the component
     */
    size?: SizeVariant;
}
/**
 * Toast position options
 */
export type ToastPosition = 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center';
/**
 * Modal size options
 */
export type ModalSize = 'sm' | 'md' | 'lg' | 'xl';
//# sourceMappingURL=common.d.ts.map