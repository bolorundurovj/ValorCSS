# ValorCSS

A modern, utility-first CSS framework combining Tailwind CSS's utility approach with Tabler UI's clean, professional aesthetic. Built with SCSS and optimized for production use.

## Features

- **Utility-First Approach**: Comprehensive utility classes for rapid development
- **BEM Components**: Professional UI components following BEM methodology
- **Tabler-Inspired Design**: Clean, subtle aesthetic with gentle shadows and rounded corners
- **Fully Responsive**: Mobile-first design with breakpoint variants
- **Dark Mode Ready**: Built-in dark theme support via CSS custom properties
- **Production Optimized**: PurgeCSS integration for minimal file sizes
- **Developer Friendly**: SCSS-based with clear variable system

## Quick Start

### Installation

1. Clone the repository or download the CSS files:
```bash
git clone git@github.com:bolorundurovj/ValorCSS.git
```

2. Include the CSS in your HTML:
```html
<link rel="stylesheet" href="path/to/dist/main.min.css">
```

### CDN (Coming Soon)
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/valorcss@1.0.0/dist/main.min.css">
```

## File Sizes

- **Development Build**: 149KB (expanded with source maps)
- **Production Build**: 101KB (minified, all utilities and components)
- **Optimized Build**: 32KB (minified + PurgeCSS - **68% reduction!**)

## Usage

### Utility Classes

ValorCSS provides comprehensive utility classes for common CSS properties:

```html
<!-- Spacing -->
<div class="m-4 p-8">Margin and padding</div>

<!-- Display & Flexbox -->
<div class="flex items-center justify-between gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Typography -->
<h1 class="text-3xl font-semibold text-gray-900">Heading</h1>
<p class="text-base text-gray-700 leading-relaxed">Paragraph text</p>

<!-- Colors -->
<div class="bg-primary text-white">Primary background</div>
<div class="bg-success text-white">Success background</div>

<!-- Borders & Shadows -->
<div class="border border-gray-300 rounded-lg shadow-md">Card</div>

<!-- Responsive Design -->
<div class="block md:flex lg:grid">
  Responsive layout
</div>
```

### Components

All components support both BEM and legacy non-BEM naming:

#### Buttons

```html
<!-- Primary button -->
<button class="btn btn-primary">Click me</button>

<!-- Sizes -->
<button class="btn btn-sm btn-primary">Small</button>
<button class="btn btn-primary">Default</button>
<button class="btn btn-lg btn-primary">Large</button>

<!-- Variants -->
<button class="btn btn-outline-primary">Outline</button>
<button class="btn btn-ghost">Ghost</button>

<!-- Loading state -->
<button class="btn btn-primary btn-loading">Loading...</button>
```

#### Cards

```html
<div class="card">
  <div class="card__header">
    <h3 class="card__title">Card Title</h3>
  </div>
  <div class="card__body">
    <p class="card__text">Card content goes here</p>
  </div>
  <div class="card__footer">
    <button class="btn btn-primary">Action</button>
  </div>
</div>

<!-- Hover effect -->
<div class="card card--hover">
  Hover over me
</div>

<!-- Colored cards -->
<div class="card card--primary">Primary card</div>
```

#### Forms

```html
<div class="form-group">
  <label class="form-label">Email address</label>
  <input type="email" class="form-control" placeholder="Enter email">
  <small class="form-hint">We'll never share your email</small>
</div>

<!-- Input sizes -->
<input type="text" class="form-control-sm" placeholder="Small">
<input type="text" class="form-control" placeholder="Default">
<input type="text" class="form-control-lg" placeholder="Large">

<!-- Validation states -->
<input type="text" class="form-control is-valid">
<div class="valid-feedback">Looks good!</div>

<input type="text" class="form-control is-invalid">
<div class="invalid-feedback">Please provide a valid input</div>

<!-- Checkboxes & Radio -->
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="check1">
  <label class="form-check-label" for="check1">Check me</label>
</div>

<!-- Switch -->
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="switch1">
  <label class="form-check-label" for="switch1">Toggle me</label>
</div>
```

#### Alerts

```html
<div class="alert alert--success">
  <strong>Success!</strong> Your action was completed.
</div>

<div class="alert alert--danger alert--dismissible">
  <strong>Error!</strong> Something went wrong.
  <button class="alert__close">&times;</button>
