import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cn, bemElement, bemModifier } from '../../utils/classNames';
import type { BaseComponentProps, ColorVariant } from '../../types/common';

type ChangeType = 'positive' | 'negative' | 'neutral';

// ============================================
// STATS CARD
// ============================================

export interface StatsCardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
  /**
   * Card variant color
   */
  variant?: ColorVariant;

  /**
   * Compact size
   * @default false
   */
  compact?: boolean;

  /**
   * Horizontal layout
   * @default false
   */
  horizontal?: boolean;
}

const StatsCardRoot = forwardRef<HTMLDivElement, StatsCardProps>(
  ({ variant, compact = false, horizontal = false, className, children, ...props }, ref) => {
    const classes = cn(
      'stats-card',
      {
        [`stats-card--${variant}`]: variant,
        'stats-card--compact': compact,
        'stats-card--horizontal': horizontal,
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

StatsCardRoot.displayName = 'StatsCard';

// StatsCard Body
export interface StatsCardBodyProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {}

const StatsCardBody = forwardRef<HTMLDivElement, StatsCardBodyProps>(({ className, children, ...props }, ref) => {
  const classes = cn(bemElement('stats-card', 'body'), className);
  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  );
});

StatsCardBody.displayName = 'StatsCard.Body';

// StatsCard Content
export interface StatsCardContentProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {}

const StatsCardContent = forwardRef<HTMLDivElement, StatsCardContentProps>(({ className, children, ...props }, ref) => {
  const classes = cn(bemElement('stats-card', 'content'), className);
  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  );
});

StatsCardContent.displayName = 'StatsCard.Content';

// StatsCard Icon
export interface StatsCardIconProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {}

const StatsCardIcon = forwardRef<HTMLDivElement, StatsCardIconProps>(({ className, children, ...props }, ref) => {
  const classes = cn(bemElement('stats-card', 'icon'), className);
  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  );
});

StatsCardIcon.displayName = 'StatsCard.Icon';

// StatsCard Label
export interface StatsCardLabelProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'className'>, BaseComponentProps {}

const StatsCardLabel = forwardRef<HTMLSpanElement, StatsCardLabelProps>(({ className, children, ...props }, ref) => {
  const classes = cn(bemElement('stats-card', 'label'), className);
  return (
    <span ref={ref} className={classes} {...props}>
      {children}
    </span>
  );
});

StatsCardLabel.displayName = 'StatsCard.Label';

// StatsCard Value
export interface StatsCardValueProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'className'>, BaseComponentProps {}

const StatsCardValue = forwardRef<HTMLSpanElement, StatsCardValueProps>(({ className, children, ...props }, ref) => {
  const classes = cn(bemElement('stats-card', 'value'), className);
  return (
    <span ref={ref} className={classes} {...props}>
      {children}
    </span>
  );
});

StatsCardValue.displayName = 'StatsCard.Value';

// StatsCard Change
export interface StatsCardChangeProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'className'>, BaseComponentProps {
  /**
   * Type of change
   */
  type?: ChangeType;
}

const StatsCardChange = forwardRef<HTMLSpanElement, StatsCardChangeProps>(
  ({ type, className, children, ...props }, ref) => {
    const classes = cn(
      bemElement('stats-card', 'change'),
      { [bemModifier(bemElement('stats-card', 'change'), type!)!]: type },
      className
    );
    return (
      <span ref={ref} className={classes} {...props}>
        {children}
      </span>
    );
  }
);

StatsCardChange.displayName = 'StatsCard.Change';

// StatsCard Description
export interface StatsCardDescriptionProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>,
    BaseComponentProps {}

const StatsCardDescription = forwardRef<HTMLDivElement, StatsCardDescriptionProps>(
  ({ className, children, ...props }, ref) => {
    const classes = cn(bemElement('stats-card', 'description'), className);
    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

StatsCardDescription.displayName = 'StatsCard.Description';

// StatsCard Footer
export interface StatsCardFooterProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {}

const StatsCardFooter = forwardRef<HTMLDivElement, StatsCardFooterProps>(({ className, children, ...props }, ref) => {
  const classes = cn(bemElement('stats-card', 'footer'), className);
  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  );
});

StatsCardFooter.displayName = 'StatsCard.Footer';

// Export StatsCard compound component
export const StatsCard = Object.assign(StatsCardRoot, {
  Body: StatsCardBody,
  Content: StatsCardContent,
  Icon: StatsCardIcon,
  Label: StatsCardLabel,
  Value: StatsCardValue,
  Change: StatsCardChange,
  Description: StatsCardDescription,
  Footer: StatsCardFooter,
});

// ============================================
// STATS GROUP
// ============================================

export interface StatsGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
  /**
   * Number of columns
   */
  columns?: 2 | 3 | 4;
}

export const StatsGroup = forwardRef<HTMLDivElement, StatsGroupProps>(
  ({ columns, className, children, ...props }, ref) => {
    const classes = cn(
      'stats-group',
      { [`stats-group--${columns}-col`]: columns && columns !== 4 },
      className
    );

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

StatsGroup.displayName = 'StatsGroup';

// ============================================
// SIMPLE STAT
// ============================================

export interface StatProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
  /**
   * Horizontal layout
   * @default false
   */
  horizontal?: boolean;
}

const StatRoot = forwardRef<HTMLDivElement, StatProps>(
  ({ horizontal = false, className, children, ...props }, ref) => {
    const classes = cn('stat', { 'stat--horizontal': horizontal }, className);

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

StatRoot.displayName = 'Stat';

// Stat Label
export interface StatLabelProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'className'>, BaseComponentProps {}

const StatLabel = forwardRef<HTMLSpanElement, StatLabelProps>(({ className, children, ...props }, ref) => {
  const classes = cn(bemElement('stat', 'label'), className);
  return (
    <span ref={ref} className={classes} {...props}>
      {children}
    </span>
  );
});

StatLabel.displayName = 'Stat.Label';

// Stat Value
export interface StatValueProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'className'>, BaseComponentProps {}

const StatValue = forwardRef<HTMLSpanElement, StatValueProps>(({ className, children, ...props }, ref) => {
  const classes = cn(bemElement('stat', 'value'), className);
  return (
    <span ref={ref} className={classes} {...props}>
      {children}
    </span>
  );
});

StatValue.displayName = 'Stat.Value';

// Stat Change
export interface StatChangeProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'className'>, BaseComponentProps {
  /**
   * Type of change
   */
  type?: ChangeType;
}

const StatChange = forwardRef<HTMLSpanElement, StatChangeProps>(({ type, className, children, ...props }, ref) => {
  const classes = cn(
    bemElement('stat', 'change'),
    { [bemModifier(bemElement('stat', 'change'), type!)!]: type },
    className
  );
  return (
    <span ref={ref} className={classes} {...props}>
      {children}
    </span>
  );
});

StatChange.displayName = 'Stat.Change';

// Export Stat compound component
export const Stat = Object.assign(StatRoot, {
  Label: StatLabel,
  Value: StatValue,
  Change: StatChange,
});

// ============================================
// PROGRESS STAT
// ============================================

export interface ProgressStatProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {}

const ProgressStatRoot = forwardRef<HTMLDivElement, ProgressStatProps>(({ className, children, ...props }, ref) => {
  const classes = cn('progress-stat', className);

  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  );
});

ProgressStatRoot.displayName = 'ProgressStat';

// ProgressStat Header
export interface ProgressStatHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {}

const ProgressStatHeader = forwardRef<HTMLDivElement, ProgressStatHeaderProps>(
  ({ className, children, ...props }, ref) => {
    const classes = cn(bemElement('progress-stat', 'header'), className);
    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

ProgressStatHeader.displayName = 'ProgressStat.Header';

// ProgressStat Label
export interface ProgressStatLabelProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'className'>, BaseComponentProps {}

const ProgressStatLabel = forwardRef<HTMLSpanElement, ProgressStatLabelProps>(
  ({ className, children, ...props }, ref) => {
    const classes = cn(bemElement('progress-stat', 'label'), className);
    return (
      <span ref={ref} className={classes} {...props}>
        {children}
      </span>
    );
  }
);

ProgressStatLabel.displayName = 'ProgressStat.Label';

// ProgressStat Value
export interface ProgressStatValueProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'className'>, BaseComponentProps {}

const ProgressStatValue = forwardRef<HTMLSpanElement, ProgressStatValueProps>(
  ({ className, children, ...props }, ref) => {
    const classes = cn(bemElement('progress-stat', 'value'), className);
    return (
      <span ref={ref} className={classes} {...props}>
        {children}
      </span>
    );
  }
);

ProgressStatValue.displayName = 'ProgressStat.Value';

// ProgressStat Bar
export interface ProgressStatBarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {}

const ProgressStatBar = forwardRef<HTMLDivElement, ProgressStatBarProps>(({ className, children, ...props }, ref) => {
  const classes = cn(bemElement('progress-stat', 'bar'), className);
  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  );
});

ProgressStatBar.displayName = 'ProgressStat.Bar';

// ProgressStat Fill
export interface ProgressStatFillProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>, BaseComponentProps {
  /**
   * Progress percentage (0-100)
   */
  value: number;

  /**
   * Color variant
   */
  variant?: ColorVariant;
}

const ProgressStatFill = forwardRef<HTMLDivElement, ProgressStatFillProps>(
  ({ value, variant, className, style, ...props }, ref) => {
    const classes = cn(
      bemElement('progress-stat', 'fill'),
      { [bemModifier(bemElement('progress-stat', 'fill'), variant!)!]: variant },
      className
    );

    return (
      <div
        ref={ref}
        className={classes}
        style={{ width: `${Math.min(100, Math.max(0, value))}%`, ...style }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        {...props}
      />
    );
  }
);

ProgressStatFill.displayName = 'ProgressStat.Fill';

// ProgressStat Description
export interface ProgressStatDescriptionProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className'>,
    BaseComponentProps {}

const ProgressStatDescription = forwardRef<HTMLDivElement, ProgressStatDescriptionProps>(
  ({ className, children, ...props }, ref) => {
    const classes = cn(bemElement('progress-stat', 'description'), className);
    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

ProgressStatDescription.displayName = 'ProgressStat.Description';

// Export ProgressStat compound component
export const ProgressStat = Object.assign(ProgressStatRoot, {
  Header: ProgressStatHeader,
  Label: ProgressStatLabel,
  Value: ProgressStatValue,
  Bar: ProgressStatBar,
  Fill: ProgressStatFill,
  Description: ProgressStatDescription,
});
