import { SelectHTMLAttributes } from 'react';
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
export declare const Select: import("react").ForwardRefExoticComponent<SelectProps & import("react").RefAttributes<HTMLSelectElement>>;
//# sourceMappingURL=Select.d.ts.map