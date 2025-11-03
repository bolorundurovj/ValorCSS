import { HTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import type { BaseComponentProps } from '../../types/common';
type AccordionVariant = 'default' | 'flush' | 'compact' | 'lg' | 'separated';
export interface AccordionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
    /**
     * Allow multiple items to be open at once
     * @default false
     */
    allowMultiple?: boolean;
    /**
     * Default open item IDs (for uncontrolled mode)
     */
    defaultOpenItems?: string[];
    /**
     * Controlled open item IDs
     */
    openItems?: string[];
    /**
     * Callback when items open/close
     */
    onItemsChange?: (openItems: string[]) => void;
    /**
     * Accordion variant
     * @default 'default'
     */
    variant?: AccordionVariant;
}
export interface AccordionItemProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
    /**
     * Unique item ID
     */
    itemId: string;
}
export interface AccordionButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>, BaseComponentProps {
    /**
     * Item ID this button controls
     */
    itemId: string;
}
export interface AccordionTitleProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
}
export interface AccordionIconProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'className'>, BaseComponentProps {
    /**
     * Custom icon to render
     */
    icon?: ReactNode;
}
export interface AccordionBodyProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
    /**
     * Item ID this body corresponds to
     */
    itemId: string;
}
export interface AccordionContentProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
}
export declare const Accordion: import("react").ForwardRefExoticComponent<AccordionProps & import("react").RefAttributes<HTMLDivElement>> & {
    Item: import("react").ForwardRefExoticComponent<AccordionItemProps & import("react").RefAttributes<HTMLDivElement>>;
    Button: import("react").ForwardRefExoticComponent<AccordionButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
    Title: import("react").ForwardRefExoticComponent<AccordionTitleProps & import("react").RefAttributes<HTMLDivElement>>;
    Icon: import("react").ForwardRefExoticComponent<AccordionIconProps & import("react").RefAttributes<HTMLSpanElement>>;
    Body: import("react").ForwardRefExoticComponent<AccordionBodyProps & import("react").RefAttributes<HTMLDivElement>>;
    Content: import("react").ForwardRefExoticComponent<AccordionContentProps & import("react").RefAttributes<HTMLDivElement>>;
};
export {};
//# sourceMappingURL=Accordion.d.ts.map