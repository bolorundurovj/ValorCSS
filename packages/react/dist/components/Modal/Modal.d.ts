import { HTMLAttributes } from 'react';
import type { BaseComponentProps, ModalSize } from '../../types/common';
export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
    /**
     * Whether the modal is open
     */
    isOpen: boolean;
    /**
     * Callback when modal is closed
     */
    onClose?: () => void;
    /**
     * Modal size
     * @default 'md'
     */
    size?: ModalSize;
    /**
     * Whether clicking backdrop closes modal
     * @default true
     */
    closeOnBackdrop?: boolean;
    /**
     * Whether pressing Escape closes modal
     * @default true
     */
    closeOnEscape?: boolean;
}
export interface ModalDialogProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
}
export interface ModalContentProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
}
export interface ModalHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
}
export interface ModalBodyProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
}
export interface ModalFooterProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
}
export interface ModalTitleProps extends Omit<HTMLAttributes<HTMLHeadingElement>, 'className'>, BaseComponentProps {
}
/**
 * Modal component following ValorCSS design system
 *
 * @example
 * ```tsx
 * const { isOpen, open, close } = useModal();
 *
 * <Modal isOpen={isOpen} onClose={close}>
 *   <Modal.Header>
 *     <Modal.Title>Modal Title</Modal.Title>
 *     <Modal.CloseButton />
 *   </Modal.Header>
 *   <Modal.Body>
 *     Modal content goes here
 *   </Modal.Body>
 *   <Modal.Footer>
 *     <Button variant="secondary" onClick={close}>Close</Button>
 *     <Button variant="primary">Save</Button>
 *   </Modal.Footer>
 * </Modal>
 * ```
 */
export declare const ModalRoot: import("react").ForwardRefExoticComponent<ModalProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const ModalContent: import("react").ForwardRefExoticComponent<ModalContentProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const ModalHeader: import("react").ForwardRefExoticComponent<ModalHeaderProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const ModalBody: import("react").ForwardRefExoticComponent<ModalBodyProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const ModalFooter: import("react").ForwardRefExoticComponent<ModalFooterProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const ModalTitle: import("react").ForwardRefExoticComponent<ModalTitleProps & import("react").RefAttributes<HTMLHeadingElement>>;
export interface ModalCloseButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'className'> {
    className?: string;
    onClick?: () => void;
}
export declare const ModalCloseButton: import("react").ForwardRefExoticComponent<ModalCloseButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export declare const Modal: import("react").ForwardRefExoticComponent<ModalProps & import("react").RefAttributes<HTMLDivElement>> & {
    Content: import("react").ForwardRefExoticComponent<ModalContentProps & import("react").RefAttributes<HTMLDivElement>>;
    Header: import("react").ForwardRefExoticComponent<ModalHeaderProps & import("react").RefAttributes<HTMLDivElement>>;
    Body: import("react").ForwardRefExoticComponent<ModalBodyProps & import("react").RefAttributes<HTMLDivElement>>;
    Footer: import("react").ForwardRefExoticComponent<ModalFooterProps & import("react").RefAttributes<HTMLDivElement>>;
    Title: import("react").ForwardRefExoticComponent<ModalTitleProps & import("react").RefAttributes<HTMLHeadingElement>>;
    CloseButton: import("react").ForwardRefExoticComponent<ModalCloseButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
};
//# sourceMappingURL=Modal.d.ts.map