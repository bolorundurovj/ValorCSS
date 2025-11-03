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

### Navbar

```tsx
import { Navbar } from '@valorcss/react';

<Navbar>
  <Navbar.Brand href="/">MyApp</Navbar.Brand>
  <Navbar.Nav>
    <Navbar.Item>
      <Navbar.Link href="/" active>Home</Navbar.Link>
    </Navbar.Item>
    <Navbar.Item>
      <Navbar.Link href="/about">About</Navbar.Link>
    </Navbar.Item>
  </Navbar.Nav>
</Navbar>

// Dark variant
<Navbar dark>
  <Navbar.Brand href="/">MyApp</Navbar.Brand>
  <Navbar.Nav>
    <Navbar.Item>
      <Navbar.Link href="/">Home</Navbar.Link>
    </Navbar.Item>
  </Navbar.Nav>
</Navbar>
```

### Tabs

```tsx
import { Tabs } from '@valorcss/react';

function MyTabs() {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <Tabs activeTab={activeTab} onTabChange={setActiveTab}>
      <Tabs.Nav>
        <Tabs.Item>
          <Tabs.Link tabId="tab1">Tab 1</Tabs.Link>
        </Tabs.Item>
        <Tabs.Item>
          <Tabs.Link tabId="tab2">Tab 2</Tabs.Link>
        </Tabs.Item>
      </Tabs.Nav>
      <Tabs.Content>
        <Tabs.Pane tabId="tab1">Content 1</Tabs.Pane>
        <Tabs.Pane tabId="tab2">Content 2</Tabs.Pane>
      </Tabs.Content>
    </Tabs>
  );
}

// Variants
<Tabs variant="pills">...</Tabs>
<Tabs variant="boxed">...</Tabs>
<Tabs variant="card">...</Tabs>

// Orientation
<Tabs orientation="vertical">...</Tabs>

// Alignment
<Tabs alignment="center">...</Tabs>
<Tabs alignment="right">...</Tabs>
<Tabs alignment="justified">...</Tabs>
```

### Accordion

```tsx
import { Accordion } from '@valorcss/react';

<Accordion defaultOpenItems={['item1']}>
  <Accordion.Item itemId="item1">
    <Accordion.Button itemId="item1">
      <Accordion.Title>Section 1</Accordion.Title>
      <Accordion.Icon />
    </Accordion.Button>
    <Accordion.Body itemId="item1">
      <Accordion.Content>Content goes here</Accordion.Content>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item itemId="item2">
    <Accordion.Button itemId="item2">
      <Accordion.Title>Section 2</Accordion.Title>
      <Accordion.Icon />
    </Accordion.Button>
    <Accordion.Body itemId="item2">
      <Accordion.Content>More content here</Accordion.Content>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

// Variants
<Accordion variant="flush">...</Accordion>
<Accordion variant="compact">...</Accordion>
<Accordion variant="separated">...</Accordion>

// Allow multiple open
<Accordion allowMultiple>...</Accordion>
```

### Dropdown

```tsx
import { Dropdown } from '@valorcss/react';

<Dropdown>
  <Dropdown.Toggle variant="primary">
    Actions
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Header>Actions</Dropdown.Header>
    <Dropdown.Item>Edit</Dropdown.Item>
    <Dropdown.Item>Duplicate</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item danger>Delete</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

// Placements
<Dropdown.Menu placement="bottom-end">...</Dropdown.Menu>
<Dropdown.Menu placement="top-start">...</Dropdown.Menu>

// Sizes
<Dropdown.Menu size="sm">...</Dropdown.Menu>
<Dropdown.Menu size="lg">...</Dropdown.Menu>

// Active state
<Dropdown.Item active>Current</Dropdown.Item>
```

### Table

```tsx
import { Table } from '@valorcss/react';

<Table striped hover>
  <Table.Head>
    <Table.Row>
      <Table.Th>Name</Table.Th>
      <Table.Th>Email</Table.Th>
      <Table.Th>Role</Table.Th>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.Td>John Doe</Table.Td>
      <Table.Td>john@example.com</Table.Td>
      <Table.Td>Admin</Table.Td>
    </Table.Row>
    <Table.Row>
      <Table.Td>Jane Smith</Table.Td>
      <Table.Td>jane@example.com</Table.Td>
      <Table.Td>User</Table.Td>
    </Table.Row>
  </Table.Body>
</Table>

// Variants
<Table bordered>...</Table>
<Table borderless>...</Table>
<Table size="sm">...</Table>

// Responsive wrapper
<Table responsive>...</Table>
```

