# ValorCSS Examples

This directory contains complete, working examples showcasing ValorCSS components and utilities.

## Available Examples

### 1. Landing Page (`landing.html`)
A modern landing page featuring:
- Hero section with gradient background
- Feature cards grid
- Component previews
- Stats/metrics display
- Call-to-action sections
- Footer with links

**Preview**: Open `landing.html` in your browser to see a complete landing page design.

### 2. Dashboard (`dashboard.html`)
A full admin dashboard interface featuring:
- Sidebar navigation with icons
- Topbar with search and user menu
- Stats cards showing key metrics
- Recent orders table with badges
- Quick actions panel
- Recent activity feed
- Tabbed content sections

**Preview**: Open `dashboard.html` to see a complete admin interface.

### 3. Forms (`forms.html`)
Comprehensive form examples including:
- Basic form inputs
- Input sizes (sm, default, lg)
- Validation states (valid/invalid)
- Select dropdowns
- Checkboxes and radio buttons
- Toggle switches
- Textarea inputs
- Input groups (prepend/append)
- Range sliders
- File uploads
- Floating labels
- Complete registration form example

**Preview**: Open `forms.html` to see all form components in action.

### 4. Components Showcase (`components.html`)
All ValorCSS components in one place:
- Buttons (all variants and sizes)
- Badges (solid, outline, pills)
- Alerts (all colors, dismissible)
- Cards (basic, hover, colored)
- Tables (striped, hover)
- Tabs (default, pills)
- Accordion (collapsible sections)
- Dropdowns (with icons, dividers)
- Breadcrumb navigation
- Pagination
- Modals (with demo)
- Stats cards

**Preview**: Open `components.html` to browse all available components.

## How to Use

1. **Open directly in browser**:
   ```bash
   # Navigate to examples directory
   cd examples

   # Open any example file
   open landing.html        # Mac
   start landing.html       # Windows
   xdg-open landing.html    # Linux
   ```

2. **Run with a local server** (recommended):
   ```bash
   # From the ValorCSS root directory
   npm start
   # or
   yarn start

   # Then visit:
   # http://localhost:3000/examples/landing.html
   # http://localhost:3000/examples/dashboard.html
   # etc.
   ```

## Code Reference

All examples use the compiled CSS from `../dist/main.css`.

To see:
- **Component classes**: Check the HTML files for class usage patterns
- **Utilities**: See how spacing, flexbox, grid, and other utilities are combined
- **Responsive design**: Notice responsive variants like `sm:`, `md:`, `lg:`

## Customization

Feel free to:
- Copy any example as a starting point for your project
- Mix and match components from different examples
- Modify the styles by editing the source SCSS files in `src/`
- Use these as reference for your own implementations

## Tips

- **BEM vs Non-BEM**: Most components support both naming conventions. For example:
  - BEM: `card__header`, `card__body`, `card__footer`
  - Non-BEM: `card-header`, `card-body`, `card-footer`

- **Utilities**: Combine utility classes for rapid development:
  ```html
  <div class="flex justify-between items-center gap-4 p-4">
  ```

- **Responsive**: Use breakpoint prefixes for responsive design:
  ```html
  <div class="block md:flex lg:grid">
  ```

## Browser Compatibility

These examples work in all modern browsers:
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- iOS Safari 12+

## Need Help?

- Check the main [README.md](../README.md) for full documentation
- View the [PLAN.md](../PLAN.md) for detailed implementation specs
- Visit the component source files in `src/components/` to see the SCSS

---

**Built with ValorCSS** - A modern utility-first CSS framework
