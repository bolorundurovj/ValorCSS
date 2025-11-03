import { HTMLAttributes, ReactNode } from 'react';
import type { ColorVariant, BaseComponentProps } from '../../types/common';
export interface ToastProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'title'>, BaseComponentProps {
    /**
     * Toast color variant
     */
    variant?: ColorVariant;
    /**
     * Toast ID
     */
    id?: string;
    /**
     * Toast title
     */
    title?: ReactNode;
    /**
     * Toast message
     */
    message?: ReactNode;
    /**
     * Toast icon
     */
    icon?: ReactNode;
    /**
     * Show close button
     * @default true
     */
    dismissible?: boolean;
    /**
     * Callback when toast is dismissed
     */
    onDismiss?: () => void;
}
/**
 * Toast component following ValorCSS design system
 *
 * @example
 * ```tsx
 * <Toast variant="success" title="Success!" message="Operation completed">
 *   <Toast.Icon>✓</Toast.Icon>
 * </Toast>
 * ```
 */
export declare const ToastRoot: import("react").ForwardRefExoticComponent<ToastProps & import("react").RefAttributes<HTMLDivElement>>;
export interface ToastIconProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
}
export interface ToastTitleProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
}
export interface ToastMessageProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
}
export declare const ToastIcon: import("react").ForwardRefExoticComponent<ToastIconProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const ToastTitle: import("react").ForwardRefExoticComponent<ToastTitleProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const ToastMessage: import("react").ForwardRefExoticComponent<ToastMessageProps & import("react").RefAttributes<HTMLDivElement>>;
/**
 * Toast Container component
 * Renders all active toasts from ToastProvider
 *
 * @example
 * ```tsx
 * <ToastProvider>
 *   <App />
 *   <ToastContainer />
 * </ToastProvider>
 * ```
 */
export declare function ToastContainer(): import("react/jsx-runtime").JSX.Element | null;
export declare namespace ToastContainer {
    var displayName: string;
}
export declare const Toast: import("react").ForwardRefExoticComponent<ToastProps & import("react").RefAttributes<HTMLDivElement>> & {
    Icon: import("react").ForwardRefExoticComponent<ToastIconProps & import("react").RefAttributes<HTMLDivElement>>;
    Title: import("react").ForwardRefExoticComponent<ToastTitleProps & import("react").RefAttributes<HTMLDivElement>>;
    Message: import("react").ForwardRefExoticComponent<ToastMessageProps & import("react").RefAttributes<HTMLDivElement>>;
    Container: typeof ToastContainer;
};
//# sourceMappingURL=Toast.d.ts.map