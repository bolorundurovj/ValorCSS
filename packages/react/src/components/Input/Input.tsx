import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '../../utils/classNames';
import type { SizeVariant, BaseComponentProps } from '../../types/common';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'size'>, BaseComponentProps {
  /**
   * Input size
   * @default 'md'
   */
  size?: SizeVariant;

  /**
   * Whether the input is invalid
   */
  isInvalid?: boolean;

  /**
   * Whether the input is valid
   */
  isValid?: boolean;

  /**
   * Full width input
   */
  fullWidth?: boolean;
}

/**
 * Input component following ValorCSS design system
 *
 * @example
 * ```tsx
 * <Input
 *   type="email"
 *   placeholder="Enter email"
 *   size="lg"
 *   isValid={isValid}
 * />
 * ```
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      isInvalid = false,
      isValid = false,
      fullWidth = false,
      className,
      disabled,
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
      <input
        ref={ref}
        className={classes}
        disabled={disabled}
        aria-invalid={isInvalid ? 'true' : undefined}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
