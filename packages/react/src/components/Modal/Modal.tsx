import { forwardRef, HTMLAttributes, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { cn, bemElement } from '../../utils/classNames';
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

export interface ModalDialogProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {}
export interface ModalContentProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {}
export interface ModalHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {}
export interface ModalBodyProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {}
export interface ModalFooterProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {}
export interface ModalTitleProps extends Omit<HTMLAttributes<HTMLHeadingElement>, 'className'>, BaseComponentProps {}

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
export const ModalRoot = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      isOpen,
      onClose,
      size = 'md',
      closeOnBackdrop = true,
      closeOnEscape = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && closeOnEscape && onClose) {
          onClose();
        }
      };

      if (isOpen) {
        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';
      }

      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = '';
      };
    }, [isOpen, closeOnEscape, onClose]);

    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (closeOnBackdrop && onClose && event.target === event.currentTarget) {
        onClose();
      }
    };

    if (!isOpen) return null;

    const modal = (
      <div
        ref={ref}
        className={cn('modal', 'show', className)}
        onClick={handleBackdropClick}
        role="dialog"
        aria-modal="true"
        {...props}
      >
        <div
          ref={modalRef}
          className={cn('modal__dialog', {
            [`modal__dialog--${size}`]: size && size !== 'md',
          })}
        >
          {children}
        </div>
      </div>
    );

    // Render modal in portal
    return typeof document !== 'undefined'
      ? createPortal(modal, document.body)
      : modal;
  }
);

ModalRoot.displayName = 'Modal';

export const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(bemElement('modal', 'content'), className)} {...props}>
        {children}
      </div>
    );
  }
);

ModalContent.displayName = 'Modal.Content';

export const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(bemElement('modal', 'header'), className)} {...props}>
        {children}
      </div>
    );
  }
);

ModalHeader.displayName = 'Modal.Header';

export const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(bemElement('modal', 'body'), className)} {...props}>
        {children}
      </div>
    );
  }
);

ModalBody.displayName = 'Modal.Body';

export const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(bemElement('modal', 'footer'), className)} {...props}>
        {children}
      </div>
    );
  }
);

ModalFooter.displayName = 'Modal.Footer';

export const ModalTitle = forwardRef<HTMLHeadingElement, ModalTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h5 ref={ref} className={cn(bemElement('modal', 'title'), className)} {...props}>
        {children}
      </h5>
    );
  }
);

ModalTitle.displayName = 'Modal.Title';

export interface ModalCloseButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'className'> {
  className?: string;
  onClick?: () => void;
}

export const ModalCloseButton = forwardRef<HTMLButtonElement, ModalCloseButtonProps>(
  ({ className, onClick, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn('btn-close', className)}
        onClick={onClick}
        aria-label="Close"
        {...props}
      />
    );
  }
);

ModalCloseButton.displayName = 'Modal.CloseButton';

// Compound component pattern
export const Modal = Object.assign(ModalRoot, {
  Content: ModalContent,
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
  Title: ModalTitle,
  CloseButton: ModalCloseButton,
});
