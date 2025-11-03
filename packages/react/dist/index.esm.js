import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef, useState, useRef, useEffect, createContext, useContext, useCallback } from 'react';
import { createPortal } from 'react-dom';

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

/**
 * Utility function to merge class names
 * Uses clsx for conditional class merging
 */
function cn(...inputs) {
    return clsx(inputs);
}
/**
 * Generate BEM element class name
 */
function bemElement(block, element) {
    return `${block}__${element}`;
}

/**
 * Button component following ValorCSS design system
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="lg">
 *   Click me
 * </Button>
 * ```
 */
const Button = forwardRef(({ variant = 'primary', size, outline = false, ghost = false, loading = false, block = false, className, children, disabled, ...props }, ref) => {
    const classes = cn('btn', {
        // Variant classes
        [`btn-${variant}`]: variant && !outline && !ghost,
        [`btn-outline-${variant}`]: outline && variant,
        'btn-ghost': ghost,
        // Size classes
        [`btn-${size}`]: size,
        // State classes
        'btn-loading': loading,
        'btn-block': block,
    }, className);
    return (jsx("button", { ref: ref, className: classes, disabled: disabled || loading, ...props, children: children }));
});
Button.displayName = 'Button';

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
const CardRoot = forwardRef(({ variant, hover = false, className, children, ...props }, ref) => {
    const classes = cn('card', {
        [`card--${variant}`]: variant,
        'card--hover': hover,
    }, className);
    return (jsx("div", { ref: ref, className: classes, ...props, children: children }));
});
CardRoot.displayName = 'Card';
const CardHeader = forwardRef(({ className, children, ...props }, ref) => {
    return (jsx("div", { ref: ref, className: cn(bemElement('card', 'header'), className), ...props, children: children }));
});
CardHeader.displayName = 'Card.Header';
const CardBody = forwardRef(({ className, children, ...props }, ref) => {
    return (jsx("div", { ref: ref, className: cn(bemElement('card', 'body'), className), ...props, children: children }));
});
CardBody.displayName = 'Card.Body';
const CardFooter = forwardRef(({ className, children, ...props }, ref) => {
    return (jsx("div", { ref: ref, className: cn(bemElement('card', 'footer'), className), ...props, children: children }));
});
CardFooter.displayName = 'Card.Footer';
const CardTitle = forwardRef(({ className, children, ...props }, ref) => {
    return (jsx("h3", { ref: ref, className: cn(bemElement('card', 'title'), className), ...props, children: children }));
});
CardTitle.displayName = 'Card.Title';
const CardText = forwardRef(({ className, children, ...props }, ref) => {
    return (jsx("p", { ref: ref, className: cn(bemElement('card', 'text'), className), ...props, children: children }));
});
CardText.displayName = 'Card.Text';
// Compound component pattern
const Card = Object.assign(CardRoot, {
    Header: CardHeader,
    Body: CardBody,
    Footer: CardFooter,
    Title: CardTitle,
    Text: CardText,
});

/**
 * Badge component following ValorCSS design system
 *
 * @example
 * ```tsx
 * <Badge variant="success">New</Badge>
 * <Badge variant="primary" pill>5</Badge>
 * ```
 */