</div>
```

#### Modals

```html
<div class="modal show">
  <div class="modal__dialog">
    <div class="modal__content">
      <div class="modal__header">
        <h5 class="modal__title">Modal Title</h5>
        <button class="btn-close"></button>
      </div>
      <div class="modal__body">
        Modal content goes here
      </div>
      <div class="modal__footer">
        <button class="btn btn-secondary">Close</button>
        <button class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<!-- Sizes -->
<div class="modal__dialog modal__dialog--sm">Small modal</div>
<div class="modal__dialog modal__dialog--lg">Large modal</div>
<div class="modal__dialog modal__dialog--xl">Extra large modal</div>
```

#### Tables

```html
<table class="table table--striped table--hover">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>john@example.com</td>
      <td>Admin</td>
    </tr>
  </tbody>
</table>

<!-- Responsive wrapper -->
<div class="table-responsive">
  <table class="table">...</table>
</div>
```

#### Navigation

```html
<!-- Navbar -->
<nav class="navbar">
  <a href="#" class="navbar__brand">Brand</a>
  <ul class="navbar__nav">
    <li class="navbar__item">
      <a href="#" class="navbar__link navbar__link--active">Home</a>
    </li>
    <li class="navbar__item">
      <a href="#" class="navbar__link">About</a>
    </li>
  </ul>
</nav>

<!-- Breadcrumb -->
<nav class="breadcrumb">
  <div class="breadcrumb__item">
    <a href="#" class="breadcrumb__link">Home</a>
  </div>
  <div class="breadcrumb__item breadcrumb__item--active">
    Current Page
  </div>
</nav>

<!-- Pagination -->
<ul class="pagination">
  <li class="pagination__item pagination__item--disabled">
    <a class="pagination__link">Previous</a>
  </li>
  <li class="pagination__item pagination__item--active">
    <a class="pagination__link">1</a>
  </li>
  <li class="pagination__item">
    <a class="pagination__link">2</a>
  </li>
  <li class="pagination__item">
    <a class="pagination__link">Next</a>
  </li>
</ul>
```

#### Dashboard Layouts

```html
<div class="dashboard">
  <!-- Sidebar -->
  <aside class="sidebar">
    <div class="sidebar__header">
      <a href="#" class="sidebar__brand">Dashboard</a>
    </div>
    <div class="sidebar__body">
      <ul class="sidebar__nav">
        <li class="sidebar__item">
          <a href="#" class="sidebar__link sidebar__link--active">
            <span class="icon">📊</span>
            <span>Dashboard</span>
          </a>
        </li>
        <li class="sidebar__item">
          <a href="#" class="sidebar__link">
            <span class="icon">👤</span>
            <span>Users</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>

  <!-- Main Content -->
  <main class="dashboard__main">
    <div class="topbar">
      <div class="topbar__left">
        <button class="topbar__toggle">☰</button>
        <h1 class="topbar__title">Dashboard</h1>
      </div>
      <div class="topbar__right">
        <div class="topbar__user">
          <img src="avatar.jpg" alt="User">
          <span class="topbar__user-name">John Doe</span>
        </div>
      </div>
    </div>

    <div class="content">
      <!-- Your content here -->
    </div>
  </main>
</div>
```

#### Stats Cards

```html
<div class="stats-group stats-group--4-col">
  <div class="stats-card stats-card--primary">
    <div class="stats-card__body">
      <div class="stats-card__content">
        <span class="stats-card__label">Total Users</span>
        <span class="stats-card__value">1,234</span>
        <span class="stats-card__change stats-card__change--positive">
          ↑ 12.5%
        </span>
      </div>
      <div class="stats-card__icon">📊</div>
    </div>
  </div>
</div>
```

#### Tabs

```html
<div class="tabs">
  <ul class="tabs__nav">
    <li class="tabs__item">
      <button class="tabs__link tabs__link--active">Tab 1</button>
    </li>
    <li class="tabs__item">
      <button class="tabs__link">Tab 2</button>
    </li>
  </ul>
  <div class="tabs__content">
    <div class="tabs__pane tabs__pane--active">Tab 1 content</div>
    <div class="tabs__pane">Tab 2 content</div>
  </div>
</div>

<!-- Pills variant -->
<div class="tabs tabs--pills">...</div>

