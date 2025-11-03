import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../utils/classNames';
import type { ColorVariant, BaseComponentProps } from '../../types/common';

export interface BadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'className'>, BaseComponentProps {
  /**
   * Badge color variant
   * @default 'primary'
   */
  variant?: ColorVariant;

  /**
   * Pill-shaped badge
   */
  pill?: boolean;
}

/**
 * Badge component following ValorCSS design system
 *
 * @example
 * ```tsx
 * <Badge variant="success">New</Badge>
 * <Badge variant="primary" pill>5</Badge>
 * ```
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'primary', pill = false, className, children, ...props }, ref) => {
    const classes = cn(
      'badge',
      {
        [`badge--${variant}`]: variant,
        'badge--pill': pill,
      },
      className
    );

    return (
      <span ref={ref} className={classes} {...props}>
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
