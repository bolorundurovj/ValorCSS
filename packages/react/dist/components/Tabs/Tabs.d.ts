import { HTMLAttributes, ButtonHTMLAttributes, LiHTMLAttributes } from 'react';
import type { BaseComponentProps } from '../../types/common';
type TabVariant = 'default' | 'pills' | 'boxed' | 'card';
type TabAlignment = 'left' | 'center' | 'right' | 'justified';
type TabOrientation = 'horizontal' | 'vertical';
export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
    /**
     * Currently active tab ID
     */
    activeTab?: string;
    /**
     * Default active tab ID (for uncontrolled mode)
     */
    defaultActiveTab?: string;
    /**
     * Callback when active tab changes
     */
    onTabChange?: (tabId: string) => void;
    /**
     * Tab variant style
     * @default 'default'
     */
    variant?: TabVariant;
    /**
     * Tab alignment
     * @default 'left'
     */
    alignment?: TabAlignment;
    /**
     * Tab orientation
     * @default 'horizontal'
     */
    orientation?: TabOrientation;
}
export interface TabsNavProps extends Omit<HTMLAttributes<HTMLUListElement>, 'className'>, BaseComponentProps {
}
export interface TabsItemProps extends Omit<LiHTMLAttributes<HTMLLIElement>, 'className'>, BaseComponentProps {
}
export interface TabsLinkProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>, BaseComponentProps {
    /**
     * Tab ID (required for tab switching)
     */
    tabId: string;
    /**
     * Whether to render as an anchor tag
     * @default false
     */
    asAnchor?: boolean;
    /**
     * Href for anchor tag (only used when asAnchor is true)
     */
    href?: string;
}
export interface TabsContentProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
}
export interface TabsPaneProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
    /**
     * Tab ID that this pane corresponds to
     */
    tabId: string;
    /**
     * Whether to keep the pane mounted when inactive
     * @default false
     */
    keepMounted?: boolean;
}
export declare const Tabs: import("react").ForwardRefExoticComponent<TabsProps & import("react").RefAttributes<HTMLDivElement>> & {
    Nav: import("react").ForwardRefExoticComponent<TabsNavProps & import("react").RefAttributes<HTMLUListElement>>;
    Item: import("react").ForwardRefExoticComponent<TabsItemProps & import("react").RefAttributes<HTMLLIElement>>;
    Link: import("react").ForwardRefExoticComponent<TabsLinkProps & import("react").RefAttributes<HTMLButtonElement>>;
    Content: import("react").ForwardRefExoticComponent<TabsContentProps & import("react").RefAttributes<HTMLDivElement>>;
    Pane: import("react").ForwardRefExoticComponent<TabsPaneProps & import("react").RefAttributes<HTMLDivElement>>;
};
export {};
//# sourceMappingURL=Tabs.d.ts.map