const Badge = forwardRef(({ variant = 'primary', pill = false, className, children, ...props }, ref) => {
    const classes = cn('badge', {
        [`badge--${variant}`]: variant,
        'badge--pill': pill,
    }, className);
    return (jsx("span", { ref: ref, className: classes, ...props, children: children }));
});
Badge.displayName = 'Badge';

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
const Alert = forwardRef(({ variant = 'primary', dismissible = false, onDismiss, className, children, ...props }, ref) => {
    const [visible, setVisible] = useState(true);
    const handleDismiss = () => {
        setVisible(false);
        onDismiss?.();
    };
    if (!visible)
        return null;
    const classes = cn('alert', {
        [`alert--${variant}`]: variant,
        'alert--dismissible': dismissible,
    }, className);
    return (jsxs("div", { ref: ref, className: classes, role: "alert", ...props, children: [children, dismissible && (jsx("button", { type: "button", className: bemElement('alert', 'close'), onClick: handleDismiss, "aria-label": "Close", children: "\u00D7" }))] }));
});
Alert.displayName = 'Alert';

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
const ModalRoot = forwardRef(({ isOpen, onClose, size = 'md', closeOnBackdrop = true, closeOnEscape = true, className, children, ...props }, ref) => {
    const modalRef = useRef(null);
    useEffect(() => {
        const handleEscape = (event) => {
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
    const handleBackdropClick = (event) => {
        if (closeOnBackdrop && onClose && event.target === event.currentTarget) {
            onClose();
        }
    };
    if (!isOpen)
        return null;
    const modal = (jsx("div", { ref: ref, className: cn('modal', 'show', className), onClick: handleBackdropClick, role: "dialog", "aria-modal": "true", ...props, children: jsx("div", { ref: modalRef, className: cn('modal__dialog', {
                [`modal__dialog--${size}`]: size && size !== 'md',
            }), children: children }) }));
    // Render modal in portal
    return typeof document !== 'undefined'
        ? createPortal(modal, document.body)
        : modal;
});
ModalRoot.displayName = 'Modal';
const ModalContent = forwardRef(({ className, children, ...props }, ref) => {
    return (jsx("div", { ref: ref, className: cn(bemElement('modal', 'content'), className), ...props, children: children }));
});
ModalContent.displayName = 'Modal.Content';
const ModalHeader = forwardRef(({ className, children, ...props }, ref) => {
    return (jsx("div", { ref: ref, className: cn(bemElement('modal', 'header'), className), ...props, children: children }));
});
ModalHeader.displayName = 'Modal.Header';
const ModalBody = forwardRef(({ className, children, ...props }, ref) => {
    return (jsx("div", { ref: ref, className: cn(bemElement('modal', 'body'), className), ...props, children: children }));
});
ModalBody.displayName = 'Modal.Body';
const ModalFooter = forwardRef(({ className, children, ...props }, ref) => {
    return (jsx("div", { ref: ref, className: cn(bemElement('modal', 'footer'), className), ...props, children: children }));
});
ModalFooter.displayName = 'Modal.Footer';
const ModalTitle = forwardRef(({ className, children, ...props }, ref) => {
    return (jsx("h5", { ref: ref, className: cn(bemElement('modal', 'title'), className), ...props, children: children }));
});
ModalTitle.displayName = 'Modal.Title';
const ModalCloseButton = forwardRef(({ className, onClick, ...props }, ref) => {
    return (jsx("button", { ref: ref, type: "button", className: cn('btn-close', className), onClick: onClick, "aria-label": "Close", ...props }));
});
ModalCloseButton.displayName = 'Modal.CloseButton';
// Compound component pattern
const Modal = Object.assign(ModalRoot, {
    Content: ModalContent,
    Header: ModalHeader,
    Body: ModalBody,
    Footer: ModalFooter,
    Title: ModalTitle,
    CloseButton: ModalCloseButton,
});

const ToastContext = createContext(undefined);
/**
 * Toast Provider component
 * Wrap your app with this provider to use toasts
 *
 * @example
 * ```tsx
 * <ToastProvider position="top-right">
 *   <App />
 * </ToastProvider>
 * ```
 */
function ToastProvider({ children, position = 'top-right', defaultDuration = 5000, }) {
    const [toasts, setToasts] = useState([]);
    const addToast = useCallback((toast) => {
        const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        const duration = toast.duration ?? defaultDuration;
        setToasts((prev) => [...prev, { ...toast, id }]);
        if (duration > 0) {
            setTimeout(() => {
                removeToast(id);
            }, duration);
        }
        return id;
    }, [defaultDuration]);
    const removeToast = useCallback((id) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);
    return (jsx(ToastContext.Provider, { value: { toasts, addToast, removeToast, position }, children: children }));
}
/**
 * Hook for managing toasts
 * Must be used within a ToastProvider
 *
 * @returns Toast control functions
 *
 * @example
 * ```tsx
 * const { success, error, info, warning } = useToast();
 *
 * <Button onClick={() => success('Operation completed!')}>
 *   Show Success
 * </Button>
 * ```
 */
function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within ToastProvider');
    }
    const { addToast, removeToast } = context;
    const toast = useCallback((message, options) => {
        return addToast({ message, ...options });
    }, [addToast]);
    const success = useCallback((message, options) => {
        return addToast({ message, variant: 'success', ...options });
    }, [addToast]);
    const error = useCallback((message, options) => {
        return addToast({ message, variant: 'danger', ...options });
    }, [addToast]);
    const warning = useCallback((message, options) => {
        return addToast({ message, variant: 'warning', ...options });
    }, [addToast]);
    const info = useCallback((message, options) => {
        return addToast({ message, variant: 'info', ...options });
    }, [addToast]);
    const dismiss = useCallback((id) => {
        removeToast(id);
    }, [removeToast]);
    return {
        toast,
        success,
        error,
        warning,
        info,
        dismiss,
    };
}
/**
 * Hook to access toast context
 * @internal
 */
function useToastContext() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToastContext must be used within ToastProvider');
    }
    return context;
}

