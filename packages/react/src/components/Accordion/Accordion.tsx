import {
  forwardRef,
  HTMLAttributes,
  ButtonHTMLAttributes,
  useState,
  createContext,
  useContext,
  useCallback,
  ReactNode,
} from 'react';
import { cn, bemElement, bemModifier } from '../../utils/classNames';
import type { BaseComponentProps } from '../../types/common';

type AccordionVariant = 'default' | 'flush' | 'compact' | 'lg' | 'separated';

// Context for managing accordion state
interface AccordionContextValue {
  openItems: Set<string>;
  toggleItem: (id: string) => void;
  variant: AccordionVariant;
  allowMultiple: boolean;
}

const AccordionContext = createContext<AccordionContextValue | undefined>(undefined);

const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('Accordion compound components must be used within an Accordion component');
  }
  return context;
};

// Accordion Root Component
export interface AccordionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
  /**
   * Allow multiple items to be open at once
   * @default false
   */
  allowMultiple?: boolean;

  /**
   * Default open item IDs (for uncontrolled mode)
   */
  defaultOpenItems?: string[];

  /**
   * Controlled open item IDs
   */
  openItems?: string[];

  /**
   * Callback when items open/close
   */
  onItemsChange?: (openItems: string[]) => void;

  /**
   * Accordion variant
   * @default 'default'
   */
  variant?: AccordionVariant;
}

const AccordionRoot = forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      allowMultiple = false,
      defaultOpenItems = [],
      openItems: controlledOpenItems,
      onItemsChange,
      variant = 'default',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [uncontrolledOpenItems, setUncontrolledOpenItems] = useState<Set<string>>(
      new Set(defaultOpenItems)
    );
    const isControlled = controlledOpenItems !== undefined;
    const openItems = isControlled ? new Set(controlledOpenItems) : uncontrolledOpenItems;

    const toggleItem = useCallback(
      (id: string) => {
        const newOpenItems = new Set(openItems);

        if (newOpenItems.has(id)) {
          newOpenItems.delete(id);
        } else {
          if (!allowMultiple) {
            newOpenItems.clear();
          }
          newOpenItems.add(id);
        }

        if (!isControlled) {
          setUncontrolledOpenItems(newOpenItems);
        }

        onItemsChange?.(Array.from(newOpenItems));
      },
      [openItems, allowMultiple, isControlled, onItemsChange]
    );

    const classes = cn('accordion', { [`accordion--${variant}`]: variant !== 'default' }, className);

    return (
      <AccordionContext.Provider value={{ openItems, toggleItem, variant, allowMultiple }}>
        <div ref={ref} className={classes} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);

AccordionRoot.displayName = 'Accordion';

// Accordion Item Component
export interface AccordionItemProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
  /**
   * Unique item ID
   */
  itemId: string;
}

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ itemId, className, children, ...props }, ref) => {
    const { openItems } = useAccordionContext();
    const isOpen = openItems.has(itemId);

    const classes = cn(
      bemElement('accordion', 'item'),
      { [bemModifier(bemElement('accordion', 'item'), 'active')!]: isOpen },
      className
    );

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

AccordionItem.displayName = 'Accordion.Item';

// Accordion Button Component
export interface AccordionButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>,
    BaseComponentProps {
  /**
   * Item ID this button controls
   */
  itemId: string;
}

const AccordionButton = forwardRef<HTMLButtonElement, AccordionButtonProps>(
  ({ itemId, className, children, onClick, ...props }, ref) => {
    const { openItems, toggleItem } = useAccordionContext();
    const isOpen = openItems.has(itemId);

    const classes = cn(bemElement('accordion', 'button'), className);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      toggleItem(itemId);
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        type="button"
        className={classes}
        onClick={handleClick}
        aria-expanded={isOpen}
        aria-controls={`accordion-body-${itemId}`}
        id={`accordion-button-${itemId}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

AccordionButton.displayName = 'Accordion.Button';

// Accordion Title Component
export interface AccordionTitleProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {}

const AccordionTitle = forwardRef<HTMLDivElement, AccordionTitleProps>(
  ({ className, children, ...props }, ref) => {
    const classes = cn(bemElement('accordion', 'title'), className);

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

AccordionTitle.displayName = 'Accordion.Title';

// Accordion Icon Component
export interface AccordionIconProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'className'>, BaseComponentProps {
  /**
   * Custom icon to render
   */
  icon?: ReactNode;
}

const AccordionIcon = forwardRef<HTMLSpanElement, AccordionIconProps>(
  ({ icon, className, children, ...props }, ref) => {
    const classes = cn(bemElement('accordion', 'icon'), className);

    return (
      <span ref={ref} className={classes} aria-hidden="true" {...props}>
        {icon || children || '▼'}
      </span>
    );
  }
);

AccordionIcon.displayName = 'Accordion.Icon';

// Accordion Body Component
export interface AccordionBodyProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
  /**
   * Item ID this body corresponds to
   */
  itemId: string;
}

const AccordionBody = forwardRef<HTMLDivElement, AccordionBodyProps>(
  ({ itemId, className, children, ...props }, ref) => {
    const classes = cn(bemElement('accordion', 'body'), className);

    return (
      <div
        ref={ref}
        className={classes}
        id={`accordion-body-${itemId}`}
        aria-labelledby={`accordion-button-${itemId}`}
        role="region"
        {...props}
      >
        {children}
      </div>
    );
  }
);

AccordionBody.displayName = 'Accordion.Body';

// Accordion Content Component (wrapper inside body)
export interface AccordionContentProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>,
    BaseComponentProps {}

const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ className, children, ...props }, ref) => {
    const classes = cn(bemElement('accordion', 'content'), className);

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

AccordionContent.displayName = 'Accordion.Content';

// Export compound component
export const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Button: AccordionButton,
  Title: AccordionTitle,
  Icon: AccordionIcon,
  Body: AccordionBody,
  Content: AccordionContent,
});
