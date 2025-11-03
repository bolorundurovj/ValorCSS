import { forwardRef, ButtonHTMLAttributes } from 'react';
import { cn } from '../../utils/classNames';
import type { ColorVariant, SizeVariant, BaseComponentProps } from '../../types/common';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>, BaseComponentProps {
  /**
   * Button color variant
   * @default 'primary'
   */
  variant?: ColorVariant;

  /**
   * Button size
   * @default 'md'
   */
  size?: SizeVariant;

  /**
   * Outline variant
   */
  outline?: boolean;

  /**
   * Ghost variant
   */
  ghost?: boolean;

  /**
   * Loading state
   */
  loading?: boolean;

  /**
   * Full width button
   */
  block?: boolean;
}

/**
 * Button component following ValorCSS design system
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="lg">
 *   Click me
 * </Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size,
      outline = false,
      ghost = false,
      loading = false,
      block = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      'btn',
      {
        // Variant classes
        [`btn-${variant}`]: variant && !outline && !ghost,
        [`btn-outline-${variant}`]: outline && variant,
        'btn-ghost': ghost,

        // Size classes
        [`btn-${size}`]: size,

        // State classes
        'btn-loading': loading,
        'btn-block': block,
      },
      className
    );

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
