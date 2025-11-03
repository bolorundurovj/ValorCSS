import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import { cn, bemElement } from '../../utils/classNames';
import type { BaseComponentProps } from '../../types/common';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'type'>, BaseComponentProps {
  /**
   * Switch label
   */
  label?: ReactNode;

  /**
   * Label ID (for accessibility)
   */
  labelId?: string;
}

/**
 * Switch component following ValorCSS design system
 *
 * @example
 * ```tsx
 * <Switch
 *   label="Enable notifications"
 *   checked={isEnabled}
 *   onChange={(e) => setIsEnabled(e.target.checked)}
 * />
 * ```
 */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      label,
      labelId,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || labelId || `switch-${Math.random().toString(36).substr(2, 9)}`;

    const inputClasses = cn(bemElement('form-check', 'input'), className);

    if (label) {
      return (
        <div className="form-check form-switch">
          <input
            ref={ref}
            type="checkbox"
            role="switch"
            className={inputClasses}
            id={inputId}
            {...props}
          />
          <label className={bemElement('form-check', 'label')} htmlFor={inputId}>
            {label}
          </label>
        </div>
      );
    }

    return (
      <div className="form-check form-switch">
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          className={inputClasses}
          id={inputId}
          {...props}
        />
      </div>
    );
  }
);

Switch.displayName = 'Switch';