<!-- Vertical tabs -->
<div class="tabs tabs--vertical">...</div>
```

#### Accordion

```html
<div class="accordion">
  <div class="accordion__item accordion__item--active">
    <button class="accordion__button">
      <span class="accordion__title">Section 1</span>
      <span class="accordion__icon">▼</span>
    </button>
    <div class="accordion__body">
      <div class="accordion__content">Content for section 1</div>
    </div>
  </div>
</div>

<!-- Separated variant -->
<div class="accordion accordion--separated">...</div>
```

#### Dropdowns

```html
<div class="dropdown">
  <button class="dropdown__toggle btn btn-primary">
    Dropdown
    <span class="caret"></span>
  </button>
  <div class="dropdown__menu">
    <a href="#" class="dropdown__item">Action</a>
    <a href="#" class="dropdown__item">Another action</a>
    <div class="dropdown__divider"></div>
    <a href="#" class="dropdown__item">Separated link</a>
  </div>
</div>
```

## Customization

### Using SCSS Variables

ValorCSS is built with SCSS and exposes a comprehensive variable system:

```scss
// Override variables before importing
$primary: #your-color;
$border-radius: 8px;
$font-family: 'Your Font', sans-serif;

@import 'path/to/valorcss/src/styles/main.scss';
```

### CSS Custom Properties

For runtime theming without recompiling:

```css
:root {
  --color-primary: #206bc4;
  --color-secondary: #6c757d;
  --border-radius: 4px;
  --font-family: 'Inter', sans-serif;
}

/* Dark theme */
[data-theme="dark"] {
  --color-primary: #4dabf7;
  --color-secondary: #868e96;
}
```

### Responsive Breakpoints

```scss
$breakpoint-sm: 576px;  // Small devices (landscape phones)
$breakpoint-md: 768px;  // Medium devices (tablets)
$breakpoint-lg: 992px;  // Large devices (desktops)
$breakpoint-xl: 1200px; // Extra large devices (large desktops)
```

Use responsive utilities:
```html
<div class="block sm:flex md:grid lg:grid-cols-3">
  Responsive layout
</div>
```

## Building from Source

### Prerequisites

- Node.js 14+ and Yarn
- Dart Sass

### Development

```bash
# Install dependencies
yarn install

# Watch for changes
yarn watch

# Build development version
yarn build

# Build production version
yarn build:prod

# Build with PurgeCSS optimization
yarn build:purge

# Build all versions
yarn build:all
```

### Production Optimization

ValorCSS uses PurgeCSS to remove unused CSS in production:

1. Update `postcss.config.cjs` to include your template paths
2. Run `yarn build:purge` for optimized build
3. File size reduces from 101KB to ~32KB (68% reduction)

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- iOS Safari 12+
- Chrome for Android (last 2 versions)

## Design Tokens

### Colors

- **Brand Colors**: Blue, Azure, Indigo, Purple, Pink, Red, Orange, Yellow, Lime, Green, Teal, Cyan
- **Gray Scale**: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900
- **Semantic**: Primary, Secondary, Success, Info, Warning, Danger, Light, Dark

### Spacing Scale

Based on Tailwind's spacing scale:
- 0, 1 (4px), 2 (8px), 4 (16px), 8 (32px), 12 (48px), 16 (64px), 20 (80px), 24 (96px), 32 (128px), 40 (160px), 48 (192px), 64 (256px), 80 (320px), 96 (384px)

### Typography

- **Font Sizes**: xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl
- **Font Weights**: light (300), normal (400), medium (500), semibold (600), bold (700)
- **Line Heights**: tight (1.25), normal (1.5), relaxed (1.75), loose (2)

### Shadows

- xs, sm, default, md, lg, xl, inner

### Border Radius

- sm (2px), default (4px), lg (8px), xl (12px), 2xl (16px), full (9999px)

## Documentation

- [Complete Component Documentation](./docs/COMPONENTS.md)
- [Utility Classes Reference](./docs/UTILITIES.md)
- [Customization Guide](./docs/CUSTOMIZATION.md)
- [Examples & Templates](./examples/)

## Contributing

Contributions are welcome! This is a personal project, but feel free to:

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT © Valiant-Joshua Bolorunduro

## Acknowledgments

- Inspired by [Tailwind CSS](https://tailwindcss.com) utility approach
- Design aesthetic inspired by [Tabler UI](https://tabler.io)
- Built for personal use
