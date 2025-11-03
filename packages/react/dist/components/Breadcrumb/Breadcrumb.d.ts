import { HTMLAttributes, AnchorHTMLAttributes, LiHTMLAttributes } from 'react';
import type { BaseComponentProps } from '../../types/common';
export interface BreadcrumbProps extends Omit<HTMLAttributes<HTMLElement>, 'className'>, BaseComponentProps {
}
export interface BreadcrumbItemProps extends Omit<LiHTMLAttributes<HTMLLIElement>, 'className'>, BaseComponentProps {
    /**
     * Whether this is the active/current item
     * @default false
     */
    active?: boolean;
}
export interface BreadcrumbLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'>, BaseComponentProps {
}
export declare const Breadcrumb: import("react").ForwardRefExoticComponent<BreadcrumbProps & import("react").RefAttributes<HTMLElement>> & {
    Item: import("react").ForwardRefExoticComponent<BreadcrumbItemProps & import("react").RefAttributes<HTMLLIElement>>;
    Link: import("react").ForwardRefExoticComponent<BreadcrumbLinkProps & import("react").RefAttributes<HTMLAnchorElement>>;
};
//# sourceMappingURL=Breadcrumb.d.ts.map