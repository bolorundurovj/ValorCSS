import { ReactNode } from 'react';
import type { ColorVariant, ToastPosition } from '../types/common';
export interface Toast {
    id: string;
    variant?: ColorVariant;
    title?: string;
    message: ReactNode;
    duration?: number;
    icon?: ReactNode;
}
export interface ToastContextValue {
    toasts: Toast[];
    addToast: (toast: Omit<Toast, 'id'>) => string;
    removeToast: (id: string) => void;
    position: ToastPosition;
}
export interface ToastProviderProps {
    children: ReactNode;
    position?: ToastPosition;
    defaultDuration?: number;
}
/**
 * Toast Provider component
 * Wrap your app with this provider to use toasts
 *
 * @example
 * ```tsx
 * <ToastProvider position="top-right">
 *   <App />
 * </ToastProvider>
 * ```
 */
export declare function ToastProvider({ children, position, defaultDuration, }: ToastProviderProps): import("react/jsx-runtime").JSX.Element;
/**
 * Hook for managing toasts
 * Must be used within a ToastProvider
 *
 * @returns Toast control functions
 *
 * @example
 * ```tsx
 * const { success, error, info, warning } = useToast();
 *
 * <Button onClick={() => success('Operation completed!')}>
 *   Show Success
 * </Button>
 * ```
 */
export declare function useToast(): {
    toast: (message: ReactNode, options?: Omit<Toast, "id" | "message">) => string;
    success: (message: ReactNode, options?: Omit<Toast, "id" | "message" | "variant">) => string;
    error: (message: ReactNode, options?: Omit<Toast, "id" | "message" | "variant">) => string;
    warning: (message: ReactNode, options?: Omit<Toast, "id" | "message" | "variant">) => string;
    info: (message: ReactNode, options?: Omit<Toast, "id" | "message" | "variant">) => string;
    dismiss: (id: string) => void;
};
/**
 * Hook to access toast context
 * @internal
 */
export declare function useToastContext(): ToastContextValue;
//# sourceMappingURL=useToast.d.ts.map