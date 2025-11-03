import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { cn, bemElement } from '../../utils/classNames';
import { useToastContext } from '../../hooks/useToast';
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
export const ToastRoot = forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      variant = 'primary',
      id,
      title,
      message,
      icon,
      dismissible = true,
      onDismiss,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      'toast',
      'toast-fade-in',
      {
        [`toast--${variant}`]: variant,
      },
      className
    );

    return (
      <div ref={ref} className={classes} role="alert" {...props}>
        {icon && <div className={bemElement('toast', 'icon')}>{icon}</div>}

        <div className={bemElement('toast', 'content')}>
          {title && <div className={bemElement('toast', 'title')}>{title}</div>}
          {message && <div className={bemElement('toast', 'message')}>{message}</div>}
          {children}
        </div>

        {dismissible && (
          <button
            type="button"
            className={bemElement('toast', 'close')}
            onClick={onDismiss}
            aria-label="Close"
          >
            &times;
          </button>
        )}
      </div>
    );
  }
);

ToastRoot.displayName = 'Toast';

export interface ToastIconProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {}
export interface ToastTitleProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {}
export interface ToastMessageProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {}

export const ToastIcon = forwardRef<HTMLDivElement, ToastIconProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(bemElement('toast', 'icon'), className)} {...props}>
        {children}
      </div>
    );
  }
);

ToastIcon.displayName = 'Toast.Icon';

export const ToastTitle = forwardRef<HTMLDivElement, ToastTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(bemElement('toast', 'title'), className)} {...props}>
        {children}
      </div>
    );
  }
);

ToastTitle.displayName = 'Toast.Title';

export const ToastMessage = forwardRef<HTMLDivElement, ToastMessageProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(bemElement('toast', 'message'), className)} {...props}>
        {children}
      </div>
    );
  }
);

ToastMessage.displayName = 'Toast.Message';

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
export function ToastContainer() {
  const { toasts, removeToast, position } = useToastContext();

  if (toasts.length === 0) return null;

  const container = (
    <div className={cn('toast-container', `toast-container--${position}`)}>
      {toasts.map((toast) => (
        <ToastRoot
          key={toast.id}
          id={toast.id}
          variant={toast.variant}
          title={toast.title}
          message={toast.message}
          icon={toast.icon}
          onDismiss={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(container, document.body) : container;
}

ToastContainer.displayName = 'ToastContainer';

// Compound component pattern
export const Toast = Object.assign(ToastRoot, {
  Icon: ToastIcon,
  Title: ToastTitle,
  Message: ToastMessage,
  Container: ToastContainer,
});
