import { forwardRef, HTMLAttributes, AnchorHTMLAttributes, LiHTMLAttributes } from 'react';
import { cn, bemElement, bemModifier } from '../../utils/classNames';
import type { BaseComponentProps } from '../../types/common';

// Navbar Root Component
export interface NavbarProps extends Omit<HTMLAttributes<HTMLElement>, 'className'>, BaseComponentProps {
  /**
   * Dark variant of navbar
   * @default false
   */
  dark?: boolean;
}

/**
 * Navbar root component
 */
const NavbarRoot = forwardRef<HTMLElement, NavbarProps>(
  ({ dark = false, className, children, ...props }, ref) => {
    const classes = cn('navbar', { 'navbar--dark': dark }, className);

    return (
      <nav ref={ref} className={classes} {...props}>
        {children}
      </nav>
    );
  }
);

NavbarRoot.displayName = 'Navbar';

// Navbar Brand Component
export interface NavbarBrandProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'>, BaseComponentProps {}

const NavbarBrand = forwardRef<HTMLAnchorElement, NavbarBrandProps>(({ className, children, ...props }, ref) => {
  const classes = cn(bemElement('navbar', 'brand'), className);

  return (
    <a ref={ref} className={classes} {...props}>
      {children}
    </a>
  );
});

NavbarBrand.displayName = 'Navbar.Brand';

// Navbar Nav Component (ul element)
export interface NavbarNavProps extends Omit<HTMLAttributes<HTMLUListElement>, 'className'>, BaseComponentProps {}

const NavbarNav = forwardRef<HTMLUListElement, NavbarNavProps>(({ className, children, ...props }, ref) => {
  const classes = cn(bemElement('navbar', 'nav'), className);

  return (
    <ul ref={ref} className={classes} {...props}>
      {children}
    </ul>
  );
});

NavbarNav.displayName = 'Navbar.Nav';

// Navbar Item Component (li element)
export interface NavbarItemProps extends Omit<LiHTMLAttributes<HTMLLIElement>, 'className'>, BaseComponentProps {}

const NavbarItem = forwardRef<HTMLLIElement, NavbarItemProps>(({ className, children, ...props }, ref) => {
  const classes = cn(bemElement('navbar', 'item'), className);

  return (
    <li ref={ref} className={classes} {...props}>
      {children}
    </li>
  );
});

NavbarItem.displayName = 'Navbar.Item';

// Navbar Link Component
export interface NavbarLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'>, BaseComponentProps {
  /**
   * Whether the link is active
   * @default false
   */
  active?: boolean;
}

const NavbarLink = forwardRef<HTMLAnchorElement, NavbarLinkProps>(
  ({ active = false, className, children, ...props }, ref) => {
    const classes = cn(
      bemElement('navbar', 'link'),
      { [bemModifier(bemElement('navbar', 'link'), 'active')!]: active },
      className
    );

    return (
      <a ref={ref} className={classes} aria-current={active ? 'page' : undefined} {...props}>
        {children}
      </a>
    );
  }
);

NavbarLink.displayName = 'Navbar.Link';

// Export compound component
export const Navbar = Object.assign(NavbarRoot, {
  Brand: NavbarBrand,
  Nav: NavbarNav,
  Item: NavbarItem,
  Link: NavbarLink,
});
