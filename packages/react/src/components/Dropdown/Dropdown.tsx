import {
  forwardRef,
  HTMLAttributes,
  ButtonHTMLAttributes,
  useState,
  useEffect,
  useRef,
  useCallback,
  createContext,
  useContext,
  ReactNode,
} from 'react';
import { cn, bemElement, bemModifier } from '../../utils/classNames';
import type { BaseComponentProps, ColorVariant } from '../../types/common';

type DropdownPlacement = 'bottom-start' | 'bottom-end' | 'bottom-center' | 'top-start' | 'top-end' | 'start' | 'end';
type DropdownSize = 'sm' | 'md' | 'lg';

// Context for managing dropdown state
interface DropdownContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

const DropdownContext = createContext<DropdownContextValue | undefined>(undefined);

const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('Dropdown compound components must be used within a Dropdown component');
  }
  return context;
};

// Dropdown Root Component
export interface DropdownProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
  /**
   * Whether the dropdown is open (controlled mode)
   */
  isOpen?: boolean;

  /**
   * Default open state (uncontrolled mode)
   * @default false
   */
  defaultOpen?: boolean;

  /**
   * Callback when dropdown open state changes
   */
  onOpenChange?: (isOpen: boolean) => void;

  /**
   * Close dropdown when clicking outside
   * @default true
   */
  closeOnClickOutside?: boolean;

  /**
   * Close dropdown when pressing escape
   * @default true
   */
  closeOnEscape?: boolean;
}

const DropdownRoot = forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      isOpen: controlledIsOpen,
      defaultOpen = false,
      onOpenChange,
      closeOnClickOutside = true,
      closeOnEscape = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [uncontrolledIsOpen, setUncontrolledIsOpen] = useState(defaultOpen);
    const isControlled = controlledIsOpen !== undefined;
    const isOpen = isControlled ? controlledIsOpen : uncontrolledIsOpen;
    const dropdownRef = useRef<HTMLDivElement>(null);

    const open = useCallback(() => {
      if (!isControlled) {
        setUncontrolledIsOpen(true);
      }
      onOpenChange?.(true);
    }, [isControlled, onOpenChange]);

    const close = useCallback(() => {
      if (!isControlled) {
        setUncontrolledIsOpen(false);
      }
      onOpenChange?.(false);
    }, [isControlled, onOpenChange]);

    const toggle = useCallback(() => {
      if (isOpen) {
        close();
      } else {
        open();
      }
    }, [isOpen, open, close]);

    // Click outside handler
    useEffect(() => {
      if (!closeOnClickOutside || !isOpen) return;

      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node;
        if (dropdownRef.current && !dropdownRef.current.contains(target)) {
          close();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, close, closeOnClickOutside]);

    // Escape key handler
    useEffect(() => {
      if (!closeOnEscape || !isOpen) return;

      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          close();
        }
      };

      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, close, closeOnEscape]);

    const classes = cn('dropdown', { 'dropdown--show': isOpen }, className);

    return (
      <DropdownContext.Provider value={{ isOpen, open, close, toggle }}>
        <div ref={ref || dropdownRef} className={classes} {...props}>
          {children}
        </div>
      </DropdownContext.Provider>
    );
  }
);

DropdownRoot.displayName = 'Dropdown';

// Dropdown Toggle Component
export interface DropdownToggleProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>,
    BaseComponentProps {
  /**
   * Button variant
   */
  variant?: ColorVariant;

  /**
   * Show caret icon
   * @default true
   */
  showCaret?: boolean;
}

const DropdownToggle = forwardRef<HTMLButtonElement, DropdownToggleProps>(
  ({ variant, showCaret = true, className, children, onClick, ...props }, ref) => {
    const { isOpen, toggle } = useDropdownContext();

    const classes = cn(
      bemElement('dropdown', 'toggle'),
      { [bemModifier(bemElement('dropdown', 'toggle'), variant!)!]: variant },
      className
    );

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      toggle();
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        type="button"
        className={classes}
        onClick={handleClick}
        aria-expanded={isOpen}
        aria-haspopup="true"
        {...props}
      >
        {children}
        {showCaret && <span className="caret" />}
      </button>
    );
  }
);

