import { forwardRef, SelectHTMLAttributes } from 'react';
import { cn } from '../../utils/classNames';
import type { SizeVariant, BaseComponentProps } from '../../types/common';

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'className' | 'size'>, BaseComponentProps {
  /**
   * Select size
   * @default 'md'
   */
  size?: SizeVariant;

  /**
   * Whether the select is invalid
   */
  isInvalid?: boolean;

  /**
   * Whether the select is valid
   */
  isValid?: boolean;

  /**
   * Full width select
   */
  fullWidth?: boolean;
}

/**
 * Select component following ValorCSS design system
 *
 * @example
 * ```tsx
 * <Select size="lg" isValid={isValid}>
 *   <option value="">Choose...</option>
 *   <option value="1">Option 1</option>
 *   <option value="2">Option 2</option>
 * </Select>
 * ```
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      size = 'md',
      isInvalid = false,
      isValid = false,
      fullWidth = false,
      className,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      'form-control',
      {
        [`form-control-${size}`]: size && size !== 'md',
        'is-invalid': isInvalid,
        'is-valid': isValid,
        'w-full': fullWidth,
      },
      className
    );

    return (
      <select
        ref={ref}
        className={classes}
        disabled={disabled}
        aria-invalid={isInvalid ? 'true' : undefined}
        {...props}
      >
        {children}
      </select>
    );
  }
);

Select.displayName = 'Select';
