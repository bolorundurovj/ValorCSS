import { HTMLAttributes, ButtonHTMLAttributes } from 'react';
import type { BaseComponentProps, ColorVariant } from '../../types/common';
type DropdownPlacement = 'bottom-start' | 'bottom-end' | 'bottom-center' | 'top-start' | 'top-end' | 'start' | 'end';
type DropdownSize = 'sm' | 'md' | 'lg';
export interface DropdownProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
    /**
     * Whether the dropdown is open (controlled mode)
     */
    isOpen?: boolean;
    /**
     * Default open state (uncontrolled mode)
     * @default false
     */
    defaultOpen?: boolean;
    /**
     * Callback when dropdown open state changes
     */
    onOpenChange?: (isOpen: boolean) => void;
    /**
     * Close dropdown when clicking outside
     * @default true
     */
    closeOnClickOutside?: boolean;
    /**
     * Close dropdown when pressing escape
     * @default true
     */
    closeOnEscape?: boolean;
}
export interface DropdownToggleProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>, BaseComponentProps {
    /**
     * Button variant
     */
    variant?: ColorVariant;
    /**
     * Show caret icon
     * @default true
     */
    showCaret?: boolean;
}
export interface DropdownMenuProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
    /**
     * Menu placement
     * @default 'bottom-start'
     */
    placement?: DropdownPlacement;
    /**
     * Menu size
     * @default 'md'
     */
    size?: DropdownSize;
}
export interface DropdownItemProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>, BaseComponentProps {
    /**
     * Whether the item is active
     * @default false
     */
    active?: boolean;
    /**
     * Whether the item is a danger action
     * @default false
     */
    danger?: boolean;
    /**
     * Whether to close dropdown when item is clicked
     * @default true
     */
    closeOnClick?: boolean;
}
export interface DropdownHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
}
export interface DropdownDividerProps extends Omit<HTMLAttributes<HTMLHRElement>, 'className'>, BaseComponentProps {
}
export interface DropdownTextProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
}
export declare const Dropdown: import("react").ForwardRefExoticComponent<DropdownProps & import("react").RefAttributes<HTMLDivElement>> & {
    Toggle: import("react").ForwardRefExoticComponent<DropdownToggleProps & import("react").RefAttributes<HTMLButtonElement>>;
    Menu: import("react").ForwardRefExoticComponent<DropdownMenuProps & import("react").RefAttributes<HTMLDivElement>>;
    Item: import("react").ForwardRefExoticComponent<DropdownItemProps & import("react").RefAttributes<HTMLButtonElement>>;
    Header: import("react").ForwardRefExoticComponent<DropdownHeaderProps & import("react").RefAttributes<HTMLDivElement>>;
    Divider: import("react").ForwardRefExoticComponent<DropdownDividerProps & import("react").RefAttributes<HTMLHRElement>>;
    Text: import("react").ForwardRefExoticComponent<DropdownTextProps & import("react").RefAttributes<HTMLDivElement>>;
};
export {};
//# sourceMappingURL=Dropdown.d.ts.map