# @valorcss/react

React components for ValorCSS - A modern, utility-first CSS framework.

## Installation

```bash
# Using yarn
yarn add @valorcss/react @valorcss/core react react-dom

# Using npm
npm install @valorcss/react @valorcss/core react react-dom
```

## Usage

Import the CSS in your app:

```tsx
import '@valorcss/core/dist/main.css';
```

Then use the components:

```tsx
import { Button, Card, Badge, Alert } from '@valorcss/react';

function App() {
  return (
    <div>
      <Card>
        <Card.Header>
          <Card.Title>Welcome</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>This is a card component.</Card.Text>
          <Badge variant="success">New</Badge>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary">Click me</Button>
        </Card.Footer>
      </Card>

      <Alert variant="info" dismissible>
        This is an info alert!
      </Alert>
    </div>
  );
}
```

## Components

### Button

```tsx
import { Button } from '@valorcss/react';

// Basic usage
<Button variant="primary">Click me</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>

// Variants
<Button variant="success">Success</Button>
<Button variant="danger" outline>Outline</Button>
<Button ghost>Ghost</Button>

// States
<Button loading>Loading...</Button>
<Button disabled>Disabled</Button>
<Button block>Full Width</Button>
```

### Card

```tsx
import { Card } from '@valorcss/react';

<Card variant="primary" hover>
  <Card.Header>
    <Card.Title>Card Title</Card.Title>
  </Card.Header>
  <Card.Body>
    <Card.Text>Card content goes here.</Card.Text>
  </Card.Body>
  <Card.Footer>
    Footer content
  </Card.Footer>
</Card>
```

### Badge

```tsx
import { Badge } from '@valorcss/react';

<Badge variant="primary">Badge</Badge>
<Badge variant="success" pill>5</Badge>
```

### Alert

```tsx
import { Alert } from '@valorcss/react';

<Alert variant="success">
  <strong>Success!</strong> Your action was completed.
</Alert>

<Alert
  variant="danger"
  dismissible
  onDismiss={() => console.log('Dismissed')}
>
  <strong>Error!</strong> Something went wrong.
</Alert>
```

### Modal

```tsx
import { Modal, useModal, Button } from '@valorcss/react';

function MyComponent() {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <Button onClick={open}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={close} size="lg">
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
          <Modal.CloseButton onClick={close} />
        </Modal.Header>
        <Modal.Body>
          Modal content goes here
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>Cancel</Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
```

### Toast

```tsx
import { ToastProvider, ToastContainer, useToast, Button } from '@valorcss/react';

// Wrap your app with ToastProvider
function App() {
  return (
    <ToastProvider position="top-right">
      <MyComponent />
      <ToastContainer />
    </ToastProvider>
  );
}

// Use toasts in your components
function MyComponent() {
  const { success, error, info, warning } = useToast();

  return (
    <div>
      <Button onClick={() => success('Operation completed!')}>
        Show Success Toast
      </Button>
      <Button onClick={() => error('Something went wrong!')}>
        Show Error Toast
      </Button>
      <Button onClick={() => info('FYI: Here is some info', {
        title: 'Information',
        duration: 10000
      })}>
        Show Info Toast with Options
      </Button>
    </div>
  );
}
```

### Form Components

#### Input

```tsx
import { Input } from '@valorcss/react';

// Basic input
<Input type="email" placeholder="Enter email" />

// Sizes
<Input size="sm" placeholder="Small" />
<Input size="lg" placeholder="Large" />

// Validation states
<Input isValid placeholder="Valid input" />
<Input isInvalid placeholder="Invalid input" />

// Full width
<Input fullWidth placeholder="Full width input" />
```

#### Checkbox

```tsx
import { Checkbox } from '@valorcss/react';

// With label
<Checkbox
  label="Remember me"
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
/>

// Without label
<Checkbox checked={isChecked} onChange={handleChange} />

// Indeterminate state
<Checkbox indeterminate label="Select all" />
```

#### Switch

```tsx
import { Switch } from '@valorcss/react';

<Switch
  label="Enable notifications"
  checked={isEnabled}
  onChange={(e) => setIsEnabled(e.target.checked)}
/>
```

#### Select

```tsx
import { Select } from '@valorcss/react';

<Select size="lg" isValid fullWidth>
  <option value="">Choose...</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</Select>
```

## TypeScript

All components are built with TypeScript and include full type definitions.

```tsx
import type { ButtonProps, CardProps } from '@valorcss/react';

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## API Reference

### Common Props

All components support these common props:

- `className` - Additional CSS class names
- `children` - Child elements
- `data-testid` - Test ID for testing

### Color Variants

- `primary`
- `secondary`
- `success`
- `danger`
- `warning`
- `info`
- `light`
- `dark`

### Size Variants

- `sm` - Small
- `md` - Medium (default)
- `lg` - Large
- `xl` - Extra Large

## Development Status

### ✅ Completed Components (10/14)

- **Button** - Variants, sizes, outline, ghost, loading states
- **Card** - Compound component with Header, Body, Footer
- **Badge** - Pill variant support
- **Alert** - Dismissible with callbacks
- **Modal** - useModal hook, portal rendering, focus management
- **Toast** - useToast hook, ToastProvider, queue management
- **Input** - Sizes, validation states, full width
- **Checkbox** - Label support, indeterminate state
- **Switch** - Toggle switch with label
- **Select** - Sizes, validation states, full width

### 🚧 Coming Soon (4/14)

- Navbar
- Tabs
- Accordion
- Dropdown
- Table
- Stats Cards
- Breadcrumb
- Pagination

## License

MIT © Valiant-Joshua Bolorunduro
