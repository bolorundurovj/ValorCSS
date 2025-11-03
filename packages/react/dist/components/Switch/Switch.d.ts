import { InputHTMLAttributes, ReactNode } from 'react';
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
export declare const Switch: import("react").ForwardRefExoticComponent<SwitchProps & import("react").RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=Switch.d.ts.map