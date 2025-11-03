import { HTMLAttributes, AnchorHTMLAttributes, LiHTMLAttributes } from 'react';
import type { BaseComponentProps } from '../../types/common';
export interface PaginationProps extends Omit<HTMLAttributes<HTMLElement>, 'className'>, BaseComponentProps {
}
export interface PaginationItemProps extends Omit<LiHTMLAttributes<HTMLLIElement>, 'className'>, BaseComponentProps {
    /**
     * Whether this item is active/current
     * @default false
     */
    active?: boolean;
    /**
     * Whether this item is disabled
     * @default false
     */
    disabled?: boolean;
}
export interface PaginationLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'>, BaseComponentProps {
    /**
     * Whether this link is active/current
     * @default false
     */
    active?: boolean;
}
export declare const Pagination: import("react").ForwardRefExoticComponent<PaginationProps & import("react").RefAttributes<HTMLElement>> & {
    Item: import("react").ForwardRefExoticComponent<PaginationItemProps & import("react").RefAttributes<HTMLLIElement>>;
    Link: import("react").ForwardRefExoticComponent<PaginationLinkProps & import("react").RefAttributes<HTMLAnchorElement>>;
};
//# sourceMappingURL=Pagination.d.ts.map