/**
 * Toast component following ValorCSS design system
 *
 * @example
 * ```tsx
 * <Toast variant="success" title="Success!" message="Operation completed">
 *   <Toast.Icon>✓</Toast.Icon>
 * </Toast>
 * ```
 */
const ToastRoot = forwardRef(({ variant = 'primary', id, title, message, icon, dismissible = true, onDismiss, className, children, ...props }, ref) => {
    const classes = cn('toast', 'toast-fade-in', {
        [`toast--${variant}`]: variant,
    }, className);
    return (jsxs("div", { ref: ref, className: classes, role: "alert", ...props, children: [icon && jsx("div", { className: bemElement('toast', 'icon'), children: icon }), jsxs("div", { className: bemElement('toast', 'content'), children: [title && jsx("div", { className: bemElement('toast', 'title'), children: title }), message && jsx("div", { className: bemElement('toast', 'message'), children: message }), children] }), dismissible && (jsx("button", { type: "button", className: bemElement('toast', 'close'), onClick: onDismiss, "aria-label": "Close", children: "\u00D7" }))] }));
});
ToastRoot.displayName = 'Toast';
const ToastIcon = forwardRef(({ className, children, ...props }, ref) => {
    return (jsx("div", { ref: ref, className: cn(bemElement('toast', 'icon'), className), ...props, children: children }));
});
ToastIcon.displayName = 'Toast.Icon';
const ToastTitle = forwardRef(({ className, children, ...props }, ref) => {
    return (jsx("div", { ref: ref, className: cn(bemElement('toast', 'title'), className), ...props, children: children }));
});
ToastTitle.displayName = 'Toast.Title';
const ToastMessage = forwardRef(({ className, children, ...props }, ref) => {
    return (jsx("div", { ref: ref, className: cn(bemElement('toast', 'message'), className), ...props, children: children }));
});
ToastMessage.displayName = 'Toast.Message';
/**
 * Toast Container component
 * Renders all active toasts from ToastProvider
 *
 * @example
 * ```tsx
 * <ToastProvider>
 *   <App />
 *   <ToastContainer />
 * </ToastProvider>
 * ```
 */
function ToastContainer() {
    const { toasts, removeToast, position } = useToastContext();
    if (toasts.length === 0)
        return null;
    const container = (jsx("div", { className: cn('toast-container', `toast-container--${position}`), children: toasts.map((toast) => (jsx(ToastRoot, { id: toast.id, variant: toast.variant, title: toast.title, message: toast.message, icon: toast.icon, onDismiss: () => removeToast(toast.id) }, toast.id))) }));
    return typeof document !== 'undefined' ? createPortal(container, document.body) : container;
}
ToastContainer.displayName = 'ToastContainer';
// Compound component pattern
const Toast = Object.assign(ToastRoot, {
    Icon: ToastIcon,
    Title: ToastTitle,
    Message: ToastMessage,
    Container: ToastContainer,
});

/**
 * Input component following ValorCSS design system
 *
 * @example
 * ```tsx
 * <Input
 *   type="email"
 *   placeholder="Enter email"
 *   size="lg"
 *   isValid={isValid}
 * />
 * ```
 */
const Input = forwardRef(({ size = 'md', isInvalid = false, isValid = false, fullWidth = false, className, disabled, ...props }, ref) => {
    const classes = cn('form-control', {
        [`form-control-${size}`]: size && size !== 'md',
        'is-invalid': isInvalid,
        'is-valid': isValid,
        'w-full': fullWidth,
    }, className);
    return (jsx("input", { ref: ref, className: classes, disabled: disabled, "aria-invalid": isInvalid ? 'true' : undefined, ...props }));
});
Input.displayName = 'Input';

