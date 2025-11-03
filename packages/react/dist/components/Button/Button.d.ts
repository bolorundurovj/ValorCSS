import { ButtonHTMLAttributes } from 'react';
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
export declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=Button.d.ts.map