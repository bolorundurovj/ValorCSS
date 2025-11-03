'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var reactDom = require('react-dom');

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

/**
 * Utility function to merge class names
 * Uses clsx for conditional class merging
 */
function cn(...inputs) {
    return clsx(inputs);
}
/**
 * Generate BEM modifier class name
 */
function bemModifier(block, modifier) {
    return modifier ? `${block}--${modifier}` : undefined;
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
const Button = react.forwardRef(({ variant = 'primary', size, outline = false, ghost = false, loading = false, block = false, className, children, disabled, ...props }, ref) => {
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
    return (jsxRuntime.jsx("button", { ref: ref, className: classes, disabled: disabled || loading, ...props, children: children }));
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
const CardRoot = react.forwardRef(({ variant, hover = false, className, children, ...props }, ref) => {
    const classes = cn('card', {
        [`card--${variant}`]: variant,
        'card--hover': hover,
    }, className);
    return (jsxRuntime.jsx("div", { ref: ref, className: classes, ...props, children: children }));
});
CardRoot.displayName = 'Card';
const CardHeader = react.forwardRef(({ className, children, ...props }, ref) => {
    return (jsxRuntime.jsx("div", { ref: ref, className: cn(bemElement('card', 'header'), className), ...props, children: children }));
});
CardHeader.displayName = 'Card.Header';
const CardBody = react.forwardRef(({ className, children, ...props }, ref) => {
    return (jsxRuntime.jsx("div", { ref: ref, className: cn(bemElement('card', 'body'), className), ...props, children: children }));
});
CardBody.displayName = 'Card.Body';
const CardFooter = react.forwardRef(({ className, children, ...props }, ref) => {
    return (jsxRuntime.jsx("div", { ref: ref, className: cn(bemElement('card', 'footer'), className), ...props, children: children }));
});
CardFooter.displayName = 'Card.Footer';
const CardTitle = react.forwardRef(({ className, children, ...props }, ref) => {
    return (jsxRuntime.jsx("h3", { ref: ref, className: cn(bemElement('card', 'title'), className), ...props, children: children }));
});
CardTitle.displayName = 'Card.Title';
const CardText = react.forwardRef(({ className, children, ...props }, ref) => {
    return (jsxRuntime.jsx("p", { ref: ref, className: cn(bemElement('card', 'text'), className), ...props, children: children }));
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
const Badge = react.forwardRef(({ variant = 'primary', pill = false, className, children, ...props }, ref) => {
    const classes = cn('badge', {
        [`badge--${variant}`]: variant,
        'badge--pill': pill,
    }, className);
    return (jsxRuntime.jsx("span", { ref: ref, className: classes, ...props, children: children }));
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
const Alert = react.forwardRef(({ variant = 'primary', dismissible = false, onDismiss, className, children, ...props }, ref) => {
    const [visible, setVisible] = react.useState(true);
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
    return (jsxRuntime.jsxs("div", { ref: ref, className: classes, role: "alert", ...props, children: [children, dismissible && (jsxRuntime.jsx("button", { type: "button", className: bemElement('alert', 'close'), onClick: handleDismiss, "aria-label": "Close", children: "\u00D7" }))] }));
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
const ModalRoot = react.forwardRef(({ isOpen, onClose, size = 'md', closeOnBackdrop = true, closeOnEscape = true, className, children, ...props }, ref) => {
    const modalRef = react.useRef(null);
    react.useEffect(() => {
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
    const modal = (jsxRuntime.jsx("div", { ref: ref, className: cn('modal', 'show', className), onClick: handleBackdropClick, role: "dialog", "aria-modal": "true", ...props, children: jsxRuntime.jsx("div", { ref: modalRef, className: cn('modal__dialog', {
                [`modal__dialog--${size}`]: size && size !== 'md',
            }), children: children }) }));
    // Render modal in portal
    return typeof document !== 'undefined'
        ? reactDom.createPortal(modal, document.body)
        : modal;
});
ModalRoot.displayName = 'Modal';
const ModalContent = react.forwardRef(({ className, children, ...props }, ref) => {
    return (jsxRuntime.jsx("div", { ref: ref, className: cn(bemElement('modal', 'content'), className), ...props, children: children }));
});
ModalContent.displayName = 'Modal.Content';
const ModalHeader = react.forwardRef(({ className, children, ...props }, ref) => {
    return (jsxRuntime.jsx("div", { ref: ref, className: cn(bemElement('modal', 'header'), className), ...props, children: children }));
});
ModalHeader.displayName = 'Modal.Header';
const ModalBody = react.forwardRef(({ className, children, ...props }, ref) => {
    return (jsxRuntime.jsx("div", { ref: ref, className: cn(bemElement('modal', 'body'), className), ...props, children: children }));
});
ModalBody.displayName = 'Modal.Body';
const ModalFooter = react.forwardRef(({ className, children, ...props }, ref) => {
    return (jsxRuntime.jsx("div", { ref: ref, className: cn(bemElement('modal', 'footer'), className), ...props, children: children }));
});
ModalFooter.displayName = 'Modal.Footer';
const ModalTitle = react.forwardRef(({ className, children, ...props }, ref) => {
    return (jsxRuntime.jsx("h5", { ref: ref, className: cn(bemElement('modal', 'title'), className), ...props, children: children }));
});
ModalTitle.displayName = 'Modal.Title';
const ModalCloseButton = react.forwardRef(({ className, onClick, ...props }, ref) => {
    return (jsxRuntime.jsx("button", { ref: ref, type: "button", className: cn('btn-close', className), onClick: onClick, "aria-label": "Close", ...props }));
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

const ToastContext = react.createContext(undefined);
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
    const [toasts, setToasts] = react.useState([]);
    const addToast = react.useCallback((toast) => {
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
    const removeToast = react.useCallback((id) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);
    return (jsxRuntime.jsx(ToastContext.Provider, { value: { toasts, addToast, removeToast, position }, children: children }));
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
    const context = react.useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within ToastProvider');
    }
    const { addToast, removeToast } = context;
    const toast = react.useCallback((message, options) => {
        return addToast({ message, ...options });
    }, [addToast]);
    const success = react.useCallback((message, options) => {
        return addToast({ message, variant: 'success', ...options });
    }, [addToast]);
    const error = react.useCallback((message, options) => {
        return addToast({ message, variant: 'danger', ...options });
    }, [addToast]);
    const warning = react.useCallback((message, options) => {
        return addToast({ message, variant: 'warning', ...options });
    }, [addToast]);
    const info = react.useCallback((message, options) => {
        return addToast({ message, variant: 'info', ...options });
    }, [addToast]);
    const dismiss = react.useCallback((id) => {
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
    const context = react.useContext(ToastContext);
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
const ToastRoot = react.forwardRef(({ variant = 'primary', id, title, message, icon, dismissible = true, onDismiss, className, children, ...props }, ref) => {
    const classes = cn('toast', 'toast-fade-in', {
        [`toast--${variant}`]: variant,
    }, className);
    return (jsxRuntime.jsxs("div", { ref: ref, className: classes, role: "alert", ...props, children: [icon && jsxRuntime.jsx("div", { className: bemElement('toast', 'icon'), children: icon }), jsxRuntime.jsxs("div", { className: bemElement('toast', 'content'), children: [title && jsxRuntime.jsx("div", { className: bemElement('toast', 'title'), children: title }), message && jsxRuntime.jsx("div", { className: bemElement('toast', 'message'), children: message }), children] }), dismissible && (jsxRuntime.jsx("button", { type: "button", className: bemElement('toast', 'close'), onClick: onDismiss, "aria-label": "Close", children: "\u00D7" }))] }));
});
ToastRoot.displayName = 'Toast';
const ToastIcon = react.forwardRef(({ className, children, ...props }, ref) => {
    return (jsxRuntime.jsx("div", { ref: ref, className: cn(bemElement('toast', 'icon'), className), ...props, children: children }));
});
ToastIcon.displayName = 'Toast.Icon';
const ToastTitle = react.forwardRef(({ className, children, ...props }, ref) => {
    return (jsxRuntime.jsx("div", { ref: ref, className: cn(bemElement('toast', 'title'), className), ...props, children: children }));
});
ToastTitle.displayName = 'Toast.Title';
const ToastMessage = react.forwardRef(({ className, children, ...props }, ref) => {
    return (jsxRuntime.jsx("div", { ref: ref, className: cn(bemElement('toast', 'message'), className), ...props, children: children }));
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
    const container = (jsxRuntime.jsx("div", { className: cn('toast-container', `toast-container--${position}`), children: toasts.map((toast) => (jsxRuntime.jsx(ToastRoot, { id: toast.id, variant: toast.variant, title: toast.title, message: toast.message, icon: toast.icon, onDismiss: () => removeToast(toast.id) }, toast.id))) }));
    return typeof document !== 'undefined' ? reactDom.createPortal(container, document.body) : container;
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
const Input = react.forwardRef(({ size = 'md', isInvalid = false, isValid = false, fullWidth = false, className, disabled, ...props }, ref) => {
    const classes = cn('form-control', {
        [`form-control-${size}`]: size && size !== 'md',
        'is-invalid': isInvalid,
        'is-valid': isValid,
        'w-full': fullWidth,
    }, className);
    return (jsxRuntime.jsx("input", { ref: ref, className: classes, disabled: disabled, "aria-invalid": isInvalid ? 'true' : undefined, ...props }));
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
const Checkbox = react.forwardRef(({ label, labelId, indeterminate = false, className, id, ...props }, ref) => {
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
        return (jsxRuntime.jsxs("div", { className: "form-check", children: [jsxRuntime.jsx("input", { ref: handleRef, type: "checkbox", className: inputClasses, id: inputId, ...props }), jsxRuntime.jsx("label", { className: bemElement('form-check', 'label'), htmlFor: inputId, children: label })] }));
    }
    return (jsxRuntime.jsx("input", { ref: handleRef, type: "checkbox", className: inputClasses, id: inputId, ...props }));
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
const Switch = react.forwardRef(({ label, labelId, className, id, ...props }, ref) => {
    const inputId = id || labelId || `switch-${Math.random().toString(36).substr(2, 9)}`;
    const inputClasses = cn(bemElement('form-check', 'input'), className);
    if (label) {
        return (jsxRuntime.jsxs("div", { className: "form-check form-switch", children: [jsxRuntime.jsx("input", { ref: ref, type: "checkbox", role: "switch", className: inputClasses, id: inputId, ...props }), jsxRuntime.jsx("label", { className: bemElement('form-check', 'label'), htmlFor: inputId, children: label })] }));
    }
    return (jsxRuntime.jsx("div", { className: "form-check form-switch", children: jsxRuntime.jsx("input", { ref: ref, type: "checkbox", role: "switch", className: inputClasses, id: inputId, ...props }) }));
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
const Select = react.forwardRef(({ size = 'md', isInvalid = false, isValid = false, fullWidth = false, className, disabled, children, ...props }, ref) => {
    const classes = cn('form-control', {
        [`form-control-${size}`]: size && size !== 'md',
        'is-invalid': isInvalid,
        'is-valid': isValid,
        'w-full': fullWidth,
    }, className);
    return (jsxRuntime.jsx("select", { ref: ref, className: classes, disabled: disabled, "aria-invalid": isInvalid ? 'true' : undefined, ...props, children: children }));
});
Select.displayName = 'Select';

/**
 * Navbar root component
 */
const NavbarRoot = react.forwardRef(({ dark = false, className, children, ...props }, ref) => {
    const classes = cn('navbar', { 'navbar--dark': dark }, className);
    return (jsxRuntime.jsx("nav", { ref: ref, className: classes, ...props, children: children }));
});
NavbarRoot.displayName = 'Navbar';
const NavbarBrand = react.forwardRef(({ className, children, ...props }, ref) => {
    const classes = cn(bemElement('navbar', 'brand'), className);
    return (jsxRuntime.jsx("a", { ref: ref, className: classes, ...props, children: children }));
});
NavbarBrand.displayName = 'Navbar.Brand';
const NavbarNav = react.forwardRef(({ className, children, ...props }, ref) => {
    const classes = cn(bemElement('navbar', 'nav'), className);
    return (jsxRuntime.jsx("ul", { ref: ref, className: classes, ...props, children: children }));
});
NavbarNav.displayName = 'Navbar.Nav';
const NavbarItem = react.forwardRef(({ className, children, ...props }, ref) => {
    const classes = cn(bemElement('navbar', 'item'), className);
    return (jsxRuntime.jsx("li", { ref: ref, className: classes, ...props, children: children }));
});
NavbarItem.displayName = 'Navbar.Item';
const NavbarLink = react.forwardRef(({ active = false, className, children, ...props }, ref) => {
    const classes = cn(bemElement('navbar', 'link'), { [bemModifier(bemElement('navbar', 'link'), 'active')]: active }, className);
    return (jsxRuntime.jsx("a", { ref: ref, className: classes, "aria-current": active ? 'page' : undefined, ...props, children: children }));
});
NavbarLink.displayName = 'Navbar.Link';
// Export compound component
const Navbar = Object.assign(NavbarRoot, {
    Brand: NavbarBrand,
    Nav: NavbarNav,
    Item: NavbarItem,
    Link: NavbarLink,
});

const TabsContext = react.createContext(undefined);
const useTabsContext = () => {
    const context = react.useContext(TabsContext);
    if (!context) {
        throw new Error('Tabs compound components must be used within a Tabs component');
    }
    return context;
};
const TabsRoot = react.forwardRef(({ activeTab: controlledActiveTab, defaultActiveTab, onTabChange, variant = 'default', alignment = 'left', orientation = 'horizontal', className, children, ...props }, ref) => {
    const [uncontrolledActiveTab, setUncontrolledActiveTab] = react.useState(defaultActiveTab || '');
    const isControlled = controlledActiveTab !== undefined;
    const activeTab = isControlled ? controlledActiveTab : uncontrolledActiveTab;
    const setActiveTab = react.useCallback((tabId) => {
        if (!isControlled) {
            setUncontrolledActiveTab(tabId);
        }
        onTabChange?.(tabId);
    }, [isControlled, onTabChange]);
    const classes = cn('tabs', {
        [`tabs--${variant}`]: variant !== 'default',
        [`tabs--${alignment}`]: alignment !== 'left',
        [`tabs--${orientation}`]: orientation !== 'horizontal',
    }, className);
    return (jsxRuntime.jsx(TabsContext.Provider, { value: { activeTab, setActiveTab, variant, orientation }, children: jsxRuntime.jsx("div", { ref: ref, className: classes, ...props, children: children }) }));
});
TabsRoot.displayName = 'Tabs';
const TabsNav = react.forwardRef(({ className, children, ...props }, ref) => {
    const classes = cn(bemElement('tabs', 'nav'), className);
    return (jsxRuntime.jsx("ul", { ref: ref, className: classes, role: "tablist", ...props, children: children }));
});
TabsNav.displayName = 'Tabs.Nav';
const TabsItem = react.forwardRef(({ className, children, ...props }, ref) => {
    const classes = cn(bemElement('tabs', 'item'), className);
    return (jsxRuntime.jsx("li", { ref: ref, className: classes, ...props, children: children }));
});
TabsItem.displayName = 'Tabs.Item';
const TabsLink = react.forwardRef(({ tabId, asAnchor = false, href, className, children, disabled, onClick, ...props }, ref) => {
    const { activeTab, setActiveTab } = useTabsContext();
    const isActive = activeTab === tabId;
    const classes = cn(bemElement('tabs', 'link'), { [bemModifier(bemElement('tabs', 'link'), 'active')]: isActive }, className);
    const handleClick = (e) => {
        if (!disabled) {
            setActiveTab(tabId);
            onClick?.(e);
        }
    };
    if (asAnchor) {
        return (jsxRuntime.jsx("a", { ref: ref, href: href || `#${tabId}`, className: classes, role: "tab", "aria-selected": isActive, "aria-controls": tabId, tabIndex: isActive ? 0 : -1, onClick: handleClick, ...props, children: children }));
    }
    return (jsxRuntime.jsx("button", { ref: ref, type: "button", className: classes, role: "tab", "aria-selected": isActive, "aria-controls": tabId, tabIndex: isActive ? 0 : -1, disabled: disabled, onClick: handleClick, ...props, children: children }));
});
TabsLink.displayName = 'Tabs.Link';
const TabsContent = react.forwardRef(({ className, children, ...props }, ref) => {
    const classes = cn(bemElement('tabs', 'content'), className);
    return (jsxRuntime.jsx("div", { ref: ref, className: classes, ...props, children: children }));
});
TabsContent.displayName = 'Tabs.Content';
const TabsPane = react.forwardRef(({ tabId, keepMounted = false, className, children, ...props }, ref) => {
    const { activeTab } = useTabsContext();
    const isActive = activeTab === tabId;
    const classes = cn(bemElement('tabs', 'pane'), { [bemModifier(bemElement('tabs', 'pane'), 'active')]: isActive }, className);
    if (!keepMounted && !isActive) {
        return null;
    }
    return (jsxRuntime.jsx("div", { ref: ref, className: classes, role: "tabpanel", id: tabId, "aria-labelledby": `${tabId}-tab`, ...props, children: children }));
});
TabsPane.displayName = 'Tabs.Pane';
// Export compound component
const Tabs = Object.assign(TabsRoot, {
    Nav: TabsNav,
    Item: TabsItem,
    Link: TabsLink,
    Content: TabsContent,
    Pane: TabsPane,
});

const AccordionContext = react.createContext(undefined);
const useAccordionContext = () => {
    const context = react.useContext(AccordionContext);
    if (!context) {
        throw new Error('Accordion compound components must be used within an Accordion component');
    }
    return context;
};
const AccordionRoot = react.forwardRef(({ allowMultiple = false, defaultOpenItems = [], openItems: controlledOpenItems, onItemsChange, variant = 'default', className, children, ...props }, ref) => {
    const [uncontrolledOpenItems, setUncontrolledOpenItems] = react.useState(new Set(defaultOpenItems));
    const isControlled = controlledOpenItems !== undefined;
    const openItems = isControlled ? new Set(controlledOpenItems) : uncontrolledOpenItems;
    const toggleItem = react.useCallback((id) => {
        const newOpenItems = new Set(openItems);
        if (newOpenItems.has(id)) {
            newOpenItems.delete(id);
        }
        else {
            if (!allowMultiple) {
                newOpenItems.clear();
            }
            newOpenItems.add(id);
        }
        if (!isControlled) {
            setUncontrolledOpenItems(newOpenItems);
        }
        onItemsChange?.(Array.from(newOpenItems));
    }, [openItems, allowMultiple, isControlled, onItemsChange]);
    const classes = cn('accordion', { [`accordion--${variant}`]: variant !== 'default' }, className);
    return (jsxRuntime.jsx(AccordionContext.Provider, { value: { openItems, toggleItem, variant, allowMultiple }, children: jsxRuntime.jsx("div", { ref: ref, className: classes, ...props, children: children }) }));
});
AccordionRoot.displayName = 'Accordion';
const AccordionItem = react.forwardRef(({ itemId, className, children, ...props }, ref) => {
    const { openItems } = useAccordionContext();
    const isOpen = openItems.has(itemId);
    const classes = cn(bemElement('accordion', 'item'), { [bemModifier(bemElement('accordion', 'item'), 'active')]: isOpen }, className);
    return (jsxRuntime.jsx("div", { ref: ref, className: classes, ...props, children: children }));
});
AccordionItem.displayName = 'Accordion.Item';
const AccordionButton = react.forwardRef(({ itemId, className, children, onClick, ...props }, ref) => {
    const { openItems, toggleItem } = useAccordionContext();
    const isOpen = openItems.has(itemId);
    const classes = cn(bemElement('accordion', 'button'), className);
    const handleClick = (e) => {
        toggleItem(itemId);
        onClick?.(e);
    };
    return (jsxRuntime.jsx("button", { ref: ref, type: "button", className: classes, onClick: handleClick, "aria-expanded": isOpen, "aria-controls": `accordion-body-${itemId}`, id: `accordion-button-${itemId}`, ...props, children: children }));
});
AccordionButton.displayName = 'Accordion.Button';
const AccordionTitle = react.forwardRef(({ className, children, ...props }, ref) => {
    const classes = cn(bemElement('accordion', 'title'), className);
    return (jsxRuntime.jsx("div", { ref: ref, className: classes, ...props, children: children }));
});
AccordionTitle.displayName = 'Accordion.Title';
const AccordionIcon = react.forwardRef(({ icon, className, children, ...props }, ref) => {
    const classes = cn(bemElement('accordion', 'icon'), className);
    return (jsxRuntime.jsx("span", { ref: ref, className: classes, "aria-hidden": "true", ...props, children: icon || children || '▼' }));
});
AccordionIcon.displayName = 'Accordion.Icon';
const AccordionBody = react.forwardRef(({ itemId, className, children, ...props }, ref) => {
    const classes = cn(bemElement('accordion', 'body'), className);
    return (jsxRuntime.jsx("div", { ref: ref, className: classes, id: `accordion-body-${itemId}`, "aria-labelledby": `accordion-button-${itemId}`, role: "region", ...props, children: children }));
});
AccordionBody.displayName = 'Accordion.Body';
const AccordionContent = react.forwardRef(({ className, children, ...props }, ref) => {
    const classes = cn(bemElement('accordion', 'content'), className);
    return (jsxRuntime.jsx("div", { ref: ref, className: classes, ...props, children: children }));
});
AccordionContent.displayName = 'Accordion.Content';
// Export compound component
const Accordion = Object.assign(AccordionRoot, {
    Item: AccordionItem,
    Button: AccordionButton,
    Title: AccordionTitle,
    Icon: AccordionIcon,
    Body: AccordionBody,
    Content: AccordionContent,
});

const DropdownContext = react.createContext(undefined);
const useDropdownContext = () => {
    const context = react.useContext(DropdownContext);
    if (!context) {
        throw new Error('Dropdown compound components must be used within a Dropdown component');
    }
    return context;
};
const DropdownRoot = react.forwardRef(({ isOpen: controlledIsOpen, defaultOpen = false, onOpenChange, closeOnClickOutside = true, closeOnEscape = true, className, children, ...props }, ref) => {
    const [uncontrolledIsOpen, setUncontrolledIsOpen] = react.useState(defaultOpen);
    const isControlled = controlledIsOpen !== undefined;
    const isOpen = isControlled ? controlledIsOpen : uncontrolledIsOpen;
    const dropdownRef = react.useRef(null);
    const open = react.useCallback(() => {
        if (!isControlled) {
            setUncontrolledIsOpen(true);
        }
        onOpenChange?.(true);
    }, [isControlled, onOpenChange]);
    const close = react.useCallback(() => {
        if (!isControlled) {
            setUncontrolledIsOpen(false);
        }
        onOpenChange?.(false);
    }, [isControlled, onOpenChange]);
    const toggle = react.useCallback(() => {
        if (isOpen) {
            close();
        }
        else {
            open();
        }
    }, [isOpen, open, close]);
    // Click outside handler
    react.useEffect(() => {
        if (!closeOnClickOutside || !isOpen)
            return;
        const handleClickOutside = (event) => {
            const target = event.target;
            if (dropdownRef.current && !dropdownRef.current.contains(target)) {
                close();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, close, closeOnClickOutside]);
    // Escape key handler
    react.useEffect(() => {
        if (!closeOnEscape || !isOpen)
            return;
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                close();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, close, closeOnEscape]);
    const classes = cn('dropdown', { 'dropdown--show': isOpen }, className);
    return (jsxRuntime.jsx(DropdownContext.Provider, { value: { isOpen, open, close, toggle }, children: jsxRuntime.jsx("div", { ref: ref || dropdownRef, className: classes, ...props, children: children }) }));
});
DropdownRoot.displayName = 'Dropdown';
const DropdownToggle = react.forwardRef(({ variant, showCaret = true, className, children, onClick, ...props }, ref) => {
    const { isOpen, toggle } = useDropdownContext();
    const classes = cn(bemElement('dropdown', 'toggle'), { [bemModifier(bemElement('dropdown', 'toggle'), variant)]: variant }, className);
    const handleClick = (e) => {
        toggle();
        onClick?.(e);
    };
    return (jsxRuntime.jsxs("button", { ref: ref, type: "button", className: classes, onClick: handleClick, "aria-expanded": isOpen, "aria-haspopup": "true", ...props, children: [children, showCaret && jsxRuntime.jsx("span", { className: "caret" })] }));
});
DropdownToggle.displayName = 'Dropdown.Toggle';
const DropdownMenu = react.forwardRef(({ placement = 'bottom-start', size = 'md', className, children, ...props }, ref) => {
    const { isOpen } = useDropdownContext();
    const placementClass = (() => {
        switch (placement) {
            case 'bottom-end':
                return bemModifier(bemElement('dropdown', 'menu'), 'right');
            case 'bottom-center':
                return bemModifier(bemElement('dropdown', 'menu'), 'center');
            case 'top-start':
            case 'top-end':
                return bemModifier(bemElement('dropdown', 'menu'), 'up');
            case 'start':
                return bemModifier(bemElement('dropdown', 'menu'), 'start');
            case 'end':
                return bemModifier(bemElement('dropdown', 'menu'), 'end');
            default:
                return undefined;
        }
    })();
    const classes = cn(bemElement('dropdown', 'menu'), {
        [bemModifier(bemElement('dropdown', 'menu'), 'show')]: isOpen,
        [bemModifier(bemElement('dropdown', 'menu'), size)]: size !== 'md',
        [placementClass]: placementClass,
    }, className);
    return (jsxRuntime.jsx("div", { ref: ref, className: classes, role: "menu", ...props, children: children }));
});
DropdownMenu.displayName = 'Dropdown.Menu';
const DropdownItem = react.forwardRef(({ active = false, danger = false, closeOnClick = true, className, children, onClick, disabled, ...props }, ref) => {
    const { close } = useDropdownContext();
    const classes = cn(bemElement('dropdown', 'item'), {
        [bemModifier(bemElement('dropdown', 'item'), 'active')]: active,
        [bemModifier(bemElement('dropdown', 'item'), 'danger')]: danger,
        [bemModifier(bemElement('dropdown', 'item'), 'disabled')]: disabled,
    }, className);
    const handleClick = (e) => {
        if (!disabled) {
            onClick?.(e);
            if (closeOnClick) {
                close();
            }
        }
    };
    return (jsxRuntime.jsx("button", { ref: ref, type: "button", className: classes, role: "menuitem", onClick: handleClick, disabled: disabled, ...props, children: children }));
});
DropdownItem.displayName = 'Dropdown.Item';
const DropdownHeader = react.forwardRef(({ className, children, ...props }, ref) => {
    const classes = cn(bemElement('dropdown', 'header'), className);
    return (jsxRuntime.jsx("div", { ref: ref, className: classes, ...props, children: children }));
});
DropdownHeader.displayName = 'Dropdown.Header';
const DropdownDivider = react.forwardRef(({ className, ...props }, ref) => {
    const classes = cn(bemElement('dropdown', 'divider'), className);
    return jsxRuntime.jsx("hr", { ref: ref, className: classes, ...props });
});
DropdownDivider.displayName = 'Dropdown.Divider';
const DropdownText = react.forwardRef(({ className, children, ...props }, ref) => {
    const classes = cn(bemElement('dropdown', 'text'), className);
    return (jsxRuntime.jsx("div", { ref: ref, className: classes, ...props, children: children }));
});
DropdownText.displayName = 'Dropdown.Text';
// Export compound component
const Dropdown = Object.assign(DropdownRoot, {
    Toggle: DropdownToggle,
    Menu: DropdownMenu,
    Item: DropdownItem,
    Header: DropdownHeader,
    Divider: DropdownDivider,
    Text: DropdownText,
});

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
const TableRoot = react.forwardRef(({ striped = false, bordered = false, borderless = false, hover = false, size = 'md', responsive = false, className, children, ...props }, ref) => {
    const classes = cn('table', {
        'table--striped': striped,
        'table--bordered': bordered,
        'table--borderless': borderless,
        'table--hover': hover,
        [`table--${size}`]: size !== 'md',
    }, className);
    const table = (jsxRuntime.jsx("table", { ref: ref, className: classes, ...props, children: children }));
    if (responsive) {
        return jsxRuntime.jsx("div", { className: "table-responsive", children: table });
    }
    return table;
});
TableRoot.displayName = 'Table';
const TableHead = react.forwardRef(({ className, children, ...props }, ref) => {
    return (jsxRuntime.jsx("thead", { ref: ref, className: className, ...props, children: children }));
});
TableHead.displayName = 'Table.Head';
const TableBody = react.forwardRef(({ className, children, ...props }, ref) => {
    return (jsxRuntime.jsx("tbody", { ref: ref, className: className, ...props, children: children }));
});
TableBody.displayName = 'Table.Body';
const TableFoot = react.forwardRef(({ className, children, ...props }, ref) => {
    return (jsxRuntime.jsx("tfoot", { ref: ref, className: className, ...props, children: children }));
});
TableFoot.displayName = 'Table.Foot';
const TableRow = react.forwardRef(({ className, children, ...props }, ref) => {
    return (jsxRuntime.jsx("tr", { ref: ref, className: className, ...props, children: children }));
});
TableRow.displayName = 'Table.Row';
const TableTh = react.forwardRef(({ className, children, ...props }, ref) => {
    return (jsxRuntime.jsx("th", { ref: ref, className: className, ...props, children: children }));
});
TableTh.displayName = 'Table.Th';
const TableTd = react.forwardRef(({ className, children, ...props }, ref) => {
    return (jsxRuntime.jsx("td", { ref: ref, className: className, ...props, children: children }));
});
TableTd.displayName = 'Table.Td';
// Export compound component
const Table = Object.assign(TableRoot, {
    Head: TableHead,
    Body: TableBody,
    Foot: TableFoot,
    Row: TableRow,
    Th: TableTh,
    Td: TableTd,
});

const StatsCardRoot = react.forwardRef(({ variant, compact = false, horizontal = false, className, children, ...props }, ref) => {
    const classes = cn('stats-card', {
        [`stats-card--${variant}`]: variant,
        'stats-card--compact': compact,
        'stats-card--horizontal': horizontal,
    }, className);
    return (jsxRuntime.jsx("div", { ref: ref, className: classes, ...props, children: children }));
});
StatsCardRoot.displayName = 'StatsCard';
const StatsCardBody = react.forwardRef(({ className, children, ...props }, ref) => {
    const classes = cn(bemElement('stats-card', 'body'), className);
    return (jsxRuntime.jsx("div", { ref: ref, className: classes, ...props, children: children }));
});
StatsCardBody.displayName = 'StatsCard.Body';
const StatsCardContent = react.forwardRef(({ className, children, ...props }, ref) => {
    const classes = cn(bemElement('stats-card', 'content'), className);
    return (jsxRuntime.jsx("div", { ref: ref, className: classes, ...props, children: children }));
});
StatsCardContent.displayName = 'StatsCard.Content';
const StatsCardIcon = react.forwardRef(({ className, children, ...props }, ref) => {
    const classes = cn(bemElement('stats-card', 'icon'), className);
    return (jsxRuntime.jsx("div", { ref: ref, className: classes, ...props, children: children }));
});
StatsCardIcon.displayName = 'StatsCard.Icon';
const StatsCardLabel = react.forwardRef(({ className, children, ...props }, ref) => {
    const classes = cn(bemElement('stats-card', 'label'), className);
    return (jsxRuntime.jsx("span", { ref: ref, className: classes, ...props, children: children }));
});
StatsCardLabel.displayName = 'StatsCard.Label';
const StatsCardValue = react.forwardRef(({ className, children, ...props }, ref) => {
    const classes = cn(bemElement('stats-card', 'value'), className);
    return (jsxRuntime.jsx("span", { ref: ref, className: classes, ...props, children: children }));
});
StatsCardValue.displayName = 'StatsCard.Value';
const StatsCardChange = react.forwardRef(({ type, className, children, ...props }, ref) => {
    const classes = cn(bemElement('stats-card', 'change'), { [bemModifier(bemElement('stats-card', 'change'), type)]: type }, className);
    return (jsxRuntime.jsx("span", { ref: ref, className: classes, ...props, children: children }));
});
StatsCardChange.displayName = 'StatsCard.Change';
const StatsCardDescription = react.forwardRef(({ className, children, ...props }, ref) => {
    const classes = cn(bemElement('stats-card', 'description'), className);
    return (jsxRuntime.jsx("div", { ref: ref, className: classes, ...props, children: children }));
});
StatsCardDescription.displayName = 'StatsCard.Description';
const StatsCardFooter = react.forwardRef(({ className, children, ...props }, ref) => {
    const classes = cn(bemElement('stats-card', 'footer'), className);
    return (jsxRuntime.jsx("div", { ref: ref, className: classes, ...props, children: children }));
});
StatsCardFooter.displayName = 'StatsCard.Footer';
// Export StatsCard compound component
const StatsCard = Object.assign(StatsCardRoot, {
    Body: StatsCardBody,
    Content: StatsCardContent,
    Icon: StatsCardIcon,
    Label: StatsCardLabel,
    Value: StatsCardValue,
    Change: StatsCardChange,
    Description: StatsCardDescription,
    Footer: StatsCardFooter,
});
const StatsGroup = react.forwardRef(({ columns, className, children, ...props }, ref) => {
    const classes = cn('stats-group', { [`stats-group--${columns}-col`]: columns && columns !== 4 }, className);
    return (jsxRuntime.jsx("div", { ref: ref, className: classes, ...props, children: children }));
});
StatsGroup.displayName = 'StatsGroup';
const StatRoot = react.forwardRef(({ horizontal = false, className, children, ...props }, ref) => {
    const classes = cn('stat', { 'stat--horizontal': horizontal }, className);
    return (jsxRuntime.jsx("div", { ref: ref, className: classes, ...props, children: children }));
});
StatRoot.displayName = 'Stat';
const StatLabel = react.forwardRef(({ className, children, ...props }, ref) => {
    const classes = cn(bemElement('stat', 'label'), className);
    return (jsxRuntime.jsx("span", { ref: ref, className: classes, ...props, children: children }));
});
StatLabel.displayName = 'Stat.Label';
const StatValue = react.forwardRef(({ className, children, ...props }, ref) => {
    const classes = cn(bemElement('stat', 'value'), className);
    return (jsxRuntime.jsx("span", { ref: ref, className: classes, ...props, children: children }));
});
StatValue.displayName = 'Stat.Value';
const StatChange = react.forwardRef(({ type, className, children, ...props }, ref) => {
    const classes = cn(bemElement('stat', 'change'), { [bemModifier(bemElement('stat', 'change'), type)]: type }, className);
    return (jsxRuntime.jsx("span", { ref: ref, className: classes, ...props, children: children }));
});
StatChange.displayName = 'Stat.Change';
// Export Stat compound component
const Stat = Object.assign(StatRoot, {
    Label: StatLabel,
    Value: StatValue,
    Change: StatChange,
});
const ProgressStatRoot = react.forwardRef(({ className, children, ...props }, ref) => {
    const classes = cn('progress-stat', className);
    return (jsxRuntime.jsx("div", { ref: ref, className: classes, ...props, children: children }));
});
ProgressStatRoot.displayName = 'ProgressStat';
const ProgressStatHeader = react.forwardRef(({ className, children, ...props }, ref) => {
    const classes = cn(bemElement('progress-stat', 'header'), className);
    return (jsxRuntime.jsx("div", { ref: ref, className: classes, ...props, children: children }));
});
ProgressStatHeader.displayName = 'ProgressStat.Header';
const ProgressStatLabel = react.forwardRef(({ className, children, ...props }, ref) => {
    const classes = cn(bemElement('progress-stat', 'label'), className);
    return (jsxRuntime.jsx("span", { ref: ref, className: classes, ...props, children: children }));
});
ProgressStatLabel.displayName = 'ProgressStat.Label';
const ProgressStatValue = react.forwardRef(({ className, children, ...props }, ref) => {
    const classes = cn(bemElement('progress-stat', 'value'), className);
    return (jsxRuntime.jsx("span", { ref: ref, className: classes, ...props, children: children }));
});
ProgressStatValue.displayName = 'ProgressStat.Value';
const ProgressStatBar = react.forwardRef(({ className, children, ...props }, ref) => {
    const classes = cn(bemElement('progress-stat', 'bar'), className);
    return (jsxRuntime.jsx("div", { ref: ref, className: classes, ...props, children: children }));
});
ProgressStatBar.displayName = 'ProgressStat.Bar';
const ProgressStatFill = react.forwardRef(({ value, variant, className, style, ...props }, ref) => {
    const classes = cn(bemElement('progress-stat', 'fill'), { [bemModifier(bemElement('progress-stat', 'fill'), variant)]: variant }, className);
    return (jsxRuntime.jsx("div", { ref: ref, className: classes, style: { width: `${Math.min(100, Math.max(0, value))}%`, ...style }, role: "progressbar", "aria-valuenow": value, "aria-valuemin": 0, "aria-valuemax": 100, ...props }));
});
ProgressStatFill.displayName = 'ProgressStat.Fill';
const ProgressStatDescription = react.forwardRef(({ className, children, ...props }, ref) => {
    const classes = cn(bemElement('progress-stat', 'description'), className);
    return (jsxRuntime.jsx("div", { ref: ref, className: classes, ...props, children: children }));
});
ProgressStatDescription.displayName = 'ProgressStat.Description';
// Export ProgressStat compound component
const ProgressStat = Object.assign(ProgressStatRoot, {
    Header: ProgressStatHeader,
    Label: ProgressStatLabel,
    Value: ProgressStatValue,
    Bar: ProgressStatBar,
    Fill: ProgressStatFill,
    Description: ProgressStatDescription,
});

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
const BreadcrumbRoot = react.forwardRef(({ className, children, ...props }, ref) => {
    const classes = cn('breadcrumb', className);
    return (jsxRuntime.jsx("nav", { ref: ref, "aria-label": "breadcrumb", ...props, children: jsxRuntime.jsx("ol", { className: classes, children: children }) }));
});
BreadcrumbRoot.displayName = 'Breadcrumb';
const BreadcrumbItem = react.forwardRef(({ active = false, className, children, ...props }, ref) => {
    const classes = cn(bemElement('breadcrumb', 'item'), { [bemModifier(bemElement('breadcrumb', 'item'), 'active')]: active }, className);
    return (jsxRuntime.jsx("li", { ref: ref, className: classes, "aria-current": active ? 'page' : undefined, ...props, children: children }));
});
BreadcrumbItem.displayName = 'Breadcrumb.Item';
const BreadcrumbLink = react.forwardRef(({ className, children, ...props }, ref) => {
    const classes = cn(bemElement('breadcrumb', 'link'), className);
    return (jsxRuntime.jsx("a", { ref: ref, className: classes, ...props, children: children }));
});
BreadcrumbLink.displayName = 'Breadcrumb.Link';
// Export compound component
const Breadcrumb = Object.assign(BreadcrumbRoot, {
    Item: BreadcrumbItem,
    Link: BreadcrumbLink,
});

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
const PaginationRoot = react.forwardRef(({ className, children, ...props }, ref) => {
    const classes = cn('pagination', className);
    return (jsxRuntime.jsx("nav", { ref: ref, "aria-label": "pagination", ...props, children: jsxRuntime.jsx("ul", { className: classes, children: children }) }));
});
PaginationRoot.displayName = 'Pagination';
const PaginationItem = react.forwardRef(({ active = false, disabled = false, className, children, ...props }, ref) => {
    const classes = cn(bemElement('pagination', 'item'), {
        [bemModifier(bemElement('pagination', 'item'), 'active')]: active,
        [bemModifier(bemElement('pagination', 'item'), 'disabled')]: disabled,
    }, className);
    return (jsxRuntime.jsx("li", { ref: ref, className: classes, ...props, children: children }));
});
PaginationItem.displayName = 'Pagination.Item';
const PaginationLink = react.forwardRef(({ active = false, className, children, ...props }, ref) => {
    const classes = cn(bemElement('pagination', 'link'), className);
    return (jsxRuntime.jsx("a", { ref: ref, className: classes, "aria-current": active ? 'page' : undefined, ...props, children: children }));
});
PaginationLink.displayName = 'Pagination.Link';
// Export compound component
const Pagination = Object.assign(PaginationRoot, {
    Item: PaginationItem,
    Link: PaginationLink,
});

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
    const [isOpen, setIsOpen] = react.useState(defaultOpen);
    const open = react.useCallback(() => {
        setIsOpen(true);
    }, []);
    const close = react.useCallback(() => {
        setIsOpen(false);
    }, []);
    const toggle = react.useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);
    // Handle escape key
    react.useEffect(() => {
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

exports.Accordion = Accordion;
exports.Alert = Alert;
exports.Badge = Badge;
exports.Breadcrumb = Breadcrumb;
exports.Button = Button;
exports.Card = Card;
exports.Checkbox = Checkbox;
exports.Dropdown = Dropdown;
exports.Input = Input;
exports.Modal = Modal;
exports.Navbar = Navbar;
exports.Pagination = Pagination;
exports.ProgressStat = ProgressStat;
exports.Select = Select;
exports.Stat = Stat;
exports.StatsCard = StatsCard;
exports.StatsGroup = StatsGroup;
exports.Switch = Switch;
exports.Table = Table;
exports.Tabs = Tabs;
exports.Toast = Toast;
exports.ToastContainer = ToastContainer;
exports.ToastProvider = ToastProvider;
exports.cn = cn;
exports.useModal = useModal;
exports.useToast = useToast;
exports.useToastContext = useToastContext;
//# sourceMappingURL=index.js.map
