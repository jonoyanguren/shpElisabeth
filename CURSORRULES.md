# Shopify Theme Development Guidelines

## Project Structure
```
elisabeth/
├── assets/           # Theme assets (CSS, JS, images)
├── config/          # Theme settings
├── layout/          # Theme layout templates
├── sections/        # Theme sections
├── snippets/        # Reusable liquid snippets
├── templates/       # Page templates
└── src/            # Source files for development
    └── tailwind.css # Tailwind source CSS
```

## Development Setup

### Tailwind CSS
- Source file: `src/tailwind.css`
- Output file: `assets/application.css`
- Run `npm run tailwind` to watch for changes

### Shopify Theme Development
- Run `npm run start` to start theme development
- Theme runs on store: mayka1

## Best Practices

### Liquid Templates
- Use section blocks for customizable content
- Keep snippets small and reusable
- Follow BEM naming convention for classes

### CSS/Tailwind
- Use Tailwind utility classes when possible
- Custom CSS should be in component-specific files
- Follow mobile-first approach

### JavaScript
- Use ES6+ features
- Keep files modular
- Add `type="module"` to script tags

## Commands
```bash
# Start theme development
npm run start

# Watch Tailwind CSS changes
npm run tailwind
```

## Editor Settings
- 2 spaces for indentation
- Max line length: 100 characters
- Automatic trailing whitespace removal
- Files end with newline 