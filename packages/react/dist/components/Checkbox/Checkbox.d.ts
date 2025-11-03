import { InputHTMLAttributes, ReactNode } from 'react';
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
export declare const Checkbox: import("react").ForwardRefExoticComponent<CheckboxProps & import("react").RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=Checkbox.d.ts.map