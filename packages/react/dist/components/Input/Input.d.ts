import { InputHTMLAttributes } from 'react';
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
export declare const Input: import("react").ForwardRefExoticComponent<InputProps & import("react").RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=Input.d.ts.map