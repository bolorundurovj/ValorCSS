import { HTMLAttributes, AnchorHTMLAttributes, LiHTMLAttributes } from 'react';
import type { BaseComponentProps } from '../../types/common';
export interface NavbarProps extends Omit<HTMLAttributes<HTMLElement>, 'className'>, BaseComponentProps {
    /**
     * Dark variant of navbar
     * @default false
     */
    dark?: boolean;
}
export interface NavbarBrandProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'>, BaseComponentProps {
}
export interface NavbarNavProps extends Omit<HTMLAttributes<HTMLUListElement>, 'className'>, BaseComponentProps {
}
export interface NavbarItemProps extends Omit<LiHTMLAttributes<HTMLLIElement>, 'className'>, BaseComponentProps {
}
export interface NavbarLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'>, BaseComponentProps {
    /**
     * Whether the link is active
     * @default false
     */
    active?: boolean;
}
export declare const Navbar: import("react").ForwardRefExoticComponent<NavbarProps & import("react").RefAttributes<HTMLElement>> & {
    Brand: import("react").ForwardRefExoticComponent<NavbarBrandProps & import("react").RefAttributes<HTMLAnchorElement>>;
    Nav: import("react").ForwardRefExoticComponent<NavbarNavProps & import("react").RefAttributes<HTMLUListElement>>;
    Item: import("react").ForwardRefExoticComponent<NavbarItemProps & import("react").RefAttributes<HTMLLIElement>>;
    Link: import("react").ForwardRefExoticComponent<NavbarLinkProps & import("react").RefAttributes<HTMLAnchorElement>>;
};
//# sourceMappingURL=Navbar.d.ts.map