import { HTMLAttributes } from 'react';
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
export interface CardHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
}
export interface CardBodyProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
}
export interface CardFooterProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
}
export interface CardTitleProps extends Omit<HTMLAttributes<HTMLHeadingElement>, 'className'>, BaseComponentProps {
}
export interface CardTextProps extends Omit<HTMLAttributes<HTMLParagraphElement>, 'className'>, BaseComponentProps {
}
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
export declare const CardRoot: import("react").ForwardRefExoticComponent<CardProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const CardHeader: import("react").ForwardRefExoticComponent<CardHeaderProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const CardBody: import("react").ForwardRefExoticComponent<CardBodyProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const CardFooter: import("react").ForwardRefExoticComponent<CardFooterProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const CardTitle: import("react").ForwardRefExoticComponent<CardTitleProps & import("react").RefAttributes<HTMLHeadingElement>>;
export declare const CardText: import("react").ForwardRefExoticComponent<CardTextProps & import("react").RefAttributes<HTMLParagraphElement>>;
export declare const Card: import("react").ForwardRefExoticComponent<CardProps & import("react").RefAttributes<HTMLDivElement>> & {
    Header: import("react").ForwardRefExoticComponent<CardHeaderProps & import("react").RefAttributes<HTMLDivElement>>;
    Body: import("react").ForwardRefExoticComponent<CardBodyProps & import("react").RefAttributes<HTMLDivElement>>;
    Footer: import("react").ForwardRefExoticComponent<CardFooterProps & import("react").RefAttributes<HTMLDivElement>>;
    Title: import("react").ForwardRefExoticComponent<CardTitleProps & import("react").RefAttributes<HTMLHeadingElement>>;
    Text: import("react").ForwardRefExoticComponent<CardTextProps & import("react").RefAttributes<HTMLParagraphElement>>;
};
//# sourceMappingURL=Card.d.ts.map