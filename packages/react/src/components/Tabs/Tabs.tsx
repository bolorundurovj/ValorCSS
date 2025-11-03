import {
  forwardRef,
  HTMLAttributes,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  LiHTMLAttributes,
  useState,
  createContext,
  useContext,
  ReactNode,
  useCallback,
} from 'react';
import { cn, bemElement, bemModifier } from '../../utils/classNames';
import type { BaseComponentProps } from '../../types/common';

type TabVariant = 'default' | 'pills' | 'boxed' | 'card';
type TabAlignment = 'left' | 'center' | 'right' | 'justified';
type TabOrientation = 'horizontal' | 'vertical';

// Context for managing active tab state
interface TabsContextValue {
  activeTab: string;
  setActiveTab: (id: string) => void;
  variant: TabVariant;
  orientation: TabOrientation;
}

const TabsContext = createContext<TabsContextValue | undefined>(undefined);

const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs compound components must be used within a Tabs component');
  }
  return context;
};

// Tabs Root Component
export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
  /**
   * Currently active tab ID
   */
  activeTab?: string;

  /**
   * Default active tab ID (for uncontrolled mode)
   */
  defaultActiveTab?: string;

  /**
   * Callback when active tab changes
   */
  onTabChange?: (tabId: string) => void;

  /**
   * Tab variant style
   * @default 'default'
   */
  variant?: TabVariant;

  /**
   * Tab alignment
   * @default 'left'
   */
  alignment?: TabAlignment;

  /**
   * Tab orientation
   * @default 'horizontal'
   */
  orientation?: TabOrientation;
}

const TabsRoot = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      activeTab: controlledActiveTab,
      defaultActiveTab,
      onTabChange,
      variant = 'default',
      alignment = 'left',
      orientation = 'horizontal',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [uncontrolledActiveTab, setUncontrolledActiveTab] = useState(defaultActiveTab || '');
    const isControlled = controlledActiveTab !== undefined;
    const activeTab = isControlled ? controlledActiveTab : uncontrolledActiveTab;

    const setActiveTab = useCallback(
      (tabId: string) => {
        if (!isControlled) {
          setUncontrolledActiveTab(tabId);
        }
        onTabChange?.(tabId);
      },
      [isControlled, onTabChange]
    );

    const classes = cn(
      'tabs',
      {
        [`tabs--${variant}`]: variant !== 'default',
        [`tabs--${alignment}`]: alignment !== 'left',
        [`tabs--${orientation}`]: orientation !== 'horizontal',
      },
      className
    );

    return (
      <TabsContext.Provider value={{ activeTab, setActiveTab, variant, orientation }}>
        <div ref={ref} className={classes} {...props}>
          {children}
        </div>
      </TabsContext.Provider>
    );
  }
);

TabsRoot.displayName = 'Tabs';

// Tabs Nav Component (ul element)
export interface TabsNavProps extends Omit<HTMLAttributes<HTMLUListElement>, 'className'>, BaseComponentProps {}

const TabsNav = forwardRef<HTMLUListElement, TabsNavProps>(({ className, children, ...props }, ref) => {
  const classes = cn(bemElement('tabs', 'nav'), className);

  return (
    <ul ref={ref} className={classes} role="tablist" {...props}>
      {children}
    </ul>
  );
});

TabsNav.displayName = 'Tabs.Nav';

// Tabs Item Component (li element)
export interface TabsItemProps extends Omit<LiHTMLAttributes<HTMLLIElement>, 'className'>, BaseComponentProps {}

const TabsItem = forwardRef<HTMLLIElement, TabsItemProps>(({ className, children, ...props }, ref) => {
  const classes = cn(bemElement('tabs', 'item'), className);

  return (
    <li ref={ref} className={classes} {...props}>
      {children}
    </li>
  );
});

TabsItem.displayName = 'Tabs.Item';

// Tabs Link Component (can be button or anchor)
export interface TabsLinkProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>, BaseComponentProps {
  /**
   * Tab ID (required for tab switching)
   */
  tabId: string;

  /**
   * Whether to render as an anchor tag
   * @default false
   */
  asAnchor?: boolean;

  /**
   * Href for anchor tag (only used when asAnchor is true)
   */
  href?: string;
}

const TabsLink = forwardRef<HTMLButtonElement, TabsLinkProps>(
  ({ tabId, asAnchor = false, href, className, children, disabled, onClick, ...props }, ref) => {
    const { activeTab, setActiveTab } = useTabsContext();
    const isActive = activeTab === tabId;

    const classes = cn(
      bemElement('tabs', 'link'),
      { [bemModifier(bemElement('tabs', 'link'), 'active')!]: isActive },
      className
    );

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled) {
        setActiveTab(tabId);
        onClick?.(e);
      }
    };

    if (asAnchor) {
      return (
        <a
          ref={ref as any}
          href={href || `#${tabId}`}
          className={classes}
          role="tab"
          aria-selected={isActive}
          aria-controls={tabId}
          tabIndex={isActive ? 0 : -1}
          onClick={handleClick as any}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        type="button"
        className={classes}
        role="tab"
        aria-selected={isActive}
        aria-controls={tabId}
        tabIndex={isActive ? 0 : -1}
        disabled={disabled}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);

TabsLink.displayName = 'Tabs.Link';

// Tabs Content Component
export interface TabsContentProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {}

const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(({ className, children, ...props }, ref) => {
  const classes = cn(bemElement('tabs', 'content'), className);

  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  );
});

TabsContent.displayName = 'Tabs.Content';

// Tabs Pane Component
export interface TabsPaneProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
  /**
   * Tab ID that this pane corresponds to
   */
  tabId: string;

  /**
   * Whether to keep the pane mounted when inactive
   * @default false
   */
  keepMounted?: boolean;
}

const TabsPane = forwardRef<HTMLDivElement, TabsPaneProps>(
  ({ tabId, keepMounted = false, className, children, ...props }, ref) => {
    const { activeTab } = useTabsContext();
    const isActive = activeTab === tabId;

    const classes = cn(
      bemElement('tabs', 'pane'),
      { [bemModifier(bemElement('tabs', 'pane'), 'active')!]: isActive },
      className
    );

    if (!keepMounted && !isActive) {
      return null;
    }

    return (
      <div ref={ref} className={classes} role="tabpanel" id={tabId} aria-labelledby={`${tabId}-tab`} {...props}>
        {children}
      </div>
    );
  }
);

TabsPane.displayName = 'Tabs.Pane';

// Export compound component
export const Tabs = Object.assign(TabsRoot, {
  Nav: TabsNav,
  Item: TabsItem,
  Link: TabsLink,
  Content: TabsContent,
  Pane: TabsPane,
});