/**
 * Checkbox component following ValorCSS design system
 *
 * @example
 * ```tsx
 * <Checkbox
 *   label="Remember me"
 *   checked={isChecked}
 *   onChange={(e) => setIsChecked(e.target.checked)}
 * />
 * ```
 */
const Checkbox = forwardRef(({ label, labelId, indeterminate = false, className, id, ...props }, ref) => {
    const inputId = id || labelId || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
    const inputClasses = cn(bemElement('form-check', 'input'), className);
    const handleRef = (node) => {
        if (node) {
            node.indeterminate = indeterminate;
        }
        if (typeof ref === 'function') {
            ref(node);
        }
        else if (ref) {
            ref.current = node;
        }
    };
    if (label) {
        return (jsxs("div", { className: "form-check", children: [jsx("input", { ref: handleRef, type: "checkbox", className: inputClasses, id: inputId, ...props }), jsx("label", { className: bemElement('form-check', 'label'), htmlFor: inputId, children: label })] }));
    }
    return (jsx("input", { ref: handleRef, type: "checkbox", className: inputClasses, id: inputId, ...props }));
});
Checkbox.displayName = 'Checkbox';

/**
 * Switch component following ValorCSS design system
 *
 * @example
 * ```tsx
 * <Switch
 *   label="Enable notifications"
 *   checked={isEnabled}
 *   onChange={(e) => setIsEnabled(e.target.checked)}
 * />
 * ```
 */
const Switch = forwardRef(({ label, labelId, className, id, ...props }, ref) => {
    const inputId = id || labelId || `switch-${Math.random().toString(36).substr(2, 9)}`;
    const inputClasses = cn(bemElement('form-check', 'input'), className);
    if (label) {
        return (jsxs("div", { className: "form-check form-switch", children: [jsx("input", { ref: ref, type: "checkbox", role: "switch", className: inputClasses, id: inputId, ...props }), jsx("label", { className: bemElement('form-check', 'label'), htmlFor: inputId, children: label })] }));
    }
    return (jsx("div", { className: "form-check form-switch", children: jsx("input", { ref: ref, type: "checkbox", role: "switch", className: inputClasses, id: inputId, ...props }) }));
});
Switch.displayName = 'Switch';

/**
 * Select component following ValorCSS design system
 *
 * @example
 * ```tsx
 * <Select size="lg" isValid={isValid}>
 *   <option value="">Choose...</option>
 *   <option value="1">Option 1</option>
 *   <option value="2">Option 2</option>
 * </Select>
 * ```
 */
const Select = forwardRef(({ size = 'md', isInvalid = false, isValid = false, fullWidth = false, className, disabled, children, ...props }, ref) => {
    const classes = cn('form-control', {
        [`form-control-${size}`]: size && size !== 'md',
        'is-invalid': isInvalid,
        'is-valid': isValid,
        'w-full': fullWidth,
    }, className);
    return (jsx("select", { ref: ref, className: classes, disabled: disabled, "aria-invalid": isInvalid ? 'true' : undefined, ...props, children: children }));
});
Select.displayName = 'Select';

/**
 * Hook for managing modal state
 *
 * @param defaultOpen - Initial open state
 * @returns Modal state and control functions
 *
 * @example
 * ```tsx
 * const { isOpen, open, close } = useModal();
 *
 * return (
 *   <>
 *     <Button onClick={open}>Open Modal</Button>
 *     <Modal isOpen={isOpen} onClose={close}>
 *       <Modal.Header>
 *         <Modal.Title>Modal Title</Modal.Title>
 *       </Modal.Header>
 *       <Modal.Body>Modal content</Modal.Body>
 *     </Modal>
 *   </>
 * );
 * ```
 */
function useModal(defaultOpen = false) {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const open = useCallback(() => {
        setIsOpen(true);
    }, []);
    const close = useCallback(() => {
        setIsOpen(false);
    }, []);
    const toggle = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);
    // Handle escape key
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape' && isOpen) {
                close();
            }
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [isOpen, close]);
    return { isOpen, open, close, toggle };
}

export { Alert, Badge, Button, Card, Checkbox, Input, Modal, Select, Switch, Toast, ToastContainer, ToastProvider, cn, useModal, useToast, useToastContext };
//# sourceMappingURL=index.esm.js.map
