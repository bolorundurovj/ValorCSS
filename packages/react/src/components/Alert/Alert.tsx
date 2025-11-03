import { forwardRef, HTMLAttributes, useState } from 'react';
import { cn, bemElement } from '../../utils/classNames';
import type { ColorVariant, BaseComponentProps } from '../../types/common';

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
  /**
   * Alert color variant
   * @default 'primary'
   */
  variant?: ColorVariant;

  /**
   * Make alert dismissible
   */
  dismissible?: boolean;

  /**
   * Callback when alert is dismissed
   */
  onDismiss?: () => void;
}

/**
 * Alert component following ValorCSS design system
 *
 * @example
 * ```tsx
 * <Alert variant="success">
 *   <strong>Success!</strong> Your action was completed.
 * </Alert>
 *
 * <Alert variant="danger" dismissible onDismiss={() => console.log('Dismissed')}>
 *   <strong>Error!</strong> Something went wrong.
 * </Alert>
 * ```
 */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ variant = 'primary', dismissible = false, onDismiss, className, children, ...props }, ref) => {
    const [visible, setVisible] = useState(true);

    const handleDismiss = () => {
      setVisible(false);
      onDismiss?.();
    };

    if (!visible) return null;

    const classes = cn(
      'alert',
      {
        [`alert--${variant}`]: variant,
        'alert--dismissible': dismissible,
      },
      className
    );

    return (
      <div ref={ref} className={classes} role="alert" {...props}>
        {children}
        {dismissible && (
          <button
            type="button"
            className={bemElement('alert', 'close')}
            onClick={handleDismiss}
            aria-label="Close"
          >
            &times;
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = 'Alert';
