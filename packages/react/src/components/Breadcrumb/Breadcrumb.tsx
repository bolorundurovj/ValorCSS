import { forwardRef, HTMLAttributes, AnchorHTMLAttributes, LiHTMLAttributes } from 'react';
import { cn, bemElement, bemModifier } from '../../utils/classNames';
import type { BaseComponentProps } from '../../types/common';

// Breadcrumb Root Component
export interface BreadcrumbProps extends Omit<HTMLAttributes<HTMLElement>, 'className'>, BaseComponentProps {}

/**
 * Breadcrumb navigation component
 *
 * @example
 * ```tsx
 * <Breadcrumb>
 *   <Breadcrumb.Item>
 *     <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
 *   </Breadcrumb.Item>
 *   <Breadcrumb.Item>
 *     <Breadcrumb.Link href="/products">Products</Breadcrumb.Link>
 *   </Breadcrumb.Item>
 *   <Breadcrumb.Item active>Current Page</Breadcrumb.Item>
 * </Breadcrumb>
 * ```
 */
const BreadcrumbRoot = forwardRef<HTMLElement, BreadcrumbProps>(({ className, children, ...props }, ref) => {
  const classes = cn('breadcrumb', className);

  return (
    <nav ref={ref} aria-label="breadcrumb" {...props}>
      <ol className={classes}>{children}</ol>
    </nav>
  );
});

BreadcrumbRoot.displayName = 'Breadcrumb';

// Breadcrumb Item Component
export interface BreadcrumbItemProps extends Omit<LiHTMLAttributes<HTMLLIElement>, 'className'>, BaseComponentProps {
  /**
   * Whether this is the active/current item
   * @default false
   */
  active?: boolean;
}

const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ active = false, className, children, ...props }, ref) => {
    const classes = cn(
      bemElement('breadcrumb', 'item'),
      { [bemModifier(bemElement('breadcrumb', 'item'), 'active')!]: active },
      className
    );

    return (
      <li ref={ref} className={classes} aria-current={active ? 'page' : undefined} {...props}>
        {children}
      </li>
    );
  }
);

BreadcrumbItem.displayName = 'Breadcrumb.Item';

// Breadcrumb Link Component
export interface BreadcrumbLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'>,
    BaseComponentProps {}

const BreadcrumbLink = forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ className, children, ...props }, ref) => {
    const classes = cn(bemElement('breadcrumb', 'link'), className);

    return (
      <a ref={ref} className={classes} {...props}>
        {children}
      </a>
    );
  }
);

BreadcrumbLink.displayName = 'Breadcrumb.Link';

// Export compound component
export const Breadcrumb = Object.assign(BreadcrumbRoot, {
  Item: BreadcrumbItem,
  Link: BreadcrumbLink,
});
