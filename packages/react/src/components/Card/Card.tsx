import { forwardRef, HTMLAttributes } from 'react';
import { cn, bemElement } from '../../utils/classNames';
import type { ColorVariant, BaseComponentProps } from '../../types/common';

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
  /**
   * Card color variant
   */
  variant?: ColorVariant;

  /**
   * Add hover effect
   */
  hover?: boolean;
}

export interface CardHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {}
export interface CardBodyProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {}
export interface CardFooterProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {}
export interface CardTitleProps extends Omit<HTMLAttributes<HTMLHeadingElement>, 'className'>, BaseComponentProps {}
export interface CardTextProps extends Omit<HTMLAttributes<HTMLParagraphElement>, 'className'>, BaseComponentProps {}

/**
 * Card component following ValorCSS design system
 *
 * @example
 * ```tsx
 * <Card>
 *   <Card.Header>
 *     <Card.Title>Card Title</Card.Title>
 *   </Card.Header>
 *   <Card.Body>
 *     <Card.Text>Card content</Card.Text>
 *   </Card.Body>
 *   <Card.Footer>
 *     <Button>Action</Button>
 *   </Card.Footer>
 * </Card>
 * ```
 */
export const CardRoot = forwardRef<HTMLDivElement, CardProps>(
  ({ variant, hover = false, className, children, ...props }, ref) => {
    const classes = cn(
      'card',
      {
        [`card--${variant}`]: variant,
        'card--hover': hover,
      },
      className
    );

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

CardRoot.displayName = 'Card';

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(bemElement('card', 'header'), className)} {...props}>
        {children}
      </div>
    );
  }
);

CardHeader.displayName = 'Card.Header';

export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(bemElement('card', 'body'), className)} {...props}>
        {children}
      </div>
    );
  }
);

CardBody.displayName = 'Card.Body';

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(bemElement('card', 'footer'), className)} {...props}>
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'Card.Footer';

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h3 ref={ref} className={cn(bemElement('card', 'title'), className)} {...props}>
        {children}
      </h3>
    );
  }
);

CardTitle.displayName = 'Card.Title';

export const CardText = forwardRef<HTMLParagraphElement, CardTextProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p ref={ref} className={cn(bemElement('card', 'text'), className)} {...props}>
        {children}
      </p>
    );
  }
);

CardText.displayName = 'Card.Text';

// Compound component pattern
export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
  Title: CardTitle,
  Text: CardText,
});
