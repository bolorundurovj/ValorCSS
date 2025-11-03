import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import { cn, bemElement } from '../../utils/classNames';
import type { BaseComponentProps } from '../../types/common';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'type'>, BaseComponentProps {
  /**
   * Checkbox label
   */
  label?: ReactNode;

  /**
   * Label ID (for accessibility)
   */
  labelId?: string;

  /**
   * Indeterminate state
   */
  indeterminate?: boolean;
}

/**
 * Checkbox component following ValorCSS design system
 *
 * @example
 * ```tsx
 * <Checkbox
 *   label="Remember me"
 *   checked={isChecked}
 *   onChange={(e) => setIsChecked(e.target.checked)}
 * />
 * ```
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      labelId,
      indeterminate = false,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || labelId || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    const inputClasses = cn(bemElement('form-check', 'input'), className);

    const handleRef = (node: HTMLInputElement | null) => {
      if (node) {
        node.indeterminate = indeterminate;
      }
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    if (label) {
      return (
        <div className="form-check">
          <input
            ref={handleRef}
            type="checkbox"
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
      <input
        ref={handleRef}
        type="checkbox"
        className={inputClasses}
        id={inputId}
        {...props}
      />
    );
  }
);

Checkbox.displayName = 'Checkbox';
