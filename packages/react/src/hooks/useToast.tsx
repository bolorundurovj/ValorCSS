import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
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

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

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
export function ToastProvider({
  children,
  position = 'top-right',
  defaultDuration = 5000,
}: ToastProviderProps) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback(
    (toast: Omit<Toast, 'id'>): string => {
      const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const duration = toast.duration ?? defaultDuration;

      setToasts((prev) => [...prev, { ...toast, id }]);

      if (duration > 0) {
        setTimeout(() => {
          removeToast(id);
        }, duration);
      }

      return id;
    },
    [defaultDuration]
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast, position }}>
      {children}
    </ToastContext.Provider>
  );
}

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
export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }

  const { addToast, removeToast } = context;

  const toast = useCallback(
    (message: ReactNode, options?: Omit<Toast, 'id' | 'message'>) => {
      return addToast({ message, ...options });
    },
    [addToast]
  );

  const success = useCallback(
    (message: ReactNode, options?: Omit<Toast, 'id' | 'message' | 'variant'>) => {
      return addToast({ message, variant: 'success', ...options });
    },
    [addToast]
  );

  const error = useCallback(
    (message: ReactNode, options?: Omit<Toast, 'id' | 'message' | 'variant'>) => {
      return addToast({ message, variant: 'danger', ...options });
    },
    [addToast]
  );

  const warning = useCallback(
    (message: ReactNode, options?: Omit<Toast, 'id' | 'message' | 'variant'>) => {
      return addToast({ message, variant: 'warning', ...options });
    },
    [addToast]
  );

  const info = useCallback(
    (message: ReactNode, options?: Omit<Toast, 'id' | 'message' | 'variant'>) => {
      return addToast({ message, variant: 'info', ...options });
    },
    [addToast]
  );

  const dismiss = useCallback(
    (id: string) => {
      removeToast(id);
    },
    [removeToast]
  );

  return {
    toast,
    success,
    error,
    warning,
    info,
    dismiss,
  };
}

/**
 * Hook to access toast context
 * @internal
 */
export function useToastContext() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToastContext must be used within ToastProvider');
  }

  return context;
}
