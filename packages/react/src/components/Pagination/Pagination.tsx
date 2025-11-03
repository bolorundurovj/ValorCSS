import { forwardRef, HTMLAttributes, AnchorHTMLAttributes, LiHTMLAttributes } from 'react';
import { cn, bemElement, bemModifier } from '../../utils/classNames';
import type { BaseComponentProps } from '../../types/common';

// Pagination Root Component
export interface PaginationProps extends Omit<HTMLAttributes<HTMLElement>, 'className'>, BaseComponentProps {}

/**
 * Pagination navigation component
 *
 * @example
 * ```tsx
 * <Pagination>
 *   <Pagination.Item>
 *     <Pagination.Link href="#" aria-label="Previous">‹</Pagination.Link>
 *   </Pagination.Item>
 *   <Pagination.Item>
 *     <Pagination.Link href="#" active>1</Pagination.Link>
 *   </Pagination.Item>
 *   <Pagination.Item>
 *     <Pagination.Link href="#">2</Pagination.Link>
 *   </Pagination.Item>
 *   <Pagination.Item>
 *     <Pagination.Link href="#" aria-label="Next">›</Pagination.Link>
 *   </Pagination.Item>
 * </Pagination>
 * ```
 */
const PaginationRoot = forwardRef<HTMLElement, PaginationProps>(({ className, children, ...props }, ref) => {
  const classes = cn('pagination', className);

  return (
    <nav ref={ref} aria-label="pagination" {...props}>
      <ul className={classes}>{children}</ul>
    </nav>
  );
});

PaginationRoot.displayName = 'Pagination';

// Pagination Item Component
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

const PaginationItem = forwardRef<HTMLLIElement, PaginationItemProps>(
  ({ active = false, disabled = false, className, children, ...props }, ref) => {
    const classes = cn(
      bemElement('pagination', 'item'),
      {
        [bemModifier(bemElement('pagination', 'item'), 'active')!]: active,
        [bemModifier(bemElement('pagination', 'item'), 'disabled')!]: disabled,
      },
      className
    );

    return (
      <li ref={ref} className={classes} {...props}>
        {children}
      </li>
    );
  }
);

PaginationItem.displayName = 'Pagination.Item';

// Pagination Link Component
export interface PaginationLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'>,
    BaseComponentProps {
  /**
   * Whether this link is active/current
   * @default false
   */
  active?: boolean;
}

const PaginationLink = forwardRef<HTMLAnchorElement, PaginationLinkProps>(
  ({ active = false, className, children, ...props }, ref) => {
    const classes = cn(bemElement('pagination', 'link'), className);

    return (
      <a ref={ref} className={classes} aria-current={active ? 'page' : undefined} {...props}>
        {children}
      </a>
    );
  }
);

PaginationLink.displayName = 'Pagination.Link';

// Export compound component
export const Pagination = Object.assign(PaginationRoot, {
  Item: PaginationItem,
  Link: PaginationLink,
});