DropdownToggle.displayName = 'Dropdown.Toggle';

// Dropdown Menu Component
export interface DropdownMenuProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
  /**
   * Menu placement
   * @default 'bottom-start'
   */
  placement?: DropdownPlacement;

  /**
   * Menu size
   * @default 'md'
   */
  size?: DropdownSize;
}

const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ placement = 'bottom-start', size = 'md', className, children, ...props }, ref) => {
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

    const classes = cn(
      bemElement('dropdown', 'menu'),
      {
        [bemModifier(bemElement('dropdown', 'menu'), 'show')!]: isOpen,
        [bemModifier(bemElement('dropdown', 'menu'), size)!]: size !== 'md',
        [placementClass!]: placementClass,
      },
      className
    );

    return (
      <div ref={ref} className={classes} role="menu" {...props}>
        {children}
      </div>
    );
  }
);

DropdownMenu.displayName = 'Dropdown.Menu';

// Dropdown Item Component
export interface DropdownItemProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>,
    BaseComponentProps {
  /**
   * Whether the item is active
   * @default false
   */
  active?: boolean;

  /**
   * Whether the item is a danger action
   * @default false
   */
  danger?: boolean;

  /**
   * Whether to close dropdown when item is clicked
   * @default true
   */
  closeOnClick?: boolean;
}

const DropdownItem = forwardRef<HTMLButtonElement, DropdownItemProps>(
  ({ active = false, danger = false, closeOnClick = true, className, children, onClick, disabled, ...props }, ref) => {
    const { close } = useDropdownContext();

    const classes = cn(
      bemElement('dropdown', 'item'),
      {
        [bemModifier(bemElement('dropdown', 'item'), 'active')!]: active,
        [bemModifier(bemElement('dropdown', 'item'), 'danger')!]: danger,
        [bemModifier(bemElement('dropdown', 'item'), 'disabled')!]: disabled,
      },
      className
    );

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled) {
        onClick?.(e);
        if (closeOnClick) {
          close();
        }
      }
    };

    return (
      <button ref={ref} type="button" className={classes} role="menuitem" onClick={handleClick} disabled={disabled} {...props}>
        {children}
      </button>
    );
  }
);

DropdownItem.displayName = 'Dropdown.Item';

// Dropdown Header Component
export interface DropdownHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {}

const DropdownHeader = forwardRef<HTMLDivElement, DropdownHeaderProps>(({ className, children, ...props }, ref) => {
  const classes = cn(bemElement('dropdown', 'header'), className);

  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  );
});

DropdownHeader.displayName = 'Dropdown.Header';

// Dropdown Divider Component
export interface DropdownDividerProps extends Omit<HTMLAttributes<HTMLHRElement>, 'className'>, BaseComponentProps {}

const DropdownDivider = forwardRef<HTMLHRElement, DropdownDividerProps>(({ className, ...props }, ref) => {
  const classes = cn(bemElement('dropdown', 'divider'), className);

  return <hr ref={ref} className={classes} {...props} />;
});

DropdownDivider.displayName = 'Dropdown.Divider';

// Dropdown Text Component
export interface DropdownTextProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {}

const DropdownText = forwardRef<HTMLDivElement, DropdownTextProps>(({ className, children, ...props }, ref) => {
  const classes = cn(bemElement('dropdown', 'text'), className);

  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  );
});

DropdownText.displayName = 'Dropdown.Text';

// Export compound component
export const Dropdown = Object.assign(DropdownRoot, {
  Toggle: DropdownToggle,
  Menu: DropdownMenu,
  Item: DropdownItem,
  Header: DropdownHeader,
  Divider: DropdownDivider,
  Text: DropdownText,
});
