import { HTMLAttributes, TableHTMLAttributes, ThHTMLAttributes, TdHTMLAttributes } from 'react';
import type { BaseComponentProps } from '../../types/common';
export interface TableProps extends Omit<TableHTMLAttributes<HTMLTableElement>, 'className'>, BaseComponentProps {
    /**
     * Striped rows
     * @default false
     */
    striped?: boolean;
    /**
     * Bordered table
     * @default false
     */
    bordered?: boolean;
    /**
     * Borderless table
     * @default false
     */
    borderless?: boolean;
    /**
     * Hover effect on rows
     * @default false
     */
    hover?: boolean;
    /**
     * Table size
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * Responsive wrapper
     * @default false
     */
    responsive?: boolean;
}
export interface TableHeadProps extends Omit<HTMLAttributes<HTMLTableSectionElement>, 'className'>, BaseComponentProps {
}
export interface TableBodyProps extends Omit<HTMLAttributes<HTMLTableSectionElement>, 'className'>, BaseComponentProps {
}
export interface TableFootProps extends Omit<HTMLAttributes<HTMLTableSectionElement>, 'className'>, BaseComponentProps {
}
export interface TableRowProps extends Omit<HTMLAttributes<HTMLTableRowElement>, 'className'>, BaseComponentProps {
}
export interface TableThProps extends Omit<ThHTMLAttributes<HTMLTableCellElement>, 'className'>, BaseComponentProps {
}
export interface TableTdProps extends Omit<TdHTMLAttributes<HTMLTableCellElement>, 'className'>, BaseComponentProps {
}
export declare const Table: import("react").ForwardRefExoticComponent<TableProps & import("react").RefAttributes<HTMLTableElement>> & {
    Head: import("react").ForwardRefExoticComponent<TableHeadProps & import("react").RefAttributes<HTMLTableSectionElement>>;
    Body: import("react").ForwardRefExoticComponent<TableBodyProps & import("react").RefAttributes<HTMLTableSectionElement>>;
    Foot: import("react").ForwardRefExoticComponent<TableFootProps & import("react").RefAttributes<HTMLTableSectionElement>>;
    Row: import("react").ForwardRefExoticComponent<TableRowProps & import("react").RefAttributes<HTMLTableRowElement>>;
    Th: import("react").ForwardRefExoticComponent<TableThProps & import("react").RefAttributes<HTMLTableCellElement>>;
    Td: import("react").ForwardRefExoticComponent<TableTdProps & import("react").RefAttributes<HTMLTableCellElement>>;
};
//# sourceMappingURL=Table.d.ts.map