import { HTMLAttributes } from 'react';
import type { BaseComponentProps, ColorVariant } from '../../types/common';
type ChangeType = 'positive' | 'negative' | 'neutral';
export interface StatsCardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
    /**
     * Card variant color
     */
    variant?: ColorVariant;
    /**
     * Compact size
     * @default false
     */
    compact?: boolean;
    /**
     * Horizontal layout
     * @default false
     */
    horizontal?: boolean;
}
export interface StatsCardBodyProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
}
export interface StatsCardContentProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
}
export interface StatsCardIconProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
}
export interface StatsCardLabelProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'className'>, BaseComponentProps {
}
export interface StatsCardValueProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'className'>, BaseComponentProps {
}
export interface StatsCardChangeProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'className'>, BaseComponentProps {
    /**
     * Type of change
     */
    type?: ChangeType;
}
export interface StatsCardDescriptionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
}
export interface StatsCardFooterProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
}
export declare const StatsCard: import("react").ForwardRefExoticComponent<StatsCardProps & import("react").RefAttributes<HTMLDivElement>> & {
    Body: import("react").ForwardRefExoticComponent<StatsCardBodyProps & import("react").RefAttributes<HTMLDivElement>>;
    Content: import("react").ForwardRefExoticComponent<StatsCardContentProps & import("react").RefAttributes<HTMLDivElement>>;
    Icon: import("react").ForwardRefExoticComponent<StatsCardIconProps & import("react").RefAttributes<HTMLDivElement>>;
    Label: import("react").ForwardRefExoticComponent<StatsCardLabelProps & import("react").RefAttributes<HTMLSpanElement>>;
    Value: import("react").ForwardRefExoticComponent<StatsCardValueProps & import("react").RefAttributes<HTMLSpanElement>>;
    Change: import("react").ForwardRefExoticComponent<StatsCardChangeProps & import("react").RefAttributes<HTMLSpanElement>>;
    Description: import("react").ForwardRefExoticComponent<StatsCardDescriptionProps & import("react").RefAttributes<HTMLDivElement>>;
    Footer: import("react").ForwardRefExoticComponent<StatsCardFooterProps & import("react").RefAttributes<HTMLDivElement>>;
};
export interface StatsGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
    /**
     * Number of columns
     */
    columns?: 2 | 3 | 4;
}
export declare const StatsGroup: import("react").ForwardRefExoticComponent<StatsGroupProps & import("react").RefAttributes<HTMLDivElement>>;
export interface StatProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
    /**
     * Horizontal layout
     * @default false
     */
    horizontal?: boolean;
}
export interface StatLabelProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'className'>, BaseComponentProps {
}
export interface StatValueProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'className'>, BaseComponentProps {
}
export interface StatChangeProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'className'>, BaseComponentProps {
    /**
     * Type of change
     */
    type?: ChangeType;
}
export declare const Stat: import("react").ForwardRefExoticComponent<StatProps & import("react").RefAttributes<HTMLDivElement>> & {
    Label: import("react").ForwardRefExoticComponent<StatLabelProps & import("react").RefAttributes<HTMLSpanElement>>;
    Value: import("react").ForwardRefExoticComponent<StatValueProps & import("react").RefAttributes<HTMLSpanElement>>;
    Change: import("react").ForwardRefExoticComponent<StatChangeProps & import("react").RefAttributes<HTMLSpanElement>>;
};
export interface ProgressStatProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
}
export interface ProgressStatHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
}
export interface ProgressStatLabelProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'className'>, BaseComponentProps {
}
export interface ProgressStatValueProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'className'>, BaseComponentProps {
}
export interface ProgressStatBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
}
export interface ProgressStatFillProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
    /**
     * Progress percentage (0-100)
     */
    value: number;
    /**
     * Color variant
     */
    variant?: ColorVariant;
}
export interface ProgressStatDescriptionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
}
export declare const ProgressStat: import("react").ForwardRefExoticComponent<ProgressStatProps & import("react").RefAttributes<HTMLDivElement>> & {
    Header: import("react").ForwardRefExoticComponent<ProgressStatHeaderProps & import("react").RefAttributes<HTMLDivElement>>;
    Label: import("react").ForwardRefExoticComponent<ProgressStatLabelProps & import("react").RefAttributes<HTMLSpanElement>>;
    Value: import("react").ForwardRefExoticComponent<ProgressStatValueProps & import("react").RefAttributes<HTMLSpanElement>>;
    Bar: import("react").ForwardRefExoticComponent<ProgressStatBarProps & import("react").RefAttributes<HTMLDivElement>>;
    Fill: import("react").ForwardRefExoticComponent<ProgressStatFillProps & import("react").RefAttributes<HTMLDivElement>>;
    Description: import("react").ForwardRefExoticComponent<ProgressStatDescriptionProps & import("react").RefAttributes<HTMLDivElement>>;
};
export {};
//# sourceMappingURL=Stats.d.ts.map