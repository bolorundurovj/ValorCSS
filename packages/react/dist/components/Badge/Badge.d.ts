import { HTMLAttributes } from 'react';
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
export declare const Badge: import("react").ForwardRefExoticComponent<BadgeProps & import("react").RefAttributes<HTMLSpanElement>>;
//# sourceMappingURL=Badge.d.ts.map