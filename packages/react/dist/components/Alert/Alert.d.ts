import { HTMLAttributes } from 'react';
import type { ColorVariant, BaseComponentProps } from '../../types/common';
export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
    /**
     * Alert color variant
     * @default 'primary'
     */
    variant?: ColorVariant;
    /**
     * Make alert dismissible
     */
    dismissible?: boolean;
    /**
     * Callback when alert is dismissed
     */
    onDismiss?: () => void;
}
/**
 * Alert component following ValorCSS design system
 *
 * @example
 * ```tsx
 * <Alert variant="success">
 *   <strong>Success!</strong> Your action was completed.
 * </Alert>
 *
 * <Alert variant="danger" dismissible onDismiss={() => console.log('Dismissed')}>
 *   <strong>Error!</strong> Something went wrong.
 * </Alert>
 * ```
 */
export declare const Alert: import("react").ForwardRefExoticComponent<AlertProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Alert.d.ts.map