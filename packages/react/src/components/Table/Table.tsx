import { forwardRef, HTMLAttributes, TableHTMLAttributes, ThHTMLAttributes, TdHTMLAttributes } from 'react';
import { cn } from '../../utils/classNames';
import type { BaseComponentProps } from '../../types/common';

// Table Root Component
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

/**
 * Table component following ValorCSS design system
 *
 * @example
 * ```tsx
 * <Table striped hover>
 *   <Table.Head>
 *     <Table.Row>
 *       <Table.Th>Name</Table.Th>
 *       <Table.Th>Email</Table.Th>
 *     </Table.Row>
 *   </Table.Head>
 *   <Table.Body>
 *     <Table.Row>
 *       <Table.Td>John Doe</Table.Td>
 *       <Table.Td>john@example.com</Table.Td>
 *     </Table.Row>
 *   </Table.Body>
 * </Table>
 * ```
 */
const TableRoot = forwardRef<HTMLTableElement, TableProps>(
  (
    {
      striped = false,
      bordered = false,
      borderless = false,
      hover = false,
      size = 'md',
      responsive = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      'table',
      {
        'table--striped': striped,
        'table--bordered': bordered,
        'table--borderless': borderless,
        'table--hover': hover,
        [`table--${size}`]: size !== 'md',
      },
      className
    );

    const table = (
      <table ref={ref} className={classes} {...props}>
        {children}
      </table>
    );

    if (responsive) {
      return <div className="table-responsive">{table}</div>;
    }

    return table;
  }
);

TableRoot.displayName = 'Table';

// Table Head Component
export interface TableHeadProps extends Omit<HTMLAttributes<HTMLTableSectionElement>, 'className'>, BaseComponentProps {}

const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(({ className, children, ...props }, ref) => {
  return (
    <thead ref={ref} className={className} {...props}>
      {children}
    </thead>
  );
});

TableHead.displayName = 'Table.Head';

// Table Body Component
export interface TableBodyProps extends Omit<HTMLAttributes<HTMLTableSectionElement>, 'className'>, BaseComponentProps {}

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(({ className, children, ...props }, ref) => {
  return (
    <tbody ref={ref} className={className} {...props}>
      {children}
    </tbody>
  );
});

TableBody.displayName = 'Table.Body';

// Table Footer Component
export interface TableFootProps extends Omit<HTMLAttributes<HTMLTableSectionElement>, 'className'>, BaseComponentProps {}

const TableFoot = forwardRef<HTMLTableSectionElement, TableFootProps>(({ className, children, ...props }, ref) => {
  return (
    <tfoot ref={ref} className={className} {...props}>
      {children}
    </tfoot>
  );
});

TableFoot.displayName = 'Table.Foot';

// Table Row Component
export interface TableRowProps extends Omit<HTMLAttributes<HTMLTableRowElement>, 'className'>, BaseComponentProps {}

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(({ className, children, ...props }, ref) => {
  return (
    <tr ref={ref} className={className} {...props}>
      {children}
    </tr>
  );
});

TableRow.displayName = 'Table.Row';

// Table Header Cell Component
export interface TableThProps extends Omit<ThHTMLAttributes<HTMLTableCellElement>, 'className'>, BaseComponentProps {}

const TableTh = forwardRef<HTMLTableCellElement, TableThProps>(({ className, children, ...props }, ref) => {
  return (
    <th ref={ref} className={className} {...props}>
      {children}
    </th>
  );
});

TableTh.displayName = 'Table.Th';

// Table Data Cell Component
export interface TableTdProps extends Omit<TdHTMLAttributes<HTMLTableCellElement>, 'className'>, BaseComponentProps {}

const TableTd = forwardRef<HTMLTableCellElement, TableTdProps>(({ className, children, ...props }, ref) => {
  return (
    <td ref={ref} className={className} {...props}>
      {children}
    </td>
  );
});

TableTd.displayName = 'Table.Td';

// Export compound component
export const Table = Object.assign(TableRoot, {
  Head: TableHead,
  Body: TableBody,
  Foot: TableFoot,
  Row: TableRow,
  Th: TableTh,
  Td: TableTd,
});