### Stats Cards

```tsx
import { StatsCard, StatsGroup, Stat, ProgressStat } from '@valorcss/react';

// Stats Card
<StatsCard variant="primary">
  <StatsCard.Body>
    <StatsCard.Content>
      <StatsCard.Label>Total Users</StatsCard.Label>
      <StatsCard.Value>1,234</StatsCard.Value>
      <StatsCard.Change type="positive">+12%</StatsCard.Change>
    </StatsCard.Content>
    <StatsCard.Icon>
      👥
    </StatsCard.Icon>
  </StatsCard.Body>
</StatsCard>

// Stats Group
<StatsGroup columns={4}>
  <StatsCard>...</StatsCard>
  <StatsCard>...</StatsCard>
  <StatsCard>...</StatsCard>
  <StatsCard>...</StatsCard>
</StatsGroup>

// Simple Stat
<Stat>
  <Stat.Label>Revenue</Stat.Label>
  <Stat.Value>$45,231</Stat.Value>
  <Stat.Change type="positive">+20.1%</Stat.Change>
</Stat>

// Progress Stat
<ProgressStat>
  <ProgressStat.Header>
    <ProgressStat.Label>Storage Used</ProgressStat.Label>
    <ProgressStat.Value>75%</ProgressStat.Value>
  </ProgressStat.Header>
  <ProgressStat.Bar>
    <ProgressStat.Fill value={75} variant="primary" />
  </ProgressStat.Bar>
  <ProgressStat.Description>75 GB of 100 GB used</ProgressStat.Description>
</ProgressStat>
```

### Breadcrumb

```tsx
import { Breadcrumb } from '@valorcss/react';

<Breadcrumb>
  <Breadcrumb.Item>
    <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
  </Breadcrumb.Item>
  <Breadcrumb.Item>
    <Breadcrumb.Link href="/products">Products</Breadcrumb.Link>
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Current Page</Breadcrumb.Item>
</Breadcrumb>
```

### Pagination

```tsx
import { Pagination } from '@valorcss/react';

<Pagination>
  <Pagination.Item disabled>
    <Pagination.Link href="#" aria-label="Previous">‹</Pagination.Link>
  </Pagination.Item>
  <Pagination.Item active>
    <Pagination.Link href="#">1</Pagination.Link>
  </Pagination.Item>
  <Pagination.Item>
    <Pagination.Link href="#">2</Pagination.Link>
  </Pagination.Item>
  <Pagination.Item>
    <Pagination.Link href="#">3</Pagination.Link>
  </Pagination.Item>
  <Pagination.Item>
    <Pagination.Link href="#" aria-label="Next">›</Pagination.Link>
  </Pagination.Item>
</Pagination>
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

### ✅ All Components Complete (18/18)

**Core Components:**
- **Button** - Variants, sizes, outline, ghost, loading states
- **Card** - Compound component with Header, Body, Footer
- **Badge** - Pill variant support
- **Alert** - Dismissible with callbacks

**Overlay Components:**
- **Modal** - useModal hook, portal rendering, focus management
- **Toast** - useToast hook, ToastProvider, queue management
- **Dropdown** - Click-outside handling, keyboard navigation, placement options

**Form Components:**
- **Input** - Sizes, validation states, full width
- **Checkbox** - Label support, indeterminate state
- **Switch** - Toggle switch with label
- **Select** - Sizes, validation states, full width

**Navigation Components:**
- **Navbar** - Brand, navigation links, dark variant
- **Tabs** - Multiple variants (default, pills, boxed, card), controlled/uncontrolled state
- **Breadcrumb** - Navigation path with active state
- **Pagination** - Page navigation with active/disabled states

**Layout Components:**
- **Accordion** - Multiple variants, single/multiple open modes
- **Table** - Striped, bordered, hover, responsive wrapper

**Data Display:**
- **StatsCard** - Metrics display with icons, variants, compact mode
- **StatsGroup** - Responsive grid layout for stats
- **Stat** - Simple inline statistics
- **ProgressStat** - Progress bars with labels

## License

MIT © Valiant-Joshua Bolorunduro
